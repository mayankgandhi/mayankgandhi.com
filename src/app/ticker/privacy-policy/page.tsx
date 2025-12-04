'use client';

import Link from "next/link";

export default function TickerPrivacyPolicy() {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif",
      backgroundColor: "#f2f2f7",
      minHeight: "100vh",
      paddingBottom: "80px",
      paddingTop: "40px"
    }}>
      {/* Main Content Container */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px"
      }}>
        {/* Hero Section with App Header */}
        <div style={{
          background: "white",
          padding: "32px 40px 40px",
          marginBottom: "12px",
          borderRadius: "16px"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px"
          }}>
            <img
              src="https://cdn.mayankgandhi.com/ticker-app-icon.png"
              alt="Ticker App Icon"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "22px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}
            />
            <div>
              <h1 style={{
                margin: "0 0 4px 0",
                fontSize: "32px",
                fontWeight: "700",
                color: "#1d1d1f",
                letterSpacing: "-0.01em"
              }}>
                Ticker
              </h1>
              <p style={{
                margin: "0",
                fontSize: "15px",
                color: "#6e6e73",
                fontWeight: "500"
              }}>
                Task & Reminder Manager
              </p>
            </div>
          </div>

          <h2 style={{
            margin: "24px 0 0 0",
            fontSize: "28px",
            fontWeight: "700",
            color: "#1d1d1f",
            letterSpacing: "-0.01em",
            paddingTop: "24px",
            borderTop: "0.5px solid #e5e5ea"
          }}>
            Privacy Policy
          </h2>
        </div>

        {/* Content Section */}
        <div style={{
          background: "white",
          padding: "32px 40px",
          borderRadius: "16px",
          marginBottom: "12px"
        }}>

          <p style={{
            margin: "0 0 24px 0",
            fontSize: "17px",
            color: "#1d1d1f",
            lineHeight: "1.6"
          }}>
            Ticker does not collect or transmit any personal data.
          </p>

          <div style={{
            marginTop: "32px",
            paddingTop: "32px",
            borderTop: "0.5px solid #e5e5ea"
          }}>
            <h3 style={{
              margin: "0 0 12px 0",
              fontSize: "20px",
              fontWeight: "600",
              color: "#1d1d1f"
            }}>
              Contact
            </h3>
            <p style={{
              margin: "0",
              fontSize: "17px",
              color: "#1d1d1f",
              lineHeight: "1.6"
            }}>
              If you have any questions, please feel free to{" "}
              <a
                href="mailto:mayankgandhi50@gmail.com"
                style={{
                  color: "#007AFF",
                  textDecoration: "none"
                }}
              >
                contact me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
