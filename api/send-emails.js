import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: "Meo Studio <onboarding@resend.dev>",
      to: "meostudiodk@gmail.com",
      subject: `Ny besked fra ${name}`,
      html: `
        <h2>Ny kontaktformular besked</h2>

        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Besked:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json(data);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Kunne ikke sende mail",
    });
  }
}