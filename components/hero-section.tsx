"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const slides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1580281657527-47d5a1c061c3?auto=format&fit=crop&w=1920&q=80",
      title: "Carthage Surgical Partners",
      subtitle: "Care Without the Uncertainty",
      content: `
        We have fundamentally redefined the standards of international surgical travel.
        A dedicated Carthage Reference Physician accompanies you from consultation 
        to full recovery. You are not dealing with a broker — but a medical team 
        committed to your safety and outcome.
      `,
      align: "left",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80",
      title: "The Trilogy of Trust",
      subtitle: "Our Non-Negotiable Medical Pillars",
      content: `
        I. Elite Surgeon Network (audited by our Medical Committee)
        II. Certified ISO9001 European-standard clinics
        III. A Reference Physician supervising your entire journey
      `,
      align: "right",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664304348972-8deac29e27c8?auto=format&fit=crop&w=1920&q=80",
      title: "The Carthage Experience",
      subtitle: "A Medical Team — Not an Agency",
      content: `
        • Active medical monitoring  
        • Medically supervised convalescence  
        • Transparent quotes  
        • Insurance-ready medical documentation
      `,
      align: "left",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1667516609710-d430c1fed703?auto=format&fit=crop&w=1920&q=80",
      title: "Our Manifesto",
      subtitle: "Excellence Is a Culture",
      content: `
        Follow-up *is* care. Your Reference Physician becomes your independent 
        medical ally, supervising recovery step by step.  
        Choosing Carthage means choosing serenity.
      `,
      align: "right",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(163,216,244,${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: `
                  linear-gradient(rgba(5,20,35,0.55), rgba(5,20,35,0.75)),
                  url('${slide.imageUrl}') center/cover no-repeat
                `,
              }}
            />
          ))}
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-[1] pointer-events-none"
        />

        <div
          className={`relative z-[3] w-full px-10 max-w-6xl mx-auto flex flex-col justify-center ${
            slides[current].align === "left"
              ? "items-start text-left"
              : "items-end text-right"
          }`}
        >
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {slides[current].title}
            </h1>

            <h2 className="text-2xl md:text-3xl text-[#A3D8F4] font-semibold mt-3">
              {slides[current].subtitle}
            </h2>

            <p className="text-white/90 text-lg mt-5 whitespace-pre-line leading-relaxed">
              {slides[current].content}
            </p>

            <Button className="mt-8 bg-[#A3D8F4] text-[#0A3D62] px-8 py-5 rounded-full text-lg font-semibold shadow-xl hover:scale-[1.05] transition">
              Start Your Medical Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: BIGGER LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="Carthage Surgical Partners Logo"
              className="w-72 md:w-96 lg:w-[450px] drop-shadow-2xl transition-all duration-500"
            />
          </div>

          {/* RIGHT: TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] leading-tight">
              Welcome to Carthage Surgical Partners
            </h2>

            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              We are more than a medical facilitator — we are a dedicated surgical team.
              Every patient benefits from the supervision of a <strong>Reference Physician</strong>,
              ensuring medical accuracy, safety, and total transparency.
            </p>

            <Button className="mt-8 bg-[#0A3D62] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#08304d] transition">
              Discover Our Medical Standards
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}
