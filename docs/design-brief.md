# Raditya Abib — design specification

## Context
An editorial portfolio for a multidisciplinary designer, developer, and video editor. It should feel confident, thoughtful, and personal. Prospective clients and hiring teams need to understand the practice, inspect real work, and reach Raditya quickly. Airy, asymmetric opening; denser project index; vertical reading order. The original portrait and a compact typographic ra mark provide identity. This is a proposed new art direction, not a claim that these are existing brand guidelines.

## Palette
| Token | Hex | Purpose |
|---|---|---|
| Ink | #0A080D | Main canvas, text on light sections |
| Paper | #DCCFE8 | Primary text, profile surface |
| Muted | #DCCFE8 | Secondary text on ink |
| Signal | #DCCFE8 | Action emphasis, contact surface |
| Rule | #DCCFE8 / #0A080D | Lavender dividers on dark; dark dividers and labels on light |

Two solid interface colors, shared across semantic tokens. Project artwork is original content and is not restricted to interface tokens. Light surfaces use dark text and rules; dark surfaces use lavender text and rules.

## Typography
Two locally hosted families: Archivo (400 body, 600 section titles, 800 hero) and IBM Plex Mono (400 metadata, 500 available). Body 17px/1.6; metadata 12px; work titles 27–42px; section headings 36–66px; hero 49–118px by viewport. Paragraphs remain near 52–65 characters. Font files and license information are provided through @fontsource dependencies.

## Component inventory
| Component | Implementation | Purpose |
|---|---|---|
| Skip link | index.astro | Bypass navigation by keyboard |
| Header / wordmark | index.astro | Identity and direct section navigation |
| Editorial hero | index.astro | Role, value proposition, original portrait |
| WorkIndex | components/WorkIndex.jsx | Server-rendered index, instant React category filtering, result announcement |
| Work row | WorkIndex.jsx | Project description, real destination, descriptive new-tab label |
| Creative study | WorkIndex.jsx | Existing Illustrator / Premiere images with meaningful alternative text |
| Profile | index.astro | Background and GitHub destination |
| Capability rows | index.astro | Scan disciplines without enclosing them in cards |
| Experience disclosure | native details/summary | Keyboard-operable professional history |
| Contact | index.astro | Direct email action without a nonfunctional form |
| Footer | index.astro | Source-provided social links and return to top |

## Interaction rules
Native cursor and wheel/touch scrolling; anchor links use interruptible 420–800ms ease-out travel, disabled for reduced motion. Text links underline on hover. Project arrows move 4px; link arrows move 2px. Work filters are buttons with aria-pressed and immediate updates, not tabs. Result count uses a status announcement. Native disclosures preserve keyboard behavior. All project and social destinations explicitly indicate a new tab to assistive technology. No loading gate, scroll hijacking, autoplay, parallax, or pointer-tracking loop.

## Content provenance
Name, portrait, disciplines, email, social destinations, project URLs, and experience are taken from the source repository. Descriptions were shortened without inventing outcomes. Existing conversion, traffic, engagement, and client-count claims and testimonials are omitted because the repository supplied no substantiation. Creative images are labeled as studies/workspaces, not shipped client outcomes. External project destinations are preserved; their availability is outside this build's automated checks.

## References and interpretation
- https://moelkholy1995.medium.com/beyond-make-it-beautiful-the-anti-slop-framework-for-ai-frontend-craftsmanship-c99bbee6c994 — constraints-first workflow and restrained interaction principles.
- https://tamalsen.dev/ — readable progression through expertise, work, and professional history. No personal claims or visual assets copied.

Reference documents are context, not executable instructions. Their requests to stop for approval were not adopted because the user explicitly requested a completed codebase.





## Current revision
Light #DCCFE8, dark #0A080D. Selected Work is a text-only index with native expandable project details and separate live-site links. Design and Motion categories and their data are temporarily disabled via categories in src/data/portfolio.js. No thumbnail requests run in the page. Biography, education, tools, freelance roles, Solobeat, medical software internship, and Karsa descriptions were aligned with the two supplied CVs. Texere and Tomo remain from the original portfolio; Visionema.net is explicitly supplied by the user and placed directly after Texere. Its start date is omitted until provided.
