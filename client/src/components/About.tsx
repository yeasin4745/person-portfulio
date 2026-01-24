import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PERSONAL_INFO } from "@shared/const";

export default function About() {
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
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] p-1 border border-[#2D2847]">
              <img
                src="/images/profile.jpg"
                alt="Yeasin's Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/30 to-[#00D9FF]/30 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Right Side - Bio and Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Bio Paragraphs */}
            {PERSONAL_INFO.bio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#2D2847]">
              <div>
                <p className="text-[#00D9FF] font-bold text-2xl">2+</p>
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
                <p className="text-gray-400 text-sm">Enthusiast</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
