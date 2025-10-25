// src/lib/sendEmail.ts
import { Resend } from 'resend';

import { RESEND_API_KEY } from './secret';

const resend = new Resend(RESEND_API_KEY);

type SendEmailOptions = {
    to: string;
    subject: string;
    text?: string;
};

export async function sendEmail({ to, subject, text }: SendEmailOptions) {
    try {
        const response = await resend.emails.send({
            from: 'Checkpoint <onboarding@resend.dev>',
            to,
            subject,
            html: `<p>${text}</p>`,
        });

        console.log('✅ Email sent:', response);
        return response;
    } catch (error) {
        console.error('❌ Error sending email:', error);
        throw new Error('Failed to send email');
    }
}
