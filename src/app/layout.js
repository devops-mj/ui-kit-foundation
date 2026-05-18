import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UI Kit Foundation',
  description: 'High-performance starter template for digital products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}