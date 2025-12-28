import dotenv from "dotenv";
dotenv.config({ path: ".env" }); 

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (to, link) => {
  await resend.emails.send({
    from: "Campora <onboarding@resend.dev>",
    to,
    subject: "Verify your Campora account",
    html: `
      <h2>Thanks for registering with Campora 🌄 — Verify your email</h2>
      <p>Please verify your email:</p>
      <a href="${link}">${link}</a>
    `,
  });
};

export const sendWelcomeEmail = async (to, username) => {
  await resend.emails.send({
    from: "Campora <onboarding@resend.dev>",
    to,
    subject: "Welcome to Campora!",
    html: `<h3>Hello ${username}, welcome aboard 🎉</h3>`,
  });
};
