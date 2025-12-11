"use client";

import { useState } from "react";

export default function GeneralBariatricPage() {
  const [active, setActive] = useState("bariatric");

  const sections = [
    { id: "bariatric", label: "Bariatric Surgery" },
    { id: "digestive", label: "Digestive Surgery" },
    { id: "endocrine", label: "Endocrine Surgery" },
    { id: "proctology", label: "Proctology" },
    { id: "oncology", label: "Oncological Surgery" },
  ];

  const scrollToSection = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm font-semibold rounded-full">
            GENERAL & BARIATRIC SURGERY
          </span>

          <h1 className="text-6xl md:text-7xl font-bold text-white mt-6 leading-tight">
            Healing, Precision & Transformation
          </h1>

          <p className="text-xl text-slate-300 mt-6 max-w-2xl leading-relaxed">
            Advanced abdominal, endocrine and obesity surgery using 4K laparoscopy, laser and minimally invasive procedures.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-10 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-4">Sections</div>

              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                    active === s.id ? "bg-emerald-600 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 space-y-24">

            {/* 1. Bariatric Surgery */}
            <section id="bariatric" className="scroll-mt-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">1️⃣ Bariatric Surgery (Obesity)</h2>
              <p className="text-lg text-slate-600 mb-8">
                Multidisciplinary approach including surgeon, physician and nutritionist for long-term life transformation.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Sleeve Gastrectomy",
                    indication: "Severe obesity (BMI > 35 or > 40)",
                    operation: "Removes 2/3 of the stomach. Restrictive + hormonal effect.",
                    details: "General | 1h30–2h | 2–3 nights | Stay 10 days"
                  },
                  {
                    title: "Gastric Bypass (Roux-en-Y)",
                    indication: "Severe obesity, diabetes, GERD",
                    operation: "Creates small pouch + intestines rerouted.",
                    details: "General | 2–3h | 3–4 nights | Stay 10–14 days"
                  },
                  {
                    title: "Mini-Gastric Bypass",
                    indication: "Highly effective alternative for weight loss",
                    operation: "One anastomosis bypass.",
                    details: "General | 2h | 3 nights | Stay 10–14 days"
                  },
                  {
                    title: "Bariatric Revision Surgery",
                    indication: "Weight regain or complications from previous surgery",
                    operation: "Converts one technique to another.",
                    details: "General | 3–5h | 4–5 nights | Stay 14–21 days"
                  },
                  {
                    title: "Adjustable Gastric Banding",
                    indication: "Reversible restrictive method",
                    operation: "Placement of adjustable silicone band.",
                    details: "General | 1h | 1 night | Stay 7 days"
                  },
                  {
                    title: "Gastric Balloon (Endoscopic)",
                    indication: "Overweight BMI 27–35, non-surgical option",
                    operation: "Inserted via endoscopy, removed after 6–12 months.",
                    details: "Sedation | 30 min | Outpatient | Stay 3–5 days"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl border hover:border-emerald-400 transition shadow-sm">
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600 mt-1"><strong>Indication:</strong> {item.indication}</p>
                    <p className="text-sm text-slate-600"><strong>Operation:</strong> {item.operation}</p>
                    <p className="text-sm text-emerald-600 mt-2 font-medium">{item.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Digestive Surgery */}
            <section id="digestive" className="scroll-mt-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">2️⃣ Digestive Surgery (Abdominal)</h2>

              {[
                {
                  title: "Cholecystectomy",
                  details: "Gallbladder removal | 45 min–1h | 1 night"
                },
                {
                  title: "Hernia Repair (Inguinal, Umbilical)",
                  details: "Mesh placement | 1h | 1 night"
                },
                {
                  title: "Incisional Hernia Repair",
                  details: "Large mesh | 2–3h | 3–5 nights"
                },
                {
                  title: "Anti-Reflux Surgery (GERD)",
                  details: "Nissen fundoplication | 2h | 2–3 nights"
                },
                {
                  title: "Appendectomy",
                  details: "Appendix removal | 45 min | 1–2 nights"
                },
                {
                  title: "Splenectomy",
                  details: "Spleen removal | 2h | 3–5 nights"
                },
                {
                  title: "Adrenalectomy",
                  details: "Adrenal removal | 2–3h | 3–5 nights"
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border hover:border-emerald-400 transition shadow-sm mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.details}</p>
                </div>
              ))}
            </section>

            {/* 3. Endocrine Surgery */}
            <section id="endocrine" className="scroll-mt-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">3️⃣ Endocrine Surgery (Neck & Abdomen)</h2>

              {[
                {
                  title: "Thyroid Surgery (Thyroidectomy)",
                  details: "1h30–2h | 1–2 nights"
                },
                {
                  title: "Parathyroid Surgery",
                  details: "1–1.5h | 1–2 nights"
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border hover:border-emerald-400 transition shadow-sm mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.details}</p>
                </div>
              ))}
            </section>

            {/* 4. Proctology */}
            <section id="proctology" className="scroll-mt-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">4️⃣ Proctological Surgery</h2>

              {[
                { title: "Hemorrhoid Surgery (Laser/Anopexy)", details: "45 min | 1 night | Stay 7–10 days" },
                { title: "Anal Fissure Treatment", details: "30 min | Outpatient | Stay 7 days" },
                { title: "Anal Fistula Surgery", details: "45–60 min | 1 night | Stay 10 days" },
                { title: "Pilonidal Cyst Treatment", details: "1h | 1 night | Stay 10–14 days" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border hover:border-emerald-400 transition shadow-sm mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.details}</p>
                </div>
              ))}
            </section>

            {/* 5. Oncological Surgery */}
            <section id="oncology" className="scroll-mt-20 pb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">5️⃣ Oncological Surgery (Cancer)</h2>

              {[
                { title: "Colon & Rectal Cancer Surgery", details: "5–10 nights | Total Stay 15–21 days" },
                { title: "Stomach Cancer Surgery", details: "7–12 nights | Total Stay 21 days min" },
                { title: "Pancreatic Cancer Surgery", details: "15–21 nights | Total Stay 30 days min" },
                { title: "Liver Cancer Surgery", details: "7–14 nights | Total Stay 21–30 days" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border hover:border-emerald-400 transition shadow-sm mb-4">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.details}</p>
                </div>
              ))}
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
