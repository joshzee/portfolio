"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import useAlert from "../hooks/useAlert";
import Alert from "./Alert";
import { fadeIn } from "@/variants";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(process.env.NEXT_PUBLIC_EMAIL_JS_USER);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Joshua Zarazovski",
          from_email: form.email,
          to_email: "joshuazarazovski@gmail.com",
          message: form.message,
          subject: form.subject,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_USER
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you! I'll be in touch 🤓",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
              subject: "",
            });
          }, [4000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <div>
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col flex-1 w-full gap-6 mx-auto"
      >
        {/* input group */}
        <div className="flex w-full mx-auto gap-x-6">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            placeholder="email"
            className="input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="subject"
          className="input"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Let me know some information on your project, or just say hi!"
          className="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <>
          <div className="inline-flex">
            <button
              type="submit"
              disabled={loading}
              className="text-cy hover:text-pu btn rounded-full border border-cy/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-pu"
            >
              {loading ? "Sending It!..." : "Send It!"}
            </button>
            {alert.show && <Alert {...alert} />}
          </div>
        </>
      </motion.form>
    </div>
  );
};

export default ContactForm;
