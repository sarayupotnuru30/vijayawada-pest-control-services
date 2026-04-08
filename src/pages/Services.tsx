import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import servicePreConstruction from "@/assets/service-pre-construction.jpg";
import servicePostConstruction from "@/assets/service-post-construction.jpg";
import servicePiping from "@/assets/service-piping.jpg";
import serviceCockroach from "@/assets/service-cockroach.jpg";
import serviceRodent from "@/assets/service-rodent.jpg";
import serviceBedbug from "@/assets/service-bedbug.jpg";
import serviceLizard from "@/assets/service-lizard.jpg";
import serviceMosquito from "@/assets/service-mosquito.jpg";
import serviceSpider from "@/assets/service-spider.jpg";
import serviceAnt from "@/assets/service-ant.jpg";
import serviceGeneral from "@/assets/service-general.jpg";

const termiteServices = [
  { img: servicePreConstruction, title: "Pre Construction Treatment", desc: "Soil treatment before construction to create an anti-termite barrier, protecting your building from the foundation up." },
  { img: servicePostConstruction, title: "Post Construction Treatment", desc: "Drilling and injection treatment for existing buildings to eliminate active termite colonies and prevent future infestations." },
  { img: servicePiping, title: "Anti-Termite Piping System", desc: "Advanced reticulation piping system installed within the building for periodic re-treatment without drilling." },
];

const otherServices = [
  { img: serviceCockroach, title: "Cockroach Control", desc: "Advanced gel baiting and spray treatments to eliminate cockroach infestations from kitchens, bathrooms, and commercial spaces." },
  { img: serviceRodent, title: "Rodent Control", desc: "Professional rodent proofing, trapping, and baiting solutions to protect your property from rats and mice damage." },
  { img: serviceBedbug, title: "Bed Bugs Control", desc: "Comprehensive heat and chemical treatment to completely eliminate bed bug infestations from mattresses and furniture." },
  { img: serviceLizard, title: "Lizard Control", desc: "Safe and effective lizard repellent treatments to keep your home and office lizard-free." },
  { img: serviceMosquito, title: "Mosquito Control", desc: "Fogging, larvicidal, and residual spray treatments to reduce mosquito populations and prevent diseases." },
  { img: serviceSpider, title: "Spider Control", desc: "Web removal and targeted treatments to eliminate spider infestations in residential and commercial properties." },
  { img: serviceAnt, title: "Ant Control", desc: "Baiting and barrier treatments to eliminate ant colonies and prevent re-infestation in your premises." },
  { img: serviceGeneral, title: "Other Insects", desc: "Customized pest management solutions for flies, silverfish, beetles, and other common household insects." },
];

const ServiceCard = ({ img, title, desc, index }: { img: string; title: string; desc: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`group glass-card-hover overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative h-52 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={640} height={512} />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
        <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
          Get Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => (
  <>
    <PageHeader title="Our Services" subtitle="What We Offer" />

    {/* Termite */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading subtitle="Specialized" title="Termite Control Services" description="Industry-leading termite management with advanced treatment methods" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {termiteServices.map((s, i) => (
            <ServiceCard key={s.title} img={s.img} title={s.title} desc={s.desc} index={i} />
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
            <ServiceCard key={s.title} img={s.img} title={s.title} desc={s.desc} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="container-main text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need Pest Control?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Contact us today for a free inspection and customized treatment plan.</p>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold bg-secondary text-secondary-foreground hover:scale-105 transition-all duration-300 gap-2 hover:shadow-xl">
          Get Free Quote <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </>
);

export default Services;
