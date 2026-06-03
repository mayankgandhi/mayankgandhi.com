import LegalPage from '@/components/LegalPage';

export default function OneListPrivacyPolicy() {
  return (
    <LegalPage
      appName="OneList"
      appTagline="Task Manager"
      appIcon="https://cdn.mayankgandhi.com/onelist-app-icon.png"
      appHref="/onelist"
      accentColor="#6366f1"
    >
      <p><strong>Effective Date: 01 June 2025</strong></p>

      <h2>1. Introduction</h2>
      <p>OneList - Task Manager (&quot;we,&quot; &quot;our,&quot; or &quot;the App&quot;) is committed to protecting your privacy. This Privacy Policy explains how we handle information in our task management app.</p>

      <h2>2. Our Privacy Commitment</h2>
      <p>We do not collect, store, or have access to any of your personal data. All information you enter into the App remains exclusively on your device and in your personal iCloud account.</p>

      <h2>3. Information Storage and Synchronization</h2>
      <h3>Local Storage</h3>
      <ul>
        <li>All data is stored locally on your iOS device using Core Data</li>
        <li>Data is encrypted using iOS&apos;s built-in security features</li>
        <li>Only you have access to this data through your device</li>
      </ul>
      <h3>iCloud Synchronization</h3>
      <ul>
        <li>If you have iCloud enabled, your data synchronizes across your devices using CloudKit</li>
        <li>This synchronization occurs through your personal iCloud account</li>
        <li>Apple handles all encryption and security for iCloud data</li>
        <li>We cannot access your iCloud data</li>
      </ul>

      <h2>4. What We Don&apos;t Collect</h2>
      <p>We do not collect, store, or have access to:</p>
      <ul>
        <li>Personal identification information</li>
        <li>Task content or lists</li>
        <li>Usage patterns or behavior data</li>
        <li>Device identifiers or tracking information</li>
        <li>Usage analytics or behavior data</li>
        <li>Location information</li>
        <li>Contact information</li>
      </ul>

      <h2>5. No Third-Party Sharing</h2>
      <p>Since we don&apos;t collect any data, we have nothing to share with third parties. Your information never leaves your device and iCloud account.</p>

      <h2>6. Security</h2>
      <p>Your data security is managed entirely by:</p>
      <ul>
        <li>iOS device security features (Face ID, Touch ID, passcode)</li>
        <li>Apple&apos;s iCloud security infrastructure</li>
        <li>Your own device and account security practices</li>
      </ul>
      <p>We recommend:</p>
      <ul>
        <li>Using strong device passcodes</li>
        <li>Enabling two-factor authentication for your Apple ID</li>
        <li>Keeping your iOS updated to the latest version</li>
      </ul>

      <h2>7. Children&apos;s Privacy</h2>
      <p>The App does not knowingly collect any information from children under 13. Since we don&apos;t collect any data, this protection is inherently built into our App.</p>

      <h2>8. Your Rights and Choices</h2>
      <p>You have complete control over your data:</p>
      <ul>
        <li><strong>Access:</strong> All your data is accessible directly on your device</li>
        <li><strong>Modification:</strong> You can edit or update any information at any time</li>
        <li><strong>Deletion:</strong> You can delete any or all data directly within the App</li>
        <li><strong>Portability:</strong> Your data syncs across your devices via iCloud</li>
      </ul>

      <h2>9. Data Retention</h2>
      <p>Your data remains in the App until you choose to delete it. If you delete the App, all local data is removed from your device. iCloud data may persist based on your iCloud settings and can be managed through your device&apos;s iCloud settings.</p>

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
      <p>California residents have specific privacy rights. Since we don&apos;t collect personal information, traditional CCPA rights regarding data access, deletion, and opt-out don&apos;t apply. Your data is already fully under your control.</p>

      <h2>14. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
      <p><a href="mailto:mayankgandhi50@gmail.com">mayankgandhi50@gmail.com</a></p>

      <p><em>By using OneList - Task Manager, you acknowledge that you have read and understood this Privacy Policy.</em></p>
    </LegalPage>
  );
}
