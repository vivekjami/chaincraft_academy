'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

const aiResponses = {
  bitcoin: "Bitcoin is like digital gold - it's scarce, valuable, and can't be counterfeited. Think of it as a digital currency that no single person or government controls. Instead, it's maintained by thousands of computers around the world working together to verify transactions.",
  
  ethereum: "Ethereum is like a world computer that can run programs called smart contracts. While Bitcoin is mainly for sending money, Ethereum lets you build applications like decentralized finance (DeFi) platforms, NFT marketplaces, and more.",
  
  blockchain: "A blockchain is like a digital ledger that's shared among many computers. Imagine a notebook where every page is connected to the previous one, and everyone has a copy. Once something is written, it can't be erased or changed without everyone noticing.",
  
  smartcontract: "Smart contracts are like vending machines - you put money in, and if you meet the conditions, you automatically get what you paid for. No human intervention needed! They're programs that automatically execute when certain conditions are met.",
  
  defi: "DeFi (Decentralized Finance) is traditional banking rebuilt with code instead of buildings. You can lend, borrow, trade, and earn interest on your crypto without needing a bank. It's like having a bank that's open 24/7 and runs on autopilot.",
  
  nft: "NFTs (Non-Fungible Tokens) are like digital certificates of ownership. Think of them as unique digital trading cards - each one is different and proves you own a specific digital item, whether it's art, music, or even a tweet.",
  
  wallet: "A crypto wallet is like a digital bank account, but you're the bank! It stores your private keys (like super-secure passwords) that prove you own your cryptocurrency. Remember: not your keys, not your crypto!",
  
  mining: "Mining is like being a digital accountant who gets paid in cryptocurrency. Miners use powerful computers to solve complex math problems that verify transactions and secure the network. The first to solve it gets rewarded with new coins.",
  
  default: "Great question! I'm here to help you understand blockchain concepts in simple terms. You can ask me about Bitcoin, Ethereum, smart contracts, DeFi, NFTs, wallets, mining, or any other blockchain topic. What would you like to learn about?"
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your AI blockchain tutor. I can explain complex concepts in simple terms. What would you like to learn about today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('bitcoin') || message.includes('btc')) {
      return aiResponses.bitcoin
    } else if (message.includes('ethereum') || message.includes('eth')) {
      return aiResponses.ethereum
    } else if (message.includes('blockchain')) {
      return aiResponses.blockchain
    } else if (message.includes('smart contract')) {
      return aiResponses.smartcontract
    } else if (message.includes('defi') || message.includes('decentralized finance')) {
      return aiResponses.defi
    } else if (message.includes('nft') || message.includes('non-fungible')) {
      return aiResponses.nft
    } else if (message.includes('wallet')) {
      return aiResponses.wallet
    } else if (message.includes('mining') || message.includes('mine')) {
      return aiResponses.mining
    } else {
      return aiResponses.default
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(inputValue),
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="glass rounded-2xl p-6 h-[600px] flex flex-col">
      <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-700">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">AI Blockchain Tutor</h3>
          <p className="text-sm text-gray-300">Ask me anything about blockchain!</p>
        </div>
        <Sparkles className="h-5 w-5 text-purple-400 ml-auto animate-pulse" />
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-white" />
                )}
              </div>
              
              <div className={`rounded-lg p-4 ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30'
                  : 'bg-white/10 border border-gray-600'
              }`}>
                <p className="text-white leading-relaxed">{message.content}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3 max-w-[80%]">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-white/10 border border-gray-600 rounded-lg p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about Bitcoin, Ethereum, DeFi, NFTs..."
          className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isTyping}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}