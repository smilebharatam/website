import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from 'url';
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper to create transporter
  const getTransporter = () => {
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS?.replace(/\s/g, ""); // Strip spaces for safety
    
    if (!user || !pass) {
      console.warn("SMTP credentials missing. Emails will not be sent.");
      return null;
    }
    
    console.log(`Creating transporter for: ${user}`);
    
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: { user, pass },
    });
  };

  // Verify transporter on startup
  const verifyTransporter = async () => {
    try {
      const transporter = getTransporter();
      if (transporter) {
        await transporter.verify();
        console.log("SMTP Transporter is ready to take our messages");
      }
    } catch (error) {
      console.error("SMTP Transporter verification failed:", error);
    }
  };
  verifyTransporter();

  // API route for Partner With Us form
  app.post("/api/partner", async (req, res) => {
    const { name, interest, email, phone, message } = req.body;

    if (!name || !interest || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields (Name, Interest, Email, and Phone are required)" });
    }

    const transporter = getTransporter();
    if (!transporter) {
      return res.status(500).json({ error: "Email service not configured. Please contact administrator." });
    }

    const recipient = process.env.RECIPIENT_EMAIL || "elitedental.medavakkam@gmail.com";

    try {
      const mailOptions = {
        from: `"Smile Bharatham Portal" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email,
        subject: `New Partner Inquiry: ${interest} - ${name}`,
        text: `
          New Partnership Inquiry Received:
          
          Name: ${name}
          Interest: ${interest}
          Email: ${email}
          Phone: ${phone}
          Message: ${message || "No message provided."}
        `,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #000080;">New Partnership Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Interest:</strong> ${interest}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #FF9933;">
              ${message || "No message provided."}
            </div>
          </div>
        `,
      };

      console.log(`Attempting to send partner email to ${recipient} from ${email}...`);
      const info = await transporter.sendMail(mailOptions);
      console.log("Partner email sent successfully:", info.messageId);
      res.json({ success: true, message: "Inquiry sent successfully" });
    } catch (error) {
      console.error("Error sending partner email:", error);
      res.status(500).json({ error: "Failed to send inquiry. Please check SMTP configuration." });
    }
  });

  // API route for Patient Inquiry form
  app.post("/api/patient-inquiry", async (req, res) => {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ error: "Missing required fields (Name, Phone, and Service are required)" });
    }

    const transporter = getTransporter();
    if (!transporter) {
      return res.status(500).json({ error: "Email service not configured. Please contact administrator." });
    }

    const recipient = process.env.RECIPIENT_EMAIL || "elitedental.medavakkam@gmail.com";

    try {
      const mailOptions = {
        from: `"Smile Bharatham Patient Portal" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email || undefined,
        subject: `New Patient Inquiry: ${service} - ${name}`,
        text: `
          New Patient Inquiry Received:
          
          Name: ${name}
          Phone: ${phone}
          Email: ${email || "Not provided"}
          Requested Service: ${service}
          Message: ${message || "No message provided."}
        `,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #10B981;">New Patient Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Requested Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #10B981;">
              ${message || "No message provided."}
            </div>
          </div>
        `,
      };

      console.log(`Attempting to send patient email to ${recipient} from ${email || 'no-email'}...`);
      const info = await transporter.sendMail(mailOptions);
      console.log("Patient email sent successfully:", info.messageId);
      res.json({ success: true, message: "Patient inquiry sent successfully" });
    } catch (error) {
      console.error("Error sending patient email:", error);
      res.status(500).json({ error: "Failed to send inquiry. Please check SMTP configuration." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
