'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tokens } from '@/styles/tokens';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Toolbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    checkMobile();
    handleScroll();

    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Mayank Gandhi', path: '/' }
    ];

    if (pathname === '/') return breadcrumbs;

    const paths = pathname.split('/').filter(Boolean);

    // Handle app pages
    if (paths[0] === 'ticker') {
      breadcrumbs.push({ label: 'Apps', path: '/#apps' });
      breadcrumbs.push({ label: 'Ticker', path: '/ticker' });
      if (paths[1] === 'privacy-policy') {
        breadcrumbs.push({ label: 'Privacy Policy', path: '/ticker/privacy-policy' });
      } else if (paths[1] === 'terms') {
        breadcrumbs.push({ label: 'Terms', path: '/ticker/terms' });
      }
    } else if (paths[0] === 'cashew') {
      breadcrumbs.push({ label: 'Apps', path: '/#apps' });
      breadcrumbs.push({ label: 'Cashew', path: '/cashew' });
      if (paths[1] === 'privacy-policy') {
        breadcrumbs.push({ label: 'Privacy Policy', path: '/cashew/privacy-policy' });
      } else if (paths[1] === 'terms') {
        breadcrumbs.push({ label: 'Terms', path: '/cashew/terms' });
      }
    } else if (paths[0] === 'walnut') {
      breadcrumbs.push({ label: 'Apps', path: '/#apps' });
      breadcrumbs.push({ label: 'Walnut', path: '/walnut' });
      if (paths[1] === 'privacy-policy') {
        breadcrumbs.push({ label: 'Privacy Policy', path: '/walnut/privacy-policy' });
      } else if (paths[1] === 'terms') {
        breadcrumbs.push({ label: 'Terms', path: '/walnut/terms' });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: tokens.zIndex.fixed,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: tokens.blur.md,
          WebkitBackdropFilter: tokens.blur.md,
          borderBottom: `1px solid ${scrolled ? tokens.colors.slate[200] : tokens.colors.slate[100]}`,
          transition: `all ${tokens.transition.smooth}`,
          boxShadow: scrolled ? tokens.shadow.md : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isMobile ? '12px 20px' : '16px 40px',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          {breadcrumbs.map((item, index) => (
            <div
              key={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                animation: 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'backwards',
              }}
            >
              {index > 0 && (
                <span
                  style={{
                    color: '#94a3b8',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '300',
                    userSelect: 'none',
                    animation: 'fadeIn 0.3s ease',
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'backwards',
                  }}
                >
                  →
                </span>
              )}
              <Link
                href={item.path}
                style={{
                  fontSize: index === 0 ? (isMobile ? tokens.fontSize.base : tokens.fontSize.lg) : (isMobile ? tokens.fontSize.sm : tokens.fontSize.base),
                  fontWeight: index === 0 ? tokens.fontWeight.bold : index === breadcrumbs.length - 1 ? tokens.fontWeight.semibold : tokens.fontWeight.medium,
                  color: index === breadcrumbs.length - 1 ? tokens.colors.slate[900] : tokens.colors.slate[500],
                  textDecoration: 'none',
                  position: 'relative',
                  transition: `color ${tokens.transition.base}`,
                  letterSpacing: index === 0 ? tokens.letterSpacing.tight : tokens.letterSpacing.normal,
                  whiteSpace: 'nowrap',
                }}
                className="breadcrumb-link"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed toolbar */}
      <div style={{ height: isMobile ? '48px' : '56px' }} />

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .breadcrumb-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .breadcrumb-link:hover::after {
          width: 100%;
        }

        .breadcrumb-link:hover {
          color: ${tokens.colors.slate[900]} !important;
        }

        .breadcrumb-link:focus {
          outline: none;
        }

        .breadcrumb-link:active {
          transform: scale(0.98);
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          nav {
            background-color: rgba(15, 23, 42, 0.85) !important;
            border-bottom-color: rgba(255, 255, 255, 0.08) !important;
          }

          nav[style*="rgba(255, 255, 255, 0.85)"] {
            background-color: rgba(15, 23, 42, 0.85) !important;
          }

          .breadcrumb-link {
            color: #94a3b8 !important;
          }

          .breadcrumb-link:hover {
            color: #e2e8f0 !important;
          }

          .breadcrumb-link:last-of-type {
            color: #f1f5f9 !important;
          }

          .breadcrumb-link:first-of-type {
            color: #f8fafc !important;
          }
        }

        /* Mobile refinements */
        @media (max-width: 768px) {
          .breadcrumb-link {
            font-size: 14px !important;
          }

          .breadcrumb-link::after {
            bottom: -1px;
            height: 1.5px;
          }
        }

        /* Accessibility */
        .breadcrumb-link:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 4px;
          border-radius: 4px;
        }

        /* Smooth transitions for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .breadcrumb-link,
          .breadcrumb-link::after {
            transition: none !important;
          }

          @keyframes slideIn {
            from, to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from, to {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
}
