import { motion } from "framer-motion";
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

export default function ShareButtons({
  title,
  url,
  description,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 py-6 border-t border-b border-[#2D2847]"
    >
      <div className="flex items-center gap-2">
        <Share2 className="w-5 h-5 text-[#00D9FF]" />
        <span className="text-sm font-semibold text-white">Share this article</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Twitter */}
        <motion.a
          variants={itemVariants}
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#1DA1F2] hover:shadow-lg hover:shadow-[#1DA1F2]/20 transition-all duration-300"
          title="Share on Twitter"
        >
          <Twitter className="w-4 h-4 text-[#1DA1F2]" />
          <span className="text-sm text-white hidden sm:inline">Twitter</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          variants={itemVariants}
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/20 transition-all duration-300"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-[#0A66C2]" />
          <span className="text-sm text-white hidden sm:inline">LinkedIn</span>
        </motion.a>

        {/* Facebook */}
        <motion.a
          variants={itemVariants}
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/20 transition-all duration-300"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4 text-[#1877F2]" />
          <span className="text-sm text-white hidden sm:inline">Facebook</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          variants={itemVariants}
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-sm text-white hidden sm:inline">WhatsApp</span>
        </motion.a>

        {/* Copy Link */}
        <motion.button
          variants={itemVariants}
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300"
          title="Copy link to clipboard"
        >
          <svg
            className="w-4 h-4 text-[#00D9FF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span className="text-sm text-white hidden sm:inline">
            {copied ? "Copied!" : "Copy Link"}
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}
