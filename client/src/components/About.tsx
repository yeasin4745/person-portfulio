import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { PERSONAL_INFO } from "@shared/const";

export default function About() {
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <motion.button
              type="button"
              aria-label={
                isPhotoZoomed
                  ? "Reset Yeasin's profile photo zoom"
                  : "Zoom Yeasin's profile photo"
              }
              aria-pressed={isPhotoZoomed}
              onClick={() => setIsPhotoZoomed(zoomed => !zoomed)}
              whileHover={{ scale: 1.03 }}
              whileFocus={{ scale: 1.03 }}
              className="group relative w-full max-w-xs aspect-square rounded-full overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] p-1 border border-[#2D2847] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#030014]"
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-10 rounded-full border transition-all duration-500 ${
                  isPhotoZoomed
                    ? "border-[#00D9FF] shadow-[0_0_24px_rgba(0,217,255,0.55)]"
                    : "border-transparent group-hover:border-[#00D9FF]/70 group-hover:shadow-[0_0_18px_rgba(0,217,255,0.35)]"
                }`}
              />
              <img
                src="/images/profile.jpg"
                alt="Yeasin's profile"
                width={2048}
                height={2012}
                loading="lazy"
                className={`w-full h-full object-cover object-[50%_44%] rounded-full transition-transform duration-500 ease-out motion-reduce:transition-none ${
                  isPhotoZoomed
                    ? "scale-110"
                    : "scale-100 group-hover:scale-110"
                }`}
              />
            </motion.button>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="pointer-events-none absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/30 to-[#00D9FF]/30 rounded-full blur-2xl"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {PERSONAL_INFO.bio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#2D2847]">
              <div>
                <p className="text-[#00D9FF] font-bold text-2xl">
                  {PERSONAL_INFO.yearsOfExperience}
                </p>
                <p className="text-gray-400 text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="text-[#00D9FF] font-bold text-2xl">15+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-[#A78BFA] font-bold text-2xl">Full Stack</p>
                <p className="text-gray-400 text-sm">Development Focus</p>
              </div>
              <div>
                <p className="text-[#A78BFA] font-bold text-2xl">AI/ML</p>
                <p className="text-gray-400 text-sm">Applied Exploration</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030014]"
            >
              Let&apos;s Work Together
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
