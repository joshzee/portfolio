import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const HireMe = () => {
  return (
    <div className="fixed left-2 -bottom-[10px] flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex iteams-center justify-center relative">
        <CircularText className={`fill-white animate-spin-slow circle-text`} />

        <Link
          href="./contact"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          bg-[#64b7b9] text-[#433a60] hover:text-[#fadb7e] shadow-md border-solid border-[#64b7b9] w-[75px] h-[75px] rounded-full"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
