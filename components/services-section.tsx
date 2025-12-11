"use client";

export function ServicesSection() {
  const services = [
    {
      title: "🦴 Orthopedic & Traumatological Surgery",
      description:
        "Expert surgeons specializing in spine, upper limb, hip & knee, foot & ankle, sports trauma, deformity correction, and minimally invasive techniques.",
      image: "/orthopedie .jpg",
      link: "/services/orthopedic",
    },
    {
      title: "✨ Aesthetic & Plastic Surgery",
      description:
        "Harmony, natural results, and artistic precision. Our surgeons deliver world-class facial, body, reconstructive and aesthetic transformations.",
      image: "/chirurgie-esthetique.jpg",
      link: "/services/aesthetic",
    },
    {
      title: "🩺 GENERAL & BARIATRIC SURGERY",
      description:
        "Advanced abdominal, digestive, endocrine and bariatric procedures performed using cutting-edge minimally invasive techniques.",
      image: "/Bariatrique.png",
      link: "/services/bariatric",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f1f8ff]">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl font-bold text-[#0A3D62] mb-4 relative inline-block">
            Our Specialized Medical Services
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3C8DBC] rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Precision. Safety. Excellence.  
            Our medical hubs are powered by elite surgeons and advanced technologies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden h-56 rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A3D62] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-4 text-[#3C8DBC] font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
