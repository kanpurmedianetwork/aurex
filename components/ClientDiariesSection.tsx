'use client'

import Image from 'next/image'
import { CLIENT_DIARIES } from '@/lib/lookbook-data'
import { Sparkles, Heart } from 'lucide-react'

export function ClientDiariesSection() {
  return (
    <section id="client-diaries" className="py-24 bg-[#0d0c0c] border-b border-[#c9a35e]/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#c9a35e]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#dfba7e]">
              Lookbook Pages 42–45
            </span>
            <span className="w-6 h-px bg-[#c9a35e]" />
          </div>

          <span className="font-script text-4xl sm:text-6xl text-[#d99f84] block mb-2 leading-none">
            Client Diaries
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.16em] text-white">
            Living Heirlooms in Real Celebrations
          </h2>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c9a35e] to-transparent mx-auto my-5" />

          <p className="font-serif italic text-base text-[#c7c0b5]">
            From 300-carat royal emerald heirlooms to contemporary bridal trousseaus, Aurex pieces become intimately woven into a patron&apos;s personal history.
          </p>
        </div>

        {/* 4 Client Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CLIENT_DIARIES.map((item) => (
            <div
              key={item.id}
              className="group bg-[#131211] border border-[#c9a35e]/25 hover:border-[#c9a35e]/70 transition-all duration-500 p-5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Arch-shaped photo frame matching the Lookbook page design! */}
                <div className="relative h-80 w-full overflow-hidden rounded-t-[100px] border border-[#c9a35e]/40 mb-5 bg-[#0b0b0b]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute bottom-3 left-3 bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#c9a35e]/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-[#dfba7e]">
                    Page {item.page}
                  </span>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c9a35e] block mb-1">
                  {item.client}
                </span>

                <h3 className="font-serif text-lg text-white font-medium mb-3 leading-snug">
                  {item.title}
                </h3>

                <blockquote className="font-serif italic text-xs leading-relaxed text-[#c7c0b5] pl-3 border-l border-[#c9a35e]/50 mb-4">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-3 border-t border-[#c9a35e]/15">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#a69f94] block">
                  Adorned Masterpiece:
                </span>
                <p className="font-serif text-xs text-[#dfba7e] mt-0.5">
                  {item.jewelryItem}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
