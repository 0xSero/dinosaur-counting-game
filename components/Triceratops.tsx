'use client'

interface TriceratopsProps {
  index: number
  isNew?: boolean
}

export default function Triceratops({ index, isNew = false }: TriceratopsProps) {
  const colors = [
    { body: '#10b981', frill: '#059669', horns: '#fbbf24' },
    { body: '#6366f1', frill: '#4f46e5', horns: '#fbbf24' },
    { body: '#f59e0b', frill: '#d97706', horns: '#fef3c7' },
    { body: '#ef4444', frill: '#dc2626', horns: '#fbbf24' },
    { body: '#8b5cf6', frill: '#7c3aed', horns: '#fef3c7' },
  ]

  const color = colors[index % colors.length]

  return (
    <div className={`relative ${isNew ? 'animate-bounce-in' : ''}`}>
      <svg
        width="200"
        height="180"
        viewBox="0 0 220 200"
        className="animate-stomp"
      >
        {/* Shadow */}
        <ellipse cx="110" cy="185" rx="65" ry="10" fill="rgba(0,0,0,0.2)" />

        {/* Tail */}
        <path
          d="M 165 140 Q 190 135 205 125"
          stroke={color.body}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />

        {/* Back Legs */}
        <rect x="140" y="145" width="22" height="40" rx="11" fill={color.body} />
        <rect x="110" y="145" width="22" height="40" rx="11" fill={color.body} />

        {/* Body */}
        <ellipse cx="110" cy="135" rx="60" ry="45" fill={color.body} />
        <ellipse cx="105" cy="145" rx="50" ry="35" fill={color.frill} opacity="0.3" />

        {/* Front Legs */}
        <rect x="75" y="145" width="22" height="40" rx="11" fill={color.body} />
        <rect x="45" y="145" width="22" height="40" rx="11" fill={color.body} />

        {/* Neck Frill */}
        <path
          d="M 60 100 Q 30 70 35 40 Q 40 20 60 15 Q 80 12 95 20 Q 105 30 100 50 Q 95 75 75 95 Z"
          fill={color.frill}
          stroke={color.body}
          strokeWidth="3"
        />

        {/* Frill Spots */}
        <circle cx="55" cy="45" r="6" fill={color.horns} opacity="0.8" />
        <circle cx="70" cy="35" r="5" fill={color.horns} opacity="0.8" />
        <circle cx="80" cy="50" r="5" fill={color.horns} opacity="0.8" />

        {/* Head */}
        <ellipse cx="55" cy="110" rx="35" ry="30" fill={color.body} />

        {/* Face Shield */}
        <path
          d="M 25 110 Q 20 105 22 100 Q 25 95 30 95 L 55 100 Z"
          fill={color.frill}
        />

        {/* Horns */}
        <path
          d="M 48 90 L 45 70 L 52 88"
          fill={color.horns}
          stroke="#d97706"
          strokeWidth="1"
        />
        <path
          d="M 62 90 L 60 70 L 65 88"
          fill={color.horns}
          stroke="#d97706"
          strokeWidth="1"
        />
        <path
          d="M 30 105 L 15 100 L 32 108"
          fill={color.horns}
          stroke="#d97706"
          strokeWidth="1"
        />

        {/* Eye */}
        <circle cx="60" cy="105" r="6" fill="white" />
        <circle cx="62" cy="105" r="4" fill="#1f2937" />
        <circle cx="63" cy="104" r="2" fill="white" />

        {/* Smile */}
        <path
          d="M 30 115 Q 35 120 42 118"
          stroke="#1f2937"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body Pattern */}
        <circle cx="120" cy="125" r="8" fill={color.frill} opacity="0.4" />
        <circle cx="100" cy="140" r="7" fill={color.frill} opacity="0.4" />
        <circle cx="135" cy="140" r="6" fill={color.frill} opacity="0.4" />
      </svg>
    </div>
  )
}
