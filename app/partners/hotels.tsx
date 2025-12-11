import PartnerCard from "@/components/PartnerCard";

// LOCAL IMAGES
import elMouradi from "@/images/hotels/el-mouradi-gammarth.jpg";
import residenceTunis from "@/images/hotels/the-risedence.jpg";
import royalAsbu from "@/images/hotels/royal.jpg";

export default function HotelsPage() {
  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#0A3D62] mb-10">🏨 Luxury Hotels</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <PartnerCard
          title="El Mouradi Gammarth (5★)"
          desc="Located on the Carthage coast, offering a relaxing environment close to major clinics."
          link="https://elmouradi.com"
          image={elMouradi.src}
        />

        <PartnerCard
          title="The Residence Tunis (5★)"
          desc="Premium partner hotel known for its exceptional service and peaceful atmosphere."
          link="https://cenizaro.com/theresidence/tunis"
          image={residenceTunis.src}
        />

        <PartnerCard
          title="Royal ASBU (5★)"
          desc="Modern accommodation in the Urban Center North, ensuring comfort and a secure environment."
          link="https://royalasbu.com"
          image={royalAsbu.src}
        />

      </div>
    </section>
  );
}
