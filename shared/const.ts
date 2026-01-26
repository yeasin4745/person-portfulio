export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Personal Information
export const PERSONAL_INFO = {
  name: "Yeasin",
  tagline: "Student | Programmer | AI Explorer",
  title: "Full Stack Developer & AI Enthusiast",
  email: "yeasin4745@proton.me",
  bio: "Hello! I'm Yeasin, a passionate developer. I'm an aspiring Full Stack Developer and AI enthusiast currently studying and building my skills in modern web technologies.\n\nMy journey started with curiosity about websites and has evolved into a passion for creating innovative digital solutions.\n\nI believe in the power of technology to solve real-world problems and make a positive impact.\n\nWhen I'm not coding, I read tech blogs, contribute to open-source projects, or experiment with new frameworks and tools.",
  yearsOfExperience: "2+",
  quote: '"Code is like humor. When you have to explain it, it\'s bad." — Cory House',
};

// Skills organized by category
export const SKILLS_CATEGORIES = {
  "Core Web": ["HTML5", "CSS3", "JavaScript"],
  "Backend": ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "JWT"],
  "Frontend": ["React.js", "Tailwind CSS", "Next.js", "Framer Motion", "TypeScript"],
  "AI/ML": ["TensorFlow.js", "Machine Learning", "Google Gemini API"],
  "Tools & Platforms": ["Git", "GitHub", "Render", "VS Code", "Vercel", "Netlify"],
};

// Featured Projects
export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Telegram Bot",
    description: "AI-powered Telegram bot with Google Gemini API integration",
    stack: ["Node.js", "Google Gemini API"],
    hosting: "Render",
    liveLink: "https://t.me/yeasin_ai_bot",
    image: "/images/telegram-bot-thumbnail.jpg",
  },
  {
    id: 2,
    title: "House Price Prediction",
    description: "Machine learning model for predicting house prices using TensorFlow.js",
    stack: ["Statistics", "TensorFlow.js"],
    hosting: "Netlify",
    liveLink: "https://house-price-predction.netlify.app",
    image: "/images/house-price-thumbnail.jpg",
  },
  {
    id: 3,
    title: "Currency Converter",
    description: "Real-time currency conversion with live exchange rates and modern UI",
    stack: ["React", "API", "Tailwind CSS"],
    hosting: "GitHub Pages",
    liveLink: "https://yeasin4745.github.io/currency-converter/",
    image: "/images/currency-converter-thumbnail.jpg",
  },
  {
    id: 4,
    title: "TensorFlow Regression Visualizer",
    description: "Interactive TensorFlow.js linear regression demo with glassmorphism UI",
    stack: ["TensorFlow.js", "React", "Visualization"],
    hosting: "Netlify",
    liveLink: "https://linear-regression-model.netlify.app",
    image: "/images/tensorflow-regression-thumbnail.jpg",
  },
];

// Mini Projects
export const MINI_PROJECTS = [
  {
    title: "GPA Calculator",
    link: "https://yeasin4745.github.io/GPA-Calculator",
  },
  {
    title: "Image Filtering App",
    link: "https://image-filtering-app.netlify.app",
  },
  {
    title: "Age Calculator",
    link: "https://age-calculator-lime-beta.vercel.app",
  },
  {
    title: "Git Scan",
    link: "https://git-scan.netlify.app",
  },
  {
    title: "Codeforces Scan",
    link: "https://yeasin4745.github.io/Open-Codeforces-Status",
  },
  {
    title: "Biddut Bill Checker",
    link: "https://biddut-bill-check.netlify.app",
  },
  {
    title: "Redo Undo Feature",
    link: "https://redo-undo-feature.netlify.app",
  },
];

// Social Links
export const SOCIALS = [
  {
    name: "GitHub",
    src: "/images/github.svg",
    link: "https://github.com/yeasin4745",
    icon: "github",
  },
  {
    name: "LinkedIn",
    src: "/images/linkedin.svg",
    link: "https://linkedin.com/in/yeasin4745",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    src: "/images/twitter.svg",
    link: "https://twitter.com/yeasin4745",
    icon: "twitter",
  },
  {
    name: "Facebook",
    src: "/images/facebook.svg",
    link: "https://facebook.com/yeasin4745",
    icon: "facebook",
  },
];

