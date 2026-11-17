/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0F1110',
        coal: '#161817',
        stone: '#1E2120',
        slatey: '#2A2D2B',
        ash: '#3A3D3B',
        bone: '#ECE9E2',
        fog: '#A8A8A2',
        muted: '#6B6E6C',
        amber: '#D97706',
        'amber-bright': '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cond: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2: '0.18em',
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
};
