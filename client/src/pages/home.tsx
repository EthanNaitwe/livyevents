import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BookingModal from "@/components/booking-modal";
import GalleryModal from "@/components/gallery-modal";
import { useState } from "react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<any>(null);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  const openGalleryModal = (item: any) => {
    setSelectedGallery(item);
    setIsGalleryModalOpen(true);
  };
  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    setSelectedGallery(null);
  };

  return (
    <div className="min-h-screen">
      <Navigation onBookingClick={openBookingModal} />
      <HeroSection onBookingClick={openBookingModal} />
      <ServicesSection />
      <PortfolioSection onGalleryClick={openGalleryModal} />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal} 
      />
      
      <GalleryModal 
        isOpen={isGalleryModalOpen} 
        onClose={closeGalleryModal}
        portfolioItem={selectedGallery}
      />
    </div>
  );
}
