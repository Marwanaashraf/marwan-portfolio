import { useState } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

import { Loader, Send } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { MotionWrapper } from "../../animations/motionVariants";

import "./Contact.css";
import type { ContactForm } from "./Contact.types";
import { contactvalidationSchema } from "./Contact.validation";
import { contactList } from "./Contact.constants";
import { sendContactEmail } from "./Contact.service";
import FormField from "./components/FormField";
import Footer from "../../Components/Layout/Footer/Footer";

/**

* Contact Section
* ---
* Responsibilities:
* 1. Render UI layout only (Presentation Layer)
* 2. Connect Formik to reusable FormField components
* 3. Handle submission state (loading / success / error)
*
* NOTE:
* * No validation logic here (moved to Contact.validation)
* * No API / EmailJS logic here (moved to Contact.service)
* * This keeps the component maintainable & scalable.
    */
export default function Contact() {
  const isMobile = useMediaQuery("(max-width:768px)");

  /** Prevent duplicate submissions */
  const [isLoading, setLoading] = useState<boolean>(false);

  /**

* Initial Form Values
* Can be extracted later to config if reused elsewhere.
  */
  const initialValues: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  /**

* Handle Form Submission
* ---
* Calls the service layer and controls UI feedback.
* UI should NEVER know how the email is sent.
  */
  const handleForm = async (values: ContactForm) => {
    if (isLoading) return;

    try {
      setLoading(true);

      // Call Service Layer (decoupled from UI)
      await sendContactEmail(values);

      formik.resetForm();

      toast.success("Message sent successfully 🚀");
    } catch (error) {
      // Helpful for debugging in real environments
      console.error("Contact Form Error:", error);

      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  /**

* Formik Controller
* Validation handled externally for cleaner architecture.
  */
  const formik = useFormik<ContactForm>({
    initialValues,
    onSubmit: handleForm,
    validationSchema: contactvalidationSchema,
  });

  return (
    <>
      {/* Global Toast Container */} <Toaster position="top-center" />
      <section aria-label="Contact Section" className="section-container my-20">
        {/* Section Header */}
        <MotionWrapper delay={0.3}>
          <h1 className="section-head">Contact me</h1>
        </MotionWrapper>

        <p className="text-light dark:text-dark my-10 text-center font-medium text-lg">
          I'm always interested in hearing about new opportunities and exciting
          projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-4">
          {/* ================= FORM CARD ================= */}
          <motion.div
            initial={{
              y: isMobile ? 40 : 0,
              x: isMobile ? 0 : -40,
              opacity: 0,
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border border-main/20 rounded-lg bg-gradient-to-tr dark:from-slate-900 dark:to-secondry/5 p-5 lg:col-span-3 xl:col-span-2 lg:order-1 order-2"
          >
            <form onSubmit={formik.handleSubmit}>
              {/* Reusable Fields */}
              <div className="my-2">
                <FormField
                  name="name"
                  label="Your Name"
                  placeholder="Enter your name"
                  textarea={false}
                  formik={formik}
                />
              </div>
              <div className="my-2">
                <FormField
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  textarea={false}
                  formik={formik}
                />
              </div>
              <div className="my-2">
                <FormField
                  name="subject"
                  label="Subject"
                  placeholder="Enter subject"
                  textarea={false}
                  formik={formik}
                />
              </div>
              <div className="my-2">
                <FormField
                  name="message"
                  label="Your Message"
                  placeholder="Write your message..."
                  textarea
                  formik={formik}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex justify-center items-center gap-2 text-lg py-2 rounded-lg bg-gradient-to-r from-main to-secondry w-full hover:scale-[1.01] duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-black"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* ================= CONTACT INFO ================= */}
          <div className="border border-main/20 rounded-lg p-5 lg:col-span-2 xl:col-span-1 lg:order-2 order-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-7 rounded-lg bg-gradient-to-b from-main to-secondry"></div>
              <h3 className="text-gradient font-bold text-2xl">Contact Info</h3>
            </div>

            <div className="my-5 space-y-4">
              {contactList.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -5, y: 20, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 + 0.1 * i }}
                  onClick={() =>
                    item.href &&
                    window.open(item.href, "_blank", "noopener,noreferrer")
                  }
                  className="flex gap-3 items-center hover:bg-card_light dark:hover:bg-card_dark rounded-lg p-2 cursor-pointer duration-150 group"
                >
                  <div className="size-10 rounded-lg bg-gradient-to-tr from-card_light dark:from-card_dark to-secondry/10 dark:to-secondry/20 flex justify-center items-center group-hover:scale-110 group-hover:rotate-2  duration-150">
                    {item.icon}
                  </div>

                  <div className="font-semibold">
                    <span className="text-light dark:text-dark uppercase text-xs">
                      {item.title}
                    </span>
                    <p className="text-sm group-hover:text-main duration-150">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
