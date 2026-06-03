/**
 * FieldNotesTheme — shared "Engineering Field Notes" theme for the site's
 * subpages (app pages + legal pages), matching the homepage redesign.
 *
 * It mirrors the homepage's approach (see src/app/(home)/home-content.ts):
 * the site's shared globals.css ships a dark theme, so rather than editing it,
 * we override `html body` locally and load the same fonts. Higher specificity
 * (`html body`) wins over globals' `body`, and because this style block is
 * rendered by the page component it is added/removed automatically on client
 * navigation — leaving the dark homepage/global theme untouched.
 *
 * Render <FieldNotesTheme /> once near the top of any subpage component. It
 * exposes a set of reusable `.fn-*` classes and CSS variables used by
 * AppStoreTemplate and LegalPage.
 */

export const FIELD_NOTES_FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap';

const FIELD_NOTES_CSS = `
:root{
  --fn-paper:#ECE6D9;
  --fn-paper-2:#E3DCCB;
  --fn-card:#F2EDE2;
  --fn-ink:#16130E;
  --fn-ink-soft:#5c5448;
  --fn-line:rgba(22,19,14,0.16);
  --fn-line-strong:rgba(22,19,14,0.42);
  --fn-acc:#FF3D1F;
  --fn-acc-ink:#E22E10;
  --fn-grid:rgba(22,19,14,0.045);
  --fn-ease:cubic-bezier(.22,.61,.36,1);
  --fn-maxw:1180px;
}

/* Override the shared dark globals.css for subpages (homepage untouched). */
html{color-scheme:light;}
html body{
  background-color:var(--fn-paper);
  color:var(--fn-ink);
  font-family:'Bricolage Grotesque',-apple-system,BlinkMacSystemFont,sans-serif;
  background-image:
    linear-gradient(var(--fn-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--fn-grid) 1px, transparent 1px);
  background-size:46px 46px;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
html body ::selection{background:var(--fn-acc);color:var(--fn-paper);}

/* ---------- Layout primitives ---------- */
.fn-page{min-height:100vh;padding:40px 0 96px;}
.fn-wrap{max-width:var(--fn-maxw);margin:0 auto;padding:0 32px;}
.fn-wrap--narrow{max-width:920px;}
.fn-mono{font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;}

/* ---------- Cards / sections ---------- */
.fn-card{
  background:var(--fn-card);
  border:1px solid var(--fn-ink);
  padding:30px 36px;
  margin-bottom:14px;
}
.fn-card--flush{padding-left:0;padding-right:0;}

.fn-eyebrow{
  font-family:'JetBrains Mono',ui-monospace,monospace;
  font-size:11.5px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;
  color:var(--fn-acc);display:flex;align-items:center;gap:12px;margin:0 0 18px;
}
.fn-eyebrow::after{content:"";flex:1;height:1px;background:var(--fn-line);}
.fn-eyebrow--plain::after{display:none;}

.fn-h1{
  font-family:'Bricolage Grotesque',sans-serif;
  font-weight:800;letter-spacing:-0.035em;line-height:1;
  font-size:clamp(2rem,4.4vw,2.9rem);color:var(--fn-ink);margin:0;
}
.fn-sub{font-size:14px;color:var(--fn-ink-soft);margin:6px 0 0;font-weight:500;}

/* ---------- Buttons / links ---------- */
.fn-btn{
  font-family:'JetBrains Mono',ui-monospace,monospace;
  font-size:13px;font-weight:600;letter-spacing:0.03em;text-transform:uppercase;
  border:1px solid var(--fn-ink);padding:12px 18px;
  display:inline-flex;align-items:center;gap:10px;width:fit-content;
  color:var(--fn-ink);background:transparent;cursor:pointer;
  transition:transform .2s var(--fn-ease),box-shadow .2s var(--fn-ease),background .2s var(--fn-ease),color .2s var(--fn-ease);
}
.fn-btn:hover{background:var(--fn-ink);color:var(--fn-paper);transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--fn-acc);}
.fn-btn--fill{background:var(--fn-acc);color:var(--fn-paper);border-color:var(--fn-acc);}
.fn-btn--fill:hover{background:var(--fn-ink);border-color:var(--fn-ink);box-shadow:4px 4px 0 var(--fn-acc);}

.fn-back{
  font-family:'JetBrains Mono',ui-monospace,monospace;
  font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;
  color:var(--fn-ink-soft);display:inline-flex;align-items:center;gap:8px;transition:color .2s var(--fn-ease),gap .2s var(--fn-ease);
}
.fn-back:hover{color:var(--fn-acc);gap:12px;}

/* ---------- Prose (legal pages) ---------- */
.fn-prose{font-size:15px;color:var(--fn-ink-soft);line-height:1.7;}
.fn-prose > :first-child{margin-top:0;}
.fn-prose h2{
  font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-0.02em;
  font-size:clamp(1.2rem,2.4vw,1.55rem);color:var(--fn-ink);line-height:1.1;
  margin:38px 0 14px;padding-bottom:10px;border-bottom:1px solid var(--fn-line);
}
.fn-prose h3{
  font-family:'Bricolage Grotesque',sans-serif;font-weight:700;letter-spacing:-0.01em;
  font-size:1.05rem;color:var(--fn-ink);margin:22px 0 10px;
}
.fn-prose p{margin:12px 0;}
.fn-prose a{color:var(--fn-acc-ink);text-decoration:none;border-bottom:1px solid transparent;transition:border-color .2s;}
.fn-prose a:hover{border-bottom-color:var(--fn-acc-ink);}
.fn-prose strong{color:var(--fn-ink);font-weight:700;}
.fn-prose ul{list-style:none;padding-left:0;margin:14px 0;display:flex;flex-direction:column;gap:9px;}
.fn-prose li{position:relative;padding-left:22px;}
.fn-prose li::before{content:"\\25B8";position:absolute;left:0;top:0;color:var(--fn-acc);font-size:12px;line-height:1.6;}
.fn-prose em,.fn-prose .fn-prose-note{color:var(--fn-ink-soft);font-style:italic;}

@media (max-width:680px){
  .fn-wrap{padding:0 18px;}
  .fn-card{padding:22px 18px;}
}
@media (prefers-reduced-motion:reduce){
  .fn-btn,.fn-back{transition:none;}
}
`;

export default function FieldNotesTheme() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={FIELD_NOTES_FONT_HREF} rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: FIELD_NOTES_CSS }} />
    </>
  );
}
