import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')"
        }}
      >
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Creating Unforgettable Moments
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Luxury event planning and management for life's most important celebrations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToServices}
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/80 font-medium text-lg px-8 py-4"
          >
            Explore Our Services
          </Button>
          <Button 
            onClick={scrollToPortfolio}
            size="lg"
            className="bg-white/80 text-white hover:bg-white/90 text-primary/90 font-medium text-lg px-8 py-4"
          >
            View Portfolio
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
