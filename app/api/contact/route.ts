// app/api/contact/route.ts - Contact form endpoint

import { NextRequest, NextResponse } from 'next/server';
import { submitContactEnquiry } from '@/lib/mailchimp';
import { sendEnquiryNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, contactNumber, subject, message } = body;

        // Validate required fields
        if (!name || !email || !contactNumber || !message) {
            return NextResponse.json(
                { success: false, message: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        // Run both operations in parallel
        const [mailchimpResult, emailSent] = await Promise.all([
            submitContactEnquiry(name, email, contactNumber, subject || 'General Enquiry', message),
            sendEnquiryNotification(name, email, contactNumber, subject || 'General Enquiry', message),
        ]);

        // Log results for debugging
        console.log('MailChimp result:', mailchimpResult);
        console.log('Email notification sent:', emailSent);

        // Return success even if MailChimp fails (email notification is more important)
        if (emailSent || mailchimpResult.success) {
            return NextResponse.json({
                success: true,
                message: 'Thank you for your enquiry! We will get back to you within 1-2 business days.',
            });
        } else {
            return NextResponse.json(
                { success: false, message: 'Failed to submit enquiry. Please try again or contact us directly.' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
