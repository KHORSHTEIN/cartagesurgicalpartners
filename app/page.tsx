import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { FeedbackSection } from "@/components/feedback-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import StepsPage from "@/components/Steps";
import PartnersPage from "./partners/hotels";
import ClinicsPage from "./partners/clinics";
import AgenciesPage from "./partners/agencies";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StepsPage />
      <TeamSection/>
      <PartnersPage/>
      <ClinicsPage/>
      <AgenciesPage/>
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
