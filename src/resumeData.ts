export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Internship {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  tags: string[];
  bullets: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'ai_ml' | 'full_stack' | 'data_analytics' | 'systems';
}

export interface Achievement {
  title: string;
  description: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
    summary: string;
    avatarUrl?: string;
  };
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
  };
  skills: SkillGroup[];
  internships: Internship[];
  projects: Project[];
  achievements: Achievement[];
  certifications: string[];
  languages: { name: string; level: string }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "M DEVA PRASANNA PRINCE",
    title: "AI/ML & Full-Stack Engineer",
    subtitle: "Specializing in Offline-First AI, Learning Gap Detection, and Scalable AI Systems",
    email: "devaprasannaprincem@gmail.com",
    phone: "+91 93602 49502",
    linkedin: "http://www.linkedin.com/in/devaprasannaprince027",
    github: "https://github.com/devaprasannaprincem",
    portfolio: "https://ais-pre-em255n3vynd7vps5cih4o3-967360934573.asia-east1.run.app", // Current deploy url fallback or self
    summary: "AI/ML engineer specializing in offline-first platforms, learning gap detection, and scalable AI systems. Proficient in Python, JavaScript, and full-stack development with hands-on experience in machine learning, data analytics, and end-to-end AI projects. Strong background in building production-ready systems with focus on responsible AI and user-centric design.",
  },
  education: {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore",
    period: "Aug 2023 – May 2027",
    cgpa: "6.93 / 10"
  },
  skills: [
    {
      category: "Languages",
      skills: ["Java", "Python", "C", "JavaScript", "TypeScript"]
    },
    {
      category: "Frameworks & Web",
      skills: ["React", "FastAPI", "Node.js", "Express", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"]
    },
    {
      category: "AI/ML & NLP",
      skills: ["LLMs", "RAG (Retrieval-Augmented Generation)", "NLP", "XGBoost", "ONNX", "SHAP", "OpenCV", "TensorFlow", "Scikit-Learn"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"]
    },
    {
      category: "Data & Tools",
      skills: ["Pandas", "NumPy", "Power BI", "Git", "GitHub", "VS Code", "Vercel"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Communication", "Technical Writing"]
    }
  ],
  internships: [
    {
      role: "Data Analyst Intern",
      company: "Grantley EduTech",
      location: "Bengaluru",
      period: "Oct 2024 – Jan 2025",
      bullets: [
        "Analyzed 20K+ rows of student and operational data using Pandas and NumPy, informing 3 key product decisions.",
        "Reduced data preprocessing pipeline execution time by 35% through design and implementation of automated Python scripts.",
        "Designed and published interactive Power BI dashboards for weekly stakeholder reporting on learning analytics."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Technohacks Solutions",
      location: "Nashik",
      period: "Jun 2024",
      bullets: [
        "Developed 10+ highly responsive UI components using JS, HTML5, and CSS3, accelerating frontend development time by 25%.",
        "Resolved 15+ complex cross-browser compatibility bugs and styling discrepancies.",
        "Maintained 100% lint-passing, high-quality production code following modern clean code conventions."
      ]
    }
  ],
  projects: [
    {
      title: "Wonderly AI",
      subtitle: "Offline EdTech Intelligence Platform",
      tags: ["Phi-3-mini", "XGBoost", "ONNX", "SHAP", "Android", "Offline-First"],
      bullets: [
        "Developed an offline-first, multi-agent AI system for learning gap detection in rural classrooms, optimized to run locally on low-resource (4GB RAM) Android devices.",
        "Built a Contradiction Detection engine yielding an 80% misclassification rate reduction across vernacular languages including Tamil, Hindi, and Marathi.",
        "Designed a multi-agent architecture separating language-barrier detection from cognitive-gap detection, using a rules-gated confidence threshold before surfacing any flag to teachers.",
        "Selected Phi-3-mini (Q4 quantized) over larger LLMs specifically for 4GB RAM compatibility on low-cost Android hardware.",
        "Trained an XGBoost + ONNX risk model achieving AUC ≥ 0.82, validated across three language groups using ASER open datasets and synthetic multilingual transcripts.",
        "Integrated SHAP explainability so every AI-generated risk flag is accompanied by a plain-language reason a teacher can act on.",
        "Built a Teacher Copilot module delivering daily WhatsApp digests in 40+ Indian languages, with SMS fallback for feature-phone access.",
        "Architected a data-privacy layer with local-only storage and anonymized district-level sync, aligned with India's DPDP Act 2023.",
        "Designed bias-evaluation checks (demographic parity, equalized odds) across gender, caste, and language variables."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "ai_ml"
    },
    {
      title: "Generative AI for Simplifying Legal Documents",
      subtitle: "Context-Aware Legal Comprehension Tool",
      tags: ["LLMs", "RAG", "FastAPI", "React", "Tailwind CSS"],
      bullets: [
        "Developed an end-to-end Generative AI solution that converts complex, verbose legal documents into plain, accessible language.",
        "Implemented automated clause detection that highlights critical terms and extracts compliance summaries for non-legal professionals.",
        "Built a Retrieval-Augmented Generation (RAG) pipeline to ground LLM outputs in the actual uploaded document, reducing hallucinated legal interpretations.",
        "Designed a document-chunking and embedding strategy to handle long-form legal text within LLM context limits.",
        "Implemented clause-classification logic to automatically flag high-risk or critical clauses (e.g., liability, termination, indemnity) for user attention.",
        "Built a FastAPI backend to handle document upload, processing pipeline orchestration, and LLM API calls.",
        "Developed a React + Tailwind CSS frontend allowing users to view original and simplified text side-by-side for easy comparison.",
        "Added a compliance-summary generator that condenses lengthy clauses into short, plain-language action points."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "ai_ml"
    },
    {
      title: "AI Resume Analysis System",
      subtitle: "ATS Compatibility & Skill Gap Analytics",
      tags: ["Python", "NLP", "ATS Scoring", "LLMs", "Express"],
      bullets: [
        "Created an AI-powered resume screening platform that calculates ATS compatibility scores and identifies specific skill gaps across 50+ unique job roles.",
        "Utilized Natural Language Processing (NLP) to parse and extract resume keywords and cross-reference them with role requirements.",
        "Built an NLP pipeline to extract structured information (skills, experience, education) from unstructured resume text (PDF/DOCX).",
        "Designed a scoring algorithm that mimics ATS keyword-matching logic to estimate how well a resume would pass automated recruiter filters.",
        "Created a role-requirements database covering 50+ job roles, used as the benchmark for skill-gap comparison.",
        "Implemented skill-gap detection logic that highlights missing keywords/skills relative to a target job description.",
        "Integrated an LLM-based recommendation layer to generate personalized, human-readable improvement suggestions (not just raw keyword lists).",
        "Built an Express backend to handle file uploads, processing requests, and serving analysis results to the frontend."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "ai_ml"
    },
    {
      title: "Face Recognition Pipeline",
      subtitle: "Real-time Face & Attribute Intelligence",
      tags: ["Python", "OpenCV", "TensorFlow", "Attendance Logging"],
      bullets: [
        "Designed a high-throughput computer vision pipeline achieving 92% accuracy across 500 labeled faces at 24 FPS with sub-100ms processing latency.",
        "Integrated dynamic emotion and gender recognition modules to capture audience feedback.",
        "Built a real-time face detection and recognition pipeline using OpenCV, optimized for low-latency CPU inference.",
        "Trained/fine-tuned a TensorFlow-based classification model achieving 92% recognition accuracy across a labeled dataset of 500 faces.",
        "Added emotion and gender detection modules running in parallel with face recognition, without degrading frame rate (maintained 24 FPS).",
        "Designed an automated CSV-based attendance logging system that records identity and timestamp on successful recognition.",
        "Implemented an automated email-alert system triggered by specific recognition events (e.g., unrecognized face, attendance marked).",
        "Optimized the inference pipeline (frame skipping, resolution scaling) to keep end-to-end processing latency under 100ms."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "systems"
    },
    {
      title: "Arduino Bluetooth Car",
      subtitle: "Wireless Robotic Navigation System",
      tags: ["Arduino", "HC-05 Bluetooth", "Embedded Systems", "Mobile App Control"],
      bullets: [
        "Designed and built a Bluetooth-controlled robotic car using Arduino and the HC-05 module, enabling real-time wireless navigation.",
        "Enabled control through a mobile application interface, allowing intuitive directional commands to be transmitted wirelessly to the car's onboard controller.",
        "Designed the circuit integrating Arduino, HC-05 Bluetooth module, motor driver (L298N), and DC motors for four-directional movement.",
        "Wrote embedded C/C++ firmware to parse incoming Bluetooth serial commands and translate them into motor control signals.",
        "Implemented a command protocol (forward/backward/left/right/stop) for low-latency communication between the mobile app and the car.",
        "Tuned motor speed and turning calibration to ensure smooth, responsive navigation based on received commands.",
        "Tested Bluetooth connection stability and range, handling reconnection logic for dropped signals.",
        "Built/configured a mobile application interface to send directional commands to the HC-05 module."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "systems"
    },
    {
      title: "Recipe Book",
      subtitle: "Full-Stack Recipe Management Platform",
      tags: ["React", "Node.js", "Express", "MongoDB", "Full-Stack"],
      bullets: [
        "Developed a full-stack recipe management application enabling users to create, organize, and explore recipes through an interactive, responsive interface.",
        "Integrated MongoDB as the persistent data layer for both online and offline access, ensuring consistent recipe data across sessions and devices.",
        "Designed RESTful API endpoints with Express to handle CRUD operations for recipes, categories, and user-generated content.",
        "Implemented user authentication and session management, allowing personalized recipe collections per user.",
        "Built dynamic search and filter functionality (by ingredient, cuisine, and category) using indexed MongoDB queries for fast retrieval.",
        "Structured a flexible MongoDB schema to support nested recipe data (ingredients, steps, tags) without rigid relational constraints.",
        "Optimized React component rendering with conditional state management, ensuring smooth UI updates during recipe creation and editing.",
        "Deployed the application with environment-based configuration, supporting both local/offline development and live production use."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "systems"
    },
    {
      title: "NeuroSync EEG Suite",
      subtitle: "Brain-Computer Interface Signal Analysis Platform",
      tags: ["Python", "Signal Processing", "EEG", "BCI", "Data Analytics"],
      bullets: [
        "Designed an EEG signal analysis platform for brain-computer interface research, enabling structured interpretation of raw neural activity.",
        "Incorporated signal processing techniques and performance metrics to evaluate signal quality and extract meaningful patterns from EEG data.",
        "Applied filtering techniques (bandpass/notch filtering) to clean raw EEG signals and reduce noise/artifacts from muscle movement and electrical interference.",
        "Extracted time-domain and frequency-domain features (power spectral density across alpha, beta, theta bands) to characterize neural activity patterns.",
        "Implemented performance metrics to assess signal quality and classification reliability across different brain-state recordings.",
        "Visualized processed EEG signals and extracted features through plots to support interpretability for BCI research applications.",
        "Structured the pipeline to process multi-channel EEG data, supporting analysis across different electrode placements.",
        "Explored signal segmentation techniques to isolate event-related neural responses for downstream analysis."
      ],
      githubUrl: "https://github.com/devaprasannaprincem",
      category: "ai_ml"
    }
  ],
  achievements: [
    {
      title: "Finalist — SahAI for Shiksha Hackathon 2026",
      description: "Recognized as a finalist in the prestigious Wadhwani AI hackathon for the design and impact of Wonderly AI, the offline EdTech assistant."
    },
    {
      title: "Active LeetCode Practitioner",
      description: "Dedicated coder focusing on algorithms, complex data structures (Arrays, Trees, Dynamic Programming, Graphs), establishing a strong analytical base."
    },
    {
      title: "Vercel & Cloud Deployments",
      description: "Committed to shipping products by launching real, usable web applications and AI/ML pipelines with live user feedback."
    }
  ],
  certifications: [
    "Cisco Certified — Programming in C and Python",
    "Infosys Certified — Java Programming"
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Native" },
    { name: "Japanese", level: "Intermediate" }
  ]
};
