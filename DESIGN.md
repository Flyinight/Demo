# Dresscode — Landing page design

## Product idea

Dresscode is clothing intelligence for the clothes someone already owns. The landing page should make the product feel useful immediately: less scrolling through a closet, less decision fatigue, more confidence in the outfit that is already there.

The core value proposition is:

> Look better and feel great in the clothes you already own. Spend less time making outfits.

## Creative direction

The visual direction is editorial, calm, and quietly intelligent. It borrows the restraint of a fashion lookbook and the clarity of a useful productivity tool. The page should feel like a considered wardrobe, not a generic AI product.

- **Tone:** observant, grounded, optimistic, personal
- **Avoid:** hype language, shopping pressure, “perfect style” promises, stock-photo clichés
- **Visual idea:** warm paper, ink, olive, and a small flash of acid lime; generous whitespace interrupted by compact product detail
- **Typography:** DM Sans for utility and UI, Playfair Display italic for human, editorial emphasis, DM Mono for metadata and product labels

## Page architecture

1. **Header** — wordmark, three anchor links, early-access CTA.
2. **Hero** — “Better outfits. Less guesswork.”, email capture, and a CSS-built closet dashboard preview.
3. **Signal row** — short proof statements that reframe the product around real clothes and easier mornings.
4. **How it works** — three steps: bring your closet in, see the pattern, get dressed.
5. **Workspace preview** — interactive outfit list with filter tabs and a dark product surface.
6. **Principles** — product beliefs that keep Dresscode personal and non-consumption-focused.
7. **Final CTA** — warm invitation to join early access.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F4F1EB` | Main page background |
| Ink | `#20231F` | Headings, body text, primary controls |
| Olive | `#596052` | Product surfaces and secondary accents |
| Lime | `#D8E46C` | Active state, action highlight, product signal |
| Line | `#DCD9D0` | Borders and section separators |
| Serif | Playfair Display | Emotional emphasis and outfit names |
| Mono | DM Mono | Product metadata, labels, timestamps |

## Interaction notes

- The email capture is intentionally low-friction. On submit, the CTA confirms “You’re on the list” without a page reload.
- The workspace tabs change the visible outfit rows to demonstrate that the closet can be browsed by context.
- All primary navigation uses in-page anchors to keep the first experience focused.
- CSS-created clothing shapes keep the prototype self-contained and avoid placeholder stock imagery.

## Responsive behavior

- At tablet widths, the hero stacks while the product preview remains the visual anchor.
- At mobile widths, navigation collapses to the wordmark and one CTA, the dashboard preview scales down, and the three process cards stack.
- The forms become vertical so the input and action remain comfortable to tap.
- `prefers-reduced-motion` removes smooth scrolling and transitions.

## Accessibility

- Semantic sections and landmarks are used throughout.
- Email inputs have labels available to assistive technology.
- Decorative product illustration elements are hidden from the accessibility tree.
- Interactive tabs expose `role="tab"` and `aria-selected` state.
- Color is supported by text labels and borders, not used as the only state indicator.
