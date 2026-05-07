import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
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

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Kunne ikke sende mail",
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});