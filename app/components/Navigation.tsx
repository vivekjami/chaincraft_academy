'use client'

import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'

interface NavigationProps {
  onAuthClick: (mode: 'login' | 'signup') => void
}

export default function Navigation({ onAuthClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold gradient-text">ChainCraft Academy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">
              Community
            </a>
            <button
              onClick={() => onAuthClick('login')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => onAuthClick('signup')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark rounded-lg mt-2">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#community"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <button
                onClick={() => {
                  onAuthClick('login')
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  onAuthClick('signup')
                  setIsMenuOpen(false)
                }}
                className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}