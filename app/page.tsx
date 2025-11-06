'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [celebrate, setCelebrate] = useState(false)

  // Dinosaur emojis - fun and colorful!
  const dinosaurs = ['🦕', '🦖']

  const addDinosaur = () => {
    if (count < 10) {
      setCount(count + 1)
      setAnimating(true)
      setTimeout(() => setAnimating(false), 500)

      // Celebrate when reaching 5 and 10
      if (count + 1 === 5 || count + 1 === 10) {
        setCelebrate(true)
        setTimeout(() => setCelebrate(false), 2000)
      }
    }
  }

  const removeDinosaur = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Celebration stars */}
      {celebrate && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      )}

      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            🦕 Count the Dinosaurs! 🦖
          </h1>
        </div>

        {/* Main counting area */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Big number display */}
          <div className="text-center mb-8">
            <div className={`text-9xl md:text-[12rem] font-bold text-purple-600 transition-all duration-300 ${animating ? 'scale-125' : 'scale-100'}`}>
              {count}
            </div>
          </div>

          {/* Dinosaur display area */}
          <div className="min-h-[200px] md:min-h-[300px] flex flex-wrap items-center justify-center gap-4 mb-8 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl">
            {count === 0 ? (
              <div className="text-4xl md:text-6xl text-gray-400">
                Press + to add dinosaurs!
              </div>
            ) : (
              [...Array(count)].map((_, i) => (
                <div
                  key={i}
                  className={`text-7xl md:text-9xl dinosaur-enter ${i === count - 1 ? 'dinosaur-wiggle' : ''}`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {dinosaurs[i % 2]}
                </div>
              ))
            )}
          </div>

          {/* Control buttons */}
          <div className="flex gap-4 justify-center items-center">
            {/* Minus button */}
            <button
              onClick={removeDinosaur}
              disabled={count === 0}
              className={`w-24 h-24 md:w-32 md:h-32 rounded-full text-6xl md:text-7xl font-bold shadow-lg transition-all active:scale-95 ${
                count === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700'
              }`}
              aria-label="Remove dinosaur"
            >
              −
            </button>

            {/* Reset button */}
            <button
              onClick={reset}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full text-4xl md:text-5xl font-bold bg-yellow-400 text-yellow-900 shadow-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all active:scale-95"
              aria-label="Reset count"
            >
              🔄
            </button>

            {/* Plus button */}
            <button
              onClick={addDinosaur}
              disabled={count === 10}
              className={`w-24 h-24 md:w-32 md:h-32 rounded-full text-6xl md:text-7xl font-bold shadow-lg transition-all active:scale-95 ${
                count === 10
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700'
              }`}
              aria-label="Add dinosaur"
            >
              +
            </button>
          </div>

          {/* Encouragement message */}
          {count > 0 && (
            <div className="text-center mt-8">
              <p className="text-3xl md:text-5xl font-bold text-purple-600">
                {count === 1 && "Great start! 🎉"}
                {count === 2 && "You can count to 2! 👏"}
                {count === 3 && "Three dinosaurs! 🌟"}
                {count === 4 && "Four! You're doing great! 💪"}
                {count === 5 && "FIVE! High five! 🙌"}
                {count === 6 && "Six dinosaurs! Amazing! ✨"}
                {count === 7 && "Lucky number seven! 🍀"}
                {count === 8 && "Eight! You're a superstar! ⭐"}
                {count === 9 && "Nine! Almost there! 🚀"}
                {count === 10 && "TEN! You're a counting champion! 🏆"}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
