import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
    <h2>New Message</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p>${message}</p>
  `,
    });

    console.log("RESEND RESPONSE:", data);
    return Response.json({ success: true, data });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
