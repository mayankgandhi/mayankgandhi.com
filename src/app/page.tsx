'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ExpandableIconCard from '@/components/ExpandableIconCard';

const SOCIAL_LINKS = [
  { icon: 'GitHub', href: 'https://github.com/mayankgandhi', label: 'GitHub' },
  { icon: 'LinkedIn', href: 'https://linkedin.com/in/mayankgandhi98', label: 'LinkedIn' },
  { icon: 'Email', href: 'mailto:mayankgandhi50@gmail.com', label: 'Email' },
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

  const handleExperienceExpand = (index: number) => {
    if (isMobile) {
      setExpandedExperience(expandedExperience === index ? null : index);
    }
  };

  const handleProjectExpand = (index: number) => {
    if (isMobile) {
      setExpandedProject(expandedProject === index ? null : index);
    }
  };

  return (
    <div
      className="page-container"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif",
        lineHeight: '1.7',
        backgroundColor: '#0a0e27',
        background: '#0a0e27',
        color: '#e2e8f0',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Main Container with 2-column layout */}
      <div
        className="main-container"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '32px 40px',
          height: '100vh',
          display: 'flex',
          gap: '56px',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Left Column - Header */}
        <aside
          className="left-column"
          style={{
            flex: '0 0 400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: '32px',
          }}
        >
          <div
            className="availability-badge"
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '50px',
              fontSize: '11px',
              marginBottom: '24px',
              color: '#a5b4fc',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: '600',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15)',
              width: 'fit-content',
            }}
          >
            ✨ Available for Opportunities
          </div>

          <h1
            className="name-heading"
            style={{
              margin: '0 0 16px 0',
              fontSize: '56px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.03em',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(165, 180, 252, 0.3)',
            }}
          >
            Mayank Gandhi
          </h1>

          <h2
            className="title-heading"
            style={{
              margin: '0 0 24px 0',
              fontSize: '22px',
              fontWeight: '500',
              color: '#cbd5e1',
              letterSpacing: '-0.01em',
            }}
          >
            Senior iOS Engineer
          </h2>

          <p
            className="description-text"
            style={{
              fontSize: '16px',
              color: '#94a3b8',
              margin: '0 0 32px 0',
              lineHeight: '1.6',
            }}
          >
            Crafting exceptional iOS experiences with expertise in scalable architecture, performance
            optimization, and team leadership
          </p>

          <div className="social-links-container" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  padding: '10px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
              >
                {social.icon}
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
            gap: '28px',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: '8px',
            maxHeight: 'calc(100vh - 64px)',
          }}
        >
          {/* Experience Section */}
          <section id="experience" className="content-section">
            <h2
              className="section-heading"
              style={{
                fontSize: '26px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Experience
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'flex-start',
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
                    <div style={{ width: '100%' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                          flexWrap: 'wrap',
                          gap: '12px',
                          marginBottom: '16px',
                        }}
                      >
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <h3
                            style={{
                              margin: '0 0 8px 0',
                              fontSize: '20px',
                              fontWeight: '700',
                              color: '#ffffff',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {job.title}
                          </h3>
                          <p
                            style={{
                              margin: '0 0 4px 0',
                              fontSize: '17px',
                              fontWeight: '600',
                              color: '#e2e8f0',
                            }}
                          >
                            {job.company}
                          </p>
                          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#94a3b8' }}>
                            {job.location}
                          </p>
                          <span
                            style={{
                              padding: '6px 12px',
                              background: 'rgba(102, 126, 234, 0.2)',
                              backdropFilter: 'blur(10px)',
                              borderRadius: '12px',
                              fontSize: '12px',
                              color: '#a5b4fc',
                              fontWeight: '600',
                              border: '1px solid rgba(102, 126, 234, 0.3)',
                              display: 'inline-block',
                            }}
                          >
                            {job.period}
                          </span>
                        </div>
                      </div>
                      <ul
                        style={{
                          margin: '0',
                          paddingLeft: '20px',
                          color: '#cbd5e1',
                          fontSize: '14px',
                          lineHeight: '1.6',
                          maxHeight: '200px',
                          overflowY: 'auto',
                        }}
                      >
                        {job.highlights.map((highlight, i) => (
                          <li key={i} style={{ marginBottom: '8px', color: '#cbd5e1' }}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ExpandableIconCard>
                );
              })}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="content-section">
            <h2
              className="section-heading"
              style={{
                fontSize: '26px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Apps
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'flex-start',
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
                    <div style={{ width: '100%' }}>
                      <h3
                        style={{
                          margin: '0 0 8px 0',
                          fontSize: '22px',
                          fontWeight: '700',
                          color: '#ffffff',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#a5b4fc',
                          margin: '0 0 12px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: '600',
                        }}
                      >
                        {project.subtitle}
                      </p>
                      <p
                        style={{
                          color: '#cbd5e1',
                          marginBottom: '16px',
                          fontSize: '14px',
                          lineHeight: '1.6',
                        }}
                      >
                        {project.desc}
                      </p>
                      <Link
                        href={project.link}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="project-link"
                        style={{
                          color: '#a5b4fc',
                          fontSize: '14px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          padding: '8px 16px',
                          background: 'rgba(102, 126, 234, 0.15)',
                          borderRadius: '10px',
                          border: '1px solid rgba(102, 126, 234, 0.3)',
                          display: 'inline-block',
                          transition: 'all 0.3s ease',
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
          <section id="blog" className="content-section">
            <h2
              className="section-heading"
              style={{
                fontSize: '26px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}
            >
              Blog
            </h2>

            <Link
              href="/blog"
              className="blog-link"
              style={{
                color: '#a5b4fc',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '12px 24px',
                background: 'rgba(102, 126, 234, 0.15)',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.3)',
                display: 'inline-block',
                transition: 'all 0.3s ease',
              }}
            >
              View Blog →
            </Link>
          </section>
        </main>
      </div>

      <style jsx>{`
        .social-link:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
        }

        .project-link:hover {
          background: rgba(102, 126, 234, 0.25);
          border-color: rgba(102, 126, 234, 0.5);
          transform: translateX(4px);
        }

        .blog-link:hover {
          background: rgba(102, 126, 234, 0.25);
          border-color: rgba(102, 126, 234, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
        }

        .main-content::-webkit-scrollbar {
          width: 6px;
        }

        .main-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .main-content::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 3px;
        }

        .main-content::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.5);
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .main-container {
            flex-direction: column !important;
            height: auto !important;
            min-height: 100vh !important;
            padding: 24px 20px !important;
            gap: 32px !important;
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
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 20px 16px !important;
            gap: 24px !important;
          }

          .left-column {
            padding-bottom: 0 !important;
          }

          .name-heading {
            font-size: clamp(32px, 10vw, 48px) !important;
            margin-bottom: 12px !important;
          }

          .title-heading {
            font-size: clamp(16px, 4vw, 20px) !important;
            margin-bottom: 16px !important;
          }

          .description-text {
            font-size: clamp(14px, 3.5vw, 16px) !important;
            margin-bottom: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            padding: 16px 12px !important;
            gap: 20px !important;
          }
        }

        /* Page container responsive */
        @media (max-width: 1024px) {
          .page-container {
            height: auto !important;
            min-height: 100vh !important;
            overflow-y: auto !important;
          }

          .availability-badge {
            font-size: clamp(10px, 2.5vw, 11px) !important;
            padding: 6px 14px !important;
            margin-bottom: 20px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            display: block !important;
          }

          .social-links-container {
            justify-content: center !important;
          }

          .social-link {
            font-size: clamp(12px, 3vw, 14px) !important;
            padding: 8px 16px !important;
          }
        }

        @media (max-width: 480px) {
          .availability-badge {
            font-size: 10px !important;
            padding: 6px 12px !important;
          }

          .social-link {
            font-size: 12px !important;
            padding: 8px 14px !important;
          }
        }

        /* Section heading responsive */
        @media (max-width: 1024px) {
          .section-heading {
            font-size: clamp(22px, 5vw, 26px) !important;
            text-align: center;
          }

          .content-section {
            text-align: center;
          }
        }

        /* Card containers responsive */
        @media (max-width: 1024px) {
          .content-section > div {
            justify-content: center !important;
          }
        }

        @media (max-width: 768px) {
          .content-section > div {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .expandable-icon-card {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
