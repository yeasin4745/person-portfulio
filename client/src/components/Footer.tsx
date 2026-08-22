import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@shared/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#2D2847] bg-gradient-to-b from-transparent to-[#030014]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 p-6 rounded-lg bg-gradient-to-r from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847]"
        >
          <p className="text-lg text-[#A78BFA] italic">{PERSONAL_INFO.quote}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center mb-6"
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] rounded-lg flex items-center justify-center">
              <span className="text-[#030014] font-bold text-sm">Y</span>
            </div>
            <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
          </div>

          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
            >
              Contact
            </a>
          </nav>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2D2847] to-transparent my-6" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-3 text-center text-xs"
        >
          <p className="text-gray-500">
            Built with <span className="text-[#00D9FF]">React</span> +{" "}
            <span className="text-[#A78BFA]">Framer Motion</span> +{" "}
            <span className="text-[#00D9FF]">Tailwind CSS</span>
          </p>
          <a
            href="https://yeasin4745.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-[#00D9FF] transition-colors"
          >
            Also check out my other portfolio
            <span aria-hidden="true">→</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
