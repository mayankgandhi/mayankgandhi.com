import AppStoreTemplate from '@/components/AppStoreTemplate';

const FEATURES = [
  {
    title: "Simple & Elegant",
    description: "A beautiful, minimalist interface designed to keep your lists clean and focused.",
    icon: "✨"
  },
  {
    title: "Smart Reminders",
    description: "Get timely notifications for your tasks. Never miss an important deadline.",
    icon: "🔔"
  },
  {
    title: "Home & Lock Screen Widgets",
    description: "Quick access to your lists right from your home screen or lock screen.",
    icon: "📱"
  },
  {
    title: "Completely Private",
    description: "All your data stays on your device. No cloud sync, no tracking, complete privacy.",
    icon: "🔒"
  }
];

const SCREENSHOTS = [
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList1.png"
  },
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList2.png"
  },
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList3.png"
  },
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList4.png"
  },
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList5.png"
  },
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList6.png"
  },
  {
    url: "https://cdn.mayankgandhi.com/OneList/OneList7.png"
  }
];

export default function OneListPage() {
  return (
    <AppStoreTemplate
      appName="OneList - Task Manager"
      appIcon="https://cdn.mayankgandhi.com/onelist-app-icon.png"
      tagline="Safe. Private. Secure."
      appStoreLink="https://apps.apple.com/app/onelist"
      rating={5.0}
      ratingsCount={0}
      features={FEATURES}
      screenshots={SCREENSHOTS}
      whatsNew={{
        version: "1.0",
        date: "Just Released",
        changes: [
          "Initial Release",
          "Beautiful task management interface",
          "Home and Lock Screen widgets"
        ]
      }}
      appInfo={{
        provider: "Mayank Gandhi",
        size: "10 MB",
        category: "Productivity",
        compatibility: "Works on this iPhone",
        languages: "English",
        ageRating: "4",
        copyright: "Mayank Gandhi"
      }}
      privacyPolicyLink="/onelist/privacy-policy"
      termsLink="/onelist/terms"
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
        },
        {
          name: "Walnut - Medical Documents",
          icon: "https://cdn.mayankgandhi.com/walnut-app-icon.png",
          tagline: "Health records at your fingertips",
          link: "/walnut"
        }
      ]}
    />
  );
}
