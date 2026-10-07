'use client'

import Image from 'next/image'
import { JewelryPiece, JEWELRY_PIECES } from '@/lib/lookbook-data'
import { X, Trash2, MessageCircle, ArrowRight, Heart } from 'lucide-react'

interface WishlistDrawerProps {
  isOpen: boolean
  onClose: () => void
  wishlistIds: string[]
  onRemove: (id: string) => void
  onSelectPiece: (piece: JewelryPiece) => void
  onOpenConcierge: (pieceName?: string) => void
}

export function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onRemove,
  onSelectPiece,
  onOpenConcierge
}: WishlistDrawerProps) {
  if (!isOpen) return null

  const savedPieces = JEWELRY_PIECES.filter((p) => wishlistIds.includes(p.id))

  const inquirySummary = savedPieces.map((p) => `• ${p.name} (Pg ${p.page})`).join('\n')
  const whatsappUrl = `https://wa.me/919839000000?text=${encodeURIComponent(
    `Hello Aurex Concierge, I would like to inquire regarding my curated wishlist pieces:\n\n${inquirySummary}`
  )}`

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="fixed inset-y-0 right-0 w-full max-w-md bg-[#121110] border-l border-[#c9a35e]/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#c9a35e]/20 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Heart size={18} className="fill-[#c9a35e] text-[#c9a35e]" />
              <h3 className="font-serif text-2xl text-white font-medium">Curated Wishlist</h3>
              <span className="font-mono text-xs text-[#c9a35e]">({savedPieces.length})</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#a69f94] hover:text-[#dfba7e]"
              aria-label="Close wishlist drawer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Empty State */}
          {savedPieces.length === 0 ? (
            <div className="py-16 text-center text-[#a69f94]">
              <Heart size={36} className="mx-auto mb-3 stroke-[1] text-[#c9a35e]/50" />
              <p className="font-serif text-lg text-white mb-1">Your Curated Vault is Empty</p>
              <p className="text-xs font-mono max-w-xs mx-auto">
                Select the heart icon on any lookbook piece to save it for your private viewing portfolio.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedPieces.map((piece) => (
                <div
                  key={piece.id}
                  className="flex items-center gap-4 bg-[#181716] border border-[#c9a35e]/15 p-3 hover:border-[#c9a35e]/40 transition group"
                >
                  <div
                    onClick={() => {
                      onClose()
                      onSelectPiece(piece)
                    }}
                    className="relative w-16 h-16 shrink-0 bg-[#0c0c0c] border border-[#c9a35e]/20 cursor-pointer overflow-hidden p-1"
                  >
                    <Image
                      src={piece.image}
                      alt={piece.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-[#c9a35e] block">
                      Pg {piece.page} · {piece.collection}
                    </span>
                    <h4
                      onClick={() => {
                        onClose()
                        onSelectPiece(piece)
                      }}
                      className="font-serif text-sm text-white truncate hover:text-[#dfba7e] cursor-pointer"
                    >
                      {piece.name}
                    </h4>
                    <p className="text-[10px] text-[#a69f94] truncate">
                      {piece.gemstones}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemove(piece.id)}
                    className="p-2 text-[#a69f94] hover:text-red-400 transition"
                    aria-label={`Remove ${piece.name}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {savedPieces.length > 0 && (
          <div className="border-t border-[#c9a35e]/20 pt-5 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] py-3 font-mono text-[10px] uppercase tracking-[0.16em] hover:bg-[#25D366]/30 transition"
            >
              <MessageCircle size={15} />
              <span>Inquire Curated Vault via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose()
                onOpenConcierge(`Wishlist inquiry (${savedPieces.length} pieces)`)
              }}
              className="w-full bg-[#c9a35e] text-[#0c0c0c] py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] font-semibold hover:bg-[#dfba7e] transition"
            >
              Book Viewing for Saved Pieces
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
