# Before / after pattern comparison

| Observed in original code | Rebuild decision |
|---|---|
| Blue / purple gradient text and large background glows | Two solid purple colors across all sections, with reversed light and dark surfaces |
| Three-column identical project cards | Numbered full-width index with a readable title hierarchy |
| SpotlightCard nested inside CardTilt | Semantic article rows separated by rules |
| Outfit, Plus Jakarta Sans, and Inter imports | Two locally hosted font families |
| Broad global transitions and wildcard property transitions | Explicit transform transitions only on relevant feedback |
| Continuous custom cursor animation loop | Native cursor |
| Full application uses client:only React | Static Astro document, server-rendered React filter island |
| Rotating decorative visual effects and loading component | Immediately visible content and original portrait |
| Contact submission depends on a placeholder API key | Direct mailto link using the original email |
| Unsubstantiated KPI and testimonial copy | Descriptive project scope and source-backed career entries |

Original observations: src/styles/global.css, src/layouts/Layout.astro, src/pages/index.astro, src/components/Projects.jsx, src/components/Contact.jsx, src/utils/translations.js. No runtime screenshot of the original was captured; this is a source-based comparison.

