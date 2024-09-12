/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'comic': ['Comic Neue', 'sans-serif' ],
    },
    fontWeight: {
      // Asegúrate de que los pesos de fuente se alineen con las variantes de tu fuente
      light: 300,
      normal: 400,
      bold: 700,
    },
    
  },
  plugins: [],
}

