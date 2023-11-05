import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Layout className="py-8 flex items-center justify-between">
        <span> &copy; {new Date().getFullYear()} All rights Reserved</span>
        <div className="flex items-center">
          Building with
          <span className="text-[#433a60] text-2xl px-1">&#9829;</span>
          by&nbsp;
          <Link
            href="/"
            className="underline underline-offset-1"
            target={"_blank"}
          >
            JoshCodes
          </Link>
        </div>
        <Link
          href="/"
          className="underline underline-offset-1"
          target={"_blank"}
        >
          Say Hi!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
