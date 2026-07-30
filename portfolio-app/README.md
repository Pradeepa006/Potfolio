# Pradeepa Subramani - Personal Portfolio

A modern, premium, and production-ready personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- **Modern UI/UX**: Dark theme, glassmorphism, smooth animations.
- **Responsive**: Fully optimized for desktop, tablet, and mobile.
- **Performance**: High Lighthouse scores with lazy loading and optimized assets.
- **SEO Ready**: `react-helmet-async` for meta tags, `robots.txt`, and `sitemap.xml`.
- **Contact Form**: EmailJS integration ready.
- **Analytics**: Firebase integration ready for visitor tracking.
- **Admin Dashboard**: Protected route (`/admin`) for insights.

## Tech Stack
- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4, Framer Motion
- **Icons**: React Icons
- **Backend (Optional)**: Firebase (for analytics)
- **Email**: EmailJS

## Folder Structure
```
/portfolio-app
│── /public
│   ├── Pradeepa_CV.pdf       # Downloadable resume
│   ├── robots.txt            # SEO crawler rules
│   └── sitemap.xml           # SEO sitemap
│── /src
│   ├── /assets               # Images, fonts
│   ├── /components           # Reusable UI components
│   │   ├── /layout           # Navbar, Footer
│   │   ├── /sections         # Hero, About, Experience, etc.
│   │   └── /ui               # CustomCursor, ScrollProgress
│   ├── /context              # Context Providers (e.g. AuthContext)
│   ├── /hooks                # Custom hooks (useAnalytics)
│   ├── /pages                # Home, AdminDashboard
│   ├── /utils                # Helper functions (firebase configs)
│   ├── App.jsx               # Main App routing
│   ├── index.css             # Global styles and Tailwind configuration
│   └── main.jsx              # React entry point
```

## Installation & Setup
1. **Clone or Download** the repository.
2. Navigate into the project folder:
   ```bash
   cd portfolio-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables
To enable EmailJS and Firebase, create a `.env.local` file in the root directory and add:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```
*(Remember to update `src/components/sections/Contact.jsx` and `src/utils/firebase.js` to use `import.meta.env.VITE_...` instead of hardcoded strings).*

## Deployment Guide (Vercel)
Vercel is the recommended hosting platform for Vite/React apps.
1. Push your code to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset should automatically be set to **Vite**.
5. Add your Environment Variables in the Vercel dashboard.
6. Click **Deploy**. Your site will be live in minutes!

## Customizing Your Information
- **Resume**: Replace `/public/Pradeepa_CV.pdf` with your updated resume.
- **Profile Image**: Go to `src/components/sections/Hero.jsx` and replace the placeholder circle with an `<img />` tag pointing to your professional photo.
- **Text/Content**: Modify the text directly inside the respective files in `src/components/sections/`.
