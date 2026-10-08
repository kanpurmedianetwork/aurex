'use client'

import { useState, useEffect } from 'react'
import { AurexLogo } from '@/components/AurexLogo'
import { Heart, Menu, PhoneCall, X } from 'lucide-react'

interface NavbarProps {
  wishlistCount: number
  onOpenWishlist: () => void
  onOpenConcierge: () => void
}

export function Navbar({ wishlistCount, onOpenWishlist, onOpenConcierge }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Minimal & Completely Transparent Luxury Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#141414]/85 backdrop-blur-md border-b border-[#d8a48f]/15 py-3 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="p-1.5 text-[#ede6df] hover:text-[#d8a48f] transition"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop Left Minimal Links */}
          <nav className="hidden lg:flex items-center gap-9 text-[11px] font-mono uppercase tracking-[0.22em] text-[#ede6df]/75">
            <a href="#collections" className="hover:text-[#d8a48f] transition duration-200">
              Collections
            </a>
            <a href="#editorial" className="hover:text-[#d8a48f] transition duration-200">
              Editorial
            </a>
            <a href="#heritage" className="hover:text-[#d8a48f] transition duration-200">
              Heritage
            </a>
            <a href="#client-diaries" className="hover:text-[#d8a48f] transition duration-200">
              Diaries
            </a>
          </nav>

          {/* Center Minimal Transparent Logo */}
          <a
            href="#top"
            className="flex flex-col items-center justify-center group select-none"
            aria-label="Aurex Fine Jewellery home"
          >
            <AurexLogo size="md" />
          </a>

          {/* Desktop Right Minimal Actions */}
          <div className="hidden lg:flex items-center gap-7 text-[11px] font-mono uppercase tracking-[0.22em]">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#ede6df]/75 hover:text-[#d8a48f] transition"
              aria-label="View curated wishlist"
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute 1 top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#d8a48f] text-[#141414] font-mono text-[8px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-2 border border-[#d8a48f]/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#d8a48f] hover:bg-[#d8a48f] hover:text-[#141414] transition duration-300"
            >
              <PhoneCall size={12} strokeWidth={1.5} />
              <span>Concierge</span>
            </button>
          </div>

          {/* Mobile Right Quick Icons */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenWishlist}
              className="relative p-1.5 text-[#ede6df] hover:text-[#d8a48f]"
              aria-label="Wishlist"
            >
              <Heart size={19} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute 0 top-0 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#d8a48f] text-[#141414] font-mono text-[8px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConcierge}
              className="p-1.5 text-[#d8a48f] hover:text-[#ede6df]"
              aria-label="Contact Concierge"
            >
              <PhoneCall size={19} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md lg:hidden">
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#141414] border-r border-[#d8a48f]/20 p-7 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-[#d8a48f]/15 pb-5">
                <AurexLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#a39b94] hover:text-[#d8a48f]"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-6 font-serif text-2xl">
                <a
                  href="#collections"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#ede6df] hover:text-[#d8a48f] transition"
                >
                  Collections
                </a>
                <a
                  href="#editorial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#ede6df] hover:text-[#d8a48f] transition"
                >
                  Editorial Spreads
                </a>
                <a
                  href="#heritage"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#ede6df] hover:text-[#d8a48f] transition"
                >
                  10th Gen Jaipur Heritage
                </a>
                <a
                  href="#client-diaries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#ede6df] hover:text-[#d8a48f] transition"
                >
                  Client Diaries
                </a>
                <a
                  href="#top"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenConcierge()
                  }}
                  className="text-[#d8a48f] hover:text-[#ebd0c4] transition"
                >
                  Book Private Viewing
                </a>
              </nav>
            </div>

            <div className="border-t border-[#d8a48f]/20 pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenConcierge()
                }}
                className="w-full bg-[#d8a48f] text-[#141414] py-3 text-center font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#ebd0c4] transition"
              >
                Schedule Private Viewing
              </button>
              <div className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-[#a39b94]">
                Jaipur · Antwerp · New Delhi
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
