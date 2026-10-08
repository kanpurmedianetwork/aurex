'use client'

import { ShieldCheck, Gem, Sparkles, MapPin } from 'lucide-react'

export function AtelierCommitments() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: 'BIS Hallmarked Purity',
      description: 'Every creation is stamped with official Bureau of Indian Standards (BIS 750 / 585) hallmarks verifying gold purity.'
    },
    {
      icon: Gem,
      title: 'Certified Gemstones',
      description: 'Antwerp cut diamonds and rare Colombian emeralds accompanied by reputable gemological laboratory certification (IGI / SGL).'
    },
    {
      icon: Sparkles,
      title: 'Generational Karigari',
      description: '10th-generation Jaipur artisans employing traditional uncut polki, basra pearls, and champlevé meenakari.'
    },
    {
      icon: MapPin,
      title: 'Private Salon Viewing',
      description: 'Discrete appointments hosted at our private Jaipur atelier or tailored bespoke viewings in New Delhi.'
    }
  ]

  return (
    <section className="py-16 bg-[#111111] border-b border-[#d8a48f]/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-[#171717] border border-[#d8a48f]/20 hover:border-[#d8a48f]/50 transition duration-300"
              >
                <div className="p-2.5 bg-[#141414] border border-[#d8a48f]/30 shrink-0 text-[#d8a48f]">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-[#ede6df] mb-1.5 font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#a39b94] font-serif leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