// Problem Solving Profiles
export const CODING_PROFILES = [
  {
    name: "HackerRank",
    link: "https://hackerrank.com/profile/yeasin4745",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/yeasinali4745",
  },
];

// Original skill data (kept for compatibility)
export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/images/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/images/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/images/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/images/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/images/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/images/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/images/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/images/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/images/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "/images/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe Payment",
    Image: "/images/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node js",
    Image: "/images/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/images/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/images/html.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Css",
    Image: "/images/css.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Java Script",
    Image: "/images/js.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/images/tailwind.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "React",
    Image: "/images/react.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Type Script",
    Image: "/images/ts.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Next js 13",
    Image: "/images/next.png",
    width: 55,
    height: 55,
  },
];

export const Backend_skill = [
  {
    skill_name: "Django",
    Image: "/images/django.svg",
    width: 60,
    height: 60,
  },

  {
    skill_name: "Postger SQL",
    Image: "/images/postger.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "My SQL",
    Image: "/images/mysql.png",
    width: 45,
    height: 45,
  },
  {
    skill_name: "Supabase",
    Image: "/images/supabase.svg",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/images/Firebase.png",
    width: 35,
    height: 35,
  },
];

export const DevTools = [
  {
    skill_name: "GitHub",
    Image: "/images/gitwhite.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Vercel",
    Image: "/images/vercel.svg",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Figma",
    Image: "/images/figma.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Railway",
    Image: "/images/railway.svg",
    width: 50,
    height: 50,
  },
  {
    skill_name: "VS Code",
    Image: "/images/vs.svg",
    width: 50,
    height: 50,
  },
  {
    skill_name: "ChatGPT",
    Image: "/images/chatgpt.svg",
    width: 50,
    height: 50,
  },
];

export const libraries = [
  {
    skill_name: "Framer Motion",
    Image: "/images/framer.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "React Icon",
    Image: "/images/icons.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JWT",
    Image: "/images/jwt.svg",
    width: 60,
    height: 60,
  },
  {
    skill_name: "ThreeJs",
    Image: "/images/threejs.png",
    width: 50,
    height: 50,
  },
];

// Blog Posts
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building an AI-Powered Telegram Bot Using Node.js and Google Gemini API",
    slug: "telegram-bot-nodejs-gemini",
    summary: "Learn how to build a production-ready, AI-powered Telegram bot using Node.js and Google Gemini API. This case study covers architecture, real-world challenges, deployment strategies, and practical lessons from building a publicly accessible bot with real-user interactions.",
    category: "AI / Machine Learning",
    subcategory: "Web Development · Case Study",
    publishedDate: "2026-01-23",
    readTime: 8,
    featured: true,
    featuredImage: "/images/blog-telegram-bot-featured.jpg",
    projectLink: "https://t.me/yeasin_ai_bot",
  },
  {
    id: 2,
    title: "Building a House Price Prediction Model in the Browser Using TensorFlow.js",
    slug: "house-price-prediction-tensorflow",
    summary: "This article explores how machine learning models can be trained and executed directly in the browser using TensorFlow.js. It demonstrates a practical house price prediction system built with JavaScript and statistical concepts without relying on a backend ML server.",
    category: "AI / Machine Learning",
    subcategory: "Case Study",
    publishedDate: "2026-01-15",
    readTime: 7,
    featured: true,
    featuredImage: "/images/blog-house-price-featured.jpg",
    projectLink: "https://house-price-predction.netlify.app",
  },
  {
    id: 3,
    title: "Building a Real-Time Currency Converter Web App Using JavaScript",
    slug: "currency-converter-javascript",
    summary: "Discover how to build a modern, real-time currency converter web application using vanilla JavaScript and public APIs. This case study covers API integration, asynchronous programming, responsive UI design, and practical lessons from building a useful tool with a minimal tech stack.",
    category: "Web Development",
    subcategory: "Frontend · Case Study",
    publishedDate: "2026-01-24",
    readTime: 6,
    featured: false,
    featuredImage: "/images/blog-currency-converter-featured.jpg",
    projectLink: "https://yeasin4745.github.io/currency-converter/",
  },
];
