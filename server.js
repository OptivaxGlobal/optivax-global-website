import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Optivax Global email server is running");
});

app.post("/send-email", async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Optivax Global Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Inquiry - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; padding:25px; border-radius:10px;">
            <h2 style="color:#1E1E2A;">New Contact Form Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>

            <hr />

            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    try {
      await transporter.sendMail({
        from: `"Optivax Global" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We’ve Received Your Message | Optivax Global",
        html: `
          <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
            <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">
              
              <div style="background:#1E1E2A; padding:25px; text-align:center;">
                <img src={logo} alt="Optivax Global logo" 
                  alt="Optivax Global Logo" 
                  style="height:55px; max-width:160px; object-fit:contain; margin-bottom:10px;" 
                />
                <h2 style="color:#ffffff; margin:0; font-size:24px;">Optivax Global</h2>
              </div>

              <div style="padding:30px;">
                <h2 style="color:#1E1E2A; margin-top:0;">
                  Thank You for Contacting Optivax Global
                </h2>

                <p>Hi <strong>${name}</strong>,</p>

                <p style="color:#444; line-height:1.6;">
                  Thank you for reaching out to <strong>Optivax Global</strong>.
                  We have successfully received your message regarding 
                  <strong>${service}</strong>.
                </p>

                <p style="color:#444; line-height:1.6;">
                  Our team is reviewing your request and will get back to you shortly.
                </p>

                <div style="background:#f8f9fb; padding:18px; border-radius:10px; margin:22px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Service:</strong> ${service}</p>
                  <p><strong>Your Submitted Message:</strong></p>
                  <p style="margin-bottom:0;">${message}</p>
                </div>

                <div style="text-align:center; margin-top:25px;">
                  <a 
                    href="https://optivaxglobal.com" 
                    style="background:#8B5CF6; color:#ffffff; padding:12px 26px; text-decoration:none; border-radius:8px; font-weight:bold; display:inline-block;"
                  >
                    Visit Our Website
                  </a>
                </div>
                 
                <div style="text-align:center; margin-top:15px;">
  <a 
    href="https://wa.me/13074301006" 
    style="background:#25D366; color:white; padding:10px 20px; text-decoration:none; border-radius:6px;"
  >
    Chat on WhatsApp
  </a>
</div>

                <p style="margin-top:28px; color:#444;">
                  Best regards,<br/>
                  <strong>Optivax Global Team</strong>
                </p>
              </div>

              <div style="background:#f1f1f1; text-align:center; padding:15px; font-size:12px; color:#777;">
                © 2026 Optivax Global | All Rights Reserved
              </div>

            </div>
          </div>
        `,
      });

      console.log("Auto reply sent to:", email);
    } catch (autoReplyError) {
      console.error("Auto reply failed:", autoReplyError);
    }

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Email failed",
      error: error.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});