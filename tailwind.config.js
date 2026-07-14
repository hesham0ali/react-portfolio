/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f19',
        surface: {
          DEFAULT: '#0f131d',
          card: '#131b2e',
          container: '#1c1f2a',
          'container-low': '#171b26',
          'container-lowest': '#0a0e18',
          'container-high': '#262a35',
          'container-highest': '#313540',
        },
        primary: {
          DEFAULT: '#00d8f6',
          container: '#005a68',
          fixed: '#a5eeff',
          'fixed-dim': '#0ad9f8',
          'on-primary': '#00363f',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          container: '#6f00be',
          fixed: '#f0dbff',
          'fixed-dim': '#ddb7ff',
        },
        muted: '#94a3b8',
        'on-surface': '#dfe2f1',
        'on-surface-variant': '#bac9cd',
        'outline-variant': '#3b494c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        'margin-mobile': '16px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        'section-gap': '120px',
        'container-max': '1200px',
        'gutter': '24px',
      },
    },
  },
  plugins: [],
}
