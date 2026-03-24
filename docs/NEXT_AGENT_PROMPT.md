# Portfolio Enhancement Prompt for Next Agent

Copy and paste this entire prompt to the next agent:

---

## Context

I need you to complete and polish my portfolio website. The previous agent did the initial rebuild but there are still issues and it doesn't match the premium quality I want.

**Repository:** https://github.com/esN2k/esN2k-Portfolio  
**Live URL:** https://esn2k.engineer  
**Local Path:** D:\Projects\esN2k-Portfolio

## CRITICAL: Read These First

Before starting ANY work, read these files in order:

1. `docs/HANDOVER.md` - Complete project context and known issues
2. `docs/resume_en.md` - Source of truth for my information (English)
3. `docs/resume_tr.md` - Source of truth for my information (Turkish)
4. `docs/VERIFICATION.md` - Current state verification

**These resume files are the ONLY source of truth for my personal information, work experience, education, and projects.**

## Current Issues That Need Fixing

1. **Mobile menu** - Not properly styled/functional on all devices, needs to be full-screen overlay like modern portfolios
2. **Contact button alignment** - "Get in Touch" anchor doesn't scroll to the exact position, scrolls too high
3. **Hero animations** - Need refinement, should have smooth staggered entrance like reference sites
4. **Startup animation** - Need a nice loading animation when users first open the website
5. **Overall polish** - The site works but lacks the "WOW factor" I want

## My Vision: Premium Portfolio Examples

I want my portfolio to have the same level of polish as these sites. Study them carefully:

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
- https://www.redoyanulhaque.me/
- https://about.ashutoshcodes.in/
- https://dinq.me/elonfeng
- https://erfan-ramezani.ir/
- https://dinq.me/keith
- https://www.phyominthein.com/
- https://safalnarshing.com.np/
- https://ssoad.github.io/

**Look for:**
- Page loaders with smooth transitions
- Staggered hero entrance animations
- Full-screen mobile menus with fade-in effects
- Smooth scroll reveals
- Premium typography
- Glassmorphism/glass cards
- Gradient text accents
- Micro-interactions
- Professional polish and attention to detail

## Tech Stack (DO NOT CHANGE)

- **Vanilla HTML/CSS/JavaScript ONLY** - No React, Vue, or any frameworks
- **GitHub Pages** - Automatic deployment via GitHub Actions
- **Bilingual** - EN/TR language switching (already functional)
- **Domain** - esn2k.engineer (already configured)

## Logo Files

Use these high-resolution logos from the docs folder:
- `docs/logo_character.png` - Character only
- `docs/logo_full.png` - Character with "esN2k" and "Doğukan Balaman"

Consider using these instead of current logos for better quality.

## Design Requirements

1. **Page Loader** - Smooth, branded loading animation (1.5-2s)
2. **Hero Section** - Staggered entrance with delays between elements
3. **Mobile Menu** - Full-screen overlay, large centered links, smooth transitions
4. **Scroll Reveals** - Elements fade/slide in as user scrolls
5. **Glass Cards** - Subtle blur effect with gradient borders
6. **Typography** - Premium font pairing (currently using Inter + JetBrains Mono)
7. **Animations** - Smooth, professional, respect `prefers-reduced-motion`
8. **Micro-interactions** - Hover effects, button states, smooth transitions

## My Information (Verify Against Resume Files)

**Personal:**
- Email: dodikbalaman@gmail.com
- LinkedIn: linkedin.com/in/esn2k
- GitHub: github.com/esN2k
- Phone: +90 (542) 408 1102

**Education:**
- Selçuk University, Konya — B.S. Computer Engineering
- 2020 - Expected June 2026, GPA: 3.0
- Thesis: Selçuk AI Assistant (multilingual RAG chatbot)
- Study Abroad: University of Nottingham & St. Andrew's College (2017-2018)

**Certification:**
- YÖKDİL Academic English — Grade A+, 92/100 (C2 Mastery)

**Work Experience:** (Latest first)
1. Bi-Art - BI & Data Engineering Intern (Oct 2025 - Jan 2026)
2. Ser Yöresel Dry Foods - Logistics Coordinator (Q3 2024 - Present)
3. Kardelen Nuts - Export Operations Representative (Q2-Q3 2024)
4. Essen Trade - Software Developer & Business Dev (Q1-Q2 2024)

## What I Need You To Do

1. **Fix the current issues** - Mobile menu, contact button scroll, animations
2. **Add startup animation** - Premium page loader
3. **Polish everything** - Make it match the quality of reference sites
4. **Test thoroughly** - Desktop, tablet, mobile, both EN/TR languages
5. **Verify accuracy** - Double-check ALL content against resume files

## Important Notes

- The previous agent made mistakes with my university (was Marmara, should be Selçuk) and email (was balamansenol@, should be dodikbalaman@). These are now corrected but please verify everything.
- The site uses `data-i18n` attributes for translations. The translations object is in `script.js`.
- CSS uses custom properties (variables) in `:root` for theming.
- All files are in the repository root (index.html, style.css, script.js).

## Testing

Before considering work complete:

```bash
# Start local server
cd D:\Projects\esN2k-Portfolio
npx serve -s . -l 3000
```

Then test:
- [ ] Page loads smoothly with loader animation
- [ ] Hero animations trigger correctly
- [ ] Mobile menu opens/closes properly (full-screen)
- [ ] Contact button scrolls to correct position
- [ ] All links work (email, LinkedIn, GitHub)
- [ ] EN/TR language switching works
- [ ] Responsive on mobile, tablet, desktop
- [ ] All content matches resume files

## Deployment

Changes auto-deploy when pushed to master:

```bash
git add -A
git commit -m "your message"
git push
```

## Questions?

If anything is unclear, refer back to:
- `docs/HANDOVER.md` for detailed context
- `docs/resume_en.md` and `docs/resume_tr.md` for accurate information
- The reference portfolio sites for design inspiration

---

**Goal:** Make this portfolio have the same premium quality and "WOW factor" as the reference sites. Take your time, pay attention to details, and don't be afraid to refactor if needed.
