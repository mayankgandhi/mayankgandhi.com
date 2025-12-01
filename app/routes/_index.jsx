import { Link, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";
import { getPosts } from "../utils/posts.server";

// ExpandableIconCard Component
function ExpandableIconCard({ 
  icon, 
  iconAlt, 
  isExpanded, 
  onExpand, 
  onCollapse,
  children,
  onClick,
  className = "",
  isMobile = false,
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}) {
  const [isHovered, setIsHovered] = useState(false);
  // On mobile, only use isExpanded. On desktop, use hover or expanded state
  const isActive = isMobile ? isExpanded : (isExpanded || isHovered);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: onClick ? "pointer" : "default"
      }}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
          if (onExpand) onExpand();
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
          if (!isExpanded && onCollapse) onCollapse();
        }
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: isActive ? "340px" : "100px",
          minHeight: isActive ? "auto" : "100px",
          padding: isActive ? "28px" : "16px",
          background: isActive 
            ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)" 
            : "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isActive 
            ? "2px solid rgba(102, 126, 234, 0.3)" 
            : "2px solid rgba(255,255,255,0.3)",
          borderRadius: "24px",
          boxShadow: isActive 
            ? "0 20px 60px rgba(102, 126, 234, 0.25), 0 0 0 1px rgba(255,255,255,0.5) inset" 
            : "0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.3) inset",
          transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: isActive ? "flex-start" : "center",
          justifyContent: isActive ? "flex-start" : "center",
          position: "relative"
        }}
      >
        {/* Gradient overlay on hover */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isActive ? gradient : "transparent",
            opacity: isActive ? 0.05 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
            borderRadius: "24px"
          }}
        />
        <img
          src={icon}
          alt={iconAlt}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
            padding: "16px",
            border: "2px solid rgba(102, 126, 234, 0.1)",
            flexShrink: 0,
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: isActive ? "scale(1.05) rotate(2deg)" : "scale(1) rotate(0deg)",
            boxShadow: isActive 
              ? "0 12px 40px rgba(102, 126, 234, 0.2)" 
              : "0 4px 16px rgba(0,0,0,0.08)",
            position: "relative",
            zIndex: 1
          }}
        />
        {isActive && (
          <div
            style={{
              width: "100%",
              marginTop: "20px",
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
              animation: "fadeInUp 0.4s ease-out",
              position: "relative",
              zIndex: 1
            }}
          >
            {children}
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .expandable-icon-card {
            width: 100% !important;
            max-width: 100% !important;
          }
          .expandable-icon-card > div {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        @media (hover: none) {
          .expandable-icon-card {
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  );
}

export const loader = async () => {
  const posts = await getPosts();
  return { posts };
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
    logo: "https://cdn.mayankgandhi.com/Radius_Logo_Dark__1_Logo.jpg",
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
    logo: "https://cdn.mayankgandhi.com/CompassInc_Logo.svg.png",
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
    logo: "https://cdn.mayankgandhi.com/Grab_(application)_logo.svg",
    highlights: [
      "Architected and delivered risk management features reaching 10M+ users",
      "Implemented complex multi-entry point features using RIBs architecture",
      "Drove technical excellence through comprehensive documentation standards"
    ]
  }
];

const PROJECTS_DATA = [
  { name: "Cashew", subtitle: "Credit Card Tracker", icon: "https://cdn.mayankgandhi.com/cashew-app-icon.png", desc: "Published iOS financial management app solving bill tracking and payment oversight challenges. Built with modular Tuist architecture, CoreData persistence, push notifications for payment alerts, home screen widgets, and Combine framework for reactive data binding.", link: "/cashew" },
  { name: "Walnut", subtitle: "Medical Documents Manager", icon: "https://cdn.mayankgandhi.com/walnut-app-icon.png", desc: "Personal wellness app addressing medication adherence and prescription management. Features automatic prescription parsing, medication reminders, follow-up scheduling, and real-time health metrics tracking using SwiftUI and Swift Data.", link: "/walnut" },
  { name: "Ticker", subtitle: "Task & Reminder Manager", icon: "https://cdn.mayankgandhi.com/ticker-app-icon.png", desc: "Comprehensive alarm and reminder app helping users stay on top of daily tasks, important birthdays, and medication schedules. Features customizable alarms, recurring reminders, smart notifications, and an intuitive interface.", link: "/ticker" }
];


export default function Index() {
  const { posts } = useLoaderData();
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleExperienceExpand = (index) => {
    if (isMobile) {
      setExpandedExperience(expandedExperience === index ? null : index);
    }
  };

  const handleProjectExpand = (index) => {
    if (isMobile) {
      setExpandedProject(expandedProject === index ? null : index);
    }
  };

  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif",
      lineHeight: "1.7",
      backgroundColor: "#0a0e27",
      background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1419 100%)",
      color: "#e2e8f0",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated background elements */}
      <div style={{
        position: "fixed",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background: "radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
        animation: "float 20s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>

      {/* Header */}
      <header style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "50px",
          fontSize: "13px",
          marginBottom: "32px",
          color: "#a5b4fc",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontWeight: "600",
          border: "1px solid rgba(102, 126, 234, 0.3)",
          boxShadow: "0 8px 32px rgba(102, 126, 234, 0.15)"
        }}>
          ✨ Available for Opportunities
        </div>

        <h1 style={{
          margin: "0 0 20px 0",
          fontSize: "clamp(42px, 8vw, 72px)",
          fontWeight: "800",
          background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #c084fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
          lineHeight: "1.1",
          textShadow: "0 0 40px rgba(165, 180, 252, 0.3)"
        }}>
          Mayank Gandhi
        </h1>

        <h2 style={{
          margin: "0 0 40px 0",
          fontSize: "clamp(20px, 4vw, 28px)",
          fontWeight: "500",
          color: "#cbd5e1",
          letterSpacing: "-0.01em"
        }}>
          Senior iOS Engineer
        </h2>

        <p style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "#94a3b8",
          maxWidth: "680px",
          margin: "0 auto 50px",
          lineHeight: "1.8"
        }}>
          Crafting exceptional iOS experiences with expertise in scalable architecture,
          performance optimization, and team leadership
        </p>

        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#cbd5e1",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
                padding: "12px 24px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                display: "inline-block"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(102, 126, 234, 0.2)";
                e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </header>


      {/* Main Content */}
      <main style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 24px 100px",
        position: "relative",
        zIndex: 1
      }}>

        {/* Experience Section */}
        <section id="experience" style={{ marginBottom: "100px" }}>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "48px",
            letterSpacing: "-0.02em",
            textAlign: "center"
          }}>
            Experience
          </h2>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
            alignItems: "flex-start"
          }}>
            {EXPERIENCE_DATA.map((job, index) => {
              const gradients = [
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              ];
              return (
                <ExpandableIconCard
                  key={index}
                  className="expandable-icon-card"
                  icon={job.logo}
                  iconAlt={`${job.company} logo`}
                  isExpanded={expandedExperience === index}
                  isMobile={isMobile}
                  gradient={gradients[index % gradients.length]}
                  onExpand={() => {
                    if (isMobile) {
                      setExpandedExperience(index);
                    }
                  }}
                  onCollapse={() => {
                    if (isMobile && expandedExperience === index) {
                      setExpandedExperience(null);
                    }
                  }}
                  onClick={() => handleExperienceExpand(index)}
                >
                  <div style={{ width: "100%" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginBottom: "20px"
                    }}>
                      <div style={{ flex: 1, minWidth: "200px" }}>
                        <h3 style={{
                          margin: "0 0 10px 0",
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#ffffff",
                          letterSpacing: "-0.01em"
                        }}>
                          {job.title}
                        </h3>
                        <p style={{
                          margin: "0 0 6px 0",
                          fontSize: "19px",
                          fontWeight: "600",
                          color: "#e2e8f0"
                        }}>
                          {job.company}
                        </p>
                        <p style={{ margin: "0 0 12px 0", fontSize: "15px", color: "#94a3b8" }}>
                          {job.location}
                        </p>
                        <span style={{
                          padding: "8px 16px",
                          background: "rgba(102, 126, 234, 0.2)",
                          backdropFilter: "blur(10px)",
                          borderRadius: "12px",
                          fontSize: "13px",
                          color: "#a5b4fc",
                          fontWeight: "600",
                          border: "1px solid rgba(102, 126, 234, 0.3)",
                          display: "inline-block"
                        }}>
                          {job.period}
                        </span>
                      </div>
                    </div>
                    <ul style={{
                      margin: "0",
                      paddingLeft: "24px",
                      color: "#cbd5e1",
                      fontSize: "15px",
                      lineHeight: "1.8",
                      maxHeight: "250px",
                      overflowY: "auto"
                    }}>
                      {job.highlights.map((highlight, i) => (
                        <li key={i} style={{ marginBottom: "10px", color: "#cbd5e1" }}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </ExpandableIconCard>
              );
            })}
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: "100px" }}>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "48px",
            letterSpacing: "-0.02em",
            textAlign: "center"
          }}>
            Projects
          </h2>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            justifyContent: "center",
            alignItems: "flex-start"
          }}>
            {PROJECTS_DATA.map((project, index) => {
              const gradients = [
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              ];
              return (
                <ExpandableIconCard
                  key={project.name}
                  className="expandable-icon-card"
                  icon={project.icon}
                  iconAlt={`${project.name} icon`}
                  isExpanded={expandedProject === index}
                  isMobile={isMobile}
                  gradient={gradients[index % gradients.length]}
                  onExpand={() => {
                    if (isMobile) {
                      setExpandedProject(index);
                    }
                  }}
                  onCollapse={() => {
                    if (isMobile && expandedProject === index) {
                      setExpandedProject(null);
                    }
                  }}
                  onClick={() => handleProjectExpand(index)}
                >
                  <div style={{ width: "100%" }}>
                    <h3 style={{
                      margin: "0 0 10px 0",
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#ffffff",
                      letterSpacing: "-0.01em"
                    }}>
                      {project.name}
                    </h3>
                    <p style={{
                      fontSize: "13px",
                      color: "#a5b4fc",
                      margin: "0 0 16px 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: "600"
                    }}>
                      {project.subtitle}
                    </p>
                    <p style={{
                      color: "#cbd5e1",
                      marginBottom: "20px",
                      fontSize: "15px",
                      lineHeight: "1.8"
                    }}>
                      {project.desc}
                    </p>
                    <Link
                      to={project.link}
                      onClick={(e) => {
                        // Prevent card collapse when clicking link
                        e.stopPropagation();
                      }}
                      style={{
                        color: "#a5b4fc",
                        fontSize: "15px",
                        fontWeight: "600",
                        textDecoration: "none",
                        padding: "10px 20px",
                        background: "rgba(102, 126, 234, 0.15)",
                        borderRadius: "10px",
                        border: "1px solid rgba(102, 126, 234, 0.3)",
                        display: "inline-block",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(102, 126, 234, 0.25)";
                        e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.5)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
                        e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      Learn more →
                    </Link>
                  </div>
                </ExpandableIconCard>
              );
            })}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" style={{ marginBottom: "100px", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}>
            Blog
          </h2>

          <Link
            to="/blog"
            style={{
              color: "#a5b4fc",
              fontSize: "18px",
              fontWeight: "600",
              textDecoration: "none",
              padding: "14px 32px",
              background: "rgba(102, 126, 234, 0.15)",
              borderRadius: "12px",
              border: "1px solid rgba(102, 126, 234, 0.3)",
              display: "inline-block",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(102, 126, 234, 0.25)";
              e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(102, 126, 234, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(102, 126, 234, 0.15)";
              e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Blog →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: "rgba(10, 14, 39, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(102, 126, 234, 0.2)",
        padding: "50px 24px",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
        <p style={{
          margin: "0",
          fontSize: "15px",
          color: "#94a3b8",
          fontWeight: "500"
        }}>
          © 2025 Mayank Gandhi
        </p>
      </footer>
    </div>
  );
}
