'use client'

import Image from 'next/image'
import { Award, History, Compass } from 'lucide-react'

export function HeritageSection() {
  return (
    <section id="heritage" className="py-24 bg-[#111111] border-t border-b border-[#d8a48f]/20 relative overflow-hidden">
      {/* Background paper texture */}
      <div className="absolute inset-0 opacity-25 -z-10">
        <Image src="/dark-paper-bg.jpg" alt="Paper texture" fill className="object-cover" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Outer Golden Frame */}
              <div className="relative p-2 bg-[#1b1b1b] border border-[#d8a48f]/40 shadow-2xl">
                {/* Neeru Designer Portrait */}
                <div className="relative h-96 sm:h-[460px] w-full overflow-hidden bg-[#141414]">
                  <Image
                    src="/founder-neeru.jpg"
                    alt="Neeru - 10th Generation Jeweller & Designer"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#d8a48f] block">
                      Creative Director & Founder
                    </span>
                    <h3 className="font-serif text-2xl text-[#ede6df] font-medium">
                      Neeru
                    </h3>
                    <p className="text-xs text-[#a39b94] font-serif italic">
                      10th Generation Jeweller · Daughter of Mr. Chandra Prakash Agroya (Jaipur)
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Signature Piece Card: The Colombian Emerald Jhumki */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#1f1f1f]/95 backdrop-blur-md p-4 border border-[#d8a48f]/60 max-w-[210px] shadow-2xl hidden sm:block">
                <div className="relative h-24 w-full mb-2">
                  <Image
                    src="/lookbook/jewel_155.jpg"
                    alt="Signature Colombian Emerald Jhumki"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#d8a48f] block">
                    Signature Creation
                  </span>
                  <p className="font-serif text-xs text-[#ede6df]">
                    Columbian Emerald Jhumki
                  </p>
                  <p className="text-[9px] text-[#a39b94] mt-0.5">
                    One of a kind in the world
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 10th Generation Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#d8a48f]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8a48f]">
                Heritage · The Founder Story
              </span>
            </div>

            <span className="font-script text-4xl sm:text-5xl text-[#d8a48f] block mb-2">
              House of Legacy
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.14em] text-[#ede6df] mb-6">
              A 10th Generation Dynasty Born in Jaipur
            </h2>

            <div className="w-20 h-px bg-[#d8a48f]/60 mb-8" />

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[#c7c0b5] font-serif">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-[#d8a48f] first-letter:float-left first-letter:mr-2">
                Drawing upon hundreds of years of family history as jewelers, she fell in love with the world of jewelry at a young age. As the daughter of a fine jeweler and being the 10th generation, Neeru has added more to the family legacy recreating a modern business.
              </p>

              <p>
                Surrounded by some of the most precious pieces in her collection, she brings forth an incredibly unique jewelry experience, and one that will continue for generations to come.
              </p>

              <blockquote className="my-6 pl-5 border-l-2 border-[#d8a48f] italic text-[#ede6df] text-base sm:text-lg bg-[#1a1a1a]/70 py-3 pr-4">
                &ldquo;The brand exacts its inspiration from an amalgamation of traditional and contemporary India. Her signature style Columbian Emerald Jhumki, the one of a kind in the world, focuses on textural serendipity.&rdquo;
              </blockquote>

              <p>
                Her delicate gold and colorful gemstones haloed with diamonds are a go-to for the modern woman looking for a unique piece to layer. As the daughter of Mr. Chandra Prakash Agroya (Jaipur), a fine jeweler, Neeru bridges the rarefied karigari of royal courts with effortless international glamour.
              </p>
            </div>

            {/* Heritage Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#d8a48f]/20">
              <div className="flex items-start gap-3">
                <History className="text-[#d8a48f] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#ede6df]">
                    10 Generations
                  </h4>
                  <p className="text-[11px] text-[#a39b94] mt-0.5">
                    Continuous lineage of Jaipur master jewelers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="text-[#d8a48f] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#ede6df]">
                    Rare Provenance
                  </h4>
                  <p className="text-[11px] text-[#a39b94] mt-0.5">
                    Antwerp diamonds, Muzo emeralds, Mogok rubies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="text-[#d8a48f] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#ede6df]">
                    Artisan Karigari
                  </h4>
                  <p className="text-[11px] text-[#a39b94] mt-0.5">
                    Uncut polki, basra pearls, champlevé meenakari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
