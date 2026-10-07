'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AUREX_BRAND } from '@/lib/lookbook-data'
import { Heart, Menu, PhoneCall, Search, Sparkles, X } from 'lucide-react'

interface NavbarProps {
  wishlistCount: number
  onOpenWishlist: () => void
  onOpenConcierge: () => void
}

export function Navbar({ wishlistCount, onOpenWishlist, onOpenConcierge }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#121110] border-b border-[#c9a35e]/20 px-4 py-2 text-center">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-[#dfba7e]">
          <Sparkles size={12} className="text-[#c9a35e] animate-pulse" />
          <span>Complimentary White-Glove Bespoke Consultation & Insured Worldwide Delivery</span>
          <Sparkles size={12} className="text-[#c9a35e] animate-pulse hidden sm:inline" />
        </div>
      </div>

      {/* Main Sticky Luxury Header */}
      <header className="sticky top-0 z-40 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-[#c9a35e]/15">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-[#dfba7e] hover:text-[#f7e6c4] transition"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-[#a69f94]">
            <a href="#collections" className="hover:text-[#dfba7e] transition duration-200">
              Collections
            </a>
            <a href="#lookbook-viewer" className="hover:text-[#dfba7e] transition duration-200">
              Lookbook
            </a>
            <a href="#heritage" className="hover:text-[#dfba7e] transition duration-200">
              10th Gen Legacy
            </a>
            <a href="#client-diaries" className="hover:text-[#dfba7e] transition duration-200">
              Client Diaries
            </a>
          </nav>

          {/* Center Brand Emblem & Title */}
          <a
            href="#top"
            className="flex flex-col items-center justify-center group py-1"
            aria-label="Aurex Fine Jewellery home"
          >
            <div className="relative w-9 h-7 sm:w-11 sm:h-8 mb-1 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/aurex-monogram.png"
                alt="Aurex Monogram"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] uppercase gold-foil-text font-normal leading-none">
              AUREX
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.35em] uppercase text-[#a69f94] mt-1">
              Fine Jewellery
            </span>
          </a>

          {/* Right Action Icons & VIP Concierge Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#a69f94] hover:text-[#dfba7e] transition"
              aria-label="View curated wishlist"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#c9a35e] text-[#0c0c0c] font-mono text-[9px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConcierge}
              className="hidden sm:inline-flex items-center gap-2 border border-[#c9a35e]/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#dfba7e] hover:bg-[#c9a35e]/10 hover:border-[#c9a35e] transition duration-300"
            >
              <PhoneCall size={12} />
              <span>Bespoke Concierge</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#121110] border-r border-[#c9a35e]/30 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#c9a35e]/20 pb-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-6">
                    <Image src="/aurex-monogram.png" alt="Aurex Monogram" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="font-serif text-xl tracking-[0.2em] gold-foil-text uppercase">AUREX</div>
                    <div className="text-[8px] font-mono tracking-[0.3em] uppercase text-[#a69f94]">Fine Jewellery</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#a69f94] hover:text-[#dfba7e]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-6 font-serif text-2xl">
                <a
                  href="#collections"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#f4ede4] hover:text-[#dfba7e] transition"
                >
                  Collections
                </a>
                <a
                  href="#lookbook-viewer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#f4ede4] hover:text-[#dfba7e] transition"
                >
                  Lookbook Spreads
                </a>
                <a
                  href="#heritage"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#f4ede4] hover:text-[#dfba7e] transition"
                >
                  10th Gen Legacy
                </a>
                <a
                  href="#client-diaries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#f4ede4] hover:text-[#dfba7e] transition"
                >
                  Client Diaries
                </a>
                <a
                  href="#concierge"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenConcierge()
                  }}
                  className="text-[#dfba7e] hover:text-[#f7e6c4] transition"
                >
                  Private Viewing Request
                </a>
              </nav>
            </div>

            <div className="border-t border-[#c9a35e]/20 pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenConcierge()
                }}
                className="w-full bg-gradient-to-r from-[#c9a35e] to-[#dfba7e] text-[#0c0c0c] py-3 text-center font-mono text-xs uppercase tracking-[0.16em] font-medium"
              >
                Schedule Private Consultation
              </button>
              <div className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-[#a69f94]">
                Jaipur · Antwerp · New Delhi
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
