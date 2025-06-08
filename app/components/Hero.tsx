'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Learn Blockchain in Plain English with AI'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-pulse-slow">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">AI-Powered Learning Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block gradient-text min-h-[1.2em]">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master blockchain technology with interactive courses, visual smart contract builders, 
            and personalized AI tutoring. No technical background required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Learning Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group glass text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-gray-300">Students Learning</div>
            </div>
            <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}