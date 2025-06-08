'use client'

import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <Navigation onAuthClick={handleAuthClick} />
      <Hero onGetStarted={() => handleAuthClick('signup')} />
      <Features />
      <Pricing onGetStarted={() => handleAuthClick('signup')} />
      <Footer />
      
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}
    </main>
  )
}