// Design Tokens - Single source of truth for all design values

export const tokens = {
  // Spacing scale (8px base)
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
  },

  // Typography
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '40px',
    '5xl': '52px',
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeight: {
    tight: '1.1',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.7',
    loose: '1.9',
  },

  letterSpacing: {
    tighter: '-0.03em',
    tight: '-0.02em',
    normal: '-0.01em',
    wide: '0',
  },

  // Colors
  colors: {
    // Neutral scale
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Primary (Blue)
    blue: {
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    // Accent colors for gradients
    purple: {
      500: '#8b5cf6',
      600: '#7c3aed',
    },
    pink: {
      500: '#ec4899',
      600: '#db2777',
    },
    cyan: {
      400: '#22d3ee',
      500: '#06b6d4',
    },
    dark: {
      bg: '#0a0a0f',
      surface: 'rgba(255,255,255, 0.02)',
      border: 'rgba(255,255,255, 0.06)',
      borderHover: 'rgba(255,255,255, 0.12)',
      textPrimary: '#f8fafc',
      textSecondary: '#e2e8f0',
      textMuted: '#94a3b8',
      textSubtle: '#64748b',
      textDim: '#475569',
      accent: '#818cf8',
      accentBg: 'rgba(99,102,241, 0.08)',
      accentBorder: 'rgba(99,102,241, 0.12)',
      glow: 'rgba(99,102,241, 0.4)',
    },
  },

  // Border radius
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },

  // Shadows
  shadow: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
    md: '0 2px 8px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 16px rgba(0, 0, 0, 0.08)',
    xl: '0 8px 32px rgba(0, 0, 0, 0.10)',
    '2xl': '0 16px 48px rgba(0, 0, 0, 0.12)',
    inner: '0 0 0 1px rgba(255, 255, 255, 0.6) inset',
    innerActive: '0 0 0 1px rgba(255, 255, 255, 0.8) inset',
    focus: '0 0 0 3px rgba(59, 130, 246, 0.15)',
  },

  // Transitions
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Z-index scale
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
  },

  // Blur
  blur: {
    sm: 'blur(8px)',
    md: 'blur(12px)',
    lg: 'blur(16px)',
    xl: 'blur(20px)',
  },
} as const;

// Helper function for creating consistent hover states
export const hoverState = {
  scale: 'scale(1.02)',
  scaleDown: 'scale(0.98)',
  translateY: 'translateY(-2px)',
};

// Animation variants
export const animations = {
  fadeIn: {
    opacity: [0, 1],
    duration: 200,
  },
  slideUp: {
    opacity: [0, 1],
    transform: ['translateY(20px)', 'translateY(0)'],
    duration: 250,
  },
  slideIn: {
    opacity: [0, 1],
    transform: ['translateX(-20px)', 'translateX(0)'],
    duration: 250,
  },
};
