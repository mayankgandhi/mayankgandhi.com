import { Link } from "@remix-run/react";
import { memo, useState, useEffect } from "react";

// Static data
const FEATURES = [
  {
    title: "AI That Gets You Moving",
    description: "Just tell it what you need: \"Wake me at 6am for gym\" or \"Bug me every hour to drink water.\" Our AI understands your lazy language and creates alarms that stick.",
    icon: "🤖"
  },
  {
    title: "Live Countdowns You Can't Escape",
    description: "Watch your deadline approach in real-time. Right there on your lock screen. Dynamic Island. Everywhere you look. No more \"I didn't realize it was time.\"",
    icon: "⏱️"
  },
  {
    title: "Pre-Alerts That Build Pressure",
    description: "Get warned 30 minutes before. Then 15. Then 5. By the time your alarm hits, you're already mentally committed. Genius? We think so.",
    icon: "⚠️"
  },
  {
    title: "Widgets That Judge You",
    description: "Your home screen becomes mission control. See every upcoming alarm. No excuses. No hiding.",
    icon: "📱"
  },
  {
    title: "Mission-Critical Design",
    description: "Bold. Urgent. Impossible to ignore. Orange alerts that scream importance. This isn't minimalist BS – it's designed to grab you by the collar.",
    icon: "🎯"
  }
];

const PERFECT_FOR = [
  "Gym commitments you keep breaking",
  "Medication you \"forget\" to take",
  "Water intake you ignore until you're dehydrated",
  "Work breaks you never actually take",
  "Morning routines you abandon by Tuesday",
  "Side projects gathering dust",
  "That book you swear you'll read \"tomorrow\""
];

const FEATURES_LIST = [
  "Natural language alarm creation (\"Annoy me about stretching every 2 hours\")",
  "Complex schedules (biweekly, custom patterns, whatever your chaos needs)",
  "Countdown timers that haunt your lock screen",
  "Post-alert behaviors (snooze, repeat, or launch specific apps)",
  "Search through your alarms (because you'll have dozens)",
  "Hourly harassment mode for building habits"
];

// Memoized floating shapes
const FloatingShapes = memo(() => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <div style={{
      position: "absolute",
      top: "10%",
      left: "5%",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(255, 59, 48, 0.2) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(80px)"
    }} />
    <div style={{
      position: "absolute",
      top: "50%",
      right: "10%",
      width: "450px",
      height: "450px",
      background: "radial-gradient(circle, rgba(255, 149, 0, 0.18) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(90px)"
    }} />
    <div style={{
      position: "absolute",
      bottom: "10%",
      left: "30%",
      width: "380px",
      height: "380px",
      background: "radial-gradient(circle, rgba(255, 69, 58, 0.15) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(75px)"
    }} />
    <div style={{
      position: "absolute",
      top: "30%",
      right: "30%",
      width: "320px",
      height: "320px",
      background: "radial-gradient(circle, rgba(255, 159, 10, 0.12) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(70px)"
    }} />
  </div>
));

FloatingShapes.displayName = "FloatingShapes";

