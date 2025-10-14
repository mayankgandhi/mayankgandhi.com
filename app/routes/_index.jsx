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

  const tabClass = (isActive) => (isActive ? "tab is-active" : "tab");

  return (
    <div>
      {/* Header */}
      <header className="site-header">
        <div className="container">
          <h1 className="site-title">Mayank Gandhi</h1>
          <h2 className="site-subtitle">Senior iOS Engineer</h2>
          <div className="contact">
            <a href="mailto:mayankgandhi50@gmail.com">mayankgandhi50@gmail.com</a>
            <span>+91 7670946660</span>
            <a href="https://github.com/mayankgandhi" target="_blank" rel="noopener noreferrer">github.com/mayankgandhi</a>
            <a href="https://linkedin.com/in/mayankgandhi98" target="_blank" rel="noopener noreferrer">linkedin.com/in/mayankgandhi98</a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="site-nav">
        <div className="container">
          <div className="tabs">
            <button onClick={() => setActiveTab("about")} className={tabClass(activeTab === "about")}>
              About
            </button>
            <button onClick={() => setActiveTab("experience")} className={tabClass(activeTab === "experience")}>
              Experience
            </button>
            <button onClick={() => setActiveTab("skills")} className={tabClass(activeTab === "skills")}>
              Skills
            </button>
            <button onClick={() => setActiveTab("apps")} className={tabClass(activeTab === "apps")}>
              Apps
            </button>
            <button onClick={() => setActiveTab("blog")} className={tabClass(activeTab === "blog")}>
              Blog
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {activeTab === "about" && (
            <div className="card">
              <h2 className="section-heading">Summary</h2>
              <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8 }}>
                Senior iOS Engineer with 6+ years of expertise in architecting scalable native applications and modernising legacy codebases.
                Proven track record of driving $300K+ in cost savings and revenue impact while leading technical initiatives across teams of 4-200 engineers.
                Specialises in performance optimisation, modular architecture design, and mentoring teams in iOS best practices.
              </p>
              <div style={{ marginTop: "clamp(20px, 4vw, 32px)" }}>
                <h3 className="subheading" style={{ marginBottom: 16 }}>Education</h3>
                <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)", margin: "4px 0" }}>
                  <strong>B.S. Computer Science</strong>, GPA 3.45
                </p>
                <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)", margin: "4px 0" }}>
                  University of Arizona, Spring 2019
                </p>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="stack">
              {/* Radius */}
              <div className="card">
                <div className="row row-between" style={{ marginBottom: 16 }}>
                  <div>
                    <h3 className="subheading" style={{ margin: 0 }}>Senior iOS Engineer</h3>
                    <p style={{ margin: "4px 0", fontSize: "clamp(16px, 2.5vw, 18px)", color: "var(--accent)" }}>Radius</p>
                    <p className="text-muted" style={{ margin: "4px 0", fontSize: "clamp(12px, 2vw, 14px)" }}>Hyderabad, IN</p>
                  </div>
                  <p className="text-muted" style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 500 }}>Feb '23 - Jul '25</p>
                </div>
                <ul className="text-muted" style={{ margin: 0, paddingLeft: 20, fontSize: "clamp(13px, 2vw, 15px)" }}>
                  <li style={{ marginBottom: 8 }}>Architected multi-app ecosystem using Tuist for 3 applications, implementing shared design system and networking layer that reduced development time by 40% and eliminated code duplication across 4-person iOS team</li>
                  <li style={{ marginBottom: 8 }}>Optimised app performance through systematic profiling, achieving 30% reduction in launch time and 25% decrease in memory usage through identifying and removing memory leaks and caching strategies</li>
                  <li style={{ marginBottom: 8 }}>Built comprehensive real estate platform with multi-form offer management, DocuSign API integration, and automated workflows, reducing offer processing time by 40% and streamlining client engagement</li>
                  <li style={{ marginBottom: 8 }}>Developed interactive property mapping with polygon drawing and advanced filtering for 2M+ listings, enabling users to visualise and search with custom geographic boundaries</li>
                  <li style={{ marginBottom: 8 }}>Mentored developers through technical sessions on modern iOS architectures and led adoption of industry best practices</li>
                </ul>
              </div>

              {/* Compass */}
              <div className="card">
                <div className="row row-between" style={{ marginBottom: 16 }}>
                  <div>
                    <h3 className="subheading" style={{ margin: 0 }}>iOS Engineer II</h3>
                    <p style={{ margin: "4px 0", fontSize: "clamp(16px, 2.5vw, 18px)", color: "var(--accent)" }}>Compass</p>
                    <p className="text-muted" style={{ margin: "4px 0", fontSize: "clamp(12px, 2vw, 14px)" }}>Hyderabad, IN</p>
                  </div>
                  <p className="text-muted" style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 500 }}>Jul '22 - Jan '23</p>
                </div>
                <ul className="text-muted" style={{ margin: 0, paddingLeft: 20, fontSize: "clamp(13px, 2vw, 15px)" }}>
                  <li style={{ marginBottom: 8 }}>Led Swift modernisation initiative across 35-engineer iOS team, implementing Composable Architecture (TCA) and improving code organization, scalability, and maintainability</li>
                  <li style={{ marginBottom: 8 }}>Reduced infrastructure costs by $200K annually through strategic native routing implementation and branch.io integration for deep linking and app banners</li>
                  <li style={{ marginBottom: 8 }}>Integrated Core ML client targeting system driving $100M+ in annual revenue through cross-functional collaboration with product, data science, and business teams</li>
                  <li style={{ marginBottom: 8 }}>Established technical documentation standards and provided critical production support as primary on-call engineer</li>
                </ul>
              </div>

              {/* Grab */}
              <div className="card">
                <div className="row row-between" style={{ marginBottom: 16 }}>
                  <div>
                    <h3 className="subheading" style={{ margin: 0 }}>iOS Engineer</h3>
                    <p style={{ margin: "4px 0", fontSize: "clamp(16px, 2.5vw, 18px)", color: "var(--accent)" }}>Grab</p>
                    <p className="text-muted" style={{ margin: "4px 0", fontSize: "clamp(12px, 2vw, 14px)" }}>Hyderabad, IN</p>
                  </div>
                  <p className="text-muted" style={{ margin: 0, fontSize: "clamp(12px, 2vw, 14px)", fontWeight: 500 }}>Jan '20 - Jul '22</p>
                </div>
                <ul className="text-muted" style={{ margin: 0, paddingLeft: 20, fontSize: "clamp(13px, 2vw, 15px)" }}>
                  <li style={{ marginBottom: 8 }}>Architected and delivered risk management features reaching 10M+ users through rigorous A/B testing and data-driven optimisation within 200-engineer iOS team</li>
                  <li style={{ marginBottom: 8 }}>Implemented complex multi-entry point features using RIBs architecture while maintaining code modularity and achieving high code coverage using tests</li>
                  <li style={{ marginBottom: 8 }}>Drove technical excellence through comprehensive documentation standards and served as primary on-call engineer for critical Risk team initiatives</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="card">
              <div style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
                <h3 className="subheading" style={{ marginBottom: 12 }}>Languages</h3>
                <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>Java, Swift, Objective-C, Go, HTML, CSS, SQL</p>
              </div>
              <div style={{ marginBottom: "clamp(20px, 4vw, 32px)" }}>
                <h3 className="subheading" style={{ marginBottom: 12 }}>Frameworks</h3>
                <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>SwiftUI, Combine, UIKit, AVFoundation, CoreML, CoreData, MapKit, Vision, Lottie, Composable Architecture (TCA)</p>
              </div>
              <div>
                <h3 className="subheading" style={{ marginBottom: 12 }}>Tools & Platforms</h3>
                <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>Xcode, Instruments, MetricKit, CocoaPods, SPM, TestFlight, Tuist, Git, JIRA</p>
              </div>
            </div>
          )}

          {activeTab === "apps" && (
            <div>
              <h2 className="section-heading" style={{ marginBottom: "clamp(16px, 3vw, 24px)" }}>Personal Projects</h2>
              <div className="cards-grid">
                <div className="card">
                  <h3 className="subheading">Cashew - Credit Card Tracker</h3>
                  <p className="text-muted" style={{ marginBottom: 16, fontSize: "clamp(14px, 2vw, 16px)" }}>
                    Published iOS financial management app solving bill tracking and payment oversight challenges.
                    Built with modular Tuist architecture, CoreData persistence, push notifications for payment alerts,
                    home screen widgets, and Combine framework for reactive data binding.
                  </p>
                  <div className="row" style={{ gap: 12, flexWrap: "wrap" }}>
                    <Link to="/cashew" className="btn btn-primary">Learn More</Link>
                    <a href="#" className="btn btn-secondary">App Store</a>
                  </div>
                </div>

                <div className="card">
                  <h3 className="subheading">Walnut - Medical Documents & Medications Manager</h3>
                  <p className="text-muted" style={{ marginBottom: 16, fontSize: "clamp(14px, 2vw, 16px)" }}>
                    Personal wellness app addressing medication adherence and prescription management.
                    Features automatic prescription parsing, medication reminders, follow-up scheduling,
                    and real-time health metrics tracking using SwiftUI and Swift Data.
                  </p>
                  <div className="row" style={{ gap: 12, flexWrap: "wrap" }}>
                    <Link to="/walnut" className="btn btn-primary">Learn More</Link>
                    <a href="#" className="btn btn-secondary">App Store</a>
                  </div>
                </div>

                <div className="card">
                  <h3 className="subheading">Ticker - Task & Reminder Manager</h3>
                  <p className="text-muted" style={{ marginBottom: 16, fontSize: "clamp(14px, 2vw, 16px)" }}>
                    Comprehensive alarm and reminder app helping users stay on top of daily tasks, important birthdays,
                    and medication schedules. Features customizable alarms, recurring reminders, smart notifications,
                    and an intuitive interface for managing all your important events in one place.
                  </p>
                  <div className="row" style={{ gap: 12, flexWrap: "wrap" }}>
                    <Link to="/ticker" className="btn btn-primary">Learn More</Link>
                    <a href="#" className="btn btn-secondary">App Store</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "blog" && (
            <div>
              <h2 className="section-heading" style={{ marginBottom: "clamp(16px, 3vw, 24px)" }}>Blog</h2>
              {posts.length === 0 ? (
                <div className="card" style={{ textAlign: "center" }}>
                  <p className="text-muted" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>No blog posts yet. Check back soon!</p>
                </div>
              ) : (
                <div className="stack">
                  {posts.map((post) => (
                    <div key={post.slug} className="card">
                      <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <h3 className="subheading" style={{ marginTop: 0, marginBottom: 8, cursor: "pointer" }}>
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-muted" style={{ margin: "8px 0", fontSize: "clamp(12px, 2vw, 14px)" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </p>
                      {post.description && (
                        <p className="text-muted" style={{ margin: "12px 0", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.6 }}>
                          {post.description}
                        </p>
                      )}
                      <Link to={`/blog/${post.slug}`} className="btn btn-secondary" style={{ marginTop: 12 }}>
                        Read more →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}