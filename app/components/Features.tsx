'use client'

import { Bot, Blocks, Award, Users, Code, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Tutor',
    description: 'Get instant answers to blockchain questions in plain English. Our AI explains complex concepts like Bitcoin, Ethereum, and DeFi in simple terms.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Blocks,
    title: 'Visual Blockchain Builder',
    description: 'Drag and drop components to build smart contracts visually. See your code generate in real-time with step-by-step explanations.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    title: 'NFT Certificates',
    description: 'Earn beautiful NFT certificates for completing courses. Showcase your blockchain knowledge with verifiable credentials.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Learning Community',
    description: 'Connect with fellow learners, join study groups, and get help from experienced blockchain developers.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Code,
    title: 'Smart Contract Templates',
    description: 'Start with proven templates for tokens, NFTs, and DeFi protocols. Customize and deploy with confidence.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics, achievement badges, and personalized recommendations.',
    gradient: 'from-teal-500 to-blue-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Everything You Need</span>
            <br />
            <span className="text-white">to Master Blockchain</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From complete beginner to blockchain expert, our platform provides all the tools 
            and support you need for your Web3 journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 glass rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Learn by Doing</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our interactive approach means you'll be building real blockchain applications 
                from day one. No boring lectures - just hands-on learning that sticks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Interactive coding exercises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Real-world project portfolio</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Industry-recognized certificates</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Smart Contract Builder</h4>
                <p className="text-gray-300 text-sm">Drag, drop, and deploy your first smart contract in minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}