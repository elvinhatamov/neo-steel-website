# NEO STEEL LTD - Professional Website

A modern, professional React-based static website for NEO STEEL LTD, showcasing 15 years of excellence in steel fabrication and construction services.

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

## 📄 License

Copyright © 2024 NEO STEEL LTD. All rights reserved.

## 🤝 Support

For support or inquiries:
- Email: info@neosteel.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React and Vite

