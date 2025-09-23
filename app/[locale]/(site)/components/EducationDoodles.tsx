'use client'

import React from 'react'

interface DoodleProps {
  className?: string
  style?: React.CSSProperties
}

// Light Bulb Doodle
export const LightBulbDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 100 100" fill="none">
    {/* Bulb */}
    <circle cx="50" cy="35" r="18" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3,2"/>
    {/* Filament */}
    <path d="M42 28 Q50 35 58 28" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
    <path d="M42 32 Q50 39 58 32" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
    {/* Base */}
    <rect x="45" y="50" width="10" height="8" fill="none" stroke="#6b7280" strokeWidth="2"/>
    <rect x="43" y="58" width="14" height="4" fill="none" stroke="#6b7280" strokeWidth="2"/>
    {/* Rays */}
    <path d="M30 25 L35 30" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M25 40 L32 40" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 55 L35 50" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M70 25 L65 30" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M75 40 L68 40" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M70 55 L65 50" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 15 L50 22" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Math Formula Doodle
export const MathFormulaDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 120 80" fill="none">
    {/* E=mc² */}
    <text x="10" y="25" fill="#3b82f6" fontSize="16" fontFamily="serif">E=mc²</text>
    {/* Geometric shapes */}
    <polygon points="90,15 105,35 75,35" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    {/* Mathematical symbols */}
    <circle cx="30" cy="50" r="8" fill="none" stroke="#ef4444" strokeWidth="2"/>
    <path d="M20 65 L40 65 M30 55 L30 75" stroke="#10b981" strokeWidth="2"/>
    <path d="M60 45 L80 65 M80 45 L60 65" stroke="#8b5cf6" strokeWidth="2"/>
    {/* Equation line */}
    <path d="M10 35 Q60 30 110 40" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,2" fill="none"/>
  </svg>
)

// Science Atom Doodle
export const AtomDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 100 100" fill="none">
    {/* Nucleus */}
    <circle cx="50" cy="50" r="4" fill="#ef4444"/>
    {/* Electron orbits */}
    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2"/>
    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="30" ry="15" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2" transform="rotate(120 50 50)"/>
    {/* Electrons */}
    <circle cx="80" cy="50" r="3" fill="#fbbf24"/>
    <circle cx="35" cy="35" r="3" fill="#fbbf24"/>
    <circle cx="65" cy="65" r="3" fill="#fbbf24"/>
  </svg>
)

// Book Stack Doodle
export const BookStackDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 80 100" fill="none">
    {/* Bottom book */}
    <rect x="10" y="70" width="60" height="8" fill="none" stroke="#3b82f6" strokeWidth="2"/>
    <path d="M15 70 L15 78" stroke="#3b82f6" strokeWidth="1"/>
    {/* Middle book */}
    <rect x="15" y="60" width="55" height="8" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    <path d="M20 60 L20 68" stroke="#f59e0b" strokeWidth="1"/>
    {/* Top book */}
    <rect x="20" y="50" width="50" height="8" fill="none" stroke="#ef4444" strokeWidth="2"/>
    <path d="M25 50 L25 58" stroke="#ef4444" strokeWidth="1"/>
    {/* Open book on top */}
    <path d="M25 35 Q40 30 55 35 Q40 40 25 35" fill="none" stroke="#10b981" strokeWidth="2"/>
    <path d="M40 30 L40 40" stroke="#10b981" strokeWidth="1"/>
  </svg>
)

// Graduation Cap Doodle
export const GraduationCapDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 100 80" fill="none">
    {/* Cap */}
    <polygon points="20,40 50,25 80,40 50,50" fill="none" stroke="#1d4ed8" strokeWidth="2"/>
    {/* Tassel */}
    <path d="M80 40 L85 35 L90 45 L85 50" stroke="#fbbf24" strokeWidth="2" fill="none"/>
    <circle cx="85" r="3" cy="50" fill="#fbbf24"/>
    {/* Mortarboard lines */}
    <path d="M30 35 L70 35" stroke="#1d4ed8" strokeWidth="1"/>
    <path d="M35 45 L65 45" stroke="#1d4ed8" strokeWidth="1"/>
  </svg>
)

