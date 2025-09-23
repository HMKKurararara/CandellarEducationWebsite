import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', size = 'md', showText = true, variant = 'light' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-8',
    md: 'w-24 h-12',
    lg: 'w-32 h-16',
    xl: 'w-40 h-20'
  }

  // Use the actual logo files you provided
  const logoSrc = variant === 'dark' ? '/default.png' : '/transparent.png'

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="Candellar Logo"
        width={size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 160}
        height={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 80}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
    </div>
  )
}
