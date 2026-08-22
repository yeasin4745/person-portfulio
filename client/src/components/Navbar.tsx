import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@shared/const";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#030014] via-[#030014] to-transparent backdrop-blur-md border-b border-[#2D2847]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#00D9FF] to-[#A78BFA] rounded-lg flex items-center justify-center shadow-[0_0_18px_rgba(0,217,255,0.2)] transition-shadow duration-500 group-hover:shadow-[0_0_24px_rgba(167,139,250,0.5)]">
              <span className="text-[#030014] font-bold text-sm">Y</span>
            </div>
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className="brand-gradient bg-gradient-to-r from-[#00D9FF] via-[#A78BFA] to-[#00D9FF] bg-clip-text text-lg font-bold text-transparent transition-[filter] duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.55)]"
            >
              {PERSONAL_INFO.name}
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-[#00D9FF] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-[#00D9FF] hover:bg-[#0F0B2E] rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
