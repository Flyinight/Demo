# AGENT.md

## Project overview

Dresscode is a React + TypeScript landing page for a clothing intelligence application. The page introduces the product, communicates the “more from what you own” value proposition, and collects early-access interest.

## Local development

Use Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The Vite server will print the local URL, usually `http://localhost:5173`.

## Project conventions

- Keep product copy human, direct, and grounded in the existing closet.
- Prefer semantic HTML and accessible labels for interactive controls.
- Keep the landing page self-contained unless an external dependency clearly improves the experience.
- Use TypeScript for all application code.
- Keep styles in `src/styles.css` and component behavior in `src/App.tsx` until the page needs to be split into reusable feature components.
- Use CSS variables for color, type, and repeated visual tokens.
- Do not add shopping-first or trend-chasing language; Dresscode is about using what the user already owns.

## Verification checklist

Before handing off a change:

1. Run `npm run build`.
2. Check desktop and mobile layouts in the local browser.
3. Test the email form with a valid email.
4. Test the outfit filter tabs.
5. Confirm anchor links and keyboard focus remain usable.

## File map

- `src/App.tsx` — landing page structure and lightweight interactions.
- `src/styles.css` — design system, page layout, responsive styles, and CSS clothing illustration.
- `DESIGN.md` — visual direction and interaction decisions.
- `README.md` — setup and project summary.
