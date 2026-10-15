'use client'

import React from 'react'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = ''
}: ShinyTextProps) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled
          ? 'text-[#d8a48f]'
          : 'animate-shine bg-[linear-gradient(110deg,#c5927e_35%,#ffffff_50%,#c5927e_65%)] bg-[length:250%_100%]'
      } ${className}`}
      style={{
        animationDuration,
        WebkitBackgroundClip: 'text',
      }}
    >
      {text}
    </span>
  )
}
