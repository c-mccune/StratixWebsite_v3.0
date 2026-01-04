# CLAUDE.MD - Project Context for AI Assistance

## Project Overview
StratixWebsite v3.0 is a modern, responsive website built with React and Vite. This is a company website featuring a clean, professional design with navigation, hero sections, logo showcases, and informational pages.

## Tech Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: CSS (component-scoped)
- **Deployment**: GitHub Pages (gh-pages)
- **Linting**: ESLint with React-specific rules

## Project Structure
```
StratixWebsite_v3.0/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── LogoWall.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── docs/                # Documentation
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Development Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Key Configuration
- **Base Path**: `/StratixWebsite_v3.0` (configured for GitHub Pages deployment)
- **Router**: BrowserRouter with basename for proper routing on GitHub Pages
- **Build Output**: `dist/` directory

## Component Architecture
- **Navigation**: Site-wide navigation bar
- **Footer**: Site-wide footer with company info
- **Hero**: Hero section for landing pages
- **LogoWall**: Logo carousel/showcase component
- **Pages**: Route-based page components (Home, About)

## Recent Updates
- UI refinements: Improved ghost button visibility, fixed hero line breaks
- Logo carousel: Fixed infinite loop scrolling with additional logo copies
- Production build optimizations

## Development Guidelines
1. **Component Style**: Use functional components with hooks
2. **Routing**: All routes defined in App.jsx
3. **Styling**: Component-scoped CSS files preferred
4. **Assets**: Place static assets in `public/` directory
5. **Base Path**: Remember the `/StratixWebsite_v3.0` base path for routing and assets

## Common Tasks
- **Adding a new page**:
  1. Create component in `src/pages/`
  2. Add route in `src/App.jsx`
  3. Update Navigation component if needed

- **Adding a component**:
  1. Create in `src/components/`
  2. Import and use in relevant pages
  3. Add associated CSS if needed

- **Deployment**:
  - Run `npm run deploy` to build and deploy to GitHub Pages
  - Verify base path is correct for GitHub Pages environment

## Known Considerations
- Logo carousel uses duplicated logo arrays for seamless infinite scrolling
- Ghost buttons have been optimized for visibility
- React 19 is being used (latest version)
- The project uses Vite 7.x (latest)

## Build & Deploy
The project uses a standard Vite build process:
1. `npm run build` creates optimized production bundle in `dist/`
2. `npm run deploy` uses gh-pages to deploy the `dist/` folder to GitHub Pages
3. The site is accessible at the GitHub Pages URL with the repo name as base path

## Environment Notes
- No environment variables currently configured
- All configuration is in vite.config.js
- ESLint configured for React with hooks and refresh plugins
