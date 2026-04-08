import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Bug, Leaf, Clock, Award, Users, Sparkles, Search, FileText, Wrench, PhoneCall, CheckCircle, Star, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { img: hero1, title: "No.1 Pest Control Services in Vijayawada", sub: "Safe, Effective & Long-Lasting Pest Solutions Since 2008" },
  { img: hero2, title: "Protect Your Home from Pests", sub: "Government-approved, eco-friendly treatments for complete peace of mind" },
  { img: hero3, title: "Commercial Pest Management", sub: "Trusted by businesses across Andhra Pradesh for 18+ years" },
];

const services = [
  { icon: Bug, title: "Termite Control", desc: "Pre & post construction anti-termite treatments" },
  { icon: Bug, title: "Cockroach Control", desc: "Eliminate cockroaches with safe gel treatments" },
  { icon: Bug, title: "Bed Bugs Control", desc: "Advanced heat & chemical treatments" },
  { icon: Bug, title: "Rodent Control", desc: "Professional rodent proofing & baiting" },
  { icon: Bug, title: "Mosquito Control", desc: "Fogging & larvicidal treatments" },
  { icon: Bug, title: "General Pest Control", desc: "Complete pest management solutions" },
];

const whyUs = [
  { icon: Users, title: "Expert Technicians", desc: "Trained & certified professionals" },
  { icon: Shield, title: "Safe & Approved", desc: "Government-approved chemicals" },
  { icon: Leaf, title: "Eco-Friendly", desc: "Safe for families, children & pets" },
  { icon: Award, title: "Service Warranty", desc: "Guaranteed results with warranty" },
  { icon: Clock, title: "24/7 Response", desc: "Quick response anytime" },
  { icon: Sparkles, title: "18+ Years Experience", desc: "Trusted since 2008" },
];

const process = [
  { icon: Search, step: "01", title: "Inspection", desc: "Thorough property assessment" },
  { icon: FileText, step: "02", title: "Treatment Plan", desc: "Customized solution design" },
  { icon: Wrench, step: "03", title: "Execution", desc: "Professional treatment application" },
  { icon: PhoneCall, step: "04", title: "Follow-up", desc: "Regular monitoring & support" },
];

const testimonials = [
  { name: "Rajesh Kumar", text: "Excellent termite treatment! The team was professional and the results were amazing. Highly recommended!", rating: 5 },
  { name: "Priya Reddy", text: "We had a severe bed bug problem. VPS solved it completely in just one visit. Very satisfied with their service.", rating: 5 },
  { name: "Suresh Babu", text: "Using their AMC service for our office. Pest-free environment for over 2 years now. Great value for money!", rating: 5 },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
        </div>
      ))}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
              Trusted Since 2008
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              {slides[current].sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary gap-2">
                <Search className="w-5 h-5" /> Get Free Inspection
              </Link>
              <a href="https://wa.me/919985373922?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Vijayawada." target="_blank" rel="noopener noreferrer" className="btn-whatsapp gap-2">
                <MessageCircle className="w-5 h-5" /> Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-secondary-foreground/40"}`} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, delay }: { icon: typeof Bug; title: string; desc: string; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`glass-card-hover p-6 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${delay}ms` }}>
      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
      <Link to="/services" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">Learn More →</Link>
    </div>
  );
};

const Index = () => {
  const ctaAnim = useScrollAnimation();
  const testimonialAnim = useScrollAnimation();

  return (
    <>
      <HeroSlider />

      {/* Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <SectionHeading subtitle="Our Services" title="Complete Pest Control Solutions" description="Professional pest management for homes and businesses across Vijayawada" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 100} />)}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading subtitle="Why Choose Us" title="Why We Are No.1" description="Trusted by thousands of customers across Andhra Pradesh" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div key={item.title} ref={ref} className={`flex items-start gap-4 p-6 glass-card-hover ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-dark">
        <div className="container-main">
          <SectionHeading subtitle="Our Process" title="How We Work" description="A systematic approach to pest-free living" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div key={p.step} ref={ref} className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="text-5xl font-bold text-primary/20 mb-2">{p.step}</div>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <p.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-secondary-foreground/70">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={18} suffix="+" label="Years Experience" />
            <AnimatedCounter end={1000} suffix="+" label="Happy Customers" />
            <AnimatedCounter end={24} suffix="/7" label="Support Available" />
            <AnimatedCounter end={50} suffix="+" label="Expert Technicians" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading subtitle="Testimonials" title="What Our Customers Say" />
          <div ref={testimonialAnim.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${testimonialAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card-hover p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="font-semibold text-foreground">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary">
        <div ref={ctaAnim.ref} className={`container-main text-center ${ctaAnim.isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Book Your Free Pest Inspection Today</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get expert pest control solutions tailored to your needs. Call us now or schedule a free inspection.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold bg-secondary text-secondary-foreground transition-all duration-300 hover:scale-105">
              Schedule Inspection
            </Link>
            <a href="tel:9985373922" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold border-2 border-primary-foreground text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary gap-2">
              <PhoneCall className="w-5 h-5" /> Call 9985373922
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/30">
        <div className="container-main flex flex-wrap justify-center items-center gap-8">
          {["Registered Company", "ISO 9001:2015 Certified", "Eco-Friendly Products", "18+ Years Trusted"].map((b) => (
            <div key={b} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
