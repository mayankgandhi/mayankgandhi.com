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
      background: "radial-gradient(circle, rgba(52, 199, 89, 0.15) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(60px)"
    }} />
    <div style={{
      position: "absolute",
      bottom: "10%",
      right: "5%",
      width: "350px",
      height: "350px",
      background: "radial-gradient(circle, rgba(48, 209, 88, 0.12) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(65px)"
    }} />
  </div>
));

FloatingShapes.displayName = "FloatingShapes";

export default function WalnutTerms() {
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
        {/* Header */}
        <header style={{
          background: "radial-gradient(ellipse at top, rgba(52, 199, 89, 0.15) 0%, transparent 50%)",
          padding: "clamp(60px, 10vw, 100px) 24px clamp(40px, 8vw, 60px)",
          borderBottom: "1px solid rgba(52, 199, 89, 0.1)"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link
              to="/walnut"
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
              ← Back to Walnut
            </Link>
            <h1 style={{
              margin: "0",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #1a1a2e 0%, #34C759 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              lineHeight: "1.2"
            }}>
              Terms of Service
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
              border: "1px solid rgba(52, 199, 89, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              color: "rgba(0, 0, 0, 0.8)",
              fontSize: "clamp(16px, 2.5vw, 18px)",
              lineHeight: "1.8"
            }}
            className="legal-content"
          >
            <p><strong>Effective Date: 13 Sept 2025</strong><br />
            <strong>Last Updated: 4 Oct 2025</strong></p>

            <h2>1. ACCEPTANCE OF TERMS</h2>
            <p>By downloading, installing, or using the Walnut application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>

            <h2>2. DESCRIPTION OF SERVICE</h2>
            <p>Walnut is a personal health journal app that allows users to:</p>
            <ul>
              <li>Manually enter information</li>
              <li>Upload documents</li>
              <li>Extract and organize information from documents</li>
              <li>Store data locally on your device</li>
            </ul>

            <h2>3. USER REQUIREMENTS</h2>
            <p><strong>3.1</strong> You must be at least 18 years old to use this App.</p>
            <p><strong>3.2</strong> You are responsible for maintaining the confidentiality and security of your device and account credentials.</p>
            <p><strong>3.3</strong> You agree to provide accurate, current, and complete information when using the App.</p>

            <h2>4. DATA COLLECTION AND PRIVACY</h2>

            <h3>4.1 Data Processing</h3>
            <ul>
              <li>Documents you upload are processed through third-party AI services for data extraction purposes</li>
              <li>Extracted information is returned to your device</li>
              <li>We do not store copies of your documents on our servers</li>
              <li>Processed documents are not retained by our service providers</li>
            </ul>

            <h3>4.2 No Analytics or Tracking</h3>
            <p>We do NOT collect:</p>
            <ul>
              <li>Analytics or usage data</li>
              <li>Screen views and navigation patterns</li>
              <li>App performance metrics</li>
              <li>Feature usage statistics</li>
              <li>Crash reports</li>
              <li>Any personally identifiable information</li>
            </ul>
            <p>We have no visibility into how you use the app.</p>

            <h3>4.3 Data Storage</h3>
            <ul>
              <li>Your information is stored exclusively on your device</li>
              <li>We do not use iCloud or any cloud storage services</li>
              <li>You maintain full control over your locally stored data</li>
              <li>We cannot access, view, or retrieve your data</li>
              <li>All data is encrypted using iOS native security features</li>
            </ul>

            <h2>5. PERMISSIONS</h2>
            <p>By using the App, you grant us permission to:</p>

            <h3>5.1 Notification Permission:</h3>
            <p>Send you notifications related to:</p>
            <ul>
              <li>Medication reminders you've set</li>
              <li>App updates and important announcements</li>
              <li>Security alerts</li>
            </ul>

            <h2>6. USER RESPONSIBILITIES</h2>

            <h3>6.1 You are solely responsible for:</h3>
            <ul>
              <li>The accuracy of information you enter</li>
              <li>The authenticity of documents you upload</li>
              <li>Maintaining backups of your data</li>
              <li>Protecting your device with appropriate security measures</li>
            </ul>

            <h3>6.2 You agree not to:</h3>
            <ul>
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer or tamper with the App</li>
            </ul>

            <h2>7. THIRD-PARTY SERVICES</h2>
            <p><strong>7.1</strong> The App uses third-party AI services for document processing. By using this feature, you acknowledge that:</p>
            <ul>
              <li>Your documents will be transmitted securely to third-party AI service providers for processing</li>
              <li>Processing is subject to the service provider's privacy and security standards</li>
              <li>Processed documents are not retained by these service providers</li>
              <li>We are not responsible for service providers' data handling practices beyond our control</li>
            </ul>
            <p><strong>7.2</strong> All your data is stored exclusively on your device. We do not use iCloud or any cloud storage services.</p>

            <h2>8. MEDICAL DISCLAIMER</h2>
            <p><strong>8.1</strong> The App is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p><strong>8.2</strong> Always consult qualified healthcare providers for medical decisions.</p>
            <p><strong>8.3</strong> We do not verify the accuracy of information extracted from your documents.</p>
            <p><strong>8.4</strong> In case of medical emergency, contact emergency services immediately.</p>

            <h2>9. INTELLECTUAL PROPERTY</h2>
            <p><strong>9.1</strong> The App and its original content, features, and functionality are owned by Mayank Gandhi and are protected by international copyright, trademark, and other intellectual property laws.</p>
            <p><strong>9.2</strong> You retain all rights to your personal information and documents.</p>

            <h2>10. LIMITATION OF LIABILITY</h2>
            <p><strong>10.1</strong> The App is provided "as is" without warranties of any kind.</p>

            <h2>11. DATA DELETION</h2>
            <p><strong>12.1</strong> You may delete your data at any time through the App settings.</p>
            <p><strong>12.2</strong> Upon App deletion, all locally stored data will be permanently removed from your device.</p>
            <p><strong>12.3</strong> Because we do not collect any analytics or usage data, there is no information about you on our servers to delete.</p>

            <h2>12. CHANGES TO TERMS</h2>
            <p><strong>13.1</strong> We reserve the right to modify these Terms at any time.</p>
            <p><strong>13.2</strong> Changes will be effective upon posting to the App.</p>
            <p><strong>13.3</strong> Continued use of the App after changes constitutes acceptance of modified Terms.</p>

            <h2>13. TERMINATION</h2>
            <p><strong>14.1</strong> You may terminate your use of the App at any time by deleting it from your device.</p>

            <h2>14. CONTACT INFORMATION</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p>
              <strong>Mayank Gandhi</strong><br />
              Email: <a href="mailto:walnut@mayankgandhi.com">walnut@mayankgandhi.com</a>
            </p>

            <h2>18. APP AVAILABILITY AND SERVICE CONTINUITY</h2>
            <p>We reserve the right to modify, suspend, or discontinue the Walnut App at any time, with or without notice. This includes but is not limited to:</p>
            <p>We are not liable for any loss, damage, or inconvenience caused by such modifications, suspensions, or discontinuation. Because all your data is stored locally on your device, you will retain access to your data even if the App is discontinued, suspended, or removed from the App Store.</p>

            <p><em>By using the Walnut App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</em></p>
          </article>
        </main>

        {/* Footer */}
        <footer style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(52, 199, 89, 0.1)",
          padding: "60px 24px",
          textAlign: "center",
          marginTop: "80px"
        }}>
          <p style={{
            margin: "0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            © 2025 Walnut · Built with passion & precision
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
          border-bottom: 1px solid rgba(52, 199, 89, 0.2);
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
          color: #34C759;
          text-decoration: none;
          transition: color 0.3s ease;
          border-bottom: 1px solid rgba(52, 199, 89, 0.3);
        }

        .legal-content a:hover {
          color: #30D158;
          border-bottom-color: #30D158;
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
