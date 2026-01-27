import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    const scrolled = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrolled / docHeight) * 100;

    setScrollProgress(scrollPercent);
    setIsVisible(scrolled > 300);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    initial: { y: 0 },
    animate: {
      y: -8,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    } as any,
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Progress Ring Background */}
          <div className="absolute inset-0 rounded-full">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(0, 217, 255, 0.1)"
                strokeWidth="2"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray={`${(scrollProgress / 100) * 282.7} 282.7`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />

            {/* Icon */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="relative z-10"
            >
              <ChevronUp size={24} className="text-[#030014] font-bold" />
            </motion.div>
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 0.2 }}
            className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="px-3 py-1.5 bg-[#0F0B2E] border border-[#2D2847] rounded-lg text-[#00D9FF] text-xs font-medium">
              Back to top
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-0 h-0 border-l-4 border-l-[#0F0B2E] border-t-2 border-t-transparent border-b-2 border-b-transparent" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
