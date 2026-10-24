export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  accentColor: 'cyan' | 'violet' | 'emerald';
  overview: string;
  technologies: string[];
  systemFlow: {
    step: number;
    title: string;
    detail: string;
  }[];
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  keyCapabilities: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description?: string;
  skills: SkillItem[];
}

export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  url: string;
  description: string;
  status: string;
  iconType: 'leetcode' | 'code';
  topics: string[];
  badge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  status: string;
  cgpa: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  year: string;
  badge: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Sumit Soni",
  title: "Software Engineer",
  college: "Bansal Institute of Science and Technology",
  degree: "B.Tech in Computer Science Engineering",
  graduationPeriod: "2024 – 2028",
  cgpa: "7.12",
  email: "sumitsoni786123@gmail.com",
  phone: "+91-7723095257",
  location: "Bhopal, India",
  leetcode: "https://leetcode.com/u/sumitsoni786/",
  github: "https://github.com/sumitsoni786123-lab",
  linkedin: "https://www.linkedin.com/in/sumitsoni786",
  resumePdfUrl: "/resume.pdf",
};

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "terrasense-x",
    title: "TerraSense-X",
    subtitle: "Semantic Satellite Retrieval & Multi-Temporal Change Analysis Prototype",
    category: "Geospatial & Vector Intelligence",
    badge: "Earth Observation Prototype",
    accentColor: "cyan",
    overview:
      "A satellite imagery prototype for natural-language search, historical image comparison, and review of possible land-cover changes in selected areas. Built with Python and FastAPI, the system uses RemoteCLIP image/text embeddings with FAISS retrieval to process Sentinel-2 multispectral imagery into GeoTIFF/COG tiles, combining image alignment, pixel-difference masks, and NDVI/NDWI/NDBI spectral indicators. Note: The team presentation reports 10,584 indexed Earth-observation vectors and 28 detected change regions (22 high, 5 medium, 1 low confidence); these are prototype outputs, not formal accuracy results.",
    technologies: [
      "Python",
      "FastAPI",
      "RemoteCLIP",
      "FAISS",
      "OpenCV",
      "NumPy",
      "Sentinel-2 Imagery",
      "Spectral Indexing",
    ],
    architectureHighlights: [
      {
        title: "512-Dimensional RemoteCLIP Multimodal Embedding Space",
        description:
          "Translates natural language environmental prompts into dense 512-dimensional vector representations aligned with multispectral satellite tile embeddings.",
      },
      {
        title: "FAISS Vector Indexing & Sub-Second Nearest Neighbor Retrieval",
        description:
          "Indexes Earth observation tile embeddings with FAISS vector similarity search, enabling rapid spatial discovery across satellite coverage areas.",
      },
      {
        title: "Multi-Temporal Spectral Delta & Pixel-Difference Masks",
        description:
          "Performs pairwise image alignment and computes spectral indices (NDVI, NDWI, NDBI) alongside pixel difference masks to detect candidate surface shifts across observation dates.",
      },
      {
        title: "Prototype Verification Transparency",
        description:
          "Maintains rigorous engineering honesty: indexed vectors and identified change candidate regions represent prototype outputs and experimental demonstrations rather than formal clinical accuracy results.",
      },
    ],
    systemFlow: [
      {
        step: 1,
        title: "Multispectral Tile Ingestion",
        detail:
          "Sentinel-2 multi-band imagery is processed into structured GeoTIFF and Cloud-Optimized GeoTIFF tiles with geometric alignment.",
      },
      {
        step: 2,
        title: "RemoteCLIP Feature Extraction",
        detail:
          "Passes satellite patches through RemoteCLIP to compute dense multimodal vision vectors reflecting environmental surface properties.",
      },
      {
        step: 3,
        title: "FAISS Vector Indexing",
        detail:
          "Inserts generated tile embeddings into an indexed FAISS vector database supporting rapid nearest-neighbor similarity search.",
      },
      {
        step: 4,
        title: "Change Candidate Detection",
        detail:
          "Compares temporal tile pairs via OpenCV difference masking and NDVI spectral thresholds to isolate candidate land-cover changes for human review.",
      },
    ],
    keyCapabilities: [
      "Natural language semantic search over satellite imagery collections",
      "Pairwise historical image alignment and temporal comparison",
      "Spectral index computation including NDVI vegetation and NDWI moisture indices",
      "FAISS vector similarity retrieval for scalable geographic tile matching",
      "Interactive multi-temporal change inspection pipeline",
      "Transparent engineering distinction between prototype outputs and verified claims",
    ],
  },
  {
    id: "sahayak-ai",
    title: "Sahayak AI Predict",
    subtitle: "WhatsApp-Native Civic Grievance Classification & Dispatch System",
    category: "Civic Automation & Applied AI",
    badge: "Civic Workflow System",
    accentColor: "violet",
    overview:
      "A WhatsApp-native civic grievance system designed to enable citizens to report municipal issues without downloading a dedicated application. The system accepts voice notes, text, and photos via a WhatsApp webhook gateway, using Google Gemini 2.5 Pro for complaint classification, department routing, and GPS location extraction. A proactive prediction engine correlates historical ward reports with live meteorological data to prioritize pending interventions, with ticket lifecycles recorded in Supabase Database.",
    technologies: [
      "Python",
      "Google Gemini 2.5 Pro",
      "Supabase Database",
      "WhatsApp Webhook Gateway",
      "Weather Data Integration",
      "REST APIs",
    ],
    architectureHighlights: [
      {
        title: "Zero-Barrier WhatsApp Ingestion Pipeline",
        description:
          "Eliminates barrier to entry by receiving civic grievances directly through WhatsApp, supporting natural language text, voice inputs, and photos.",
      },
      {
        title: "Structured Gemini 2.5 Pro Intent & Location Parsing",
        description:
          "Uses Google Gemini with strict schema definitions to extract structured JSON containing category, urgency score, and landmark/GPS coordinates from citizen submissions.",
      },
      {
        title: "Contextual Meteorological Correlation",
        description:
          "Integrates real-time weather and precipitation feeds with municipal ward history to detect flood and drainage vulnerabilities before escalation.",
      },
      {
        title: "Verified Ticket State Machine",
        description:
          "Maintains relational ticket state in Supabase Database with automated status notifications to citizens, preventing silent ticket abandonment.",
      },
    ],
    systemFlow: [
      {
        step: 1,
        title: "WhatsApp Message Ingestion",
        detail:
          "The WhatsApp gateway captures inbound citizen submissions (text, voice, or imagery) and forwards payloads to the Python service webhook.",
      },
      {
        step: 2,
        title: "Multimodal Gemini Analysis",
        detail:
          "Google Gemini 2.5 Pro extracts intent, complaint severity, department category, and landmark coordinates into structured JSON.",
      },
      {
        step: 3,
        title: "Context & Weather Data Fusion",
        detail:
          "Correlates reported grievance with live precipitation and local ward history to calculate an urgent intervention risk rating.",
      },
      {
        step: 4,
        title: "Department Dispatch & Tracking",
        detail:
          "Stores grievance record in Supabase Database, creates a departmental action item, and transmits an instant WhatsApp tracking ID to the citizen.",
      },
    ],
    keyCapabilities: [
      "Native WhatsApp citizen accessibility with no additional application install",
      "Multimodal input handling across colloquial text, audio notes, and photographs",
      "Automated municipal department classification and urgency scoring",
      "Real-time precipitation and weather risk correlation",
      "Persistent ticket state management with citizen status tracking",
      "Transparent municipal workflow with verification before ticket closure",
    ],
  },
  {
    id: "urban-blooms",
    title: "Urban Blooms",
    subtitle: "Smart Rooftop Farming Backend — State-Level Hackathon Winner (2025)",
    category: "IoT Systems & Environmental Computing",
    badge: "1st Place Winner",
    accentColor: "emerald",
    overview:
      "Backend architecture for a smart rooftop-farming application that assists urban residents in cultivating plants and vegetables through real-time care recommendations and sensor-driven guidance. Sumit designed and implemented the telemetry ingestion service, sensor threshold logic, and automated alert pipeline, earning 1st Place at the State-Level Codictive 3.0 Hackathon (2025).",
    technologies: [
      "Python",
      "IoT Telemetry Pipeline",
      "Sensor Ingestion Service",
      "Threshold & Alert Engine",
      "Agronomic Advisory Logic",
      "RESTful APIs",
    ],
    architectureHighlights: [
      {
        title: "State-Level Hackathon Winning Architecture",
        description:
          "Clinched 1st Place at the State-Level Codictive 3.0 Hackathon (2025) out of competing collegiate engineering teams, recognized for backend robustness and telemetry design.",
      },
      {
        title: "Real-Time Telemetry Processing Pipeline",
        description:
          "Ingests high-frequency environmental readings (soil moisture, ambient temperature, humidity) from edge microcontrollers for real-time plant monitoring.",
      },
      {
        title: "Agronomic Threshold Rule Engine",
        description:
          "Evaluates sensor parameters against plant-specific botanical thresholds to trigger proactive irrigation advice and health alerts.",
      },
      {
        title: "Reliable Service Architecture",
        description:
          "Engineered with clean separation between ingestion endpoints, alert queues, and data models to ensure seamless operation under load.",
      },
    ],
    systemFlow: [
      {
        step: 1,
        title: "Edge Sensor Ingestion",
        detail:
          "IoT sensor nodes on rooftop garden beds sample soil moisture, temperature, and ambient humidity.",
      },
      {
        step: 2,
        title: "Payload Validation & Processing",
        detail:
          "The Python backend validates sensor payloads, normalizes readings, and flags anomalies or transmission drops.",
      },
      {
        step: 3,
        title: "Threshold & Advisory Evaluation",
        detail:
          "Compares telemetry against crop-specific growth curves to assess water stress, nutrient requirements, and weather impacts.",
      },
      {
        step: 4,
        title: "Actionable Care Alerts",
        detail:
          "Dispatches targeted care notifications and watering schedules to urban growers through the application interface.",
      },
    ],
    keyCapabilities: [
      "High-reliability sensor telemetry ingestion pipeline",
      "Crop-specific soil moisture and climatic threshold monitoring",
      "Automated watering schedules and heat-stress warnings",
      "Recognized with 1st Place at State-Level Codictive 3.0 Hackathon 2025",
      "Modular Python backend design for seamless sensor expansion",
      "Empowers sustainable urban agriculture through data-driven recommendations",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages supported by academic coursework, certifications, and project implementations.",
    skills: [
      { name: "Java", level: "Primary Language & OOP Foundations", highlight: true },
      { name: "Python", level: "Applied Machine Learning & Core Services", highlight: true },
      { name: "C++", level: "Object-Oriented Programming & Problem Solving", highlight: true },
      { name: "C", level: "Systems Foundations (SimpliLearn Certified)" },
    ],
  },
  {
    title: "Developer Tools & Environment",
    iconName: "Layers",
    description: "Essential version control and development tools verified in daily engineering workflow.",
    skills: [
      { name: "Git", level: "Version Control & Branching", highlight: true },
      { name: "VS Code", level: "Primary Development IDE", highlight: true },
      { name: "Windows", level: "Operating System & Shell Environment" },
    ],
  },
  {
    title: "Cloud & Foundations",
    iconName: "Server",
    description: "Cloud fundamentals validated through official vendor certification.",
    skills: [
      { name: "Microsoft Azure", level: "Cloud Fundamentals (Microsoft Certified)", highlight: true },
    ],
  },
  {
    title: "Applied AI & Engineering Systems",
    iconName: "BrainCircuit",
    description: "Frameworks, vector libraries, and models applied across genuine engineering projects.",
    skills: [
      { name: "RemoteCLIP", level: "Multimodal Satellite Embeddings", highlight: true },
      { name: "FAISS", level: "Vector Indexing & Similarity Search", highlight: true },
      { name: "OpenCV", level: "Computer Vision & Change Detection" },
      { name: "NumPy", level: "Array Computing & Spectral Matrices" },
      { name: "Sentinel-2 Imagery", level: "Multispectral Remote Sensing" },
      { name: "Google Gemini 2.5 Pro", level: "Multimodal Structured Extraction", highlight: true },
      { name: "FastAPI", level: "High-Performance Asynchronous APIs" },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Bansal Institute of Science and Technology",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2024 – 2028",
    status: "3rd Year Undergraduate",
    cgpa: "7.12",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, Object-Oriented Programming (Java), and Computer Architecture",
      "Applied systems focus spanning geospatial data retrieval, multimodal vector indexing, and civic automation pipelines",
      "Winner of State-Level Codictive 3.0 Hackathon (2025) representing the institution",
    ],
  },
  {
    institution: "New Era Public School, Gadarwara",
    degree: "Higher Secondary Certificate (Class XII)",
    duration: "2024",
    status: "Completed",
    cgpa: "75.4%",
    highlights: [
      "Senior Secondary School Examination with core focus in Science, Physics, Chemistry, and Mathematics",
      "Built rigorous analytical and quantitative foundations supporting subsequent computer science coursework",
    ],
  },
  {
    institution: "New Era Public School, Gadarwara",
    degree: "Secondary School Certificate (Class X)",
    duration: "2022",
    status: "Completed",
    cgpa: "80.0%",
    highlights: [
      "Secondary School Examination with distinction across core science and mathematics subjects",
      "Early foundations in logic, algorithmic problem solving, and analytical thinking",
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "Codictive 3.0 Hackathon Winner (2025)",
    year: "2025",
    badge: "1st Place Winner",
    description:
      "Clinched 1st Place at the State-Level Codictive 3.0 Hackathon for Urban Blooms, recognized for innovation and technical excellence in engineering real-time IoT sensor telemetry and backend logic.",
  },
  {
    title: "Java Essentials — Cisco Networking Academy",
    year: "2024",
    badge: "Certification",
    description:
      "Official Cisco Networking Academy certification validating core Java competencies, OOP principles, and robust modular application structure.",
  },
  {
    title: "Java Core — Infosys",
    year: "2024",
    badge: "Certification",
    description:
      "Enterprise certification from Infosys covering Java programming fundamentals, collections framework, exception handling, and object-oriented architecture.",
  },
  {
    title: "Microsoft Azure Fundamentals — Microsoft",
    year: "2024",
    badge: "Certification",
    description:
      "Official Microsoft certification verifying cloud computing essentials, Azure infrastructure, security principles, and cloud workloads.",
  },
  {
    title: "C Programming — SimpliLearn",
    year: "2024",
    badge: "Certification",
    description:
      "Technical certification in procedural C programming, dynamic memory allocation, pointer manipulation, and foundational algorithms.",
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "sumitsoni786",
    url: "https://leetcode.com/u/sumitsoni786/",
    description:
      "Solving algorithmic challenges and implementing core data structures in Java. Regular practice across arrays, strings, two pointers, hashing, and trees.",
    status: "VERIFIED PROFILE",
    iconType: "leetcode",
    topics: ["Data Structures", "Algorithms", "Java Problem Solving", "Time & Space Complexity"],
    badge: "Active Solver",
  },
];
