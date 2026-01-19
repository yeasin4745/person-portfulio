import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
          {/* Left Side - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] p-1">
              <div className="w-full h-full bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">
                    5+
                  </div>
                  <p className="text-gray-300 mt-2">Years of Experience</p>
                </div>
              </div>
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#A78BFA]/30 to-[#00D9FF]/30 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience in building web applications. My journey in tech started with a curiosity about how things work, and it has evolved into a career dedicated to creating elegant solutions to complex problems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern web technologies including React, TypeScript, Node.js, and cloud platforms. I'm committed to writing clean, maintainable code and staying updated with the latest industry trends and best practices.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#00D9FF] rounded-full" />
                <span className="text-gray-300">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#00D9FF] rounded-full" />
                <span className="text-gray-300">UI/UX Design Implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#00D9FF] rounded-full" />
                <span className="text-gray-300">Performance Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#00D9FF] rounded-full" />
                <span className="text-gray-300">Database Design & Management</span>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
