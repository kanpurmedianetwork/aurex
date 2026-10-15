'use client'

import React, { useState } from 'react'

interface TrueFocusItem {
  id: string
  label: string
  subtitle?: string
}

interface TrueFocusProps {
  items: TrueFocusItem[]
  activeId: string
  onSelect: (id: string) => void
  className?: string
}

export function TrueFocus({
  items,
  activeId,
  onSelect,
  className = ''
}: TrueFocusProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {items.map((item) => {
        const isActive = activeId === item.id
        const isHovered = hoveredId === item.id

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative px-4 py-2 text-left font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
              isActive
                ? 'text-[#ede6df] bg-[#1e1e1e] border border-[#d8a48f]'
                : 'text-[#a39b94] hover:text-[#d8a48f] border border-[#d8a48f]/20 bg-[#161616]'
            }`}
          >
            {/* Animated corner reticles for TrueFocus active state */}
            {isActive && (
              <>
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#d8a48f]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#d8a48f]" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#d8a48f]" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#d8a48f]" />
              </>
            )}

            <div className="flex flex-col">
              <span className="font-semibold">{item.label}</span>
              {item.subtitle && (
                <span className="text-[8px] text-[#a39b94] tracking-widest mt-0.5 normal-case font-serif italic">
                  {item.subtitle}
                </span>
              )}
            </div>
          </button>
        )
      })}
    </div>
  )
}
