import { Link } from "react-router-dom";
import { Bug } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";

const termiteServices = [
  { title: "Pre Construction Treatment", desc: "Soil treatment before construction to create an anti-termite barrier, protecting your building from the foundation up." },
  { title: "Post Construction Treatment", desc: "Drilling and injection treatment for existing buildings to eliminate active termite colonies and prevent future infestations." },
  { title: "Anti-Termite Piping System", desc: "Advanced reticulation piping system installed within the building for periodic re-treatment without drilling." },
];

const otherServices = [
  { title: "Cockroach Control", desc: "Advanced gel baiting and spray treatments to eliminate cockroach infestations from kitchens, bathrooms, and commercial spaces." },
  { title: "Rodent Control", desc: "Professional rodent proofing, trapping, and baiting solutions to protect your property from rats and mice damage." },
  { title: "Bed Bugs Control", desc: "Comprehensive heat and chemical treatment to completely eliminate bed bug infestations from mattresses and furniture." },
  { title: "Lizard Control", desc: "Safe and effective lizard repellent treatments to keep your home and office lizard-free." },
  { title: "Mosquito Control", desc: "Fogging, larvicidal, and residual spray treatments to reduce mosquito populations and prevent diseases." },
  { title: "Spider Control", desc: "Web removal and targeted treatments to eliminate spider infestations in residential and commercial properties." },
  { title: "Ant Control", desc: "Baiting and barrier treatments to eliminate ant colonies and prevent re-infestation in your premises." },
  { title: "Other Insects", desc: "Customized pest management solutions for flies, silverfish, beetles, and other common household insects." },
];

const ServiceCard = ({ title, desc, index }: { title: string; desc: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card-hover p-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${index * 80}ms` }}>
      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
        <Bug className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
      <Link to="/contact" className="text-sm font-semibold text-primary hover:underline">Get Quote →</Link>
    </div>
  );
};

const Services = () => (
  <>
    <section className="pt-32 pb-16 gradient-dark">
      <div className="container-main px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">Our Services</h1>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto">Comprehensive pest control solutions for residential and commercial properties</p>
      </div>
    </section>

    {/* Termite */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading subtitle="Specialized" title="Termite Control Services" description="Industry-leading termite management with advanced treatment methods" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {termiteServices.map((s, i) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Other Services */}
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <SectionHeading subtitle="All Services" title="Complete Pest Solutions" description="Professional treatments for every type of pest problem" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((s, i) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-primary">
      <div className="container-main text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need Pest Control?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us today for a free inspection and customized treatment plan.</p>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold bg-secondary text-secondary-foreground hover:scale-105 transition-transform">
          Get Free Quote
        </Link>
      </div>
    </section>
  </>
);

export default Services;
