import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #e5e7eb", padding: "20px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h1 style={{ margin: "0 0 20px 0" }}>Mayank Gandhi</h1>
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              onClick={() => setActiveTab("about")}
              style={{
                background: activeTab === "about" ? "#007AFF" : "transparent",
                color: activeTab === "about" ? "white" : "#333",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("apps")}
              style={{
                background: activeTab === "apps" ? "#007AFF" : "transparent",
                color: activeTab === "apps" ? "white" : "#333",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Apps
            </button>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {activeTab === "about" && (
          <div>
            <h2>Senior iOS Engineer</h2>
            <p style={{ fontSize: "18px", color: "#666", marginTop: "20px" }}>
              Building elegant and user-focused iOS applications with a passion for creating exceptional mobile experiences.
            </p>
          </div>
        )}

        {activeTab === "apps" && (
          <div>
            <h2>My Apps</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "30px" }}>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px" }}>
                <h3 style={{ marginTop: "0" }}>Cashew - Credit Card Tracker</h3>
                <p style={{ color: "#666" }}>Track and manage your credit cards privately on your iOS device</p>
                <Link
                  to="/cashew"
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    padding: "10px 20px",
                    backgroundColor: "#007AFF",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px"
                  }}
                >
                  Learn More
                </Link>
              </div>

              <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px" }}>
                <h3 style={{ marginTop: "0" }}>Health Stack</h3>
                <p style={{ color: "#666" }}>Manage your health documents and information securely on your iOS device</p>
                <Link
                  to="/walnut"
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    padding: "10px 20px",
                    backgroundColor: "#007AFF",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px"
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}