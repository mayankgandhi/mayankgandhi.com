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

export default function WalnutPrivacyPolicy() {
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
            <strong>Last Updated: 3 Oct 2025</strong></p>

            <h2>1. INTRODUCTION</h2>
            <p>Mayank Gandhi ("we," "us," or "our") operates the Walnut iOS application ("App"). This Privacy Policy explains our approach to your information when you use our App.</p>
            <p>We are committed to protecting your privacy and ensuring the security of your information. All your data remains stored locally on your device only. We do not collect, transmit, or store any of your personal information or usage data on our servers.</p>
            <p>Please read this Privacy Policy carefully. By using the App, you consent to the practices described in this policy.</p>

            <h2>2. INFORMATION WE COLLECT</h2>

            <h3>2.1 Information You Provide</h3>
            <ul>
              <li><strong>Manual Entries:</strong> Data you manually input into the App</li>
              <li><strong>Uploaded Documents:</strong> Documents you choose to upload for processing</li>
              <li><strong>Extracted Data:</strong> information extracted from your uploaded documents</li>
            </ul>
            <p><strong>Important:</strong> All data is stored exclusively on your device. We never collect, store, access, or retain your information on our servers.</p>

            <h3>2.2 Information We Do NOT Collect</h3>
            <p>We do not collect:</p>
            <ul>
              <li>Analytics or usage data</li>
              <li>Device information</li>
              <li>Performance metrics</li>
              <li>Screen views or navigation patterns</li>
              <li>Crash reports</li>
              <li>Any personally identifiable information</li>
              <li>Any information about how you use the app</li>
            </ul>

            <h3>2.3 Permissions-Based Information</h3>
            <p>When you grant permissions, the App uses them solely for local functionality:</p>
            <ul>
              <li><strong>Notifications:</strong> To send reminders locally on your device</li>
              <li><strong>Alarm Kit:</strong> To set medication and tracking alerts locally on your device</li>
            </ul>
            <p>We do not transmit or collect any data from these permissions.</p>

            <h2>3. HOW WE USE YOUR INFORMATION</h2>

            <h3>3.1 Data Processing</h3>
            <ul>
              <li><strong>No Server Storage:</strong> We do not retain copies of your documents or extracted data on our servers</li>
              <li><strong>Local Storage Only:</strong> All data remains on your device under your complete control</li>
            </ul>

            <h3>3.2 No Analytics or Tracking</h3>
            <p>We do not:</p>
            <ul>
              <li>Collect usage data</li>
              <li>Track app performance</li>
              <li>Monitor feature usage</li>
              <li>Analyze user behavior</li>
              <li>Collect crash reports</li>
            </ul>

            <h3>3.3 Local Functionality Only</h3>
            <p>The App operates entirely on your device to:</p>
            <ul>
              <li>Store and organize your data</li>
              <li>Send local reminders you've configured</li>
              <li>Process documents when you request it</li>
            </ul>

            <h2>4. DATA STORAGE AND SECURITY</h2>

            <h3>4.1 Local Storage - Your Data Stays on Your Device</h3>
            <ul>
              <li><strong>Device-Only Storage:</strong> Your data is stored exclusively on your device</li>
              <li><strong>iOS Encryption:</strong> Data is encrypted using iOS native security features</li>
              <li><strong>Full User Control:</strong> You have complete control over your locally stored data</li>
              <li><strong>No Cloud Storage:</strong> We do not use iCloud or any other cloud storage services</li>
              <li><strong>No Remote Access:</strong> We cannot access, view, or retrieve your data</li>
            </ul>

            <h3>4.2 Security Measures</h3>
            <ul>
              <li><strong>Encrypted Storage:</strong> All data is encrypted at rest on your device using iOS security</li>
              <li><strong>Secure Deletion:</strong> When you delete data in the app, it is permanently removed from your device</li>
              <li><strong>App Uninstall:</strong> All data is permanently deleted when you uninstall the App</li>
            </ul>

            <h3>4.3 Transit Security</h3>
            <ul>
              <li>All data transmitted for document processing is encrypted using TLS 1.2 or higher</li>
              <li>We use secure HTTPS protocols for all network communications</li>
              <li>Documents are only transmitted during processing and are not stored on external servers</li>
            </ul>

            <h2>5. DATA SHARING AND DISCLOSURE</h2>

            <h3>5.1 Third-Party Services</h3>
            <p>We use third-party AI services for document processing only. Documents are temporarily processed and not retained by these service providers.</p>
            <p>We do not use any analytics providers or share data with any other third parties.</p>

            <h3>5.2 We Never Share</h3>
            <p>We will never sell, rent, or share your information with:</p>
            <ul>
              <li>Advertisers</li>
              <li>Data brokers</li>
              <li>Marketing companies</li>
              <li>Insurance companies</li>
              <li>Employers</li>
              <li>Analytics providers</li>
              <li>Any third parties for any purpose</li>
            </ul>

            <h3>5.3 Legal Disclosure</h3>
            <p>We may be required to respond to:</p>
            <ul>
              <li>Law enforcement with valid legal process</li>
              <li>Court order or subpoena</li>
              <li>Legal obligation or government request</li>
            </ul>
            <p><strong>Note:</strong> Because your data is stored only on your device, we cannot disclose what we do not have access to. We have no access to your information.</p>

            <h2>6. DATA RETENTION</h2>

            <h3>6.1 Data</h3>
            <ul>
              <li>Stored locally on your device until you delete it</li>
              <li>Immediately and permanently deleted when you uninstall the App</li>
              <li>We do not retain any copies on servers or cloud storage</li>
              <li>You can delete individual records or all data at any time</li>
            </ul>

            <h3>6.2 No Analytics Data</h3>
            <p>We do not collect any analytics or usage data, therefore we do not retain any information about your use of the App.</p>

            <h2>7. YOUR RIGHTS AND CHOICES</h2>

            <h3>7.1 Access and Control</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access all your data within the App</li>
              <li>Delete specific records or all data at any time</li>
            </ul>

            <h3>7.2 Permission Management</h3>
            <p>You can revoke permissions at any time through:</p>
            <ul>
              <li>iOS Settings &gt; Walnut &gt; Permissions</li>
              <li>In-app settings menu</li>
            </ul>

            <h3>8. Complete Privacy</h3>
            <ul>
              <li>No need to opt-out of analytics (we don't collect any)</li>
              <li>No tracking to disable</li>
              <li>All notifications are local to your device</li>
              <li>Delete the app to remove all data permanently</li>
            </ul>

            <h2>9. INTERNATIONAL DATA TRANSFERS</h2>

            <h3>9.1 API Processing</h3>
            <p>When you upload documents for processing:</p>
            <ul>
              <li>Data is transmitted to third-party AI service providers (location may vary)</li>
              <li>Processing occurs according to the service provider's data protection standards</li>
              <li>Extracted data is immediately returned to your device</li>
              <li>No data is retained on external servers</li>
            </ul>

            <h3>9.2 Your Rights</h3>
            <p>If you're in the EU/EEA, you have rights under GDPR including:</p>
            <ul>
              <li>Right to access</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h2>10. DATA BREACH NOTIFICATION</h2>
            <p>In the event of a data breach that affects your personal information:</p>
            <ul>
              <li>We will notify you within 72 hours of discovery</li>
              <li>Provide details about what information was affected</li>
              <li>Outline steps we're taking to address the breach</li>
              <li>Recommend actions you should take</li>
            </ul>
            <p><strong>Important:</strong> Because your data is stored exclusively on your device, any breach of our systems would not expose your information.</p>

            <h2>11. PRIVACY POLICY CHANGES</h2>

            <h3>11.1 Notification</h3>
            <p>We will notify you of material changes by:</p>
            <ul>
              <li>In-app notification</li>
              <li>Update notice on next app launch</li>
            </ul>

            <h3>11.2 Acceptance</h3>
            <p>Continued use after changes constitutes acceptance of the updated policy.</p>

            <h2>12. THIRD-PARTY LINKS</h2>
            <p>The App may contain links to third-party services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.</p>

            <h2>13. COOKIES AND TRACKING</h2>
            <p>The App does not use cookies, tracking technologies, or analytics. We do not monitor your usage of the app in any way.</p>

            <h2>14. DATA SPECIAL CONSIDERATIONS</h2>

            <h3>14.1 Sensitive Information</h3>
            <p>We recognize your data as particularly sensitive and:</p>
            <ul>
              <li>Store it exclusively on your device with iOS encryption</li>
              <li>Apply enhanced security measures for all data transmissions</li>
            </ul>

            <h3>14.2 On-Device Security</h3>
            <ul>
              <li>Your data never leaves your device except when you explicitly choose to process documents</li>
              <li>Processed documents are not retained by us or our service providers</li>
              <li>All information remains under your complete control</li>
              <li>Only you can access your data through your device</li>
            </ul>

            <h2>15. YOUR CONSENT</h2>
            <p>By using Walnut, you consent to:</p>
            <ul>
              <li>Processing of documents through third-party AI services (temporary, no retention)</li>
              <li>Storage of data exclusively on your device</li>
            </ul>
            <p>We do not collect any analytics, usage data, or personal information.</p>
            <p>You may withdraw consent at any time by deleting the App.</p>

            <h2>16. CONTACT US</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <p><a href="mailto:walnut@mayankgandhi.com">walnut@mayankgandhi.com</a></p>

            <h2>17. LEGAL BASIS FOR PROCESSING</h2>
            <p>We process your information based on:</p>
            <ul>
              <li><strong>Consent:</strong> For document processing through third-party AI services</li>
              <li><strong>Legal Obligation:</strong> When required by law (though we have no access to your device-stored data)</li>
            </ul>
            <p>We do not process any analytics or usage data.</p>

            <h2>18. AUTOMATED DECISION MAKING</h2>
            <p>The App does not engage in automated decision-making or profiling that produces legal or similarly significant effects on users. The App is a personal tracking tool where you maintain full control over your data.</p>

            <h2>19. APP AVAILABILITY AND SERVICE CONTINUITY</h2>
            <p>We reserve the right to modify, suspend, or discontinue the Walnut App at any time, with or without notice. This includes but is not limited to:</p>
            <ul>
              <li>Temporary or permanent suspension of the App</li>
              <li>Removal from the Apple App Store</li>
              <li>Changes to features, functionality, or third-party integrations</li>
              <li>Termination of support or updates</li>
            </ul>
            <p>We are not liable for any loss, damage, or inconvenience caused by such modifications, suspensions, or discontinuation. Because all your data is stored locally on your device, you will retain access to your data even if the App is discontinued, suspended, or removed from the App Store.</p>

            <p><strong>Last Review Date: 3 Oct 2025</strong></p>

            <p><em>By using the Walnut App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Your data is stored exclusively on your device, ensuring maximum privacy and security.</em></p>
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
