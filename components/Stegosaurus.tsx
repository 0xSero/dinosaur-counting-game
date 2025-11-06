'use client'

interface StegosaurusProps {
  index: number
  isNew?: boolean
}

export default function Stegosaurus({ index, isNew = false }: StegosaurusProps) {
  const colors = [
    { body: '#fb923c', plates: '#ea580c', belly: '#fdba74' },
    { body: '#34d399', plates: '#10b981', belly: '#6ee7b7' },
    { body: '#a78bfa', plates: '#8b5cf6', belly: '#c4b5fd' },
    { body: '#fbbf24', plates: '#f59e0b', belly: '#fcd34d' },
    { body: '#f472b6', plates: '#ec4899', belly: '#f9a8d4' },
  ]

  const color = colors[index % colors.length]

  return (
    <div className={`relative ${isNew ? 'animate-bounce-in' : ''}`}>
      <svg
        width="220"
        height="180"
        viewBox="0 0 240 200"
        className="animate-gentle-sway"
      >
        {/* Shadow */}
        <ellipse cx="120" cy="185" rx="70" ry="10" fill="rgba(0,0,0,0.2)" />

        {/* Tail with spikes */}
        <path
          d="M 180 130 Q 210 125 225 115"
          stroke={color.body}
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          className="animate-tail-wag"
        />
        <polygon points="220,110 225,95 230,110" fill={color.plates} />
        <polygon points="215,115 220,100 225,115" fill={color.plates} />

        {/* Back Legs */}
        <rect x="150" y="145" width="20" height="40" rx="10" fill={color.body} />
        <rect x="120" y="145" width="20" height="40" rx="10" fill={color.body} />

        {/* Body */}
        <ellipse cx="120" cy="135" rx="65" ry="45" fill={color.body} />
        <ellipse cx="115" cy="145" rx="55" ry="35" fill={color.belly} />

        {/* Back Plates */}
        <g className="animate-plates-glow">
          <path d="M 170 105 Q 175 75 172 95 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
          <path d="M 155 100 Q 160 65 157 88 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
          <path d="M 140 98 Q 145 60 142 86 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
          <path d="M 125 97 Q 130 62 127 85 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
          <path d="M 110 98 Q 115 65 112 86 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
          <path d="M 95 100 Q 100 68 97 88 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
          <path d="M 80 102 Q 85 72 82 90 Z" fill={color.plates} stroke="#1f2937" strokeWidth="2" />
        </g>

        {/* Front Legs */}
        <rect x="80" y="145" width="20" height="40" rx="10" fill={color.body} />
        <rect x="50" y="145" width="20" height="40" rx="10" fill={color.body} />

        {/* Neck */}
        <path
          d="M 75 125 Q 65 115 60 105"
          stroke={color.body}
          strokeWidth="28"
          fill="none"
          strokeLinecap="round"
        />

        {/* Head */}
        <ellipse cx="50" cy="100" rx="25" ry="22" fill={color.body} />

        {/* Eye */}
        <circle cx="58" cy="95" r="6" fill="white" />
        <circle cx="60" cy="95" r="4" fill="#1f2937" />
        <circle cx="61" cy="94" r="2" fill="white" />

        {/* Smile */}
        <path
          d="M 35 102 Q 40 107 47 105"
          stroke="#1f2937"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Body Spots */}
        <circle cx="130" cy="140" r="7" fill={color.plates} opacity="0.3" />
        <circle cx="110" cy="150" r="6" fill={color.plates} opacity="0.3" />
        <circle cx="145" cy="145" r="6" fill={color.plates} opacity="0.3" />
      </svg>
    </div>
  )
}
