# 15 za 12 — Landing Page

Single-page bilingual (MK / EN) marketing site for the pizzeria **15 za 12** in Skopje, focused on a clean presentation of the menu, location, and contact options.

![Screenshot of the 15 za 12 landing page](screenshot.png)

## Features

- **Bilingual content (MK / EN)** with a language toggle, driven by a small `translations` object in `main.js` and `data-i18n` attributes in the HTML.
- **Menu with categories** (Pizzas, Sandwiches, Calzone, Shareables, Salads, Desserts, Extras) including:
  - Collapsible categories on mobile (accordion behavior).
  - Ingredients listed under each item, localized in both languages.
  - Extras / toppings grouped by price into classic pizzeria-style lines (items separated by `|`, price shown once).
- **Hero section** with key CTAs:
  - Call now
  - Order via Korpa
  - Order via Wolt
- **Gallery** with a lightbox for viewing photos.
- **Instagram integration**:
  - Compact “Follow us on Instagram” micro-section between Gallery and Contact.
  - Header Instagram link next to the language toggle.
- **Location & contact**:
  - Address, phone, opening hours.
  - Embedded Google Maps iframe for the restaurant location.
- **Mobile sticky CTA bar** at the bottom with quick actions (Call, Korpa, Wolt), shown only after scrolling past the hero on mobile.

## Tech Stack

- **HTML5** — semantic, single-page layout.
- **CSS** — custom styling only; no frameworks.
  - Fonts via `@font-face`: *Asap Condensed* for headings, *Josefin Sans* for body text.
- **Vanilla JavaScript** (`main.js`):
  - Language switching (MK / EN).
  - Collapsible mobile menu categories.
  - IntersectionObserver for mobile sticky CTA visibility based on hero visibility.
  - Gallery lightbox behavior.

## Files

- `index.html` — page structure and content.
- `style.css` — layout, typography, and component styles.
- `main.js` — language logic, menu interactions, lightbox, mobile CTA behavior.
- `logo.jpg` — site logo used in the fixed header.

## Running Locally

No build step is required. Any static file server will work.

From the project root:

```bash
# Using Python 3
python -m http.server 8000

# Then open in a browser:
http://localhost:8000/index.html
```

Or simply open `index.html` directly in a browser (note: some features like `localStorage` and certain security restrictions may behave slightly differently without a server).

## Editing Content

- **Text & structure**: edit `index.html`.
- **Translations**: edit the `translations` object in `main.js` (both `mk` and `en` sections).
- **Menu items & prices**: update the menu lists in `index.html` and corresponding translation keys in `main.js` as needed.

