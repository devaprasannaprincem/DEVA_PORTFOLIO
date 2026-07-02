<div align="center">

# ⚡ M DEVA PRASANNA PRINCE — Portfolio

**AI/ML & Full-Stack Engineer | B.Tech AI & Data Science, Karunya Institute of Technology and Sciences**

[![Netlify Status](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📌 About

This is my personal developer portfolio built for the **2026 college placement drive**. It showcases my projects, internship experience, technical skills, certifications, and provides a direct contact channel for recruiters and company representatives.

- 🎓 B.Tech Artificial Intelligence & Data Science — Karunya Institute of Technology and Sciences, Coimbatore
- 📧 devaprasannaprincem@gmail.com
- 📞 +91 93602 49502
- 🔗 [LinkedIn](http://www.linkedin.com/in/devaprasannaprince027) | [GitHub](https://github.com/devaprasannaprincem)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (motion/react) |
| Icons | Lucide React |
| Contact Form | Formspree |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | Netlify |

---

## 🗂 Project Structure

```
├── public/
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx  # Formspree-powered contact form
│   │   ├── InteractivePhoto.tsx  # Animated profile photo
│   │   └── ProjectCard.tsx  # Expandable project cards
│   ├── App.tsx              # Main portfolio page
│   ├── resumeData.ts        # All resume content (single source of truth)
│   ├── index.css            # Global styles + Tailwind theme
│   └── main.tsx             # React entry point
├── index.html
├── netlify.toml             # Netlify build + redirect config
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

App runs at **http://localhost:3000**

---

## 🏗 Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder — ready to deploy.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Netlify

This project is pre-configured for Netlify via `netlify.toml`.

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
3. Select this repository
4. Netlify auto-detects the config:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy** ✅

---

## 📂 Sections

- **Hero** — Name, title, contact chips, CTA buttons, animated profile photo
- **Academic Foundation** — B.Tech degree and institution details
- **Industry Internships** — Timeline of internship experience
- **Featured Projects** — Filterable cards (All / AI-ML / Systems) with expandable milestone bullets
- **Skills Inventory** — Categorized tech stack tags
- **Notable Milestones** — Hackathon achievements and certifications
- **Contact** — Formspree-powered form + direct contact links

---

## 📄 License

© 2026 M Deva Prasanna Prince. All rights reserved.