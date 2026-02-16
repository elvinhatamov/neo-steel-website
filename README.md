# NEO STEEL LTD - Professional Website

A modern, professional React-based static website for NEO STEEL LTD, showcasing 15 years of excellence in steel fabrication and construction services.

---

## ⚡ Quick Start - How to View the Website

**👉 [Complete Step-by-Step Guide](./HOW-TO-VIEW.md)** - Perfect for beginners!

**Or, for experienced developers:**

```bash
# 1. Install dependencies (only needed first time)
npm install

# 2. Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser 🎉

![Website Running](https://github.com/user-attachments/assets/9ba844f1-7b90-41d5-b43f-c0ce8e981b01)

> **Note**: Make sure you have Node.js (v16+) installed. Check with `node --version`

---

## 🚀 Features

- **Modern Design**: Professional, clean aesthetic suitable for the steel industry
- **Responsive Layout**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Smooth Navigation**: Sticky navigation with smooth scrolling
- **Interactive Components**: Dynamic gallery, form validation, and animations
- **Key Sections**:
  - Hero section with prominent company tagline
  - About section highlighting 15 years of experience
  - Services showcase with 6 core offerings
  - Portfolio/Gallery with project showcases
  - Comprehensive quote request form
  - Contact information and map placeholder
  - Professional footer with quick links

## 🛠️ Tech Stack

- **React 19.2.0**: Modern UI library with functional components and hooks
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and development server
- **React Icons**: Icon library for professional UI elements
- **CSS3**: Custom styling with modern features

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neo-steel-website
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another available port).

### Production Build

Create an optimized production build:
```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🎨 Customization

### Colors

The color scheme is defined in `src/index.css` using CSS variables:
- `--primary-blue`: Main brand color
- `--secondary-blue`: Secondary brand color
- `--accent-blue`: Accent/highlight color
- Additional industrial colors (grays, silver)

### Content

Update content in the respective component files:
- Company information: `src/components/About.jsx`
- Services: `src/components/Services.jsx`
- Contact details: `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Logo

Replace the text-based logo in `src/components/Navigation.jsx` with your company logo image if desired.

## 📂 Project Structure

```
neo-steel-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx & .css
│   │   ├── Hero.jsx & .css
│   │   ├── About.jsx & .css
│   │   ├── Services.jsx & .css
│   │   ├── Gallery.jsx & .css
│   │   ├── QuoteForm.jsx & .css
│   │   ├── Contact.jsx & .css
│   │   └── Footer.jsx & .css
│   ├── App.jsx          # Main application component
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles and CSS variables
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🧪 Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 🌟 Key Highlights

- **Company**: NEO STEEL LTD
- **Tagline**: FROM BLUEPRINT TO BRILLIANCE
- **Experience**: 15 Years in the steel industry
- **Focus**: Quality, precision, and innovation

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or use Netlify CLI: `netlify deploy --prod --dir=dist`

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.js` to set the base path:
```js
export default defineConfig({
  base: '/neo-steel-website/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

### Deploy to Any Static Host

After running `npm run build`, upload the contents of the `dist` folder to any static hosting service (AWS S3, Azure Static Web Apps, Google Cloud Storage, etc.).

## 🔧 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### Dependencies Installation Issues

If you encounter issues with `npm install`, try:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure you're using Node.js v16 or higher:
```bash
node --version
```

## 📄 License

Copyright © 2024 NEO STEEL LTD. All rights reserved.

## 🤝 Support

For support or inquiries:
- Email: info@neosteel.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React and Vite

