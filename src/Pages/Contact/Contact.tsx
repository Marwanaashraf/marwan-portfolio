import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IContact } from "../../Interfaces/Icontact";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { Loader, Send } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
import { contactList } from "../../Constants/Contact";
import clsx from "clsx";
import { useMediaQuery } from "usehooks-ts";

export default function Contact() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues: IContact = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "MinLength is 3 Characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter Valid Email"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Please, leave me a message."),
  });

  const handleForm = (values: IContact) => {
    setLoading(true);
    emailjs
      .send(
        "service_vvx1k04",
        "template_vwtiiwf",
        { ...values },
        "85tK85GLHDCOQVZuc"
      )
      .then(() => {
        setLoading(false);
        formik.resetForm();
        toast.success("Message sent successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Faild, pleace send again", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const formik = useFormik<IContact>({
    initialValues,
    onSubmit: handleForm,
    validationSchema,
  });
  return (
    <>
      <Toaster position="top-center" />
      <section aria-label="ContactMe Setion" className="contain my-20">
        {/* header */}
        <motion.h2
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Contact me
        </motion.h2>
        <p className="text-slate-400 my-10 text-center font-medium text-lg">
          I'm always interested in hearing about new opportunities and exciting
          projects.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-4">
          {/* Contact form  */}
          <motion.div
            variants={divVariants}
            initial={{
              y: isMobile ? 40 : 0,
              x: isMobile ? 0 : -40,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, staggerChildren: 0.15 }}
            className="border border-main/20 rounded-lg bg-gradient-to-tr dark:from-slate-900 dark:to-secondry/5  p-5 lg:col-span-3 xl:col-span-2 lg:order-1 order-2"
          >
            <form onSubmit={formik.handleSubmit}>
              {/* name */}
              <div className="">
                <label htmlFor="name">Your Name</label>
                <br />
                <input
                  className={clsx(
                    "form-input w-full h-10 focus:border",
                    formik.errors.name && formik.touched.name
                      ? "focus:border-red-600"
                      : "focus:border-main"
                  )}
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Ali"
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-600">{formik.errors.name}</p>
                ) : (
                  ""
                )}
              </div>
              {/* email */}
              <div className="my-3">
                <label htmlFor="email">Your Email</label>
                <br />
                <input
                  className={clsx(
                    "form-input w-full h-10 focus:border",
                    formik.errors.email && formik.touched.email
                      ? "focus:border-red-600"
                      : "focus:border-main"
                  )}
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="ali@example.com"
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600">{formik.errors.email}</p>
                ) : (
                  ""
                )}
              </div>

              {/* subject */}
              <div className="my-3">
                <label htmlFor="subject">Subject</label>
                <br />
                <input
                  className={clsx(
                    "form-input w-full h-10 focus:border",
                    formik.errors.subject && formik.touched.subject
                      ? "focus:border-red-600"
                      : "focus:border-main"
                  )}
                  type="text"
                  name="subject"
                  id="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="What do you want to discuss"
                />
                {formik.errors.subject && formik.touched.subject ? (
                  <p className="text-red-600">{formik.errors.subject}</p>
                ) : (
                  ""
                )}
              </div>
              {/* message */}
              <div className="my-3">
                <label htmlFor="message">Your Message</label>
                <br />
                <textarea
                  className={clsx(
                    "form-input w-full h-24 py-1 focus:border",
                    formik.errors.message && formik.touched.message
                      ? " focus:border-red-600"
                      : "focus:border-main"
                  )}
                  value={formik.values.message}
                  name="message"
                  id="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.message && formik.touched.message ? (
                  <p className="text-red-600">{formik.errors.message}</p>
                ) : (
                  ""
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center gap-2 text-lg py-2 rounded-lg bg-gradient-to-r from-main to-secondry w-full hover:scale-[1.01] duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                {loading ? (
                  <>
                    <Loader
                      className="w-4 h-4 animate-spin"
                      aria-label="Loader icon"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-label="Send icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* contact info */}
          <div
            className="border border-main/20 rounded-lg p-5 
          lg:col-span-2 xl:col-span-1 lg:order-2 order-1"
          >
            <div className="flex items-center gap-2">
              {/* header */}
              <div className="w-1 h-7 rounded-lg bg-gradient-to-b from-main to-secondry"></div>
              <h3 className="text-gradient font-bold text-2xl">Contact Info</h3>
            </div>
            <div className="my-5 space-y-4">
              {contactList.map((ele, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ x: -5, y: 20, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.5 * i,
                    }}
                    onClick={() => {
                      if (!ele.link) return;
                      else window.open(ele.link);
                    }}
                    className="flex gap-3 items-center hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg p-2 cursor-pointer duration-150 group"
                  >
                    {/* icon */}
                    <div className="size-10 rounded-lg bg-gradient-to-tr from-card_light dark:from-card_dark to-secondry/10 dark:to-secondry/20 flex justify-center items-center group-hover:skew-y-3 group-hover:scale-110 duration-150">
                      {ele.icon}
                    </div>

                    {/* details */}
                    <div className="font-semibold">
                      {/* name */}
                      <span className="text-gray-400 uppercase  text-xs ">
                        {ele.name}
                      </span>

                      {/* contact */}
                      <p className="text-sm group-hover:text-main duration-150">
                        {ele.contact}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}
