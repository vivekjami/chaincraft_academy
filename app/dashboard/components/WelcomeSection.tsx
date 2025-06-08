'use client'

import { Calendar, TrendingUp, Target } from 'lucide-react'
import { format } from 'date-fns'

interface User {
  name: string
  joinDate: string
  progress: {
    streak: number
    xpPoints: number
  }
}

interface WelcomeSectionProps {
  user: User
}

export default function WelcomeSection({ user }: WelcomeSectionProps) {
  const joinDate = new Date(user.joinDate)
  const daysSinceJoined = Math.floor((Date.now() - joinDate.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="gradient-text">{user.name}!</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to continue your blockchain journey? Let's build something amazing today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="glass rounded-lg p-4 text-center">
            <Calendar className="h-6 w-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{daysSinceJoined}</div>
            <div className="text-sm text-gray-300">Days Learning</div>
          </div>
          
          <div className="glass rounded-lg p-4 text-center">
            <TrendingUp className="h-6 w-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{user.progress.streak}</div>
            <div className="text-sm text-gray-300">Day Streak</div>
          </div>
          
          <div className="glass rounded-lg p-4 text-center">
            <Target className="h-6 w-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{user.progress.xpPoints}</div>
            <div className="text-sm text-gray-300">XP Points</div>
          </div>
        </div>
      </div>
    </div>
  )
}