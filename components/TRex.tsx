'use client'

import { useEffect, useState } from 'react'

interface TRexProps {
  index: number
  isNew?: boolean
}

export default function TRex({ index, isNew = false }: TRexProps) {
  const [roaring, setRoaring] = useState(false)

  useEffect(() => {
    if (isNew) {
      setTimeout(() => setRoaring(true), 300)
      setTimeout(() => setRoaring(false), 800)
    }
  }, [isNew])

  const colors = [
    { body: '#4ade80', spots: '#22c55e', belly: '#86efac' },
    { body: '#f97316', spots: '#ea580c', belly: '#fb923c' },
    { body: '#a855f7', spots: '#9333ea', belly: '#c084fc' },
    { body: '#06b6d4', spots: '#0891b2', belly: '#22d3ee' },
    { body: '#f59e0b', spots: '#d97706', belly: '#fbbf24' },
  ]

  const color = colors[index % colors.length]

  return (
    <div className={`relative ${isNew ? 'animate-bounce-in' : ''}`}>
      <svg
        width="180"
        height="180"
        viewBox="0 0 200 200"
        className={`transition-transform duration-300 ${roaring ? 'scale-110' : 'scale-100'}`}
      >
        {/* Shadow */}
        <ellipse cx="100" cy="185" rx="60" ry="8" fill="rgba(0,0,0,0.2)" />

        {/* Tail */}
        <path
          d="M 140 120 Q 170 110 180 90 Q 185 70 190 50"
          stroke={color.body}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          className="animate-tail-wag"
        />

        {/* Back Leg */}
        <rect x="115" y="130" width="20" height="40" rx="10" fill={color.body} />
        <rect x="115" y="165" width="25" height="15" rx="7" fill={color.body} />

        {/* Body */}
        <ellipse cx="100" cy="110" rx="50" ry="55" fill={color.body} />
        <ellipse cx="100" cy="120" rx="40" ry="45" fill={color.belly} />

        {/* Front Leg */}
        <rect x="70" y="130" width="20" height="40" rx="10" fill={color.body} />
        <rect x="70" y="165" width="25" height="15" rx="7" fill={color.body} />

        {/* Arm */}
        <g className="animate-arm-wave">
          <rect x="75" y="95" width="12" height="30" rx="6" fill={color.body} />
          <circle cx="81" cy="127" r="6" fill={color.body} />
        </g>

        {/* Neck */}
        <path
          d="M 85 85 Q 80 70 75 55"
          stroke={color.body}
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
        />

        {/* Head */}
        <ellipse cx="65" cy="45" rx="30" ry="25" fill={color.body} />

        {/* Mouth */}
        <path
          d={roaring ? "M 50 45 Q 35 50 40 55" : "M 50 45 L 35 48"}
          stroke="#1f2937"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="transition-all duration-200"
        />

        {/* Teeth */}
        {roaring && (
          <>
            <polygon points="40,47 42,47 41,52" fill="white" />
            <polygon points="44,47 46,47 45,52" fill="white" />
            <polygon points="48,46 50,46 49,51" fill="white" />
          </>
        )}

        {/* Eye */}
        <circle cx="72" cy="40" r="6" fill="white" />
        <circle cx="74" cy="40" r="4" fill="#1f2937" />
        <circle cx="75" cy="39" r="2" fill="white" />

        {/* Spots */}
        <circle cx="110" cy="100" r="8" fill={color.spots} opacity="0.6" />
        <circle cx="95" cy="125" r="6" fill={color.spots} opacity="0.6" />
        <circle cx="120" cy="115" r="7" fill={color.spots} opacity="0.6" />

        {/* Roar effect */}
        {roaring && (
          <g className="animate-pulse">
            <text x="25" y="35" fontSize="20" fill="#ef4444">ROAR!</text>
          </g>
        )}
      </svg>
    </div>
  )
}
