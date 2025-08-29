import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./EmailTemplate.js";
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
      category: "Email Verification"
    });

  } catch {
    console.log("Error sending verification email", error);
    throw new Error(`Error sending verification email: ${error}`)
  }
}

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "4c114f38-061d-4fde-aaae-e3ab6d19cb49",
      template_variables: {
        company_info_name: "MERN Auth System",
        name: name
      }
    });

    console.log(`Welcome email sent successfully ${response}`);

  } catch (error) {
    console.log(`Error sending welcome email ${error}`);
    throw new Error(`Error sending welcome email: ${error}`);
  }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset"
    });

    console.log(`Welcome email sent successfully ${response}`);
  } catch (error) {
    console.log(`Error sending password reset email ${error}`);
      throw new Error(`Error sending password reset email: ${error}`);
  }
}