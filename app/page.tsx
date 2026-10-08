'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { LookbookViewer } from '@/components/LookbookViewer'
import { CollectionsSection } from '@/components/CollectionsSection'
import { HeritageSection } from '@/components/HeritageSection'
import { ClientDiariesSection } from '@/components/ClientDiariesSection'
import { AtelierCommitments } from '@/components/AtelierCommitments'
import { Footer } from '@/components/Footer'
import { QuickViewModal } from '@/components/QuickViewModal'
import { ConciergeModal } from '@/components/ConciergeModal'
import { WishlistDrawer } from '@/components/WishlistDrawer'
import { JewelryPiece } from '@/lib/lookbook-data'

export default function Home() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([])
  const [selectedPiece, setSelectedPiece] = useState<JewelryPiece | null>(null)
  const [isConciergeOpen, setIsConciergeOpen] = useState(false)
  const [conciergeInitialPiece, setConciergeInitialPiece] = useState<string | undefined>()
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  function toggleWishlist(pieceId: string) {
    setWishlistIds((prev) =>
      prev.includes(pieceId) ? prev.filter((id) => id !== pieceId) : [...prev, pieceId]
    )
  }

  function handleOpenConcierge(pieceName?: string) {
    setConciergeInitialPiece(pieceName)
    setIsConciergeOpen(true)
  }

  function handleExploreEditorial() {
    const el = document.getElementById('editorial')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[#141414] text-[#ede6df] relative selection:bg-[#d8a48f]/30 selection:text-white">
      <div id="top" />

      {/* Luxury Sticky Navbar */}
      <Navbar
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenConcierge={() => handleOpenConcierge()}
      />

      {/* Hero Section */}
      <Hero
        onExploreEditorial={handleExploreEditorial}
        onOpenConcierge={() => handleOpenConcierge()}
      />

      {/* Interactive Editorial Spread Viewer */}
      <LookbookViewer
        onSelectPiece={(piece) => setSelectedPiece(piece)}
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Permanent Collections Catalog */}
      <CollectionsSection
        onSelectPiece={(piece) => setSelectedPiece(piece)}
        onToggleWishlist={toggleWishlist}
        wishlistIds={wishlistIds}
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Atelier Guarantees & Commitments */}
      <AtelierCommitments />

      {/* 10th Generation Jaipur Heritage */}
      <HeritageSection />

      {/* Client Diaries */}
      <ClientDiariesSection />

      {/* Maison Footer */}
      <Footer />

      {/* Quick View Modal for Gemstones & Craftsmanship Specs */}
      <QuickViewModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onToggleWishlist={toggleWishlist}
        isLiked={selectedPiece ? wishlistIds.includes(selectedPiece.id) : false}
        onOpenConcierge={handleOpenConcierge}
      />

      {/* Bespoke VIP Concierge & Private Viewing Booking */}
      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => {
          setIsConciergeOpen(false)
          setConciergeInitialPiece(undefined)
        }}
        initialPiece={conciergeInitialPiece}
      />

      {/* Saved Pieces Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemove={toggleWishlist}
        onSelectPiece={(piece) => setSelectedPiece(piece)}
        onOpenConcierge={handleOpenConcierge}
      />
    </main>
  )
}
