'use client';

import { useState, ReactNode } from 'react';

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
  onExpand,
  onCollapse,
  children,
  onClick,
  className = '',
  isMobile = false,
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
          padding: isActive ? '24px' : '16px',
          background: isActive
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: isActive
            ? '1.5px solid rgba(59, 130, 246, 0.3)'
            : '1.5px solid rgba(203, 213, 225, 0.4)',
          borderRadius: '16px',
          boxShadow: isActive
            ? '0 8px 32px rgba(59, 130, 246, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8) inset'
            : '0 2px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.6) inset',
          transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s ease, border 0.25s ease, box-shadow 0.25s ease',
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
            opacity: isActive ? 0.05 : 0,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
            borderRadius: '24px',
          }}
        />
        <img
          src={icon}
          alt={iconAlt}
          style={{
            width: '72px',
            height: '72px',
            objectFit: 'contain',
            borderRadius: '12px',
            flexShrink: 0,
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: '100%',
            marginTop: isActive ? '20px' : '0',
            maxHeight: isActive ? '500px' : '0',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
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
