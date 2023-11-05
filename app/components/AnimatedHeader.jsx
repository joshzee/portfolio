import React from "react";
import { motion } from "framer-motion";

const AnimatedHeader = (className = "") => {
  const line1 = "Turning Visons Into";
  const line2 = "The Digital Future";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="width-full py-2 flex items-left justify-left text-left overflow-hidden">
      <motion.h1
        className={`header-text text-left inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#64b7b9] to-[#433a60] text-3xl sm:text-5xl 
      xl:text-6xl 3xl:text-8xl font-bold xs:leading-[2.8rem] sm:leading-[3.5rem] 
      lg:leading-[4.2rem] xl:leading-[4.6rem] 3xl:leading-[7rem]`}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((char, index) => {
          return (
            <motion.span
              key={char + "-" + index}
              variants={letter}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7161a5] to-[#433a60]"
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedHeader;
