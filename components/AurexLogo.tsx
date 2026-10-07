'use client'

import Image from 'next/image'

interface AurexLogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function AurexLogo({ className = '', showText = true, size = 'md' }: AurexLogoProps) {
  const sizeMap = {
    sm: { img: 'w-7 h-6', text: 'text-lg', sub: 'text-[7px]' },
    md: { img: 'w-9 h-7 sm:w-11 sm:h-8', text: 'text-xl sm:text-2xl', sub: 'text-[8px] sm:text-[9px]' },
    lg: { img: 'w-16 h-12 sm:w-20 sm:h-15', text: 'text-3xl sm:text-4xl', sub: 'text-[10px]' }
  }

  const current = sizeMap[size]

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      {/* 100% Transparent Rose Gold Monogram */}
      <div className={`relative ${current.img} transition-transform duration-300`}>
        <Image
          src="/aurex-monogram.png"
          alt="Aurex Royal Monogram"
          fill
          className="object-contain filter drop-shadow-[0_2px_8px_rgba(216,164,143,0.35)]"
          priority
        />
      </div>

      {showText && (
        <div className="text-center mt-1">
          <span className={`font-serif ${current.text} tracking-[0.28em] uppercase rosegold-gradient-text font-normal leading-none block`}>
            AUREX
          </span>
          <span className={`font-mono ${current.sub} tracking-[0.38em] uppercase text-[#a39b94] mt-0.5 block`}>
            Fine Jewellery
          </span>
        </div>
      )}
    </div>
  )
}
