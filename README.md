# Safia Mussarat — Portfolio

A Vite + React portfolio website.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## ✏️ How to Customize

### Update project GitHub links
Open `src/data.js` and replace each `github` URL with the actual repo link:

```js
export const projects = [
  {
    name: 'Urban Heat Island Analysis Pipeline',
    github: 'https://github.com/safiamussaratt/YOUR-REPO-NAME',
    // ...
  },
  // ...
]
```

Set `github: null` for any project you want to mark as "Private repository".

### Add / remove projects, skills, experience, education
All content lives in `src/data.js` — just edit the arrays there.

### Swap in your photo
In `src/components/Hero.jsx`, replace the stat-ring section with an `<img>` tag
pointing to your photo placed in `public/`.

## 📁 Project Structure

```
src/
  components/
    Cursor.jsx
    Nav.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx    ← GitHub links rendered here
    Experience.jsx
    Education.jsx
    Contact.jsx
  hooks/
    useReveal.js    ← scroll animation hook
  data.js           ← ALL content lives here
  App.jsx
  index.css         ← ALL styles live here
  main.jsx
```
