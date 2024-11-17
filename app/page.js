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

      <a className="z-2"> 
      <div className="absolute left-[50%] top-5 translate-x-[-50%] cursor-pointer">
        <Logo />
      </div>


        <h1>I&apos;ll be back</h1>
        <h3>No worries, the site just needs some love.<br/>
        in the meantime you can reach me at hi@joshcodes.me
        </h3>
      </a>
      <ParticlesContainer />
      </div>
      </div>

    </>
  );
};

export default Home;
