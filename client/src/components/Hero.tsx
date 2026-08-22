import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { PERSONAL_INFO } from "@shared/const";

const TAGLINE_WORDS = ["Full-Stack Developer", "AI Explorer", "Student"];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex(prev => (prev + 1) % TAGLINE_WORDS.length);
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
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-space-1.jpg)",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]"
          style={{ height: "1000px" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
      >
        <div className="flex-1 text-center lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#0F0B2E] border border-[#00D9FF] rounded-full text-[#00D9FF] text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Hi, I&apos;m{" "}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
              className="brand-gradient inline-block bg-gradient-to-r from-[#00D9FF] via-[#A78BFA] to-[#00D9FF] bg-clip-text text-transparent"
            >
              {PERSONAL_INFO.name}
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mb-8 h-12 flex items-center justify-center lg:justify-start"
          >
            <motion.p
              key={currentTaglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-3xl font-semibold text-[#A78BFA]"
            >
              {TAGLINE_WORDS[currentTaglineIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            I build polished frontend experiences, dependable backend systems,
            and practical AI-powered products with modern web technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-[#00D9FF] text-[#00D9FF] font-bold rounded-lg hover:bg-[#00D9FF]/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#00D9FF]"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-md lg:max-w-full"
          >
            <img
              src="/images/hero-developer-illustration.gif"
              alt="Developer working on multiple screens"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hidden lg:block absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/20 to-[#00D9FF]/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="hidden lg:block absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20 rounded-full blur-3xl z-0"
      />
    </section>
  );
}
