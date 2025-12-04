import AppStoreTemplate from '@/components/AppStoreTemplate';

const FEATURES = [
  {
    title: "Track All Your Cards",
    description: "Keep track of all your credit cards, their balances, and payment due dates in one place.",
    icon: "💳"
  },
  {
    title: "Smart Reminders",
    description: "Get timely notifications before your payment due dates. Never miss a payment.",
    icon: "🔔"
  },
  {
    title: "Home & Lock Screen Widgets",
    description: "Quick access to your credit card information right from your home screen or lock screen.",
    icon: "📱"
  },
  {
    title: "Completely Private",
    description: "All your financial data stays on your device. No cloud sync, no tracking, complete privacy.",
    icon: "🔒"
  }
];

const SCREENSHOTS = [
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew1.png",
    title: "Track All Your Credit Cards",
    description: "Manage all your credit cards in one secure place"
  },
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew2.png",
    title: "Card Details at a Glance",
    description: "View balances, limits, and payment due dates"
  },
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew3.png",
    title: "Add Cards Easily",
    description: "Quick and simple card entry with all essential details"
  },
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew4.png",
    title: "Smart Payment Reminders",
    description: "Never miss a payment with customizable notifications"
  },
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew5.png",
    title: "Home Screen Widgets",
    description: "Quick access to your cards right from your home screen"
  },
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew6.png",
    title: "Lock Screen Widgets",
    description: "See important card info at a glance on your lock screen"
  },
  {
    url: "https://cdn.mayankgandhi.com/Cashew/Cashew7.png",
    title: "Spending Insights",
    description: "Understand your credit card usage patterns"
  }
];

export default function CashewPage() {
  return (
    <AppStoreTemplate
      appName="Cashew - Credit Card Tracker"
      appIcon="https://cdn.mayankgandhi.com/cashew-app-icon.png"
      tagline="Safe. Private. Secure."
      appStoreLink="https://apps.apple.com/in/app/cashew-credit-card-tracker/id6746769434"
      rating={5.0}
      ratingsCount={2}
      features={FEATURES}
      screenshots={SCREENSHOTS}
      whatsNew={{
        version: "1.3",
        date: "1w ago",
        changes: [
          "Added a new Summary view to understand spending",
          "Improved Notifications Settings",
          "New Cashew Card Design"
        ]
      }}
      appInfo={{
        provider: "Mayank Gandhi",
        size: "13.1 MB",
        category: "Finance",
        compatibility: "Works on this iPhone",
        languages: "English",
        ageRating: "4",
        copyright: "Mayank Gandhi"
      }}
      privacyPolicyLink="/cashew/privacy-policy"
      termsLink="/cashew/terms"
      developerApps={[
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
