import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const apiKey = process.env.RESEND_API_KEY;
    const recieverEmail = process.env.RECIEVER_EMAIL;

    if (!apiKey) {
      return NextResponse.json({ success: false, error: "Missing Resend API key." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // You can set up a custom sender in Resend dashboard
        to: recieverEmail,
        subject: `[Contact Form] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ success: false, error: error.message || "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
