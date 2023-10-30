"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 text-black bg-[#64b7b9] flex items-center
      justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: ["#64b7b9", "#417182", "#34e0e2"],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        JC
      </MotionLink>
    </div>
  );
};

export default Logo;
