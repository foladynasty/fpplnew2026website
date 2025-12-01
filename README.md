# Financial Perspectives Education Website

A modern, responsive website for Financial Perspectives, built with Next.js and configured for static HTML export.

🌐 **Live Site:** [Your Domain]  
📦 **Repository:** https://github.com/foladynasty/fpstatic2026website

---

## 🎯 Overview

This is a professional education website featuring:
- **CFP® Certification Program** - Complete certification pathway
- **SCFP-HNWI Program** - Specialized certification with 7 detailed modules
- **CPD Courses** - 4 continuing professional development courses
- **Events & Media** - Course schedules and resources
- **Contact & About** - Company information and contact forms

**Total:** 22 fully functional pages with beautiful gold & charcoal design theme.

---

## ✨ Features

- ✅ **Static HTML Export** - No Node.js required on server
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Modern Design** - Gold and charcoal color scheme
- ✅ **Fast Loading** - Optimized static files
- ✅ **SEO Friendly** - Pre-rendered pages
- ✅ **Contact Forms** - Integrated with FormSubmit.co
- ✅ **Animations** - Smooth transitions with Framer Motion
- ✅ **Tailwind CSS** - Modern utility-first styling

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/foladynasty/fpstatic2026website.git
cd fpstatic2026website

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

---

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build static HTML for production
npm run build

# Run production build locally (requires build first)
npm run start

# Run linter
npm run lint
```

---

## 🏗️ Project Structure

```
fpstatic2026website/
├── app/                    # Next.js app directory (pages)
│   ├── about/             # About page
│   ├── cfp/               # CFP certification page
│   ├── scfp-hnwi/         # SCFP program + 7 module pages
│   ├── cpd/               # CPD courses + 4 course pages
│   ├── events/            # Events page
│   ├── media/             # Media page
│   ├── contact/           # Contact page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── about/            # About page components
│   ├── cfp/              # CFP page components
│   ├── scfp/             # SCFP page components
│   ├── cpd/              # CPD page components
│   ├── events/           # Events components
│   ├── media/            # Media components
│   ├── contact/          # Contact components
│   ├── Header.tsx        # Main navigation
│   └── Footer.tsx        # Site footer
├── lib/                   # Content and data
│   ├── cfp-content.ts    # CFP program data
│   ├── scfp-content.ts   # SCFP program data
│   ├── cpd-content.ts    # CPD courses data
│   └── events-content.ts # Events data
├── public/               # Static assets
│   └── FP logo.png       # Company logo
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies
```

---

## 🌐 Deployment

### Static HTML Deployment (Recommended)

This site is configured for static HTML export, perfect for:
- Plesk hosting
- Shared hosting (GoDaddy, Bluehost, etc.)
- Free hosting (Netlify, Vercel, Cloudflare Pages)

#### Build for Production:

```bash
npm run build
```

This creates a `static-upload` folder with all static files.

#### Upload to Hosting:

1. Upload contents of `static-upload/` folder to your server
2. Point domain to the uploaded directory
3. Done! No Node.js required on server.

**Detailed guides available in:**
- `STATIC-WEBSITE-SUMMARY.md` - Complete overview
- `static-upload/STATIC-DEPLOYMENT-GUIDE.txt` - Step-by-step instructions
- `static-upload/QUICK-START.txt` - Fast deployment guide

---

## 📧 Contact Form Setup

The contact form uses **FormSubmit.co** (free service).

**To activate:**
1. Open `components/contact/ContactForm.tsx`
2. Line 29: Replace `YOUR_EMAIL_HERE` with your email
3. Rebuild: `npm run build`
4. Re-upload static files

---

## 🔄 Making Changes

### Development Workflow:

1. **Edit code locally**
   ```bash
   npm run dev  # Test changes at localhost:3000
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Deploy**
   - Upload `static-upload/` folder contents to your server

---

## 🎨 Customization

### Colors
The site uses a gold and charcoal theme defined in `tailwind.config.ts`:
- Primary (Gold): `#C5A572`
- Charcoal: `#2C3E50`
- Teal accent: `#16A085`

### Content
Update content in the `lib/` folder:
- `cfp-content.ts` - CFP program information
- `scfp-content.ts` - SCFP program details
- `cpd-content.ts` - CPD courses
- `events-content.ts` - Event schedules

---

## 🌟 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with overview |
| About | `/about` | Company information |
| CFP | `/cfp` | CFP® Certification program |
| SCFP-HNWI | `/scfp-hnwi` | Specialized certification |
| CPD Courses | `/cpd` | Professional development |
| Events | `/events` | Course schedules |
| Media | `/media` | Resources and downloads |
| Contact | `/contact` | Contact form and info |

**Plus:** 7 SCFP module pages and 4 CPD course detail pages

---

## 🔧 Tech Stack

- **Framework:** Next.js 15.5.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** FormSubmit.co integration
- **Deployment:** Static HTML export

---

## 📱 Responsive Design

Fully responsive across all devices:
- 📱 Mobile (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Laptop (1024px - 1920px)
- 🖥️ Desktop (1920px+)

---

## 🚀 Future Integrations

### Airtable (Events Management)
- Dynamic course schedules
- Real-time updates
- See: `static-upload/AIRTABLE-INTEGRATION.txt`

### WordPress Blog
- Install on subdomain: `blog.yourdomain.com`
- Link from main navigation
- Independent content management

---

## 📄 License

Private project for Financial Perspectives Education.

---

## 👤 Author

**Financial Perspectives**  
Website: [Your Domain]  
Email: [Your Email]

---

## 📞 Support

For technical support or questions:
- Check documentation in `static-upload/` folder
- Review `STATIC-WEBSITE-SUMMARY.md`
- Contact the development team

---

## 🎉 Deployment Status

✅ **Production Ready**  
✅ **Static HTML Export Configured**  
✅ **All 22 Pages Functional**  
✅ **Mobile Responsive**  
✅ **SEO Optimized**

---

**Built with ❤️ for Financial Perspectives Education**
