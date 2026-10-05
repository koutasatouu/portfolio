# Raditya Abib portfolio

A complete Astro + React + Tailwind rebuild. The source portfolio is untouched. The existing portfolio-prompt-rebuild.md in this output directory is preserved as supplied context.

## Run
Requires Node compatible with the engines field in package.json.

    npm ci
    npm run dev
    npm run build
    npm run preview

Deploy the generated dist directory to a static host. No API keys are required. Contact opens the visitor's email application. All main content is rendered without JavaScript; category filters require JavaScript.

## Edit
- src/data/portfolio.js: project destinations, descriptions, and experience.
- src/pages/index.astro: identity, biography, contact, and page structure.
- src/styles/global.css: palette, typography, responsive layout, and motion.
- public: supplied creative assets and optimized portrait.

## Design and verification
- docs/design-brief.md: context, product teaching, component inventory, references.
- docs/motion-config.json: motion contract, implemented through CSS variables.
- docs/before-after.md: source-based slop comparison.
- docs/accessibility-audit.md: verification results and limitations.
- docs/test-results.json: reproducible browser results.
- docs/preview-*.png: desktop, tablet, and mobile captures.

With the dev server running, execute `node tests/browser.mjs`. Tests use Microsoft Edge via Playwright. Install Edge or change the channel to an available Playwright browser. The accessibility scan uses axe-core; it is not a certification of every WCAG requirement.

Current content: six text-only web projects with expandable details. Design and Motion are temporarily disabled in the categories configuration; their source data is preserved. Updated biography and career descriptions follow the supplied CVs and user-provided Visionema role.
