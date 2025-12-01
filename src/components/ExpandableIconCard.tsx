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
  const [isHovered, setIsHovered] = useState(false);
  const isActive = isMobile ? isExpanded : isExpanded || isHovered;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onMouseEnter={() => {
        if (!isMobile) {
          setIsHovered(true);
          if (onExpand) onExpand();
        }
      }}
      onMouseLeave={() => {
        if (!isMobile) {
          setIsHovered(false);
          if (!isExpanded && onCollapse) onCollapse();
        }
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: isActive ? '340px' : '100px',
          minHeight: isActive ? 'auto' : '100px',
          padding: isActive ? '28px' : '16px',
          background: isActive
            ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: isActive
            ? '2px solid rgba(102, 126, 234, 0.3)'
            : '2px solid rgba(255,255,255,0.3)',
          borderRadius: '24px',
          boxShadow: isActive
            ? '0 20px 60px rgba(102, 126, 234, 0.25), 0 0 0 1px rgba(255,255,255,0.5) inset'
            : '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.3) inset',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isActive ? 'flex-start' : 'center',
          justifyContent: isActive ? 'flex-start' : 'center',
          position: 'relative',
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
            width: '100px',
            height: '100px',
            objectFit: 'contain',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
            padding: '16px',
            border: '2px solid rgba(102, 126, 234, 0.1)',
            flexShrink: 0,
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: isActive ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
            boxShadow: isActive
              ? '0 12px 40px rgba(102, 126, 234, 0.2)'
              : '0 4px 16px rgba(0,0,0,0.08)',
            position: 'relative',
            zIndex: 1,
          }}
        />
        {isActive && (
          <div
            style={{
              width: '100%',
              marginTop: '20px',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              animation: 'fadeInUp 0.4s ease-out',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
