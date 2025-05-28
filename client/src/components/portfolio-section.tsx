import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import type { PortfolioItem } from "@shared/schema";

interface PortfolioSectionProps {
  onGalleryClick: (item: PortfolioItem) => void;
}

export default function PortfolioSection({ onGalleryClick }: PortfolioSectionProps) {
  const { data: portfolioItems, isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  if (isLoading) {
    return (
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Recent Celebrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the extraordinary events we've crafted for our discerning clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-80 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Recent Celebrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into the extraordinary events we've crafted for our discerning clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems?.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => onGalleryClick(item)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <SearchIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">View Gallery</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-playfair font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary text-white hover:bg-primary/90 font-medium text-lg px-8 py-4">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
