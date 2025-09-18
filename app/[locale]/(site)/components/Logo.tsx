import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lightbulb base */}
          <rect x="35" y="70" width="30" height="8" rx="4" fill="#1e3a8a" />
          
          {/* Lightbulb body */}
          <ellipse cx="50" cy="50" rx="25" ry="30" fill="#fbbf24" />
          
          {/* Brain inside lightbulb */}
          <path
            d="M40 45 C40 40, 45 35, 50 35 C55 35, 60 40, 60 45 C60 50, 55 55, 50 55 C45 55, 40 50, 40 45 Z"
            fill="white"
            stroke="#1e3a8a"
            strokeWidth="1.5"
          />
          
          {/* Brain details */}
          <path
            d="M42 42 C42 38, 45 36, 48 36 C51 36, 54 38, 54 42"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="1"
          />
          <path
            d="M42 48 C42 44, 45 42, 48 42 C51 42, 54 44, 54 48"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="1"
          />
          
          {/* Light rays */}
          <line x1="25" y1="25" x2="20" y2="20" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="50" y1="20" x2="50" y2="15" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="75" y1="25" x2="80" y2="20" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="85" y1="40" x2="90" y2="40" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="85" y1="60" x2="90" y2="60" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="75" y1="75" x2="80" y2="80" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="50" y1="80" x2="50" y2="85" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="25" y1="75" x2="20" y2="80" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="15" y1="40" x2="10" y2="40" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
          <line x1="15" y1="60" x2="10" y2="60" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="2,2" />
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-primary ${textSizeClasses[size]}`}>
            CANDELLAR
          </span>
          <span className={`text-xs text-amber-600 font-medium ${size === 'sm' ? 'hidden' : ''}`}>
            LEARN MORE FOR LESS
          </span>
        </div>
      )}
    </div>
  )
}
