'use client';

import Link from "next/link";
import { useState } from "react";
import { tokens } from '@/styles/tokens';

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
  developerApps?: Array<{
    name: string;
    icon: string;
    tagline: string;
    link: string;
  }>;
}

const dark = tokens.colors.dark;

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
  developerApps = []
}: AppStoreTemplateProps) {
  const [showAllChanges, setShowAllChanges] = useState(false);

  return (
    <div className="app-store-page">
      <div className="app-store-container">
        {/* Hero Section */}
        <div className="app-store-card app-store-hero">
          <div className="hero-layout">
            <img
              src={appIcon}
              alt={appName}
              className="app-icon"
            />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: '700',
                margin: '0 0 8px 0',
                color: dark.textPrimary,
                lineHeight: '1.2',
                letterSpacing: '-0.03em',
              }}>
                {appName}
              </h1>
              <p style={{
                fontSize: '14px',
                color: dark.textSubtle,
                margin: '0 0 24px 0',
              }}>
                {tagline}
              </p>
              {appStoreLink && (
                <a
                  href={appStoreLink}
                  className="app-store-badge"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid rgba(255,255,255,0.12)`,
                    borderRadius: '10px',
                    padding: '10px 20px',
                    color: dark.textPrimary,
                    fontSize: '14px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: 'fit-content',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </a>
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div className="stats-row">
            <div style={{ textAlign: "center" }}>
              <div className="section-label">
                {ratingsCount} RATING{ratingsCount !== 1 ? 'S' : ''}
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: dark.textMuted, marginBottom: '2px' }}>
                {rating.toFixed(1)}
              </div>
              <div style={{ color: dark.textMuted, fontSize: '11px' }}>
                {'★'.repeat(Math.floor(rating))}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className="section-label">AGES</div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: dark.textMuted, marginBottom: '2px' }}>
                {appInfo.ageRating}
              </div>
              <div style={{ color: dark.textMuted, fontSize: '11px' }}>Years</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className="section-label">CATEGORY</div>
              <div style={{ fontSize: '32px', marginBottom: '2px' }}>💳</div>
              <div style={{ color: dark.textMuted, fontSize: '11px' }}>{appInfo.category}</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className="section-label">DEVELOPER</div>
              <div style={{ fontSize: '32px', marginBottom: '2px' }}>👤</div>
              <Link
                href="/"
                style={{
                  color: dark.accent,
                  fontSize: '11px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                {appInfo.provider}
              </Link>
            </div>
          </div>
        </div>

        {/* What's New */}
        {whatsNew && (
          <div className="app-store-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h2 className="section-label" style={{ fontSize: '11px', margin: 0 }}>WHAT'S NEW</h2>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', color: dark.textSubtle }}>Version {whatsNew.version}</span>
              <span style={{ fontSize: '13px', color: dark.textSubtle }}>{whatsNew.date}</span>
            </div>

            <div style={{ fontSize: '14px', lineHeight: '1.5', color: dark.textMuted }}>
              {whatsNew.changes.slice(0, showAllChanges ? undefined : 3).map((change, i) => (
                <div key={i} style={{ marginBottom: '8px' }}>{change}</div>
              ))}
              {whatsNew.changes.length > 3 && (
                <button
                  onClick={() => setShowAllChanges(!showAllChanges)}
                  style={{
                    color: dark.accent,
                    background: 'none',
                    border: 'none',
                    padding: '8px 0 0 0',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {showAllChanges ? 'less' : 'more'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Preview/Screenshots */}
        {screenshots.length > 0 && (
          <div className="app-store-card" style={{ padding: '32px 0' }}>
            <h2 className="section-label" style={{ fontSize: '11px', margin: '0 0 24px 40px' }}>PREVIEW</h2>
            <div className="screenshots-scroll">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot-card">
                  <div style={{
                    background: dark.surface,
                    border: `1px solid ${dark.border}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={screenshot.url}
                      alt={`Screenshot ${index + 1}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div className="app-store-card">
            <h2 className="section-label" style={{ fontSize: '11px', margin: '0 0 16px 0' }}>FEATURES</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '16px',
                  background: dark.surface,
                  border: `1px solid ${dark.border}`,
                  borderRadius: '12px',
                }}>
                  {feature.icon && (
                    <div style={{ fontSize: '28px', flexShrink: 0 }}>{feature.icon}</div>
                  )}
                  <div>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      margin: '0 0 4px 0',
                      color: dark.textPrimary,
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: dark.textSubtle,
                      margin: 0,
                      lineHeight: '1.5',
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Information */}
        <div className="app-store-card">
          <h2 className="section-label" style={{ fontSize: '11px', margin: '0 0 16px 0' }}>INFORMATION</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Provider', value: appInfo.provider, isLink: true, href: '/' },
              { label: 'Size', value: appInfo.size },
              { label: 'Category', value: appInfo.category },
              { label: 'Compatibility', value: appInfo.compatibility },
              { label: 'Languages', value: appInfo.languages },
              { label: 'Age Rating', value: `${appInfo.ageRating}+` },
              { label: 'Copyright', value: `© ${appInfo.copyright}` },
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255,255,255, 0.04)',
              }}>
                <span style={{ fontSize: '14px', color: dark.textSubtle }}>{item.label}</span>
                {item.isLink ? (
                  <Link href={item.href!} style={{ fontSize: '14px', color: dark.accent, textDecoration: 'none' }}>
                    {item.value}
                  </Link>
                ) : (
                  <span style={{ fontSize: '14px', color: dark.textSecondary, textAlign: 'right' }}>{item.value}</span>
                )}
              </div>
            ))}

            <Link
              href={privacyPolicyLink}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255,255,255, 0.04)',
                textDecoration: 'none',
                color: dark.accent,
                fontSize: '14px',
                alignItems: 'center',
              }}
            >
              <span>Privacy Policy</span>
              <span style={{ fontSize: '16px' }}>→</span>
            </Link>

            <Link
              href={termsLink}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: dark.accent,
                fontSize: '14px',
                alignItems: 'center',
              }}
            >
              <span>Terms of Use</span>
              <span style={{ fontSize: '16px' }}>→</span>
            </Link>
          </div>
        </div>

        {/* More by Developer */}
        {developerApps.length > 0 && (
          <div className="app-store-card">
            <h2 className="section-label" style={{ fontSize: '11px', margin: '0 0 16px 0' }}>
              MORE BY {appInfo.provider.toUpperCase()}
            </h2>

            <div className="developer-apps-grid">
              {developerApps.map((app, index) => (
                <Link
                  key={index}
                  href={app.link}
                  className="developer-app-link"
                  style={{
                    display: 'flex',
                    gap: '12px',
                    textDecoration: 'none',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '12px',
                    background: dark.surface,
                    border: `1px solid ${dark.border}`,
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '14px',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      margin: '0 0 2px 0',
                      color: dark.textPrimary,
                    }}>
                      {app.name}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: dark.textSubtle,
                      margin: 0,
                    }}>
                      {app.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Portfolio CTA */}
        <div style={{
          textAlign: 'center',
          padding: '40px 0 20px',
        }}>
          <Link
            href="/"
            className="back-to-portfolio"
            style={{
              color: dark.accent,
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>

      <style>{`
        .app-store-page {
          background-color: ${dark.bg};
          min-height: 100vh;
          padding-bottom: 80px;
          padding-top: 40px;
        }

        .app-store-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .app-store-card {
          background: ${dark.surface};
          border: 1px solid ${dark.border};
          padding: 32px 40px;
          margin-bottom: 12px;
          border-radius: 16px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${dark.textDim};
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
          margin-bottom: 16px;
          align-items: center;
        }

        .app-icon {
          width: 200px;
          height: 200px;
          border-radius: 45px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255, 0.04);
          max-width: 800px;
        }

        .screenshots-scroll {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          padding: 0 40px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .screenshot-card {
          flex: 0 0 auto;
          width: 280px;
          scroll-snap-align: start;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .developer-apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .developer-app-link:hover {
          border-color: rgba(255,255,255,0.12) !important;
        }

        .app-store-badge:hover {
          border-color: rgba(255,255,255,0.2) !important;
        }

        .back-to-portfolio:hover {
          color: #a5b4fc !important;
        }

        @media (max-width: 900px) {
          .app-store-page {
            padding-top: 20px;
            padding-bottom: 40px;
          }

          .app-store-container {
            padding: 0;
          }

          .app-store-card {
            border-radius: 0;
            padding: 20px 16px;
            border-left: none;
            border-right: none;
          }

          .hero-layout {
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }

          .hero-layout h1 {
            font-size: 24px !important;
          }

          .hero-layout p {
            margin-bottom: 12px !important;
          }

          .app-icon {
            width: 80px;
            height: 80px;
            border-radius: 18px;
          }

          .stats-row {
            gap: 12px;
          }

          .stats-row > div > div:nth-child(2) {
            font-size: 20px !important;
          }

          .screenshots-scroll {
            gap: 12px;
            padding: 0 16px;
          }

          .screenshot-card {
            width: 240px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .developer-apps-grid {
            grid-template-columns: 1fr;
          }

          .section-label {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
