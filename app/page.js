import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <main className="
      flex min-h-screen flex-col bg-[#0e1014] 
      container mx-auto px-5 py-4">
      {/* Navigation */}
        <NavBar title="Navigation Bar" />
      {/* Hero Section */}
        <HeroSection title="Hero Section" />
    </main>
  )
}

export default Home;