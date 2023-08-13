import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        'bg-dark': '#111',
        blue: '#0071e3',
        subtitle: '#c4c4c4',
      },
    },
  },
  plugins: [],
}
export default config
