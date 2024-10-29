import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return (
    <>
      <div>
        <strong>From</strong>:
      </div>
      <div>{name}</div>
      <div>{email}</div>
      <br />
      <div>
        <strong>Subject</strong>:
      </div>
      <div>{subject}</div>
      <br />
      <div>
        <strong>Message</strong>:
      </div>
      <div>{message}</div>
    </>
  );
};

export async function POST(request: Request) {
  const {
    name,
    email,
    subject,
    message,
    _info: honeypot,
  } = await request.json();

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  try {
    await resend.emails.send({
      from: 'pkacpa.com <noreply@website.pkacpa.com>',
      to: 'info@pkacpa.com ',
      replyTo: email,
      subject,
      react: (
        <Email name={name} email={email} subject={subject} message={message} />
      ),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
