'use client'

import Image from 'next/image'
import { AurexLogo } from '@/components/AurexLogo'
import { BookOpen, Sparkles, ChevronDown } from 'lucide-react'

interface HeroProps {
  onExploreLookbook: () => void
  onOpenConcierge: () => void
}

export function Hero({ onExploreLookbook, onOpenConcierge }: HeroProps) {
  return (
    <section className="relative isolate min-h-screen flex flex-col justify-between overflow-hidden bg-[#141414] pt-28 pb-16">
      {/* 1. Exact Lookbook Textured Charcoal Matte Paper Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/dark-paper-bg.jpg"
          alt="Aurex Lookbook Textured Matte Paper"
          fill
          priority
          className="object-cover opacity-90"
        />
        {/* Subtle vignette for tactile depth, leaving the natural paper grain intact */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#141414]/40 to-[#101010]/90" />
      </div>

      {/* 2. Exact Vertical Rose Gold Foil Edge Ribbon on the Right Border (Page 1 of Lookbook) */}
      <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-4 z-20 pointer-events-none">
        <Image
          src="/gold-foil-ribbon.jpg"
          alt="Rose gold metallic foil edge"
          fill
          className="object-cover"
        />
      </div>

      {/* 3. Top Space for Floating Minimal Transparent Navbar */}
      <div className="h-6" />

      {/* 4. Center Content - Replicating the Exact Cover of the Lookbook */}
      <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center justify-center my-auto z-10">
        {/* Upper Heading: "Fine Jewellery COLLECTION" in Lookbook Script */}
        <div className="mb-14 sm:mb-20">
          <span className="font-script text-6xl sm:text-8xl md:text-9xl text-[#d8a48f] block leading-[0.95] drop-shadow-[0_2px_12px_rgba(216,164,143,0.3)]">
            Fine Jewellery
          </span>
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.55em] uppercase text-[#d8a48f]/80 mt-3 sm:mt-4">
            C O L L E C T I O N
          </p>
        </div>

        {/* Lower Element: Monogram Emblem & Brand Name exactly as on Lookbook Cover */}
        <div className="flex flex-col items-center">
          <div className="mb-4 transition-transform duration-500 hover:scale-105">
            <AurexLogo size="lg" showText={false} />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.35em] uppercase text-[#ede6df] font-light leading-none">
            AUREX
          </h1>

          {/* Understated Line & Legacy Description */}
          <div className="w-16 h-px bg-[#d8a48f]/50 my-8" />

          <p className="max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-[#c7c0b5] font-serif italic mb-10 px-4">
            A house of legacy, trust, and tradition. A bequest of the world&apos;s rarest gems, merging international jewelry trends with 10th-generation Indian artistry.
          </p>

          {/* Minimal Haute Luxury Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onExploreLookbook}
              className="inline-flex items-center gap-2.5 bg-[#d8a48f] text-[#141414] px-8 py-3 font-mono text-[10px] uppercase tracking-[0.22em] font-semibold hover:bg-[#ebd0c4] transition duration-300 shadow-md"
            >
              <BookOpen size={14} />
              <span>Explore Lookbook</span>
            </button>

            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-2 border border-[#d8a48f]/50 text-[#ede6df] px-8 py-3 font-mono text-[10px] uppercase tracking-[0.22em] hover:bg-[#d8a48f]/10 hover:border-[#d8a48f] transition duration-300"
            >
              <Sparkles size={14} className="text-[#d8a48f]" />
              <span>Private Viewing</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Minimalist Bottom Indicator */}
      <div className="mx-auto text-center z-10 pt-8">
        <a
          href="#lookbook-viewer"
          className="inline-flex flex-col items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.25em] text-[#a39b94] hover:text-[#d8a48f] transition"
        >
          <span>Scroll to Discover</span>
          <ChevronDown size={14} className="animate-bounce text-[#d8a48f]" />
        </a>
      </div>
    </section>
  )
}
