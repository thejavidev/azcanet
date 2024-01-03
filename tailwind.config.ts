import type { Config } from 'tailwindcss'

const config: Config = {
  mode:"jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1479px'},
      'xl': {'max': '1299px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '566px'},
      'xs': {'max': '480px'},
    },
  },
  plugins: [],
}
export default config
