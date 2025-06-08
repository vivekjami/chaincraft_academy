'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  BookOpen, 
  Home, 
  Blocks, 
  Users, 
  Award, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search
} from 'lucide-react'
import toast from 'react-hot-toast'

interface User {
  id: string
  name: string
  email: string
  subscription: string
}

interface DashboardLayoutProps {
  children: React.ReactNode
  user: User
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home, current: true },
  { name: 'Blockchain Builder', href: '/dashboard/builder', icon: Blocks, current: false },
  { name: 'Community', href: '/dashboard/community', icon: Users, current: false },
  { name: 'Certificates', href: '/dashboard/certificates', icon: Award, current: false },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings, current: false },
]

export default function DashboardLayout({ children, user }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('chaincraft_user')
    toast.success('Logged out successfully')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 w-64 glass-dark">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <span className="text-lg font-bold gradient-text">ChainCraft</span>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <nav className="mt-8 px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  item.current
                    ? 'bg-purple-600/20 text-purple-300'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="glass-dark border-r border-gray-700">
          <div className="flex items-center h-16 px-6 border-b border-gray-700">
            <BookOpen className="h-8 w-8 text-purple-400" />
            <span className="ml-2 text-lg font-bold gradient-text">ChainCraft</span>
          </div>
          
          <nav className="mt-8 px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  item.current
                    ? 'bg-purple-600/20 text-purple-300'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* User section */}
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user.name}</p>
                <p className="text-xs text-gray-400 capitalize">{user.subscription} Plan</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="glass-dark border-b border-gray-700 h-16 flex items-center justify-between px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, topics..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-400 hover:text-white">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="hidden lg:flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-white font-medium">{user.name}</span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}