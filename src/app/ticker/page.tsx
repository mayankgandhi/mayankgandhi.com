import AppStoreTemplate from '@/components/AppStoreTemplate';

const FEATURES = [
  {
    title: "Customizable Alarms",
    description: "Set up personalized alarms for your daily tasks, important events, and reminders.",
    icon: "⏰"
  },
  {
    title: "Recurring Reminders",
    description: "Never forget important recurring tasks like medication schedules or weekly meetings.",
    icon: "🔁"
  },
  {
    title: "Smart Notifications",
    description: "Get timely notifications that help you stay organized throughout the day.",
    icon: "🔔"
  },
  {
    title: "Simple & Intuitive",
    description: "Clean, easy-to-use interface that makes managing your time effortless.",
    icon: "✨"
  }
];

const SCREENSHOTS = [
  {
    url: "https://cdn.mayankgandhi.com/ticker-screenshot-1.png",
    title: "Stay On Top of Your Day",
    description: ""
  },
  {
    url: "https://cdn.mayankgandhi.com/ticker-screenshot-2.png",
    title: "Smart Reminders That Work",
    description: ""
  }
];

export default function TickerPage() {
  return (
    <AppStoreTemplate
      appName="Ticker - Smart Alarms"
      appIcon="https://cdn.mayankgandhi.com/ticker-app-icon.png"
      tagline="Never miss what matters"
      appStoreLink="#"
      rating={5.0}
      ratingsCount={3}
      features={FEATURES}
      screenshots={SCREENSHOTS}
      whatsNew={{
        version: "1.5",
        date: "3d ago",
        changes: [
          "Added recurring reminders",
          "Improved notification system",
          "Bug fixes and performance improvements"
        ]
      }}
      appInfo={{
        provider: "Mayank Gandhi",
        size: "15.7 MB",
        category: "Productivity",
        compatibility: "Works on this iPhone",
        languages: "English",
        ageRating: "4",
        copyright: "Mayank Gandhi"
      }}
      privacyPolicyLink="/ticker/privacy-policy"
      termsLink="/ticker/terms"
      developerApps={[
        {
          name: "Cashew - Credit Card Tracker",
          icon: "https://cdn.mayankgandhi.com/cashew-app-icon.png",
          tagline: "Safe. Private. Secure.",
          link: "/cashew"
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
