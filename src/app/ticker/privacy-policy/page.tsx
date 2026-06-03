import LegalPage from '@/components/LegalPage';

export default function TickerPrivacyPolicy() {
  return (
    <LegalPage
      appName="Ticker"
      appTagline="Task & Reminder Manager"
      appIcon="https://cdn.mayankgandhi.com/ticker-app-icon.png"
      appHref="/ticker"
      accentColor="#e07a00"
    >
      <p>Ticker does not collect or transmit any personal data.</p>

      <h2>Contact</h2>
      <p>
        If you have any questions, please feel free to{' '}
        <a href="mailto:mayankgandhi50@gmail.com">contact me</a>.
      </p>
    </LegalPage>
  );
}
