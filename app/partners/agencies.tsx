import PartnerCard from "@/components/PartnerCard";

// IMPORT LOCAL IMAGES
import tunisieBooking from "@/images/hotels/tunisiebooking.png";
import tahaVoyages from "@/images/hotels/taha.png";

export default function AgenciesPage() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h1 className="text-4xl font-bold text-[#0A3D62] mb-12">
          ✈️ Travel Agencies
        </h1>

        {/* CENTERED GRID + SMALLER CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center">

          <PartnerCard
            title="Tunisie Booking"
            desc="A leading online travel agency offering secure and optimized hotel and flight reservations for seamless logistics."
            link="https://tunisiebooking.com"
            image={tunisieBooking.src}
          />

          <PartnerCard
            title="Taha Voyage"
            desc="Reliable partner for complete travel logistics: flights, airport transfers, and personalized arrangements."
            link="https://tahavoyages.com"
            image={tahaVoyages.src}
          />

        </div>
      </div>
    </section>
  );
}
