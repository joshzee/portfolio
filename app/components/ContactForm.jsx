"use client";

import React, { useState, useReducer } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import * as emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { fadeIn } from "@/variants";

{
  /* Sending Code */
}
const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "subject":
      return { ...state, subject: action.value };
    case "message":
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

const ContactForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, subject, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === "" || email === "" || message === "" || subject === "") {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      "g-recaptcha-response": captchaValue,
    };

    setFormSubmitted({ title: "Sending message...", paragraph: "" });
    emailjs
      .send(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        params,
        process.env.EMAIL_JS_USER
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Your message is safe with me!",
              paragraph: "I'll be in touch ASAP",
            });
          } else {
            setFormSubmitted({
              title: "Unexpected status code returned, try again later",
              paragraph: "Please contact me via +61447966487",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Unexpected status code returned, try again later",
            paragraph: "Please contact me via +61447966487",
          });
        }
      );
  };

  return formSubmitted.title === "" ? (
    <div>
      {!showCaptcha ? (
        <form
          onSubmit={submitFormAndShowCaptcha}
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
              placeholder="name"
              className="input"
              value={name}
              onChange={(e) =>
                dispatch({ type: "name", value: e.target.value })
              }
              required
            />

            <input
              placeholder="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) =>
                dispatch({ type: "email", value: e.target.value })
              }
              required
            />
          </div>
          <input
            type="text"
            placeholder="subject"
            className="input"
            value={subject}
            onChange={(e) =>
              dispatch({ type: "subject", value: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Let me know some information on your project, or just say hi!"
            className="textarea"
            value={message}
            onChange={(e) =>
              dispatch({ type: "message", value: e.target.value })
            }
            required
          ></textarea>
          {showFormErr ? (
            <p className="text-red-400 sm:mr-4">
              Please fill in all three input boxes to send a message
            </p>
          ) : null}
          <button type="submit" className="btn main-btn">
            <span>Send</span>
          </button>
        </form>
      ) : (
        <ReCAPTCHA
          sitekey={process.env.GCAPTCHA_SITE_KEY}
          onChange={sendEmail}
        />
      )}
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-light text-white text-lato">
        {formSubmitted.title}
      </h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
};

export default ContactForm;
