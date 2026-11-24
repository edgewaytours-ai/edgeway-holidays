import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/data/siteConfig";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const host = (process.env.SMTP_HOST || "smtp.hostinger.com").trim();
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = (process.env.SMTP_USER || "info@edgewayholidays.com").trim();
    let pass = (process.env.SMTP_PASS || "Rifkyshahi1079@#").trim();

    // If dotenv stripped the trailing '#' because '#' is a comment in .env files
    if (pass === "Rifkyshahi1079@" || pass.endsWith("@")) {
      pass = `${pass}#`;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const logoPath = path.join(process.cwd(), "public", "logo.png");
    const hasLocalLogo = fs.existsSync(logoPath);
    const logoSrc = hasLocalLogo
      ? "cid:edgeway-logo"
      : `${siteConfig.url}/logo.png`;
    const logoAttachment = hasLocalLogo
      ? [
          {
            filename: "edgeway-logo.png",
            content: fs.readFileSync(logoPath),
            cid: "edgeway-logo",
            contentDisposition: "inline" as const,
          },
        ]
      : [];

    // 1. Send Welcome Email to the Subscriber
    const welcomeHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background-color: #063D34; padding: 32px 24px; text-align: center;">
          <img src="${logoSrc}" alt="Edgeway Holidays and Tours" width="64" height="64" style="display: block; margin: 0 auto 14px; border-radius: 50%; border: 2px solid #10B981;" />
          <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 800; letter-spacing: -0.5px;">
            EDGEWAY<span style="color: #10B981;"> HOLIDAYS & TOURS</span>
          </h1>
          <p style="color: #a7f3d0; font-size: 13px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 2px;">
            Explore Sri Lanka Differently
          </p>
        </div>
        
        <div style="padding: 32px 24px; color: #1e293b; line-height: 1.6;">
          <h2 style="color: #063D34; font-size: 20px; margin-top: 0;">
            Ayubowan & Welcome to Our Travel Circle! 🌴
          </h2>
          <p>
            Thank you for subscribing to Edgeway Holidays and Tours! You are now on the insider list to receive our latest seasonal Sri Lanka travel guides, hidden beach spots, wildlife migration alerts, and private chauffeur route advice.
          </p>
          
          <div style="background-color: #f8fafc; border-left: 4px solid #10B981; padding: 16px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0; font-weight: bold; color: #063D34;">Need a Custom Itinerary for 2026/2027?</p>
            <p style="margin: 6px 0 0; font-size: 13px; color: #64748b;">
              Our local travel designers in Colombo formulate day-by-day itineraries with private chauffeurs, verified boutique hotels, and zero commission shopping traps.
            </p>
          </div>

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Edgeway%20Holidays%20and%20Tours!%20I%20just%20subscribed%20to%20your%20newsletter%20and%20would%20love%20some%20trip%20advice." 
               style="background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 9999px; font-weight: bold; font-size: 14px; display: inline-block;">
              Chat with Our Tour Designer on WhatsApp
            </a>
          </div>

          <p style="font-size: 13px; color: #64748b; margin-top: 32px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
            Warm regards,<br />
            <strong>The Edgeway Holidays and Tours Team</strong><br />
            Colombo, Sri Lanka · <a href="${siteConfig.url}" style="color: #063D34;">edgewayholidays.com</a>
          </p>
        </div>
      </div>
    `;

    // 2. Send Admin Alert to business owner
    const adminHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 560px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom: 14px;">
          <tr>
            <td style="padding-right: 12px; vertical-align: middle;">
              <img src="${logoSrc}" alt="Edgeway Holidays and Tours" width="40" height="40" style="display: block; border-radius: 50%;" />
            </td>
            <td style="vertical-align: middle;">
              <h3 style="color: #063D34; margin: 0;">🎉 New Newsletter Subscriber</h3>
            </td>
          </tr>
        </table>
        <p><strong>Subscriber Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Date & Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> edgewayholidays.com Footer Newsletter</p>
      </div>
    `;

    // Send subscriber confirmation
    await transporter.sendMail({
      from: `"Edgeway Holidays and Tours" <${user}>`,
      to: email,
      subject: "Welcome to Edgeway Holidays and Tours — Your Sri Lanka Travel Inspiration 🌴",
      html: welcomeHtml,
      attachments: logoAttachment,
    });

    // Send admin notification
    await transporter.sendMail({
      from: `"Edgeway Website" <${user}>`,
      to: user,
      replyTo: email,
      subject: `[New Subscriber] ${email}`,
      html: adminHtml,
      attachments: logoAttachment,
    });

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully! Confirmation email sent.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to process subscription.";
    console.error("Newsletter subscription error:", message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
