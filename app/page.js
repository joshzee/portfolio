import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#0e1014] mx-auto">
      {/* Navigation */}
      <NavBar title="Navigation Bar" />
      {/* Hero Section */}
      <HeroSection title="Hero Section" />
      {/* Hero Section */}
      <HireMe title="Animated Hire Me Circle" />
      {/* Footer Section */}
      <Footer title="Footer Section" />
    </main>
  );
};

export default Home;
