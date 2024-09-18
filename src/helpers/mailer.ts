import nodemailer from "nodemailer";

const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // TODO: configure mail for usage
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });
    const mailOptions = {
      from: '"Muhammad Rehan 👻" rehantechforge@gmail.com', // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY" ? "Verify Your Email" : "Forgot Your Password", // Subject line
      html: "<b>Hello world?</b>", // html body
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailOptions;
  } catch (error: any) {
    console.log(`Error While Sending Mail to User ${error.message}`);
  }
};

export default sendEmail;
