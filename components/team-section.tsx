"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  education: string[];
  biography: string;
  languages: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Prof. Mondher KOOLI",
    title: "Orthopedic & Traumatology Surgeon – Hip & Knee Specialist",
    image: "/prof-mondher-kooli.jpg",
    education: [
      "35 years of clinical & surgical experience.",
      "Doctor of Medicine – Tunis Faculty of Medicine.",
      "Fellowships in joint & spine surgery.",
      "Former Head of Department – Charles Nicolle Hospital.",
    ],
    biography:
      "Professor Kooli is a leading figure in hip and knee replacement surgery. He is known for precision, minimally invasive approaches, and the treatment of complex orthopedic cases.",
    languages: "Arabic, French, English",
  },
  {
    id: 2,
    name: "Prof. Sofien KALLEL",
    title: "Orthopedic Surgeon – Sports Surgery & Arthroscopy Expert",
    image: "/prof-sofien-kallel.jpg",
    education: [
      "34 years of experience.",
      "Diploma in Sports Surgery – University Paris VI.",
      "Diploma in Microsurgery – University Paris XIII.",
      "Training: Mayo Clinic (USA), UBC Canada, France, UK.",
    ],
    biography:
      "A high-level sports surgeon specialized in arthroscopy, ligament reconstruction, and shoulder–knee injuries. Trusted by professional athletes.",
    languages: "Arabic, French, English",
  },
  {
    id: 3,
    name: "Dr. Khalil SEBOUII",
    title: "Orthopedic Surgeon – Knee & Ligament Reconstruction Specialist",
    image: "/dr-khalil-sebouii.jpg",
    education: [
      "25 years of experience.",
      "Former Attaché of Paris Hospitals.",
      "Expert in ACL reconstruction and sports injuries.",
    ],
    biography:
      "Dr. Sebouii is a reference in ligament reconstruction, arthroscopy, and sports traumatology. His work is highly appreciated for precision and fast recovery protocols.",
    languages: "Arabic, French, English",
  },
  {
    id: 4,
    name: "Prof. Sarrah HOUMILI",
    title: "Plastic, Reconstructive & Aesthetic Surgeon",
    image: "/prof-sarrah-houimli.jpg",
    education: [
      "Head of Plastic Surgery Department (CTGB).",
      "Professor at Tunis Faculty of Medicine.",
      "35+ years of experience in reconstructive & aesthetic surgery.",
    ],
    biography:
      "Professor Houmili is a leader in aesthetic and reconstructive surgery, known for refined results in facial, body contouring, and reconstructive procedures.",
    languages: "Arabic, French, English",
  },
  {
    id: 5,
    name: "Prof. Selim JARBOUI",
    title: "General, Digestive & Bariatric Surgeon",
    image: "/prof-selim-jarbouii.jpg",
    education: [
      "35 years of experience.",
      "Expert in digestive, oncological & bariatric surgery.",
      "Specialist in advanced laparoscopic techniques.",
    ],
    biography:
      "Professor Jarbouii performs advanced digestive and bariatric procedures such as Sleeve, Bypass, hernia repair, and anti-reflux surgery with highest safety standards.",
    languages: "Arabic, French, English",
  },
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4 relative inline-block">
            Our Partner Surgeons: The Medical Elite
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#3C8DBC] rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            The highest level of surgical excellence, audited and selected by Carthage Surgical Partners.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h5 className="font-bold text-[#0A3D62] mb-1">{member.name}</h5>
                <p className="text-[#3C8DBC] text-sm font-semibold">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#0A3D62] to-[#3C8DBC] p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                {selectedMember.name} — {selectedMember.title}
              </h3>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-white/80 hover:text-white transition"
              >
                <X size={26} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>

                <div className="md:col-span-2">
                  <h6 className="font-bold text-[#0A3D62] mb-3">Education & Experience</h6>
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                    {selectedMember.education.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h6 className="font-bold text-[#0A3D62] mb-3">Biography</h6>
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedMember.biography}</p>

                  <p className="text-gray-800">
                    <strong>Languages:</strong> {selectedMember.languages}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
