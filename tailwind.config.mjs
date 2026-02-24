/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#6320EE',
        secondary: '#48E5C2',
        light: '#FCFCFC',
        dark: '#1C1C1C'
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6320EE 0%, #48E5C2 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(99, 32, 238, 0.06) 0%, rgba(72, 229, 194, 0.04) 100%)'
      }
    }
  },
  plugins: []
}
