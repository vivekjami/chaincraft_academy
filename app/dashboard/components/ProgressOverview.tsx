'use client'

import { BookOpen, Award, Clock, Zap } from 'lucide-react'

interface User {
  progress: {
    coursesCompleted: number
    totalCourses: number
    xpPoints: number
    certificates: string[]
  }
}

interface ProgressOverviewProps {
  user: User
}

export default function ProgressOverview({ user }: ProgressOverviewProps) {
  const completionPercentage = Math.round((user.progress.coursesCompleted / user.progress.totalCourses) * 100)
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <BookOpen className="h-8 w-8 text-purple-400" />
          <span className="text-2xl font-bold text-white">{user.progress.coursesCompleted}/{user.progress.totalCourses}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Courses Completed</h3>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-300">{completionPercentage}% Complete</p>
      </div>

      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Award className="h-8 w-8 text-yellow-400" />
          <span className="text-2xl font-bold text-white">{user.progress.certificates.length}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">NFT Certificates</h3>
        <p className="text-sm text-gray-300">Blockchain verified achievements</p>
      </div>

      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Zap className="h-8 w-8 text-green-400" />
          <span className="text-2xl font-bold text-white">{user.progress.xpPoints}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">XP Points</h3>
        <p className="text-sm text-gray-300">Keep learning to earn more!</p>
      </div>

      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <Clock className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">2.5h</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">This Week</h3>
        <p className="text-sm text-gray-300">Time spent learning</p>
      </div>
    </div>
  )
}