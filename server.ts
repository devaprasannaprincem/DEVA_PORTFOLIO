import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { resumeData } from "./src/resumeData.js"; // Standard relative import, with .js for compiled output safety

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client to handle missing keys gracefully
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is not set or is using the default placeholder.");
    return null;
  }
  if (!aiClient) {
    try {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (error) {
      console.error("Failed to initialize GoogleGenAI client:", error);
      return null;
    }
  }
  return aiClient;
}

// System instructions containing Deva's complete resume
const SYSTEM_INSTRUCTION = `
You are "Deva-Bot", an ultra-professional and charming AI Career Assistant representing M DEVA PRASANNA PRINCE.
Your purpose is to assist recruiters, company representatives, and college placement coordinators during Deva's 4th-year college placement drive.
You speak with professional poise, clarity, and genuine enthusiasm about Deva's strong technical capabilities.

Here is Deva's complete resume details for you to study and answer queries perfectly:
- Name: M DEVA PRASANNA PRINCE
- Email: devaprasannaprincem@gmail.com
- Phone: +91 93602 49502
- Education: B.Tech Artificial Intelligence and Data Science at Karunya Institute of Technology and Sciences, Coimbatore (Aug 2023 - May 2027). CGPA is 6.93/10.
- Summary: AI/ML engineer specializing in offline-first platforms, learning gap detection, and scalable AI systems. Proficient in Python, JavaScript, and full-stack development with hands-on experience in machine learning, data analytics, and end-to-end AI projects. Focuses on responsible AI and user-centric design.
- Technical Skills:
  * Languages: Java, Python, C, JavaScript, TypeScript
  * Frameworks & Web: React, FastAPI, Node.js, Express, Tailwind CSS, Bootstrap, HTML5/CSS3
  * AI/ML/NLP: LLMs, RAG, NLP, XGBoost, ONNX, SHAP, OpenCV, TensorFlow, Scikit-Learn
  * Databases: MySQL, MongoDB, PostgreSQL, SQLite
  * Tools: Git, GitHub, VS Code, Power BI, Vercel
  * Soft Skills: Problem Solving, Critical Thinking, Team Collaboration, Communication, Technical Writing
- Work Experience:
  1. Data Analyst Intern at Grantley EduTech (Bengaluru | Oct 2024 - Jan 2025):
     * Analyzed 20K+ rows using Pandas/NumPy; informed 3 product decisions.
     * Reduced preprocessing pipeline time by 35% via automation; built Power BI dashboards for weekly reporting.
  2. Web Developer Intern at Technohacks Solutions (Nashik | Jun 2024):
     * Developed 10+ responsive UI components (JS/HTML5/CSS3), reducing dev time by 25%.
     * Resolved 15+ cross-browser bugs; maintained 100% lint-passing code with clean practices.
- Core Projects:
  1. Athena AI (Offline EdTech Intelligence Platform):
     * Offline-first multi-agent AI for learning gap detection in rural classrooms on 4GB-RAM Android devices using Phi-3-mini, XGBoost, ONNX, SHAP.
     * Contradiction Detection engine yielding 80% misclassification reduction across Tamil/Hindi/Marathi.
     * Early Warning Agent (AUC ~ 0.82) for dropout risk prediction; Teacher Copilot in 40+ languages.
  2. Generative AI for Simplifying Legal Documents:
     * Full-stack application (FastAPI, React, RAG) that converts complex legal documents into plain, accessible language, automatically highlighting critical clauses and summaries.
  3. AI Resume Analysis System:
     * Screening platform with ATS compatibility scoring and skill-gap identification across 50+ job roles using Python, NLP, and LLMs.
  4. Face Recognition System:
     * Computer vision pipeline (Python, OpenCV, TensorFlow) with 92% accuracy on 500 labeled faces at 24 FPS and <100ms latency, featuring emotion/gender detection and automatic CSV attendance logging.
- Achievements:
  * Finalist in SahAI for Shiksha Hackathon 2026 (Wadhwani AI) for the Athena AI project.
  * Active LeetCode practitioner focusing on Arrays, Trees, Dynamic Programming, and Graphs.
  * Built and deployed production-ready AI/ML systems on Vercel with live engagement.
- Certifications: Cisco Certified (Programming in C and Python), Infosys Certified (Java Programming).
- Languages: English (Professional), Tamil (Native), Japanese (Intermediate).

GUIDELINES FOR RESPONSES:
- Be concise, clear, and direct. Recruiters are busy. Keep answers within 2-4 sentences unless they ask for detailed code or projects.
- Use markdown bullet points for lists.
- If they ask about Deva's weaknesses, emphasize his focus on continuous improvement, active LeetCode practice, and learning complex systems.
- If a question is irrelevant to career or Deva (e.g., "tell me a cookie recipe" or "what is the capital of France"), politely say: "I can help you with Deva's qualifications and how he fits your team, but on general knowledge, Deva would love to write a custom Python script or LLM agent to fetch that for you! Would you like me to tell you about his AI projects like Athena AI instead?"
- Encourage them to try Deva's Interactive Chat, look at his projects tab, download his resume, or send an email to devaprasannaprincem@gmail.com.
`;

