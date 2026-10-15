'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AurexLogo } from '@/components/AurexLogo'
import { ShinyText } from '@/components/reactbits/ShinyText'
import { SpotlightCard } from '@/components/reactbits/SpotlightCard'
import { TiltedCard } from '@/components/reactbits/TiltedCard'
import { TrueFocus } from '@/components/reactbits/TrueFocus'
import {
  Sparkles,
  PhoneCall,
  Eye,
  Calendar,
  Compass,
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

interface FounderAtelierSectionProps {
  onOpenConcierge: (pieceName?: string) => void
}

const ATELIER_STATIONS = [
  {
    id: 'gemstones',
    label: 'Rare Gemstone Curation',
    subtitle: 'Muzo Emeralds & Syndicate Polki',
    title: 'The Gemological Loupe & Loose Emerald Selection',
    description:
      'In her Jaipur office, founder Neeru personally inspects every unheated Colombian emerald and certified solitaire diamond under 10x magnification, presenting hand-picked gem parcels to patrons before crafting begins.',
    details: [
      { label: 'Featured Stones', value: 'Unheated Muzo Colombian Emeralds & Syndicate Polki' },
      { label: 'Grading Protocol', value: 'Natural Color, Loupe-Clean Clarity, Zero Resin Treatment' },
      { label: 'Provenance', value: 'Direct Jaipur Family Treasury (10th Generation)' }
    ],
    pieceName: 'The 300 Carat Colombian Emerald Heirloom',
    image: '/founder-atelier-office.jpg'
  },
  {
    id: 'sketches',
    label: 'Archival Gouache Sketches',
    subtitle: 'Handcrafted Heritage Blueprints',
    title: 'One-of-a-Kind Custom Jewellery Rendering',
    description:
      'Every bespoke creation begins with hand-painted gouache watercolors on designer parchment. Neeru sketches proportions tailored to the patron’s neckline, neckline geometry, and trousseau silhouettes.',
    details: [
      { label: 'Medium', value: 'Hand-painted Gouache on Archival Paper' },
      { label: 'Karigari Technique', value: 'Reverse Meenakari & Kundan-Jadau Mapping' },
      { label: 'Customization', value: '100% Unique Bespoke Blueprint per Patron' }
    ],
    pieceName: 'Imperial Colombian Emerald & Polki Choker',
    image: '/founder-atelier-office.jpg'
  },
  {
    id: 'presentation',
    label: 'The Velvet Tray',
    subtitle: 'Signature Finished Masterpieces',
    title: 'Private Showcase of Finished Heirlooms',
    description:
      'Witness the finished masterworks presented on plush velvet trays. From articulated chandelier earrings to multi-layered bridal collars, experience the balance, luster, and drape firsthand in the private salon.',
    details: [
      { label: 'Signature Creation', value: 'Marquise Cluster Pear Emerald Chandeliers' },
      { label: 'Precious Metal', value: '18K Two-Tone Gold & Platinum Mountings' },
      { label: 'Finish', value: 'Articulated Fluid Movement with Micro-Pavé' }
    ],
    pieceName: 'Marquise Cluster Pear Emerald Chandeliers',
    image: '/founder-atelier-office.jpg'
  },
  {
    id: 'consultation',
    label: 'Private VIP Salon',
    subtitle: 'Jaipur & New Delhi Appointments',
    title: 'One-on-One Consultation with Founder Neeru',
    description:
      'An intimate, discreet salon experience where patrons and their families collaborate directly with Neeru over afternoon tea, reviewing heirloom remodels and selecting gemstones for landmark celebrations.',
    details: [
      { label: 'Locations', value: 'Jaipur Flagship Atelier · New Delhi VIP Suite' },
      { label: 'Consultation Fee', value: 'Complimentary by Advance Invitation' },
      { label: 'Duration', value: '60–90 Minutes Dedicated Private Viewing' }
    ],
    pieceName: 'Bespoke Atelier Commission with Neeru',
    image: '/founder-atelier-office.jpg'
  }
]

export function FounderAtelierSection({ onOpenConcierge }: FounderAtelierSectionProps) {
  const [activeStationId, setActiveStationId] = useState('gemstones')

  const currentStation =
    ATELIER_STATIONS.find((s) => s.id === activeStationId) || ATELIER_STATIONS[0]

  return (
    <section id="atelier" className="py-24 bg-[#121212] border-t border-b border-[#d8a48f]/20 relative overflow-hidden">
      {/* Background paper texture & ambient vignette */}
      <div className="absolute inset-0 opacity-25 -z-10 pointer-events-none">
        <Image src="/dark-paper-bg.jpg" alt="Texture" fill className="object-cover" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with ReactBits ShinyText */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#d8a48f]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#d8a48f]">
              Jaipur Flagship · Private Office & Design Studio
            </span>
            <span className="w-8 h-px bg-[#d8a48f]" />
          </div>

          <span className="font-script text-4xl sm:text-6xl text-[#d8a48f] block mb-2 leading-none">
            The Founder&apos;s Salon
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.16em] text-[#ede6df] font-light">
            <ShinyText text="Inside Neeru's Private Atelier" speed={6} />
          </h2>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d8a48f] to-transparent mx-auto my-5" />

          <p className="font-serif italic text-base sm:text-lg text-[#c7c0b5] leading-relaxed max-w-2xl mx-auto">
            Experience the private salon where 10th-generation jeweller Neeru examines rare unheated emeralds, sketches bespoke heirlooms, and welcomes patrons for one-on-one viewings.
          </p>

          {/* ReactBits TrueFocus interactive navigation */}
          <div className="mt-8 flex justify-center">
            <TrueFocus
              items={ATELIER_STATIONS.map((s) => ({
                id: s.id,
                label: s.label,
                subtitle: s.subtitle
              }))}
              activeId={activeStationId}
              onSelect={(id) => setActiveStationId(id)}
            />
          </div>
        </div>

        {/* Main Interactive Office Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Column: ReactBits 3D TiltedCard of Founder in Office */}
          <div className="lg:col-span-7">
            <TiltedCard
              maxTilt={7}
              scale={1.01}
              className="relative p-2 bg-[#1b1b1b] border border-[#d8a48f]/40 shadow-2xl group"
            >
              <div className="relative h-96 sm:h-[480px] w-full overflow-hidden bg-[#141414]">
                <Image
                  src="/founder-atelier-office.jpg"
                  alt="Founder Neeru in her luxury jewellery design atelier office"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                  <span className="bg-[#141414]/90 border border-[#d8a48f]/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d8a48f] backdrop-blur-md">
                    Direct Consultation With The Designer
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#d8a48f] block mb-1">
                      Creative Director & 10th Gen Jeweller
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#ede6df] font-medium leading-tight">
                      Neeru in the Atelier
                    </h3>
                    <p className="text-xs text-[#c7c0b5] font-serif italic mt-0.5">
                      Showcasing loose Colombian emeralds & bespoke necklace sketches
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConcierge(currentStation.pieceName)}
                    className="inline-flex items-center gap-2 bg-[#d8a48f] text-[#141414] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold hover:bg-[#ebd0c4] transition shrink-0 shadow-lg"
                  >
                    <span>Book Private Session</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </TiltedCard>
          </div>

          {/* Right Column: ReactBits SpotlightCard displaying Active Station Details */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(216, 164, 143, 0.22)"
              spotlightSize={400}
              className="border-[#d8a48f]/30 bg-[#171717] p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#d8a48f]">
                  Atelier Station
                </span>
                <AurexLogo size="sm" showText={false} />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#ede6df] font-medium mb-3 leading-snug">
                {currentStation.title}
              </h3>

              <div className="w-12 h-px bg-[#d8a48f]/50 mb-5" />

              <p className="font-serif text-sm leading-relaxed text-[#c7c0b5] mb-6">
                {currentStation.description}
              </p>

              {/* Station Specifications Grid */}
              <div className="bg-[#1e1e1e] border border-[#d8a48f]/15 p-4 space-y-3 mb-6">
                {currentStation.details.map((det, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-3 text-xs font-mono min-w-0">
                    <span className="text-[#a39b94] uppercase tracking-wider text-[9px] shrink-0">
                      {det.label}:
                    </span>
                    <span className="text-right text-[#d8a48f] text-[10px] break-words">
                      {det.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenConcierge(currentStation.pieceName)}
                  className="w-full bg-[#d8a48f] text-[#141414] py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#ebd0c4] transition shadow-md"
                >
                  Schedule One-on-One Atelier Viewing
                </button>

                <a
                  href={`https://wa.me/919958964984?text=${encodeURIComponent(
                    `Hello Neeru, I would like to schedule an in-person bespoke consultation at your atelier regarding ${currentStation.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#d8a48f]/40 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d8a48f] hover:bg-[#d8a48f]/15 transition"
                >
                  <PhoneCall size={13} />
                  <span>Connect with Atelier via WhatsApp</span>
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* 3 Bottom ReactBits SpotlightCards for the Atelier Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard spotlightColor="rgba(216, 164, 143, 0.18)">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 bg-[#d8a48f]/10 border border-[#d8a48f]/30 text-[#d8a48f]">
                <Sparkles size={16} />
              </span>
              <h4 className="font-serif text-lg text-[#ede6df] font-medium">
                10th-Gen Diamond Sourcing
              </h4>
            </div>
            <p className="text-xs text-[#a39b94] leading-relaxed font-serif">
              Direct access to uncut syndicate polki and natural unheated Colombian emeralds curated over a century of Jaipur family trade.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(216, 164, 143, 0.18)">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 bg-[#d8a48f]/10 border border-[#d8a48f]/30 text-[#d8a48f]">
                <Compass size={16} />
              </span>
              <h4 className="font-serif text-lg text-[#ede6df] font-medium">
                Custom Gouache Blueprints
              </h4>
            </div>
            <p className="text-xs text-[#a39b94] leading-relaxed font-serif">
              Collaborate on 1-of-1 archival gouache sketches customized to your bridal trousseau, anniversary milestones, or family gemstone remounts.
            </p>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(216, 164, 143, 0.18)">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 bg-[#d8a48f]/10 border border-[#d8a48f]/30 text-[#d8a48f]">
                <Award size={16} />
              </span>
              <h4 className="font-serif text-lg text-[#ede6df] font-medium">
                Confidential Viewing Suites
              </h4>
            </div>
            <p className="text-xs text-[#a39b94] leading-relaxed font-serif">
              Private, discreet appointments available at our Jaipur flagship salon and New Delhi consultation suites with personalized security.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
