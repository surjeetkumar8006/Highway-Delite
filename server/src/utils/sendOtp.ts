import nodemailer from "nodemailer";

const otpStore = new Map<string, string>();

// configure transporter (using Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS, // Gmail App Password (not your normal Gmail password!)
  },
});

export const generateAndSendOtp = async (email: string) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, otp);

  const mailOptions = {
    from: `"Er. Surjeet Kumar" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
    html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
  };

  console.log("Generated OTP:", otp);

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ OTP sent successfully");
    return true;
  } catch (error: any) {
    console.error("❌ Error sending OTP:", error.message);
    return false;
  }
};

export const verifyStoredOtp = (email: string, code: string) => {
  const valid = otpStore.get(email) === code;
  if (valid) otpStore.delete(email); // OTP can only be used once
  return valid;
};
