import emailjs from "@emailjs/browser";

export const sendContactEmail = async (values: any) => {
  const service = process.env.REACT_APP_EMAIL_SERVICE;
  const template = process.env.REACT_APP_EMAIL_TEMPLATE;
  const key = process.env.REACT_APP_EMAIL_KEY;

  if (!service || !template || !key) {
    throw new Error("Email service is not configured");
  }

  return emailjs.send(service, template, values, key);
};