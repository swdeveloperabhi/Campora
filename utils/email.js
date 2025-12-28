import dotenv from "dotenv";
dotenv.config({ path: ".env" }); 

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

export const sendVerificationEmail = async (to, link) => {
  await transporter.sendMail({
    from: `"Campora" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your Campora account",
    html: `
      <h2>Thanks for registering with Campora 🌄 — Verify your email</h2>
      <p>Please verify your email:</p>
      <a href="${link}">Verify Account</a>
    `,
  });
};

export const sendWelcomeEmail = async (to, username) => {
  await transporter.sendMail({
    from: `"Campora" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Welcome to Campora 🎉",
    html: `
      <h2>Hello ${username}!</h2>
      <p>Your account is now verified. Enjoy exploring Campora!</p>
    `,
  });
};
