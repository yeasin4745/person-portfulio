import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechStackAnimation from "@/components/TechStackAnimation";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030014] text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40"
        aria-hidden="true"
      >
        <TechStackAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/20 via-[#030014]/45 to-[#030014]/65" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="flex flex-col gap-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
