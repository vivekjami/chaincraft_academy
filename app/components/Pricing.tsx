'use client'

import { Check, Star, Zap, Crown } from 'lucide-react'

interface PricingProps {
  onGetStarted: () => void
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with blockchain basics',
    icon: Star,
    features: [
      'Access to 3 beginner courses',
      'Basic AI chat support',
      'Community forum access',
      'Progress tracking',
      'Mobile app access'
    ],
    limitations: [
      'Limited to 10 AI questions per day',
      'No certificate generation',
      'No advanced courses'
    ],
    buttonText: 'Start Free',
    popular: false,
    gradient: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'Everything you need to become a blockchain expert',
    icon: Zap,
    features: [
      'All courses and learning paths',
      'Unlimited AI tutor access',
      'Visual blockchain builder',
      'NFT certificate generation',
      'Priority community support',
      'Advanced project templates',
      'Code review and feedback',
      'Weekly live sessions'
    ],
    limitations: [],
    buttonText: 'Start Pro Trial',
    popular: true,
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Advanced features for teams and organizations',
    icon: Crown,
    features: [
      'Everything in Pro',
      'Team management dashboard',
      'Custom learning paths',
      'White-label solutions',
      'Dedicated account manager',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'SLA guarantee'
    ],
    limitations: [],
    buttonText: 'Contact Sales',
    popular: false,
    gradient: 'from-orange-600 to-red-600'
  }
]

export default function Pricing({ onGetStarted }: PricingProps) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Choose Your</span>
            <br />
            <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core learning platform 
            with different levels of support and advanced features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-purple-500 bg-white/5' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${plan.gradient} mb-4`}>
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period !== 'contact us' && (
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  )}
                </div>

                <button
                  onClick={onGetStarted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                      : 'glass text-white hover:bg-white/20'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-700">
                    <h5 className="font-medium text-gray-400 mb-2">Limitations:</h5>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Calculate Your ROI</span>
            </h3>
            <p className="text-xl text-gray-300">
              See how ChainCraft Academy can accelerate your blockchain career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">6 months</div>
              <div className="text-gray-300">Average time to complete</div>
              <div className="text-sm text-gray-400 mt-2">vs 2+ years self-learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">$85K</div>
              <div className="text-gray-300">Average blockchain developer salary</div>
              <div className="text-sm text-gray-400 mt-2">According to industry reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2,900%</div>
              <div className="text-gray-300">ROI on Pro plan investment</div>
              <div className="text-sm text-gray-400 mt-2">Based on salary increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}