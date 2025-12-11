import PartnerCard from "@/components/PartnerCard";

// IMPORT LOCAL IMAGES
import jasmins from "@/images/hotels/ban-polyjasmin.jpg";
import carthagene from "@/images/hotels/cartagene.jpg";
import lac from "@/images/hotels/lac.png";

export default function ClinicsPage() {
  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#0A3D62] mb-10">🏥 Partner Clinics</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <PartnerCard
          title="Polyclinique Les Jasmins"
          desc="A leading multidisciplinary medical-surgical center with advanced technical platforms and highly specialized teams."
          link="https://polycliniquelesjasmins.com"
          image={jasmins.src}
        />

        <PartnerCard
          title="Centre Hospitalier International Carthagène"
          desc="A modern international hospital offering cutting-edge technology and exceptional patient comfort."
          link="https://carthagene.tn"
          image={carthagene.src}
        />

        <PartnerCard
          title="Clinique du Lac"
          desc="A specialized clinic known for high-quality surgical procedures in a safe and modern environment."
          link="https://ophtalmodulac.com"
          image={lac.src}
        />

      </div>
    </section>
  );
}
