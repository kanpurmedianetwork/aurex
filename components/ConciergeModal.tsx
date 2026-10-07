'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AUREX_BRAND } from '@/lib/lookbook-data'
import { X, Sparkles, MessageCircle, Mail, Phone, CheckCircle2 } from 'lucide-react'

interface ConciergeModalProps {
  isOpen: boolean
  onClose: () => void
  initialPiece?: string
}

export function ConciergeModal({ isOpen, onClose, initialPiece }: ConciergeModalProps) {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [city, setCity] = useState('')
  const [interest, setInterest] = useState(initialPiece || 'Bespoke Haute Joaillerie Commission')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const whatsappMessage = `Hello Aurex Concierge, I would like to schedule a private viewing consultation. Interest: ${interest}. Name: ${name || 'Patron'}, City: ${city || 'India'}.`
  const whatsappUrl = `https://wa.me/919839000000?text=${encodeURIComponent(whatsappMessage)}`

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-xl bg-[#121110] border border-[#c9a35e]/50 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#a69f94] hover:text-[#dfba7e] transition"
          aria-label="Close concierge form"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <CheckCircle2 size={48} className="mx-auto text-[#c9a35e] mb-4" />
            <h3 className="font-serif text-3xl text-white mb-2">Consultation Scheduled</h3>
            <p className="text-sm text-[#c7c0b5] max-w-md mx-auto mb-6 font-serif">
              Thank you, {name || 'esteemed patron'}. A private Aurex jewellery advisor will reach out to you within 24 hours to coordinate your bespoke appointment.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="bg-[#c9a35e] text-[#0c0c0c] px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest font-semibold"
            >
              Return to Lookbook
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="relative w-10 h-8 mx-auto mb-2">
                <Image src="/aurex-monogram.png" alt="Aurex Monogram" fill className="object-contain" />
              </div>
              <span className="font-script text-3xl text-[#d99f84] block leading-none">
                Private Viewing
              </span>
              <h3 className="font-serif text-2xl uppercase tracking-[0.16em] text-white mt-1">
                Bespoke Concierge
              </h3>
              <p className="text-xs text-[#a69f94] mt-1 font-serif">
                Direct consultation with 10th-generation designers and Antwerp diamond specialists.
              </p>
            </div>

            {/* Quick WhatsApp Link Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mb-6 inline-flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 py-3 px-4 font-mono text-[10px] uppercase tracking-[0.16em] transition"
            >
              <MessageCircle size={15} />
              <span>Connect Directly on WhatsApp</span>
            </a>

            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-[#c9a35e]/20" />
              <span className="flex-shrink mx-4 font-mono text-[9px] uppercase tracking-widest text-[#a69f94]">
                Or Submit Appointment Form
              </span>
              <div className="flex-grow border-t border-[#c9a35e]/20" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-[#a69f94] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maharani Gayatri Devi / Patron Name"
                  className="w-full bg-[#181716] border border-[#c9a35e]/30 px-3.5 py-2.5 text-xs text-white placeholder:text-[#a69f94]/40 focus:border-[#c9a35e] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-[#a69f94] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+91 98390 XXXXX"
                    className="w-full bg-[#181716] border border-[#c9a35e]/30 px-3.5 py-2.5 text-xs text-white placeholder:text-[#a69f94]/40 focus:border-[#c9a35e] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-[#a69f94] mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="New Delhi / London / Dubai"
                    className="w-full bg-[#181716] border border-[#c9a35e]/30 px-3.5 py-2.5 text-xs text-white placeholder:text-[#a69f94]/40 focus:border-[#c9a35e] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-[#a69f94] mb-1">
                  Piece of Interest or Commission
                </label>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#181716] border border-[#c9a35e]/30 px-3.5 py-2.5 text-xs text-white placeholder:text-[#a69f94]/40 focus:border-[#c9a35e] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-[#c9a35e] to-[#dfba7e] text-[#0c0c0c] py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] font-semibold hover:shadow-lg hover:shadow-[#c9a35e]/25 transition"
              >
                Schedule Private Viewing
              </button>

              <div className="pt-2 text-center text-[10px] font-mono text-[#a69f94]">
                Direct Inquiries: <a href="mailto:aurex1975@gmail.com" className="text-[#dfba7e] hover:underline">aurex1975@gmail.com</a> · www.aurex.in
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
