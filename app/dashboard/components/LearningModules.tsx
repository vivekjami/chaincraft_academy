'use client'

import { Play, Clock, Users, CheckCircle } from 'lucide-react'

const modules = [
  {
    id: 1,
    title: 'Blockchain Basics',
    description: 'Understanding the fundamentals of blockchain technology',
    duration: '2 hours',
    students: 1250,
    completed: false,
    progress: 0,
    difficulty: 'Beginner',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Smart Contracts 101',
    description: 'Learn to create and deploy your first smart contract',
    duration: '3 hours',
    students: 890,
    completed: false,
    progress: 65,
    difficulty: 'Intermediate',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'DeFi Fundamentals',
    description: 'Explore decentralized finance protocols and strategies',
    duration: '4 hours',
    students: 567,
    completed: true,
    progress: 100,
    difficulty: 'Advanced',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'NFT Creation & Trading',
    description: 'Create, mint, and trade non-fungible tokens',
    duration: '2.5 hours',
    students: 723,
    completed: false,
    progress: 0,
    difficulty: 'Intermediate',
    color: 'from-orange-500 to-red-500'
  }
]

export default function LearningModules() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Learning Modules</h3>
        <button className="text-purple-400 hover:text-purple-300 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="glass rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {module.title}
                  </h4>
                  {module.completed && (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  )}
                </div>
                <p className="text-gray-300 mb-3">{module.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{module.students} students</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    module.difficulty === 'Beginner' ? 'bg-green-600/20 text-green-400' :
                    module.difficulty === 'Intermediate' ? 'bg-yellow-600/20 text-yellow-400' :
                    'bg-red-600/20 text-red-400'
                  }`}>
                    {module.difficulty}
                  </span>
                </div>
              </div>

              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>

            {module.progress > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Progress</span>
                  <span className="text-sm text-gray-300">{module.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${module.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
              module.completed
                ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                : module.progress > 0
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                : 'glass text-white hover:bg-white/20'
            }`}>
              {module.completed ? 'Completed' : module.progress > 0 ? 'Continue Learning' : 'Start Module'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}