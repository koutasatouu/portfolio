# Accessibility and quality audit

Verified 5 October 2026. Browser: headless Microsoft Edge through Playwright. Automated rules: axe WCAG 2 A/AA and WCAG 2.1 AA. See test-results.json and tests/browser.mjs.

## Delivery checklist
- [x] No wildcard transition declarations in authored source. Only explicit transform transitions are used.
- [x] Two solid interface colors, defined centrally: #DCCFE8 and #0A080D.
- [x] Two font families, hosted locally.
- [x] Every image wrapper has an explicit aspect ratio. Images have width and height attributes.
- [x] Reduced-motion media query present. Browser-emulated reduced motion produced scroll-behavior auto and transition duration 0s.
- [x] All authored images have descriptive alternative text. Decorative symbols are aria-hidden.
- [x] Interface text colors exceed 4.5:1. Ratios below calculated using WCAG relative luminance.
- [x] No decorative badges. Filter counts identify category size; buttons expose pressed state.

## Text contrast
| Pair | Ratio |
|---|---:|
| Paper / ink | 13.42:1 |
| Muted / ink | 13.42:1 |
| Signal / ink | 13.42:1 |
| Ink / paper | 13.42:1 |
| Rule / paper | 13.42:1 |
| Ink / signal | 13.42:1 |

## Browser verification
- 1440, 768, 390, 320 CSS pixels: zero axe violations and no horizontal overflow.
- No page JavaScript errors during the tested flows.
- Design and Motion are disabled; their content is retained in data and excluded from all results. Web displays six expandable projects.
- Experience disclosure opens with keyboard Enter.
- All six enabled work entries render with JavaScript disabled.
- Visible focus outlines, skip link, semantic landmarks, one h1, ordered headings, descriptive links.
- Native links remain functional without JavaScript; filters need hydration.
- Screenshots captured after font and image decoding; desktop and mobile layouts visually reviewed.
- Production build succeeds. Dependency audit reports zero known vulnerabilities at install time.

## Limits
This is an automated audit plus targeted visual and keyboard checks, not a full WCAG conformance certification. Screen-reader speech output, every browser/OS, and live availability of external project and social links were not tested. Contrast checks apply to interface text, not text embedded within supplied artwork. Email opens a configured mail client; no delivery is simulated or claimed.




