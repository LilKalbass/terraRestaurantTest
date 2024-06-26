/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    screens: {
      ph: '360px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1600px'
    },
    colors: {
      green: '#00857A',
      light_green: 'rgb(0, 133, 122)',
      black: '#161616',
      white: 'rgb(255, 255, 255)',
      border_white: 'rgb(221, 221, 221)',
      footer: 'rgb(16, 16, 16)'
    },
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)'],
        arsenal: ['var(--font-arsenal)'],
        montez: ['var(--font-montez)']
      },
      backgroundImage: {
        hero: 'url(/assets/hero/webp/HeroBg70.webp)',
        about: 'url(/assets/about/webp/AboutBg70.webp)',
        gallery: 'url(/assets/gallery/webp/GalleryBg70.webp)',
        booking: 'url(/assets/webp/BookBg70.webp)',
        schedule: 'url(/assets/schedule/webp/BgSchedule70.webp)'
      },
      boxShadow: {
        primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}