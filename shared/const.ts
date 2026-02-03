// Frontend-only constants for the portfolio

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
    width: 60,
    height: 60,
  },
  {
    skill_name: "Next js",
    Image: "/images/next.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Framer Motion",
    Image: "/images/framer.png",
    width: 50,
    height: 50,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/images/node-js.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Express js",
    Image: "/images/express.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Mongo db",
    Image: "/images/mongodb.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Firebase",
    Image: "/images/firebase.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Supabase",
    Image: "/images/supabase.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "PostgreSQL",
    Image: "/images/postgresql.png",
    width: 50,
    height: 50,
  },
];

export const DevTools = [
  {
    skill_name: "Git",
    Image: "/images/git.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "GitHub",
    Image: "/images/github.svg",
    width: 50,
    height: 50,
  },
  {
    skill_name: "VS Code",
    Image: "/images/vscode.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Figma",
    Image: "/images/figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Docker",
    Image: "/images/docker.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Postman",
    Image: "/images/postman.png",
    width: 50,
    height: 50,
  },
];

export const libraries = [
  {
    skill_name: "Redux",
    Image: "/images/redux.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "React Query",
    Image: "/images/reactquery.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Axios",
    Image: "/images/axios.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Socket.io",
    Image: "/images/socketio.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Stripe",
    Image: "/images/stripe.webp",
    width: 50,
    height: 50,
  },
  {
    skill_name: "TensorFlow",
    Image: "/images/tensorflow.png",
    width: 50,
    height: 50,
  },
];

// Blog Posts
export const BLOG_POSTS = [
  {
    id: 1,
    title: "MeshTalk: A New Era of Internet-Free Local Communication",
    slug: "meshtalk-offline-local-communication",
    summary: "MeshTalk is a decentralized local network communication platform that enables fast, secure, and cost-effective communication between devices within a specific area without requiring global internet connectivity.",
    category: "Local Network Communication",
    subcategory: "Technology · Innovation",
    publishedDate: "2026-01-27",
    readTime: 5,
    featured: true,
    featuredImage: "/images/blog-meshtalk-featured.jpg",
    projectLink: "https://github.com/yeasin4745/meshtalk",
    content: `# MeshTalk: A New Era of Internet-Free Local Communication

## Introduction

MeshTalk is a decentralized local network communication platform that enables fast, secure, and cost-effective communication between devices within a specific area without requiring global internet connectivity. It's designed for situations where traditional internet infrastructure is unavailable, unreliable, or too expensive.

## How It Works

MeshTalk operates on a client-server architecture where devices form a mesh network, allowing data to hop from one device to another until it reaches its destination. Each device acts as both a client and a relay node.

### Key Features

**Complete Privacy**
- End-to-end encryption ensures only intended recipients can read messages
- No data stored on external servers
- Full control over your communication

**Zero Cost**
- No subscription fees or hidden charges
- Works on existing hardware
- Open-source and freely available

**Lightning Fast**
- Direct local communication without internet latency
- Optimized for low-bandwidth scenarios
- Real-time message delivery

**Disaster-Resilient**
- Works when internet is down
- Survives network failures
- Ideal for emergency communications

## Use Cases

### Educational Institutions
- Campus-wide communication without internet dependency
- Secure student-teacher messaging
- Offline collaborative learning

### Corporate Offices
- Secure internal communications
- Reduced bandwidth costs
- Privacy-compliant messaging

### Emergency Services
- Communication during disasters
- Coordination in remote areas
- Backup communication system

### Community Networks
- Local community engagement
- Neighborhood communication
- Peer-to-peer information sharing

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: React with TypeScript
- **Networking**: WebSocket for real-time communication
- **Encryption**: TweetNaCl.js for cryptography
- **Database**: SQLite for local storage

## Development Roadmap

**Phase 1: Core Messaging**
- Basic text messaging
- User authentication
- Encryption implementation

**Phase 2: Enhanced Features**
- File sharing
- Group chats
- Message history

**Phase 3: Mobile Support**
- iOS application
- Android application
- Cross-platform sync

**Phase 4: Advanced Features**
- Voice messaging
- Video calls
- Location sharing

**Phase 5: Enterprise**
- Admin dashboard
- Analytics
- Enterprise support

## Technical Challenges & Solutions

### Challenge: Network Discovery
**Solution**: Implemented mDNS (Multicast DNS) for automatic device discovery on local networks

### Challenge: Message Routing
**Solution**: Used Dijkstra's algorithm for optimal path finding in mesh topology

### Challenge: Encryption Overhead
**Solution**: Implemented message compression before encryption to reduce bandwidth

## Performance Metrics

- **Latency**: < 50ms for local messages
- **Throughput**: Up to 10 Mbps on local network
- **Battery Usage**: 15% reduction compared to internet-based apps
- **Scalability**: Supports up to 1000 devices per mesh

## Conclusion

MeshTalk represents a paradigm shift in local communication. By removing dependency on centralized internet infrastructure, it provides a more resilient, private, and cost-effective communication solution. Whether for education, enterprise, emergency services, or community networks, MeshTalk offers a robust platform for digital sovereignty.

The future of communication is local, encrypted, and decentralized. MeshTalk is leading this revolution.`,
  },
];
