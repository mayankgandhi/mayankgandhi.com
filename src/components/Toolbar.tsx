'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

// "Engineering Field Notes" palette (matches the homepage redesign).
const INK = '#16130E';
const INK_SOFT = '#5c5448';
const LINE_STRONG = 'rgba(22,19,14,0.42)';
const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

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

  // The homepage redesign ships its own top navigation, so the global
  // breadcrumb toolbar is suppressed on "/". App subpages keep their breadcrumbs.
  if (isHome) {
    return null;
  }

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Mayank Gandhi', path: '/' }
    ];

    if (pathname === '/') return breadcrumbs;

    const paths = pathname.split('/').filter(Boolean);
    const appName = APP_ROUTES[paths[0]];

    if (appName) {
      breadcrumbs.push({ label: 'Apps', path: '/#work' });
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

  const bgColor = scrolled ? 'rgba(236, 230, 217, 0.86)' : 'rgba(236, 230, 217, 0.94)';

  const linkColor = (index: number) => {
    if (index === 0) return INK;
    if (index === breadcrumbs.length - 1) return INK;
    return INK_SOFT;
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: bgColor,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${INK}`,
          transition: 'background-color 300ms cubic-bezier(0.22, 0.61, 0.36, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: isMobile ? '12px 18px' : '14px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '8px' : '12px',
          }}
        >
          {breadcrumbs.map((item, index) => (
            <div
              key={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                animation: 'crumbIn 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)',
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'backwards',
                minWidth: 0,
              }}
            >
              {index > 0 && (
                <span
                  style={{
                    color: LINE_STRONG,
                    fontFamily: MONO,
                    fontSize: isMobile ? '12px' : '13px',
                    fontWeight: 500,
                    userSelect: 'none',
                  }}
                >
                  /
                </span>
              )}
              <Link
                href={item.path}
                style={{
                  fontFamily: MONO,
                  fontSize: index === 0 ? (isMobile ? '12px' : '13px') : (isMobile ? '11px' : '12px'),
                  fontWeight: index === 0 ? 700 : 500,
                  color: linkColor(index),
                  textDecoration: 'none',
                  position: 'relative',
                  textTransform: 'uppercase',
                  letterSpacing: index === 0 ? '0.06em' : '0.04em',
                  whiteSpace: 'nowrap',
                  transition: 'color 200ms cubic-bezier(0.22, 0.61, 0.36, 1)',
                }}
                className="fn-crumb"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </nav>

      {/* Spacer to prevent content from going under the fixed toolbar */}
      <div style={{ height: isMobile ? '48px' : '54px' }} />

      <style jsx global>{`
        @keyframes crumbIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fn-crumb::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #ff3d1f;
          transition: width 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .fn-crumb:hover::after {
          width: 100%;
        }

        .fn-crumb:hover {
          color: #16130e !important;
        }

        .fn-crumb:focus-visible {
          outline: 2px solid #ff3d1f;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .fn-crumb,
          .fn-crumb::after {
            transition: none !important;
          }
          @keyframes crumbIn {
            from, to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </>
  );
}
