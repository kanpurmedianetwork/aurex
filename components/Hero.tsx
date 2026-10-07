'use client'

import Image from 'next/image'
import { AurexLogo } from '@/components/AurexLogo'
import { BookOpen, Gem, Sparkles } from 'lucide-react'

interface HeroProps {
  onExploreLookbook: () => void
  onOpenConcierge: () => void
}

export function Hero({ onExploreLookbook, onOpenConcierge }: HeroProps) {
  return (
    <section className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#d8a48f]/20 bg-[#141414]">
      {/* Background with real lookbook textured paper */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/dark-paper-bg.jpg"
          alt="Luxury Matte Paper Texture"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/90 via-[#141414]/75 to-[#141414]" />
      </div>

      {/* Decorative Rose Gold Brush Stroke from Lookbook */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-20 pointer-events-none -z-10 blur-[1px]">
        <Image
          src="/rose-gold-brush.jpg"
          alt="Rose gold metallic foil texture"
          fill
          className="object-contain"
        />
      </div>

      {/* Left Rose Gold Foil Ribbon matching lookbook pages */}
      <div className="absolute left-0 top-0 bottom-0 w-2.5 z-10 pointer-events-none hidden sm:block">
        <Image src="/gold-foil-ribbon.jpg" alt="Rose gold border foil" fill className="object-cover" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 text-center flex flex-col items-center">
        {/* Transparent Monogram Crest */}
        <div className="relative mb-6">
          <AurexLogo size="lg" showText={false} />
        </div>

        {/* Cursive Subtitle matching Lookbook Cover */}
        <span className="font-script text-5xl sm:text-7xl md:text-8xl text-[#d8a48f] block mb-2 leading-none">
          Fine Jewellery
        </span>

        {/* Small caps spacing */}
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.45em] uppercase text-[#ebd0c4] mb-3">
          C O L L E C T I O N
        </p>

        {/* Brand Title in Lookbook Rose Gold Serif */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.25em] uppercase text-[#ede6df] font-light mb-6">
          AUREX
        </h1>

        {/* Editorial Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#d8a48f] to-transparent mb-8" />

        {/* Exact Lookbook Mission Text from Page 2 */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#c7c0b5] font-serif italic mb-10 px-4">
          &ldquo;Aurex is a house of legacy, trust, and tradition. A bequest that seeks to bring the world&apos;s finest offerings in rare and precious jewels collected over the years and brought right at your doorstep.&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16">
          <button
            onClick={onExploreLookbook}
            className="inline-flex items-center gap-3 bg-[#d8a48f] text-[#141414] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold shadow-lg hover:bg-[#ebd0c4] hover:scale-[1.02] transition duration-300"
          >
            <BookOpen size={15} />
            <span>Open Lookbook Spreads</span>
          </button>

          <a
            href="#collections"
            className="inline-flex items-center gap-3 border border-[#d8a48f]/50 text-[#ede6df] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-[#d8a48f]/15 hover:border-[#d8a48f] transition duration-300"
          >
            <Gem size={15} className="text-[#d8a48f]" />
            <span>Permanent Collections</span>
          </a>

          <button
            onClick={onOpenConcierge}
            className="inline-flex items-center gap-3 border border-white/20 text-[#ede6df] px-8 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition duration-300"
          >
            <Sparkles size={15} className="text-[#d8a48f]" />
            <span>Private Viewing</span>
          </button>
        </div>

        {/* 4 Pillars of Haute Joaillerie */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-10 border-t border-[#d8a48f]/15 text-left">
          <div className="p-4 bg-[#1b1b1b]/70 border border-[#d8a48f]/15">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#d8a48f] block mb-1">
              01 · Legacy
            </span>
            <h4 className="font-serif text-base text-[#ede6df]">10th Gen Jaipur</h4>
            <p className="text-[11px] text-[#a39b94] mt-1 leading-normal">
              Centuries of unbroken royal gemstone lineage.
            </p>
          </div>

          <div className="p-4 bg-[#1b1b1b]/70 border border-[#d8a48f]/15">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#d8a48f] block mb-1">
              02 · Diamonds
            </span>
            <h4 className="font-serif text-base text-[#ede6df]">Antwerp Mines</h4>
            <p className="text-[11px] text-[#a39b94] mt-1 leading-normal">
              Hand-selected certified Antwerp brilliant cuts.
            </p>
          </div>

          <div className="p-4 bg-[#1b1b1b]/70 border border-[#d8a48f]/15">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#d8a48f] block mb-1">
              03 · Gemstones
            </span>
            <h4 className="font-serif text-base text-[#ede6df]">Rare Colombian Emeralds</h4>
            <p className="text-[11px] text-[#a39b94] mt-1 leading-normal">
              Vivid green Muzo & Chivor centerpieces.
            </p>
          </div>

          <div className="p-4 bg-[#1b1b1b]/70 border border-[#d8a48f]/15">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#d8a48f] block mb-1">
              04 · Bespoke
            </span>
            <h4 className="font-serif text-base text-[#ede6df]">Tailored Trousseau</h4>
            <p className="text-[11px] text-[#a39b94] mt-1 leading-normal">
              Direct consultation with master designers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
