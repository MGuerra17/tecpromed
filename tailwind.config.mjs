/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#6320EE',
        secondary: '#48E5C2',
        tertiary: '#FFE787',
        light: '#FCFCFC',
        dark: '#1C1C1C'
      }
    }
  },
  plugins: []
}
