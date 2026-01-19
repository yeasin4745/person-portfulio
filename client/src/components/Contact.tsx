import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, ExternalLink, Facebook, Twitter } from "lucide-react";
import { PERSONAL_INFO, SOCIALS, CODING_PROFILES } from "@shared/const";

export default function Contact() {
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

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <Linkedin size={24} />;
      case "github":
        return <Github size={24} />;
      case "twitter":
        return <Twitter size={24} />;
      case "facebook":
        return <Facebook size={24} />;
      default:
        return <ExternalLink size={24} />;
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] rounded-full mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] flex items-center justify-center">
                <Mail size={24} className="text-[#030014]" />
              </div>
              <div>
                <h3 className="text-white font-bold">Email</h3>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#00D9FF] hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] flex items-center justify-center">
                <span className="text-[#030014] font-bold">📍</span>
              </div>
              <div>
                <h3 className="text-white font-bold">Location</h3>
                <p className="text-gray-300">Bangladesh</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-white font-bold mb-6">Connect with me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {SOCIALS.map((social: typeof SOCIALS[0], index: number) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                title={social.name}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] flex items-center justify-center text-[#00D9FF] hover:text-white transition-all duration-300"
              >
                {getSocialIcon(social.name)}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-white font-bold mb-6">Problem Solving Profiles</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {CODING_PROFILES.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#A78BFA] text-gray-300 hover:text-[#A78BFA] transition-all duration-300 flex items-center gap-2"
              >
                {profile.name}
                <ExternalLink size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="text-center">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 transform hover:scale-105"
          >
            Send Me an Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
