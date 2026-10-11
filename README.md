# Sumit Soni — Portfolio Website

A fast, responsive, and aesthetically distinctive developer portfolio for **Sumit Soni**, Software Engineer and Computer Science Engineering student at Bansal Institute of Science and Technology.

Built with **React**, **TypeScript**, **Vite**, and **Vanilla CSS**.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **npm**

### 2. Start the Development Server
Open PowerShell or your terminal in this directory (`d:\sumitportfolio`) and run:

```bash
# If running in Windows PowerShell where script execution is restricted, use npm.cmd:
npm.cmd run dev

# Or in standard bash / cmd:
npm run dev
```

The application will start at `http://localhost:3000`.

### 3. Build for Production
To generate the optimized production bundle:

```bash
npm.cmd run build
```

The output will be placed in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 🛠️ Customization & Missing Assets Checklist

All your data is decoupled inside [`src/data/portfolioData.ts`](file:///d:/sumitportfolio/src/data/portfolioData.ts).

1. **Official Resume**:
   - Location: Place your actual resume PDF at [`public/resume.pdf`](file:///d:/sumitportfolio/public/resume.pdf).
   - A placeholder PDF is currently provided so links don't break.

2. **GitHub & LinkedIn URLs**:
   - Open [`src/data/portfolioData.ts`](file:///d:/sumitportfolio/src/data/portfolioData.ts) and update:
     - `github: "https://github.com/<your-username>"`
     - `linkedin: "https://linkedin.com/in/<your-username>"`

3. **Project Repositories & Demos** (Optional):
   - In [`src/data/portfolioData.ts`](file:///d:/sumitportfolio/src/data/portfolioData.ts), you can update the `githubUrl` and `demoUrl` fields for *TerraSense-X*, *Sahayak AI Predict*, and *Urban Blooms*.

---

## 📂 Architecture Overview

```
sumitportfolio/
├── public/
│   ├── favicon.svg          # Custom gradient SS logo
│   └── resume.pdf           # Resume endpoint
├── src/
│   ├── data/
│   │   └── portfolioData.ts # Centralized profile, projects & achievements data
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky glass header with mobile drawer
│   │   ├── Hero.tsx         # Headline, live interactive architecture console & CTAs
│   │   ├── About.tsx        # Academic foundations & engineering focus
│   │   ├── Projects.tsx     # 3 distinct case studies with SVG/CSS schematics
│   │   ├── ProjectModal.tsx # Interactive deep-dive modal for each project
│   │   ├── Skills.tsx       # Categorized skills grid with instant search filter
│   │   ├── Education.tsx    # B.Tech CSE details & CGPA card
│   │   ├── Achievements.tsx # Codictive 3.0 State Hackathon 1st Place showcase
│   │   ├── Contact.tsx      # One-click copy email, mailto form & social links
│   │   ├── Footer.tsx       # Brand footer, navigation & scroll-to-top
│   │   └── ResumeModal.tsx  # In-browser CV overview & download indicator
│   ├── App.tsx              # Root layout & modal controllers
│   ├── index.css            # Dark graphite design system & utilities
│   └── main.tsx             # React root entry
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
