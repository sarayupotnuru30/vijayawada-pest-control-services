import { useState } from "react";
import { Send, Upload, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const formAnim = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", experience: "" });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "We'll review your application and get in touch if there's a suitable vacancy." });
    setForm({ name: "", phone: "", experience: "" });
    setFile(null);
  };

  return (
    <>
      <section className="pt-32 pb-16 gradient-dark">
        <div className="container-main px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">Careers</h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">Join our growing team of pest control professionals</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <SectionHeading subtitle="Join Us" title="We're Hiring!" description="We welcome both freshers and experienced candidates who are interested in joining our team. Please contact us and share your details. If there is a suitable vacancy, we will get in touch with you." />

          <div ref={formAnim.ref} className={`glass-card p-8 md:p-12 ${formAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Application Form</h3>
                <p className="text-sm text-muted-foreground">Fill in your details below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Experience</label>
                <select value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all">
                  <option value="">Select experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="1-2">1-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Resume</label>
                <label className="flex items-center justify-center gap-2 w-full px-4 py-6 rounded-lg border-2 border-dashed border-input bg-muted/30 text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
                  <Upload className="w-5 h-5" />
                  <span className="text-sm">{file ? file.name : "Click to upload resume"}</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
              </div>
              <button type="submit" className="btn-primary w-full gap-2">
                <Send className="w-5 h-5" /> Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
