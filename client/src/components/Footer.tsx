import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-[#2D2847] bg-gradient-to-b from-transparent to-[#030014]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Left - Logo/Name */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] rounded-lg flex items-center justify-center">
              <span className="text-[#030014] font-bold text-sm">JP</span>
            </div>
            <span className="text-white font-bold">Jenin Joseph</span>
          </div>

          {/* Center - Copyright */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Jenin Joseph. All rights reserved.
          </p>

          {/* Right - Links */}
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm">
              Contact
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2D2847] to-transparent my-6" />

        {/* Bottom - Credits */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-500 text-xs"
        >
          Built with <span className="text-[#00D9FF]">React</span> + <span className="text-[#A78BFA]">Framer Motion</span> + <span className="text-[#00D9FF]">Tailwind CSS</span>
        </motion.p>
      </div>
    </footer>
  );
}
