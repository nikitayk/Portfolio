export const site = {
  name: "Nikita Chaurasia",
  role: "Software Engineer",
  tagline: "ECAM · ECE + AI/ML @ NSUT",
  location: "New Delhi, India",
  email: "nikita.chaurasia.ug23@nsut.ac.in",
  phone: "+91-9868365249",
  phoneHref: "tel:+919868365249",
  valueProp:
    "I design agentic RAG that runs its own code, catch secrets before they leave the browser, and price ad bids in under five milliseconds.",
  bio: [
    "I'm a B.Tech student in ECAM (ECE + AI/ML) at Netaji Subhas University of Technology, focused on algorithms, backend systems, and machine learning applied to real pipelines.",
    "My work centers on three shipped systems — an agentic RAG platform that grounds answers in citations and runs sandboxed code, SENTINEL for local-first AI prompt security, and ADPULSE for in-memory real-time ad bidding — with a bias toward performance, testing, and production-ready engineering.",
    "400+ DSA problems solved. Strong hackathon track record. Open to software engineering internships and full-time roles.",
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
    id: "agentic-retrieval",
    kind: "project" as ExperienceKind,
    title: "Agentic Knowledge Retrieval System",
    org: "Independent · Academic Project",
    type: "Applied AI",
    period: "2026-07",
    stack: ["Python", "LangGraph", "ChromaDB", "FastAPI", "Chainlit", "Docker"],
    highlights: [
      "Architected a multi-agent RAG pipeline using LangGraph with dynamic intent-based routing, semantic retrieval via ChromaDB, and citation-grounded responses — 100% retrieval hit-rate and 95% answer faithfulness across a 30-question eval, reducing LLM hallucinations and improving answer reliability.",
      "Developed a sandboxed Python execution framework (isolated subprocess with CPU/time limits + a network-isolated Docker backend) with automated self-correcting retry loops (up to 3 attempts) for reliable chart, table, and artifact generation within an agentic document intelligence workflow.",
      "Deployed a containerized FastAPI and Chainlit application with Pydantic-based validation and multi-turn conversational memory — provider-agnostic across 4 LLM backends, 23 passing tests with CI, live on Hugging Face Spaces.",
    ],
    liveUrl: "https://alirizzv-agentic-rag.hf.space",
    githubUrl: "https://github.com/nikitayk/AgenticRetrieval",
  },
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
      "Built a full-stack DSP with a Flask-SocketIO backend, LightGBM bid prediction model, and Three.js 3D dashboard — achieving <5ms end-to-end latency for bid requests and responses.",
      "Implemented a real-time bidding algorithm with feature engineering, model training, and hyperparameter tuning — achieving 12% higher CTR and 8% lower CPC compared to baseline.",
      "Deployed a containerized application with Docker, automated CI/CD pipeline, and monitoring with Prometheus and Grafana — ensuring high availability and scalability.",
    ],
    liveUrl: "https://nikitayk.github.io/ADPULSE",
    githubUrl: "https://github.com/nikitayk/ADPULSE",
  },
] as const;

// -----------------------------------------------------------------------
// Projects.tsx needs its own shape (category/name/subtitle/date/tagline/
// highlights/metrics/stack/liveUrl/githubUrl/featured) — different from
// `experience`, so this is a dedicated array, not an alias.
// -----------------------------------------------------------------------

export type ProjectCategory = "Applied AI" | "Security" | "Real-Time Systems";

export const projects = [
  {
    id: "agentic-retrieval",
    category: "Applied AI" as ProjectCategory,
    name: "Agentic Knowledge Retrieval System",
    subtitle: "Multi-agent RAG with sandboxed code execution",
    date: "Jul 2026",
    tagline:
      "A citation-grounded RAG pipeline that routes intent, retrieves semantically, and runs its own Python safely.",
    highlights: [
      "Multi-agent pipeline via LangGraph with dynamic intent-based routing and semantic retrieval through ChromaDB.",
      "Sandboxed Python execution — isolated subprocess with CPU/time limits plus a network-isolated Docker backend — with self-correcting retry loops (up to 3 attempts).",
      "Containerized FastAPI + Chainlit app with Pydantic validation and multi-turn conversational memory, provider-agnostic across 4 LLM backends.",
    ],
    metrics: [
      "100% retrieval hit-rate",
      "95% answer faithfulness",
      "23 passing tests",
    ],
    stack: ["Python", "LangGraph", "ChromaDB", "FastAPI", "Chainlit", "Docker"],
    liveUrl: "https://alirizzv-agentic-rag.hf.space",
    githubUrl: "https://github.com/nikitayk/AgenticRetrieval",
    featured: true,
  },
  {
    id: "sentinel",
    category: "Security" as ProjectCategory,
    name: "SENTINEL",
    subtitle: "AI Prompt Security Gateway",
    date: "Jun 2026",
    tagline:
      "A browser extension that catches secrets in your prompts before they ever leave the tab.",
    highlights: [
      "Manifest V3 Chrome extension intercepting prompts on ChatGPT, Claude, and Gemini with zero network calls in the detection path.",
      "5 algorithms implemented from scratch (Aho-Corasick, Shannon entropy, Trie, Max-Heap, Merge-Intervals) detecting 24 secret patterns plus base64 decode-and-rescan.",
      "React + Chart.js dashboard backed by FastAPI + JWT, with 3 sensitivity levels.",
    ],
    metrics: ["24 secret patterns", "104 tests", "0 network calls"],
    stack: ["Python", "Manifest V3", "React", "Chart.js", "FastAPI", "JWT"],
    liveUrl: "https://nikitayk.github.io/SENTINEL",
    githubUrl: "https://github.com/nikitayk/SENTINEL",
    featured: false,
  },
  {
    id: "adpulse",
    category: "Real-Time Systems" as ProjectCategory,
    name: "ADPULSE",
    subtitle: "Real-Time Demand-Side Platform",
    date: "Jun 2026",
    tagline:
      "A full-stack ad-bidding engine that prices requests in under five milliseconds.",
    highlights: [
      "Flask-SocketIO backend with a LightGBM bid-prediction model and a Three.js 3D dashboard.",
      "Real-time bidding algorithm with feature engineering, model training, and hyperparameter tuning.",
      "Containerized deployment with Docker, automated CI/CD, and Prometheus/Grafana monitoring.",
    ],
    metrics: ["<5ms latency", "+12% CTR", "-8% CPC"],
    stack: ["Python", "LightGBM", "Flask-SocketIO", "Three.js", "Docker"],
    liveUrl: "https://nikitayk.github.io/ADPULSE",
    githubUrl: "https://github.com/nikitayk/ADPULSE",
    featured: false,
  },
] as const;

// -----------------------------------------------------------------------
// Education & certifications — fill in the placeholders with your real
// details before deploying.
// -----------------------------------------------------------------------

export const education = [
  {
    degree: "B.Tech in ECAM (ECE + AI/ML)",
    school: "Netaji Subhas University of Technology",
    period: "2023 — 2027",
    detail: "CGPA: 7.03 / 10",
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
    degree: "Secondary School (CBSE Class X)",
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
    name: "Supervised Machine Learning: Regression and Classification — Stanford Online",
    url: "https://www.coursera.org/account/accomplishments/verify/PPLQALFXDE6Y",
  },
  {
    name: "Advanced Learning Algorithms — DeepLearning.AI",
    url: "https://www.coursera.org/account/accomplishments/verify/TUHKF2T2987L",
  },
] as const;