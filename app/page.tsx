'use client'

import { useState, useEffect } from 'react'
import TRex from '@/components/TRex'
import Brontosaurus from '@/components/Brontosaurus'
import Triceratops from '@/components/Triceratops'
import Stegosaurus from '@/components/Stegosaurus'
import Pterodactyl from '@/components/Pterodactyl'

export default function Home() {
  const [count, setCount] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [celebrate, setCelebrate] = useState(false)
  const [buttonPop, setButtonPop] = useState<string | null>(null)
  const [dinosaurs, setDinosaurs] = useState<Array<{id: number, type: number}>>([])

  const DinosaurComponents = [TRex, Brontosaurus, Triceratops, Stegosaurus, Pterodactyl]

  const addDinosaur = () => {
    if (count < 10) {
      const newDino = { id: Date.now(), type: Math.floor(Math.random() * DinosaurComponents.length) }
      setDinosaurs([...dinosaurs, newDino])
      setCount(count + 1)
      setAnimating(true)
      setButtonPop('add')
      setTimeout(() => setAnimating(false), 600)
      setTimeout(() => setButtonPop(null), 300)

      // Celebrate when reaching milestones
      if (count + 1 === 5 || count + 1 === 10) {
        setCelebrate(true)
        setTimeout(() => setCelebrate(false), 3000)
      }
    }
  }

  const removeDinosaur = () => {
    if (count > 0) {
      setDinosaurs(dinosaurs.slice(0, -1))
      setCount(count - 1)
      setButtonPop('remove')
      setTimeout(() => setButtonPop(null), 300)
    }
  }

  const reset = () => {
    setDinosaurs([])
    setCount(0)
    setButtonPop('reset')
    setTimeout(() => setButtonPop(null), 300)
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-gentle-sway">☁️</div>
        <div className="absolute top-20 right-20 text-8xl opacity-20 animate-gentle-sway" style={{animationDelay: '1s'}}>☁️</div>
        <div className="absolute bottom-20 left-1/4 text-7xl opacity-20 animate-gentle-sway" style={{animationDelay: '2s'}}>☁️</div>
        <div className="absolute top-1/3 right-10 text-5xl opacity-20 animate-gentle-sway" style={{animationDelay: '1.5s'}}>☁️</div>
      </div>

      {/* Celebration effects */}
      {celebrate && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {/* Star burst effect */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute text-5xl animate-star-burst"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              ⭐
            </div>
          ))}
          {/* Confetti */}
          {[...Array(40)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute text-3xl animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {['🎉', '🎊', '✨', '🌟', '💫'][i % 5]}
            </div>
          ))}
        </div>
      )}

      <div className="w-full max-w-7xl z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl ${celebrate ? 'animate-rainbow' : ''}`}>
            🦕 Count the Dinosaurs! 🦖
          </h1>
        </div>

        {/* Main counting area */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10 border-4 border-purple-300">
          {/* Big number display with rainbow effect when celebrating */}
          <div className="text-center mb-6">
            <div className={`text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 ${animating ? 'scale-125 rotate-12' : 'scale-100 rotate-0'} ${celebrate ? 'animate-rainbow' : ''}`}>
              {count}
            </div>
          </div>

          {/* Dinosaur display area - larger and more spacious */}
          <div className="min-h-[250px] md:min-h-[400px] flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6 p-6 md:p-10 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl border-4 border-dashed border-purple-200 relative overflow-hidden">
            {/* Decorative grass at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-200/50 to-transparent pointer-events-none" />

            {count === 0 ? (
              <div className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-bold text-center animate-pulse">
                Press the green + button<br />to add dinosaurs!
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                {dinosaurs.map((dino, i) => {
                  const DinoComponent = DinosaurComponents[dino.type]
                  return (
                    <div
                      key={dino.id}
                      className="transform hover:scale-110 transition-transform cursor-pointer"
                    >
                      <DinoComponent index={i} isNew={i === dinosaurs.length - 1} />
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Control buttons - bigger and more impressive */}
          <div className="flex gap-4 md:gap-8 justify-center items-center mb-6">
            {/* Minus button */}
            <button
              onClick={removeDinosaur}
              disabled={count === 0}
              className={`w-28 h-28 md:w-40 md:h-40 rounded-3xl text-6xl md:text-8xl font-black shadow-2xl transition-all duration-200 border-4 ${
                count === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-400'
                  : 'bg-gradient-to-br from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700 active:scale-90 border-red-700 hover:shadow-red-500/50'
              } ${buttonPop === 'remove' ? 'animate-button-pop' : ''}`}
              aria-label="Remove dinosaur"
            >
              −
            </button>

            {/* Reset button */}
            <button
              onClick={reset}
              className={`w-28 h-28 md:w-40 md:h-40 rounded-3xl text-5xl md:text-6xl font-black bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-2xl hover:from-yellow-500 hover:to-orange-600 active:scale-90 transition-all duration-200 border-4 border-orange-600 hover:shadow-yellow-500/50 ${buttonPop === 'reset' ? 'animate-button-pop' : ''}`}
              aria-label="Reset count"
            >
              🔄
            </button>

            {/* Plus button */}
            <button
              onClick={addDinosaur}
              disabled={count === 10}
              className={`w-28 h-28 md:w-40 md:h-40 rounded-3xl text-6xl md:text-8xl font-black shadow-2xl transition-all duration-200 border-4 ${
                count === 10
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-400'
                  : 'bg-gradient-to-br from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700 active:scale-90 border-green-700 hover:shadow-green-500/50'
              } ${buttonPop === 'add' ? 'animate-button-pop' : ''}`}
              aria-label="Add dinosaur"
            >
              +
            </button>
          </div>

          {/* Encouragement message with bigger text and animations */}
          {count > 0 && (
            <div className="text-center">
              <p className={`text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${animating ? 'scale-110' : 'scale-100'}`}>
                {count === 1 && "🎉 Great start! 🎉"}
                {count === 2 && "👏 You can count to 2! 👏"}
                {count === 3 && "🌟 Three dinosaurs! 🌟"}
                {count === 4 && "💪 Four! You're doing great! 💪"}
                {count === 5 && "🙌 FIVE! High five! 🙌"}
                {count === 6 && "✨ Six dinosaurs! Amazing! ✨"}
                {count === 7 && "🍀 Lucky number seven! 🍀"}
                {count === 8 && "⭐ Eight! You're a superstar! ⭐"}
                {count === 9 && "🚀 Nine! Almost there! 🚀"}
                {count === 10 && "🏆 TEN! You're a champion! 🏆"}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
