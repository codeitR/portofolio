# Ramesh Ghimire — Portfolio

My personal portfolio: a bento-grid layout built with semantic HTML, modern CSS and plain JavaScript. No frameworks and no build step.

## Features

- Semantic, accessible HTML: landmarks, one `h1`, labelled sections, skip link, screen-reader text for links that open a new tab
- Light and dark mode that follows the system setting and remembers your choice
- Responsive, mobile-first layout with CSS Grid
- Spinning gradient rings made with `conic-gradient`, paused for visitors who prefer reduced motion
- Tech chips with official logos, drawn once in an SVG sprite and reused with `<use>`
- Optimised images with `width`/`height`, lazy loading and `fetchpriority`

## Structure

```
index.html      page markup
css/style.css   styles (BEM class names, design tokens in :root)
js/main.js      theme toggle, copy email, footer year
images/         photo and project screenshots
favicon.svg     tab icon
```

## Run it locally

Open the folder in VS Code and use the **Live Server** extension, or run:

```bash
python3 -m http.server 5500
```

Then visit http://localhost:5500.

## Contact

- Email: ghimire.9@gmail.com
- GitHub: [@codeitR](https://github.com/codeitR)
