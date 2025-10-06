import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getPosts } from "../utils/posts.server";

export const loader = async () => {
  const posts = await getPosts();
  return { posts };
};

export default function Index() {
  const { posts } = useLoaderData();
  const [activeTab, setActiveTab] = useState("about");

  const tabStyle = (isActive) => ({
    background: isActive ? "#007AFF" : "transparent",
    color: isActive ? "white" : "#333",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: isActive ? "500" : "normal"
  });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#e0f2fe", padding: "clamp(20px, 5vw, 40px) 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ margin: "0", fontSize: "clamp(32px, 6vw, 48px)", fontWeight: "700" }}>Mayank Gandhi</h1>
          <h2 style={{ margin: "8px 0 20px 0", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: "400", color: "#334155" }}>Senior iOS Engineer</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "clamp(12px, 2vw, 14px)", color: "#475569" }}>
            <a href="mailto:mayankgandhi50@gmail.com" style={{ color: "#475569", textDecoration: "none" }}>mayankgandhi50@gmail.com</a>
            <span>+91 7670946660</span>
            <a href="https://github.com/mayankgandhi" target="_blank" rel="noopener noreferrer" style={{ color: "#475569", textDecoration: "none" }}>github.com/mayankgandhi</a>
            <a href="https://linkedin.com/in/mayankgandhi98" target="_blank" rel="noopener noreferrer" style={{ color: "#475569", textDecoration: "none" }}>linkedin.com/in/mayankgandhi98</a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e5e7eb", padding: "12px 16px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => setActiveTab("about")} style={tabStyle(activeTab === "about")}>About</button>
          <button onClick={() => setActiveTab("experience")} style={tabStyle(activeTab === "experience")}>Experience</button>
          <button onClick={() => setActiveTab("skills")} style={tabStyle(activeTab === "skills")}>Skills</button>
          <button onClick={() => setActiveTab("apps")} style={tabStyle(activeTab === "apps")}>Apps</button>
          <button onClick={() => setActiveTab("blog")} style={tabStyle(activeTab === "blog")}>Blog</button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(20px, 4vw, 40px) 16px" }}>
        {activeTab === "about" && (
          <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <h2 style={{ marginTop: "0", fontSize: "clamp(22px, 4vw, 28px)", fontWeight: "600", color: "#1e293b" }}>Summary</h2>
            <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569", lineHeight: "1.8" }}>
              Senior iOS Engineer with 6+ years of expertise in architecting scalable native applications and modernising legacy codebases.
              Proven track record of driving $300K+ in cost savings and revenue impact while leading technical initiatives across teams of 4-200 engineers.
              Specialises in performance optimisation, modular architecture design, and mentoring teams in iOS best practices.
            </p>
            <div style={{ marginTop: "clamp(20px, 4vw, 32px)" }}>
              <h3 style={{ fontSize: "clamp(18px, 3vw, 20px)", fontWeight: "600", color: "#1e293b", marginBottom: "16px" }}>Education</h3>
              <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569", margin: "4px 0" }}><strong>B.S. Computer Science</strong>, GPA 3.45</p>
              <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569", margin: "4px 0" }}>University of Arizona, Spring 2019</p>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)" }}>
            {/* Radius */}
            <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", marginBottom: "16px", gap: "12px" }}>
                <div>
                  <h3 style={{ margin: "0", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "600", color: "#1e293b" }}>Senior iOS Engineer</h3>
                  <p style={{ margin: "4px 0", fontSize: "clamp(16px, 2.5vw, 18px)", color: "#3b82f6" }}>Radius</p>
                  <p style={{ margin: "4px 0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b" }}>Hyderabad, IN</p>
                </div>
                <p style={{ margin: "0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b", fontWeight: "500" }}>Feb '23 - Jul '25</p>
              </div>
              <ul style={{ margin: "0", paddingLeft: "20px", color: "#475569", fontSize: "clamp(13px, 2vw, 15px)" }}>
                <li style={{ marginBottom: "8px" }}>Architected multi-app ecosystem using Tuist for 3 applications, implementing shared design system and networking layer that reduced development time by 40% and eliminated code duplication across 4-person iOS team</li>
                <li style={{ marginBottom: "8px" }}>Optimised app performance through systematic profiling, achieving 30% reduction in launch time and 25% decrease in memory usage through identifying and removing memory leaks and caching strategies</li>
                <li style={{ marginBottom: "8px" }}>Built comprehensive real estate platform with multi-form offer management, DocuSign API integration, and automated workflows, reducing offer processing time by 40% and streamlining client engagement</li>
                <li style={{ marginBottom: "8px" }}>Developed interactive property mapping with polygon drawing and advanced filtering for 2M+ listings, enabling users to visualise and search with custom geographic boundaries</li>
                <li style={{ marginBottom: "8px" }}>Mentored developers through technical sessions on modern iOS architectures and led adoption of industry best practices</li>
              </ul>
            </div>

            {/* Compass */}
            <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", marginBottom: "16px", gap: "12px" }}>
                <div>
                  <h3 style={{ margin: "0", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "600", color: "#1e293b" }}>iOS Engineer II</h3>
                  <p style={{ margin: "4px 0", fontSize: "clamp(16px, 2.5vw, 18px)", color: "#3b82f6" }}>Compass</p>
                  <p style={{ margin: "4px 0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b" }}>Hyderabad, IN</p>
                </div>
                <p style={{ margin: "0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b", fontWeight: "500" }}>Jul '22 - Jan '23</p>
              </div>
              <ul style={{ margin: "0", paddingLeft: "20px", color: "#475569", fontSize: "clamp(13px, 2vw, 15px)" }}>
                <li style={{ marginBottom: "8px" }}>Led Swift modernisation initiative across 35-engineer iOS team, implementing Composable Architecture (TCA) and improving code organization, scalability, and maintainability</li>
                <li style={{ marginBottom: "8px" }}>Reduced infrastructure costs by $200K annually through strategic native routing implementation and branch.io integration for deep linking and app banners</li>
                <li style={{ marginBottom: "8px" }}>Integrated Core ML client targeting system driving $100M+ in annual revenue through cross-functional collaboration with product, data science, and business teams</li>
                <li style={{ marginBottom: "8px" }}>Established technical documentation standards and provided critical production support as primary on-call engineer</li>
              </ul>
            </div>

            {/* Grab */}
            <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", marginBottom: "16px", gap: "12px" }}>
                <div>
                  <h3 style={{ margin: "0", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "600", color: "#1e293b" }}>iOS Engineer</h3>
                  <p style={{ margin: "4px 0", fontSize: "clamp(16px, 2.5vw, 18px)", color: "#3b82f6" }}>Grab</p>
                  <p style={{ margin: "4px 0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b" }}>Hyderabad, IN</p>
                </div>
                <p style={{ margin: "0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b", fontWeight: "500" }}>Jan '20 - Jul '22</p>
              </div>
              <ul style={{ margin: "0", paddingLeft: "20px", color: "#475569", fontSize: "clamp(13px, 2vw, 15px)" }}>
                <li style={{ marginBottom: "8px" }}>Architected and delivered risk management features reaching 10M+ users through rigorous A/B testing and data-driven optimisation within 200-engineer iOS team</li>
                <li style={{ marginBottom: "8px" }}>Implemented complex multi-entry point features using RIBs architecture while maintaining code modularity and achieving high code coverage using tests</li>
                <li style={{ marginBottom: "8px" }}>Drove technical excellence through comprehensive documentation standards and served as primary on-call engineer for critical Risk team initiatives</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <div style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
              <h3 style={{ marginTop: "0", fontSize: "clamp(18px, 3vw, 20px)", fontWeight: "600", color: "#1e293b", marginBottom: "12px" }}>Languages</h3>
              <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569" }}>Java, Swift, Objective-C, Go, HTML, CSS, SQL</p>
            </div>
            <div style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
              <h3 style={{ marginTop: "0", fontSize: "clamp(18px, 3vw, 20px)", fontWeight: "600", color: "#1e293b", marginBottom: "12px" }}>Frameworks</h3>
              <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569" }}>SwiftUI, Combine, UIKit, AVFoundation, CoreML, CoreData, MapKit, Vision, Lottie, Composable Architecture (TCA)</p>
            </div>
            <div>
              <h3 style={{ marginTop: "0", fontSize: "clamp(18px, 3vw, 20px)", fontWeight: "600", color: "#1e293b", marginBottom: "12px" }}>Tools & Platforms</h3>
              <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#475569" }}>Xcode, Instruments, MetricKit, CocoaPods, SPM, TestFlight, Tuist, Git, JIRA</p>
            </div>
          </div>
        )}

        {activeTab === "apps" && (
          <div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: "600", color: "#1e293b", marginBottom: "clamp(16px, 3vw, 24px)" }}>Personal Projects</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
              <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "0", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "600", color: "#1e293b" }}>Cashew - Credit Card Tracker</h3>
                <p style={{ color: "#475569", marginBottom: "16px", fontSize: "clamp(14px, 2vw, 16px)" }}>
                  Published iOS financial management app solving bill tracking and payment oversight challenges.
                  Built with modular Tuist architecture, CoreData persistence, push notifications for payment alerts,
                  home screen widgets, and Combine framework for reactive data binding.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    to="/cashew"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#007AFF",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontSize: "clamp(13px, 2vw, 14px)",
                      fontWeight: "500"
                    }}
                  >
                    Learn More
                  </Link>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      backgroundColor: "#f1f5f9",
                      color: "#334155",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontSize: "clamp(13px, 2vw, 14px)",
                      fontWeight: "500"
                    }}
                  >
                    App Store
                  </a>
                </div>
              </div>

              <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginTop: "0", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "600", color: "#1e293b" }}>Walnut - Medical Documents & Medications Manager</h3>
                <p style={{ color: "#475569", marginBottom: "16px", fontSize: "clamp(14px, 2vw, 16px)" }}>
                  Personal wellness app addressing medication adherence and prescription management.
                  Features automatic prescription parsing, medication reminders, follow-up scheduling,
                  and real-time health metrics tracking using SwiftUI and Swift Data.
                </p>
                <Link
                  to="/walnut"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#007AFF",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "clamp(13px, 2vw, 14px)",
                    fontWeight: "500"
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: "600", color: "#1e293b", marginBottom: "clamp(16px, 3vw, 24px)" }}>Blog</h2>
            {posts.length === 0 ? (
              <div style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", textAlign: "center" }}>
                <p style={{ color: "#64748b", fontSize: "clamp(14px, 2vw, 16px)" }}>No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)" }}>
                {posts.map((post) => (
                  <div key={post.slug} style={{ backgroundColor: "white", padding: "clamp(20px, 4vw, 32px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                    <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <h3 style={{ marginTop: "0", marginBottom: "8px", fontSize: "clamp(18px, 3vw, 22px)", fontWeight: "600", color: "#1e293b", cursor: "pointer" }}>
                        {post.title}
                      </h3>
                    </Link>
                    <p style={{ margin: "8px 0", fontSize: "clamp(12px, 2vw, 14px)", color: "#64748b" }}>
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    {post.description && (
                      <p style={{ margin: "12px 0", fontSize: "clamp(14px, 2vw, 16px)", color: "#475569", lineHeight: "1.6" }}>
                        {post.description}
                      </p>
                    )}
                    <Link
                      to={`/blog/${post.slug}`}
                      style={{
                        display: "inline-block",
                        marginTop: "12px",
                        color: "#007AFF",
                        fontSize: "clamp(13px, 2vw, 14px)",
                        fontWeight: "500",
                        textDecoration: "none"
                      }}
                    >
                      Read more →
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}