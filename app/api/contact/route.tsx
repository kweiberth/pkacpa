import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { track, EventName } from '@/utils/analytics';

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
    deviceId,
  } = await request.json();

  track(
    EventName.CONTACT_FORM_SUBMITTED,
    {
      name,
      email,
      subject,
      message,
      honeypot,
    },
    deviceId,
  );

  if (honeypot) {
    track(EventName.CONTACT_FORM_HONEYPOT_CAUGHT, undefined, deviceId);
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    track(
      EventName.CONTACT_FORM_MISSING_FIELDS,
      { name, email, subject, message },
      deviceId,
    );
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'pkacpa.com <noreply@website.pkacpa.com>',
      to: 'info@pkacpa.com',
      replyTo: email,
      subject,
      react: (
        <Email name={name} email={email} subject={subject} message={message} />
      ),
    });

    track(
      EventName.CONTACT_FORM_EMAIL_SENT,
      { name, email, subject, message },
      deviceId,
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);

    track(
      EventName.CONTACT_FORM_EMAIL_FAILED,
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      deviceId,
    );

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
