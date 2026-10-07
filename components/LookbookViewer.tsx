'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LOOKBOOK_CHAPTERS, JEWELRY_PIECES, JewelryPiece } from '@/lib/lookbook-data'
import { AurexLogo } from '@/components/AurexLogo'
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Grid,
  BookOpen,
  ArrowRight
} from 'lucide-react'

interface LookbookViewerProps {
  onSelectPiece: (piece: JewelryPiece) => void
  onOpenConcierge: (pieceName?: string) => void
}

export function LookbookViewer({ onSelectPiece, onOpenConcierge }: LookbookViewerProps) {
  const [currentChapterIdx, setCurrentChapterIdx] = useState(0)
  const [viewMode, setViewMode] = useState<'spread' | 'grid'>('spread')

  const chapter = LOOKBOOK_CHAPTERS[currentChapterIdx]

  const chapterPieces = JEWELRY_PIECES.filter(
    (p) => p.collection.toLowerCase() === chapter.collectionName.toLowerCase() ||
           p.subtitle.toLowerCase() === chapter.cursiveSubtitle.toLowerCase()
  )

  const activePiece = chapterPieces[0] || JEWELRY_PIECES[0]

  function nextChapter() {
    setCurrentChapterIdx((prev) => (prev + 1) % LOOKBOOK_CHAPTERS.length)
  }

  function prevChapter() {
    setCurrentChapterIdx((prev) => (prev - 1 + LOOKBOOK_CHAPTERS.length) % LOOKBOOK_CHAPTERS.length)
  }

  return (
    <section id="lookbook-viewer" className="py-24 bg-[#111111] border-b border-[#d8a48f]/20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#d8a48f]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8a48f]">
                Archival Lookbook Spread · Edition 2026
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.15em] text-[#ede6df]">
              The Aurex Lookbook
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-[#1b1b1b] p-1 border border-[#d8a48f]/30">
            <button
              onClick={() => setViewMode('spread')}
              className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition ${
                viewMode === 'spread'
                  ? 'bg-[#d8a48f] text-[#141414] font-semibold'
                  : 'text-[#a39b94] hover:text-[#ede6df]'
              }`}
            >
              <BookOpen size={13} />
              <span>Editorial Spread</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition ${
                viewMode === 'grid'
                  ? 'bg-[#d8a48f] text-[#141414] font-semibold'
                  : 'text-[#a39b94] hover:text-[#ede6df]'
              }`}
            >
              <Grid size={13} />
              <span>Index View</span>
            </button>
          </div>
        </div>

        {/* Quick Chapter Navigation Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-[10px] font-mono uppercase tracking-[0.18em]">
          {LOOKBOOK_CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setCurrentChapterIdx(idx)}
              className={`whitespace-nowrap px-4 py-2 border transition duration-200 shrink-0 ${
                idx === currentChapterIdx
                  ? 'border-[#d8a48f] bg-[#d8a48f]/15 text-[#ede6df] shadow-sm'
                  : 'border-[#d8a48f]/20 text-[#a39b94] hover:border-[#d8a48f]/50 hover:text-[#d8a48f]'
              }`}
            >
              <span className="text-[#d8a48f] mr-1.5">{ch.number}</span>
              <span>{ch.title}</span>
            </button>
          ))}
        </div>

        {/* VIEW MODE 1: EDITORIAL DOUBLE-PAGE SPREAD */}
        {viewMode === 'spread' && (
          <div className="relative rounded-sm overflow-hidden border border-[#d8a48f]/35 shadow-2xl bg-[#171717]">
            {/* The Book Fold Center Shadow Effect */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-20 pointer-events-none bg-gradient-to-r from-black/40 via-black/80 to-black/40" />

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
              {/* LEFT PAGE: Text & Editorial Cursive */}
              <div className="relative p-8 sm:p-12 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#d8a48f]/20 bg-[#171717]">
                {/* Lookbook paper texture background */}
                <div className="absolute inset-0 opacity-40 -z-10">
                  <Image src="/dark-paper-bg.jpg" alt="Texture" fill className="object-cover" />
                </div>

                <div>
                  {/* Top Page Monogram & Chapter Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-[0.25em] text-[#d8a48f]">
                      CHAPTER {chapter.number} / 10
                    </span>
                    <AurexLogo size="sm" showText={false} />
                  </div>

                  {/* Cursive Signature Title matching lookbook */}
                  <div className="mb-4">
                    <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#d8a48f] block leading-none">
                      {chapter.cursiveSubtitle}
                    </span>
                  </div>

                  {/* High Jewellery Collection Header */}
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-[0.18em] text-[#ede6df] mb-6">
                    {chapter.title}
                  </h3>

                  <div className="w-16 h-px bg-[#d8a48f]/60 mb-6" />

                  {/* Editorial Prose from Lookbook */}
                  <p className="font-serif text-base sm:text-lg leading-relaxed text-[#c7c0b5] mb-8 font-light">
                    {chapter.description}
                  </p>

                  {/* Featured Pieces in this chapter */}
                  <div className="space-y-2 border-t border-[#d8a48f]/15 pt-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#ebd0c4] block mb-2">
                      Pieces Highlighted in Spread:
                    </span>
                    {chapter.featuredPieces.map((pieceName, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#a39b94]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d8a48f]/60" />
                        <span>{pieceName}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Left Footer */}
                <div className="mt-8 pt-4 border-t border-[#d8a48f]/15 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#a39b94]">
                  <span>{chapter.pageRange}</span>
                  <span>Aurex Fine Jewellery</span>
                </div>
              </div>

              {/* RIGHT PAGE: High-Resolution Jewelry Piece Showcase with Ribbon Edge */}
              <div className="relative p-8 sm:p-12 md:p-16 flex flex-col justify-between bg-[#141414] overflow-hidden">
                {/* Lookbook page texture */}
                <div className="absolute inset-0 opacity-40 -z-10">
                  <Image src="/dark-paper-bg.jpg" alt="Texture" fill className="object-cover" />
                </div>

                {/* Metallic Rose Gold Foil Ribbon on right page border - iconic lookbook element */}
                <div className="absolute right-0 top-0 bottom-0 w-2.5 sm:w-3 z-10">
                  <Image src="/gold-foil-ribbon.jpg" alt="Rose gold border ribbon" fill className="object-cover" />
                </div>

                {/* Rose gold background brush stroke accent */}
                <div className="absolute inset-0 opacity-25 pointer-events-none -z-5 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md max-h-md">
                    <Image src="/rose-gold-brush.jpg" alt="Foil splash" fill className="object-contain" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#ebd0c4] bg-[#1b1b1b]/90 px-3 py-1 border border-[#d8a48f]/30">
                    {activePiece.tag || 'Haute Joaillerie'}
                  </span>
                  <span className="font-mono text-[10px] text-[#a39b94]">
                    Lookbook · Page {activePiece.page.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Center Showcase Image */}
                <div className="relative my-8 h-72 sm:h-80 md:h-96 w-full flex items-center justify-center group">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={chapter.keyImage}
                      alt={activePiece.name}
                      fill
                      className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                </div>

                {/* Bottom Product Details & Action Buttons */}
                <div className="z-10 bg-[#1b1b1b]/90 backdrop-blur-md p-4 sm:p-5 border border-[#d8a48f]/25">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-serif text-lg sm:text-xl text-[#ede6df] font-medium">
                        {activePiece.name}
                      </h4>
                      <p className="text-xs text-[#d8a48f] font-mono tracking-wider mt-0.5">
                        {activePiece.gemstones}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectPiece(activePiece)}
                        className="inline-flex items-center gap-1.5 border border-[#d8a48f]/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#ebd0c4] hover:bg-[#d8a48f]/15 transition"
                      >
                        <Eye size={12} />
                        <span>Specs</span>
                      </button>

                      <button
                        onClick={() => onOpenConcierge(activePiece.name)}
                        className="inline-flex items-center gap-1.5 bg-[#d8a48f] text-[#141414] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] font-semibold hover:bg-[#ebd0c4] transition"
                      >
                        <span>Inquire</span>
                        <ArrowRight size={11} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spread Flip Navigation Controls */}
            <div className="bg-[#171717] border-t border-[#d8a48f]/20 px-6 py-4 flex items-center justify-between">
              <button
                onClick={prevChapter}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#a39b94] hover:text-[#d8a48f] transition"
              >
                <ChevronLeft size={16} />
                <span>Previous Spread</span>
              </button>

              <div className="font-mono text-[11px] tracking-[0.2em] text-[#d8a48f]">
                {chapter.number} / {LOOKBOOK_CHAPTERS.length.toString().padStart(2, '0')} · {chapter.pageRange}
              </div>

              <button
                onClick={nextChapter}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#a39b94] hover:text-[#d8a48f] transition"
              >
                <span>Next Spread</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: GRID OVERVIEW */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOOKBOOK_CHAPTERS.map((ch, idx) => (
              <div
                key={ch.id}
                onClick={() => {
                  setCurrentChapterIdx(idx)
                  setViewMode('spread')
                }}
                className="cursor-pointer group bg-[#1b1b1b] border border-[#d8a48f]/20 hover:border-[#d8a48f] p-6 transition duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#d8a48f] mb-2">
                  <span>CHAPTER {ch.number}</span>
                  <span className="text-[#a39b94]">{ch.pageRange}</span>
                </div>
                <span className="font-script text-2xl text-[#d8a48f] block mb-1">
                  {ch.cursiveSubtitle}
                </span>
                <h3 className="font-serif text-xl uppercase tracking-wider text-[#ede6df] mb-4">
                  {ch.title}
                </h3>
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={ch.keyImage}
                    alt={ch.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-[#a39b94] line-clamp-2 leading-relaxed">
                  {ch.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#d8a48f]/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#ebd0c4]">
                  <span>Open Spread</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
