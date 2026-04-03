'use client';

import { useState } from 'react';
import Image from 'next/image';
import { tokens } from '@/styles/tokens';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  highlights: string[];
  metric?: string;
  tags?: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  logo,
  highlights,
  metric,
  tags,
}: ExperienceCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        padding: tokens.spacing.lg,
        background: tokens.colors.dark.surface,
        border: `1px solid ${tokens.colors.dark.border}`,
        borderRadius: tokens.radius.lg,
        transition: `border-color ${tokens.transition.base}`,
      }}
      className="experience-card"
    >
      <div style={{ display: 'flex', gap: tokens.spacing.md, marginBottom: tokens.spacing.md }}>
        {imgError ? (
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: tokens.radius.md,
              background: 'rgba(255,255,255,0.05)',
              border: `1px solid ${tokens.colors.dark.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: tokens.fontSize.xl,
              fontWeight: tokens.fontWeight.bold,
              color: tokens.colors.dark.textMuted,
              flexShrink: 0,
            }}
          >
            {company[0]}
          </div>
        ) : (
          <Image
            src={logo}
            alt={`${company} logo`}
            width={56}
            height={56}
            style={{ borderRadius: tokens.radius.md, flexShrink: 0, objectFit: 'contain' }}
            onError={() => setImgError(true)}
            unoptimized={logo.endsWith('.svg')}
          />
        )}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '17px',
              fontWeight: tokens.fontWeight.semibold,
              color: tokens.colors.dark.textPrimary,
              lineHeight: tokens.lineHeight.tight,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: tokens.fontSize.base,
              fontWeight: tokens.fontWeight.medium,
              color: tokens.colors.dark.textSecondary,
              marginTop: '2px',
            }}
          >
            {company}
          </div>
          <div
            style={{
              fontSize: tokens.fontSize.sm,
              color: tokens.colors.dark.textSubtle,
              marginTop: '2px',
            }}
          >
            {location} · {period}
          </div>
        </div>
      </div>

      {metric && (
        <div
          style={{
            display: 'inline-block',
            padding: `${tokens.spacing.xs} ${tokens.spacing.md}`,
            background: tokens.colors.dark.accentBg,
            border: `1px solid ${tokens.colors.dark.accentBorder}`,
            borderRadius: tokens.radius.full,
            fontSize: tokens.fontSize.sm,
            fontWeight: tokens.fontWeight.semibold,
            color: tokens.colors.dark.accent,
            marginBottom: tokens.spacing.md,
          }}
        >
          {metric}
        </div>
      )}

      <p
        style={{
          fontSize: tokens.fontSize.sm,
          color: tokens.colors.dark.textMuted,
          lineHeight: tokens.lineHeight.relaxed,
          margin: `0 0 ${tokens.spacing.md} 0`,
        }}
      >
        {highlights[0]}
      </p>

      {tags && tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: tokens.spacing.sm }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                fontWeight: tokens.fontWeight.semibold,
                color: tokens.colors.dark.textSubtle,
                padding: `2px ${tokens.spacing.sm}`,
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${tokens.colors.dark.border}`,
                borderRadius: tokens.radius.full,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
