'use client';

import Link from "next/link";
import { tokens } from '@/styles/tokens';

const dark = tokens.colors.dark;

export default function OneListPrivacyPolicy() {
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
              src="https://cdn.mayankgandhi.com/onelist-app-icon.png"
              alt="OneList App Icon"
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
                OneList
              </h1>
              <p style={{
                margin: "0",
                fontSize: "15px",
                color: dark.textSubtle,
                fontWeight: "500"
              }}>
                Task Manager
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
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Effective Date: 01 June 2025</strong></p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>1. Introduction</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>OneList - Task Manager ("we," "our," or "the App") is committed to protecting your privacy. This Privacy Policy explains how we handle information in our task management app.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>2. Our Privacy Commitment</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not collect, store, or have access to any of your personal data. All information you enter into the App remains exclusively on your device and in your personal iCloud account.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>3. Information Storage and Synchronization</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>Local Storage</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>All data is stored locally on your iOS device using Core Data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Data is encrypted using iOS's built-in security features</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Only you have access to this data through your device</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>iCloud Synchronization</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>If you have iCloud enabled, your data synchronizes across your devices using CloudKit</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>This synchronization occurs through your personal iCloud account</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Apple handles all encryption and security for iCloud data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>We cannot access your iCloud data</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>4. What We Don't Collect</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not collect, store, or have access to:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Personal identification information</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Task content or lists</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Usage patterns or behavior data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Device identifiers or tracking information</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Usage analytics or behavior data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Location information</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Contact information</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>5. No Third-Party Sharing</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>Since we don't collect any data, we have nothing to share with third parties. Your information never leaves your device and iCloud account.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>6. Security</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>Your data security is managed entirely by:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>iOS device security features (Face ID, Touch ID, passcode)</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Apple's iCloud security infrastructure</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Your own device and account security practices</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We recommend:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Using strong device passcodes</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Enabling two-factor authentication for your Apple ID</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Keeping your iOS updated to the latest version</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>7. Children's Privacy</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App does not knowingly collect any information from children under 13. Since we don't collect any data, this protection is inherently built into our App.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>8. Your Rights and Choices</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>You have complete control over your data:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Access:</strong> All your data is accessible directly on your device</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Modification:</strong> You can edit or update any information at any time</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Deletion:</strong> You can delete any or all data directly within the App</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Portability:</strong> Your data syncs across your devices via iCloud</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>9. Data Retention</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>Your data remains in the App until you choose to delete it. If you delete the App, all local data is removed from your device. iCloud data may persist based on your iCloud settings and can be managed through your device's iCloud settings.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>10. No Authentication Required</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App does not require:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Account creation</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Email registration</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Phone number verification</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Social media login</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Any form of user authentication</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>11. Changes to This Privacy Policy</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We may update this Privacy Policy from time to time. Any changes will be reflected in the App with an updated effective date. We encourage you to review this Privacy Policy periodically.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>12. International Users</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App is designed to work globally without collecting user data. Your data remains in your local jurisdiction and your chosen iCloud region.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>13. California Privacy Rights</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>California residents have specific privacy rights. Since we don't collect personal information, traditional CCPA rights regarding data access, deletion, and opt-out don't apply. Your data is already fully under your control.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>14. Contact Us</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><a href="mailto:mayankgandhi50@gmail.com" style={{ color: dark.accent, textDecoration: 'none' }}>mayankgandhi50@gmail.com</a></p>

            <p style={{ fontSize: '15px', color: dark.textSubtle, lineHeight: '1.6', margin: '12px 0', fontStyle: 'italic' }}>By using OneList - Task Manager, you acknowledge that you have read and understood this Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
