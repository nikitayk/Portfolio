export const site = {
  name: "Nikita Chaurasia",
  role: "Software Engineer",
  tagline: "ECAM · ECE + AI/ML @ NSUT",
  location: "New Delhi, India",
  email: "nikita.chaurasia.ug23@nsut.ac.in",
  phone: "+91-9868365249",
  phoneHref: "tel:+919868365249",
  valueProp:
    "I build systems that catch secrets before they leave the browser — and price ad bids in under five milliseconds.",
  bio: [
    "I'm a B.Tech student in ECAM (ECE + AI/ML) at Netaji Subhas University of Technology, focused on algorithms, backend systems, and machine learning applied to real pipelines.",
    "My work centers on two shipped systems — SENTINEL for local-first AI prompt security and ADPULSE for in-memory real-time ad bidding — with a bias toward performance, testing, and production-ready engineering.",
    "300+ DSA problems solved. Strong hackathon track record. Open to software engineering internships and full-time roles.",
  ],
  resumePath: "/Nikita Chaurasia Resume.pdf",
  photo: {
    src: "/nikita-chaurasia.jpg",
    fallback: "/nikita-chaurasia.jpg",
    alt: "Nikita Chaurasia — software engineer portrait with editorial duotone treatment",
    width: 900,
    height: 1200,
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikita-chaurasia-b82910288/",
  },
  {
    label: "GitHub",
    href: "https://github.com/nikitayk",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/nikitayk/",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/nikitardfe8",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    title: "Systems & CS",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOP",
      "System Design",
    ],
  },
  {
    title: "ML & Data",
    items: [
      "Machine Learning",
      "Supervised Learning",
      "Feature Engineering",
      "LightGBM",
      "Model Training",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Algorithm Design",
      "Complexity Analysis",
      "Debugging & Optimization",
    ],
  },
  {
    title: "Analytical",
    items: [
      "Logical Reasoning",
      "Pattern Recognition",
      "Data Interpretation",
    ],
  },
] as const;

export type ExperienceKind = "project" | "competition";

