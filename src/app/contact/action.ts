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

  const date = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date());

  const htmlBody = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background-color:#1a1a1a;padding:28px 32px;border-radius:12px 12px 0 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">T-Renova 57</span><span style="font-size:22px;font-weight:700;color:#C9963A;">.</span>
              </td>
              <td align="right">
                <span style="display:inline-block;background-color:#C9963A;color:#ffffff;font-size:11px;font-weight:600;padding:5px 12px;border-radius:20px;letter-spacing:0.5px;text-transform:uppercase;">Nouveau devis</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Body -->
        <tr><td style="background-color:#ffffff;padding:0;">

          <!-- Intro -->
          <div style="padding:28px 32px 20px;border-bottom:1px solid #f0f0f0;">
            <p style="margin:0;font-size:15px;color:#262626;line-height:1.5;">
              Une nouvelle demande de devis a été soumise via le formulaire de contact.
            </p>
            <p style="margin:8px 0 0;font-size:13px;color:#888;">${date}</p>
          </div>

          <!-- Contact details -->
          <div style="padding:24px 32px;">
            <h3 style="margin:0 0 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C9963A;">Coordonnées du client</h3>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#888;width:140px;vertical-align:top;">Nom complet</td>
                <td style="padding:10px 12px;font-size:14px;color:#262626;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#888;background:#fafafa;border-radius:6px 0 0 6px;vertical-align:top;">Téléphone</td>
                <td style="padding:10px 12px;font-size:14px;color:#262626;background:#fafafa;border-radius:0 6px 6px 0;">
                  <a href="tel:${phone}" style="color:#262626;text-decoration:none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#888;vertical-align:top;">Email</td>
                <td style="padding:10px 12px;font-size:14px;color:#262626;">
                  <a href="mailto:${email}" style="color:#C9963A;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:13px;font-weight:600;color:#888;background:#fafafa;border-radius:6px 0 0 6px;vertical-align:top;">Type de projet</td>
                <td style="padding:10px 12px;font-size:14px;color:#262626;background:#fafafa;border-radius:0 6px 6px 0;">
                  <span style="display:inline-block;background:#FFF8ED;color:#9A7422;font-size:12px;font-weight:600;padding:3px 10px;border-radius:4px;border:1px solid #F0DFB8;">${service}</span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Message -->
          <div style="padding:0 32px 28px;">
            <h3 style="margin:0 0 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#C9963A;">Message</h3>
            <div style="background-color:#fafafa;border:1px solid #eee;border-radius:8px;padding:16px 20px;">
              <p style="margin:0;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- CTA -->
          <div style="padding:0 32px 28px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background-color:#C9963A;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;">Répondre au client</a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background-color:#fafafa;padding:20px 32px;border-top:1px solid #eee;border-radius:0 0 12px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size:12px;color:#aaa;line-height:1.6;">
                <strong style="color:#888;">T-Renova 57</strong><br />
                Rue de Marly, 57950 Montigny-lès-Metz<br />
                07 83 52 38 84
              </td>
              <td align="right" style="font-size:11px;color:#bbb;vertical-align:bottom;">
                Formulaire de contact
              </td>
            </tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
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
      return {
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
      };
    }

    return {
      success: true,
      message: "Votre message a bien été envoyé ! Nous vous recontactons sous 24h.",
    };
  } catch {
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer ou nous appeler directement.",
    };
  }
}
