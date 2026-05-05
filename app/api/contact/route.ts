import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    
    const EMAIL_TO = process.env.EMAIL_TO;
    const EMAIL_FROM = process.env.EMAIL_FROM;

    console.log("RAW ENV:", process.env.EMAIL_TO, process.env.EMAIL_FROM);

    if (!EMAIL_TO || !EMAIL_FROM) {
      console.error("ENV ISSUE:", { EMAIL_TO, EMAIL_FROM });
      throw new Error("Missing email configuration");
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    const response = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

   
    if (response.error) {
      console.error(response.error);
      return Response.json(
        { success: false, error: response.error },
        { status: 400 },
      );
    }

    return Response.json({ success: true, data: response.data });
  } catch (error: any) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
