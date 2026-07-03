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
  }, ]