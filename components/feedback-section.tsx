"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Mitchell",
    location: "London, UK",
    image: "/professional-british-man-portrait-headshot.jpg",
    rating: 5,
    text: "Saved 68% on my heart bypass and received better care than in the UK. The team arranged everything - visa, hotel, translator. Truly life-changing.",
  },
  {
    id: 2,
    name: "Aisha Al-Mansour",
    location: "Riyadh, Saudi Arabia",
    image: "/professional-arab-woman-portrait-headshot-hijab.jpg",
    rating: 5,
    text: "My knee replacement was flawless. From airport pickup to recovery villa, everything was perfect. Dr. Mahmoud is a genius!",
  },
  {
    id: 3,
    name: "Pierre Dubois",
    location: "Paris, France",
    image: "/professional-french-man-portrait-headshot.jpg",
    rating: 5,
    text: "Came for cosmetic surgery. Results exceeded expectations. Professional, discreet, and half the price of Paris clinics.",
  },
  {
    id: 4,
    name: "Maria Santos",
    location: "Lisbon, Portugal",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The neurosurgery team saved my life. Dr. Haddad's expertise and the entire staff's compassion made my recovery smooth.",
  },
  {
    id: 5,
    name: "Hans Mueller",
    location: "Berlin, Germany",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Outstanding bariatric surgery results. Lost 45kg and gained a new life. The follow-up care has been exceptional.",
  },
]

export function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - slidesPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-[#e6f2ff] to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4 relative inline-block">
            Patient Success Stories
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3C8DBC] rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 mt-6">Hear From Our Global Family</p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 px-3" style={{ width: `${100 / slidesPerView}%` }}>
                  <div
                    className="bg-white p-6 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.1)] h-full transition-all duration-400 hover:-translate-y-1"
                    style={{
                      transform: "perspective(1000px) rotateX(2deg)",
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-[#A3D8F4] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                      />
                      <div>
                        <h6 className="font-bold text-[#0A3D62]">{testimonial.name}</h6>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{`"${testimonial.text}"`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#0A3D62] w-8" : "bg-[#A3D8F4]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
