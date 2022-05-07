module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          //brand pode ser colocado no lugar do Violat
          300: '#996DFF',
          500: '#8257e6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
}
