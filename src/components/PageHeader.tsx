import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: Props) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent to-muted/50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: "0s" }} />
      <div className="absolute top-32 right-20 w-2 h-2 rounded-full bg-primary/20 animate-bounce" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-10 left-1/3 w-2 h-2 rounded-full bg-primary/25 animate-bounce" style={{ animationDelay: "1s" }} />

      <div ref={ref} className={`container-main px-4 sm:px-6 lg:px-8 text-center relative z-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
          {title}
        </h1>
        <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-4" />
      </div>
    </section>
  );
};

export default PageHeader;
