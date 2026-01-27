import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Frontend_skill, Backend_skill, DevTools, libraries } from "@shared/const";
import TechStackAnimation from "./TechStackAnimation";

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const SkillCard = ({ skill }: { skill: (typeof Frontend_skill)[0] }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300 group cursor-pointer"
    >
      <div className="relative mb-3">
        <img
          src={skill.Image}
          alt={skill.skill_name}
          width={skill.width}
          height={skill.height}
          className="group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all duration-300"
        />
      </div>
      <p className="text-gray-300 text-sm text-center font-medium">{skill.skill_name}</p>
    </motion.div>
  );

  const SkillCategory = ({ title, skills }: { title: string; skills: typeof Frontend_skill }) => (
    <motion.div variants={itemVariants} className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="w-2 h-2 bg-[#00D9FF] rounded-full mr-3" />
        {title}
      </h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill: (typeof Frontend_skill)[0], index: number) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* 3D Tech Stack Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <TechStackAnimation />
        {/* Overlay gradient to make content readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/80 via-[#030014]/60 to-[#030014]/80" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl">
            Over the years, I've developed expertise in a wide range of technologies and tools. Here's what I work with.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <SkillCategory title="Frontend Development" skills={Frontend_skill} />
        <SkillCategory title="Backend Development" skills={Backend_skill} />
        <SkillCategory title="Development Tools" skills={DevTools} />
        <SkillCategory title="Libraries & Frameworks" skills={libraries} />
      </motion.div>
    </section>
  );
}