// Calculator Doodle
export const CalculatorDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 60 80" fill="none">
    {/* Calculator body */}
    <rect x="10" y="10" width="40" height="60" rx="4" fill="none" stroke="#374151" strokeWidth="2"/>
    {/* Screen */}
    <rect x="15" y="15" width="30" height="12" fill="none" stroke="#1f2937" strokeWidth="1"/>
    {/* Display text */}
    <text x="18" y="24" fill="#10b981" fontSize="8">123.45</text>
    {/* Buttons */}
    <circle cx="20" cy="35" r="3" fill="none" stroke="#6b7280" strokeWidth="1"/>
    <circle cx="30" cy="35" r="3" fill="none" stroke="#6b7280" strokeWidth="1"/>
    <circle cx="40" cy="35" r="3" fill="none" stroke="#6b7280" strokeWidth="1"/>
    <circle cx="20" cy="45" r="3" fill="none" stroke="#6b7280" strokeWidth="1"/>
    <circle cx="30" cy="45" r="3" fill="none" stroke="#6b7280" strokeWidth="1"/>
    <circle cx="40" cy="45" r="3" fill="none" stroke="#6b7280" strokeWidth="1"/>
    <circle cx="20" cy="55" r="3" fill="none" stroke="#f59e0b" strokeWidth="1"/>
    <circle cx="30" cy="55" r="3" fill="none" stroke="#f59e0b" strokeWidth="1"/>
    <rect x="37" y="52" width="6" height="6" fill="none" stroke="#ef4444" strokeWidth="1"/>
  </svg>
)

// Pencil Doodle
export const PencilDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 20 100" fill="none">
    {/* Pencil body */}
    <rect x="6" y="15" width="8" height="50" fill="none" stroke="#f59e0b" strokeWidth="2"/>
    {/* Tip */}
    <polygon points="6,65 14,65 10,75" fill="none" stroke="#1f2937" strokeWidth="2"/>
    {/* Eraser */}
    <rect x="5" y="10" width="10" height="8" rx="2" fill="none" stroke="#ef4444" strokeWidth="2"/>
    {/* Ferrule */}
    <rect x="6" y="8" width="8" height="4" fill="none" stroke="#6b7280" strokeWidth="1"/>
    {/* Wood grain lines */}
    <path d="M7 20 L7 60" stroke="#d97706" strokeWidth="0.5"/>
    <path d="M13 25 L13 65" stroke="#d97706" strokeWidth="0.5"/>
  </svg>
)

// Globe Doodle
export const GlobeDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 100 100" fill="none">
    {/* Globe */}
    <circle cx="50" cy="45" r="25" fill="none" stroke="#3b82f6" strokeWidth="2"/>
    {/* Continents */}
    <path d="M35 35 Q45 30 55 35 Q52 40 45 38 Q38 42 35 35" fill="none" stroke="#10b981" strokeWidth="1.5"/>
    <path d="M55 50 Q65 48 70 55 Q65 60 55 58" fill="none" stroke="#10b981" strokeWidth="1.5"/>
    {/* Latitude lines */}
    <ellipse cx="50" cy="45" rx="25" ry="8" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
    <ellipse cx="50" cy="45" rx="25" ry="15" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
    {/* Longitude line */}
    <path d="M25 45 Q50 35 75 45 Q50 55 25 45" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
    {/* Stand */}
    <rect x="47" y="70" width="6" height="15" fill="none" stroke="#6b7280" strokeWidth="2"/>
    <ellipse cx="50" cy="85" rx="12" ry="4" fill="none" stroke="#6b7280" strokeWidth="2"/>
  </svg>
)

// DNA Helix Doodle
export const DNADoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 40 100" fill="none">
    {/* DNA strands */}
    <path d="M10 10 Q30 25 10 40 Q30 55 10 70 Q30 85 10 100" stroke="#ef4444" strokeWidth="2" fill="none"/>
    <path d="M30 10 Q10 25 30 40 Q10 55 30 70 Q10 85 30 100" stroke="#3b82f6" strokeWidth="2" fill="none"/>
    {/* Base pairs */}
    <path d="M15 20 L25 20" stroke="#10b981" strokeWidth="1"/>
    <path d="M25 30 L15 30" stroke="#f59e0b" strokeWidth="1"/>
    <path d="M15 50 L25 50" stroke="#10b981" strokeWidth="1"/>
    <path d="M25 60 L15 60" stroke="#f59e0b" strokeWidth="1"/>
    <path d="M15 80 L25 80" stroke="#10b981" strokeWidth="1"/>
    <path d="M25 90 L15 90" stroke="#f59e0b" strokeWidth="1"/>
  </svg>
)

// Star Achievement Doodle
export const StarDoodle: React.FC<DoodleProps> = ({ className = "", style }) => (
  <svg className={`education-doodle ${className}`} style={style} viewBox="0 0 60 60" fill="none">
    {/* Main star */}
    <polygon points="30,5 35,20 50,20 38,30 43,45 30,37 17,45 22,30 10,20 25,20" fill="none" stroke="#fbbf24" strokeWidth="2"/>
    {/* Inner sparkle */}
    <polygon points="30,15 32,22 38,22 33,26 35,33 30,29 25,33 27,26 22,22 28,22" fill="#fbbf24" opacity="0.3"/>
    {/* Sparkles around */}
    <path d="M50 10 L52 12 L50 14 L48 12 Z" fill="#fbbf24"/>
    <path d="M10 50 L12 52 L10 54 L8 52 Z" fill="#fbbf24"/>
    <path d="M50 50 L52 52 L50 54 L48 52 Z" fill="#fbbf24"/>
  </svg>
)
