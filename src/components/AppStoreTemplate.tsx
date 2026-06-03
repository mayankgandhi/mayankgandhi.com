'use client';

import Link from "next/link";
import { useState } from "react";
import FieldNotesTheme from './FieldNotesTheme';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface Screenshot {
  url: string;
  title?: string;
  description?: string;
}

interface AppInfo {
  provider: string;
  size: string;
  category: string;
  compatibility: string;
  languages: string;
  ageRating: string;
  copyright: string;
}

interface WhatsNew {
  version: string;
  date: string;
  changes: string[];
}

interface AppStoreTemplateProps {
  appName: string;
  appIcon: string;
  tagline: string;
  appStoreLink?: string;
  rating?: number;
  ratingsCount?: number;
  features?: Feature[];
  screenshots: Screenshot[];
  whatsNew?: WhatsNew;
  appInfo: AppInfo;
  privacyPolicyLink: string;
  termsLink: string;
  /** Optional per-app signature accent. Falls back to a name-based default. */
  accentColor?: string;
  developerApps?: Array<{
    name: string;
    icon: string;
    tagline: string;
    link: string;
  }>;
}

// Per-app signature colors echoing the homepage's CSS variables.
function signatureFor(appName: string): string {
  const k = appName.toLowerCase();
  if (k.includes('cashew')) return '#2faa55';
  if (k.includes('walnut')) return '#1f97ad';
  if (k.includes('ticker')) return '#e07a00';
  if (k.includes('onelist')) return '#6366f1';
  return '#FF3D1F';
}

