import { Link } from "@remix-run/react";

export default function WalnutIndex() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h1>Health Stack</h1>
      <p>Manage your health documents and information securely on your iOS device</p>

      <div style={{ marginTop: "40px" }}>
        <h2>Legal Information</h2>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
          <Link to="/walnut/privacy-policy" style={{ padding: "10px 20px", backgroundColor: "#007AFF", color: "white", textDecoration: "none", borderRadius: "8px" }}>
            Privacy Policy
          </Link>
          <Link to="/walnut/terms" style={{ padding: "10px 20px", backgroundColor: "#007AFF", color: "white", textDecoration: "none", borderRadius: "8px" }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
