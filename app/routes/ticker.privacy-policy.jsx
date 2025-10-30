import { Link } from "@remix-run/react";

export default function TickerPrivacyPolicy() {
  // Generate emoji pattern for background
  const emojis = ['⏰', '⏱️', '⏲️', '🔔', '⚠️', '⏳', '🕐', '📱', '🔊', '⚡'];
  const patternRows = 20;
  const patternCols = 20;

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      backgroundColor: "#f5f5f7",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px"
    }}>
      {/* Emoji Pattern Background */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: `repeat(${patternCols}, 1fr)`,
        gridTemplateRows: `repeat(${patternRows}, 1fr)`,
        opacity: 0.4,
        pointerEvents: "none"
      }}>
        {Array.from({ length: patternRows * patternCols }).map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px"
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </div>
        ))}
      </div>

      {/* Content Card */}
      <div style={{
        position: "relative",
        zIndex: 1,
        background: "#ffffff",
        borderRadius: "20px",
        padding: "60px 80px",
        maxWidth: "600px",
        width: "100%",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
        textAlign: "center"
      }}>
        <h1 style={{
          margin: "0 0 24px 0",
          fontSize: "32px",
          fontWeight: "700",
          color: "#1d1d1f",
          letterSpacing: "-0.01em"
        }}>
          Ticker Privacy Policy
        </h1>

        <p style={{
          margin: "0 0 48px 0",
          fontSize: "18px",
          color: "#6e6e73",
          lineHeight: "1.6",
          fontWeight: "400"
        }}>
          Ticker does not collect or transmit any personal data.
        </p>

        <div style={{
          margin: "0 0 32px 0",
          paddingTop: "32px",
          borderTop: "1px solid #e5e5e7"
        }}>
          <h2 style={{
            margin: "0 0 12px 0",
            fontSize: "20px",
            fontWeight: "600",
            color: "#1d1d1f"
          }}>
            Contact
          </h2>
          <p style={{
            margin: "0",
            fontSize: "16px",
            color: "#6e6e73",
            lineHeight: "1.6"
          }}>
            If you have any questions, please feel free to{" "}
            <a
              href="mailto:mayankgandhi50@gmail.com"
              style={{
                color: "#FF9500",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.2s ease"
              }}
              className="contact-link"
            >
              contact me
            </a>
            .
          </p>
        </div>

        <Link
          to="/ticker"
          style={{
            display: "inline-block",
            color: "#FF9500",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "500",
            transition: "color 0.2s ease"
          }}
          className="back-link"
        >
          Back to the homepage
        </Link>
      </div>

      {/* CSS */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: 60px 80px"] {
            padding: 40px 30px !important;
          }

          h1 {
            font-size: 28px !important;
          }

          p {
            font-size: 16px !important;
          }
        }

        .contact-link:hover {
          color: #FF3B30;
        }

        .back-link:hover {
          color: #FF3B30;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
