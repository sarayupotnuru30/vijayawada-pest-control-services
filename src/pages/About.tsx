import { CheckCircle, Shield, Award, Users, Leaf, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageHeader from "@/components/PageHeader";
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

  return (
    <>
      <PageHeader title="About Us" subtitle="Who We Are" />

      {/* About Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={imgAnim.ref} className={`relative group ${imgAnim.isVisible ? "animate-slide-right" : "opacity-0"}`}>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              <img src={aboutTeam} alt="Our Team" className="relative rounded-2xl shadow-xl w-full group-hover:shadow-2xl transition-shadow duration-500" loading="lazy" width={1280} height={720} />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-xl border border-border hidden lg:block">
                <div className="text-3xl font-bold text-primary">18+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div>
              <SectionHeading subtitle="Our Story" title="18+ Years of Trusted Service" center={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Vijayawada Pest Control Services is the No.1 trusted pest control company in Vijayawada and across Andhra Pradesh, serving customers since 2008. With 18+ years of experience, we provide safe, effective, and long-lasting pest management solutions for homes and businesses.</p>
                <p>Our expert technicians specialize in termite control, bed bug treatment, cockroach control, rodent control, and general pest management.</p>
                <p>We use government-approved, eco-friendly chemicals that are safe for families, children, and pets while ensuring powerful results.</p>
                <p>We offer 24/7 quick response, free inspection, and customized treatment plans based on your needs. Our services come with a reliable warranty for complete peace of mind.</p>
                <p>We also provide Annual Maintenance Contracts (AMC) for continuous protection and prevention.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {checkpoints.map((c, i) => (
                  <div key={c} className="flex items-center gap-2 group/item">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 group-hover/item:scale-110 transition-transform" />
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
              <div key={b.label} className="group glass-card-hover p-8 text-center flex flex-col items-center gap-4 min-w-[200px]">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div key={v.title} ref={ref} className={`group glass-card-hover p-6 flex items-start gap-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-primary group-hover:to-primary transition-all duration-500">
                    <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Updated: Black Background, White Numbers & Labels */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "#000000" }}>
        <div className="container-main relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Number and Label forced to white */}
            <div style={{ color: "white" }}>
              <AnimatedCounter end={18} suffix="+" label={<span style={{ color: "white" }}>Years Experience</span>} />
            </div>
            <div style={{ color: "white" }}>
              <AnimatedCounter end={5000} suffix="+" label={<span style={{ color: "white" }}>Happy Customers</span>} />
            </div>
            <div style={{ color: "white" }}>
              <AnimatedCounter end={24} suffix="/7" label={<span style={{ color: "white" }}>Support Available</span>} />
            </div>
            <div style={{ color: "white" }}>
              <AnimatedCounter end={50} suffix="+" label={<span style={{ color: "white" }}>AMC</span>} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;