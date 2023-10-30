"use client";

import React from "react";
import Image from "next/image";

import { Icon } from "@iconify-icon/react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image */}
        <div className="col-span-5 place-self-center mb-8 lg:mb-0">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={800}
            height={800}
          />
        </div>

        {/* Information */}
        <div className="col-span-7 place-self-center p-3 pl-10 text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#64b7b9] to-[#2f6a6b]">
              Hi, I&apos;m{" "}
            </span>
            Josh
            <span className="mb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#2f6a6b] to-[#64b7b9]">
              {" "}
              & I
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Create Websites",
                2300,
                "Develop React Apps",
                2300,
                "Virtualise & Containerise",
                2300,
                "Cloud Compute",
                2300,
              ]}
              wrapper="span"
              speed={10}
              style={{
                fontSize: "0.9em",
                display: "inline-block",
                lineHeight: "1.5",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-4 mb-5">
            Lorem ipsum dolor sit amet, consectetur adip eist elementum et dolor
            et. Lorem ipsum dolor sit amet, consectetur adip eist
          </p>
          <div>
            <button
              className="
                btn mr-4 rounded-md w-full sm:w-fit border-solid border-2 border-[#fadb7e] py-2 px-4 
                text-[#fadb7e] bg-[#64b7b9] hover:bg-[#fadb7e] hover:text-[#64b7b9] 
                hover:border-[#64b7b9]"
            >
              Contact
              <Icon
                class="ml-2 inline-block align-middle"
                height="24"
                icon="icon-park-outline:send-email"
              />
            </button>
            <button
              className="
              btn mt-3 rounded-md w-full sm:w-fit border-solid border-2 border-[#64b7b9] py-2 px-4 
              text-[#64b7b9] bg-[#0e1014] hover:bg-transparent hover:text-[#fadb7e] 
              hover:border-[#fadb7e]"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
