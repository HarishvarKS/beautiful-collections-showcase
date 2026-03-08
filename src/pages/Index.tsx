import { motion } from "framer-motion";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Studio Photography",
    description: "Professional portraits, headshots, and creative studio sessions tailored to your vision.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Baby Shoots",
    description: "Capturing the magic of newborns, milestones, and growing families with gentle artistry.",
    imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Commercial Photography",
    description: "Product photography, branding, and lifestyle imagery crafted for modern businesses.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Destination / Outdoor",
    description: "Epic outdoor weddings, engagements, and travel photography across the globe.",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero / Section Title */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Our Collections
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Beyond the Wedding Day
          </h1>
          <div className="w-16 h-px bg-border mx-auto mt-8" />
          <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            From intimate studio portraits to breathtaking outdoor adventures — discover every way we tell your story.
          </p>
        </motion.div>
      </section>

      {/* Service Cards Grid */}
      <section id="services" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
