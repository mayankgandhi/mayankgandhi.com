import { Link } from "@remix-run/react";

export default function CashewIndex() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h1>Cashew - Credit Card Tracker</h1>
      <p>Track and manage your credit cards privately on your iOS device</p>

      <div style={{ marginTop: "40px" }}>
        <h2>Legal Information</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
          <Link to="/cashew/privacy-policy" style={{ padding: "10px 20px", backgroundColor: "#007AFF", color: "white", textDecoration: "none", borderRadius: "8px" }}>
            Privacy Policy
          </Link>
          <Link to="/cashew/terms" style={{ padding: "10px 20px", backgroundColor: "#007AFF", color: "white", textDecoration: "none", borderRadius: "8px" }}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
