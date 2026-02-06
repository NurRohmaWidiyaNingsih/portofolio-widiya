Portfolio site (React + Vite)

How to run locally (Windows PowerShell):

1. Open PowerShell in `f:\\PORTOFOLIO\\site`
2. Install dependencies:

npm install

3. Start dev server:

npm run dev

Open the printed local URL (usually http://localhost:5173).

Notes:
- Hero component lives in `src/components/Hero.jsx` and uses `src/assets/avatar.svg`.
- To change name/bio, edit `Hero.jsx`.
- Next steps: add Projects section, Contact form, and deploy to Vercel/Netlify.
 - To use your real photo: place the image file at `src/assets/profile.jpeg` (the project already contains this file). The Hero will prefer `profile.jpeg` automatically; fallback to the SVG is available.
