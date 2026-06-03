import Link from 'next/link';
import FieldNotesTheme from './FieldNotesTheme';

interface LegalPageProps {
  /** App display name, e.g. "Cashew". */
  appName: string;
  /** Short category line, e.g. "Credit Card Tracker". */
  appTagline: string;
  /** App icon URL. */
  appIcon: string;
  /** Document label shown in the eyebrow. Defaults to "Privacy Policy". */
  docLabel?: string;
  /** Route back to the app page, e.g. "/cashew". */
  appHref: string;
  /** Optional per-app signature accent (defaults to the vermilion theme accent). */
  accentColor?: string;
  /** The legal copy, as semantic HTML (h2/h3/p/ul/li/strong/a). */
  children: React.ReactNode;
}

/**
 * Shared shell for the apps' legal pages, styled in the "Engineering Field
 * Notes" theme. The content is passed as children and rendered inside a
 * `.fn-prose` block, so each page only carries its own copy — no styling.
 */
export default function LegalPage({
  appName,
  appTagline,
  appIcon,
  docLabel = 'Privacy Policy',
  appHref,
  accentColor = '#FF3D1F',
  children,
}: LegalPageProps) {
  return (
    <>
      <FieldNotesTheme />
      <div className="fn-page">
        <div className="fn-wrap fn-wrap--narrow">
          {/* Header */}
          <header className="fn-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '22px',
                flexWrap: 'wrap',
              }}
            >
              <img
                src={appIcon}
                alt={`${appName} app icon`}
                width={92}
                height={92}
                style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '20px',
                  border: '1px solid var(--fn-ink)',
                  borderBottom: `3px solid ${accentColor}`,
                  background: 'var(--fn-paper-2)',
                  flexShrink: 0,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <div className="fn-eyebrow fn-eyebrow--plain">{docLabel}</div>
                <h1 className="fn-h1">{appName}</h1>
                <p className="fn-sub">{appTagline}</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <article className="fn-card fn-prose">{children}</article>

          {/* Footer nav */}
          <div
            style={{
              display: 'flex',
              gap: '28px',
              flexWrap: 'wrap',
              padding: '18px 4px 0',
            }}
          >
            <Link href={appHref} className="fn-back">
              ← Back to {appName}
            </Link>
            <Link href="/" className="fn-back">
              ↑ Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
