import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9985373922", href: "tel:9985373922" },
  { icon: Mail, label: "Email", value: "vijayawadapestcontrolservices@gmail.com", href: "mailto:vijayawadapestcontrolservices@gmail.com" },
  { icon: MapPin, label: "Address", value: "24-10-29, 1st Ln, Bavajipet, Vijayawada, Andhra Pradesh 520003" },
  { icon: Clock, label: "Hours", value: "24/7 Available" },
];

const Contact = () => {
  const { toast } = useToast();
  const formAnim = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <section className="pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">Contact Us</h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">Get in touch for a free pest inspection</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <SectionHeading subtitle="Get In Touch" title="We'd Love to Hear From You" center={false} />
              <div className="space-y-6 mb-8">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{c.label}</span>
                      {c.href ? (
                        <a href={c.href} className="block font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919985373922?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Vijayawada."
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div ref={formAnim.ref} className={`glass-card p-8 ${formAnim.isVisible ? "animate-slide-left" : "opacity-0"}`}>
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Your name" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Email address" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all resize-none" placeholder="Describe your pest problem..." />
                </div>
                <button type="submit" className="btn-primary w-full gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.123!2d80.6288!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzIyLjMiTiA4MMKwMzcnNDMuNyJF!5e0!3m2!1sen!2sin!4v1600000000000"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title="Vijayawada Pest Control Services Location"
        />
      </section>
    </>
  );
};

export default Contact;
