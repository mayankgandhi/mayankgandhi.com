import AppStoreTemplate from '@/components/AppStoreTemplate';

const FEATURES = [
  {
    title: "Organize Medical Documents",
    description: "Store and manage all your medical documents, test results, and prescriptions in one secure place.",
    icon: "📄"
  },
  {
    title: "Smart Prescription Parsing",
    description: "Automatically extract medication information from prescription images.",
    icon: "📸"
  },
  {
    title: "Medication Reminders",
    description: "Never miss a dose with timely medication reminders and follow-up appointments.",
    icon: "⏰"
  },
  {
    title: "Track Health Metrics",
    description: "Monitor vital health metrics like blood pressure, blood sugar, and weight over time.",
    icon: "📊"
  }
];

const SCREENSHOTS = [
  {
    url: "https://cdn.mayankgandhi.com/walnut-screenshot-1.png",
    title: "Your Health. Your Privacy.",
    description: ""
  },
  {
    url: "https://cdn.mayankgandhi.com/walnut-screenshot-2.png",
    title: "All Your Medical Records in One Place",
    description: ""
  }
];

export default function WalnutPage() {
  return (
    <AppStoreTemplate
      appName="Walnut - Medical Documents"
      appIcon="https://cdn.mayankgandhi.com/walnut-app-icon.png"
      tagline="Health records at your fingertips"
      appStoreLink="#"
      rating={5.0}
      ratingsCount={5}
      features={FEATURES}
      screenshots={SCREENSHOTS}
      whatsNew={{
        version: "1.0",
        date: "2w ago",
        changes: [
          "Initial release",
          "Prescription parsing with AI",
          "Medication reminders",
          "Health metrics tracking"
        ]
      }}
      appInfo={{
        provider: "Mayank Gandhi",
        size: "18.2 MB",
        category: "Health & Fitness",
        compatibility: "Works on this iPhone",
        languages: "English",
        ageRating: "4",
        copyright: "Mayank Gandhi"
      }}
      privacyPolicyLink="/walnut/privacy-policy"
      termsLink="/walnut/terms"
      developerApps={[
        {
          name: "Cashew - Credit Card Tracker",
          icon: "https://cdn.mayankgandhi.com/cashew-app-icon.png",
          tagline: "Safe. Private. Secure.",
          link: "/cashew"
        },
        {
          name: "Ticker - Smart Alarms",
          icon: "https://cdn.mayankgandhi.com/ticker-app-icon.png",
          tagline: "Never miss what matters",
          link: "/ticker"
        }
      ]}
    />
  );
}
