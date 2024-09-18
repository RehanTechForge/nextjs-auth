import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const VERIFY_EMAIL_HTML = `<p>Click <a href="${
      process.env.DOMAIN
    }/verifyemail?token=${hashedToken}">Here</a> to ${
      emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"
    }
      or copy and paste the link below in your browser
      <br/>
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`;

    const RESET_PASSWORD_HTML = `<p>Click <a href="${
      process.env.DOMAIN
    }/forgotpassword?token=${hashedToken}">Here</a> to ${
      emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password"
    }
      or copy and paste the link below in your browser
      <br/>
      ${process.env.DOMAIN}/forgotpassword?token=${hashedToken}
      </p>`;

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "58048dc4d90c61",
        pass: "07034d758dc73d",
      },
    });
    const mailOptions = {
      from: '"Muhammad Rehan 👻" rehantechforge@gmail.com', // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY" ? "Verify Your Email" : "Forgot Your Password", // Subject line
      html: emailType === "VERIFY" ? VERIFY_EMAIL_HTML : RESET_PASSWORD_HTML,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailOptions;
  } catch (error: any) {
    console.log(`Error While Sending Mail to User ${error.message}`);
  }
};

export default sendEmail;