export const experience = [
  {
    id: "sentinel",
    kind: "project" as ExperienceKind,
    title: "SENTINEL — AI Prompt Security Gateway",
    org: "Independent · Academic Project",
    type: "Security Engineering",
    period: "2026-06",
    stack: [
      "Python",
      "Manifest V3",
      "React",
      "Chart.js",
      "FastAPI",
      "JWT",
    ],
    highlights: [
      "Built a Manifest V3 Chrome extension that intercepts prompts on ChatGPT, Claude, and Gemini — scanning for API keys, credentials, and PII with zero network calls in the detection path.",
      "Implemented 5 algorithms from scratch (Aho-Corasick, Shannon entropy, Trie, Max-Heap, Merge-Intervals) detecting 24 secret patterns plus base64 decode-and-rescan.",
      "Shipped a React + Chart.js dashboard with FastAPI + JWT backend, 3 sensitivity levels, and 104 tests covering ReDoS safety and a false-positive corpus.",
    ],
    liveUrl: "https://nikitayk.github.io/SENTINEL",
    githubUrl: "https://github.com/nikitayk/SENTINEL",
  },
  {
    id: "adpulse",
    kind: "project" as ExperienceKind,
    title: "ADPULSE — Real-Time Demand-Side Platform",
    org: "Independent · Academic Project",
    type: "Real-Time Systems",
    period: "2026-06",
    stack: ["Python", "LightGBM", "Flask-SocketIO", "Three.js", "Docker"],
    highlights: [
      "Built a full-stack DSP participating in real-time ad auctions with in-memory bid pricing at ~5 ms and a sustained live feed of 7 bids/sec.",
      "Trained 2 LightGBM models (CTR + CVR) on IPinYou logs with 12 engineered features; pricing scales up to 11× base with budget pacer and hard cap of 300.",
      "Engineered a generator-based pipeline streaming multi-GB logs in O(1) memory; Flask-SocketIO + Three.js 3D dashboard, 46 tests across Python 3.9/3.11 CI.",
    ],
    liveUrl: "https://adpulse-457r.onrender.com",
    githubUrl: "https://github.com/nikitayk/ADPULSE",
  },
  {
    id: "dtu-execute",
    kind: "competition" as ExperienceKind,
    title: "DTU Execute 4.0 Hackathon",
    org: "Delhi Technological University",
    type: "Competition",
    period: "2025",
    stack: null,
    highlights: [
      "Ranked within the top 4 percentile among 2,500+ teams for technical execution under time constraints.",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "microsoft-hackathons",
    kind: "competition" as ExperienceKind,
    title: "Microsoft Azure Hackathons",
    org: "Hackmania · The Elites (Microsoft Gurugram)",
    type: "Competition",
    period: "2025",
    stack: null,
    highlights: [
      "Top 20 finish at Hackmania (Microsoft Azure) and The Elites (Microsoft Gurugram) on cloud and enterprise-track challenges.",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: "dsa",
    kind: "competition" as ExperienceKind,
    title: "300+ DSA Problems",
    org: "LeetCode · GeeksforGeeks",
    type: "Practice",
    period: "Ongoing",
    stack: null,
    highlights: [
      "Consistent problem-solving demonstrating algorithm design, complexity analysis, and optimization under pressure.",
    ],
    liveUrl: "https://leetcode.com/u/nikitayk/",
    githubUrl: null,
  },
] as const;

export type ProjectCategory = "Security" | "Real-Time Systems";

export const projects = [
  {
    id: "sentinel",
    name: "SENTINEL",
    subtitle: "AI Prompt Security Gateway",
    tagline: "Your prompts. Scanned locally. Before they leave the browser.",
    date: "June 2026",
    category: "Security" as ProjectCategory,
    liveUrl: "https://nikitayk.github.io/SENTINEL",
    githubUrl: "https://github.com/nikitayk/SENTINEL",
    stack: [
      "Python",
      "Manifest V3",
      "React",
      "Chart.js",
      "FastAPI",
      "JWT",
    ],
    highlights: [
      "Manifest V3 Chrome extension intercepts prompts on ChatGPT, Claude, and Gemini with zero network calls in the detection path.",
      "Five algorithms from scratch — Aho-Corasick, Shannon entropy, Trie, Max-Heap, Merge-Intervals — detecting 24 secret patterns plus base64 decode-and-rescan.",
      "React + Chart.js dashboard with FastAPI + JWT backend, 3 sensitivity levels, and 104 tests covering ReDoS safety and a false-positive corpus.",
    ],
    metrics: ["104 tests", "24 patterns", "5 algorithms", "<5 ms local scan"],
    featured: true,
  },
  {
    id: "adpulse",
    name: "ADPULSE",
    subtitle: "Real-Time Demand-Side Platform",
    tagline: "Bid smarter, in under five milliseconds.",
    date: "June 2026",
    category: "Real-Time Systems" as ProjectCategory,
    liveUrl: "https://adpulse-457r.onrender.com",
    githubUrl: "https://github.com/nikitayk/ADPULSE",
    stack: ["Python", "LightGBM", "Flask-SocketIO", "Three.js", "Docker"],
    highlights: [
      "Full-stack DSP participating in real-time ad auctions with in-memory bid pricing at ~5 ms and a sustained live feed of 7 bids/sec.",
      "Two LightGBM models (CTR + CVR) on IPinYou logs with 12 engineered features; pricing scales up to 11× base with budget pacer and hard cap of 300.",
      "Generator-based pipeline streams multi-GB logs in O(1) memory; Flask-SocketIO + Three.js 3D dashboard, 46 tests across Python 3.9/3.11 CI.",
    ],
    metrics: ["~5 ms bids", "7 bids/sec", "46 tests", "11× pricing"],
    featured: false,
  },
] as const;

export const education = [
  {
    degree: "B.Tech in ECAM (ECE + AI/ML)",
    school: "Netaji Subhas University of Technology",
    period: "2023 – 2027",
    detail: "6.88 CGPA",
    primary: true,
  },
  {
    degree: "Senior Secondary (CBSE Class XII)",
    school: "Rani Jhansi Sarvodaya Kanya Vidhyalaya, New Delhi",
    period: "2023",
    detail: "83%",
    primary: false,
  },
  {
    degree: "Secondary (CBSE Class X)",
    school: "Rani Jhansi Sarvodaya Kanya Vidhyalaya, New Delhi",
    period: "2021",
    detail: "95.5%",
    primary: false,
  },
] as const;

export const certifications = [
  {
    name: "AI For Everyone — DeepLearning.AI",
    url: "https://www.coursera.org/account/accomplishments/verify/67JQL9VXALPE",
  },
  {
    name: "Supervised Machine Learning (Regression and Classification) — Stanford Online",
    url: "https://www.coursera.org/account/accomplishments/verify/PPLQALFXDE6Y",
  },
  {
    name: "Advanced Learning Algorithms — DeepLearning.AI",
    url: "https://www.coursera.org/account/accomplishments/verify/TUHKF2T2987L",
  },
] as const;
