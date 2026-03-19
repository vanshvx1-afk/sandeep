/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void:     { DEFAULT: '#070B14', 50: '#0d1220', 100: '#0a0e1a' },
        cyan:     { DEFAULT: '#00D4FF', dark: '#00A8CC', glow: '#00D4FF33' },
        violet:   { DEFAULT: '#7B61FF', dark: '#5B41DF', glow: '#7B61FF33' },
        gold:     { DEFAULT: '#FFD700', dark: '#D4A900', glow: '#FFD70033' },
        surface:  { DEFAULT: '#111827', card: '#0F172A', border: '#1E293B' },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gradient':   'gradientShift 8s ease infinite',
        'spin-slow':  'spin 12s linear infinite',
        'marquee':    'marquee 25s linear infinite',
      },
      keyframes: {
        float:         { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-18px)' } },
        glowPulse:     { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
        gradientShift: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        marquee:       { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      backgroundImage: {
        'mesh-cyan':   'radial-gradient(circle at 20% 20%, #00D4FF18 0%, transparent 50%)',
        'mesh-violet': 'radial-gradient(circle at 80% 80%, #7B61FF18 0%, transparent 50%)',
        'mesh-gold':   'radial-gradient(circle at 50% 50%, #FFD70012 0%, transparent 60%)',
        'grid-pattern':'linear-gradient(rgba(30,41,59,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.3) 1px, transparent 1px)',
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'glass':      '0 8px 32px rgba(0,0,0,0.37), inset 0 1px 0 rgba(255,255,255,0.05)',
        'cyan-glow':  '0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)',
        'violet-glow':'0 0 30px rgba(123,97,255,0.3), 0 0 60px rgba(123,97,255,0.1)',
        'gold-glow':  '0 0 30px rgba(255,215,0,0.3), 0 0 60px rgba(255,215,0,0.1)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.2)',
      },
    },
  },
  plugins: [],
}
