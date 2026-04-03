'use client';

import Link from "next/link";
import { tokens } from '@/styles/tokens';

const dark = tokens.colors.dark;

export default function TickerPrivacyPolicy() {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', sans-serif",
      backgroundColor: dark.bg,
      minHeight: "100vh",
      paddingBottom: "80px",
      paddingTop: "40px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 40px"
      }}>
        {/* App Header */}
        <div style={{
          background: dark.surface,
          border: `1px solid ${dark.border}`,
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
              }}
            />
            <div>
              <h1 style={{
                margin: "0 0 4px 0",
                fontSize: "32px",
                fontWeight: "700",
                color: dark.textPrimary,
                letterSpacing: "-0.03em"
              }}>
                Ticker
              </h1>
              <p style={{
                margin: "0",
                fontSize: "15px",
                color: dark.textSubtle,
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
            color: dark.textPrimary,
            letterSpacing: "-0.01em",
            paddingTop: "24px",
            borderTop: `1px solid rgba(255,255,255, 0.06)`
          }}>
            Privacy Policy
          </h2>
        </div>

        {/* Content */}
        <div style={{
          background: dark.surface,
          border: `1px solid ${dark.border}`,
          padding: "32px 40px",
          borderRadius: "16px",
          marginBottom: "12px"
        }}>
          <p style={{
            margin: "0 0 24px 0",
            fontSize: "15px",
            color: dark.textMuted,
            lineHeight: "1.6"
          }}>
            Ticker does not collect or transmit any personal data.
          </p>

          <div style={{
            marginTop: "32px",
            paddingTop: "32px",
            borderTop: `1px solid rgba(255,255,255, 0.06)`
          }}>
            <h3 style={{
              margin: "0 0 12px 0",
              fontSize: "20px",
              fontWeight: "600",
              color: dark.textPrimary
            }}>
              Contact
            </h3>
            <p style={{
              margin: "0",
              fontSize: "15px",
              color: dark.textMuted,
              lineHeight: "1.6"
            }}>
              If you have any questions, please feel free to{" "}
              <a
                href="mailto:mayankgandhi50@gmail.com"
                style={{
                  color: dark.accent,
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
