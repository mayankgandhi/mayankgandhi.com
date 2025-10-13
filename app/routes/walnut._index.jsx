import { Link } from "@remix-run/react";

export default function WalnutIndex() {
  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      backgroundColor: "#ffffff"
    }}>
      {/* Hero Section */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(60px, 10vw, 120px) clamp(20px, 5vw, 40px)",
        textAlign: "center"
      }}>
        {/* App Icon */}
        <div style={{
          width: "clamp(100px, 20vw, 140px)",
          height: "clamp(100px, 20vw, 140px)",
          margin: "0 auto 32px",
          borderRadius: "clamp(22px, 4vw, 30px)",
          backgroundColor: "#34C759",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 40px rgba(52, 199, 89, 0.3)"
        }}>
          <span style={{
            fontSize: "clamp(48px, 10vw, 64px)",
            fontWeight: "600",
            color: "white"
          }}>🏥</span>
        </div>

        {/* App Name */}
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 56px)",
          fontWeight: "700",
          color: "#1d1d1f",
          margin: "0 0 16px 0",
          letterSpacing: "-0.02em"
        }}>Walnut</h1>

        {/* Tagline */}
        <p style={{
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: "400",
          color: "#6e6e73",
          margin: "0 0 40px 0",
          letterSpacing: "-0.01em"
        }}>Your Personal Health Journal</p>

        {/* App Store Button */}
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            backgroundColor: "#34C759",
            color: "white",
            textDecoration: "none",
            borderRadius: "100px",
            fontSize: "17px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(52, 199, 89, 0.3)"
          }}
        >
          Download on the App Store
        </a>
      </div>

      {/* Feature Section 1 - Document Management */}
      <div style={{
        backgroundColor: "#f5f5f7",
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "700",
            color: "#1d1d1f",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em"
          }}>Organize Medical Documents</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Store and manage all your medical documents, test results, and prescriptions in one secure place.
          </p>

          {/* Placeholder for Screenshot */}
          <div style={{
            backgroundColor: "#e8e8ed",
            borderRadius: "clamp(20px, 3vw, 32px)",
            height: "clamp(400px, 50vw, 600px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
          }}>
            <span style={{
              fontSize: "clamp(60px, 10vw, 100px)",
              opacity: 0.3
            }}>📄</span>
          </div>
        </div>
      </div>

      {/* Feature Section 2 - Prescription Parsing */}
      <div style={{
        backgroundColor: "#ffffff",
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "700",
            color: "#1d1d1f",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em"
          }}>Smart Prescription Parsing</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Automatically extract medication information from prescription images. Just snap a photo and let Walnut do the rest.
          </p>

          {/* Placeholder for Screenshot */}
          <div style={{
            backgroundColor: "#f5f5f7",
            borderRadius: "clamp(20px, 3vw, 32px)",
            height: "clamp(400px, 50vw, 600px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
          }}>
            <span style={{
              fontSize: "clamp(60px, 10vw, 100px)",
              opacity: 0.3
            }}>📸</span>
          </div>
        </div>
      </div>

      {/* Feature Section 3 - Medication Reminders */}
      <div style={{
        backgroundColor: "#f5f5f7",
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "700",
            color: "#1d1d1f",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em"
          }}>Never Miss a Dose</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Set up medication reminders and follow-up appointments. Get timely notifications to stay on track with your health.
          </p>

          {/* Placeholder for Screenshot */}
          <div style={{
            backgroundColor: "#e8e8ed",
            borderRadius: "clamp(20px, 3vw, 32px)",
            height: "clamp(400px, 50vw, 600px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
          }}>
            <span style={{
              fontSize: "clamp(60px, 10vw, 100px)",
              opacity: 0.3
            }}>⏰</span>
          </div>
        </div>
      </div>

      {/* Feature Section 4 - Health Tracking */}
      <div style={{
        backgroundColor: "#ffffff",
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "700",
            color: "#1d1d1f",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em"
          }}>Track Your Health Metrics</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Monitor vital health metrics like blood pressure, blood sugar, weight, and more. Visualize your health trends over time.
          </p>

          {/* Placeholder for Screenshot */}
          <div style={{
            backgroundColor: "#f5f5f7",
            borderRadius: "clamp(20px, 3vw, 32px)",
            height: "clamp(400px, 50vw, 600px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)"
          }}>
            <span style={{
              fontSize: "clamp(60px, 10vw, 100px)",
              opacity: 0.3
            }}>📊</span>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div style={{
        backgroundColor: "#f5f5f7",
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <div style={{
            fontSize: "clamp(40px, 8vw, 56px)",
            marginBottom: "24px"
          }}>🔒</div>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: "700",
            color: "#1d1d1f",
            margin: "0 0 20px 0",
            letterSpacing: "-0.02em"
          }}>Your Health, Your Privacy</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 19px)",
            color: "#6e6e73",
            lineHeight: "1.6",
            marginBottom: "40px"
          }}>
            All your health data is stored securely on your device. We never collect, access, or share your medical information.
            Your wellness journey is completely private.
          </p>
        </div>
      </div>

      {/* Legal Links Section */}
      <div style={{
        backgroundColor: "#ffffff",
        padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <div style={{
            display: "flex",
            gap: "clamp(16px, 3vw, 24px)",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
            <Link
              to="/walnut/privacy-policy"
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                color: "#34C759",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "clamp(15px, 2vw, 17px)",
                fontWeight: "500",
                border: "2px solid #34C759",
                transition: "all 0.3s ease"
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/walnut/terms"
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                color: "#34C759",
                textDecoration: "none",
                borderRadius: "100px",
                fontSize: "clamp(15px, 2vw, 17px)",
                fontWeight: "500",
                border: "2px solid #34C759",
                transition: "all 0.3s ease"
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: "#1d1d1f",
        padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)",
        textAlign: "center"
      }}>
        <p style={{
          color: "#86868b",
          fontSize: "clamp(13px, 2vw, 15px)",
          margin: "0"
        }}>
          © 2025 Walnut. All rights reserved.
        </p>
        <p style={{
          color: "#86868b",
          fontSize: "clamp(13px, 2vw, 15px)",
          margin: "16px 0 0 0"
        }}>
          Made with care by <a href="/" style={{ color: "#34C759", textDecoration: "none" }}>Mayank Gandhi</a>
        </p>
      </div>
    </div>
  );
}
