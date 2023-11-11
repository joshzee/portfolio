"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-[#64b7b9]
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="flex items-center justify-between w-full px-20 py-8 font-medium">
      {/* Pages Nav */}
      <nav className="flex">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/blog" title="Blog" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      {/* Socials Nav*/}
      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="https://github.com/joshzee"
          target={"_blank"}
          className="w-6 mr-5"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/joshuazarazovski"
          target={"_blank"}
          className="w-6 mx-5"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/h3llab3nt"
          target={"_blank"}
          className="w-6 ml-5"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-5 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
