/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff',
          green: '#39ff14',
          magenta: '#ff00ff',
          yellow: '#ffff00',
          orange: '#ff6600',
          blue: '#0080ff',
        },
        editor: {
          bg: '#0d0d0d',
          sidebar: '#111111',
          panel: '#161616',
          tab: '#1a1a1a',
          border: '#222222',
          line: '#1e1e1e',
          hover: '#1f1f1f',
          active: '#252525',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'type-in': 'typeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'neon-flicker': 'neonFlicker 4s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        glowPulse: {
          '0%,100%': { filter: 'drop-shadow(0 0 4px currentColor)' },
          '50%': { filter: 'drop-shadow(0 0 12px currentColor) drop-shadow(0 0 24px currentColor)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typeIn: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        neonFlicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: '1' },
          '20%,24%,55%': { opacity: '0.6' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 8px #00ffff, 0 0 20px #00ffff40',
        'neon-green': '0 0 8px #39ff14, 0 0 20px #39ff1440',
        'neon-magenta': '0 0 8px #ff00ff, 0 0 20px #ff00ff40',
      },
    },
  },
  plugins: [],
};
