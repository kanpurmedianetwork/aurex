'use client'

import Image from 'next/image'
import { JewelryPiece } from '@/lib/lookbook-data'
import { X, Heart, Sparkles, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react'

interface QuickViewModalProps {
  piece: JewelryPiece | null
  onClose: () => void
  onToggleWishlist: (id: string) => void
  isLiked: boolean
  onOpenConcierge: (pieceName: string) => void
}

export function QuickViewModal({
  piece,
  onClose,
  onToggleWishlist,
  isLiked,
  onOpenConcierge
}: QuickViewModalProps) {
  if (!piece) return null

  const whatsappUrl = `https://wa.me/919839000000?text=${encodeURIComponent(
    `Hello Aurex Concierge, I would like to inquire regarding "${piece.name}" (Lookbook Page ${piece.page}) featured in the ${piece.collection}.`
  )}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#121110] border border-[#c9a35e]/50 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#a69f94] hover:text-[#dfba7e] bg-[#0c0c0c]/80 transition rounded-full"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Left Column: Jewelry Photo Display */}
        <div className="relative md:w-1/2 min-h-[320px] md:min-h-[480px] bg-radial from-[#1e1c19] to-[#0c0c0c] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#c9a35e]/20">
          <div className="relative w-full h-full max-h-[400px]">
            <Image
              src={piece.image}
              alt={piece.name}
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              priority
            />
          </div>

          <span className="absolute bottom-4 left-4 bg-[#0c0c0c]/90 border border-[#c9a35e]/30 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#dfba7e]">
            Lookbook · Page {piece.page.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Right Column: Specifications & Inquiries */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#c9a35e]">
                {piece.collection}
              </span>

              <button
                onClick={() => onToggleWishlist(piece.id)}
                className="flex items-center gap-1.5 text-xs font-mono text-[#a69f94] hover:text-[#dfba7e]"
              >
                <Heart size={16} className={isLiked ? 'fill-[#c9a35e] text-[#c9a35e]' : ''} />
                <span>{isLiked ? 'Saved' : 'Wishlist'}</span>
              </button>
            </div>

            {piece.subtitle && (
              <span className="font-script text-2xl text-[#d99f84] block mb-1">
                {piece.subtitle}
              </span>
            )}

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-4 leading-tight">
              {piece.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#c7c0b5] leading-relaxed mb-6 font-serif">
              {piece.description}
            </p>

            {/* Haute Joaillerie Specifications Grid */}
            <div className="bg-[#181716] border border-[#c9a35e]/15 p-4 space-y-3 mb-6">
              <div className="flex items-start justify-between text-xs font-mono">
                <span className="text-[#a69f94] uppercase tracking-wider text-[10px]">Gemstones:</span>
                <span className="text-right text-[#dfba7e] max-w-[65%]">{piece.gemstones}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#a69f94] uppercase tracking-wider text-[10px]">Precious Metal:</span>
                <span className="text-right text-[#f4ede4]">{piece.metal}</span>
              </div>
              {piece.origin && (
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a69f94] uppercase tracking-wider text-[10px]">Stone Provenance:</span>
                  <span className="text-right text-[#c9a35e]">{piece.origin}</span>
                </div>
              )}
            </div>

            {piece.quote && (
              <blockquote className="font-serif italic text-xs text-[#a69f94] pl-3 border-l border-[#c9a35e]/40 mb-6">
                &ldquo;{piece.quote}&rdquo;
              </blockquote>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#c9a35e]/20 space-y-2">
            <button
              onClick={() => {
                onClose()
                onOpenConcierge(piece.name)
              }}
              className="w-full bg-gradient-to-r from-[#c9a35e] to-[#dfba7e] text-[#0c0c0c] py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] font-semibold hover:shadow-lg hover:shadow-[#c9a35e]/20 transition"
            >
              Request Private Viewing
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-[#c9a35e]/40 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#dfba7e] hover:bg-[#c9a35e]/10 transition"
            >
              <MessageCircle size={14} />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