// API routes first
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format. Expected an array." });
  }

  // Format messages into Google GenAI format
  // The system instruction goes into the configuration, and we send the history
  const ai = getAiClient();

  if (!ai) {
    // Elegant simulation fallback for when GEMINI_API_KEY is not configured yet
    const lastUserMsg = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = "Hi there! I am Deva-Bot, M Deva Prasanna Prince's AI assistant. Currently, the live Gemini API key is loading, but let me tell you about Deva's key achievements: He is a SahAI for Shiksha Hackathon 2026 Finalist, has built outstanding offline-first AI systems like 'Athena AI' on Android, and is proficient in Python, React, and NLP. How can Deva help your engineering team?";

    if (lastUserMsg.includes("skill") || lastUserMsg.includes("tech") || lastUserMsg.includes("know")) {
      reply = "Deva is highly skilled in: \n\n• **Languages:** Java, Python, C, JavaScript, TypeScript\n• **AI/ML:** LLMs, RAG, NLP, XGBoost, ONNX, OpenCV, TensorFlow\n• **Frameworks:** React, FastAPI, Node.js, Express, Tailwind CSS\n• **Databases:** MySQL, MongoDB, PostgreSQL, SQLite\n\nHe would make a phenomenal addition to any AI/ML or Full-Stack Engineering team!";
    } else if (lastUserMsg.includes("project") || lastUserMsg.includes("build") || lastUserMsg.includes("athena")) {
      reply = "Deva has built impressive production-ready projects:\n\n1. **Athena AI:** An offline-first EdTech platform running on low-resource Android devices, predicting dropout risk (AUC ~0.82) and detecting learning gaps.\n2. **Legal Doc Simplifier:** A full-stack RAG solution (React + FastAPI) that translates dense legal text into plain English.\n3. **AI Resume Screening System:** A Python NLP tool identifying ATS compatibility scores and skill gaps.\n\nYou can explore these in detail in the Projects section of this portfolio!";
    } else if (lastUserMsg.includes("intern") || lastUserMsg.includes("work") || lastUserMsg.includes("experience")) {
      reply = "Deva has completed two internships:\n\n• **Data Analyst Intern** at Grantley EduTech (Oct 2024 - Jan 2025): Optimized data pipelines by 35% and informed product decisions through Pandas/NumPy analytics.\n• **Web Developer Intern** at Technohacks Solutions (Jun 2024): Developed 10+ high-fidelity React/JS components reducing dev time by 25%.\n\nHe brings robust hands-on experience in shipping real products!";
    } else if (lastUserMsg.includes("contact") || lastUserMsg.includes("hire") || lastUserMsg.includes("email") || lastUserMsg.includes("phone")) {
      reply = "You can easily contact M Deva Prasanna Prince directly:\n\n• **Email:** devaprasannaprincem@gmail.com\n• **Phone:** +91 93602 49502\n\nYou can also send him a message directly through the contact form at the bottom of the page! He is looking for immediate opportunities.";
    }

    return res.json({ text: reply });
  }

  try {
    // Extract contents in standard GoogleGenAI format
    // Each message in contents should have roles: user, model
    const contents = messages.map((m: any) => {
      const role = m.sender === "user" ? "user" : "model";
      return {
        role,
        parts: [{ text: m.content }]
      };
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Gemini server encountered an issue.", details: error.message });
  }
});

// Serve Contact Form (mock but fully responsive to simulate email submission)
app.post("/api/contact", (req, res) => {
  const { name, email, message, company } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }
  console.log(`[Contact Form Submission] From: ${name} (${email}) | Co: ${company || "N/A"}\nMessage: ${message}`);
  return res.json({
    success: true,
    message: "Thank you! Your message has been received. Deva will get back to you shortly at " + email + "."
  });
});

// Handle SPA and Vite build bundling
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
