'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DashboardLayout from './components/DashboardLayout'
import WelcomeSection from './components/WelcomeSection'
import ProgressOverview from './components/ProgressOverview'
import AIChat from './components/AIChat'
import LearningModules from './components/LearningModules'
import Achievements from './components/Achievements'

interface User {
  id: string
  name: string
  email: string
  joinDate: string
  subscription: string
  progress: {
    coursesCompleted: number
    totalCourses: number
    xpPoints: number
    streak: number
    certificates: string[]
  }
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('chaincraft_user')
    if (!userData) {
      router.push('/')
      return
    }

    try {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
    } catch (error) {
      console.error('Error parsing user data:', error)
      router.push('/')
    } finally {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <DashboardLayout user={user}>
      <div className="space-y-8">
        <WelcomeSection user={user} />
        <ProgressOverview user={user} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <LearningModules />
            <Achievements user={user} />
          </div>
          <div>
            <AIChat />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}