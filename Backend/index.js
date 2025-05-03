import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "New User Message",
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    if (info.rejected.length) {
      return res.status(500).json({ error: "Failed to send email" });
    }
    res.json({ message: "Email sent successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
