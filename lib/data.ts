export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  duration: string;
  rating: number;
  reviews: number;
  level: string;
  description: string;
  curriculum: string[];
  image: string;
  category: string;
  price: number | "Free";
  lectures: number;
  language: string;
  certificate: boolean;
  enrolled: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp: HTML, CSS, JS & React",
    instructor: "James Anderson",
    instructorAvatar: "https://i.pravatar.cc/150?img=12",
    duration: "42 hr 30 mins",
    rating: 4.9,
    reviews: 8420,
    level: "Beginner",
    description:
      "Master web development from scratch. Learn HTML5, CSS3, JavaScript ES6+, React 18, Node.js, and deploy real-world projects. This comprehensive bootcamp takes you from zero to full-stack developer with hands-on projects and real-world applications. You'll build 15+ projects including a social media app, e-commerce platform, and portfolio website.",
    curriculum: [
      "Introduction to HTML5 & Semantic Markup",
      "CSS3 Fundamentals & Flexbox/Grid Layouts",
      "JavaScript ES6+ & DOM Manipulation",
      "React 18 with Hooks & Context API",
      "Node.js & Express Backend Development",
      "MongoDB Database Integration",
      "Authentication & Security Best Practices",
      "Deployment with Vercel & Railway",
    ],
    image:
      "https://images.unsplash.com/photo-1587620962725-abab19836100?w=800&q=80",
    category: "Web Development",
    price: 299,
    lectures: 186,
    language: "English",
    certificate: true,
    enrolled: 15420,
  },
  {
    id: "2",
    title: "UI/UX Design Mastery: Create Stunning Digital Experiences",
    instructor: "Daniel Foster",
    instructorAvatar: "https://i.pravatar.cc/150?img=53",
    duration: "28 hr 15 mins",
    rating: 4.8,
    reviews: 5230,
    level: "Intermediate",
    description:
      "Learn professional UI/UX design using Figma, design systems, user research, and prototyping. Create beautiful, user-centered digital products that convert. This course covers the entire design process from research and wireframing to high-fidelity prototypes and developer handoff.",
    curriculum: [
      "Design Thinking & User Research Methods",
      "Wireframing & Low-Fidelity Prototyping",
      "Figma Fundamentals & Advanced Techniques",
      "Design Systems & Component Libraries",
      "Color Theory & Typography in Digital Design",
      "Interaction Design & Micro-animations",
      "Usability Testing & Iteration",
      "Developer Handoff with Figma",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "Design",
    price: 249,
    lectures: 124,
    language: "English",
    certificate: true,
    enrolled: 9870,
  },
  {
    id: "3",
    title: "Data Science & Machine Learning with Python – Hands On!",
    instructor: "Jason Williams",
    instructorAvatar: "https://i.pravatar.cc/150?img=11",
    duration: "38 hr 45 mins",
    rating: 4.9,
    reviews: 11240,
    level: "Intermediate",
    description:
      "Dive deep into data science with Python, Pandas, NumPy, Scikit-Learn, and TensorFlow. Build real ML models and deploy them to production. Learn to analyze large datasets, build predictive models, and create data visualizations that tell compelling stories.",
    curriculum: [
      "Python for Data Science Fundamentals",
      "Data Manipulation with Pandas & NumPy",
      "Exploratory Data Analysis & Visualization",
      "Machine Learning Algorithms Deep Dive",
      "Neural Networks & Deep Learning with TensorFlow",
      "Natural Language Processing (NLP)",
      "Computer Vision Projects",
      "Model Deployment with Flask & Docker",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Data Science",
    price: 385,
    lectures: 210,
    language: "English",
    certificate: true,
    enrolled: 22150,
  },
  {
    id: "4",
    title: "Digital Marketing Complete Guide: SEO, Social Media & Ads",
    instructor: "Marcus Chen",
    instructorAvatar: "https://i.pravatar.cc/150?img=33",
    duration: "22 hr 00 mins",
    rating: 4.7,
    reviews: 4180,
    level: "Beginner",
    description:
      "Master digital marketing from SEO and content marketing to paid ads and social media. Learn to build campaigns that drive real business results. Covers Google Ads, Meta Ads, email marketing, and analytics tools to measure and optimize your marketing ROI.",
    curriculum: [
      "Digital Marketing Strategy & Foundations",
      "Search Engine Optimization (SEO) Complete",
      "Content Marketing & Blogging for Business",
      "Google Ads & PPC Campaign Management",
      "Facebook & Instagram Advertising",
      "Email Marketing Automation",
      "Social Media Marketing Strategy",
      "Analytics & Performance Measurement",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Marketing",
    price: 136,
    lectures: 98,
    language: "English",
    certificate: true,
    enrolled: 8340,
  },
  {
    id: "5",
    title: "Finance & Investment Series: Budget, Invest & Build Wealth",
    instructor: "Robert Simmons",
    instructorAvatar: "https://i.pravatar.cc/150?img=68",
    duration: "18 hr 30 mins",
    rating: 4.8,
    reviews: 3920,
    level: "Beginner",
    description:
      "Learn personal finance, budgeting, investing in stocks, ETFs, and real estate. Build long-term wealth with proven strategies used by financial experts. This course demystifies personal finance and gives you a clear roadmap to financial independence.",
    curriculum: [
      "Personal Finance Fundamentals",
      "Budgeting & Expense Tracking Systems",
      "Emergency Funds & Debt Management",
      "Stock Market Basics & Investment Strategies",
      "ETFs, Mutual Funds & Index Investing",
      "Real Estate Investment Fundamentals",
      "Tax Planning & Optimization",
      "Building a Retirement Portfolio",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    category: "Finance",
    price: "Free",
    lectures: 82,
    language: "English",
    certificate: true,
    enrolled: 18760,
  },
  {
    id: "6",
    title: "Graphic Design: Illustrating Badges & Icons with Geometric Shapes",
    instructor: "Alex Rivera",
    instructorAvatar: "https://i.pravatar.cc/150?img=15",
    duration: "14 hr 20 mins",
    rating: 4.7,
    reviews: 2840,
    level: "Beginner",
    description:
      "Create professional logos, badges, and icons using Adobe Illustrator and geometric design principles. Perfect for aspiring graphic designers. Learn the fundamentals of vector graphics and develop a distinctive visual style that sets your work apart.",
    curriculum: [
      "Adobe Illustrator Interface & Tools",
      "Geometric Shape Fundamentals",
      "Color Theory for Graphic Design",
      "Logo Design Principles & Process",
      "Icon Design for Digital Platforms",
      "Badge & Emblem Design",
      "Typography in Branding",
      "Exporting & Preparing Files for Print/Web",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    category: "Design",
    price: 237,
    lectures: 67,
    language: "English",
    certificate: true,
    enrolled: 6420,
  },
  {
    id: "7",
    title: "Photography Masterclass: From Beginner to Professional",
    instructor: "Carlos Vasquez",
    instructorAvatar: "https://i.pravatar.cc/150?img=57",
    duration: "25 hr 10 mins",
    rating: 4.9,
    reviews: 6720,
    level: "Beginner",
    description:
      "Learn professional photography techniques, composition, lighting, and post-processing with Lightroom & Photoshop. Transform your photography skills and start shooting like a pro. Covers portrait, landscape, street, and product photography.",
    curriculum: [
      "Camera Settings & Exposure Triangle",
      "Composition Rules & Creative Framing",
      "Natural & Artificial Lighting Techniques",
      "Portrait Photography Mastery",
      "Landscape & Travel Photography",
      "Adobe Lightroom Workflow & Editing",
      "Photoshop Retouching Techniques",
      "Building Your Photography Business",
    ],
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    category: "Photography",
    price: 189,
    lectures: 142,
    language: "English",
    certificate: true,
    enrolled: 12340,
  },
  {
    id: "8",
    title: "Culture & Leadership: Strategies for a Successful Business",
    instructor: "Patrick Collins",
    instructorAvatar: "https://i.pravatar.cc/150?img=60",
    duration: "16 hr 45 mins",
    rating: 4.6,
    reviews: 3150,
    level: "Advanced",
    description:
      "Develop exceptional leadership skills, build high-performing teams, and create winning organizational culture. Essential for managers and aspiring leaders. Learn frameworks used by Fortune 500 executives to drive growth and innovation.",
    curriculum: [
      "Leadership Styles & Adaptive Leadership",
      "Building High-Performance Teams",
      "Organizational Culture Design",
      "Strategic Communication & Influence",
      "Conflict Resolution & Negotiation",
      "Performance Management Systems",
      "Change Management & Innovation",
      "Executive Presence & Personal Brand",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Business",
    price: 295,
    lectures: 89,
    language: "English",
    certificate: true,
    enrolled: 7890,
  },
];

export const instructors = [
  {
    id: "1",
    name: "James Anderson",
    specialty: "Full-Stack Developer",
    image: "https://i.pravatar.cc/300?img=12",
    courses: 12,
    students: 45200,
    rating: 4.9,
  },
  {
    id: "2",
    name: "Jason Williams",
    specialty: "Data Scientist & ML Engineer",
    image: "https://i.pravatar.cc/300?img=11",
    courses: 8,
    students: 32100,
    rating: 4.9,
  },
  {
    id: "3",
    name: "Daniel Foster",
    specialty: "UX/UI Design Lead",
    image: "https://i.pravatar.cc/300?img=53",
    courses: 6,
    students: 28400,
    rating: 4.8,
  },
  {
    id: "4",
    name: "Marcus Chen",
    specialty: "Digital Marketing Expert",
    image: "https://i.pravatar.cc/300?img=33",
    courses: 5,
    students: 19800,
    rating: 4.7,
  },
];

export const tips = [
  {
    id: "1",
    title: "10 Proven Strategies to Learn Any Skill Faster",
    category: "Learning Tips",
    author: "James Anderson",
    authorAvatar: "https://i.pravatar.cc/150?img=12",
    date: "March 21, 2024",
    likes: 2568,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
  {
    id: "2",
    title: "Why Project-Based Learning Outperforms Traditional Methods",
    category: "UX Design",
    author: "Daniel Foster",
    authorAvatar: "https://i.pravatar.cc/150?img=53",
    date: "March 15, 2024",
    likes: 1924,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: "3",
    title: "Building a 6-Figure Career with Online Certifications",
    category: "Business",
    author: "Patrick Collins",
    authorAvatar: "https://i.pravatar.cc/150?img=60",
    date: "March 10, 2024",
    likes: 3412,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];
