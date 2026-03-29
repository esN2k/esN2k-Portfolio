# Portfolio Handover Document

**Date:** 2026-03-24  
**Project:** esN2k-Portfolio  
**Live URL:** https://esn2k.engineer  
**Repository:** https://github.com/esN2k/esN2k-Portfolio

---

## Owner Information

**Name:** Doğukan Balaman  
**Email:** dodikbalaman@gmail.com  
**Phone:** +90 (542) 408 1102  
**LinkedIn:** https://linkedin.com/in/esn2k  
**GitHub:** https://github.com/esN2k  

---

## Project Overview

A personal portfolio website for Doğukan Balaman, an AI-focused Computer Engineering student at Selçuk University. The site is bilingual (EN/TR) and hosted on GitHub Pages with a custom domain.

### Tech Stack
- **Frontend:** Vanilla HTML, CSS, JavaScript (NO frameworks)
- **Hosting:** GitHub Pages
- **Domain:** esn2k.engineer (configured via CNAME)
- **Deployment:** Automatic via GitHub Actions (`.github/workflows/pages.yml`)

---

## Current State (Updated 2026-03-29)

### What Works
- **Deployment:** Page loads fast at https://esn2k.engineer via GitHub Pages
- **Typography:** Upgraded to Cabinet Grotesk for a premium Vercel-like aesthetic.
- **Performance:** 
  - Profile image converted to WebP.
  - Critical above-the-fold CSS inlined; secondary CSS loaded asynchronously.
  - `content-visibility: auto` implemented for off-screen sections.
  - Canvas background lazy-loaded via IntersectionObserver.
  - All script tags use the `defer` attribute.
- **Design & Layout:** 
  - Glassmorphism UI with a clean, grid-based Bento box approach for skills and projects.
  - Contact section revamped with interactive "pills" featuring Lucide SVG icons.
  - Scroll reveal thresholds optimized for seamless mobile/desktop reading.
- **Functionality:** 
  - Bilingual EN/TR language switching works flawlessly, closing mobile menus properly on click.
  - Keyboard accessibility (tab navigation & focus-visible outline) fully restored.

### Known Issues / Next Steps for Optimization
1. **Lighthouse Fine-tuning** - Current baseline: Accessibility 96, Performance 81 (local headless). Production scores should be monitored.
2. **Animation Performance** - The particle canvas is currently disabled on mobile devices (`(hover: none)`) to save battery, but desktop performance can still be monitored.
3. **Advanced PWA Support** - `site.webmanifest` and service workers can be expanded to allow offline accessibility.

---

## File Structure

```
esN2k-Portfolio/
├── index.html          # Main HTML file
├── style.css           # All styles (~1500 lines)
├── script.js           # JS with translations + functionality (~1000 lines)
├── assets/
│   ├── profile.jpg     # Portrait photo
│   ├── logo.png        # Character logo
│   ├── logo-full.png   # Logo with name
│   └── fonts/          # Inter and JetBrains Mono fonts
├── icons/              # PWA icons
├── docs/
│   ├── HANDOVER.md     # This file
│   ├── resume_en.md    # English resume (SOURCE OF TRUTH)
│   └── resume_tr.md    # Turkish resume (SOURCE OF TRUTH)
├── CNAME               # Custom domain config
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── site.webmanifest    # PWA manifest
```

---

## Critical Information

### Correct Personal Details (from resume)

**Education:**
- Selçuk University, Konya — B.S. Computer Engineering
- 2020 - Expected June 2026
- GPA: 3.0
- Thesis: Selçuk AI Assistant (multilingual RAG chatbot)

**Study Abroad:**
- University of Nottingham & St. Andrew's College, UK
- 2017 - 2018
- St. Giles English programs (C1 Advanced → C2 Mastery)

**Certification:**
- YÖKDİL Academic English Exam — Score 85/100 (C2 Equivalent)

### Work Experience (Current)
1. **Bi-Art** — BI & Data Engineering Intern (Oct 2025 - Jan 2026)
2. **Ser Yöresel Dry Foods** — Logistics Coordinator (Q3 2024 - Present)
3. **Kardelen Nuts** — Export Operations Representative (Q2-Q3 2024)
4. **Essen Trade** — Software Developer & Business Dev (Q1-Q2 2024)

### Key Projects
1. **Selçuk AI Assistant** — RAG chatbot (LangChain, FAISS, Ollama, Flutter, FastAPI)
2. **EssenYemek** — Flutter food delivery app
3. **BiartBiPortal** — C#/.NET enterprise BI portal
4. **PerfectFrameAI** — Streamlit content enhancement tool
5. **KAVURMA** — SEO corporate website

