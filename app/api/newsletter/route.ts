// app/api/newsletter/route.ts - Newsletter subscription endpoint

import { NextRequest, NextResponse } from 'next/server';
import { subscribeNewsletter } from '@/lib/mailchimp';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, firstName, lastName, interest } = body;

        // Validate required fields
        if (!email || !firstName || !lastName) {
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

        // Subscribe to MailChimp
        const result = await subscribeNewsletter(email, firstName, lastName, interest || 'General Information');

        if (result.success) {
            return NextResponse.json({
                success: true,
                message: 'Thank you for subscribing! Check your inbox for a welcome message.',
            });
        } else {
            return NextResponse.json(
                { success: false, message: result.message },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
