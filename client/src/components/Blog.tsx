import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { BLOG_POSTS } from "@shared/const";

export default function Blog() {
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

  // Get the first featured post (most recent)
  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  // Get other featured posts to display in grid
  const otherPosts = BLOG_POSTS.filter((post) => post.featured && post.id !== featuredPost?.id);

  return (
    <section
      id="blog"
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
            My <span className="bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] bg-clip-text text-transparent">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl">
            Technical articles, case studies, and insights about web development, AI, and software engineering.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div variants={itemVariants} className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300 cursor-pointer"
              >
                {/* Featured Image */}
                <div className="w-full h-64 sm:h-80 relative overflow-hidden bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#00D9FF] to-[#A78BFA] text-[#030014] text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#0F0B2E] border border-[#2D2847] text-[#00D9FF] text-xs rounded">
                      {featuredPost.category}
                    </span>
                    <span className="px-3 py-1 bg-[#0F0B2E] border border-[#2D2847] text-[#A78BFA] text-xs rounded">
                      {featuredPost.subcategory}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                    {featuredPost.summary}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {featuredPost.readTime} min read
                    </span>
                    <span>
                      {new Date(featuredPost.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center gap-2 text-[#00D9FF] font-semibold group-hover:gap-3 transition-all">
                    Read Full Article
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#A78BFA] rounded-full mr-3" />
              More Articles
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 gap-6"
            >
              {otherPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0B2E] to-[#1F1B3D] border border-[#2D2847] hover:border-[#00D9FF] transition-all duration-300 cursor-pointer h-full"
                  >
                    {/* Post Image */}
                    <div className="w-full h-40 relative overflow-hidden bg-gradient-to-br from-[#00D9FF]/20 to-[#A78BFA]/20">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-[#0F0B2E] border border-[#2D2847] text-[#00D9FF] text-xs rounded">
                          {post.category}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {post.summary}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-gray-500 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime} min
                        </span>
                        <span>
                          {new Date(post.publishedDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
