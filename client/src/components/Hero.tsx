import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@shared/const";

const TAGLINE_WORDS = ["Student", "Programmer", "AI Explorer"];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotate tagline every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % TAGLINE_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-space-1.jpg)",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#0F0B2E] border border-[#00D9FF] rounded-full text-[#00D9FF] text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-12 flex items-center justify-center"
        >
          <motion.p
            key={currentTaglineIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-[#A78BFA]"
          >
            {TAGLINE_WORDS[currentTaglineIndex]}
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          An aspiring Full Stack Developer and AI enthusiast building innovative digital solutions with modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-[#00D9FF] text-[#00D9FF] font-bold rounded-lg hover:bg-[#00D9FF]/10 transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00D9FF]"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/20 to-[#00D9FF]/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20 rounded-full blur-3xl z-0"
      />
    </section>
  );
}
