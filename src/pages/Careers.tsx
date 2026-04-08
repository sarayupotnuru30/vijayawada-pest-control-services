import { useState } from "react";
import { Send, Upload, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const formAnim = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", qualification: "", experience: "" });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "We'll review your application and get in touch if there's a suitable vacancy." });
    setForm({ name: "", phone: "", qualification: "", experience: "" });
    setFile(null);
  };

  return (
    <>
      <PageHeader title="Careers" subtitle="Join Our Team" />

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <SectionHeading subtitle="Join Us" title="We're Hiring!" description="We welcome both freshers and experienced candidates who are interested in joining our team. Please contact us and share your details. If there is a suitable vacancy, we will get in touch with you." />

          <div ref={formAnim.ref} className={`glass-card p-8 md:p-12 ${formAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
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
                <label className="block text-sm font-medium text-foreground mb-1.5">Qualification *</label>
                <select required value={form.qualification} onChange={(e) => setForm({ ...form, qualification: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-all">
                  <option value="">Select qualification</option>
                  <option value="10th">10th Pass</option>
                  <option value="12th">12th / Intermediate</option>
                  <option value="diploma">Diploma</option>
                  <option value="graduate">Graduate (B.Sc / B.Tech / BA)</option>
                  <option value="postgraduate">Post Graduate</option>
                  <option value="other">Other</option>
                </select>
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
                <label className="flex items-center justify-center gap-2 w-full px-4 py-6 rounded-lg border-2 border-dashed border-input bg-muted/30 text-muted-foreground cursor-pointer hover:border-primary/50 hover:bg-accent/30 transition-all duration-300">
                  <Upload className="w-5 h-5" />
                  <span className="text-sm">{file ? file.name : "Click to upload resume"}</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
              </div>
              <button type="submit" className="btn-primary w-full gap-2 group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
