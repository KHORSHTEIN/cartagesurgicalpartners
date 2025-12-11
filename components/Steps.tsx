"use client"

import { useState, useEffect } from "react"

export default function StepsPage() {
  const steps = [
    {
      title: "Phase 1: Digital Preparation",
      description: `
      👉 Medical Audit (Free)
      Your case is reviewed by a medical advisor via WhatsApp or video call.

      👉 Care Plan (Quote in 24h)
      Your file is sent to the specialist surgeon. You receive a detailed care plan
      and a transparent all-inclusive quote. We also guide you for international insurance documents.

      👉 Seamless Logistics
      We set your dates. You book your flight. We handle EVERYTHING else.
      `,
    },
    {
      title: "Phase 2: The Carthage Experience (In Tunisia)",
      description: `
      👉 “Zero Wait” Welcome
      Private driver meets you at the airport and takes you directly to the clinic.

      👉 Calm Admission (Day -1)
      Pre-operative assessments + meeting with your Carthage Reference Physician & surgical team.

      👉 The Intervention (Day J)
      Maximum safety using high-grade materials (Recta Medical, Ortho & Santé).

      👉 Active Convalescence (Our Signature)
      - In Clinic: Reference Physician participates in daily rounds.
      - Convalescence House: They travel personally to supervise nursing care and physiotherapy.
      `,
    },
    {
      title: "Phase 3: Continuous Follow-Up",
      description: `
      👉 Discharge Assessment (Dual Validation)
      Final check-up validated jointly by the surgeon and your Reference Physician.

      👉 The Remote Partnership
      Our medical relationship continues after your return. We remain your long-term health partner.
      `,
    },
  ]

  const [flipped, setFlipped] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 200)
  }, [])

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">

      <div className="container mx-auto px-6">
        <h2 className="text-center font-serif text-4xl md:text-5xl font-bold text-[#0A3D62] mb-14 drop-shadow-md">
          🗺️ The Managed Journey: Zero Stress. Zero Uncertainty.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`cursor-pointer perspective transition-all duration-700 
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div
                className={`relative h-[380px] w-full rounded-2xl shadow-2xl transition-transform duration-700 transform-style-preserve-3d 
                ${flipped === index ? "rotate-y-180 scale-[1.02]" : "scale-100"}`}
              >

                {/* FRONT */}
                <div className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-6 backface-hidden shadow-lg">
                  <div className="w-14 h-14 rounded-full bg-[#3C8DBC] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] text-center">{step.title}</h3>
                  <p className="text-[#3C8DBC] font-medium text-sm mt-3">Tap to view details</p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-[#0A3D62] text-white rounded-2xl p-6 rotate-y-180 backface-hidden shadow-xl flex items-center justify-center overflow-y-auto">
                  <p className="text-center text-sm whitespace-pre-line leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .perspective {
            perspective: 1200px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
        `}
      </style>

    </section>
  )
}
