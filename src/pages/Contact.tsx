// import { useState } from "react";
// import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import SectionHeading from "@/components/SectionHeading";
// import PageHeader from "@/components/PageHeader";
// import { useToast } from "@/hooks/use-toast";

// const contactInfo = [
//   { icon: Phone, label: "Phone", value: "9985373922", href: "tel:9985373922" },
//   { icon: Mail, label: "Email", value: "vijayawadapestcontrolservices@gmail.com", href: "mailto:vijayawadapestcontrolservices@gmail.com" },
//   { icon: MapPin, label: "Address", value: "24-10-29, 1st Ln, Bavajipet, Vijayawada, Andhra Pradesh 520003" },
//   { icon: Clock, label: "Hours", value: "24/7 Available" },
// ];

// const serviceOptions = [
//   "Termite Control",
//   "Cockroach Control",
//   "Bed Bugs Control",
//   "Rodent Control",
//   "Mosquito Control",
//   "Lizard Control",
//   "Spider Control",
//   "Ant Control",
//   "General Pest Control",
//   "Other",
// ];

// const Contact = () => {
//   const { toast } = useToast();
//   const formAnim = useScrollAnimation();
//   const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
//     setForm({ name: "", phone: "", email: "", service: "", message: "" });
//   };

//   return (
//     <>
//       <PageHeader title="Contact Us" subtitle="Get In Touch" />

//       <section className="section-padding">
//         <div className="container-main">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Info */}
//             <div>
//               <SectionHeading subtitle="Reach Out" title="We'd Love to Hear From You" center={false} />
//               <div className="space-y-6 mb-8">
//                 {contactInfo.map((c, i) => {
//                   const { ref, isVisible } = useScrollAnimation();
//                   return (
//                     <div key={c.label} ref={ref} className={`group flex items-start gap-4 p-4 rounded-xl hover:bg-accent/50 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
//                       <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-primary group-hover:to-primary transition-all duration-500">
//                         <c.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
//                       </div>
//                       <div>
//                         <span className="text-sm text-muted-foreground">{c.label}</span>
//                         {c.href ? (
//                           <a href={c.href} className="block font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
//                         ) : (
//                           <p className="font-semibold text-foreground">{c.value}</p>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//               <a
//                 href="https://wa.me/919985373922?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Vijayawada."
//                 target="_blank" rel="noopener noreferrer"
//                 className="btn-whatsapp gap-2"
//               >
//                 <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
//               </a>
//             </div>

//             {/* Form */}
//             <div ref={formAnim.ref} className={`glass-card p-8 ${formAnim.isVisible ? "animate-slide-left" : "opacity-0"}`}>
//               <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
//                   <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Your name" />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
//                     <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Phone number" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
//                     <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Email address" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Service Required *</label>
//                   <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all">
//                     <option value="">Select a service</option>
//                     {serviceOptions.map((s) => (
//                       <option key={s} value={s}>{s}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
//                   <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all resize-none" placeholder="Describe your pest problem..." />
//                 </div>
//                 <button type="submit" className="btn-primary w-full gap-2 group">
//                   <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map */}
//       <section className="h-[400px]">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.293345474441!2d80.62725807590497!3d16.511261327438495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0022419ba27%3A0xc0c8e2a3922f254e!2s24-10-29%2C%201st%20Ln%2C%20Bavajipet%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520003!5e0!3m2!1sen!2sin!4v1712600000000!5m2!1sen!2sin"
//           width="100%" 
//           height="100%" 
//           style={{ border: 0 }} 
//           allowFullScreen 
//           loading="lazy" 
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Vijayawada Pest Control Services Location"
//         />
//       </section>
//     </>
//   );
// };

// export default Contact;
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "9985373922", href: "tel:9985373922" },
  { icon: Mail, label: "Email", value: "vijayawadapestcontrolservices@gmail.com", href: "mailto:vijayawadapestcontrolservices@gmail.com" },
  { icon: MapPin, label: "Address", value: "24-10-29, 1st Ln, Bavajipet, Vijayawada, Andhra Pradesh 520003" },
  { icon: Clock, label: "Hours", value: "24/7 Available" },
];

const serviceOptions = [
  "Termite Control",
  "Cockroach Control",
  "Bed Bugs Control",
  "Rodent Control",
  "Mosquito Control",
  "Lizard Control",
  "Spider Control",
  "Ant Control",
  "General Pest Control",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const formAnim = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get In Touch" />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Section */}
            <div>
              <SectionHeading subtitle="Reach Out" title="We'd Love to Hear From You" center={false} />
              <div className="space-y-6 mb-8">
                {contactInfo.map((c, i) => {
                  const { ref, isVisible } = useScrollAnimation();
                  return (
                    <div 
                      key={c.label} 
                      ref={ref} 
                      className={`group flex items-start gap-4 p-4 rounded-xl hover:bg-accent/50 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`} 
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-primary group-hover:to-primary transition-all duration-500">
                        <c.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
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
                  );
                })}
              </div>
              <a
                href="https://wa.me/919985373922?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Vijayawada."
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>

            {/* Form Section */}
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
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Required *</label>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all">
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all resize-none" placeholder="Describe your pest problem..." />
                </div>
                <button type="submit" className="btn-primary w-full gap-2 group">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;