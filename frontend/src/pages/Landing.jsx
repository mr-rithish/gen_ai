import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-white mb-4">
        ✨ <span className="text-purple-400">ArogyaMitra</span>
      </h1>
      <p className="text-gray-400 text-xl mb-8 max-w-lg">
        Your AI-powered fitness companion. Personalized plans, Indian nutrition, charity impact.
      </p>
      <div className="flex gap-4">
        <button onClick={() => navigate('/register')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition">
          Get Started →
        </button>
        <button onClick={() => navigate('/login')}
          className="border border-purple-600 text-purple-400 px-8 py-3 rounded-xl font-semibold hover:bg-purple-900/30 transition">
          Login
        </button>
      </div>
    </div>
  )
}