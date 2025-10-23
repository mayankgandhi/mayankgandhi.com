import { Link } from "@remix-run/react";
import { memo } from "react";

// Memoized floating shapes
const FloatingShapes = memo(() => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <div style={{
      position: "absolute",
      top: "10%",
      left: "5%",
      width: "300px",
      height: "300px",
      background: "radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(60px)"
    }} />
    <div style={{
      position: "absolute",
      bottom: "10%",
      right: "5%",
      width: "350px",
      height: "350px",
      background: "radial-gradient(circle, rgba(0, 191, 255, 0.12) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(65px)"
    }} />
  </div>
));

FloatingShapes.displayName = "FloatingShapes";

export default function CashewTerms() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh", backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }}>
      {/* Animated background grid */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "linear-gradient(rgba(0, 122, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 122, 255, 0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <header style={{
          background: "radial-gradient(ellipse at top, rgba(0, 122, 255, 0.15) 0%, transparent 50%)",
          padding: "clamp(60px, 10vw, 100px) 24px clamp(40px, 8vw, 60px)",
          borderBottom: "1px solid rgba(0, 122, 255, 0.1)"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link
              to="/cashew"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(0, 0, 0, 0.6)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                marginBottom: "32px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.1)"
              }}
              className="back-link"
            >
              ← Back to Cashew
            </Link>
            <h1 style={{
              margin: "0",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #1a1a2e 0%, #007AFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              lineHeight: "1.2"
            }}>
              Terms & Conditions
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 24px" }}>
          <article
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              padding: "clamp(32px, 6vw, 64px)",
              borderRadius: "24px",
              border: "1px solid rgba(0, 122, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              color: "rgba(0, 0, 0, 0.8)",
              fontSize: "clamp(16px, 2.5vw, 18px)",
              lineHeight: "1.8"
            }}
            className="legal-content"
          >
            <p><strong>Effective Date: 01 June 2025</strong></p>

            <h2>1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using Cashew ("the App"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.</p>

            <h2>2. Description of Service</h2>
            <p>Cashew - Credit Card Tracker is a personal finance management tool that allows you to track and manage your credit card information privately on your iOS device. The App uses Apple's CloudKit and Core Data technologies to ensure your data remains private and synchronized across your personal devices.</p>

            <h2>3. User Data and Privacy</h2>
            <ul>
              <li>All data is stored locally on your device using Core Data and synchronized through your personal iCloud account via CloudKit</li>
              <li>No account creation or authentication is required to use the App</li>
              <li>We do not have access to any of your personal or financial data</li>
              <li>Your data is encrypted and protected by Apple's security infrastructure</li>
            </ul>

            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the App only for lawful purposes</li>
              <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Keep your device and iCloud account secure</li>
              <li>Not use the App for any fraudulent or illegal activities</li>
              <li>Ensure the accuracy of any financial information you enter</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>The App and all associated content, features, and functionality are owned by Mayank Gandhi and are protected by international copyright, trademark, and other intellectual property laws.</p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

            <h2>7. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAYANK GANDHI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>

            <h2>8. Financial Information Disclaimer</h2>
            <p>The App is designed as a personal tracking tool only. It does not provide financial advice, and should not be used as a substitute for professional financial consultation. We are not responsible for any financial decisions made based on information displayed in the App.</p>

            <h2>9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting within the App. Your continued use of the App after any changes indicates your acceptance of the new Terms.</p>

            <h2>10. Termination</h2>
            <p>You may stop using the App at any time. We reserve the right to suspend or terminate your access to the App if we reasonably believe you have violated these Terms.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Secunderabad, India, without regard to its conflict of law provisions.</p>

            <h2>12. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p><a href="mailto:mayankgandhi50@gmail.com">mayankgandhi50@gmail.com</a></p>
          </article>
        </main>

        {/* Footer */}
        <footer style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0, 122, 255, 0.1)",
          padding: "60px 24px",
          textAlign: "center",
          marginTop: "80px"
        }}>
          <p style={{
            margin: "0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            © 2025 Cashew · Built with passion & precision
          </p>
        </footer>
      </div>

      {/* CSS */}
      <style>{`
        .back-link:hover {
          background: rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.9);
        }

        .legal-content h2 {
          color: rgba(0, 0, 0, 0.95);
          font-weight: 700;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.3;
          font-size: clamp(24px, 4vw, 32px);
          padding-bottom: 0.3em;
          border-bottom: 1px solid rgba(0, 122, 255, 0.2);
        }

        .legal-content h3 {
          color: rgba(0, 0, 0, 0.95);
          font-weight: 700;
          margin-top: 1.5em;
          margin-bottom: 0.8em;
          font-size: clamp(20px, 3vw, 24px);
        }

        .legal-content p {
          margin: 1.2em 0;
        }

        .legal-content a {
          color: #007AFF;
          text-decoration: none;
          transition: color 0.3s ease;
          border-bottom: 1px solid rgba(0, 122, 255, 0.3);
        }

        .legal-content a:hover {
          color: #00BFFF;
          border-bottom-color: #00BFFF;
        }

        .legal-content ul {
          padding-left: 2em;
          margin: 1.2em 0;
        }

        .legal-content li {
          margin: 0.5em 0;
        }

        .legal-content strong {
          color: rgba(0, 0, 0, 0.95);
          font-weight: 600;
        }

        .legal-content em {
          color: rgba(0, 0, 0, 0.7);
          font-style: italic;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
