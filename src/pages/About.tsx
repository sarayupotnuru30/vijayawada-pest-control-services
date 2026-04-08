import { CheckCircle, Shield, Award, Users, Leaf, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: Shield, title: "Safe & Approved Treatments", desc: "Government-approved chemicals safe for families and pets" },
  { icon: Leaf, title: "Eco-Friendly Approach", desc: "Environmentally responsible pest management" },
  { icon: Users, title: "Expert Technicians", desc: "Trained, certified, and experienced professionals" },
  { icon: Award, title: "Service Warranty", desc: "Guaranteed results with comprehensive warranty" },
  { icon: Clock, title: "24/7 Quick Response", desc: "Round-the-clock support and emergency services" },
];

const checkpoints = [
  "Residential & Commercial Services",
  "Affordable Pricing",
  "Professional & Trained Staff",
  "Service Across Andhra Pradesh",
  "Annual Maintenance Contracts (AMC)",
  "Free Inspection & Customized Plans",
];

const About = () => {
  const imgAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">About Us</h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">No.1 trusted pest control company in Vijayawada since 2008</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={imgAnim.ref} className={imgAnim.isVisible ? "animate-slide-right" : "opacity-0"}>
              <img src={aboutTeam} alt="Our Team" className="rounded-2xl shadow-xl w-full" loading="lazy" width={1280} height={720} />
            </div>
            <div>
              <SectionHeading subtitle="Who We Are" title="18+ Years of Trusted Service" center={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Vijayawada Pest Control Services is the No.1 trusted pest control company in Vijayawada and across Andhra Pradesh, serving customers since 2008. With 18+ years of experience, we provide safe, effective, and long-lasting pest management solutions for homes and businesses.</p>
                <p>Our expert technicians specialize in termite control, bed bug treatment, cockroach control, rodent control, and general pest management.</p>
                <p>We use government-approved, eco-friendly chemicals that are safe for families, children, and pets while ensuring powerful results.</p>
                <p>We offer 24/7 quick response, free inspection, and customized treatment plans based on your needs. Our services come with a reliable warranty for complete peace of mind.</p>
                <p>We also provide Annual Maintenance Contracts (AMC) for continuous protection and prevention.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {checkpoints.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, label: "Registered Company" },
              { icon: Award, label: "ISO 9001:2015 Certified" },
            ].map((b) => (
              <div key={b.label} className="glass-card-hover p-8 text-center flex flex-col items-center gap-4 min-w-[200px]">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <b.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading subtitle="Our Values" title="Why Customers Trust Us" />
          <div ref={valuesAnim.ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${valuesAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            {values.map((v, i) => (
              <div key={v.title} className="glass-card-hover p-6 flex items-start gap-4" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding gradient-dark">
        <div className="container-main grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter end={18} suffix="+" label="Years Experience" />
          <AnimatedCounter end={1000} suffix="+" label="Happy Customers" />
          <AnimatedCounter end={24} suffix="/7" label="Support Available" />
          <AnimatedCounter end={50} suffix="+" label="Expert Technicians" />
        </div>
      </section>
    </>
  );
};

export default About;
