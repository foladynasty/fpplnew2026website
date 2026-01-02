// lib/mailchimp.ts - MailChimp API Integration

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

interface SubscribeData {
    email: string;
    firstName?: string;
    lastName?: string;
    tags?: string[];
    phone?: string;
    message?: string;
    subject?: string;
}

interface MailchimpResponse {
    success: boolean;
    message: string;
    id?: string;
}

/**
 * Subscribe a new contact to MailChimp audience
 */
export async function subscribeToMailchimp(data: SubscribeData): Promise<MailchimpResponse> {
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
        console.error('MailChimp credentials not configured');
        return { success: false, message: 'Email service not configured' };
    }

    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    try {
        // Check if member already exists
        const emailHash = require('crypto')
            .createHash('md5')
            .update(data.email.toLowerCase())
            .digest('hex');

        const checkResponse = await fetch(
            `${url}/${emailHash}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const memberExists = checkResponse.ok;

        // Prepare merge fields
        const mergeFields: Record<string, string> = {};
        if (data.firstName) mergeFields.FNAME = data.firstName;
        if (data.lastName) mergeFields.LNAME = data.lastName;
        if (data.phone) mergeFields.PHONE = data.phone;
        if (data.subject) mergeFields.SUBJECT = data.subject;
        if (data.message) mergeFields.MESSAGE = data.message.substring(0, 255); // MailChimp limit

        if (memberExists) {
            // Update existing member
            const updateResponse = await fetch(
                `${url}/${emailHash}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        merge_fields: mergeFields,
                        status: 'subscribed',
                    }),
                }
            );

            if (!updateResponse.ok) {
                const error = await updateResponse.json();
                console.error('MailChimp update error:', error);
                return { success: false, message: 'Failed to update subscription' };
            }

            // Add tags if provided
            if (data.tags && data.tags.length > 0) {
                await addTagsToMember(emailHash, data.tags);
            }

            return { success: true, message: 'Subscription updated', id: emailHash };
        } else {
            // Create new member
            const createResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: data.email,
                    status: 'subscribed',
                    merge_fields: mergeFields,
                    tags: data.tags || [],
                }),
            });

            if (!createResponse.ok) {
                const error = await createResponse.json();
                console.error('MailChimp create error:', error);

                if (error.title === 'Member Exists') {
                    return { success: true, message: 'Already subscribed' };
                }
                return { success: false, message: error.detail || 'Failed to subscribe' };
            }

            const result = await createResponse.json();
            return { success: true, message: 'Successfully subscribed', id: result.id };
        }
    } catch (error) {
        console.error('MailChimp error:', error);
        return { success: false, message: 'An error occurred. Please try again.' };
    }
}

/**
 * Add tags to an existing member
 */
async function addTagsToMember(emailHash: string, tags: string[]): Promise<void> {
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${emailHash}/tags`;

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tags: tags.map(tag => ({ name: tag, status: 'active' })),
            }),
        });
    } catch (error) {
        console.error('Error adding tags:', error);
    }
}

/**
 * Subscribe newsletter signup
 */
export async function subscribeNewsletter(
    email: string,
    firstName: string,
    lastName: string,
    interest: string
): Promise<MailchimpResponse> {
    const tags = ['Newsletter Subscriber'];

    // Add interest tag
    if (interest.includes('CFP')) tags.push('CFP Interest');
    else if (interest.includes('SCFP') || interest.includes('HNWI')) tags.push('SCFP-HNWI Interest');
    else if (interest.includes('CPD')) tags.push('CPD Interest');
    else if (interest.includes('Corporate')) tags.push('Corporate Training');

    return subscribeToMailchimp({
        email,
        firstName,
        lastName,
        tags,
    });
}

/**
 * Submit contact enquiry
 */
export async function submitContactEnquiry(
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
): Promise<MailchimpResponse> {
    const [firstName, ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');

    return subscribeToMailchimp({
        email,
        firstName,
        lastName: lastName || undefined,
        phone,
        subject,
        message,
        tags: ['Contact Enquiry', subject],
    });
}
