# EcoTravel – Week 3 Accessibility Project

**Author:** DURGADEVI.S  
**Course:** Frontend Web Development  
**Week:** 3  
**Project:** Enhancing User Experience with Accessibility

## Objective
Improve an EcoTravel information/blog-style interface using semantic HTML, ARIA, keyboard navigation, visible focus, readable contrast, responsive UX, and reduced-motion support.

## Accessibility audit
The project is designed to be checked with **Lighthouse** and **WAVE**. Run Lighthouse Accessibility in browser Developer Tools, then verify the page with WAVE. Also perform a keyboard-only test with Tab, Shift+Tab, Enter and Space. Actual scores should be recorded after running the tools locally because results can vary by browser and environment.

## Improvements made
1. **Semantic HTML:** header, nav, main, section, article, aside and footer create a clear document structure.
2. **Skip link:** keyboard users can jump directly to main content.
3. **Keyboard access:** native links/buttons work with keyboard controls and have visible focus.
4. **ARIA:** mobile navigation uses `aria-expanded`/`aria-controls`; accordion uses `aria-expanded`, `aria-controls`, `role="region"` and `aria-labelledby`.
5. **Clear labels:** interactive elements have descriptive names.
6. **Contrast:** dark text on light surfaces and light text on dark surfaces improve readability; state is not communicated by color alone.
7. **Responsive design:** content and navigation adapt to smaller screens.
8. **Reduced motion:** `prefers-reduced-motion` reduces scrolling and transition effects.
9. **Defensive JS:** initialization is wrapped in error handling so page content remains available if a non-critical script feature fails.

## Keyboard test plan
| Test | Expected result |
|---|---|
| Tab | Moves through controls in logical order |
| Shift + Tab | Moves backward |
| Enter/Space on menu | Opens/closes mobile navigation |
| Enter/Space on FAQ | Expands/collapses answer |
| Focus indicator | Clearly visible |
| Skip link | Moves focus to main content |

## WCAG-oriented design
The implementation follows the four broad WCAG principles: **Perceivable, Operable, Understandable, Robust**. It is designed around common WCAG 2.1/2.2 practices, while automated and manual testing should still be performed before claiming full conformance.

## How to run
1. Extract the ZIP.
2. Open the `EcoTravel-Week3-Accessibility` folder.
3. Double-click `index.html`.
4. Test with mouse and keyboard.
5. Run Lighthouse Accessibility and WAVE for the audit.

## Technologies
HTML5, CSS3, Vanilla JavaScript, ARIA, responsive CSS and browser accessibility tools.

## Learning outcomes
Demonstrates semantic structure, accessible interactive components, keyboard usability, focus management, responsive design, reduced motion and practical accessibility testing.
