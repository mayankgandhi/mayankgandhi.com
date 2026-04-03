# TODOs

## Sub-page dark mode
Update cashew, walnut, ticker, onelist sub-pages to dark theme for visual consistency with homepage. Currently uses AppStoreTemplate with light theme. The contrast when navigating from dark homepage to light sub-page is noticeable.

**Depends on:** Homepage dark redesign
**Files:** src/components/AppStoreTemplate.tsx, src/app/{cashew,walnut,ticker,onelist}/page.tsx

## Centralize breakpoint values
Extract 900px responsive breakpoint to tokens.ts as tokens.breakpoint.mobile. Currently appears as a magic number in page.tsx and Toolbar.tsx. Prevents drift when adding new responsive behavior.

**Files:** src/styles/tokens.ts, src/app/(home)/page.tsx, src/components/Toolbar.tsx
