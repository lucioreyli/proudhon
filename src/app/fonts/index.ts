import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })

export const gtWalsheim = localFont({
  weight: '500',
  src: './GTWalsheimPro-Medium.woff2',
})
