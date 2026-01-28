/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0C',
        bone: '#F9F6F2',
        kupuriCyan: '#00E5FF',
        kupuriBlue: '#2962FF',
        kupuriViolet: '#8a2be2',
      },
      fontSize: {
        'fluid-h1': 'clamp(4rem, 12vw, 15rem)',
        'fluid-h2': 'clamp(2.5rem, 8vw, 6rem)',
        'fluid-h3': 'clamp(1.5rem, 4vw, 3rem)',
        'fluid-body': 'clamp(1rem, 2vw, 1.25rem)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'lightning': 'lightning 4s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        lightning: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '0.8' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
      },
      backgroundImage: {
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
