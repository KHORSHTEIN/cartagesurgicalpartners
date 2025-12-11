import { Globe, Award, Users, Heart } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "International Patients",
    description: "More than 2,500 patients from 40+ countries trust our medical expertise every year.",
  },
  {
    icon: Award,
    title: "Accredited Clinics",
    description: "All procedures take place in ISO-certified medical facilities meeting European standards.",
  },
  {
    icon: Users,
    title: "Expert Surgeons",
    description: "Elite surgeons rigorously audited and selected by our internal medical committee.",
  },
  {
    icon: Heart,
    title: "Medical Supervision",
    description: "A dedicated Carthage Medical Supervisor ensures your safety before, during, and after surgery.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#e9f5ff]">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl font-bold text-[#0A3D62] mb-4 relative inline-block">
            About Carthage Surgical Partners
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3C8DBC] rounded-full" />
          </h2>

          <p className="text-lg text-gray-600 mt-6">
            Where Medical Excellence Meets Unmatched Patient Protection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative group">
            <div
              className="overflow-hidden rounded-2xl shadow-xl transition-transform group-hover:scale-[1.02]"
              style={{ transform: "perspective(1000px) rotateY(-5deg)" }}
            >
              <img
  src="/PAGE2.png"
  alt="Medical Team"
  className="w-full object-cover group-hover:scale-105 transition-transform"
/>

            </div>

            <div className="absolute -bottom-4 -right-4 bg-[#0A3D62] text-white px-6 py-3 rounded-xl shadow-lg rotate-3">
              <p className="font-bold text-xl">60–70%</p>
              <p className="text-sm text-[#A3D8F4]">Cost Savings</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0A3D62] mb-4">
              A New Standard in International Surgical Care
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Carthage Surgical Partners provides a unique model of medical travel: patients benefit from elite surgeons, certified clinics,
              and — most importantly — continuous supervision from our in-house medical team.  
              Your personal <strong>Carthage Medical Supervisor</strong> accompanies you from your first consultation to your safe return home.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((ft, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3C8DBC] to-[#A3D8F4] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <ft.icon className="w-7 h-7 text-white" />
                  </div>

                  <h5 className="font-bold text-[#0A3D62] mb-2">{ft.title}</h5>
                  <p className="text-sm text-gray-600">{ft.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
