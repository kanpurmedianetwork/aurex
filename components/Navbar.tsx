'use client'

import { useState, useEffect } from 'react'
import { AurexLogo } from '@/components/AurexLogo'
import { Heart, Menu, PhoneCall, Sparkles, X, ChevronDown } from 'lucide-react'

interface NavbarProps {
  wishlistCount: number
  onOpenWishlist: () => void
  onOpenConcierge: () => void
}

const SUB_CATEGORIES = [
  { label: 'Engagement Rings', href: '#collections' },
  { label: 'Wedding Collection', href: '#collections' },
  { label: 'Colombian Emeralds', href: '#collections' },
  { label: 'Chandelier Earrings', href: '#collections' },
  { label: 'Cocktail Rings', href: '#collections' },
  { label: 'Bracelets & Cuffs', href: '#collections' },
  { label: 'Royal Accessories', href: '#collections' },
  { label: 'Everyday Bling (14K)', href: '#collections' },
]

export function Navbar({ wishlistCount, onOpenWishlist, onOpenConcierge }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 1. Top Atelier & Concierge Micro-Bar */}
      <div className="bg-[#0f0f0f] border-b border-[#d8a48f]/15 px-4 sm:px-8 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#a39b94]">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="hidden md:flex items-center gap-3 text-[#d8a48f]">
            <span>Jaipur Atelier</span>
            <span>·</span>
            <span>Antwerp Diamonds</span>
            <span>·</span>
            <span>New Delhi</span>
          </div>

          <div className="mx-auto md:mx-0 flex items-center gap-2 text-center text-[#ede6df]">
            <Sparkles size={11} className="text-[#d8a48f]" />
            <span>Complimentary Insured Worldwide Delivery & Private Trousseau Consultations</span>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="mailto:aurex1975@gmail.com" className="hover:text-[#d8a48f] transition">
              aurex1975@gmail.com
            </a>
            <span>·</span>
            <span>Est. 1975</span>
          </div>
        </div>
      </div>

      {/* 2. Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-[#d8a48f]/15 ${
          isScrolled
            ? 'bg-[#141414]/95 backdrop-blur-md shadow-2xl py-2'
            : 'bg-[#141414]/90 backdrop-blur-sm py-3'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-[#d8a48f] hover:text-[#ede6df] transition"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Desktop Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.22em] text-[#ede6df]/85">
            <a href="#collections" className="hover:text-[#d8a48f] transition duration-200">
              Collections
            </a>
            <a href="#lookbook-viewer" className="hover:text-[#d8a48f] transition duration-200">
              Lookbook Spreads
            </a>
            <a href="#collections" className="hover:text-[#d8a48f] transition duration-200">
              High Jewellery
            </a>
          </nav>

          {/* Center Brand Emblem & Title with 100% Transparent Monogram */}
          <a
            href="#top"
            className="flex flex-col items-center justify-center group"
            aria-label="Aurex Fine Jewellery home"
          >
            <AurexLogo size="md" />
          </a>

          {/* Desktop Right Navigation Links & Actions */}
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.22em] text-[#ede6df]/85">
            <a href="#heritage" className="hover:text-[#d8a48f] transition duration-200">
              10th Gen Heritage
            </a>
            <a href="#client-diaries" className="hover:text-[#d8a48f] transition duration-200">
              Client Diaries
            </a>

            {/* Wishlist Icon */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#ede6df] hover:text-[#d8a48f] transition"
              aria-label="View saved pieces"
            >
              <Heart size={18} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#d8a48f] text-[#141414] font-mono text-[8px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Book Private Viewing CTA */}
            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-2 border border-[#d8a48f]/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d8a48f] hover:bg-[#d8a48f] hover:text-[#141414] transition duration-300"
            >
              <PhoneCall size={12} />
              <span>Private Viewing</span>
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#ede6df] hover:text-[#d8a48f]"
              aria-label="View saved pieces"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#d8a48f] text-[#141414] font-mono text-[8px] font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConcierge}
              className="p-2 text-[#d8a48f] hover:text-[#ede6df]"
              aria-label="Book private viewing"
            >
              <PhoneCall size={19} />
            </button>
          </div>
        </div>

        {/* 3. Sub-Navigation Horizontal Strip (Lookbook Categories) */}
        <div className="hidden xl:flex items-center justify-center gap-8 border-t border-[#d8a48f]/10 pt-2.5 pb-1 font-mono text-[9px] uppercase tracking-[0.24em] text-[#a39b94]">
          {SUB_CATEGORIES.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="hover:text-[#d8a48f] transition duration-200"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md lg:hidden">
          <div className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#171717] border-r border-[#d8a48f]/30 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-[#d8a48f]/20 pb-5">
                <AurexLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#a39b94] hover:text-[#d8a48f]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5 font-serif text-2xl">
                <a
                  href="#collections"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#ede6df] hover:text-[#d8a48f] transition"
                >
                  Collections
                </a>
                <a
                  href="#lookbook-viewer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#ede6df] hover:text-[#d8a48f] transition"
                >
                  Lookbook Spreads
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

              {/* Mobile Quick Category Jump */}
              <div className="mt-8 pt-6 border-t border-[#d8a48f]/15">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#d8a48f] block mb-3">
                  Browse by Creation
                </span>
                <div className="flex flex-col gap-2.5 font-mono text-[10px] uppercase tracking-wider text-[#a39b94]">
                  {SUB_CATEGORIES.map((cat, i) => (
                    <a
                      key={i}
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-[#ede6df]"
                    >
                      {cat.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#d8a48f]/20 pt-6 mt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenConcierge()
                }}
                className="w-full bg-[#d8a48f] text-[#141414] py-3 text-center font-mono text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#ebd0c4] transition"
              >
                Schedule Private Consultation
              </button>
              <div className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-[#a39b94]">
                Jaipur · Antwerp · New Delhi
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
