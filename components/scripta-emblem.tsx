"use client"

import { useEffect, useRef } from "react"

export function ScriptaEmblem({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const nodes = svg.querySelectorAll(".node")
    nodes.forEach((node, i) => {
      const el = node as SVGElement
      el.style.animationDelay = `${i * 0.2}s`
    })
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F5D77A" />
          <stop offset="100%" stopColor="#B8941F" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            .node {
              animation: pulse 3s ease-in-out infinite;
            }
            .emblem-group {
              animation: float 6s ease-in-out infinite;
            }
          `}
        </style>
      </defs>

      <g className="emblem-group" filter="url(#glow)">
        {/* Quill - stylized and elegant */}
        <path
          d="M60 160 Q65 120, 85 80 Q95 60, 120 35 Q130 28, 140 30 Q145 32, 142 38 Q135 50, 125 70 Q110 100, 95 135 Q90 150, 70 165 Q62 168, 60 160Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />
        {/* Quill spine */}
        <path
          d="M70 155 Q80 110, 100 70 Q115 45, 135 35"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />
        {/* Quill feather lines */}
        <path d="M80 130 Q95 115, 115 85" stroke="#B8941F" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M85 120 Q100 105, 120 75" stroke="#B8941F" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M90 110 Q105 95, 125 65" stroke="#B8941F" strokeWidth="0.5" fill="none" opacity="0.5" />

        {/* Digital network nodes */}
        <circle className="node" cx="140" cy="45" r="6" fill="url(#goldGradient)" />
        <circle className="node" cx="160" cy="70" r="5" fill="url(#goldGradient)" />
        <circle className="node" cx="150" cy="100" r="4" fill="url(#goldGradient)" />
        <circle className="node" cx="170" cy="55" r="3" fill="url(#goldGradient)" />
        <circle className="node" cx="175" cy="85" r="3.5" fill="url(#goldGradient)" />
        <circle className="node" cx="155" cy="125" r="3" fill="url(#goldGradient)" />

        {/* Connection lines between nodes */}
        <line x1="140" y1="45" x2="160" y2="70" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
        <line x1="160" y1="70" x2="150" y2="100" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
        <line x1="140" y1="45" x2="170" y2="55" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
        <line x1="160" y1="70" x2="175" y2="85" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
        <line x1="170" y1="55" x2="175" y2="85" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
        <line x1="150" y1="100" x2="155" y2="125" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />
        <line x1="175" y1="85" x2="155" y2="125" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.4" />

        {/* Connection from quill tip to first node */}
        <path
          d="M140 35 Q145 38, 140 45"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
          strokeDasharray="2,2"
        />
      </g>
    </svg>
  )
}
