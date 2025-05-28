import { Lightbulb, Palette, Settings, Star } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "We listen to your vision and understand your unique requirements and preferences",
    icon: Lightbulb,
    bgColor: "bg-secondary"
  },
  {
    number: 2,
    title: "Design",
    description: "Our creative team develops a customized concept that brings your vision to life",
    icon: Palette,
    bgColor: "bg-accent"
  },
  {
    number: 3,
    title: "Coordination",
    description: "We manage every vendor, timeline, and detail to ensure flawless execution",
    icon: Settings,
    bgColor: "bg-primary"
  },
  {
    number: 4,
    title: "Celebration",
    description: "Your event unfolds seamlessly while we handle every detail behind the scenes",
    icon: Star,
    bgColor: "bg-secondary"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Our Planning Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless journey from vision to reality, ensuring every detail exceeds expectations
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="text-center group">
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
