# Scott Weller Portfolio

A responsive React + TypeScript portfolio that highlights Scott Weller’s work, skills, and contact information. The site features a modal-based “About” and “Contact” experience, theme toggling, parallax background shapes, and a curated project gallery.

## Links

- [Live Demo](https://scotts-portfolio-nine.vercel.app)
- [GitHub Repository](https://github.com/sw65109/Scotts-Portfolio)

## Features

- Landing page hero with quick links to About, Projects, Contact, and resume download
- Accessible modal that provides an about summary and contact form backed by EmailJS
- Light/dark theme support with persisted preference
- Parallax floating shapes and animated scroll indicator for visual interest
- Project grid fed by strongly typed data models
- Fully responsive styling built with a custom `global.css`

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development and bundling
- [EmailJS](https://www.emailjs.com/) for client-side email sending
- [Font Awesome](https://fontawesome.com/) icons via CDN

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Run lint/type checks (optional)

```

Open the dev server URL printed to your terminal (defaults to `http://localhost:5173`) to explore the site locally.

## Project Structure

```
src/
  components/    # UI components (LandingSection, Modal, Footer, etc.)
  hooks/         # Reusable hooks (useModal, useDarkMode, useParallax, useEmailForm)
  styles/        # Global styling
  utils/         # Constants and data loading helpers
  types/         # Shared TypeScript types
public/          # Static assets served as-is (favicons, robots.txt, etc.)
```

Key user-facing assets (logo, resume, project imagery) live in `src/assets`. Vite bundles them and rewrites URLs during build.

## Environment Variables

To enable the contact form, create a `.env` file with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after editing environment variables.

## Deployment

Run `npm run build` to produce production assets in `dist/`. Deploy that folder to any static host such as Netlify, Vercel, GitHub Pages, or Azure Static Web Apps.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note**: While the code is open source, please replace personal branding, content, and media with your own before reusing this portfolio template.
