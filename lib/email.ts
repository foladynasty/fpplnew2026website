// lib/email.ts - Email sending via SMTP (Gmail)

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

interface EmailOptions {
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
}

/**
 * Send an email
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        console.error('SMTP credentials not configured');
        return false;
    }

    try {
        const recipients = Array.isArray(options.to) ? options.to.join(', ') : options.to;

        await transporter.sendMail({
            from: `"Financial Perspectives" <${process.env.SMTP_USER}>`,
            to: recipients,
            subject: options.subject,
            text: options.text,
            html: options.html,
        });

        console.log('Email sent successfully to:', recipients);
        return true;
    } catch (error) {
        console.error('Email send error:', error);
        return false;
    }
}

/**
 * Send contact enquiry notification to team
 */
export async function sendEnquiryNotification(
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
): Promise<boolean> {
    const notificationEmails = process.env.NOTIFICATION_EMAILS?.split(',').map(e => e.trim()) || [];

    if (notificationEmails.length === 0) {
        console.warn('No notification emails configured');
        return false;
    }

    const subjectLine = `New Enquiry: ${subject || 'General Enquiry'} from ${name}`;

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #003B73, #0074b7); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Website Enquiry</h1>
      </div>
      
      <div style="padding: 30px; background: #f9f9f9;">
        <h2 style="color: #003B73; margin-top: 0;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              <a href="mailto:${email}" style="color: #0074b7;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              <a href="tel:${phone}" style="color: #0074b7;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject || 'General Enquiry'}</td>
          </tr>
        </table>

        <h3 style="color: #003B73;">Message:</h3>
        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${email}?subject=Re: ${subject || 'Your Enquiry'}" 
             style="display: inline-block; background: #C5A572; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Reply to ${name}
          </a>
        </div>
      </div>
      
      <div style="background: #003B73; padding: 15px; text-align: center; color: white; font-size: 12px;">
        <p style="margin: 0;">This is an automated notification from the Financial Perspectives website.</p>
      </div>
    </div>
  `;

    const textContent = `
New Website Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject || 'General Enquiry'}

Message:
${message}

---
Reply directly to this email or contact ${email}
  `;

    return sendEmail({
        to: notificationEmails,
        subject: subjectLine,
        text: textContent,
        html: htmlContent,
    });
}
