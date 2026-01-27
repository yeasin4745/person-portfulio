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
    title: "মেশটক: ইন্টারনেট-মুক্ত স্থানীয় যোগাযোগের নতুন দিগন্ত",
    slug: "meshtalk-offline-local-communication",
    summary: "মেশটক (MeshTalk) একটি বিকেন্দ্রীভূত লোকাল নেটওয়ার্ক কমিউনিকেশন প্ল্যাটফর্ম যা বৈশ্বিক ইন্টারনেট সংযোগ ছাড়াই একটি নির্দিষ্ট এলাকার মধ্যে থাকা ডিভাইসগুলোর মধ্যে দ্রুত, নিরাপদ এবং সাশ্রয়ী যোগাযোগ নিশ্চিত করে।",
    category: "Local Network Communication",
    subcategory: "Technology · Innovation",
    publishedDate: "2026-01-27",
    readTime: 5,
    featured: true,
    featuredImage: "/images/blog-meshtalk-featured.jpg",
    projectLink: "https://github.com/yeasin4745/meshtalk",
    content: `## মেশটক: ইন্টারনেট-মুক্ত স্থানীয় যোগাযোগের নতুন দিগন্ত

### সংক্ষিপ্ত পরিচয়

মেশটক (MeshTalk) হলো একটি বিকেন্দ্রীভূত লোকাল নেটওয়ার্ক কমিউনিকেশন প্ল্যাটফর্ম, যা বৈশ্বিক ইন্টারনেট সংযোগ ছাড়াই একটি নির্দিষ্ট এলাকার মধ্যে থাকা ডিভাইসগুলোর মধ্যে দ্রুত, নিরাপদ এবং সাশ্রয়ী যোগাযোগ নিশ্চিত করে। এটি প্রচলিত সেন্ট্রালাইজড সিস্টেমের বিকল্প হিসেবে কাজ করে এবং ব্যবহারকারীর তথ্যের পূর্ণ নিয়ন্ত্রণ নিজের কাছে রাখে।

### কীভাবে কাজ করে?

মেশটক সিস্টেমটি 'ক্লায়েন্ট-সার্ভার' আর্কিটেকচারে কাজ করে:

**হোস্ট (Host):** একটি ডিভাইসে Node.js সার্ভার চালু করে সেটিকে নেটওয়ার্কের 'মস্তিষ্ক' হিসেবে তৈরি করা হয়।

**পার্টিসিপেন্ট (Participant):** অন্য ব্যবহারকারীরা কোনো অ্যাপ ছাড়াই কেবল ব্রাউজারের মাধ্যমে হোস্টের লোকাল আইপি ঠিকানায় প্রবেশ করে যুক্ত হন।

**যোগাযোগ:** WebSocket প্রযুক্তির মাধ্যমে বার্তাগুলো লোকাল নেটওয়ার্কের বাইরে না গিয়েই সরাসরি সবার কাছে পৌঁছে যায়।

### প্রধান সুবিধাসমূহ

#### ১. সম্পূর্ণ প্রাইভেসি
ডেটা কোনো তৃতীয় পক্ষের সার্ভারে যায় না, ফলে নজরদারির ভয় থাকে না। আপনার সমস্ত যোগাযোগ সম্পূর্ণভাবে আপনার নিয়ন্ত্রণে থাকে।

#### ২. শূন্য খরচ
কোনো ইন্টারনেট ব্যান্ডউইথ বা ডেটা প্যাকের প্রয়োজন হয় না। শুধুমাত্র একটি স্থানীয় নেটওয়ার্ক সংযোগ যথেষ্ট।

#### ৩. অতি দ্রুত
ল্যাটেন্সি বা বিলম্ব প্রায় শূন্য (মিলিসেকেন্ডের মধ্যে ডেলিভারি)। এটি বৃহৎ ফাইল শেয়ারিং এবং রিয়েল-টাইম যোগাযোগের জন্য আদর্শ।

#### ৪. দুর্যোগে কার্যকর
ইন্টারনেট ব্ল্যাকআউট বা প্রাকৃতিক দুর্যোগের সময়ও এটি সক্রিয় থাকে। জরুরি পরিস্থিতিতে যোগাযোগ ব্যবস্থা নিশ্চিত করে।

### ব্যবহারের ক্ষেত্রসমূহ

#### শিক্ষা প্রতিষ্ঠান
ক্যাম্পাস বা ক্লাসরুমে নোট শেয়ারিং ও আলোচনার জন্য। শিক্ষার্থীরা সহজেই একে অপরের সাথে ফাইল এবং ধারণা বিনিময় করতে পারে।

#### কর্পোরেট অফিস
ইন্টারনেট না থাকলেও অভ্যন্তরীণ গোপনীয় ফাইল ও বার্তা আদান-প্রদান নিশ্চিত করতে। সংবেদনশীল তথ্য সুরক্ষিত রাখে।

#### জরুরি সেবা
হাসপাতালে ডাক্তার-নার্স যোগাযোগ এবং দুর্যোগপূর্ণ এলাকায় উদ্ধার কার্যক্রম সমন্বয়ে। দ্রুত সিদ্ধান্ত গ্রহণে সহায়তা করে।

### প্রযুক্তি স্ট্যাক

- **ব্যাকএন্ড:** Node.js
- **ফ্রন্টএন্ড:** HTML, CSS, JavaScript
- **রিয়েল-টাইম যোগাযোগ:** WebSocket / Socket.io
- **আর্কিটেকচার:** ক্লায়েন্ট-সার্ভার মডেল

### ভবিষ্যৎ রোডম্যাপ

প্রজেক্টটির উন্নয়নে বেশ কয়েকটি ধাপ পরিকল্পনা করা হয়েছে:

**ধাপ ২:** ফাইল শেয়ারিং (PDF, ছবি) এবং এন্ড-টু-এন্ড এনক্রিপশন যুক্ত করা।

**ধাপ ৩:** এআই-চালিত অটো রেসপন্স (IRS) ও নেটিভ মোবাইল অ্যাপ তৈরি।

**ধাপ ৪:** ভয়েস ও ভিডিও কলিং সুবিধা এবং সম্পূর্ণ একটি ইকোসিস্টেম গড়ে তোলা।

### উপসংহার

মেশটক কেবল একটি সফটওয়্যার নয়, এটি যোগাযোগের একটি নতুন দর্শন যা ডিজিটাল সার্বভৌমত্ব নিশ্চিত করে। একটি বিশ্বে যেখানে ডেটা গোপনীয়তা ক্রমবর্ধমান গুরুত্বপূর্ণ হয়ে উঠছে, মেশটক একটি শক্তিশালী সমাধান প্রদান করে যা সকলের জন্য নিরাপদ এবং সাশ্রয়ী যোগাযোগ নিশ্চিত করে।`,
  },
  {
    id: 2,
    title: "Building an AI-Powered Telegram Bot Using Node.js and Google Gemini API",
    slug: "telegram-bot-nodejs-gemini",
    summary: "Learn how to build a production-ready, AI-powered Telegram bot using Node.js and Google Gemini API. This case study covers architecture, real-world challenges, deployment strategies, and practical lessons from building a publicly accessible bot with real-user interactions.",
    description: "Explore the complete journey of building an intelligent Telegram bot that leverages Google's Gemini API for natural language processing. This comprehensive guide covers system architecture, handling concurrent users, error management, and deployment on production servers. Perfect for developers interested in AI integration and real-time messaging platforms.",
    category: "AI / Machine Learning",
    subcategory: "Web Development · Case Study",
    publishedDate: "2026-01-23",
    readTime: 8,
    featured: false,
    featuredImage: "/images/blog-telegram-bot-featured.jpg",
    projectLink: "https://t.me/yeasin_ai_bot",
  },
  {
    id: 4,
    title: "Building a House Price Prediction Model in the Browser Using TensorFlow.js",
    slug: "house-price-prediction-tensorflow",
    summary: "This article explores how machine learning models can be trained and executed directly in the browser using TensorFlow.js. It demonstrates a practical house price prediction system built with JavaScript and statistical concepts without relying on a backend ML server.",
    description: "Discover how to bring machine learning to the frontend without backend servers. This hands-on guide demonstrates building a neural network for real estate price prediction using TensorFlow.js. Learn about data normalization, model training, and interactive visualizations that run entirely in your browser.",
    category: "AI / Machine Learning",
    subcategory: "Case Study",
    publishedDate: "2026-01-15",
    readTime: 7,
    featured: false,
    featuredImage: "/images/blog-house-price-featured.jpg",
    projectLink: "https://house-price-predction.netlify.app",
  },
  {
    id: 5,
    title: "Building a Real-Time Currency Converter Web App Using JavaScript",
    slug: "currency-converter-javascript",
    summary: "Discover how to build a modern, real-time currency converter web application using vanilla JavaScript and public APIs. This case study covers API integration, asynchronous programming, responsive UI design, and practical lessons from building a useful tool with a minimal tech stack.",
    description: "Master the fundamentals of building practical web applications with vanilla JavaScript. This project demonstrates real-time API integration for live exchange rates, responsive mobile design, and error handling best practices. A perfect starter project for understanding modern web development without frameworks.",
    category: "Web Development",
    subcategory: "Frontend · Case Study",
    publishedDate: "2026-01-24",
    readTime: 6,
    featured: false,
    featuredImage: "/images/blog-currency-converter-featured.jpg",
    projectLink: "https://yeasin4745.github.io/currency-converter/",
  },
];
