'use client'

import Image from 'next/image'
import { CLIENT_DIARIES } from '@/lib/lookbook-data'

export function ClientDiariesSection() {
  return (
    <section id="client-diaries" className="py-24 bg-[#141414] border-b border-[#d8a48f]/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#d8a48f]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8a48f]">
              Lookbook Pages 42–45
            </span>
            <span className="w-6 h-px bg-[#d8a48f]" />
          </div>

          <span className="font-script text-4xl sm:text-6xl text-[#d8a48f] block mb-2 leading-none">
            Client Diaries
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.16em] text-[#ede6df]">
            Living Heirlooms in Real Celebrations
          </h2>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d8a48f] to-transparent mx-auto my-5" />

          <p className="font-serif italic text-base text-[#c7c0b5]">
            From 300-carat royal emerald heirlooms to contemporary bridal trousseaus, Aurex pieces become intimately woven into a patron&apos;s personal history.
          </p>
        </div>

        {/* 4 Client Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CLIENT_DIARIES.map((item) => (
            <div
              key={item.id}
              className="group bg-[#1a1a1a] border border-[#d8a48f]/25 hover:border-[#d8a48f]/70 transition-all duration-500 p-5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Arch-shaped photo frame matching the Lookbook page design! */}
                <div className="relative h-80 w-full overflow-hidden rounded-t-[100px] border border-[#d8a48f]/40 mb-5 bg-[#101010]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <span className="absolute bottom-3 left-3 bg-[#141414]/90 backdrop-blur-sm border border-[#d8a48f]/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest text-[#ebd0c4]">
                    Page {item.page}
                  </span>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d8a48f] block mb-1">
                  {item.client}
                </span>

                <h3 className="font-serif text-lg text-[#ede6df] font-medium mb-3 leading-snug">
                  {item.title}
                </h3>

                <blockquote className="font-serif italic text-xs leading-relaxed text-[#c7c0b5] pl-3 border-l border-[#d8a48f]/50 mb-4">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-3 border-t border-[#d8a48f]/15">
                <span className="font-mono text-[8px] uppercase tracking-wider text-[#a39b94] block">
                  Adorned Masterpiece:
                </span>
                <p className="font-serif text-xs text-[#ebd0c4] mt-0.5">
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
