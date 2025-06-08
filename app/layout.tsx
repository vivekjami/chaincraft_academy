import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'ChainCraft Academy - Learn Blockchain with AI',
  description: 'Master blockchain technology with our AI-powered learning platform. Interactive courses, visual builders, and NFT certificates.',
  keywords: 'blockchain, cryptocurrency, web3, learning, AI, education, smart contracts, DeFi',
  authors: [{ name: 'ChainCraft Academy' }],
  openGraph: {
    title: 'ChainCraft Academy - Learn Blockchain with AI',
    description: 'Master blockchain technology with our AI-powered learning platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
      </body>
    </html>
  )
}