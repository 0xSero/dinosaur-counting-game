'use client'

interface PterodactylProps {
  index: number
  isNew?: boolean
}

export default function Pterodactyl({ index, isNew = false }: PterodactylProps) {
  const colors = [
    { body: '#06b6d4', wings: '#0891b2', beak: '#f59e0b' },
    { body: '#a855f7', wings: '#9333ea', beak: '#f59e0b' },
    { body: '#ec4899', wings: '#db2777', beak: '#f59e0b' },
    { body: '#10b981', wings: '#059669', beak: '#f59e0b' },
    { body: '#f97316', wings: '#ea580c', beak: '#fbbf24' },
  ]

  const color = colors[index % colors.length]

  return (
    <div className={`relative ${isNew ? 'animate-bounce-in' : ''}`}>
      <svg
        width="200"
        height="180"
        viewBox="0 0 220 200"
        className="animate-fly"
      >
        {/* Shadow */}
        <ellipse cx="110" cy="185" rx="50" ry="8" fill="rgba(0,0,0,0.2)" className="animate-shadow-pulse" />

        {/* Left Wing */}
        <g className="animate-wing-flap origin-center">
          <path
            d="M 100 90 Q 40 60 20 80 Q 10 90 25 100 Q 50 110 85 100"
            fill={color.wings}
            stroke="#1f2937"
            strokeWidth="2"
            opacity="0.9"
          />
          <path
            d="M 70 85 Q 45 75 35 85"
            stroke={color.body}
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Body */}
        <ellipse cx="110" cy="100" rx="35" ry="40" fill={color.body} />
        <ellipse cx="110" cy="105" rx="25" ry="30" fill={color.wings} opacity="0.3" />

        {/* Right Wing */}
        <g className="animate-wing-flap-reverse origin-center">
          <path
            d="M 120 90 Q 180 60 200 80 Q 210 90 195 100 Q 170 110 135 100"
            fill={color.wings}
            stroke="#1f2937"
            strokeWidth="2"
            opacity="0.9"
          />
          <path
            d="M 150 85 Q 175 75 185 85"
            stroke={color.body}
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Tail */}
        <path
          d="M 110 135 L 110 165 L 115 170 L 110 165 L 105 170"
          fill={color.body}
          stroke="#1f2937"
          strokeWidth="1"
        />

        {/* Head Crest */}
        <path
          d="M 100 55 Q 95 35 105 30 Q 115 35 110 55"
          fill={color.beak}
          stroke="#1f2937"
          strokeWidth="1.5"
        />

        {/* Head */}
        <ellipse cx="105" cy="70" rx="28" ry="25" fill={color.body} />

        {/* Beak */}
        <path
          d="M 90 70 L 60 68 L 65 73 L 90 75 Z"
          fill={color.beak}
          stroke="#1f2937"
          strokeWidth="1.5"
        />

        {/* Eye */}
        <circle cx="100" cy="68" r="7" fill="white" />
        <circle cx="102" cy="68" r="5" fill="#1f2937" />
        <circle cx="103" cy="67" r="2" fill="white" />

        {/* Feet */}
        <g>
          <path d="M 100 135 L 95 155 M 95 155 L 90 158 M 95 155 L 95 158 M 95 155 L 100 158"
                stroke={color.beak}
                strokeWidth="3"
                strokeLinecap="round" />
          <path d="M 120 135 L 115 155 M 115 155 L 110 158 M 115 155 L 115 158 M 115 155 L 120 158"
                stroke={color.beak}
                strokeWidth="3"
                strokeLinecap="round" />
        </g>

        {/* Wing Detail Lines */}
        <path d="M 85 95 Q 60 80 40 88" stroke="#1f2937" strokeWidth="1.5" fill="none" opacity="0.4" />
        <path d="M 135 95 Q 160 80 180 88" stroke="#1f2937" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    </div>
  )
}
