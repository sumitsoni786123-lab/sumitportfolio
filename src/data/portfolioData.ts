export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  badge: string;
  technologies: string[];
  overview: string;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  keyCapabilities: string[];
  systemFlow: {
    step: string;
    title: string;
    detail: string;
  }[];
  accentColor: 'cyan' | 'violet' | 'emerald';
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description?: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  url: string;
  description: string;
  badge?: string;
  accentColor?: string;
  iconType: 'leetcode' | 'github' | 'codeforces' | 'codechef' | 'hackerrank';
  topics?: string[];
  status?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  status: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
  associatedProject?: string;
}

export const PERSONAL_INFO = {
  name: "Sumit Soni",
  title: "Software Engineer | Computer Science Engineering Student",
  headline: "I build software that turns complex problems into practical systems.",
  bio: "Computer Science Engineering undergraduate at Bansal Institute of Science and Technology with a focus on building resilient backend architectures, AI-integrated pipelines, and intelligent geospatial tooling. Proficient in Java as my primary and strongest programming language, followed by Python for applied machine learning and distributed services, with foundational knowledge in C/C++.",
  email: "sumitsoni786123@gmail.com",
  location: "Bhopal, India",
  degree: "B.Tech Computer Science Engineering",
  college: "Bansal Institute of Science and Technology",
  graduationPeriod: "2024–2028",
  cgpa: "7.12",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  leetcode: "https://leetcode.com/u/sumitsoni786/",
  resumeUrl: "/resume.pdf",
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "terrasense-x",
    title: "TerraSense-X",
    subtitle: "Semantic Satellite Retrieval & Multi-Temporal Change Analysis",
    tagline: "Natural-language query engine & computer vision pipeline for Sentinel-2 satellite imagery",
    category: "Geospatial AI & Vector Retrieval",
    badge: "Featured AI Project",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "RemoteCLIP",
      "FAISS",
      "NumPy",
      "OpenCV",
      "Sentinel-2"
    ],
    overview:
      "TerraSense-X solves the complexity of navigating vast Earth Observation datasets by translating free-form natural language prompts (e.g., 'coastal port expansions', 'urban forest depletion') into direct semantic visual matches across multi-temporal Sentinel-2 satellite passes. It pairs high-dimensional vector search with computer vision change detection algorithms.",
    architectureHighlights: [
      {
        title: "Dual-Encoder Semantic Indexing",
        description: "Utilizes RemoteCLIP embeddings fine-tuned on multispectral remote sensing data to align natural language tokens with Sentinel-2 spectral reflectance features."
      },
      {
        title: "Sub-Second Vector Search via FAISS",
        description: "Indexes millions of satellite tile embeddings using FAISS IVF-PQ (Inverted File with Product Quantization) for fast Euclidean and cosine distance matching."
      },
      {
        title: "Multi-Temporal Spectral Delta Analysis",
        description: "Employs OpenCV and NumPy matrix operations to register multi-date imagery, compute Normalized Difference Vegetation Index (NDVI) shifts, and produce segmented change masks."
      },
      {
        title: "Asynchronous Inference Architecture",
        description: "FastAPI handles asynchronous request batching and streams bounding box coordinates and spectral heatmaps to a responsive interactive React viewport."
      }
    ],
    keyCapabilities: [
      "Natural language to multispectral satellite tile retrieval",
      "Multi-temporal alignment and pixel-level spectral delta masks",
      "FAISS similarity indexing with spatial metadata bounding",
      "Optimized NumPy matrix transformations for rapid NDVI calculations"
    ],
    systemFlow: [
      {
        step: "01",
        title: "Query Vectorization",
        detail: "User prompt is tokenized and projected through RemoteCLIP's text encoder into a unified 512-dim embedding space."
      },
      {
        step: "02",
        title: "FAISS Nearest Neighbor",
        detail: "Embedding is matched against pre-indexed Sentinel-2 tile vectors to retrieve top-k candidate scenes with coordinate metadata."
      },
      {
        step: "03",
        title: "Spectral Delta Pipeline",
        detail: "Temporal pairs are retrieved, calibrated, and processed via OpenCV matrix transformations to isolate significant ground changes."
      },
      {
        step: "04",
        title: "Streaming Visualization",
        detail: "FastAPI streams geo-referenced masks, change vectors, and image overlays to the React client interface."
      }
    ],
    accentColor: "cyan",
    githubUrl: "https://github.com/",
  },
  {
    id: "sahayak-ai-predict",
    title: "Sahayak AI Predict",
    subtitle: "WhatsApp-Native Civic Grievance Classification & Prediction System",
    tagline: "Zero-barrier citizen reporting platform driven by Gemini 2.5 Pro and localized weather correlation",
    category: "LLM Systems & Civic Tech",
    badge: "Civic Automation",
    technologies: [
      "Python Flask",
      "Evolution API",
      "Supabase PostgreSQL",
      "Google Gemini 2.5 Pro",
      "Weather Data Integration"
    ],
    overview:
      "Sahayak AI Predict democratizes civic grievance filing by embedding the complete workflow inside WhatsApp. Citizens report civic issues (potholes, waterlogging, waste build-up) using voice, image, or text in colloquial languages. The system parses grievances with Google Gemini 2.5 Pro, classifies urgency, and integrates real-time meteorological data to predict municipal failure zones.",
    architectureHighlights: [
      {
        title: "WhatsApp Webhook Gateway via Evolution API",
        description: "Implements high-concurrency webhook listeners that receive multimodal messages, authenticate phone sessions, and route payloads."
      },
      {
        title: "Cognitive Extraction via Gemini 2.5 Pro",
        description: "Uses structured function calling to parse unstructured complaint text into validated JSON schemas (category, severity index, landmark coordinates, priority level)."
      },
      {
        title: "Environmental & Meteorological Fusion",
        description: "Merges live and forecast rainfall/temperature data with historical complaint clusters to predict municipal drainage failures before crisis points occur."
      },
      {
        title: "Relational State Machine on Supabase",
        description: "PostgreSQL schema with row-level security and triggers that update ticket lifecycles, send automated status pings back to WhatsApp, and feed administrative queues."
      }
    ],
    keyCapabilities: [
      "Zero-app install friction via WhatsApp conversational interface",
      "Multimodal prompt parsing with Gemini 2.5 Pro for grievance triage",
      "Weather anomaly integration to forecast infrastructure vulnerabilities",
      "Automated lifecycle updates dispatched to users upon ticket resolution"
    ],
    systemFlow: [
      {
        step: "01",
        title: "Inbound Webhook",
        detail: "Evolution API catches citizen's WhatsApp message (text/audio/photo) and forwards to Python Flask webhook."
      },
      {
        step: "02",
        title: "Gemini Structured Parsing",
        detail: "Gemini 2.5 Pro parses grievance intent, detects language, tags category (sanitation, roads, electricity), and scores urgency."
      },
      {
        step: "03",
        title: "Weather Context Fusion",
        detail: "Flask backend queries current weather API to correlate precipitation intensity with drainage and hazard reports."
      },
      {
        step: "04",
        title: "Supabase Relational Dispatch",
        detail: "Stores ticket in PostgreSQL, creates departmental task, and returns an instant WhatsApp tracking ID."
      }
    ],
    accentColor: "violet",
    githubUrl: "https://github.com/",
  },
  {
    id: "urban-blooms",
    title: "Urban Blooms",
    subtitle: "Smart Rooftop Farming App — Backend Architecture",
    tagline: "State-Level Hackathon-winning backend for IoT-driven microclimate farming & crop optimization",
    category: "IoT Systems & Distributed Backend",
    badge: "Hackathon Winner",
    technologies: [
      "Python",
      "RESTful APIs",
      "IoT Telemetry",
      "Sensor Ingestion",
      "Relational DB",
      "Crop Advisory Engine"
    ],
    overview:
      "Urban Blooms turns underutilized urban rooftops into automated, high-yield micro-farms. Serving as Backend Developer on this project, built the core telemetry ingestion pipeline, real-time threshold alert system, and data models that earned 1st place in the prestigious State-Level Codictive 3.0 Hackathon (2025).",
    architectureHighlights: [
      {
        title: "Sensor Telemetry Ingestion Pipeline",
        description: "Engineered endpoints to intake high-frequency sensor readings (soil moisture, ambient temperature, humidity, UV levels) with payload validation."
      },
      {
        title: "Rule-Based Trigger & Alert Engine",
        description: "Real-time evaluators comparing sensor telemetry against agronomic thresholds to automate irrigation solenoids and broadcast urgent alerts."
      },
      {
        title: "Resource Optimization Logic",
        description: "Calculated dynamic water evaporation models based on weather forecasts, minimizing municipal water consumption across rooftop beds."
      },
      {
        title: "Hackathon-Winning Execution",
        description: "Designed clean API contracts that enabled seamless frontend synchronization during the live Codictive 3.0 hackathon judging demo."
      }
    ],
    keyCapabilities: [
      "Low-latency telemetry streaming from microclimate sensor nodes",
      "Automated irrigation scheduling based on soil moisture and sun exposure",
      "Agronomic health scoring and disease advisory alerts",
      "Judged 1st Place at State-Level Codictive 3.0 Hackathon 2025"
    ],
    systemFlow: [
      {
        step: "01",
        title: "Sensor Readout",
        detail: "Edge microcontrollers read soil moisture, luminosity, and ambient temp across rooftop planters."
      },
      {
        step: "02",
        title: "Telemetry Ingestion",
        detail: "Backend validates sensor payloads, normalizes metrics, and writes to time-series storage."
      },
      {
        step: "03",
        title: "Advisory Analysis",
        detail: "System evaluates crop threshold metrics against local weather conditions to trigger micro-irrigation valves."
      },
      {
        step: "04",
        title: "Client Notification",
        detail: "Alerts, telemetry graphs, and automated status logs are published to the mobile and web client."
      }
    ],
    accentColor: "emerald",
    githubUrl: "https://github.com/",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages & Core",
    iconName: "Code2",
    description: "Java is my strongest and primary language for core engineering, followed by Python for applied systems and AI pipelines, with C/C++ for foundational computing.",
    skills: [
      { name: "Java", level: "Primary & Strongest Language", highlight: true },
      { name: "Python", level: "Secondary Core Language", highlight: true },
      { name: "C / C++", level: "Academic Core & Foundations" },
      { name: "TypeScript", level: "Proficient", highlight: true },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "SQL", level: "Relational Queries", highlight: true },
      { name: "HTML5 & Modern CSS", level: "Proficient" }
    ]
  },
  {
    title: "AI, ML & Geospatial",
    iconName: "BrainCircuit",
    skills: [
      { name: "Google Gemini 2.5 Pro", level: "Production Integration", highlight: true },
      { name: "RemoteCLIP", level: "Vision-Language Embedding", highlight: true },
      { name: "FAISS Vector Search", level: "High-Dimensional Indexing", highlight: true },
      { name: "OpenCV", level: "Computer Vision" },
      { name: "NumPy", level: "Numerical Arrays" },
      { name: "Sentinel-2 Imagery", level: "Earth Observation Data" }
    ]
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    skills: [
      { name: "FastAPI", level: "Asynchronous APIs", highlight: true },
      { name: "Python Flask", level: "Service Layer", highlight: true },
      { name: "Evolution API", level: "WhatsApp Webhook Automation" },
      { name: "RESTful API Design", level: "Architecture" },
      { name: "Supabase PostgreSQL", level: "Database & Auth", highlight: true },
      { name: "IoT Telemetry Ingestion", level: "Sensor Pipelines" }
    ]
  },
  {
    title: "Frontend & Engineering Tools",
    iconName: "Layers",
    skills: [
      { name: "React", level: "Modern Component Architecture", highlight: true },
      { name: "Vite", level: "Bundling & Tooling" },
      { name: "Git & GitHub", level: "Version Control & Collaboration" },
      { name: "Postman / Thunder Client", level: "API Testing" },
      { name: "Linux / Bash Shell", level: "Environment Navigation" },
      { name: "Data Structures & Algorithms", level: "Core Foundations" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Bansal Institute of Science and Technology",
    duration: "2024 – 2028",
    cgpa: "7.12",
    status: "Currently Pursuing — 3rd Year",
    highlights: [
      "Rigorous foundations in Data Structures, Object-Oriented Programming, and Computer Architecture.",
      "Active participant in technical symposiums and state-level hackathon competitions.",
      "Hands-on project work focusing on real-world systems, API design, and applied AI pipelines."
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "Winner — State-Level Codictive 3.0 Hackathon",
    organization: "Codictive 3.0 State Hackathon Committee",
    year: "2025",
    badge: "1st Place Winner",
    description:
      "Awarded 1st place at the state level for building the backend architecture of 'Urban Blooms' — a smart rooftop farming application incorporating IoT telemetry, predictive alerts, and resource optimization.",
    associatedProject: "Urban Blooms"
  },
  {
    title: "Geospatial AI & Satellite Vision Prototype",
    organization: "Independent Engineering Research",
    year: "2025",
    badge: "Technical Milestone",
    description:
      "Engineered 'TerraSense-X', demonstrating sub-second natural language satellite tile retrieval and spectral change analysis using RemoteCLIP, FAISS, and Sentinel-2 data.",
    associatedProject: "TerraSense-X"
  },
  {
    title: "WhatsApp Civic Triage Architecture",
    organization: "Civic Tech Innovation",
    year: "2025",
    badge: "Production Prototype",
    description:
      "Designed and deployed 'Sahayak AI Predict', fusing Google Gemini 2.5 Pro multimodal processing with meteorological data streams to predict municipal failure zones.",
    associatedProject: "Sahayak AI Predict"
  }
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "sumitsoni786",
    url: "https://leetcode.com/u/sumitsoni786/",
    description: "Data Structures, Algorithms & Problem Solving",
    badge: "Primary Practice Handle",
    accentColor: "#ffa116",
    iconType: "leetcode",
    topics: ["Data Structures", "Algorithms", "Java Problem Solving", "System Foundations"],
    status: "Verified Handle"
  }
];
