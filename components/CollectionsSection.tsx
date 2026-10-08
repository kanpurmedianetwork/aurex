'use client'

import { useState } from 'react'
import Image from 'next/image'
import { JEWELRY_PIECES, JewelryPiece } from '@/lib/lookbook-data'
import { Heart, Eye, ArrowUpRight } from 'lucide-react'

interface CollectionsSectionProps {
  onSelectPiece: (piece: JewelryPiece) => void
  onToggleWishlist: (pieceId: string) => void
  wishlistIds: string[]
  onOpenConcierge: (pieceName?: string) => void
}

const CATEGORIES = [
  { id: 'all', label: 'All Masterpieces' },
  { id: 'emerald', label: 'Colombian Emeralds' },
  { id: 'wedding', label: 'Wedding Collection' },
  { id: 'engagement', label: 'Engagement Rings' },
  { id: 'earrings', label: 'Chandelier Earrings' },
  { id: 'rings', label: 'Cocktail Rings' },
  { id: 'bracelets', label: 'Bracelets & Cuffs' },
  { id: 'accessories', label: 'Royal Accessories' },
  { id: 'everyday', label: 'Everyday Bling' },
]

export function CollectionsSection({
  onSelectPiece,
  onToggleWishlist,
  wishlistIds,
  onOpenConcierge
}: CollectionsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPieces =
    selectedCategory === 'all'
      ? JEWELRY_PIECES
      : JEWELRY_PIECES.filter((p) => p.category === selectedCategory)

  return (
    <section id="collections" className="py-24 bg-[#141414] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#d8a48f]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8a48f]">
              Permanent Haute Joaillerie
            </span>
            <span className="w-6 h-px bg-[#d8a48f]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.16em] text-[#ede6df]">
            Permanent Collections
          </h2>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d8a48f] to-transparent mx-auto my-5" />

          <p className="font-serif italic text-base text-[#c7c0b5]">
            Each creation is a study in rare gemstone provenance, architectural elegance, and heirloom craftsmanship.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? JEWELRY_PIECES.length
                : JEWELRY_PIECES.filter((p) => p.category === cat.id).length

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 border ${
                  selectedCategory === cat.id
                    ? 'border-[#d8a48f] bg-[#d8a48f] text-[#141414] font-semibold shadow-md shadow-[#d8a48f]/15'
                    : 'border-[#d8a48f]/20 text-[#a39b94] hover:border-[#d8a48f]/50 hover:text-[#d8a48f] bg-[#1a1a1a]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-60">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Jewelry Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPieces.map((piece) => {
            const isLiked = wishlistIds.includes(piece.id)

            return (
              <article
                key={piece.id}
                className="group relative bg-[#1a1a1a] border border-[#d8a48f]/20 hover:border-[#d8a48f]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#d8a48f]/10"
              >
                {/* Card Top Information */}
                <div className="p-4 flex items-center justify-between border-b border-[#d8a48f]/10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#ebd0c4]">
                    {piece.collection}
                  </span>

                  <button
                    onClick={() => onToggleWishlist(piece.id)}
                    aria-label={`Save ${piece.name} to wishlist`}
                    className="p-1 text-[#a39b94] hover:text-[#d8a48f] transition"
                  >
                    <Heart
                      size={16}
                      className={isLiked ? 'fill-[#d8a48f] text-[#d8a48f]' : ''}
                    />
                  </button>
                </div>

                {/* Center Image with Luxury Glow and Zoom */}
                <div
                  onClick={() => onSelectPiece(piece)}
                  className="relative h-64 sm:h-72 w-full p-6 cursor-pointer flex items-center justify-center bg-radial from-[#222222] to-[#141414] overflow-hidden"
                >
                  <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      fill
                      className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                    />
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-[#141414]/90 border border-[#d8a48f]/50 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#ebd0c4]">
                      <Eye size={12} />
                      <span>Examine Gemstones</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {piece.subtitle && (
                      <span className="font-script text-lg text-[#d8a48f] block mb-1">
                        {piece.subtitle}
                      </span>
                    )}

                    <h3
                      onClick={() => onSelectPiece(piece)}
                      className="font-serif text-lg text-[#ede6df] font-medium hover:text-[#d8a48f] transition cursor-pointer leading-tight mb-2"
                    >
                      {piece.name}
                    </h3>

                    <p className="text-xs text-[#a39b94] line-clamp-2 leading-relaxed mb-4">
                      {piece.description}
                    </p>

                    <div className="border-t border-[#d8a48f]/10 pt-3 space-y-1 mb-4 text-[11px] font-mono text-[#c7c0b5]">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[#a39b94] uppercase tracking-wider text-[9px]">Gems:</span>
                        <span className="text-right text-[#d8a48f] text-[10px]">{piece.gemstones}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#a39b94] uppercase tracking-wider text-[9px]">Metal:</span>
                        <span className="text-right text-[10px] text-[#ede6df]">{piece.metal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#d8a48f]/15">
                    <button
                      onClick={() => onSelectPiece(piece)}
                      className="w-full text-center py-2 border border-[#d8a48f]/30 font-mono text-[9px] uppercase tracking-[0.16em] text-[#ebd0c4] hover:bg-[#d8a48f]/15 transition"
                    >
                      Specifications
                    </button>

                    <button
                      onClick={() => onOpenConcierge(piece.name)}
                      className="w-full inline-flex items-center justify-center gap-1 py-2 bg-[#d8a48f] text-[#141414] font-mono text-[9px] uppercase tracking-[0.16em] font-semibold hover:bg-[#ebd0c4] transition"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
