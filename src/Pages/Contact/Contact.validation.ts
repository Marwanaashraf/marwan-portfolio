import * as Yup from "yup";

export const contactvalidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "MinLength is 3 Characters"),
  email: Yup.string().required("Email is required").email("Enter Valid Email"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Please, leave me a message."),
});
