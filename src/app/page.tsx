'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ExpandableIconCard from '@/components/ExpandableIconCard';
import { tokens } from '@/styles/tokens';
import { useInView } from '@/hooks/useInView';

// Data remains the same
const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    username: 'mayankgandhi',
    href: 'https://github.com/mayankgandhi',
    iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    username: 'mayankgandhi98',
    href: 'https://www.linkedin.com/in/mayankgandhi98/',
    iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'Instagram',
    username: '_mayankgandhi',
    href: 'https://instagram.com/_mayankgandhi',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    name: 'Email',
    username: 'mayankgandhi50@gmail.com',
    href: 'mailto:mayankgandhi50@gmail.com',
    iconPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
  }
];

const EXPERIENCE_DATA = [
  {
    title: 'Senior iOS Engineer',
    company: 'Radius',
    location: 'Hyderabad, IN',
    period: "Feb '23 - Jul '25",
    logo: 'https://cdn.mayankgandhi.com/Radius_Logo_Dark__1_Logo.jpg',
    highlights: [
      'Architected multi-app ecosystem using Tuist for 3 applications, implementing shared design system and networking layer that reduced development time by 40%',
      'Optimised app performance through systematic profiling, achieving 30% reduction in launch time and 25% decrease in memory usage',
      'Built comprehensive real estate platform with multi-form offer management and DocuSign API integration',
      'Developed interactive property mapping with polygon drawing for 2M+ listings',
      'Mentored developers through technical sessions on modern iOS architectures',
    ],
  },
  {
    title: 'iOS Engineer II',
    company: 'Compass',
    location: 'Hyderabad, IN',
    period: "Jul '22 - Jan '23",
    logo: 'https://cdn.mayankgandhi.com/CompassInc_Logo.svg.png',
    highlights: [
      'Led Swift modernisation initiative across 35-engineer iOS team implementing Composable Architecture (TCA)',
      'Reduced infrastructure costs by $200K annually through strategic native routing implementation',
      'Integrated Core ML client targeting system driving $100M+ in annual revenue',
      'Established technical documentation standards and provided critical production support',
    ],
  },
  {
    title: 'iOS Engineer',
    company: 'Grab',
    location: 'Hyderabad, IN',
    period: "Jan '20 - Jul '22",
    logo: 'https://cdn.mayankgandhi.com/Grab_(application)_logo.svg',
    highlights: [
      'Architected and delivered risk management features reaching 10M+ users',
      'Implemented complex multi-entry point features using RIBs architecture',
      'Drove technical excellence through comprehensive documentation standards',
    ],
  },
];

const PROJECTS_DATA = [
  {
    name: 'Cashew',
    subtitle: 'Credit Card Tracker',
    icon: 'https://cdn.mayankgandhi.com/cashew-app-icon.png',
    desc: 'Published iOS financial management app solving bill tracking and payment oversight challenges. Built with modular Tuist architecture, CoreData persistence, push notifications for payment alerts, home screen widgets, and Combine framework for reactive data binding.',
    link: '/cashew',
  },
  {
    name: 'Walnut',
    subtitle: 'Medical Documents Manager',
    icon: 'https://cdn.mayankgandhi.com/walnut-app-icon.png',
    desc: 'Personal wellness app addressing medication adherence and prescription management. Features automatic prescription parsing, medication reminders, follow-up scheduling, and real-time health metrics tracking using SwiftUI and Swift Data.',
    link: '/walnut',
  },
  {
    name: 'Ticker',
    subtitle: 'Task & Reminder Manager',
    icon: 'https://cdn.mayankgandhi.com/ticker-app-icon.png',
    desc: 'Comprehensive alarm and reminder app helping users stay on top of daily tasks, important birthdays, and medication schedules. Features customizable alarms, recurring reminders, smart notifications, and an intuitive interface.',
    link: '/ticker',
  },
];

// Animated section wrapper component
function AnimatedSection({ children, id, delay = 0 }: { children: React.ReactNode; id?: string; delay?: number }) {
  const { ref, isInView } = useInView();

  return (
    <section
      // @ts-ignore
      ref={ref}
      id={id}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${tokens.transition.smooth} ${delay}ms, transform ${tokens.transition.smooth} ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </section>
  );
}

