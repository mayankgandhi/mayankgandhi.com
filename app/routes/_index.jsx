import { Link, useLoaderData } from "@remix-run/react";
import { useState, useEffect, useRef } from "react";
import { getPosts } from "../utils/posts.server";

export const loader = async () => {
  const posts = await getPosts();
  return { posts };
};

export default function Index() {
  const { posts } = useLoaderData();
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ years: 0, savings: 0, users: 0, projects: 0 });

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated counters
  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        setter(current);
        if (progress === 1) clearInterval(timer);
      }, 16);
    };

    setTimeout(() => {
      animateValue(0, 6, 2000, (val) => setStats(prev => ({ ...prev, years: val })));
      animateValue(0, 300, 2000, (val) => setStats(prev => ({ ...prev, savings: val })));
      animateValue(0, 10, 2000, (val) => setStats(prev => ({ ...prev, users: val })));
      animateValue(0, 3, 1500, (val) => setStats(prev => ({ ...prev, projects: val })));
    }, 500);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "projects", "blog"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = {
    languages: ["Swift", "Objective-C", "Java", "Go", "SQL", "HTML", "CSS"],
    frameworks: ["SwiftUI", "Combine", "UIKit", "AVFoundation", "CoreML", "CoreData", "MapKit", "Vision", "Lottie", "TCA"],
    tools: ["Xcode", "Instruments", "MetricKit", "CocoaPods", "SPM", "TestFlight", "Tuist", "Git", "JIRA"]
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh", backgroundColor: "#0a0a0f", position: "relative", overflow: "hidden" }}>
      {/* Animated background grid */}
      <div className="bg-grid" style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Floating shapes */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        <div className="floating-shape" style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: "transform 0.5s ease-out"
        }} />
        <div className="floating-shape" style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(118, 75, 162, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          transition: "transform 0.5s ease-out"
        }} />
        <div className="floating-shape" style={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(65px)",
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
          transition: "transform 0.5s ease-out"
        }} />
      </div>

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Enhanced Floating Navigation */}
        <nav style={{
          position: "fixed",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "28px 24px",
          background: "rgba(15, 15, 25, 0.6)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          border: "1px solid rgba(102, 126, 234, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }}
        className="floating-nav">
          {[
            { id: "about", label: "About", icon: "👤" },
            { id: "experience", label: "Experience", icon: "💼" },
            { id: "skills", label: "Skills", icon: "⚡" },
            { id: "projects", label: "Projects", icon: "🚀" },
            { id: "blog", label: "Blog", icon: "📝" }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "0",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative"
              }}
              className="nav-button"
              aria-label={`Navigate to ${section.label}`}
            >
              <span style={{
                fontSize: "18px",
                opacity: activeSection === section.id ? 1 : 0.4,
                transition: "all 0.3s ease"
              }}>
                {section.icon}
              </span>
              <div style={{
                width: activeSection === section.id ? "50px" : "24px",
                height: "3px",
                background: activeSection === section.id
                  ? "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(148, 163, 184, 0.3)",
                borderRadius: "2px",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: activeSection === section.id ? "0 0 12px rgba(102, 126, 234, 0.6)" : "none"
              }} />
              <span style={{
                fontSize: "13px",
                color: activeSection === section.id ? "#667eea" : "#94a3b8",
                fontWeight: activeSection === section.id ? "600" : "normal",
                opacity: activeSection === section.id ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
                textShadow: activeSection === section.id ? "0 0 8px rgba(102, 126, 234, 0.5)" : "none"
              }}>
                {section.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Hero Header */}
        <header style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "40px 24px",
          background: "radial-gradient(ellipse at top, rgba(102, 126, 234, 0.15) 0%, transparent 50%)",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, transparent 0%, rgba(118, 75, 162, 0.05) 50%, transparent 100%)",
            pointerEvents: "none"
          }} />

          <div style={{ maxWidth: "1000px", width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(102, 126, 234, 0.1)",
              border: "1px solid rgba(102, 126, 234, 0.3)",
              borderRadius: "30px",
              marginBottom: "32px",
              animation: "fadeInUp 0.8s ease-out",
              backdropFilter: "blur(10px)"
            }}>
              <span style={{ color: "#667eea", fontSize: "14px", fontWeight: "600", letterSpacing: "0.05em" }}>
                ✨ AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h1 style={{
              margin: "0 0 24px 0",
              fontSize: "clamp(48px, 8vw, 80px)",
              fontWeight: "900",
              background: "linear-gradient(135deg, #ffffff 0%, #667eea 50%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
              animation: "fadeInUp 0.8s ease-out 0.1s both",
              textShadow: "0 0 80px rgba(102, 126, 234, 0.3)"
            }}>
              Mayank Gandhi
            </h1>

            <h2 style={{
              margin: "0 0 40px 0",
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "0.02em",
              animation: "fadeInUp 0.8s ease-out 0.2s both"
            }}>
              Senior iOS Engineer
            </h2>

            <p style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "rgba(255, 255, 255, 0.5)",
              maxWidth: "700px",
              margin: "0 auto 48px",
              lineHeight: "1.8",
              animation: "fadeInUp 0.8s ease-out 0.3s both"
            }}>
              Crafting exceptional iOS experiences with 6+ years of expertise in scalable architecture,
              performance optimization, and team leadership
            </p>

            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              animation: "fadeInUp 0.8s ease-out 0.4s both"
            }}>
              <a
                href="mailto:mayankgandhi50@gmail.com"
                className="cta-button"
                style={{
                  padding: "16px 36px",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 4px 24px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <span>Get In Touch</span>
                <span style={{ fontSize: "20px" }}>→</span>
              </a>
              <a
                href="#projects"
                className="secondary-button"
                style={{
                  padding: "16px 36px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "rgba(255, 255, 255, 0.9)",
                  textDecoration: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease"
                }}
              >
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "48px",
              animation: "fadeInUp 0.8s ease-out 0.5s both"
            }}>
              {[
                { icon: "💻", href: "https://github.com/mayankgandhi", label: "GitHub" },
                { icon: "💼", href: "https://linkedin.com/in/mayankgandhi98", label: "LinkedIn" },
                { icon: "📧", href: "mailto:mayankgandhi50@gmail.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    fontSize: "20px",
                    transition: "all 0.3s ease",
                    backdropFilter: "blur(10px)"
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite"
          }}>
            <div style={{
              width: "30px",
              height: "50px",
              border: "2px solid rgba(102, 126, 234, 0.3)",
              borderRadius: "15px",
              position: "relative"
            }}>
              <div style={{
                width: "6px",
                height: "10px",
                background: "#667eea",
                borderRadius: "3px",
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "scrollIndicator 2s infinite"
              }} />
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section style={{
          padding: "80px 24px",
          background: "rgba(15, 15, 25, 0.5)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(102, 126, 234, 0.1)",
          borderBottom: "1px solid rgba(102, 126, 234, 0.1)"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "40px"
            }}>
              {[
                { value: stats.years, label: "Years Experience", suffix: "+" },
                { value: stats.savings, label: "Cost Savings", prefix: "$", suffix: "K+" },
                { value: stats.users, label: "Million Users", suffix: "M+" },
                { value: stats.projects, label: "Major Projects", suffix: "" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="stat-card"
                  style={{
                    textAlign: "center",
                    padding: "32px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                    borderRadius: "16px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{
                    fontSize: "clamp(36px, 5vw, 48px)",
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "12px",
                    fontVariantNumeric: "tabular-nums"
                  }}>
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: "600"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 24px" }}>
          {/* About Section */}
          <section
            id="about"
            style={{
              marginBottom: "160px",
              scrollMarginTop: "40px",
              opacity: isVisible.about ? 1 : 0,
              transform: isVisible.about ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{ marginBottom: "60px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}>
                About Me
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto",
                borderRadius: "2px"
              }} />
            </div>

            <div className="glass-card" style={{
              background: "rgba(15, 15, 25, 0.6)",
              padding: "60px",
              borderRadius: "24px",
              border: "1px solid rgba(102, 126, 234, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(60px)",
                pointerEvents: "none"
              }} />

              <p style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.8",
                marginBottom: "48px",
                position: "relative"
              }}>
                Senior iOS Engineer with <strong style={{ color: "#667eea" }}>6+ years</strong> of expertise in architecting scalable native applications and modernising legacy codebases. Proven track record of driving <strong style={{ color: "#667eea" }}>$300K+</strong> in cost savings and revenue impact while leading technical initiatives across teams of 4-200 engineers. Specialises in performance optimisation, modular architecture design, and mentoring teams in iOS best practices.
              </p>

              <div style={{
                padding: "40px",
                background: "rgba(102, 126, 234, 0.05)",
                borderRadius: "20px",
                border: "1px solid rgba(102, 126, 234, 0.15)",
                position: "relative"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px"
                }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)"
                  }}>
                    🎓
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 0.9)",
                      margin: "0 0 4px 0"
                    }}>
                      Education
                    </h3>
                  </div>
                </div>
                <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)", margin: "8px 0", fontWeight: "600" }}>
                  B.S. Computer Science, GPA 3.45
                </p>
                <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.5)", margin: "8px 0" }}>
                  University of Arizona, Spring 2019
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section - Timeline */}
          <section
            id="experience"
            style={{
              marginBottom: "160px",
              scrollMarginTop: "40px",
              opacity: isVisible.experience ? 1 : 0,
              transform: isVisible.experience ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{ marginBottom: "60px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}>
                Experience Journey
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto",
                borderRadius: "2px"
              }} />
            </div>

            <div style={{ position: "relative", paddingLeft: "60px" }}>
              {/* Timeline line */}
              <div style={{
                position: "absolute",
                left: "28px",
                top: "0",
                bottom: "0",
                width: "2px",
                background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
                boxShadow: "0 0 10px rgba(102, 126, 234, 0.5)"
              }} />

              {[
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
              ].map((job, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  style={{
                    marginBottom: "60px",
                    position: "relative"
                  }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: "absolute",
                    left: "-46px",
                    top: "8px",
                    width: "16px",
                    height: "16px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "50%",
                    border: "3px solid #0a0a0f",
                    boxShadow: "0 0 20px rgba(102, 126, 234, 0.8)"
                  }} />

                  <div className="glass-card" style={{
                    background: "rgba(15, 15, 25, 0.6)",
                    padding: "40px",
                    borderRadius: "20px",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(20px)",
                    transition: "all 0.3s ease"
                  }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      flexWrap: "wrap",
                      marginBottom: "24px",
                      gap: "16px"
                    }}>
                      <div>
                        <h3 style={{
                          margin: "0 0 12px 0",
                          fontSize: "clamp(20px, 3vw, 26px)",
                          fontWeight: "700",
                          color: "rgba(255, 255, 255, 0.95)"
                        }}>
                          {job.title}
                        </h3>
                        <p style={{
                          margin: "0 0 6px 0",
                          fontSize: "clamp(18px, 2.5vw, 22px)",
                          fontWeight: "600",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          {job.company}
                        </p>
                        <p style={{ margin: "0", fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>
                          📍 {job.location}
                        </p>
                      </div>
                      <span style={{
                        padding: "8px 20px",
                        background: "rgba(102, 126, 234, 0.1)",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        borderRadius: "10px",
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontWeight: "600"
                      }}>
                        {job.period}
                      </span>
                    </div>
                    <ul style={{
                      margin: "0",
                      paddingLeft: "24px",
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "16px",
                      lineHeight: "1.8"
                    }}>
                      {job.highlights.map((highlight, i) => (
                        <li key={i} style={{ marginBottom: "12px" }}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section - Tag Cloud */}
          <section
            id="skills"
            style={{
              marginBottom: "160px",
              scrollMarginTop: "40px",
              opacity: isVisible.skills ? 1 : 0,
              transform: isVisible.skills ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{ marginBottom: "60px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}>
                Skills & Expertise
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto",
                borderRadius: "2px"
              }} />
            </div>

            {Object.entries(skills).map(([category, items], catIndex) => (
              <div key={category} style={{ marginBottom: "48px" }}>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "24px",
                  textTransform: "capitalize",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <span style={{
                    width: "40px",
                    height: "40px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px"
                  }}>
                    {catIndex === 0 ? "💻" : catIndex === 1 ? "📱" : "🛠️"}
                  </span>
                  {category}
                </h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px"
                }}>
                  {items.map((skill, index) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{
                        padding: "12px 24px",
                        background: "rgba(102, 126, 234, 0.1)",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        borderRadius: "12px",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "15px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        backdropFilter: "blur(10px)",
                        animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
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
          <section
            id="projects"
            style={{
              marginBottom: "160px",
              scrollMarginTop: "40px",
              opacity: isVisible.projects ? 1 : 0,
              transform: isVisible.projects ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{ marginBottom: "60px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}>
                Featured Projects
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto",
                borderRadius: "2px"
              }} />
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
              gap: "32px"
            }}>
              {[
                { name: "Cashew", subtitle: "Credit Card Tracker", icon: "💳", desc: "Published iOS financial management app solving bill tracking and payment oversight challenges. Built with modular Tuist architecture, CoreData persistence, push notifications for payment alerts, home screen widgets, and Combine framework for reactive data binding.", link: "/cashew" },
                { name: "Walnut", subtitle: "Medical Documents Manager", icon: "🏥", desc: "Personal wellness app addressing medication adherence and prescription management. Features automatic prescription parsing, medication reminders, follow-up scheduling, and real-time health metrics tracking using SwiftUI and Swift Data.", link: "/walnut" },
                { name: "Ticker", subtitle: "Task & Reminder Manager", icon: "⏰", desc: "Comprehensive alarm and reminder app helping users stay on top of daily tasks, important birthdays, and medication schedules. Features customizable alarms, recurring reminders, smart notifications, and an intuitive interface.", link: "/ticker" }
              ].map((project, index) => (
                <div
                  key={project.name}
                  className="project-card glass-card"
                  style={{
                    background: "rgba(15, 15, 25, 0.6)",
                    padding: "40px",
                    borderRadius: "24px",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(20px)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                    boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)"
                  }} />

                  <div style={{
                    width: "72px",
                    height: "72px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                    marginBottom: "24px",
                    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                    transition: "transform 0.3s ease"
                  }}>
                    {project.icon}
                  </div>

                  <h3 style={{
                    marginTop: "0",
                    marginBottom: "8px",
                    fontSize: "26px",
                    fontWeight: "700",
                    color: "rgba(255, 255, 255, 0.95)"
                  }}>
                    {project.name}
                  </h3>

                  <p style={{
                    fontSize: "14px",
                    color: "rgba(102, 126, 234, 0.8)",
                    marginBottom: "20px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {project.subtitle}
                  </p>

                  <p style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    marginBottom: "32px",
                    fontSize: "16px",
                    lineHeight: "1.7",
                    flex: "1"
                  }}>
                    {project.desc}
                  </p>

                  <Link
                    to={project.link}
                    className="project-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#667eea",
                      fontSize: "16px",
                      fontWeight: "600",
                      textDecoration: "none",
                      transition: "gap 0.3s ease"
                    }}
                  >
                    <span>Explore Project</span>
                    <span style={{ transition: "transform 0.3s ease" }}>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section
            id="blog"
            style={{
              marginBottom: "100px",
              scrollMarginTop: "40px",
              opacity: isVisible.blog ? 1 : 0,
              transform: isVisible.blog ? "translateY(0)" : "translateY(60px)",
              transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{ marginBottom: "60px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ffffff 0%, #667eea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
                letterSpacing: "-0.02em"
              }}>
                Latest Articles
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto",
                borderRadius: "2px"
              }} />
            </div>

            {posts.length === 0 ? (
              <div className="glass-card" style={{
                background: "rgba(15, 15, 25, 0.6)",
                padding: "80px 40px",
                borderRadius: "24px",
                border: "1px solid rgba(102, 126, 234, 0.2)",
                textAlign: "center",
                backdropFilter: "blur(20px)"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "24px" }}>✍️</div>
                <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "20px", margin: 0 }}>
                  No blog posts yet. Check back soon!
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="blog-card glass-card"
                    style={{
                      background: "rgba(15, 15, 25, 0.6)",
                      padding: "48px",
                      borderRadius: "24px",
                      border: "1px solid rgba(102, 126, 234, 0.2)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
                      backdropFilter: "blur(20px)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      textDecoration: "none",
                      display: "block"
                    }}
                  >
                    <h3 style={{
                      marginTop: "0",
                      marginBottom: "16px",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "rgba(255, 255, 255, 0.95)",
                      transition: "color 0.3s ease"
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      margin: "0 0 20px 0",
                      fontSize: "14px",
                      color: "rgba(102, 126, 234, 0.7)",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em"
                    }}>
                      📅 {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                    {post.description && (
                      <p style={{
                        margin: "0",
                        fontSize: "18px",
                        color: "rgba(255, 255, 255, 0.6)",
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
          background: "rgba(15, 15, 25, 0.8)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(102, 126, 234, 0.1)",
          padding: "60px 24px",
          textAlign: "center"
        }}>
          <p style={{
            margin: "0",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.4)"
          }}>
            © 2025 Mayank Gandhi · Built with passion & precision
          </p>
        </footer>
      </div>

      {/* Advanced CSS */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes scrollIndicator {
          0%, 100% { top: 8px; opacity: 1; }
          50% { top: 20px; opacity: 0.3; }
        }

        @media (max-width: 768px) {
          .floating-nav {
            display: none;
          }
        }

        .glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.4);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(102, 126, 234, 0.3);
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-4px);
        }

        .skill-tag:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(102, 126, 234, 0.4);
        }

        .project-card:hover .project-link {
          gap: 12px;
        }

        .project-card:hover .project-link span:last-child {
          transform: translateX(4px);
        }

        .blog-card:hover {
          border-color: rgba(102, 126, 234, 0.4);
          transform: translateY(-8px);
        }

        .blog-card:hover h3 {
          color: #667eea;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(102, 126, 234, 0.4);
          transform: translateY(-3px);
        }

        .social-link:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.5);
          transform: translateY(-3px) scale(1.1);
        }

        .nav-button:hover div {
          width: 50px !important;
        }

        .nav-button:hover span:last-child {
          opacity: 1 !important;
        }

        .timeline-item:hover .glass-card {
          border-color: rgba(102, 126, 234, 0.4);
          transform: translateX(8px);
        }

        * {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(102, 126, 234, 0.3);
          color: white;
        }
      `}</style>
    </div>
  );
}
