import { tokens } from '@/styles/tokens';

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div
      style={{
        padding: `${tokens.spacing.lg} ${tokens.spacing.xl}`,
        background: tokens.colors.dark.surface,
        border: `1px solid ${tokens.colors.dark.border}`,
        borderRadius: tokens.radius.lg,
        borderTop: `2px solid ${tokens.colors.dark.glow}`,
        transition: `border-color ${tokens.transition.base}`,
        flex: '1 1 0',
        minWidth: '140px',
      }}
    >
      <div
        style={{
          fontSize: '32px',
          fontWeight: tokens.fontWeight.bold,
          color: tokens.colors.dark.textPrimary,
          letterSpacing: '-0.02em',
          lineHeight: tokens.lineHeight.tight,
          marginBottom: tokens.spacing.xs,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '11px',
          fontWeight: tokens.fontWeight.semibold,
          color: tokens.colors.dark.textSubtle,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {label}
      </div>
    </div>
  );
}
