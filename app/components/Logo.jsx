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
          backgroundColor: [
            "#64b7b9",
            "#433a60",
            "#fadb7e",
            "#433a60",
            "#64b7b9",
          ],
          transition: { duration: 4, repeat: Infinity },
        }}
      >
        JC
      </MotionLink>
    </div>
  );
};

export default Logo;
