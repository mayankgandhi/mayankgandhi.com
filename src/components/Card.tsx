'use client';

import { ReactNode, CSSProperties } from 'react';
import { tokens } from '@/styles/tokens';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function Card({
  children,
  hover = false,
  interactive = false,
  className = '',
  style = {},
  onClick
}: CardProps) {
  return (
    <>
      <div
        className={`card ${hover ? 'card-hover' : ''} ${interactive ? 'card-interactive' : ''} ${className}`}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: tokens.blur.md,
          WebkitBackdropFilter: tokens.blur.md,
          border: `1.5px solid ${tokens.colors.slate[200]}`,
          borderRadius: tokens.radius.lg,
          boxShadow: `${tokens.shadow.md}, ${tokens.shadow.inner}`,
          transition: `all ${tokens.transition.smooth}`,
          ...style,
        }}
        onClick={onClick}
      >
        {children}
      </div>

      <style jsx>{`
        .card {
          will-change: transform, box-shadow;
        }

        .card-interactive {
          cursor: pointer;
        }

        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: ${tokens.shadow.lg}, ${tokens.shadow.innerActive},
            0 0 0 1px rgba(59, 130, 246, 0.1);
          border-color: ${tokens.colors.blue[500]}40;
        }

        .card-interactive:active {
          transform: translateY(0) scale(0.99);
        }

        .card:focus-visible {
          outline: none;
          box-shadow: ${tokens.shadow.lg}, ${tokens.shadow.innerActive}, ${tokens.shadow.focus};
          border-color: ${tokens.colors.blue[500]};
        }

        @media (prefers-reduced-motion: reduce) {
          .card,
          .card-hover:hover {
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
