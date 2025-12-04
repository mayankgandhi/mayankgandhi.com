'use client';

import Link from "next/link";

export default function CashewPrivacyPolicy() {
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
              src="https://cdn.mayankgandhi.com/cashew-app-icon.png"
              alt="Cashew App Icon"
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
                Cashew
              </h1>
              <p style={{
                margin: "0",
                fontSize: "15px",
                color: "#6e6e73",
                fontWeight: "500"
              }}>
                Credit Card Tracker
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
        </div>
      </div>

      <style>{`
        h2 {
          font-size: 20px;
          font-weight: 600;
          color: #1d1d1f;
          margin: 24px 0 12px 0;
          padding-bottom: 8px;
          border-bottom: 0.5px solid #e5e5ea;
        }

        h3 {
          font-size: 17px;
          font-weight: 600;
          color: #1d1d1f;
          margin: 20px 0 12px 0;
        }

        p {
          font-size: 17px;
          color: #1d1d1f;
          line-height: 1.6;
          margin: 12px 0;
        }

        a {
          color: #007AFF;
          text-decoration: none;
        }

        ul {
          padding-left: 24px;
          margin: 12px 0;
        }

        li {
          font-size: 17px;
          color: #1d1d1f;
          line-height: 1.6;
          margin: 8px 0;
        }

        strong {
          font-weight: 600;
        }

        em {
          font-style: italic;
          color: #6e6e73;
        }
      `}</style>
    </div>
  );
}
