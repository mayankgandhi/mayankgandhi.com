'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif",
      backgroundColor: "#f2f2f7",
      minHeight: "100vh",
      paddingBottom: isMobile ? "40px" : "80px",
      paddingTop: isMobile ? "20px" : "40px"
    }}>
      {/* Main Content Container - Desktop centered */}
      <div style={{
        maxWidth: isMobile ? "100%" : "1200px",
        margin: "0 auto",
        padding: isMobile ? "0" : "0 40px"
      }}>
        {/* Hero Section */}
        <div style={{
          background: "white",
          padding: isMobile ? "20px 16px 24px" : "32px 40px 40px",
          marginBottom: "12px",
          borderRadius: isMobile ? "0" : "16px"
        }}>
          <div style={{
            display: isMobile ? "flex" : "grid",
            gridTemplateColumns: isMobile ? "auto" : "200px 1fr",
            gap: isMobile ? "16px" : "40px",
            marginBottom: "16px",
            alignItems: isMobile ? "flex-start" : "center"
          }}>
            {/* App Icon */}
            <img
              src={appIcon}
              alt={appName}
              style={{
                width: isMobile ? "120px" : "200px",
                height: isMobile ? "120px" : "200px",
                borderRadius: isMobile ? "27px" : "45px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
              }}
            />

            {/* App Title and Button */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <h1 style={{
                fontSize: isMobile ? "22px" : "36px",
                fontWeight: "700",
                margin: "0 0 8px 0",
                color: "#000",
                lineHeight: "1.2"
              }}>
                {appName}
              </h1>
              <p style={{
                fontSize: isMobile ? "13px" : "17px",
                color: "#8e8e93",
                margin: isMobile ? "0 0 12px 0" : "0 0 24px 0"
              }}>
                {tagline}
              </p>
              {appStoreLink && (
                <a
                  href={appStoreLink}
                  style={{
                    background: "#007AFF",
                    color: "white",
                    padding: isMobile ? "8px 20px" : "12px 32px",
                    borderRadius: isMobile ? "16px" : "12px",
                    textDecoration: "none",
                    fontSize: isMobile ? "15px" : "17px",
                    fontWeight: "600",
                    display: "inline-block",
                    width: "fit-content",
                    marginTop: isMobile ? "auto" : "0"
                  }}
                >
                  {isMobile ? "Open" : "Download on the App Store"}
                </a>
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(4, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? "12px" : "32px",
            paddingTop: isMobile ? "16px" : "24px",
            borderTop: "0.5px solid #e5e5ea",
            maxWidth: isMobile ? "100%" : "800px"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "#8e8e93", marginBottom: "4px", textTransform: "uppercase" }}>
                {ratingsCount} RATING{ratingsCount !== 1 ? 'S' : ''}
              </div>
              <div style={{ fontSize: isMobile ? "20px" : "24px", fontWeight: "600", color: "#8e8e93", marginBottom: "2px" }}>
                {rating.toFixed(1)}
              </div>
              <div style={{ color: "#8e8e93", fontSize: "11px" }}>
                {'★'.repeat(Math.floor(rating))}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "#8e8e93", marginBottom: "4px", textTransform: "uppercase" }}>
                AGES
              </div>
              <div style={{ fontSize: isMobile ? "20px" : "24px", fontWeight: "600", color: "#8e8e93", marginBottom: "2px" }}>
                {appInfo.ageRating}
              </div>
              <div style={{ color: "#8e8e93", fontSize: "11px" }}>
                Years
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "#8e8e93", marginBottom: "4px", textTransform: "uppercase" }}>
                CATEGORY
              </div>
              <div style={{ fontSize: isMobile ? "28px" : "32px", marginBottom: "2px" }}>
                💳
              </div>
              <div style={{ color: "#8e8e93", fontSize: "11px" }}>
                {appInfo.category}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "#8e8e93", marginBottom: "4px", textTransform: "uppercase" }}>
                DEVELOPER
              </div>
              <div style={{ fontSize: isMobile ? "28px" : "32px", marginBottom: "2px" }}>
                👤
              </div>
              <Link
                href="/"
                style={{
                  color: "#007AFF",
                  fontSize: "11px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  display: "block"
                }}
              >
                {appInfo.provider}
              </Link>
            </div>
          </div>
        </div>

        {/* What's New */}
        {whatsNew && (
          <div style={{
            background: "white",
            padding: isMobile ? "20px 16px" : "32px 40px",
            marginBottom: "12px",
            borderRadius: isMobile ? "0" : "16px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h2 style={{ fontSize: isMobile ? "20px" : "28px", fontWeight: "700", margin: 0 }}>
                What's New
              </h2>
              <span style={{ fontSize: "20px", color: "#8e8e93" }}>›</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontSize: isMobile ? "13px" : "15px", color: "#8e8e93" }}>Version {whatsNew.version}</span>
              <span style={{ fontSize: isMobile ? "13px" : "15px", color: "#8e8e93" }}>{whatsNew.date}</span>
            </div>

            <div style={{ fontSize: isMobile ? "15px" : "17px", lineHeight: "1.5", color: "#000" }}>
              {whatsNew.changes.slice(0, showAllChanges ? undefined : 3).map((change, i) => (
                <div key={i} style={{ marginBottom: "8px" }}>{change}</div>
              ))}
              {whatsNew.changes.length > 3 && (
                <button
                  onClick={() => setShowAllChanges(!showAllChanges)}
                  style={{
                    color: "#007AFF",
                    background: "none",
                    border: "none",
                    padding: "8px 0 0 0",
                    fontSize: isMobile ? "15px" : "17px",
                    cursor: "pointer",
                    fontFamily: "inherit"
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
          <div style={{
            background: "white",
            padding: isMobile ? "20px 0" : "32px 0",
            marginBottom: "12px",
            borderRadius: isMobile ? "0" : "16px"
          }}>
            <h2 style={{
              fontSize: isMobile ? "20px" : "28px",
              fontWeight: "700",
              margin: isMobile ? "0 0 16px 16px" : "0 0 24px 40px"
            }}>
              Preview
            </h2>
            <div style={{
              display: "flex",
              gap: isMobile ? "12px" : "24px",
              overflowX: "auto",
              padding: isMobile ? "0 16px" : "0 40px",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch"
            }}>
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  style={{
                    flex: "0 0 auto",
                    width: isMobile ? "280px" : "360px",
                    scrollSnapAlign: "start"
                  }}
                >
                  {screenshot.title && (
                    <div style={{
                      background: screenshot.url.includes('purple') ? '#9b7dde' : '#ff6b6b',
                      borderRadius: "12px",
                      padding: isMobile ? "32px 24px" : "48px 32px",
                      marginBottom: "12px",
                      minHeight: isMobile ? "200px" : "280px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: isMobile ? "22px" : "28px",
                          fontWeight: "700",
                          color: screenshot.url.includes('purple') ? '#000' : '#000',
                          margin: "0 0 8px 0",
                          lineHeight: "1.2"
                        }}>
                          {screenshot.title}
                        </h3>
                        {screenshot.description && (
                          <p style={{
                            fontSize: isMobile ? "16px" : "20px",
                            color: screenshot.url.includes('purple') ? '#000' : '#000',
                            margin: 0,
                            lineHeight: "1.3"
                          }}>
                            {screenshot.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  <div style={{
                    background: "#f8f8f8",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}>
                    <img
                      src={screenshot.url}
                      alt={`Screenshot ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
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
          <div style={{
            background: "white",
            padding: isMobile ? "20px 16px" : "32px 40px",
            marginBottom: "12px",
            borderRadius: isMobile ? "0" : "16px"
          }}>
            <h2 style={{ fontSize: isMobile ? "20px" : "28px", fontWeight: "700", margin: "0 0 16px 0" }}>
              Features
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "20px" : "32px"
            }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: "flex", gap: "12px" }}>
                  {feature.icon && (
                    <div style={{ fontSize: isMobile ? "28px" : "36px", flexShrink: 0 }}>
                      {feature.icon}
                    </div>
                  )}
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "15px" : "18px",
                      fontWeight: "600",
                      margin: "0 0 4px 0",
                      color: "#000"
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? "13px" : "15px",
                      color: "#8e8e93",
                      margin: 0,
                      lineHeight: "1.5"
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
        <div style={{
          background: "white",
          padding: isMobile ? "20px 16px" : "32px 40px",
          marginBottom: "12px",
          borderRadius: isMobile ? "0" : "16px"
        }}>
          <h2 style={{ fontSize: isMobile ? "20px" : "28px", fontWeight: "700", margin: "0 0 16px 0" }}>
            Information
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Provider</span>
              <Link
                href="/"
                style={{
                  fontSize: isMobile ? "15px" : "17px",
                  color: "#007AFF",
                  textAlign: "right",
                  textDecoration: "none"
                }}
              >
                {appInfo.provider}
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Size</span>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#000" }}>{appInfo.size}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Category</span>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#000" }}>{appInfo.category}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Compatibility</span>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#000" }}>{appInfo.compatibility}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Languages</span>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#000" }}>{appInfo.languages}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Age Rating</span>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#000" }}>{appInfo.ageRating}+</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", borderBottom: "0.5px solid #e5e5ea" }}>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#8e8e93" }}>Copyright</span>
              <span style={{ fontSize: isMobile ? "15px" : "17px", color: "#000", textAlign: "right" }}>© {appInfo.copyright}</span>
            </div>

            <Link
              href={privacyPolicyLink}
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "0.5px solid #e5e5ea",
                textDecoration: "none",
                color: "#007AFF",
                fontSize: isMobile ? "15px" : "17px",
                alignItems: "center"
              }}
            >
              <span>Privacy Policy</span>
              <span style={{ fontSize: "28px" }}>✋</span>
            </Link>

            <Link
              href={termsLink}
              style={{
                display: "flex",
                justifyContent: "space-between",
                textDecoration: "none",
                color: "#007AFF",
                fontSize: isMobile ? "15px" : "17px",
                alignItems: "center"
              }}
            >
              <span>Report a Problem</span>
              <span style={{ fontSize: "20px" }}>⚠️</span>
            </Link>
          </div>
        </div>

        {/* More by Developer */}
        {developerApps.length > 0 && (
          <div style={{
            background: "white",
            padding: isMobile ? "20px 16px" : "32px 40px",
            borderRadius: isMobile ? "0" : "16px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontSize: isMobile ? "20px" : "28px", fontWeight: "700", margin: 0 }}>
                More by <Link
                  href="/"
                  style={{
                    color: "#007AFF",
                    textDecoration: "none"
                  }}
                >
                  {appInfo.provider}
                </Link>
              </h2>
              <span style={{ fontSize: "20px", color: "#8e8e93" }}>›</span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "16px"
            }}>
              {developerApps.map((app, index) => (
                <Link
                  key={index}
                  href={app.link}
                  style={{
                    display: "flex",
                    gap: "12px",
                    textDecoration: "none",
                    alignItems: "center",
                    padding: isMobile ? "0" : "12px",
                    borderRadius: "12px",
                    transition: "background 0.2s ease"
                  }}
                  className="developer-app-link"
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    style={{
                      width: isMobile ? "64px" : "80px",
                      height: isMobile ? "64px" : "80px",
                      borderRadius: "14px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: isMobile ? "15px" : "17px",
                      fontWeight: "400",
                      margin: "0 0 2px 0",
                      color: "#000"
                    }}>
                      {app.name}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? "13px" : "15px",
                      color: "#8e8e93",
                      margin: 0
                    }}>
                      {app.tagline}
                    </p>
                  </div>
                  <div style={{ fontSize: "32px", color: "#007AFF" }}>
                    ☁️
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .developer-app-link:hover {
          background: #f8f8f8;
        }
      `}</style>
    </div>
  );
}
