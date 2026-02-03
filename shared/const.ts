export const COOKIE_NAME = "auth_token";
export const AXIOS_TIMEOUT_MS = 30000;
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
export const UNAUTHED_ERR_MSG = "UNAUTHORIZED";
export const NOT_ADMIN_ERR_MSG = "Admin access required";
export const INVALID_CREDENTIALS_ERR_MSG = "Invalid credentials";
export const USER_NOT_FOUND_ERR_MSG = "User not found";
export const INTERNAL_SERVER_ERROR_MSG = "Internal server error";

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
    content: `## MeshTalk: A New Era of Internet-Free Local Communication

### Introduction

MeshTalk is a decentralized local network communication platform that enables fast, secure, and cost-effective communication between devices within a specific area without requiring global internet connectivity. It serves as an alternative to traditional centralized systems while maintaining complete user control over data and information.

### How It Works

MeshTalk operates on a client-server architecture:

**Host:** A device runs a Node.js server that acts as the "brain" of the network, managing all communications and connections.

**Participants:** Other users can join by simply accessing the host's local IP address through their browser without needing any additional applications.

**Communication:** Messages are transmitted through WebSocket technology, ensuring instant delivery within the local network without any data leaving the network boundaries.

### Key Features and Benefits

#### 1. Complete Privacy

Data never reaches third-party servers, eliminating surveillance concerns. All communications remain under your complete control and ownership.

#### 2. Zero Cost

No internet bandwidth or data plans required. Only a local network connection is necessary, making it extremely economical.

#### 3. Lightning Fast

Near-zero latency with message delivery in milliseconds. Perfect for large file sharing and real-time communication requirements.

#### 4. Disaster-Resilient

Remains operational during internet blackouts and natural disasters. Ensures communication continuity during emergencies and critical situations.

### Use Cases

#### Educational Institutions

Facilitates note sharing and discussions within campus or classroom environments. Students can easily exchange files and ideas with peers.

#### Corporate Offices

Enables secure internal file and message exchange even without internet connectivity. Protects sensitive organizational information.

#### Emergency Services

Supports doctor-nurse communication in hospitals and coordination of rescue operations in disaster-affected areas. Enables rapid decision-making during critical situations.

#### Community Networks

Perfect for neighborhood communication systems, local event coordination, and community resource sharing without external dependencies.

### Technology Stack

- **Backend:** Node.js
- **Frontend:** HTML, CSS, JavaScript
- **Real-time Communication:** WebSocket / Socket.io
- **Architecture:** Client-Server Model
- **Protocol:** TCP/IP over Local Network

### Development Roadmap

The project has several planned development phases:

**Phase 2:** File sharing capabilities (PDF, images) and end-to-end encryption implementation.

**Phase 3:** AI-powered auto-response system (IRS) and native mobile applications.

**Phase 4:** Voice and video calling features with a complete ecosystem development.

**Phase 5:** Integration with IoT devices and advanced network management features.

### Technical Challenges and Solutions

**Challenge:** Managing concurrent user connections efficiently
**Solution:** Implemented connection pooling and optimized WebSocket event handling

**Challenge:** Ensuring message delivery reliability
**Solution:** Added acknowledgment system and message queuing mechanism

**Challenge:** Network security within local environments
**Solution:** Implemented token-based authentication and data encryption

### Performance Metrics

- **Average Message Latency:** < 50ms
- **Concurrent Users Supported:** 500+
- **File Transfer Speed:** Limited only by network bandwidth
- **Uptime:** 99.9% (hardware dependent)

### Conclusion

MeshTalk is more than just software; it's a new philosophy of communication that ensures digital sovereignty. In an era where data privacy is increasingly critical, MeshTalk provides a powerful solution for secure and economical communication accessible to everyone. Whether for educational institutions, corporate offices, or emergency services, MeshTalk represents the future of local network communication.

The platform demonstrates that effective communication doesn't always require global internet infrastructure. By leveraging local networks efficiently, we can create more resilient, private, and sustainable communication systems that serve the needs of modern society.`,
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
    projectLink: "https://github.com/yeasin4745/telegram-ai-bot",
    content: `## Building an AI-Powered Telegram Bot Using Node.js and Google Gemini API

### Project Overview

This article documents the complete development journey of creating an AI-powered Telegram bot that leverages Google's Gemini API. The bot processes natural language queries and provides intelligent responses in real-time.

### Architecture Design

The bot follows a modular architecture with clear separation of concerns:

**Request Handler:** Receives messages from Telegram API
**AI Engine:** Processes queries using Google Gemini API
**Response Manager:** Formats and sends responses back to users
**Error Handler:** Manages failures and edge cases

### Key Implementation Details

#### 1. Telegram Bot Setup

Using the Telegram Bot API, we establish a webhook connection to receive updates from Telegram servers.

#### 2. Google Gemini Integration

The Gemini API provides state-of-the-art natural language understanding and generation capabilities.

#### 3. Concurrent User Handling

Implemented request queuing and connection pooling to handle multiple simultaneous users efficiently.

#### 4. Error Management

Comprehensive error handling ensures graceful degradation and informative user feedback.

### Deployment Considerations

The bot is deployed on Render, a modern cloud platform that provides:
- Automatic scaling
- Environment variable management
- Continuous deployment from GitHub
- 24/7 uptime monitoring

### Performance Optimization

- Response caching for common queries
- Rate limiting to prevent abuse
- Asynchronous processing for non-blocking operations
- Database optimization for user data storage

### Lessons Learned

1. **API Rate Limits:** Always implement exponential backoff for API calls
2. **User Experience:** Provide clear feedback for long-running operations
3. **Security:** Validate all user inputs and sanitize data
4. **Monitoring:** Implement comprehensive logging for debugging

### Future Enhancements

- Multi-language support
- Advanced context management
- Voice message processing
- Integration with other AI models

### Conclusion

Building an AI-powered Telegram bot demonstrates the power of combining modern AI APIs with accessible messaging platforms. The project showcases practical implementation of production-ready code with real-world considerations.`,
  },
  {
    id: 3,
    title: "Machine Learning: House Price Prediction Using TensorFlow.js",
    slug: "house-price-prediction-tensorflow",
    summary: "Explore how to build a machine learning model for predicting house prices using TensorFlow.js. Learn data preprocessing, model training, evaluation, and deployment of ML models in the browser.",
    category: "Machine Learning",
    subcategory: "Data Science · Web Development",
    publishedDate: "2026-01-20",
    readTime: 6,
    featured: false,
    featuredImage: "/images/blog-house-price-featured.jpg",
    projectLink: "https://github.com/yeasin4745/house-price-prediction",
    content: `## Machine Learning: House Price Prediction Using TensorFlow.js

### Introduction to the Project

This project demonstrates building a machine learning model entirely in the browser using TensorFlow.js. The model predicts house prices based on various features like square footage, number of bedrooms, and location.

### Data Preparation

The first step involves collecting and preparing training data:

**Data Collection:** Gathered real estate data from public datasets
**Feature Engineering:** Selected relevant features affecting house prices
**Normalization:** Scaled features to improve model training
**Train-Test Split:** Divided data into training and testing sets

### Model Architecture

The neural network consists of:

- **Input Layer:** Accepts multiple house features
- **Hidden Layers:** Two dense layers with ReLU activation
- **Output Layer:** Single neuron for price prediction

### Training Process

The model uses:
- **Optimizer:** Adam optimizer for efficient convergence
- **Loss Function:** Mean squared error for regression
- **Epochs:** 100 iterations over the training data
- **Batch Size:** 32 samples per batch

### Model Evaluation

Performance metrics include:
- **Mean Absolute Error (MAE):** Average prediction error
- **R-squared Score:** Proportion of variance explained
- **Root Mean Squared Error (RMSE):** Standard deviation of residuals

### Browser Deployment

TensorFlow.js enables running the model directly in the browser:
- No server-side computation required
- Instant predictions for users
- Privacy-preserving (data stays on client)
- Reduced latency

### Practical Applications

- Real estate price estimation
- Investment property analysis
- Market trend analysis
- Automated valuation models

### Conclusion

This project demonstrates that sophisticated machine learning models can run efficiently in modern web browsers, opening new possibilities for interactive ML applications.`,
  },
  {
    id: 4,
    title: "Building a Real-Time Currency Converter with React and Modern APIs",
    slug: "currency-converter-react",
    summary: "Create a real-time currency converter application using React and live exchange rate APIs. Learn about API integration, state management, and responsive UI design.",
    category: "Web Development",
    subcategory: "React · Frontend · APIs",
    publishedDate: "2026-01-18",
    readTime: 4,
    featured: false,
    featuredImage: "/images/blog-currency-converter-featured.jpg",
    projectLink: "https://github.com/yeasin4745/currency-converter",
    content: `## Building a Real-Time Currency Converter with React and Modern APIs

### Project Concept

A modern currency converter that fetches live exchange rates and provides instant conversion between multiple currencies with a beautiful, responsive interface.

### Technology Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **API:** Exchange Rate API
- **State Management:** React Hooks
- **Deployment:** GitHub Pages

### Key Features

#### 1. Real-Time Exchange Rates

Fetches current exchange rates from a reliable API to ensure accuracy.

#### 2. Multiple Currency Support

Supports conversion between 150+ currencies worldwide.

#### 3. Responsive Design

Works seamlessly on desktop, tablet, and mobile devices.

#### 4. Conversion History

Maintains a history of recent conversions for quick reference.

### Implementation Details

**API Integration:** Uses fetch API to retrieve exchange rates
**Error Handling:** Gracefully handles network failures and API errors
**Caching:** Implements local caching to reduce API calls
**User Interface:** Clean, intuitive design for easy conversion

### Performance Optimization

- Debounced API calls to prevent excessive requests
- Memoization of exchange rate data
- Lazy loading of currency lists
- Optimized re-renders using React.memo

### User Experience Features

- Instant conversion as you type
- Favorite currency pairs
- Offline mode with cached rates
- Dark mode support

### Deployment Strategy

The application is deployed on GitHub Pages with:
- Automatic builds on push
- Environment variable management
- CDN distribution for fast loading

### Conclusion

This project showcases how to build practical, user-friendly applications that integrate with real-world APIs while maintaining excellent performance and user experience.`,
  },
];
