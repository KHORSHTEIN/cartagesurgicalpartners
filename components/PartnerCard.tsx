"use client";

interface PartnerCardProps {
  title: string;
  desc: string;
  link: string;
  image: string;
}

export default function PartnerCard({ title, desc, link, image }: PartnerCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-2xl transition duration-300">
      
      {/* IMAGE */}
      <div className="w-full h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A3D62] mb-3">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>

        <a
          href={link}
          target="_blank"
          className="inline-block mt-2 text-[#3C8DBC] font-semibold hover:underline"
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
}
