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
    url: "https://cdn.mayankgandhi.com/Ticker/Ticker-SS1.jpg",
    title: "All Your Alarms in One Place",
    description: "Manage all your reminders and alarms with a clean, organized view"
  },
  {
    url: "https://cdn.mayankgandhi.com/Ticker/Ticker-SS2.jpg",
    title: "Create Custom Alarms",
    description: "Set up personalized alarms with titles, times, and custom settings"
  },
  {
    url: "https://cdn.mayankgandhi.com/Ticker/Ticker-SS3.jpg",
    title: "Flexible Scheduling",
    description: "Choose specific days and times for your recurring reminders"
  },
  {
    url: "https://cdn.mayankgandhi.com/Ticker/Ticker-SS4.jpg",
    title: "Smart Notifications",
    description: "Get timely alerts that help you stay on track throughout the day"
  },
  {
    url: "https://cdn.mayankgandhi.com/Ticker/Ticker-SS5.jpg",
    title: "Never Miss Important Tasks",
    description: "Reliable reminders for medication, meetings, and daily routines"
  }
];

export default function TickerPage() {
  return (
    <AppStoreTemplate
      appName="Ticker - Smart Alarms"
      appIcon="https://cdn.mayankgandhi.com/ticker-app-icon.png"
      tagline="Never miss what matters"
      appStoreLink="https://apps.apple.com/in/app/ticker-smart-alarms/id6753949420"
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
