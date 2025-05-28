
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedData = contactFormSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ message: 'Invalid form data.', errors: parsedData.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, subject, message } = parsedData.data;

    // Placeholder for actual email sending logic
    console.log('Contact form submission received on server:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Here you would typically integrate an email sending service (e.g., SendGrid, Resend)
    // For example:
    // await sendEmail({ to: 'your-email@example.com', from: email, subject, html: message });

    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'An error occurred while processing your message.' }, { status: 500 });
  }
}
