"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import TransitionEffect from "../components/TransitionEffect";
import { fadeIn } from "@/variants";

const contact = () => {
  return (
    <>
      <TransitionEffect />
      <NavBar />
      <section className="flex items-center w-full h-full">
        <Layout className="pt-0">
          <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:text-left">
            <div className="flex flex-col w-full">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-12 text-6xl font-bold text-center"
              >
                Let&#39;s
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cy to-pu">
                  &nbsp;Connect
                </span>{" "}
              </motion.h2>

              <ContactForm />
              {/* 
              Start Form Resend Submit

              <motion.form
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col flex-1 w-full gap-6 mx-auto"
              >
                <div className="flex w-full mx-auto gap-x-6">
                  <input type="text" placeholder="name" className="input" />
                  <input type="text" placeholder="email" className="input" />
                </div>
                <input type="text" placeholder="subject" className="input" />
                <textarea
                  placeholder="Let me know some information on your project, or just say hi!"
                  className="textarea"
                ></textarea>
                <button className="btn rounded-full border border-cy/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-pu group">
                  <span className="text-cy group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 group-hover:text-pu">
                    Send It!
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] hover:text-pu" />
                </button>
                <span className="text"></span>
              </motion.form> */}
            </div>
          </div>
        </Layout>
      </section>
      <Footer />
    </>
  );
};

export default contact;
