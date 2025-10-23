import { Link } from "@remix-run/react";
import { memo, useState, useEffect } from "react";

// Static data
const FEATURES = [
  {
    title: "Organize Medical Documents",
    description: "Store and manage all your medical documents, test results, and prescriptions in one secure place.",
    icon: "📄"
  },
  {
    title: "Smart Prescription Parsing",
    description: "Automatically extract medication information from prescription images. Just snap a photo and let Walnut do the rest.",
    icon: "📸"
  },
  {
    title: "Never Miss a Dose",
    description: "Set up medication reminders and follow-up appointments. Get timely notifications to stay on track with your health.",
    icon: "⏰"
  },
  {
    title: "Track Your Health Metrics",
    description: "Monitor vital health metrics like blood pressure, blood sugar, weight, and more. Visualize your health trends over time.",
    icon: "📊"
  }
];

// Memoized floating shapes
const FloatingShapes = memo(() => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <div style={{
      position: "absolute",
      top: "10%",
      left: "5%",
      width: "300px",
      height: "300px",
      background: "radial-gradient(circle, rgba(52, 199, 89, 0.15) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(60px)"
    }} />
    <div style={{
      position: "absolute",
      top: "50%",
      right: "10%",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(52, 199, 89, 0.12) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(70px)"
    }} />
    <div style={{
      position: "absolute",
      bottom: "10%",
      left: "30%",
      width: "350px",
      height: "350px",
      background: "radial-gradient(circle, rgba(48, 209, 88, 0.1) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(65px)"
    }} />
  </div>
));

FloatingShapes.displayName = "FloatingShapes";

export default function WalnutIndex() {
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
        backgroundImage: "linear-gradient(rgba(52, 199, 89, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 199, 89, 0.03) 1px, transparent 1px)",
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
          background: "radial-gradient(ellipse at top, rgba(52, 199, 89, 0.15) 0%, transparent 50%)"
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
              background: "linear-gradient(135deg, #34C759 0%, #30D158 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 60px rgba(52, 199, 89, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none"
            }}>
              <span style={{
                fontSize: "clamp(56px, 10vw, 80px)",
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))"
              }}>🏥</span>
            </div>

            {/* App Name */}
            <h1 style={{
              margin: "0 0 24px 0",
              fontSize: "clamp(40px, 7vw, 64px)",
              fontWeight: "900",
              background: "linear-gradient(135deg, #1a1a2e 0%, #34C759 50%, #30D158 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.3s both" : "none"
            }}>
              Walnut
            </h1>

            {/* Tagline */}
            <p style={{
              fontSize: "clamp(20px, 4vw, 32px)",
              fontWeight: "400",
              color: "rgba(0, 0, 0, 0.7)",
              margin: "0 0 48px 0",
              letterSpacing: "0.01em",
              animation: isVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none"
            }}>
              Your Personal Health Journal
            </p>

            {/* App Store Button */}
            <a
              href="#"
              className="cta-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "18px 40px",
                background: "linear-gradient(135deg, #34C759 0%, #30D158 100%)",
                color: "#1a1a1a",
                textDecoration: "none",
                borderRadius: "12px",
                fontSize: "18px",
                fontWeight: "600",
                boxShadow: "0 4px 24px rgba(52, 199, 89, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
                transition: "all 0.3s ease",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                animation: isVisible ? "fadeInUp 0.8s ease-out 0.5s both" : "none"
              }}
            >
              <span>Download on the App Store</span>
              <span style={{ fontSize: "20px" }}>→</span>
            </a>
          </div>
        </header>

        {/* Features Section */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ marginBottom: "80px", textAlign: "center" }}>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #1a1a2e 0%, #34C759 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
              letterSpacing: "-0.02em"
            }}>
              Comprehensive Health Management
            </h2>
            <div style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #34C759 0%, #30D158 100%)",
              margin: "0 auto",
              borderRadius: "2px"
            }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="glass-card feature-card"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  padding: "60px",
                  borderRadius: "24px",
                  border: "1px solid rgba(52, 199, 89, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
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
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #34C759 0%, #30D158 100%)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                    marginBottom: "32px",
                    boxShadow: "0 8px 24px rgba(52, 199, 89, 0.4)"
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    margin: "0 0 16px 0",
                    fontSize: "clamp(24px, 4vw, 32px)",
                    fontWeight: "700",
                    color: "rgba(0, 0, 0, 0.95)"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    color: "rgba(0, 0, 0, 0.6)",
                    lineHeight: "1.8",
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
                <div style={{
                  order: index % 2 === 0 ? 2 : 1,
                  background: "rgba(52, 199, 89, 0.05)",
                  borderRadius: "20px",
                  height: "clamp(300px, 40vw, 500px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(52, 199, 89, 0.15)"
                }}>
                  <span style={{
                    fontSize: "clamp(80px, 12vw, 120px)",
                    opacity: 0.3
                  }}>{feature.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Privacy Section */}
        <section style={{
          padding: "100px 24px",
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(52, 199, 89, 0.1)"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <div style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #34C759 0%, #30D158 100%)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              margin: "0 auto 32px",
              boxShadow: "0 8px 24px rgba(52, 199, 89, 0.4)"
            }}>
              🔒
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 44px)",
              fontWeight: "700",
              color: "rgba(0, 0, 0, 0.95)",
              marginBottom: "24px",
              letterSpacing: "-0.02em"
            }}>
              Your Health, Your Privacy
            </h2>
            <p style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "rgba(0, 0, 0, 0.6)",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: "0 auto 48px"
            }}>
              All your health data is stored securely on your device. We never collect, access, or share your medical information.
              Your wellness journey is completely private.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/walnut/privacy-policy"
                className="outline-button"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "transparent",
                  color: "#34C759",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "2px solid #34C759",
                  transition: "all 0.3s ease"
                }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/walnut/terms"
                className="outline-button"
                style={{
                  padding: "14px 28px",
                  backgroundColor: "transparent",
                  color: "#34C759",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "2px solid #34C759",
                  transition: "all 0.3s ease"
                }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(52, 199, 89, 0.1)",
          padding: "60px 24px",
          textAlign: "center"
        }}>
          <p style={{
            margin: "0 0 16px 0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            © 2025 Walnut. All rights reserved.
          </p>
          <p style={{
            margin: "0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            Made with care by{" "}
            <Link to="/" style={{
              color: "#34C759",
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

        @media (max-width: 768px) {
          .feature-card {
            grid-template-columns: 1fr !important;
          }

          .feature-card > div {
            order: 1 !important;
          }
        }

        .glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(52, 199, 89, 0.4);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(52, 199, 89, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .outline-button:hover {
          background-color: #34C759;
          color: white;
          transform: translateY(-2px);
        }

        .back-link:hover {
          background: rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.9);
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
