'use client';

import { ReactNode } from 'react';
import { tokens } from '@/styles/tokens';

interface ExpandableIconCardProps {
  icon: string;
  iconAlt: string;
  isExpanded: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  isMobile?: boolean;
  gradient?: string;
}

export default function ExpandableIconCard({
  icon,
  iconAlt,
  isExpanded,
  children,
  onClick,
  className = '',
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
}: ExpandableIconCardProps) {
  const isActive = isExpanded;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: isActive ? '360px' : '104px',
          minHeight: isActive ? 'auto' : '104px',
          padding: isActive ? tokens.spacing.lg : tokens.spacing.md,
          background: isActive
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: tokens.blur.xl,
          WebkitBackdropFilter: tokens.blur.xl,
          border: isActive
            ? `1.5px solid ${tokens.colors.blue[500]}40`
            : `1.5px solid ${tokens.colors.slate[200]}`,
          borderRadius: tokens.radius.lg,
          boxShadow: isActive
            ? `${tokens.shadow.xl}, ${tokens.shadow.innerActive}`
            : `${tokens.shadow.md}, ${tokens.shadow.inner}`,
          transition: `width ${tokens.transition.slow}, padding ${tokens.transition.slow}, background ${tokens.transition.smooth}, border ${tokens.transition.smooth}, box-shadow ${tokens.transition.smooth}`,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isActive ? 'flex-start' : 'center',
          justifyContent: isActive ? 'flex-start' : 'center',
          position: 'relative',
          willChange: isActive ? 'width, padding' : 'auto',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isActive ? gradient : 'transparent',
            opacity: isActive ? 0.06 : 0,
            transition: `opacity ${tokens.transition.slow}`,
            pointerEvents: 'none',
            borderRadius: tokens.radius.xl,
          }}
        />
        <img
          src={icon}
          alt={iconAlt}
          style={{
            width: '72px',
            height: '72px',
            objectFit: 'contain',
            borderRadius: tokens.radius.md,
            flexShrink: 0,
            transition: `transform ${tokens.transition.slow}`,
            position: 'relative',
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: '100%',
            marginTop: isActive ? tokens.spacing.lg : '0',
            maxHeight: isActive ? '500px' : '0',
            opacity: isActive ? 1 : 0,
            transition: `opacity ${tokens.transition.smooth} 100ms, max-height ${tokens.transition.slow}, margin-top ${tokens.transition.slow}`,
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          {isActive && children}
        </div>
      </div>
    </div>
  );
}
