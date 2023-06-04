import nodemailer from 'nodemailer'

// Create a transporter object with your Gmail account credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mahadw24@gmail.com", // Replace with your Gmail email address
    pass: "verytough123321", // Replace with your Gmail password or an app-specific password if enabled
  },
});

// Function to send the email
const sendEmail = async (formData) => {
  const { name, email, message } = formData;

  // Compose the email message
  const mailOptions = {
    from: "mahadw24@gmail.com", // Replace with your Gmail email address
    to: "projeccts.mahadwaseem@gmail.com", // Replace with your desired recipient email address
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;