### Skills Categories
- **AI/ML:** LangChain, RAG Pipelines, FAISS, Ollama, Prompt Engineering
- **Development:** Python, Flutter/Dart, FastAPI, Streamlit, Docker, Git
- **Data:** SQL, Power BI, Pandas, Web Scraping
- **Languages:** English C2 (YÖKDİL 85/100), Turkish Native

---

## Design Goals (User's Vision)

The user wanted a "WOW factor" portfolio inspired by these reference sites:
- https://brhane.vercel.app/
- https://www.iqbalowais.com/
- https://ushan.me/
- https://virajmavani.dev/
- https://www.myselfraj.com/
- https://galaxir.vercel.app/
- https://www.nskr.dev/
- https://amankumar.ai/
- https://zalt.me/
- https://kalpsenghani.com/

**Desired Features:**
- Page loader with logo animation
- Staggered hero entrance animations
- Full-screen mobile menu with fade-in links
- Numbered sections (01. 02. 03.)
- Glassmorphism UI / glass cards
- Bento-grid layouts
- Premium typography
- Particle/canvas background effects
- Smooth scroll reveals
- Gradient text accents

---

## Logo Files

Located at: `D:\Projects\esN2k.github.io\docs\CV\Logo\High Resolution Logo Files\`
- `Main Logo.png` — Character only
- `Logo with the Nick and Name.png` — Character + "esN2k" + "Doğukan Balaman"

These should be used in the portfolio design.

---

## Translations Structure (script.js)

The `translations` object in script.js contains EN and TR versions of all text. Key paths:

```javascript
translations.en.nav.*           // Navigation links
translations.en.sections.*      // Section titles
translations.en.hero.*          // Hero section
translations.en.about.*         // About section
translations.en.skills.*        // Skills
translations.en.experience.*    // Work experience
translations.en.projects.*      // Projects
translations.en.education.*     // Education (already correct)
translations.en.contact.*       // Contact
translations.en.footer.*        // Footer
```

The `data-i18n` attributes in HTML map to these paths.

---

## CSS Architecture

### Variables (in :root)
```css
--bg-primary: #050505;
--bg-secondary: #0a0a0f;
--accent-1: #9333ea;      /* Purple */
--accent-2: #06b6d4;      /* Cyan */
--accent-3: #f59e0b;      /* Gold */
--font-sans: 'Inter';
--font-mono: 'JetBrains Mono';
```

### Key Classes
- `.glass-card` — Glassmorphism card style
- `.reveal` — Scroll reveal animation
- `.hero-enter` — Hero entrance animation
- `.nav-menu.open` — Mobile menu open state
- `.section` — Standard section wrapper
- `.container` — Max-width container

### Breakpoints
- 1024px — Tablet landscape
- 900px — Tablet / Mobile menu trigger
- 768px — Tablet portrait
- 480px — Mobile

---

## Deployment

Automatic via GitHub Actions on push to `master` branch.

Workflow file: `.github/workflows/pages.yml`

To deploy manually:
```bash
git add -A
git commit -m "your message"
git push origin master
```

---

## Previous Issues Encountered

1. **Wrong university** — Was "Marmara", corrected to "Selçuk"
2. **Wrong graduation year** — Was "2021-2025", corrected to "2020-2026"
3. **Wrong email** — Was "balamansenol@gmail.com", corrected to "dodikbalaman@gmail.com"
4. **Wrong LinkedIn** — Was "/dogukanbalaman", corrected to "/esn2k"
5. **Wrong certifications** — Had fake certs, corrected to only YÖKDİL
6. **Mobile menu** — Element ID mismatch between HTML and JS (navPanel vs navMenu)
7. **Contact button overflow** — Text was too long for button background

---

## Recommendations for Next Agent

1. **Maintain Minimalist Vercel Aesthetic** — Avoid neon glows, gradients on backgrounds, and emojis. Stick to Cabinet Grotesk font and neutral high-contrast color palettes.
2. **Preserve Performance Targets** — The site currently has tightly optimized LCP and async CSS loading. Be careful not to introduce render-blocking scripts.
3. **Check all links** — Email, LinkedIn, GitHub should all work (currently implemented with Lucide icons).
4. **Verify Accessibility** — Whenever you add interactive elements, do NOT use `outline: none;` without providing a `focus-visible` alternative. Wait for Lighthouse audits before pushing.
5. **Translations** — Any new string addition in HTML must be mapped to both `translations.en` and `translations.tr` in `script.js`.

---

## Quick Commands

```bash
# Navigate to project
cd D:\Projects\esN2k-Portfolio

# Start local server
npx serve -s . -l 3000

# Check git status
git status

# Commit and deploy
git add -A && git commit -m "message" && git push
```

---

## Contact for Questions

If the next agent needs clarification, the user (Doğukan Balaman) can be reached at:
- Email: dodikbalaman@gmail.com
- The user prefers direct communication in the chat

---

*End of Handover Document*