export default function AppStoreTemplate({
  appName,
  appIcon,
  tagline,
  appStoreLink,
  rating = 5.0,
  ratingsCount = 2,
  features = [],
  screenshots,
  whatsNew,
  appInfo,
  privacyPolicyLink,
  termsLink,
  accentColor,
  developerApps = []
}: AppStoreTemplateProps) {
  const [showAllChanges, setShowAllChanges] = useState(false);
  const sig = accentColor ?? signatureFor(appName);

  return (
    <>
      <FieldNotesTheme />
      <div className="fn-page as-page">
        <div className="fn-wrap">
          {/* Hero */}
          <section className="fn-card as-hero">
            <div className="as-hero-top">
              <img
                src={appIcon}
                alt={appName}
                className="as-appicon"
                style={{ borderBottom: `3px solid ${sig}` }}
              />
              <div className="as-hero-main">
                <h1 className="as-name">{appName}</h1>
                <p className="fn-sub">{tagline}</p>
                {appStoreLink && (
                  <a
                    href={appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fn-btn as-getbtn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download on the App Store
                  </a>
                )}
              </div>
            </div>

            {/* Stat band */}
            <div className="as-stats">
              <div className="as-stat">
                <div className="as-stat-k">Rating</div>
                <div className="as-stat-v">{rating.toFixed(1)}</div>
                <div className="as-stat-sub">
                  <span className="as-stars">{'★'.repeat(Math.floor(rating))}</span> ({ratingsCount})
                </div>
              </div>
              <div className="as-stat">
                <div className="as-stat-k">Age</div>
                <div className="as-stat-v">{appInfo.ageRating}+</div>
                <div className="as-stat-sub">Years</div>
              </div>
              <div className="as-stat">
                <div className="as-stat-k">Category</div>
                <div className="as-stat-v as-stat-v--sm">{appInfo.category}</div>
              </div>
              <div className="as-stat">
                <div className="as-stat-k">Developer</div>
                <Link href="/" className="as-stat-v as-stat-v--sm as-stat-link">
                  {appInfo.provider}
                </Link>
              </div>
            </div>
          </section>

          {/* What's New */}
          {whatsNew && (
            <section className="fn-card">
              <div className="fn-eyebrow">What&apos;s New</div>
              <div className="as-version-row fn-mono">
                <span>Version {whatsNew.version}</span>
                <span className="as-muted">{whatsNew.date}</span>
              </div>
              <ul className="as-changes">
                {whatsNew.changes.slice(0, showAllChanges ? undefined : 3).map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
              {whatsNew.changes.length > 3 && (
                <button
                  type="button"
                  onClick={() => setShowAllChanges(!showAllChanges)}
                  className="as-toggle fn-mono"
                >
                  {showAllChanges ? '− Show less' : '+ Show more'}
                </button>
              )}
            </section>
          )}

          {/* Preview */}
          {screenshots.length > 0 && (
            <section className="fn-card as-preview">
              <div className="fn-eyebrow">Preview</div>
              <div className="as-shots">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="as-shot">
                    <img src={screenshot.url} alt={`${appName} screenshot ${index + 1}`} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          {features.length > 0 && (
            <section className="fn-card">
              <div className="fn-eyebrow">Features</div>
              <div className="as-features">
                {features.map((feature, index) => (
                  <div key={index} className="as-feature">
                    {feature.icon && <div className="as-feature-icon">{feature.icon}</div>}
                    <div>
                      <h3 className="as-feature-title">{feature.title}</h3>
                      <p className="as-feature-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Information */}
          <section className="fn-card">
            <div className="fn-eyebrow">Information</div>
            <div className="as-info">
              {[
                { label: 'Provider', value: appInfo.provider, href: '/' },
                { label: 'Size', value: appInfo.size },
                { label: 'Category', value: appInfo.category },
                { label: 'Compatibility', value: appInfo.compatibility },
                { label: 'Languages', value: appInfo.languages },
                { label: 'Age Rating', value: `${appInfo.ageRating}+` },
                { label: 'Copyright', value: `© ${appInfo.copyright}` },
              ].map((item, index) => (
                <div key={index} className="as-info-row">
                  <span className="as-info-k fn-mono">{item.label}</span>
                  {item.href ? (
                    <Link href={item.href} className="as-info-v as-info-link">{item.value}</Link>
                  ) : (
                    <span className="as-info-v">{item.value}</span>
                  )}
                </div>
              ))}
              <Link href={privacyPolicyLink} className="as-info-row as-info-cta">
                <span>Privacy Policy</span>
                <span className="as-arrow">→</span>
              </Link>
              <Link
                href={termsLink}
                className="as-info-row as-info-cta"
                style={{ borderBottom: 'none' }}
              >
                <span>Terms of Use</span>
                <span className="as-arrow">→</span>
              </Link>
            </div>
          </section>

          {/* More by developer */}
          {developerApps.length > 0 && (
            <section className="fn-card">
              <div className="fn-eyebrow">More by {appInfo.provider}</div>
              <div className="as-devapps">
                {developerApps.map((app, index) => (
                  <Link key={index} href={app.link} className="as-devapp">
                    <img src={app.icon} alt={app.name} className="as-devapp-icon" />
                    <div>
                      <h3 className="as-devapp-name">{app.name}</h3>
                      <p className="as-devapp-tag">{app.tagline}</p>
                    </div>
                    <span className="as-devapp-arrow">↗</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back */}
          <div className="as-backrow">
            <Link href="/" className="fn-back">← Back to Portfolio</Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .as-page{padding-top:24px;}

        /* Hero */
        .as-hero-top{display:flex;align-items:center;gap:32px;}
        .as-appicon{
          width:150px;height:150px;border-radius:32px;flex-shrink:0;
          border:1px solid var(--fn-ink);background:var(--fn-paper-2);object-fit:cover;
        }
        .as-hero-main{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;}
        .as-name{
          font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-0.035em;
          line-height:1.02;font-size:clamp(1.8rem,4vw,2.7rem);color:var(--fn-ink);margin:0 0 6px;
        }
        .as-getbtn{margin-top:20px;}

        /* Stat band */
        .as-stats{
          display:grid;grid-template-columns:repeat(4,1fr);
          margin-top:30px;border-top:1px solid var(--fn-ink);
        }
        .as-stat{padding:20px 22px 4px;border-right:1px solid var(--fn-line);}
        .as-stat:last-child{border-right:none;}
        .as-stat-k{
          font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10.5px;font-weight:600;
          letter-spacing:0.1em;text-transform:uppercase;color:var(--fn-acc);margin-bottom:10px;
        }
        .as-stat-v{
          font-family:'Bricolage Grotesque',sans-serif;font-weight:800;letter-spacing:-0.03em;
          font-size:clamp(1.5rem,3vw,2.1rem);line-height:1;color:var(--fn-ink);
        }
        .as-stat-v--sm{font-size:clamp(0.95rem,1.6vw,1.15rem);letter-spacing:-0.01em;font-weight:700;line-height:1.2;}
        .as-stat-link{display:inline-block;transition:color .2s var(--fn-ease);}
        .as-stat-link:hover{color:var(--fn-acc-ink);}
        .as-stat-sub{
          font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;
          color:var(--fn-ink-soft);margin-top:8px;letter-spacing:0.02em;
        }
        .as-stars{color:var(--fn-acc);letter-spacing:1px;}

        /* What's New */
        .as-version-row{display:flex;justify-content:space-between;font-size:13px;color:var(--fn-ink);margin-bottom:14px;}
        .as-version-row .as-muted{color:var(--fn-ink-soft);}
        .as-changes{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;}
        .as-changes li{position:relative;padding-left:22px;font-size:15px;color:var(--fn-ink);line-height:1.5;}
        .as-changes li::before{content:"\\203A";position:absolute;left:2px;top:-1px;color:var(--fn-acc);font-size:18px;line-height:1.3;}
        .as-toggle{
          margin-top:16px;background:none;border:none;cursor:pointer;padding:0;
          color:var(--fn-acc-ink);font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;
        }
        .as-toggle:hover{text-decoration:underline;}

        /* Preview */
        .as-preview{padding-left:0;padding-right:0;}
        .as-preview .fn-eyebrow{padding:0 36px;}
        .as-shots{display:flex;gap:18px;overflow-x:auto;padding:4px 36px 6px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;}
        .as-shot{flex:0 0 auto;width:248px;scroll-snap-align:start;border:1px solid var(--fn-ink);background:var(--fn-paper-2);}
        .as-shot img{width:100%;height:auto;display:block;}

        /* Features */
        .as-features{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
        .as-feature{display:flex;gap:14px;padding:18px;border:1px solid var(--fn-line);background:var(--fn-paper);}
        .as-feature-icon{
          font-size:22px;flex-shrink:0;width:40px;height:40px;display:flex;align-items:center;justify-content:center;
          border:1px solid var(--fn-line);background:var(--fn-paper-2);
        }
        .as-feature-title{font-family:'Bricolage Grotesque',sans-serif;font-size:15px;font-weight:700;margin:2px 0 4px;color:var(--fn-ink);letter-spacing:-0.01em;}
        .as-feature-desc{font-size:13px;color:var(--fn-ink-soft);margin:0;line-height:1.55;}

        /* Information */
        .as-info{display:flex;flex-direction:column;}
        .as-info-row{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:13px 0;border-bottom:1px solid var(--fn-line);}
        .as-info-k{font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:var(--fn-ink-soft);}
        .as-info-v{font-size:14px;color:var(--fn-ink);text-align:right;font-weight:500;}
        .as-info-link{text-decoration:none;color:var(--fn-acc-ink);transition:opacity .2s;}
        .as-info-link:hover{opacity:0.7;}
        .as-info-cta{text-decoration:none;color:var(--fn-ink);font-weight:600;font-size:14.5px;transition:padding-left .2s var(--fn-ease),color .2s;}
        .as-info-cta:hover{color:var(--fn-acc-ink);padding-left:6px;}
        .as-arrow{color:var(--fn-acc);font-size:17px;}

        /* More by developer */
        .as-devapps{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
        .as-devapp{
          display:flex;gap:14px;align-items:center;padding:14px;text-decoration:none;
          border:1px solid var(--fn-line);background:var(--fn-paper);position:relative;
          transition:transform .2s var(--fn-ease),box-shadow .2s var(--fn-ease),border-color .2s;
        }
        .as-devapp:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--fn-ink);border-color:var(--fn-ink);}
        .as-devapp-icon{width:58px;height:58px;border-radius:14px;border:1px solid var(--fn-line);flex-shrink:0;}
        .as-devapp-name{font-family:'Bricolage Grotesque',sans-serif;font-size:15px;font-weight:700;margin:0 0 2px;color:var(--fn-ink);letter-spacing:-0.01em;}
        .as-devapp-tag{font-size:13px;color:var(--fn-ink-soft);margin:0;}
        .as-devapp-arrow{margin-left:auto;color:var(--fn-acc);font-size:18px;}

        /* Back */
        .as-backrow{text-align:center;padding:34px 0 8px;}

        @media (max-width:760px){
          .as-hero-top{flex-direction:row;align-items:flex-start;gap:18px;}
          .as-appicon{width:84px;height:84px;border-radius:20px;}
          .as-getbtn{margin-top:14px;font-size:11px;padding:10px 14px;}
          .as-stats{grid-template-columns:repeat(2,1fr);}
          .as-stat:nth-child(2){border-right:none;}
          .as-stat:nth-child(1),.as-stat:nth-child(2){border-bottom:1px solid var(--fn-line);}
          .as-features{grid-template-columns:1fr;}
          .as-devapps{grid-template-columns:1fr;}
          .as-preview .fn-eyebrow{padding:0 18px;}
          .as-shots{padding:4px 18px 6px;}
          .as-shot{width:210px;}
        }
      ` }} />
    </>
  );
}
