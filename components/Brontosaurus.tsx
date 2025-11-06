'use client'

interface BrontosaurusProps {
  index: number
  isNew?: boolean
}

export default function Brontosaurus({ index, isNew = false }: BrontosaurusProps) {
  const colors = [
    { body: '#3b82f6', spots: '#2563eb', belly: '#60a5fa' },
    { body: '#ec4899', spots: '#db2777', belly: '#f472b6' },
    { body: '#14b8a6', spots: '#0d9488', belly: '#2dd4bf' },
    { body: '#8b5cf6', spots: '#7c3aed', belly: '#a78bfa' },
    { body: '#f43f5e', spots: '#e11d48', belly: '#fb7185' },
  ]

  const color = colors[index % colors.length]

  return (
    <div className={`relative ${isNew ? 'animate-bounce-in' : ''}`}>
      <svg
        width="200"
        height="180"
        viewBox="0 0 220 200"
        className="animate-gentle-sway"
      >
        {/* Shadow */}
        <ellipse cx="110" cy="185" rx="70" ry="10" fill="rgba(0,0,0,0.2)" />

        {/* Tail */}
        <path
          d="M 170 130 Q 200 120 210 90 Q 215 70 218 40"
          stroke={color.body}
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          className="animate-tail-wag"
        />

        {/* Back Legs */}
        <rect x="140" y="140" width="18" height="45" rx="9" fill={color.body} />
        <rect x="115" y="140" width="18" height="45" rx="9" fill={color.body} />

        {/* Body */}
        <ellipse cx="110" cy="130" rx="65" ry="50" fill={color.body} />
        <ellipse cx="110" cy="140" rx="55" ry="40" fill={color.belly} />

        {/* Front Legs */}
        <rect x="70" y="140" width="18" height="45" rx="9" fill={color.body} />
        <rect x="45" y="140" width="18" height="45" rx="9" fill={color.body} />

        {/* Neck (with animation) */}
        <g className="animate-neck-move origin-bottom">
          <path
            d="M 75 110 Q 60 80 55 50 Q 52 30 50 10"
            stroke={color.body}
            strokeWidth="30"
            fill="none"
            strokeLinecap="round"
          />

          {/* Head */}
          <ellipse cx="45" cy="15" rx="20" ry="18" fill={color.body} />

          {/* Eye */}
          <circle cx="52" cy="12" r="5" fill="white" />
          <circle cx="53" cy="12" r="3" fill="#1f2937" />
          <circle cx="54" cy="11" r="1.5" fill="white" />

          {/* Smile */}
          <path
            d="M 35 16 Q 40 20 45 18"
            stroke="#1f2937"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Spots */}
        <circle cx="120" cy="120" r="10" fill={color.spots} opacity="0.5" />
        <circle cx="95" cy="135" r="8" fill={color.spots} opacity="0.5" />
        <circle cx="140" cy="135" r="9" fill={color.spots} opacity="0.5" />
        <circle cx="110" cy="150" r="7" fill={color.spots} opacity="0.5" />
      </svg>
    </div>
  )
}
