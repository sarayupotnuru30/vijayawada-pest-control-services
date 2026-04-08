import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ subtitle, title, description, center = true }: Props) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`mb-12 md:mb-16 ${center ? "text-center" : ""} ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
      {subtitle && <span className="text-primary font-semibold text-sm uppercase tracking-widest">{subtitle}</span>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-foreground">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>}
    </div>
  );
};

export default SectionHeading;
