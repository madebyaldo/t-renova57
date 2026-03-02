"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const service = (formData.get("service") as string) || "Non précisé";
  const message = formData.get("message") as string;

  if (!name || !phone || !email || !message) {
    return {
      success: false,
      message: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #262626; border-bottom: 2px solid #C9963A; padding-bottom: 10px;">
        Nouvelle demande de devis
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">Nom</td>
          <td style="padding: 10px 0; color: #262626;">${name}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px; font-weight: bold; color: #555;">Téléphone</td>
          <td style="padding: 10px; color: #262626;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555;">Email</td>
          <td style="padding: 10px 0; color: #262626;">${email}</td>
        </tr>
        <tr style="background: #f9f9f9;">
          <td style="padding: 10px; font-weight: bold; color: #555;">Type de projet</td>
          <td style="padding: 10px; color: #262626;">${service}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
          <td style="padding: 10px 0; color: #262626; white-space: pre-wrap;">${message}</td>
        </tr>
      </table>
      <p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
        Envoyé depuis le formulaire de contact de T-Renova 57
      </p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Demande de devis — ${name} (${service})`,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        message: `Erreur Resend: ${error.message}`,
      };
    }

    return {
      success: true,
      message: "Votre message a bien été envoyé ! Nous vous recontactons sous 24h.",
    };
  } catch (err) {
    console.error("Catch error:", err);
    return {
      success: false,
      message: `Erreur serveur: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}
