import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// In-memory storage for OTPs: email -> { otp, expiresAt }
const otpStore = new Map();

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
});

app.post("/send-OTP", (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, { otp, expiresAt: Date.now() + 5 * 60 * 1000 });

  const mailOptions = {
    from: `${name} ${process.env.EMAIL_USER}`,
    to: email,
    subject: "OTP for Verification",
    html: `<pr style="font-family: Arial, sans-serif; font-size: 16px; color: #333;"></pr>
    <strong>Dear ${name},</strong><br><br>
    Your OTP for verification is: <strong>${otp}</strong>.
    <br>
    This OTP is valid for 5 minutes.
    <br><br><br>
    Regards,
    Aditya Singh
    </>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send OTP" });
    } else {
      return res.status(200).json({ message: "OTP sent" });
    }
  });
});

// Verify OTP
app.post("/verify-OTP", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required." });
  }

  const record = otpStore.get(email);

  if (!record) {
    return res.status(400).json({ message: "No OTP found for this email." });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ message: "OTP expired." });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP." });
  }

  otpStore.delete(email); // ✅ OTP is used, delete it
  return res.status(200).json({ message: "Email verified successfully." });
});

app.post("/send-Message", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    html: `<p style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br><br>
    <strong>Message:</strong><br>
    ${message}
    </p>` 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send message" });
    } else {
      return res.status(200).json({ message: "Message sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
