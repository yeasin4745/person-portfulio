import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { FEATURED_PROJECTS, MINI_PROJECTS } from "@shared/const";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Enhanced scroll animation variants
  const projectCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      rotateX: -10,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    }),
    hover: {
      y: -15,
      boxShadow: "0 20px 40px rgba(0, 217, 255, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const miniProjectVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
    hover: {
      x: 10,
      backgroundColor: "rgba(0, 217, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const ProjectCard = ({ project, index }: { project: typeof FEATURED_PROJECTS[0]; index: number }) => (
    <motion.div
      custom={index}
      variants={projectCardVariants}
      whileHover="hover"
      className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300"
      style={{ perspective: "1000px" }}
    >
      {/* Project Thumbnail Image */}
      <div className="w-full h-48 relative overflow-hidden bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-40" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#0F0B2E] border border-[#2D2847] text-[#00D9FF] text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all text-sm"
          >
            <ExternalLink size={16} />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );

  const MiniProjectLink = ({ project, index }: { project: typeof MINI_PROJECTS[0]; index: number }) => (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={miniProjectVariants}
      whileHover="hover"
      className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300 group"
    >
      <span className="text-gray-300 group-hover:text-[#00D9FF] transition-colors">{project.title}</span>
      <ExternalLink size={16} className="text-[#A78BFA] group-hover:text-[#00D9FF] transition-colors" />
    </motion.a>
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl">
            Here are some of my featured projects and mini projects that showcase my skills in web development, AI, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-[#00D9FF] rounded-full mr-3" />
            Featured Projects
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                variants={projectCardVariants}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mini Projects */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-2 bg-[#A78BFA] rounded-full mr-3" />
            Mini Projects & Tools
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-4"
          >
            {MINI_PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
                variants={miniProjectVariants}
              >
                <MiniProjectLink project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
