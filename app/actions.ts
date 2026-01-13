"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { success: false, error: '모든 필수 항목을 입력해 주세요.' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Smile Handyman <onboarding@resend.dev>', // Verifying domain will change this later
            to: ['multizer@live.com'],
            subject: `[New Inquiry] ${name} (${phone})`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 10px;">
                    <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">New Inquiry from Website</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-line;">${message}</p>
                    </div>
                    <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
                        This email was sent from the Smile Handyman website contact form.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error('Server Error:', err);
        return { success: false, error: '서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.' };
    }
}
