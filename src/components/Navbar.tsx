import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
      <div className="container-main flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="VPS Total Pest Solutions" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-primary ${location.pathname === l.to ? "text-primary" : scrolled ? "text-foreground" : "text-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:9985373922" className="btn-primary gap-2 text-sm py-2.5 px-5">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in" style={{ animationDelay: "0s" }}>
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${location.pathname === l.to ? "bg-accent text-primary" : "text-foreground hover:bg-muted"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:9985373922" className="btn-primary w-full mt-3 gap-2 text-sm">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
