"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    procedure: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your inquiry! Our team will contact you within 24 hours.")
    setFormData({ name: "", email: "", phone: "", procedure: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-[#0A3D62] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Get Your Free Consultation
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#A3D8F4] rounded-full" />
          </h2>
          <p className="text-lg text-white/80 mt-6">Start your journey to better health today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/15 border-white/30 text-white placeholder:text-white/70 rounded-xl h-12 focus:border-[#A3D8F4] focus:ring-[#A3D8F4]/30"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/15 border-white/30 text-white placeholder:text-white/70 rounded-xl h-12 focus:border-[#A3D8F4] focus:ring-[#A3D8F4]/30"
            />
            <Input
              type="tel"
              placeholder="Phone (with country code)"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/15 border-white/30 text-white placeholder:text-white/70 rounded-xl h-12 focus:border-[#A3D8F4] focus:ring-[#A3D8F4]/30"
            />
            <select
              value={formData.procedure}
              onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
              className="w-full bg-white/15 border border-white/30 text-white rounded-xl h-12 px-3 focus:border-[#A3D8F4] focus:ring-[#A3D8F4]/30 focus:outline-none"
            >
              <option value="" className="text-gray-800">
                Select Procedure
              </option>
              <option value="cardiac" className="text-gray-800">
                Heart Surgery
              </option>
              <option value="orthopedic" className="text-gray-800">
                Joint Replacement
              </option>
              <option value="cosmetic" className="text-gray-800">
                Cosmetic Surgery
              </option>
              <option value="neuro" className="text-gray-800">
                Spine Surgery
              </option>
              <option value="bariatric" className="text-gray-800">
                Bariatric Surgery
              </option>
              <option value="eye" className="text-gray-800">
                Eye Surgery
              </option>
            </select>
            <Textarea
              placeholder="Tell us about your condition"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="bg-white/15 border-white/30 text-white placeholder:text-white/70 rounded-xl focus:border-[#A3D8F4] focus:ring-[#A3D8F4]/30"
            />
            <Button
              type="submit"
              className="w-full bg-[#A3D8F4] text-[#0A3D62] hover:bg-[#A3D8F4]/90 font-semibold py-6 rounded-xl shadow-[0_8px_15px_rgba(163,216,244,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(163,216,244,0.4)]"
            >
              Send Request
            </Button>
          </form>

          {/* Contact Info */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#A3D8F4] flex-shrink-0 mt-1" />
                <p>Avenue de la Republique, Carthage, Tunis 2016, Tunisia</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#A3D8F4] flex-shrink-0" />
                <p>+216 94 440 360</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#A3D8F4] flex-shrink-0" />
                <p>info@carthagesurgical.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="w-6 h-6 text-[#A3D8F4] flex-shrink-0" />
                <p>+216 94 440 360</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <h5 className="text-lg font-bold mb-3">24/7 International Patient Support</h5>
              <p className="text-white/80">We speak: English - Francais - العربية - Deutsch - Italiano - Espanol</p>
            </div>

            {/* 3D Map placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden h-48 bg-gradient-to-br from-[#3C8DBC]/30 to-[#A3D8F4]/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-[#A3D8F4]" />
                <p className="text-sm text-white/70">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
