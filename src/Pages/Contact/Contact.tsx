import React, { useState } from "react";
import DivIcon from "../../Components/DivIcon/DivIcon";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IContact } from "../../Interfaces/Icontact";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { ExternalLink,  Mail } from "lucide-react";
import { divVariants } from "../../Constants/Motion";
import { contactList, mediaList } from "../../Constants/Contact";


export default function Contact() {
  let [loading, setLoading] = useState<boolean>(false);
  let initialValues: IContact = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "MinLength is 3Characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter Valid Email"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Please,leave me a message."),
  });

  let handleForm = (values: IContact) => {
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
        console.log(err);
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

  let formik = useFormik<IContact>({
    initialValues,
    onSubmit: handleForm,
    validationSchema,
  });
  return (
    <>
      <Toaster position="top-center" />
      <section className="contain py-10">
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

        {/* cotact list */}
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* email,phone,location */}
          {contactList.map((item) => {
            return (
              <motion.div
                variants={divVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, staggerChildren: 0.15 }}
                key={item.name}
                className="bg-slate-900 rounded-lg border border-sky-900 flex flex-col justify-center items-center space-y-2 p-5  font-semibold shadow-div"
              >
                <DivIcon className="w-16 h-16" icon={item.icon} />
                <h3 className="text-2xl ">{item.name}</h3>
                <p className="text-main">{item.contact}</p>
                <p className="text-slate-400 font-normal">{item.desc}</p>
              </motion.div>
            );
          })}
          {/* github,linkedIn */}
          {mediaList.map((item) => {
            return (
              <motion.div
                variants={divVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1, staggerChildren: 0.15 }}
                key={item.name}
                className="bg-slate-900 rounded-lg border border-sky-900 flex flex-col justify-center items-center space-y-2 p-5 font-semibold shadow-div"
              >
                <DivIcon className="w-16 h-16 text-main" icon={item.icon} />
                <h3 className="text-2xl ">{item.name}</h3>
                <p className="text-main">{item.contact}</p>
                <p className="text-slate-400 font-normal">{item.desc}</p>
                <button
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                  className="btn w-60 bg-black border border-sky-900"
                >
                  {" "}
                  <ExternalLink className="w-4 h-4" /> <span>Visit Profile</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Contact form  */}
        <motion.div
          variants={divVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9, staggerChildren: 0.15 }}
          className="w-full md:w-[90%] mx-auto my-8 border border-sky-900 rounded-lg bg-slate-900 p-5"
        >
          <form onSubmit={formik.handleSubmit}>
            {/* name,email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className={
                    formik.errors.name && formik.touched.name
                      ? "form-input w-full h-10 focus:border focus:border-red-600"
                      : "form-input  w-full h-10 focus:border focus:border-main"
                  }
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Enter your Name"
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-600">{formik.errors.name}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className={
                    formik.errors.email && formik.touched.email
                      ? "form-input w-full h-10 focus:border focus:border-red-600"
                      : "form-input  w-full h-10 focus:border focus:border-main"
                  }
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your Email"
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600">{formik.errors.email}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* subject */}
            <div className="my-3">
              <label htmlFor="subject">Subject</label>
              <br />
              <input
                className={
                  formik.errors.subject && formik.touched.subject
                    ? "form-input w-full h-10 focus:border focus:border-red-600"
                    : "form-input  w-full h-10 focus:border focus:border-main"
                }
                type="text"
                name="subject"
                id="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your Subject"
              />
              {formik.errors.subject && formik.touched.subject ? (
                <p className="text-red-600">{formik.errors.subject}</p>
              ) : (
                ""
              )}
            </div>
            {/* message */}
            <div className="my-3">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                className={
                  formik.errors.message && formik.touched.message
                    ? "form-input w-full h-14 py-1 focus:border focus:border-red-600"
                    : "form-input w-full h-16 py-1 focus:border focus:border-main"
                }
                value={formik.values.message}
                name="message"
                id="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your Message"
              />
              {formik.errors.message && formik.touched.message ? (
                <p className="text-red-600">{formik.errors.message}</p>
              ) : (
                ""
              )}
            </div>
            {loading ? (
              <button
                type="button"
                disabled
                className="btn text-base items-center bg-main w-36 "
              >
                <i className="fa-solid fa-spin fa-spinner text-lg"></i>{" "}
                <span>Sending</span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn text-base items-center bg-main w-36 "
              >
                <Mail className="w-4 h-4"/>
                <span>Send Message</span>
              </button>
            )}
          </form>
        </motion.div>
      </section>
      {/* footer */}
      <Footer />
    </>
  );
}
