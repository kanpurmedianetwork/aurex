'use client'

import Image from 'next/image'
import { AUREX_BRAND } from '@/lib/lookbook-data'
import { ArrowDown, BookOpen, Gem, ShieldCheck, Sparkles } from 'lucide-react'

interface HeroProps {
  onExploreLookbook: () => void
  onOpenConcierge: () => void
}

export function Hero({ onExploreLookbook, onOpenConcierge }: HeroProps) {
  return (
    <section className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#c9a35e]/20">
      {/* Background with real lookbook textured paper and ambient rose gold brush */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/dark-paper-bg.jpg"
          alt="Luxury Matte Paper Texture"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/90 via-[#0b0b0b]/75 to-[#0b0b0b]" />
      </div>

      {/* Decorative Rose Gold Brush Stroke from Lookbook */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-25 pointer-events-none -z-10 blur-sm">
        <Image
          src="/rose-gold-brush.jpg"
          alt="Rose gold metallic foil texture"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 text-center flex flex-col items-center">
        {/* Monogram Crest with subtle golden aura */}
        <div className="relative w-16 h-12 sm:w-20 sm:h-16 mb-6">
          <div className="absolute inset-0 rounded-full bg-[#c9a35e]/20 blur-xl scale-125" />
          <Image
            src="/aurex-monogram.png"
            alt="Aurex Royal Monogram"
            fill
            className="object-contain relative z-10 drop-shadow-[0_4px_12px_rgba(201,163,94,0.3)]"
            priority
          />
        </div>

        {/* Cursive Subtitle matching Lookbook Cover */}
        <span className="font-script text-4xl sm:text-6xl md:text-7xl text-[#d99f84] block mb-2 leading-none">
          Fine Jewellery
        </span>

        {/* Small caps spacing */}
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.45em] uppercase text-[#dfba7e] mb-4">
          C O L L E C T I O N
        </p>

        {/* Brand Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.25em] uppercase text-white font-light mb-6">
          AUREX
        </h1>

        {/* Editorial Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a35e] to-transparent mb-8" />

        {/* Exact Lookbook Mission Text */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#c7c0b5] font-serif italic mb-10 px-4">
          &ldquo;Aurex is a house of legacy, trust, and tradition. A bequest that seeks to bring the world&apos;s finest offerings in rare and precious jewels collected over the years and brought right at your doorstep.&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16">
          <button
            onClick={onExploreLookbook}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c9a35e] to-[#dfba7e] text-[#0c0c0c] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] font-medium shadow-lg hover:shadow-[#c9a35e]/25 hover:scale-[1.02] transition duration-300"
          >
            <BookOpen size={15} />
            <span>Open Lookbook Spreads</span>
          </button>

          <a
            href="#collections"
            className="inline-flex items-center gap-3 border border-[#c9a35e]/40 text-[#dfba7e] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-[#c9a35e]/10 hover:border-[#c9a35e] transition duration-300"
          >
            <Gem size={15} />
            <span>View All Masterpieces</span>
          </a>

          <button
            onClick={onOpenConcierge}
            className="inline-flex items-center gap-3 border border-white/20 text-[#f4ede4] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition duration-300"
          >
            <Sparkles size={15} className="text-[#c9a35e]" />
            <span>Private Viewing</span>
          </button>
        </div>

        {/* 4 Pillars of Haute Joaillerie */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-10 border-t border-[#c9a35e]/15 text-left">
          <div className="p-4 bg-[#141312]/60 border border-[#c9a35e]/10">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c9a35e] block mb-1">
              01 · Heritage
            </span>
            <h4 className="font-serif text-base text-[#f4ede4]">10th Gen Jaipur</h4>
            <p className="text-[11px] text-[#a69f94] mt-1 leading-normal">
              Centuries of unbroken royal gemstone lineage.
            </p>
          </div>

          <div className="p-4 bg-[#141312]/60 border border-[#c9a35e]/10">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c9a35e] block mb-1">
              02 · Diamonds
            </span>
            <h4 className="font-serif text-base text-[#f4ede4]">Antwerp Mines</h4>
            <p className="text-[11px] text-[#a69f94] mt-1 leading-normal">
              Hand-selected certified Antwerp brilliant cuts.
            </p>
          </div>

          <div className="p-4 bg-[#141312]/60 border border-[#c9a35e]/10">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c9a35e] block mb-1">
              03 · Exclusives
            </span>
            <h4 className="font-serif text-base text-[#f4ede4]">Muzo Emeralds</h4>
            <p className="text-[11px] text-[#a69f94] mt-1 leading-normal">
              Rare untreated Colombian emerald centerpieces.
            </p>
          </div>

          <div className="p-4 bg-[#141312]/60 border border-[#c9a35e]/10">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c9a35e] block mb-1">
              04 · Bespoke
            </span>
            <h4 className="font-serif text-base text-[#f4ede4]">Tailored Trousseau</h4>
            <p className="text-[11px] text-[#a69f94] mt-1 leading-normal">
              Direct consultation with our master designers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
