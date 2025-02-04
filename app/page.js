"use client";

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import TransitionEffect from "./components/TransitionEffect";
import ParticlesContainer from "./components/ParticlesContainer";
import ProjectCard from "./components/ProjectCard";

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex h-auto flex-col bg-[#0e1014] mx-auto">
        {/* Navigation */}
        <NavBar title="Navigation Bar" />
        {/* Hero Section */}
        <HeroSection title="Hero Section" />
        {/* Hero Section */}
        <HireMe title="Animated Hire Me Circle" />

        <ProjectCard title="Project Example"/>
        {/* Footer Section */}
        <Footer title="Footer Section" />

        <ParticlesContainer />
      </main>
    </>
  );
};

export default Home;
