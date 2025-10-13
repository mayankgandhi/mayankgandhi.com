import { Link } from "@remix-run/react";

export default function TickerIndex() {
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
          backgroundColor: "#FF9500",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 40px rgba(255, 149, 0, 0.3)"
        }}>
          <span style={{
            fontSize: "clamp(48px, 10vw, 64px)",
            fontWeight: "600",
            color: "white"
          }}>⏰</span>
        </div>

        {/* App Name */}
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 56px)",
          fontWeight: "700",
          color: "#1d1d1f",
          margin: "0 0 16px 0",
          letterSpacing: "-0.02em"
        }}>Ticker</h1>

        {/* Tagline */}
        <p style={{
          fontSize: "clamp(20px, 3vw, 28px)",
          fontWeight: "400",
          color: "#6e6e73",
          margin: "0 0 40px 0",
          letterSpacing: "-0.01em"
        }}>Never Miss What Matters</p>

        {/* App Store Button */}
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            backgroundColor: "#FF9500",
            color: "white",
            textDecoration: "none",
            borderRadius: "100px",
            fontSize: "17px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(255, 149, 0, 0.3)"
          }}
        >
          Download on the App Store
        </a>
      </div>

      {/* Feature Section 1 - Tasks & Reminders */}
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
          }}>All Your Tasks in One Place</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Organize your daily tasks, important events, and reminders with an intuitive interface that keeps you focused.
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
            }}>✓</span>
          </div>
        </div>
      </div>

      {/* Feature Section 2 - Customizable Alarms */}
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
          }}>Customizable Alarms</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Set up alarms with custom sounds, snooze options, and repeat patterns. Wake up your way.
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
            }}>🔔</span>
          </div>
        </div>
      </div>

      {/* Feature Section 3 - Recurring Reminders */}
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
          }}>Smart Recurring Reminders</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Set up daily, weekly, or monthly reminders for medications, birthdays, bills, and more. Stay consistent effortlessly.
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
            }}>🔄</span>
          </div>
        </div>
      </div>

      {/* Feature Section 4 - Important Dates */}
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
          }}>Remember Important Dates</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Track birthdays, anniversaries, and special occasions. Get advance notifications so you're always prepared.
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
            }}>🎂</span>
          </div>
        </div>
      </div>

      {/* Feature Section 5 - Intuitive Interface */}
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
          }}>Beautiful & Intuitive</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)",
            color: "#6e6e73",
            margin: "0 0 60px 0",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5"
          }}>
            Clean design that's easy to use. Manage all your important events from a single, elegant interface.
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
            }}>✨</span>
          </div>
        </div>
      </div>

      {/* Privacy Section */}
      <div style={{
        backgroundColor: "#ffffff",
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
          }}>Your Time, Your Privacy</h2>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 19px)",
            color: "#6e6e73",
            lineHeight: "1.6",
            marginBottom: "40px"
          }}>
            All your reminders and tasks stay private on your device. No tracking, no data collection, no sharing.
            Your schedule is yours alone.
          </p>
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
          © 2025 Ticker. All rights reserved.
        </p>
        <p style={{
          color: "#86868b",
          fontSize: "clamp(13px, 2vw, 15px)",
          margin: "16px 0 0 0"
        }}>
          Made with care by <a href="/" style={{ color: "#FF9500", textDecoration: "none" }}>Mayank Gandhi</a>
        </p>
      </div>
    </div>
  );
}
