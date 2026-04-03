'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tokens } from '@/styles/tokens';

interface AppCardProps {
  name: string;
  subtitle: string;
  icon: string;
  desc: string;
  link: string;
}

export default function AppCard({ name, subtitle, icon, desc, link }: AppCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={link}
      style={{
        display: 'block',
        padding: tokens.spacing.lg,
        background: tokens.colors.dark.surface,
        border: `1px solid ${tokens.colors.dark.border}`,
        borderRadius: tokens.radius.lg,
        textDecoration: 'none',
        transition: `border-color ${tokens.transition.base}, transform ${tokens.transition.base}`,
        color: 'inherit',
      }}
      className="app-card"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing.md, marginBottom: tokens.spacing.md }}>
        {imgError ? (
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '14px',
              background: tokens.colors.dark.accentBg,
              border: `1px solid ${tokens.colors.dark.accentBorder}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: tokens.fontSize.xl,
              fontWeight: tokens.fontWeight.bold,
              color: tokens.colors.dark.accent,
              flexShrink: 0,
            }}
          >
            {name[0]}
          </div>
        ) : (
          <Image
            src={icon}
            alt={`${name} icon`}
            width={52}
            height={52}
            style={{ borderRadius: '14px', flexShrink: 0 }}
            onError={() => setImgError(true)}
          />
        )}
        <div>
          <div
            style={{
              fontSize: tokens.fontSize.lg,
              fontWeight: tokens.fontWeight.semibold,
              color: tokens.colors.dark.textPrimary,
              lineHeight: tokens.lineHeight.tight,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: tokens.fontSize.xs,
              color: tokens.colors.dark.textSubtle,
              fontWeight: tokens.fontWeight.medium,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: tokens.fontSize.sm,
          color: tokens.colors.dark.textMuted,
          lineHeight: tokens.lineHeight.relaxed,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </Link>
  );
}
