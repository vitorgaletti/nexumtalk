export const defaultTheme = {
  colors: {
    white: '#fff',
    black: '#000',

    overlay: 'rgba(0,0,0,0.7)',

    'gray-300': '#D1D5DB',
    'gray-400': '#9CA3AF',

    'zinc-100': ' #F4F4F5',
    'zinc-600': '#52525B',
    'zinc-800': '#27272A',

    'sky-500': '#0EA5E9',

    'green-500': '#22C55E',

    'red-500': '#EF4444',

    'rose-500': '#F43F5E'
  },

  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem' // 24px
  }
} as const;

export const device = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  desktopLarge: '1440px'
} as const;
