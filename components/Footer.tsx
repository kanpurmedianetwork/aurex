'use client'

import Image from 'next/image'
import { AurexLogo } from '@/components/AurexLogo'
import { Mail, Globe, MapPin, Sparkles, ArrowUp } from 'lucide-react'

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#111111] border-t border-[#d8a48f]/30 pt-20 pb-12 overflow-hidden text-[#a39b94]">
      {/* Left Rose Gold Foil Ribbon matching Lookbook Back Cover */}
      <div className="absolute left-0 top-0 bottom-0 w-3 z-10 pointer-events-none">
        <Image src="/gold-foil-ribbon.jpg" alt="Rose gold border foil" fill className="object-cover" />
      </div>

      {/* Background paper texture */}
      <div className="absolute inset-0 opacity-20 -z-10 pointer-events-none">
        <Image src="/dark-paper-bg.jpg" alt="Texture" fill className="object-cover" />
      </div>

      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#d8a48f]/20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <AurexLogo size="md" />
            </div>

            <p className="text-sm font-serif italic text-[#c7c0b5] max-w-sm leading-relaxed">
              &ldquo;A house of legacy, trust, and tradition. Innovating a smart blend of modern and ethnic designs through skilled artisan craftsmen.&rdquo;
            </p>

            <div className="space-y-2 text-xs font-mono text-[#c7c0b5]">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#d8a48f]" />
                <a href="https://www.aurex.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#d8a48f] transition">
                  Website: www.aurex.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#d8a48f]" />
                <a href="mailto:aurex1975@gmail.com" className="hover:text-[#d8a48f] transition">
                  Email: aurex1975@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#d8a48f]" />
                <span>Jaipur Atelier · Antwerp Diamond Sourcing · New Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8a48f] block mb-5">
              The Collections
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider">
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Colombian Emeralds</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Bridal Wedding Chokers</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Antwerp Engagement Rings</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Chandelier Chandbalis</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Bespoke Cocktail Rings</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Royal Sherwani Buttons</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#d8a48f] transition">Everyday Bling (14K)</a>
              </li>
            </ul>
          </div>

          {/* Lookbook Chapters */}
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#d8a48f] block mb-5">
              Lookbook Archive
            </span>
            <p className="text-xs font-serif text-[#c7c0b5] mb-4 leading-relaxed">
              Explore all 47 pages of our archival 2026 Lookbook featuring rare Muzo emeralds, syndicate polki diamonds, and real client heirlooms.
            </p>
            <a
              href="#lookbook-viewer"
              className="inline-flex items-center gap-2 border border-[#d8a48f]/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d8a48f] hover:bg-[#d8a48f]/15 transition"
            >
              <Sparkles size={13} />
              <span>Launch Lookbook Reader</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar matching Lookbook copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest uppercase text-[#a39b94]">
          <div className="flex items-center gap-4">
            <span>© AUREX 2026</span>
            <span>·</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-6">
            <span>10th Generation Jaipur Legacy</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#d8a48f] transition"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
