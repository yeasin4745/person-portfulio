import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Clock, Tag, ExternalLink } from "lucide-react";
import { BLOG_POSTS } from "@shared/const";
import { Streamdown } from "streamdown";
import ShareButtons from "@/components/ShareButtons";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match) return null;

  const post = BLOG_POSTS.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all"
          >
            Back to Home
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#030014] text-white"
    >
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#030014]/80 backdrop-blur-md border-b border-[#2D2847]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-[#00D9FF] hover:text-[#A78BFA] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full h-96 relative overflow-hidden bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-[#0F0B2E] border border-[#2D2847] text-[#00D9FF] text-sm rounded">
            {post.category}
          </span>
          <span className="px-3 py-1 bg-[#0F0B2E] border border-[#2D2847] text-[#A78BFA] text-sm rounded">
            {post.subcategory}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {post.title}
        </h1>

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-[#2D2847]">
          <span className="flex items-center gap-2">
            <Clock size={18} />
            {post.readTime} min read
          </span>
          <span>
            {new Date(post.publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          {post.projectLink && (
            <a
              href={post.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#00D9FF] hover:text-[#A78BFA] transition-colors"
            >
              View Project
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <Streamdown>{post.summary}</Streamdown>
        </div>

        {/* Share Buttons */}
        <ShareButtons
          title={post.title}
          url={typeof window !== "undefined" ? window.location.href : ""}
          description={post.summary}
        />

        {/* Newsletter Signup */}
        <div className="my-12 border-t border-b border-[#2D2847] py-12">
          <NewsletterSignup />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-400 mb-6">
            Let's discuss your next project or collaboration opportunity.
          </p>
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
