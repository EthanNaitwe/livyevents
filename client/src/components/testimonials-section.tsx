import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section id="testimonials" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The trust our clients place in us is the foundation of everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 animate-pulse">
                <div className="h-4 bg-white/20 rounded mb-4"></div>
                <div className="h-20 bg-white/20 rounded mb-6"></div>
                <div className="h-12 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            The trust our clients place in us is the foundation of everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm border-0 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 text-white"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-secondary text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-75">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