export default function TickerIndex() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh", backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }}>
      {/* Animated background grid */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "linear-gradient(rgba(255, 149, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 149, 0, 0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Back to Home Link */}
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(0, 0, 0, 0.6)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "8px",
              background: "rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.1)"
            }}
            className="back-link"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <header style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
          background: "radial-gradient(ellipse at top, rgba(255, 149, 0, 0.15) 0%, transparent 50%)"
        }}>
          <div style={{
            maxWidth: "900px",
            textAlign: "center",
            animation: isVisible ? "fadeInUp 0.8s ease-out both" : "none"
          }}>
            {/* App Icon */}
            <div style={{
              width: "clamp(120px, 20vw, 160px)",
              height: "clamp(120px, 20vw, 160px)",
              margin: "0 auto 40px",
              borderRadius: "clamp(28px, 5vw, 38px)",
              background: "linear-gradient(135deg, #FF9500 0%, #FF9F0A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 60px rgba(255, 149, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none"
            }}>
              <span style={{
                fontSize: "clamp(56px, 10vw, 80px)",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))"
              }}>⏰</span>
            </div>

            {/* App Name */}
            <h1 style={{
              margin: "0 0 16px 0",
              fontSize: "clamp(40px, 7vw, 64px)",
              fontWeight: "900",
              background: "linear-gradient(135deg, #1a1a2e 0%, #FF9500 50%, #FF9F0A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.3s both" : "none"
            }}>
              Super Alarm - Ticker
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: "clamp(16px, 3vw, 24px)",
              fontWeight: "800",
              color: "#FF9500",
              margin: "0 0 32px 0",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.35s both" : "none"
            }}>
              Alarms That Actually Work™
            </p>

            {/* Main Headline */}
            <h2 style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "900",
              color: "rgba(0, 0, 0, 0.95)",
              margin: "0 0 24px 0",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none"
            }}>
              Stop Lying to Yourself About "Just 5 More Minutes"
            </h2>

            {/* Description */}
            <p style={{
              fontSize: "clamp(18px, 3vw, 24px)",
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.75)",
              margin: "0 0 48px 0",
              lineHeight: "1.6",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.45s both" : "none"
            }}>
              You've tried everything. Calendar notifications you ignore. Reminder apps that whisper politely while you scroll past. Habit trackers that guilt-trip you with broken streaks.
              <br /><br />
              <strong style={{ color: "rgba(0, 0, 0, 0.95)" }}>Super Alarm - Ticker doesn't ask. It DEMANDS.</strong>
            </p>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/app/super-alarm-ticker/id6739595018"
              className="cta-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "24px 48px",
                background: "linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "16px",
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "900",
                boxShadow: "0 8px 32px rgba(255, 59, 48, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                border: "2px solid rgba(0, 0, 0, 0.2)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                animation: isVisible ? "fadeInUp 0.8s ease-out 0.5s both, pulse 2s ease-in-out infinite" : "none"
              }}
            >
              <span>Download Now. No Excuses.</span>
              <span style={{ fontSize: "24px" }}>→</span>
            </a>
          </div>
        </header>

        {/* Features Section */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ marginBottom: "80px", textAlign: "center" }}>
            <div style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)",
              borderRadius: "12px",
              marginBottom: "24px",
              boxShadow: "0 4px 16px rgba(255, 59, 48, 0.4)"
            }}>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: "900",
                color: "#ffffff",
                margin: 0,
                letterSpacing: "0.02em",
                textTransform: "uppercase"
              }}>
                🔥 WHY TICKER DESTROYS OTHER ALARM APPS
              </h2>
            </div>
            <div style={{
              width: "120px",
              height: "6px",
              background: "linear-gradient(90deg, #FF3B30 0%, #FF9500 100%)",
              margin: "0 auto",
              borderRadius: "3px"
            }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="glass-card feature-card"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 249, 245, 0.95) 100%)",
                  padding: "60px",
                  borderRadius: "24px",
                  border: "3px solid rgba(255, 59, 48, 0.3)",
                  boxShadow: "0 12px 48px rgba(255, 59, 48, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "grid",
                  gridTemplateColumns: index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                  gap: "60px",
                  alignItems: "center"
                }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <div style={{
                    width: "90px",
                    height: "90px",
                    background: "linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)",
                    borderRadius: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    marginBottom: "32px",
                    boxShadow: "0 12px 32px rgba(255, 59, 48, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3)",
                    border: "2px solid rgba(0, 0, 0, 0.1)"
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    margin: "0 0 20px 0",
                    fontSize: "clamp(26px, 4vw, 36px)",
                    fontWeight: "900",
                    color: "rgba(0, 0, 0, 0.95)",
                    letterSpacing: "-0.02em"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: "clamp(17px, 2.5vw, 21px)",
                    color: "rgba(0, 0, 0, 0.75)",
                    lineHeight: "1.7",
                    margin: 0,
                    fontWeight: "500"
                  }}>
                    {feature.description}
                  </p>
                </div>
                <div style={{
                  order: index % 2 === 0 ? 2 : 1,
                  background: "linear-gradient(135deg, rgba(255, 59, 48, 0.08) 0%, rgba(255, 149, 0, 0.08) 100%)",
                  borderRadius: "20px",
                  height: "clamp(300px, 40vw, 500px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255, 59, 48, 0.2)",
                  boxShadow: "inset 0 2px 12px rgba(255, 59, 48, 0.1)"
                }}>
                  <span style={{
                    fontSize: "clamp(80px, 12vw, 140px)",
                    opacity: 0.25,
                    filter: "drop-shadow(0 4px 12px rgba(255, 59, 48, 0.2))"
                  }}>{feature.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Perfect For Section */}
        <section style={{
          padding: "100px 24px",
          background: "linear-gradient(135deg, rgba(255, 59, 48, 0.05) 0%, rgba(255, 149, 0, 0.05) 100%)",
          borderTop: "3px solid rgba(255, 59, 48, 0.2)"
        }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "900",
                color: "rgba(0, 0, 0, 0.95)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
                textTransform: "uppercase"
              }}>
                🎯 PERFECT FOR:
              </h2>
              <div style={{
                width: "100px",
                height: "6px",
                background: "linear-gradient(90deg, #FF3B30 0%, #FF9500 100%)",
                margin: "0 auto",
                borderRadius: "3px"
              }} />
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px"
            }}>
              {PERFECT_FOR.map((item, index) => (
                <div key={index} style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 249, 245, 0.95) 100%)",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "2px solid rgba(255, 59, 48, 0.3)",
                  boxShadow: "0 8px 24px rgba(255, 59, 48, 0.15)",
                  transition: "all 0.3s ease"
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px"
                  }}>
                    <span style={{
                      fontSize: "28px",
                      lineHeight: "1"
                    }}>⚡</span>
                    <p style={{
                      fontSize: "clamp(17px, 2.5vw, 20px)",
                      color: "rgba(0, 0, 0, 0.85)",
                      lineHeight: "1.6",
                      margin: 0,
                      fontWeight: "600"
                    }}>
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features That Work Section */}
        <section style={{
          padding: "100px 24px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          borderTop: "3px solid rgba(255, 59, 48, 0.2)"
        }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "900",
                color: "rgba(0, 0, 0, 0.95)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
                textTransform: "uppercase"
              }}>
                💪 FEATURES THAT WORK:
              </h2>
              <div style={{
                width: "100px",
                height: "6px",
                background: "linear-gradient(90deg, #FF3B30 0%, #FF9500 100%)",
                margin: "0 auto",
                borderRadius: "3px"
              }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {FEATURES_LIST.map((item, index) => (
                <div key={index} style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 249, 245, 0.95) 100%)",
                  padding: "28px 36px",
                  borderRadius: "16px",
                  border: "2px solid rgba(255, 59, 48, 0.25)",
                  boxShadow: "0 6px 20px rgba(255, 59, 48, 0.12)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px"
                }}>
                  <span style={{
                    fontSize: "32px",
                    minWidth: "40px"
                  }}>✓</span>
                  <p style={{
                    fontSize: "clamp(17px, 2.5vw, 20px)",
                    color: "rgba(0, 0, 0, 0.85)",
                    lineHeight: "1.6",
                    margin: 0,
                    fontWeight: "600"
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{
          padding: "120px 24px",
          background: "linear-gradient(135deg, #FF3B30 0%, #FF9500 100%)",
          borderTop: "4px solid rgba(0, 0, 0, 0.2)",
          textAlign: "center"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: "900",
              color: "#ffffff",
              marginBottom: "32px",
              letterSpacing: "-0.02em",
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}>
              Stop Settling for Weak Notifications That Respect Your Boundaries.
            </h2>
            <p style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: "700",
              color: "rgba(255, 255, 255, 0.95)",
              marginBottom: "48px",
              lineHeight: "1.4",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
            }}>
              Get Ticker. Get things done. Finally.
            </p>
            <a
              href="https://apps.apple.com/app/super-alarm-ticker/id6739595018"
              className="final-cta-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                padding: "28px 56px",
                background: "#ffffff",
                color: "#FF3B30",
                textDecoration: "none",
                borderRadius: "20px",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: "900",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.5)",
                transition: "all 0.3s ease",
                border: "3px solid rgba(0, 0, 0, 0.1)",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              <span>Download Now</span>
              <span style={{ fontSize: "32px" }}>→</span>
            </a>
            <p style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: "32px",
              lineHeight: "1.6"
            }}>
              Your future self will thank you. Your current self might hate us. That's the point.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255, 149, 0, 0.1)",
          padding: "60px 24px",
          textAlign: "center"
        }}>
          <div style={{ marginBottom: "24px" }}>
            <Link
              to="/ticker/privacy-policy"
              style={{
                color: "#FF9500",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                transition: "color 0.3s ease",
                margin: "0 16px"
              }}
              className="footer-link"
            >
              Privacy Policy
            </Link>
            <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>•</span>
            <Link
              to="/ticker/terms"
              style={{
                color: "#FF9500",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                transition: "color 0.3s ease",
                margin: "0 16px"
              }}
              className="footer-link"
            >
              Terms & Conditions
            </Link>
          </div>
          <p style={{
            margin: "0 0 16px 0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            © 2025 Ticker. All rights reserved.
          </p>
          <p style={{
            margin: "0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            Made with care by{" "}
            <Link to="/" style={{
              color: "#FF9500",
              textDecoration: "none",
              fontWeight: "500",
              transition: "color 0.3s ease"
            }}>
              Mayank Gandhi
            </Link>
          </p>
        </footer>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 32px rgba(255, 59, 48, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.3);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 12px 48px rgba(255, 59, 48, 0.7), inset 0 2px 0 rgba(255, 255, 255, 0.4);
          }
        }

        @media (max-width: 768px) {
          .feature-card {
            grid-template-columns: 1fr !important;
          }

          .feature-card > div {
            order: 1 !important;
          }
        }

        .glass-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(255, 59, 48, 0.6);
          box-shadow: 0 20px 60px rgba(255, 59, 48, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.9);
        }

        .cta-button {
          animation: fadeInUp 0.8s ease-out 0.5s both, pulse 2s ease-in-out infinite !important;
        }

        .cta-button:hover {
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 16px 48px rgba(255, 59, 48, 0.8), inset 0 2px 0 rgba(255, 255, 255, 0.5);
          animation: none !important;
        }

        .final-cta-button:hover {
          transform: translateY(-8px) scale(1.08);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), inset 0 2px 0 rgba(255, 255, 255, 0.7);
        }

        .back-link:hover {
          background: rgba(0, 0, 0, 0.15);
          color: rgba(0, 0, 0, 0.9);
          transform: translateX(-4px);
        }

        .footer-link:hover {
          color: #FF3B30;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
