"use client";

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import TransitionEffect from "./components/TransitionEffect";
import ParticlesContainer from "./components/ParticlesContainer";
import Logo from "./components/Logo";


const Home = () => {
  return (
    <>
    <TransitionEffect />
    
      <div className="pl-4 pr-4">
      <div className="h-screen flex justify-center items-center text-center">

      <div className="z-50"> 
      <div className="absolute left-[50%] top-5 translate-x-[-50%] cursor-pointer">
        <Logo />
      </div>


        <h1>Hi, I&apos;ll be back soon 🙂</h1>
        <h3>The site just needs some love<br/>
        In the meantime you can reach me at <a className="underline decoration-[#64b7b9] hover:text-[#64b7b9]" href='mailto:hi@joshcodes.me'>hi@joshcodes.me</a>
        </h3>
      </div>
      <ParticlesContainer />
      </div>
      </div>

    </>
  );
};

export default Home;
