"use client"

export function GeometricLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Constellation-like geometric patterns */}
        {/* Top right cluster */}
        <line x1="70%" y1="5%" x2="85%" y2="20%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="85%" y1="20%" x2="95%" y2="15%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="80%" y1="10%" x2="90%" y2="25%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <circle cx="85%" cy="20%" r="2" fill="#D4AF37" opacity="0.2" />
        <circle cx="95%" cy="15%" r="1.5" fill="#D4AF37" opacity="0.15" />

        {/* Left side diagonal */}
        <line x1="5%" y1="30%" x2="15%" y2="45%" stroke="url(#lineGradient2)" strokeWidth="1" />
        <line x1="8%" y1="35%" x2="20%" y2="50%" stroke="url(#lineGradient2)" strokeWidth="1" />
        <circle cx="15%" cy="45%" r="1.5" fill="#D4AF37" opacity="0.15" />

        {/* Bottom left cluster */}
        <line x1="10%" y1="75%" x2="25%" y2="85%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="15%" y1="80%" x2="30%" y2="90%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <line x1="20%" y1="70%" x2="35%" y2="80%" stroke="url(#lineGradient1)" strokeWidth="1" />
        <circle cx="25%" cy="85%" r="2" fill="#D4AF37" opacity="0.2" />

        {/* Center-right subtle pattern */}
        <line x1="60%" y1="60%" x2="75%" y2="55%" stroke="url(#lineGradient2)" strokeWidth="0.5" />
        <line x1="65%" y1="65%" x2="80%" y2="60%" stroke="url(#lineGradient2)" strokeWidth="0.5" />

        {/* Top left sparse lines */}
        <line x1="20%" y1="10%" x2="35%" y2="5%" stroke="url(#lineGradient1)" strokeWidth="0.5" />
        <line x1="25%" y1="15%" x2="40%" y2="10%" stroke="url(#lineGradient1)" strokeWidth="0.5" />
        <circle cx="35%" cy="5%" r="1" fill="#D4AF37" opacity="0.1" />

        {/* Bottom right accent */}
        <line x1="85%" y1="70%" x2="95%" y2="80%" stroke="url(#lineGradient2)" strokeWidth="0.5" />
        <line x1="90%" y1="75%" x2="98%" y2="85%" stroke="url(#lineGradient2)" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
