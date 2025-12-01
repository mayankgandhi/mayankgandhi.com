import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import FloatingShapes from '@/components/FloatingShapes';
import styles from './styles.module.css';

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.6',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background grid */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <FloatingShapes />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header
          style={{
            background: 'radial-gradient(ellipse at top, rgba(102, 126, 234, 0.15) 0%, transparent 50%)',
            padding: 'clamp(60px, 10vw, 100px) 24px clamp(40px, 8vw, 60px)',
            borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Link
              href="/"
              className={styles.backLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(0, 0, 0, 0.6)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                marginBottom: '32px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              ← Back to Home
            </Link>
            <h1
              style={{
                margin: '0 0 24px 0',
                fontSize: 'clamp(32px, 6vw, 52px)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #667eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
              }}
            >
              Blog
            </h1>
            <p
              style={{
                margin: '0',
                fontSize: 'clamp(14px, 2vw, 18px)',
                color: 'rgba(0, 0, 0, 0.6)',
                lineHeight: '1.6',
              }}
            >
              Thoughts, insights, and learnings on iOS development and software engineering
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(40px, 8vw, 80px) 24px' }}>
          {posts.length === 0 ? (
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: 'clamp(32px, 6vw, 64px)',
                borderRadius: '24px',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
              }}
            >
              <p style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '18px', margin: 0 }}>
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.blogPostCard}
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: 'clamp(24px, 4vw, 32px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(20px)',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    color: 'inherit',
                  }}
                >
                  <h2
                    style={{
                      marginTop: '0',
                      marginBottom: '12px',
                      fontSize: 'clamp(20px, 4vw, 28px)',
                      fontWeight: '700',
                      color: 'rgba(0, 0, 0, 0.95)',
                      lineHeight: '1.3',
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      margin: '0 0 16px 0',
                      fontSize: '14px',
                      color: 'rgba(0, 0, 0, 0.5)',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    📅{' '}
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  {post.description && (
                    <p
                      style={{
                        margin: '0',
                        fontSize: '16px',
                        color: 'rgba(0, 0, 0, 0.7)',
                        lineHeight: '1.7',
                      }}
                    >
                      {post.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(102, 126, 234, 0.1)',
            padding: '60px 24px',
            textAlign: 'center',
            marginTop: '80px',
          }}
        >
          <p style={{ margin: '0', fontSize: '15px', color: 'rgba(0, 0, 0, 0.4)' }}>
            © 2025 Mayank Gandhi · Built with passion & precision
          </p>
        </footer>
      </div>
    </div>
  );
}
