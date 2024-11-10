import { Inter } from 'next/font/google'
import Header from './components/layout/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NSC - Leading Alloy Steel Stokist',
  description: 'Your go-to source for alloy steel products in Jamnagar since 1968.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}