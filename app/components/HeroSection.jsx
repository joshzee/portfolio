"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@iconify-icon/react";
import Layout from "./Layout";
import AnimatedHeader from "./AnimatedHeader";
import Skills from "./Skills";
import ParticlesContainer from "./ParticlesContainer";

const HeroSection = () => {
  return (
    <section className="flex items-center w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          {/* Image */}
          <div className="w-1/2">
            <Image
              src="/images/home-page.png"
              alt="Hero Image"
              sizes="100vw"
              className="w-full h-auto"
              width={0}
              height={0}
            />
          </div>

          {/* Information */}
          <div className="flex flex-col self-center w-1/2 items-left">
            <AnimatedHeader className="text-left" />

            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adip eist elementum et
              dolor et. Lorem ipsum dolor sit amet, consectetur adip eist
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="
                btn mr-4 rounded-md w-full sm:w-fit border-solid border-2 border-[#fadb7e] py-4 px-4 
                text-[#fadb7e] bg-[#433a60] hover:bg-[#64b7b9] hover:text-[#433a60] 
                hover:border-[#fadb7e]"
              >
                Contact
                <Icon
                  class="ml-2 inline-block align-middle"
                  height="24"
                  icon="icon-park-outline:send-email"
                />
              </Link>
              <Link
                href="/projects"
                className="
              btn rounded-md w-full sm:w-fit border-solid border-2 border-[#64b7b9] py-4 px-4 
              text-[#64b7b9] bg-[#0e1014] hover:bg-transparent hover:text-[#fadb7e] 
              hover:border-[#433a60]"
              >
                View Projects
              </Link>
              {/* Particles */}
              <ParticlesContainer />
            </div>
          </div>
        </div>

        {/* # Skills section */}
        {/* <Skills /> */}
      </Layout>
    </section>
  );
};

export default HeroSection;
