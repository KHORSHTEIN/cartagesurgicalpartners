import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-[#212529] text-gray-300 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="mb-4">
              <svg width="50" height="50" viewBox="0 0 200 200" className="brightness-0 invert">
                <g transform="translate(100,100)">
                  <circle cx="0" cy="0" r="80" fill="none" stroke="#fff" strokeWidth="8" />
                  <rect x="-25" y="-40" width="18" height="80" rx="2" fill="#fff" />
                  <rect x="7" y="-40" width="18" height="80" rx="2" fill="#fff" />
                  <circle cx="0" cy="-20" r="4" fill="#fff" />
                </g>
              </svg>
            </div>
            <p className="leading-relaxed">
              Your trusted partner in medical tourism. We bring world-class surgical care to international patients in
              the heart of the Mediterranean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#A3D8F4] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-4">Follow Us</h5>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#A3D8F4] hover:text-[#0A3D62] transition-all hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/20 mb-6" />

        <div className="text-center text-sm">
          <p>&copy; 2025 Carthage Surgical Partners. All rights reserved. | JCI Accredited</p>
        </div>
      </div>
    </footer>
  )
}
