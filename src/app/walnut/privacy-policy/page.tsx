'use client';

import Link from "next/link";
import { tokens } from '@/styles/tokens';

const dark = tokens.colors.dark;

export default function WalnutPrivacyPolicy() {
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
              src="https://cdn.mayankgandhi.com/walnut-app-icon.png"
              alt="Walnut App Icon"
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
                Walnut
              </h1>
              <p style={{
                margin: "0",
                fontSize: "15px",
                color: dark.textSubtle,
                fontWeight: "500"
              }}>
                Medical Documents Manager
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
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Effective Date: 13 Sept 2025</strong><br />
            <strong style={{ fontWeight: 600, color: dark.textSecondary }}>Last Updated: 3 Oct 2025</strong></p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>1. INTRODUCTION</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>Mayank Gandhi ("we," "us," or "our") operates the Walnut iOS application ("App"). This Privacy Policy explains our approach to your information when you use our App.</p>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We are committed to protecting your privacy and ensuring the security of your information. All your data remains stored locally on your device only. We do not collect, transmit, or store any of your personal information or usage data on our servers.</p>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>Please read this Privacy Policy carefully. By using the App, you consent to the practices described in this policy.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>2. INFORMATION WE COLLECT</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>2.1 Information You Provide</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Manual Entries:</strong> Data you manually input into the App</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Uploaded Documents:</strong> Documents you choose to upload for processing</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Extracted Data:</strong> information extracted from your uploaded documents</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Important:</strong> All data is stored exclusively on your device. We never collect, store, access, or retain your information on our servers.</p>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>2.2 Information We Do NOT Collect</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not collect:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Analytics or usage data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Device information</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Performance metrics</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Screen views or navigation patterns</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Crash reports</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Any personally identifiable information</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Any information about how you use the app</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>2.3 Permissions-Based Information</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>When you grant permissions, the App uses them solely for local functionality:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Notifications:</strong> To send reminders locally on your device</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Alarm Kit:</strong> To set medication and tracking alerts locally on your device</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not transmit or collect any data from these permissions.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>3. HOW WE USE YOUR INFORMATION</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>3.1 Data Processing</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>No Server Storage:</strong> We do not retain copies of your documents or extracted data on our servers</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Local Storage Only:</strong> All data remains on your device under your complete control</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>3.2 No Analytics or Tracking</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Collect usage data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Track app performance</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Monitor feature usage</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Analyze user behavior</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Collect crash reports</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>3.3 Local Functionality Only</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App operates entirely on your device to:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Store and organize your data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Send local reminders you've configured</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Process documents when you request it</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>4. DATA STORAGE AND SECURITY</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>4.1 Local Storage - Your Data Stays on Your Device</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Device-Only Storage:</strong> Your data is stored exclusively on your device</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>iOS Encryption:</strong> Data is encrypted using iOS native security features</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Full User Control:</strong> You have complete control over your locally stored data</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>No Cloud Storage:</strong> We do not use iCloud or any other cloud storage services</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>No Remote Access:</strong> We cannot access, view, or retrieve your data</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>4.2 Security Measures</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Encrypted Storage:</strong> All data is encrypted at rest on your device using iOS security</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Secure Deletion:</strong> When you delete data in the app, it is permanently removed from your device</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>App Uninstall:</strong> All data is permanently deleted when you uninstall the App</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>4.3 Transit Security</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>All data transmitted for document processing is encrypted using TLS 1.2 or higher</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>We use secure HTTPS protocols for all network communications</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Documents are only transmitted during processing and are not stored on external servers</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>5. DATA SHARING AND DISCLOSURE</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>5.1 Third-Party Services</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We use third-party AI services for document processing only. Documents are temporarily processed and not retained by these service providers.</p>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not use any analytics providers or share data with any other third parties.</p>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>5.2 We Never Share</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We will never sell, rent, or share your information with:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Advertisers</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Data brokers</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Marketing companies</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Insurance companies</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Employers</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Analytics providers</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Any third parties for any purpose</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>5.3 Legal Disclosure</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We may be required to respond to:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Law enforcement with valid legal process</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Court order or subpoena</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Legal obligation or government request</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Note:</strong> Because your data is stored only on your device, we cannot disclose what we do not have access to. We have no access to your information.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>6. DATA RETENTION</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>6.1 Data</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Stored locally on your device until you delete it</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Immediately and permanently deleted when you uninstall the App</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>We do not retain any copies on servers or cloud storage</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>You can delete individual records or all data at any time</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>6.2 No Analytics Data</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not collect any analytics or usage data, therefore we do not retain any information about your use of the App.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>7. YOUR RIGHTS AND CHOICES</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>7.1 Access and Control</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>You have the right to:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Access all your data within the App</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Delete specific records or all data at any time</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>7.2 Permission Management</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>You can revoke permissions at any time through:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>iOS Settings &gt; Walnut &gt; Permissions</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>In-app settings menu</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>8. Complete Privacy</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>No need to opt-out of analytics (we don't collect any)</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>No tracking to disable</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>All notifications are local to your device</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Delete the app to remove all data permanently</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>9. INTERNATIONAL DATA TRANSFERS</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>9.1 API Processing</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>When you upload documents for processing:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Data is transmitted to third-party AI service providers (location may vary)</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Processing occurs according to the service provider's data protection standards</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Extracted data is immediately returned to your device</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>No data is retained on external servers</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>9.2 Your Rights</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>If you're in the EU/EEA, you have rights under GDPR including:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Right to access</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Right to rectification</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Right to erasure</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Right to data portability</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Right to object to processing</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>10. DATA BREACH NOTIFICATION</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>In the event of a data breach that affects your personal information:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>We will notify you within 72 hours of discovery</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Provide details about what information was affected</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Outline steps we're taking to address the breach</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Recommend actions you should take</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Important:</strong> Because your data is stored exclusively on your device, any breach of our systems would not expose your information.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>11. PRIVACY POLICY CHANGES</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>11.1 Notification</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We will notify you of material changes by:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>In-app notification</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Update notice on next app launch</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>11.2 Acceptance</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>Continued use after changes constitutes acceptance of the updated policy.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>12. THIRD-PARTY LINKS</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App may contain links to third-party services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>13. COOKIES AND TRACKING</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App does not use cookies, tracking technologies, or analytics. We do not monitor your usage of the app in any way.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>14. DATA SPECIAL CONSIDERATIONS</h2>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>14.1 Sensitive Information</h3>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We recognize your data as particularly sensitive and:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Store it exclusively on your device with iOS encryption</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Apply enhanced security measures for all data transmissions</li>
            </ul>

            <h3 style={{ fontSize: '17px', fontWeight: '600', color: dark.textPrimary, margin: '20px 0 12px 0' }}>14.2 On-Device Security</h3>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Your data never leaves your device except when you explicitly choose to process documents</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Processed documents are not retained by us or our service providers</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>All information remains under your complete control</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Only you can access your data through your device</li>
            </ul>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>15. YOUR CONSENT</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>By using Walnut, you consent to:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Processing of documents through third-party AI services (temporary, no retention)</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Storage of data exclusively on your device</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not collect any analytics, usage data, or personal information.</p>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>You may withdraw consent at any time by deleting the App.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>16. CONTACT US</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><a href="mailto:walnut@mayankgandhi.com" style={{ color: dark.accent, textDecoration: 'none' }}>walnut@mayankgandhi.com</a></p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>17. LEGAL BASIS FOR PROCESSING</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We process your information based on:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Consent:</strong> For document processing through third-party AI services</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Legal Obligation:</strong> When required by law (though we have no access to your device-stored data)</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We do not process any analytics or usage data.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>18. AUTOMATED DECISION MAKING</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>The App does not engage in automated decision-making or profiling that produces legal or similarly significant effects on users. The App is a personal tracking tool where you maintain full control over your data.</p>

            <h2 style={{ fontSize: '20px', fontWeight: '600', color: dark.textPrimary, margin: '24px 0 12px 0', paddingBottom: '8px', borderBottom: `1px solid rgba(255,255,255, 0.06)` }}>19. APP AVAILABILITY AND SERVICE CONTINUITY</h2>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We reserve the right to modify, suspend, or discontinue the Walnut App at any time, with or without notice. This includes but is not limited to:</p>
            <ul style={{ paddingLeft: '24px', margin: '12px 0' }}>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Temporary or permanent suspension of the App</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Removal from the Apple App Store</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Changes to features, functionality, or third-party integrations</li>
              <li style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '8px 0' }}>Termination of support or updates</li>
            </ul>
            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}>We are not liable for any loss, damage, or inconvenience caused by such modifications, suspensions, or discontinuation. Because all your data is stored locally on your device, you will retain access to your data even if the App is discontinued, suspended, or removed from the App Store.</p>

            <p style={{ fontSize: '15px', color: dark.textMuted, lineHeight: '1.6', margin: '12px 0' }}><strong style={{ fontWeight: 600, color: dark.textSecondary }}>Last Review Date: 3 Oct 2025</strong></p>

            <p style={{ fontSize: '15px', color: dark.textSubtle, lineHeight: '1.6', margin: '12px 0', fontStyle: 'italic' }}>By using the Walnut App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Your data is stored exclusively on your device, ensuring maximum privacy and security.</p>
        </div>
      </div>
    </div>
  );
}
