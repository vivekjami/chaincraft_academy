'use client'

import { Award, Star, Zap, Target, Trophy, Medal } from 'lucide-react'

interface User {
  progress: {
    xpPoints: number
    streak: number
    certificates: string[]
  }
}

interface AchievementsProps {
  user: User
}

const achievements = [
  {
    id: 1,
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: Star,
    unlocked: true,
    color: 'from-yellow-500 to-orange-500',
    xp: 50
  },
  {
    id: 2,
    title: 'Smart Contract Master',
    description: 'Deploy your first smart contract',
    icon: Zap,
    unlocked: false,
    color: 'from-blue-500 to-purple-500',
    xp: 200
  },
  {
    id: 3,
    title: 'Streak Warrior',
    description: 'Maintain a 7-day learning streak',
    icon: Target,
    unlocked: false,
    color: 'from-green-500 to-emerald-500',
    xp: 150
  },
  {
    id: 4,
    title: 'NFT Creator',
    description: 'Mint your first NFT certificate',
    icon: Award,
    unlocked: false,
    color: 'from-purple-500 to-pink-500',
    xp: 300
  },
  {
    id: 5,
    title: 'Community Helper',
    description: 'Help 10 fellow learners in the forum',
    icon: Trophy,
    unlocked: false,
    color: 'from-orange-500 to-red-500',
    xp: 250
  },
  {
    id: 6,
    title: 'Blockchain Expert',
    description: 'Complete all advanced courses',
    icon: Medal,
    unlocked: false,
    color: 'from-indigo-500 to-purple-500',
    xp: 500
  }
]

export default function Achievements({ user }: AchievementsProps) {
  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalXP = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0)

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white">Achievements</h3>
          <p className="text-gray-300">{unlockedCount}/{achievements.length} unlocked</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold gradient-text">{totalXP} XP</div>
          <div className="text-sm text-gray-300">Total earned</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative rounded-lg p-4 border transition-all duration-300 ${
              achievement.unlocked
                ? 'bg-white/10 border-purple-500/50 hover:bg-white/15'
                : 'bg-gray-800/50 border-gray-700 opacity-60'
            }`}
          >
            {achievement.unlocked && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Star className="h-3 w-3 text-white" />
              </div>
            )}

            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center ${
                !achievement.unlocked ? 'grayscale' : ''
              }`}>
                <achievement.icon className="h-5 w-5 text-white" />
              </div>
              
              <div className="flex-1">
                <h4 className={`font-semibold mb-1 ${
                  achievement.unlocked ? 'text-white' : 'text-gray-400'
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm mb-2 ${
                  achievement.unlocked ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {achievement.description}
                </p>
                <div className={`text-xs font-medium ${
                  achievement.unlocked ? 'text-purple-400' : 'text-gray-500'
                }`}>
                  +{achievement.xp} XP
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 glass rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Next Achievement</span>
          <span className="text-sm text-purple-400">Smart Contract Master</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full w-1/3"></div>
        </div>
        <p className="text-xs text-gray-400 mt-2">Deploy your first smart contract to unlock</p>
      </div>
    </div>
  )
}