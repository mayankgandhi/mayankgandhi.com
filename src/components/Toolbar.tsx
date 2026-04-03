'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tokens } from '@/styles/tokens';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const APP_ROUTES: Record<string, string> = {
  ticker: 'Ticker',
  cashew: 'Cashew',
  walnut: 'Walnut',
  onelist: 'OneList',
};

export default function Toolbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
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
    const appName = APP_ROUTES[paths[0]];

    if (appName) {
      breadcrumbs.push({ label: 'Apps', path: '/#apps' });
      breadcrumbs.push({ label: appName, path: `/${paths[0]}` });
      if (paths[1] === 'privacy-policy') {
        breadcrumbs.push({ label: 'Privacy Policy', path: `/${paths[0]}/privacy-policy` });
      } else if (paths[1] === 'terms') {
        breadcrumbs.push({ label: 'Terms', path: `/${paths[0]}/terms` });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  const bgColor = isHome
    ? (scrolled ? 'rgba(10, 10, 15, 0.85)' : 'rgba(10, 10, 15, 0.95)')
    : (scrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(255, 255, 255, 0.95)');

  const borderColor = isHome
    ? (scrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.06)')
    : (scrolled ? tokens.colors.slate[200] : tokens.colors.slate[100]);

  const linkColor = (index: number) => {
    if (isHome) {
      if (index === 0) return '#f8fafc';
      if (index === breadcrumbs.length - 1) return '#f1f5f9';
      return '#94a3b8';
    }
    return index === breadcrumbs.length - 1 ? tokens.colors.slate[900] : tokens.colors.slate[500];
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: tokens.zIndex.fixed,
          backgroundColor: bgColor,
          backdropFilter: tokens.blur.md,
          WebkitBackdropFilter: tokens.blur.md,
          borderBottom: `1px solid ${borderColor}`,
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
                    color: isHome ? '#64748b' : '#94a3b8',
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
                  color: linkColor(index),
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

        /* Mobile refinements */
        @media (max-width: 900px) {
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
