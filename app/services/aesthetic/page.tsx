"use client";

import { useState } from "react";

export default function AestheticSurgeryPage() {
  const [activeSection, setActiveSection] = useState("face");

  const sections = [
    { id: "face", label: "Face & Neck" },
    { id: "breast", label: "Breast" },
    { id: "body", label: "Body" },
    { id: "male", label: "Male" },
    { id: "intimate", label: "Intimate" },
    { id: "hair", label: "Hair" },
    { id: "medicine", label: "Non-Surgical" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const blocks = (items: { name: string; indication: string; duration: string }[]) => (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.name}</h3>
          <p className="text-sm text-slate-600 mb-1">{item.indication}</p>
          <p className="text-sm font-medium text-blue-600">{item.duration}</p>
        </div>
      ))}
    </div>
  );

  const face = [
    { name: "Cervico-Facial Lift", indication: "Correct sagging of face and neck", duration: "3–4h | 1–2 nights" },
    { name: "Rhinoplasty", indication: "Aesthetic or functional correction", duration: "2–3h | 1 night" },
    { name: "Blepharoplasty", indication: "Eyelid correction", duration: "1–2h | Outpatient" },
    { name: "Facial Lipofilling", indication: "Volume restoration", duration: "1–2h | Outpatient" },
  ];

  const breast = [
    { name: "Breast Augmentation", indication: "Increase or restore breast volume", duration: "1–1.5h | 1 night" },
    { name: "Breast Lift", indication: "Correct sagging breast", duration: "2–3h | 1 night" },
    { name: "Breast Reduction", indication: "Reduce size & back pain", duration: "2–3h | 1–2 nights" },
  ];

  const body = [
    { name: "Liposuction", indication: "Remove resistant fat deposits", duration: "1–3h | 1 night" },
    { name: "Abdominoplasty", indication: "Tighten abdomen", duration: "2–3h | 1–2 nights" },
    { name: "Brazilian Butt Lift", indication: "Volume enhancement", duration: "3–4h | 1–2 nights" },
  ];

  const male = [
    { name: "Gynecomastia", indication: "Male breast reduction", duration: "1–2h | 1 night" },
    { name: "HD Liposuction", indication: "Define chest & abs", duration: "2–3h | 1 night" },
  ];

  const intimate = [
    { name: "Labiaplasty", indication: "Reduce labia minora", duration: "1h | Outpatient" },
    { name: "Vaginoplasty", indication: "Tighten vaginal canal", duration: "1.5h | 1 night" },
  ];

  const hair = [
    { name: "FUE/DHI Hair Transplant", indication: "Baldness & alopecia", duration: "6–8h | Outpatient" },
    { name: "Beard/Eyebrow Transplant", indication: "Density enhancement", duration: "3–5h | Outpatient" },
  ];

  const medicine = [
    { name: "Botox & Fillers", indication: "Rejuvenation", duration: "30 min | Same day" },
    { name: "PRP Vampire Lift", indication: "Skin regeneration", duration: "45 min | Same day" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ===================== HERO (Same as Orthopedic) ===================== */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 text-sm font-semibold rounded-full">
            AESTHETIC & PLASTIC SURGERY
          </span>

          <h1 className="text-6xl md:text-7xl font-bold text-white mt-6 leading-tight">
             Harmony & Precision
          </h1>

          <p className="text-xl text-slate-300 mt-6 max-w-2xl leading-relaxed">
            Natural and elegant transformations delivered by world-class plastic surgeons.
          </p>
        </div>
      </section>

      {/* ===================== PAGE CONTENT ===================== */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-10 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Categories
              </div>
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                    activeSection === s.id
                      ? "bg-pink-600 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-24">

            {/* Face */}
            <section id="face" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Face & Neck</h2>
              {blocks(face)}
            </section>

            {/* Breast */}
            <section id="breast" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Breast Surgery</h2>
              {blocks(breast)}
            </section>

            {/* Body */}
            <section id="body" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Body Contouring</h2>
              {blocks(body)}
            </section>

            {/* Male */}
            <section id="male" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Male Aesthetic Surgery</h2>
              {blocks(male)}
            </section>

            {/* Intimate */}
            <section id="intimate" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Intimate Surgery</h2>
              {blocks(intimate)}
            </section>

            {/* Hair */}
            <section id="hair" className="scroll-mt-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Hair Restoration</h2>
              {blocks(hair)}
            </section>

            {/* Medicine */}
            <section id="medicine" className="scroll-mt-20 pb-20">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Non-Surgical Aesthetic Medicine</h2>
              {blocks(medicine)}
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
