"use client"

import { useState } from "react"

export default function OrthopedicServicePage() {
  const [activeSection, setActiveSection] = useState("spine")

  const sections = [
    { id: "spine", label: "Spine Surgery" },
    { id: "upper-limb", label: "Upper Limb" },
    { id: "hip", label: "Pelvis & Hip" },
    { id: "knee-foot", label: "Knee & Foot" },
    { id: "specialized", label: "Specialized" },
    { id: "pediatric", label: "Pediatric" },
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full">
              WORLD-CLASS EXPERTISE
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excellence in Orthopedic Surgery
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Internationally recognized surgeons specializing in advanced microsurgery, arthroscopy, and minimally
            invasive techniques to restore your mobility.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Schedule Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}
      <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "10K+", label: "Patients Treated" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Specialists" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTENT LAYOUT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* ================= SIDEBAR ================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">Services</div>
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                    activeSection === s.id ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <main className="lg:col-span-3 space-y-20">
            {/* MISSION */}
            <section>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission & Expertise</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Restore mobility and eliminate pain with{" "}
                <span className="font-semibold text-slate-900">
                  advanced microsurgery, arthroscopy, minimally invasive surgery
                </span>{" "}
                and complex reconstructions for fast, safe recovery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Advanced Techniques", desc: "Precision surgical methods for optimal outcomes" },
                  { title: "Expert Surgeons", desc: "Internationally recognized specialists" },
                  { title: "Fast Recovery", desc: "Minimally invasive approaches" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SPINE SECTION */}
            <section id="spine" className="scroll-mt-8">
              <div className="mb-8">
                <span className="text-blue-600 text-sm font-bold">01 — SPINE SURGERY</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">The Spine</h2>
                <p className="text-slate-600 mt-4">Cervical, Thoracic & Lumbar treatment</p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "Herniated Disc Surgery",
                    indication: "Sciatica, cruralgia, disabling neuralgia",
                    duration: "1h00–1h30 | 1-2 nights",
                  },
                  {
                    name: "Lumbar Spinal Stenosis",
                    indication: "Narrowed spinal canal with leg pain",
                    duration: "2h00–3h00 | 3-5 nights",
                  },
                  {
                    name: "Vertebral Arthrodesis (Fusion)",
                    indication: "Instability, disc degeneration",
                    duration: "3h00–5h00 | 5-7 nights",
                  },
                  {
                    name: "Cervical Disc Replacement",
                    indication: "Neck herniated disc alternative to fusion",
                    duration: "2h00 | 2-3 nights",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{item.indication}</p>
                    <p className="text-sm font-medium text-blue-600">{item.duration}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* UPPER LIMB SECTION */}
            <section id="upper-limb" className="scroll-mt-8">
              <div className="mb-8">
                <span className="text-blue-600 text-sm font-bold">02 — UPPER LIMB</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">Upper Limb Surgery</h2>
                <p className="text-slate-600 mt-4">Shoulder, elbow, wrist & hand care</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Shoulder",
                    procedures: [
                      "Total Shoulder Replacement",
                      "Rotator Cuff Repair",
                      "Stabilization Surgery",
                      "Acromioplasty",
                    ],
                  },
                  {
                    title: "Elbow",
                    procedures: [
                      "Total Elbow Replacement",
                      "Ulnar Nerve Release",
                      "Tennis Elbow Surgery",
                      "Complex Fracture Repair",
                    ],
                  },
                  {
                    title: "Hand & Wrist",
                    procedures: [
                      "Carpal Tunnel Surgery",
                      "Dupuytren's Contracture",
                      "Thumb Arthritis",
                      "Trigger Finger Release",
                    ],
                  },
                ].map((category, i) => (
                  <div
                    key={i}
                    className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition"
                  >
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.procedures.map((proc, j) => (
                        <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">→</span>
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* HIP SECTION */}
            <section id="hip" className="scroll-mt-8">
              <div className="mb-8">
                <span className="text-blue-600 text-sm font-bold">03 — PELVIS & HIP</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">Pelvis & Hip Surgery</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Total Hip Replacement", desc: "1h30–2h00 | 3-4 days stay" },
                  { title: "Revision Hip Surgery", desc: "3h00–5h00 | Complex cases" },
                  { title: "Hip Arthroscopy", desc: "1-2 nights | Young active patients" },
                  { title: "Pelvic Osteotomy", desc: "Corrective procedures for dysplasia" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* KNEE & FOOT SECTION */}
            <section id="knee-foot" className="scroll-mt-8">
              <div className="mb-8">
                <span className="text-blue-600 text-sm font-bold">04 — KNEE, ANKLE & FOOT</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">Knee, Ankle & Foot</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Total Knee Replacement", desc: "2h00 | 4-5 days stay" },
                  { title: "ACL Reconstruction", desc: "1h30 | 1-2 days stay" },
                  { title: "Meniscus Surgery", desc: "45 min | Outpatient procedure" },
                  { title: "Ankle Stabilization", desc: "Ligament repair surgery" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SPECIALIZED SECTION */}
            <section id="specialized" className="scroll-mt-8">
              <div className="mb-8">
                <span className="text-blue-600 text-sm font-bold">05 — SPECIALIZED</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">Specialized Surgery</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Non-Union Treatment",
                  "Bone & Joint Infection Management",
                  "Bone Tumor Surgery",
                  "Complex Trauma & Reconstruction",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-white transition"
                  >
                    <span className="font-medium text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PEDIATRIC SECTION */}
            <section id="pediatric" className="scroll-mt-8">
              <div className="mb-8">
                <span className="text-blue-600 text-sm font-bold">06 — PEDIATRIC</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">Pediatric Orthopedics</h2>
                <p className="text-slate-600 mt-4">Specialized care for children with growth disorders</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Scoliosis Surgery", desc: "5h00–8h00 | 7–10 nights stay" },
                  { title: "Hip Dysplasia Surgery", desc: "2–4 hours | Pelvic osteotomies" },
                  { title: "Clubfoot Surgery", desc: "2–3 hours | Corrective procedure" },
                  { title: "Cerebral Palsy Surgery", desc: "Multi-level intervention" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-12 px-8 bg-blue-50 rounded-2xl border border-blue-200 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to Restore Your Mobility?</h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                Schedule your consultation with our expert surgeons today.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                Book Consultation
              </button>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
