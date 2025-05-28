import { Card } from "@/components/ui/card";
import { Building, Heart, GlassWater, Users, ArrowRight } from "lucide-react";

const services = [
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional conferences, product launches, and corporate celebrations that make lasting impressions",
    features: [
      "Conference Management",
      "Product Launch Events", 
      "Awards Ceremonies",
      "Team Building Events"
    ],
    icon: Building,
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    bgColor: "bg-primary/20 group-hover:bg-primary/40"
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Romantic celebrations designed to tell your unique love story with elegance and sophistication",
    features: [
      "Full Wedding Planning",
      "Venue Selection",
      "Floral Design",
      "Vendor Coordination"
    ],
    icon: Heart,
    imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    bgColor: "bg-accent/20 group-hover:bg-accent/40"
  },
  {
    id: "parties",
    title: "Private Parties",
    description: "Exclusive celebrations for birthdays, anniversaries, and milestone moments that deserve special attention",
    features: [
      "Birthday Celebrations",
      "Anniversary Parties",
      "Retirement Events",
      "Holiday Gatherings"
    ],
    icon: GlassWater,
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    bgColor: "bg-secondary/20 group-hover:bg-secondary/40"
  },
  {
    id: "conferences",
    title: "Conferences",
    description: "Professional gatherings that facilitate meaningful connections and deliver impactful experiences",
    features: [
      "Industry Conferences",
      "Seminars & Workshops",
      "Networking Events",
      "Trade Shows"
    ],
    icon: Users,
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    bgColor: "bg-primary/20 group-hover:bg-primary/40"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Our Signature Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we craft extraordinary experiences tailored to your vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0"
              >
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                >
                  <div className={`h-full ${service.bgColor} transition-all duration-300 flex items-end`}>
                    <div className="p-6 text-white">
                      <IconComponent className="w-8 h-8 mb-4" />
                      <h3 className="text-2xl font-playfair font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <button className="text-secondary font-semibold hover:text-primary transition-colors flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