export default function Home() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleExperienceClick = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const handleProjectClick = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div
      className="page-container"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        lineHeight: tokens.lineHeight.relaxed,
        backgroundColor: tokens.colors.slate[50],
        color: tokens.colors.slate[800],
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main Container with 2-column layout */}
      <div
        className="main-container"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: `${tokens.spacing.xl} ${tokens.spacing.xl} ${tokens.spacing['3xl']} ${tokens.spacing.xl}`,
          minHeight: '100vh',
          display: 'flex',
          gap: tokens.spacing['4xl'],
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          alignItems: 'center',
        }}
      >
        {/* Left Column - Header */}
        <aside
          className="left-column"
          style={{
            flex: '0 0 380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ marginBottom: tokens.spacing.xl }}>
            <h1
              className="name-heading"
              style={{
                margin: `0 0 ${tokens.spacing.md} 0`,
                fontSize: tokens.fontSize['5xl'],
                fontWeight: tokens.fontWeight.bold,
                color: tokens.colors.slate[900],
                letterSpacing: tokens.letterSpacing.tighter,
                lineHeight: tokens.lineHeight.tight,
              }}
            >
              Mayank Gandhi
            </h1>

            <h2
              className="title-heading"
              style={{
                margin: `0 0 ${tokens.spacing.lg} 0`,
                fontSize: tokens.fontSize.xl,
                fontWeight: tokens.fontWeight.medium,
                color: tokens.colors.slate[500],
                letterSpacing: tokens.letterSpacing.normal,
              }}
            >
              Senior iOS Engineer
            </h2>

            <p
              className="description-text"
              style={{
                fontSize: tokens.fontSize.base,
                color: tokens.colors.slate[500],
                margin: '0',
                lineHeight: tokens.lineHeight.relaxed,
                maxWidth: '360px',
              }}
            >
              Crafting exceptional iOS experiences with expertise in scalable architecture, performance
              optimization, and team leadership
            </p>
          </div>

          <div
            className="social-links-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: tokens.spacing.sm,
              alignItems: 'flex-start',
            }}
          >
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  color: tokens.colors.slate[600],
                  textDecoration: 'none',
                  fontSize: tokens.fontSize.sm,
                  fontWeight: tokens.fontWeight.medium,
                  display: 'flex',
                  alignItems: 'center',
                  gap: tokens.spacing.md,
                  padding: `${tokens.spacing.sm} 0`,
                  transition: `all ${tokens.transition.base}`,
                  opacity: 0,
                  animation: `slideIn ${tokens.transition.smooth} ${100 + index * 50}ms forwards`,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    flexShrink: 0,
                    opacity: 0.7,
                    transition: `opacity ${tokens.transition.base}`,
                  }}
                >
                  <path d={social.iconPath} />
                </svg>
                <span style={{ opacity: 0.9 }}>{social.username}</span>
              </a>
            ))}
          </div>
        </aside>

        {/* Right Column - Content */}
        <main
          className="main-content right-column"
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.spacing['2xl'],
          }}
        >
          {/* Projects Section */}
          <AnimatedSection id="apps">
            <h2
              className="section-heading"
              style={{
                fontSize: tokens.fontSize['2xl'],
                fontWeight: tokens.fontWeight.bold,
                color: tokens.colors.slate[800],
                marginBottom: tokens.spacing.lg,
                letterSpacing: tokens.letterSpacing.tight,
                textAlign: 'center',
              }}
            >
              Apps
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: tokens.spacing.lg,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              {PROJECTS_DATA.map((project, index) => {
                const gradients = [
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
                    onClick={() => handleProjectClick(index)}
                  >
                    <div style={{ width: '100%' }}>
                      <h3
                        style={{
                          margin: `0 0 ${tokens.spacing.xs} 0`,
                          fontSize: tokens.fontSize.lg,
                          fontWeight: tokens.fontWeight.semibold,
                          color: tokens.colors.slate[900],
                          letterSpacing: tokens.letterSpacing.normal,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        style={{
                          fontSize: tokens.fontSize.xs,
                          color: tokens.colors.slate[500],
                          margin: `0 0 ${tokens.spacing.md} 0`,
                          fontWeight: tokens.fontWeight.medium,
                        }}
                      >
                        {project.subtitle}
                      </p>
                      <p
                        style={{
                          color: tokens.colors.slate[600],
                          marginBottom: tokens.spacing.md,
                          fontSize: tokens.fontSize.sm,
                          lineHeight: tokens.lineHeight.relaxed,
                        }}
                      >
                        {project.desc}
                      </p>
                      <Link
                        href={project.link}
                        onClick={(e) => e.stopPropagation()}
                        className="project-link"
                        style={{
                          color: tokens.colors.blue[600],
                          fontSize: tokens.fontSize.sm,
                          fontWeight: tokens.fontWeight.semibold,
                          textDecoration: 'none',
                          padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
                          background: 'rgba(59, 130, 246, 0.08)',
                          borderRadius: tokens.radius.md,
                          border: `1px solid ${tokens.colors.blue[600]}30`,
                          display: 'inline-block',
                          transition: `all ${tokens.transition.smooth}`,
                        }}
                      >
                        Learn more →
                      </Link>
                    </div>
                  </ExpandableIconCard>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Experience Section */}
          <AnimatedSection id="experience" delay={100}>
            <h2
              className="section-heading"
              style={{
                fontSize: tokens.fontSize['2xl'],
                fontWeight: tokens.fontWeight.bold,
                color: tokens.colors.slate[800],
                marginBottom: tokens.spacing.lg,
                letterSpacing: tokens.letterSpacing.tight,
                textAlign: 'center',
              }}
            >
              Experience
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: tokens.spacing.lg,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              {EXPERIENCE_DATA.map((job, index) => {
                const gradients = [
                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
                    onClick={() => handleExperienceClick(index)}
                  >
                    <div style={{ width: '100%' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                          flexWrap: 'wrap',
                          gap: tokens.spacing.md,
                          marginBottom: tokens.spacing.md,
                        }}
                      >
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <h3
                            style={{
                              margin: `0 0 ${tokens.spacing.xs} 0`,
                              fontSize: tokens.fontSize.lg,
                              fontWeight: tokens.fontWeight.semibold,
                              color: tokens.colors.slate[900],
                              letterSpacing: tokens.letterSpacing.normal,
                            }}
                          >
                            {job.title}
                          </h3>
                          <p
                            style={{
                              margin: `0 0 ${tokens.spacing.xs} 0`,
                              fontSize: tokens.fontSize.base,
                              fontWeight: tokens.fontWeight.medium,
                              color: tokens.colors.slate[600],
                            }}
                          >
                            {job.company}
                          </p>
                          <p
                            style={{
                              margin: `0 0 ${tokens.spacing.md} 0`,
                              fontSize: tokens.fontSize.sm,
                              color: tokens.colors.slate[500],
                            }}
                          >
                            {job.location} • {job.period}
                          </p>
                        </div>
                      </div>
                      <ul
                        style={{
                          margin: '0',
                          paddingLeft: tokens.spacing.lg,
                          color: tokens.colors.slate[600],
                          fontSize: tokens.fontSize.sm,
                          lineHeight: tokens.lineHeight.relaxed,
                          maxHeight: '200px',
                          overflowY: 'auto',
                        }}
                      >
                        {job.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: tokens.spacing.sm,
                              color: tokens.colors.slate[600],
                            }}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ExpandableIconCard>
                );
              })}
            </div>
          </AnimatedSection>
        </main>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .social-link:hover {
          color: ${tokens.colors.blue[600]};
          transform: translateX(4px);
        }

        .social-link:hover svg {
          opacity: 1;
        }

        .social-link:hover span {
          opacity: 1;
        }

        .social-link:active {
          transform: translateX(2px) scale(0.98);
        }

        .project-link:hover {
          background: rgba(59, 130, 246, 0.12);
          border-color: ${tokens.colors.blue[600]}50;
          transform: translateX(4px);
          box-shadow: ${tokens.shadow.sm};
        }

        .project-link:active {
          transform: translateX(2px) scale(0.98);
        }

        .main-content::-webkit-scrollbar {
          width: 6px;
        }

        .main-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .main-content::-webkit-scrollbar-thumb {
          background: ${tokens.colors.slate[300]};
          border-radius: ${tokens.radius.sm};
        }

        .main-content::-webkit-scrollbar-thumb:hover {
          background: ${tokens.colors.slate[400]};
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .main-container {
            flex-direction: column !important;
            height: auto !important;
            min-height: 100vh !important;
            padding: ${tokens.spacing.lg} ${tokens.spacing.md} !important;
            gap: ${tokens.spacing.xl} !important;
            overflow-y: auto !important;
          }

          .left-column {
            flex: 1 1 auto !important;
            width: 100% !important;
            padding-right: 0 !important;
            padding-bottom: 0 !important;
            justify-content: flex-start !important;
            text-align: center;
          }

          .right-column {
            max-height: none !important;
            padding-right: 0 !important;
          }

          .name-heading {
            font-size: clamp(36px, 8vw, 56px) !important;
            text-align: center;
          }

          .title-heading {
            font-size: clamp(18px, 4vw, 22px) !important;
            text-align: center;
          }

          .description-text {
            font-size: clamp(14px, 3vw, 16px) !important;
            text-align: center;
            max-width: 100%;
          }

          .social-links-container {
            justify-content: center !important;
            align-items: center !important;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding: ${tokens.spacing.md} ${tokens.spacing.sm} !important;
            gap: ${tokens.spacing.lg} !important;
          }

          .name-heading {
            font-size: clamp(32px, 10vw, 48px) !important;
            margin-bottom: ${tokens.spacing.sm} !important;
          }

          .title-heading {
            font-size: clamp(16px, 4vw, 20px) !important;
            margin-bottom: ${tokens.spacing.md} !important;
          }

          .description-text {
            font-size: clamp(14px, 3.5vw, 16px) !important;
            margin-bottom: ${tokens.spacing.lg} !important;
          }

          .content-section > div {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .expandable-icon-card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .social-link:hover,
          .project-link:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
