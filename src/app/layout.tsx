import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Type2Lifestyles - Your Type 2 Diabetes Management Resource',
  description: 'Expert tips, resources, and tools specifically for managing Type 2 diabetes. Track your health with Type2Lyfe app.',
  keywords: ['type 2 diabetes', 'type 2 diabetes management', 'blood sugar', 'glucose tracking', 'T2D', 'health app', 'diabetes type 2'],
  openGraph: {
    title: 'Type2Lifestyles - Your Type 2 Diabetes Management Resource',
    description: 'Expert tips, resources, and tools specifically for managing Type 2 diabetes.',
    url: 'https://type2lifestyles.com',
    siteName: 'Type2Lifestyles',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
