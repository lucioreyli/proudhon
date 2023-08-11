import './globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'luc.io',
  description: "Lucio's portfolio",
}

const RootLayout: React.FC<React.PropsWithChildren> = async ({ children }) => (
  <html lang="pt" className="dark:bg-bg-dark dark:text-white scroll-smooth">
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
