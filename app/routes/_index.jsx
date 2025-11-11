import { Link, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import { getPosts } from "../utils/posts.server";

export const loader = async () => {
  const posts = await getPosts();
  return { posts };
};

const SKILLS_DATA = {
  languages: ["Swift", "Objective-C", "Java", "Go", "SQL", "HTML", "CSS"],
  frameworks: ["SwiftUI", "Combine", "UIKit", "AVFoundation", "CoreML", "CoreData", "MapKit", "Vision", "Lottie", "TCA"],
  tools: ["Xcode", "Instruments", "MetricKit", "CocoaPods", "SPM", "TestFlight", "Tuist", "Git", "JIRA"]
};

const SOCIAL_LINKS = [
  { icon: "GitHub", href: "https://github.com/mayankgandhi", label: "GitHub" },
  { icon: "LinkedIn", href: "https://linkedin.com/in/mayankgandhi98", label: "LinkedIn" },
  { icon: "Email", href: "mailto:mayankgandhi50@gmail.com", label: "Email" }
];

const EXPERIENCE_DATA = [
  {
    title: "Senior iOS Engineer",
    company: "Radius",
    location: "Hyderabad, IN",
    period: "Feb '23 - Jul '25",
    highlights: [
      "Architected multi-app ecosystem using Tuist for 3 applications, implementing shared design system and networking layer that reduced development time by 40%",
      "Optimised app performance through systematic profiling, achieving 30% reduction in launch time and 25% decrease in memory usage",
      "Built comprehensive real estate platform with multi-form offer management and DocuSign API integration",
      "Developed interactive property mapping with polygon drawing for 2M+ listings",
      "Mentored developers through technical sessions on modern iOS architectures"
    ]
  },
  {
    title: "iOS Engineer II",
    company: "Compass",
    location: "Hyderabad, IN",
    period: "Jul '22 - Jan '23",
    highlights: [
      "Led Swift modernisation initiative across 35-engineer iOS team implementing Composable Architecture (TCA)",
      "Reduced infrastructure costs by $200K annually through strategic native routing implementation",
      "Integrated Core ML client targeting system driving $100M+ in annual revenue",
      "Established technical documentation standards and provided critical production support"
    ]
  },
  {
    title: "iOS Engineer",
    company: "Grab",
    location: "Hyderabad, IN",
    period: "Jan '20 - Jul '22",
    highlights: [
      "Architected and delivered risk management features reaching 10M+ users",
      "Implemented complex multi-entry point features using RIBs architecture",
      "Drove technical excellence through comprehensive documentation standards"
    ]
  }
];

const PROJECTS_DATA = [
  { name: "Cashew", subtitle: "Credit Card Tracker", icon: "💳", desc: "Published iOS financial management app solving bill tracking and payment oversight challenges. Built with modular Tuist architecture, CoreData persistence, push notifications for payment alerts, home screen widgets, and Combine framework for reactive data binding.", link: "/cashew" },
  { name: "Walnut", subtitle: "Medical Documents Manager", icon: "🏥", desc: "Personal wellness app addressing medication adherence and prescription management. Features automatic prescription parsing, medication reminders, follow-up scheduling, and real-time health metrics tracking using SwiftUI and Swift Data.", link: "/walnut" },
  { name: "Ticker", subtitle: "Task & Reminder Manager", icon: "⏰", desc: "Comprehensive alarm and reminder app helping users stay on top of daily tasks, important birthdays, and medication schedules. Features customizable alarms, recurring reminders, smart notifications, and an intuitive interface.", link: "/ticker" }
];

const STATS_CONFIG = [
  { value: 6, label: "Years Experience", suffix: "+" },
  { value: 300, label: "Cost Savings", prefix: "$", suffix: "K+" },
  { value: 10, label: "Million Users", suffix: "M+" },
  { value: 3, label: "Major Projects", suffix: "" }
];

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, sans-serif",
      lineHeight: "1.7",
      backgroundColor: "#fff",
      color: "#333"
    }}>
      {/* Header */}
      <header style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "80px 24px 60px",
        textAlign: "center"
      }}>
        <div style={{
          display: "inline-block",
          padding: "6px 12px",
          background: "#f5f5f5",
          borderRadius: "4px",
          fontSize: "12px",
          marginBottom: "24px",
          color: "#666",
          textTransform: "uppercase",
          letterSpacing: "0.05em"
        }}>
          Available for Opportunities
        </div>

        <h1 style={{
          margin: "0 0 16px 0",
          fontSize: "48px",
          fontWeight: "700",
          color: "#000",
          letterSpacing: "-0.02em"
        }}>
          Mayank Gandhi
        </h1>

        <h2 style={{
          margin: "0 0 32px 0",
          fontSize: "24px",
          fontWeight: "400",
          color: "#666"
        }}>
          Senior iOS Engineer
        </h2>

        <p style={{
          fontSize: "18px",
          color: "#666",
          maxWidth: "600px",
          margin: "0 auto 40px",
          lineHeight: "1.7"
        }}>
          Crafting exceptional iOS experiences with 6+ years of expertise in scalable architecture,
          performance optimization, and team leadership
        </p>

        <div style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "32px"
        }}>
          <a
            href="mailto:mayankgandhi50@gmail.com"
            style={{
              padding: "12px 24px",
              background: "#000",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              background: "#f5f5f5",
              color: "#000",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            View Projects
          </a>
        </div>

        <div style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center"
        }}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#666",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500"
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </header>

      {/* Stats Section */}
      <section style={{
        padding: "60px 24px",
        background: "#fafafa",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "40px",
          textAlign: "center"
        }}>
          {STATS_CONFIG.map((stat, index) => (
            <div key={index}>
              <div style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#000",
                marginBottom: "8px"
              }}>
                {stat.prefix || ""}{stat.value}{stat.suffix || ""}
              </div>
              <div style={{
                fontSize: "13px",
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "80px 24px" }}>
        {/* About Section */}
        <section id="about" style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}>
            About
          </h2>

          <p style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.8",
            marginBottom: "32px"
          }}>
            Senior iOS Engineer with <strong>6+ years</strong> of expertise in architecting scalable native applications and modernising legacy codebases. Proven track record of driving <strong>$300K+</strong> in cost savings and revenue impact while leading technical initiatives across teams of 4-200 engineers. Specialises in performance optimisation, modular architecture design, and mentoring teams in iOS best practices.
          </p>

          <div style={{
            padding: "24px",
            background: "#fafafa",
            borderRadius: "4px",
            border: "1px solid #eee"
          }}>
            <h3 style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#000",
              margin: "0 0 8px 0"
            }}>
              Education
            </h3>
            <p style={{ fontSize: "16px", color: "#666", margin: "4px 0" }}>
              B.S. Computer Science, GPA 3.45
            </p>
            <p style={{ fontSize: "14px", color: "#999", margin: "4px 0" }}>
              University of Arizona, Spring 2019
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}>
            Experience
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={index} style={{
                paddingBottom: "40px",
                borderBottom: index < EXPERIENCE_DATA.length - 1 ? "1px solid #eee" : "none"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  flexWrap: "wrap",
                  marginBottom: "16px",
                  gap: "12px"
                }}>
                  <div>
                    <h3 style={{
                      margin: "0 0 8px 0",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#000"
                    }}>
                      {job.title}
                    </h3>
                    <p style={{
                      margin: "0 0 4px 0",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#666"
                    }}>
                      {job.company}
                    </p>
                    <p style={{ margin: "0", fontSize: "14px", color: "#999" }}>
                      {job.location}
                    </p>
                  </div>
                  <span style={{
                    padding: "4px 12px",
                    background: "#f5f5f5",
                    borderRadius: "4px",
                    fontSize: "13px",
                    color: "#666",
                    fontWeight: "500"
                  }}>
                    {job.period}
                  </span>
                </div>
                <ul style={{
                  margin: "0",
                  paddingLeft: "20px",
                  color: "#666",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}>
                  {job.highlights.map((highlight, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}>
            Skills
          </h2>

          {Object.entries(SKILLS_DATA).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "32px" }}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#000",
                marginBottom: "16px",
                textTransform: "capitalize"
              }}>
                {category}
              </h3>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px"
              }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 12px",
                      background: "#f5f5f5",
                      borderRadius: "4px",
                      color: "#666",
                      fontSize: "14px",
                      fontWeight: "500"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}>
            Projects
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.name}
                style={{
                  padding: "24px",
                  background: "#fafafa",
                  borderRadius: "4px",
                  border: "1px solid #eee"
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px"
                }}>
                  <span style={{ fontSize: "24px" }}>{project.icon}</span>
                  <h3 style={{
                    margin: "0",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#000"
                  }}>
                    {project.name}
                  </h3>
                </div>

                <p style={{
                  fontSize: "14px",
                  color: "#999",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  {project.subtitle}
                </p>

                <p style={{
                  color: "#666",
                  marginBottom: "16px",
                  fontSize: "16px",
                  lineHeight: "1.7"
                }}>
                  {project.desc}
                </p>

                <Link
                  to={project.link}
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "500",
                    textDecoration: "none",
                    borderBottom: "1px solid #000"
                  }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}>
            Blog
          </h2>

          {posts.length === 0 ? (
            <div style={{
              padding: "60px 24px",
              background: "#fafafa",
              borderRadius: "4px",
              border: "1px solid #eee",
              textAlign: "center"
            }}>
              <p style={{ color: "#666", fontSize: "16px", margin: 0 }}>
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  style={{
                    padding: "24px",
                    background: "#fafafa",
                    borderRadius: "4px",
                    border: "1px solid #eee",
                    textDecoration: "none",
                    display: "block"
                  }}
                >
                  <h3 style={{
                    marginTop: "0",
                    marginBottom: "8px",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#000"
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    margin: "0 0 12px 0",
                    fontSize: "13px",
                    color: "#999"
                  }}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </p>
                  {post.description && (
                    <p style={{
                      margin: "0",
                      fontSize: "16px",
                      color: "#666",
                      lineHeight: "1.7"
                    }}>
                      {post.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: "#fafafa",
        borderTop: "1px solid #eee",
        padding: "40px 24px",
        textAlign: "center"
      }}>
        <p style={{
          margin: "0",
          fontSize: "14px",
          color: "#999"
        }}>
          © 2025 Mayank Gandhi
        </p>
      </footer>
    </div>
  );
}
