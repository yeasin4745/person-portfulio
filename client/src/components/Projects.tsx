import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { FEATURED_PROJECTS, MINI_PROJECTS } from "@shared/const";

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

  const ProjectCard = ({ project }: { project: typeof FEATURED_PROJECTS[0] }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
        <div className="relative z-10 text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">
            {project.title.charAt(0)}
          </div>
        </div>
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

  const MiniProjectLink = ({ project }: { project: typeof MINI_PROJECTS[0] }) => (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ scale: 1.05, x: 5 }}
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
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
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
              <MiniProjectLink key={index} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
