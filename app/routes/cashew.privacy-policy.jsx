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

export default function CashewPrivacyPolicy() {
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
              Privacy Policy
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

            <h2>1. Introduction</h2>
            <p>Cashew - Credit Card Tracker ("we," "our," or "the App") is committed to protecting your privacy. This Privacy Policy explains how we handle information in our credit card tracking app.</p>

            <h2>2. Our Privacy Commitment</h2>
            <p>We do not collect, store, or have access to any of your personal or financial data. All information you enter into the App remains exclusively on your device and in your personal iCloud account.</p>

            <h2>3. Information Storage and Synchronization</h2>

            <h3>Local Storage</h3>
            <ul>
              <li>All data is stored locally on your iOS device using Core Data</li>
              <li>Data is encrypted using iOS's built-in security features</li>
              <li>Only you have access to this data through your device</li>
            </ul>

            <h3>iCloud Synchronization</h3>
            <ul>
              <li>If you have iCloud enabled, your data synchronizes across your devices using CloudKit</li>
              <li>This synchronization occurs through your personal iCloud account</li>
              <li>Apple handles all encryption and security for iCloud data</li>
              <li>We cannot access your iCloud data</li>
            </ul>

            <h2>4. What We Don't Collect</h2>
            <p>We do not collect, store, or have access to:</p>
            <ul>
              <li>Personal identification information</li>
              <li>Financial account numbers or credit card details</li>
              <li>Transaction history or spending patterns</li>
              <li>Device identifiers or tracking information</li>
              <li>Usage analytics or behavior data</li>
              <li>Location information</li>
              <li>Contact information</li>
            </ul>

            <h2>5. No Third-Party Sharing</h2>
            <p>Since we don't collect any data, we have nothing to share with third parties. Your information never leaves your device and iCloud account.</p>

            <h2>6. Security</h2>
            <p>Your data security is managed entirely by:</p>
            <ul>
              <li>iOS device security features (Face ID, Touch ID, passcode)</li>
              <li>Apple's iCloud security infrastructure</li>
              <li>Your own device and account security practices</li>
            </ul>
            <p>We recommend:</p>
            <ul>
              <li>Using strong device passcodes</li>
              <li>Enabling two-factor authentication for your Apple ID</li>
              <li>Keeping your iOS updated to the latest version</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>The App does not knowingly collect any information from children under 13. Since we don't collect any data, this protection is inherently built into our App.</p>

            <h2>8. Your Rights and Choices</h2>
            <p>You have complete control over your data:</p>
            <ul>
              <li><strong>Access:</strong> All your data is accessible directly on your device</li>
              <li><strong>Modification:</strong> You can edit or update any information at any time</li>
              <li><strong>Deletion:</strong> You can delete any or all data directly within the App</li>
              <li><strong>Portability:</strong> Your data syncs across your devices via iCloud</li>
            </ul>

            <h2>9. Data Retention</h2>
            <p>Your data remains in the App until you choose to delete it. If you delete the App, all local data is removed from your device. iCloud data may persist based on your iCloud settings and can be managed through your device's iCloud settings.</p>

            <h2>10. No Authentication Required</h2>
            <p>The App does not require:</p>
            <ul>
              <li>Account creation</li>
              <li>Email registration</li>
              <li>Phone number verification</li>
              <li>Social media login</li>
              <li>Any form of user authentication</li>
            </ul>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be reflected in the App with an updated effective date. We encourage you to review this Privacy Policy periodically.</p>

            <h2>12. International Users</h2>
            <p>The App is designed to work globally without collecting user data. Your data remains in your local jurisdiction and your chosen iCloud region.</p>

            <h2>13. California Privacy Rights</h2>
            <p>California residents have specific privacy rights. Since we don't collect personal information, traditional CCPA rights regarding data access, deletion, and opt-out don't apply. Your data is already fully under your control.</p>

            <h2>14. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p><a href="mailto:mayankgandhi50@gmail.com">mayankgandhi50@gmail.com</a></p>

            <p><em>By using Cashew - Credit Card Tracker, you acknowledge that you have read and understood this Privacy Policy.</em></p>
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
