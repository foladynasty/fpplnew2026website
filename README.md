# Financial Perspectives Website

A modern, professional website for Financial Perspectives (FP-EDU.COM) - Singapore's premier financial education provider since 1999.

## Features

- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **13 Key Sections**:
  1. Hero Slider with 5 rotating slides
  2. Trust Bar with credentials
  3. CFP® Certification Pathway
  4. SCFP-HNWI Advanced Certification
  5. CPD Courses showcase
  6. Why Financial Perspectives
  7. Corporate Training Solutions
  8. Success Stories & Testimonials
  9. Latest Resources & Insights
  10. Upcoming Events & Classes
  11. Newsletter Signup
  12. Final CTA Banner
  13. Comprehensive Footer

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
fp-edu-website/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSlider.tsx       # Hero slider section
│   ├── TrustBar.tsx         # Trust indicators
│   ├── CFPPathway.tsx       # CFP certification info
│   ├── SCFPHNWISection.tsx  # HNWI certification
│   ├── CPDCourses.tsx       # CPD courses showcase
│   ├── WhyFP.tsx            # Why choose FP
│   ├── CorporateTraining.tsx # Corporate solutions
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Resources.tsx        # Resources section
│   ├── Events.tsx           # Upcoming events
│   ├── Newsletter.tsx       # Newsletter signup
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer section
├── public/
│   └── FP logo.png          # Company logo
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. Primary colors use a blue palette, with gold accents for premium sections.

### Content

All content is currently hardcoded in components. To make it dynamic:
1. Create a CMS integration or
2. Move content to JSON/Markdown files
3. Use environment variables for contact information

### Images

Replace placeholder images in the `/public` folder with actual images.

## License

© 2026 Financial Perspectives Pte Ltd. All rights reserved.


