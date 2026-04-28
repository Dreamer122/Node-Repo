const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.HOST_NAME,
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASS_MAIL,
  },
});

exports.Sendmail=async(email,subject,data)=>{
    try {
  const info = await transporter.sendMail({
    from: 'monika', // sender address
    to: email, // list of recipients
    subject: subject, // subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello world?</b>${data}`, // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}
}