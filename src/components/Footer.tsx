// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
// import logo from "@/assets/logo2.png";

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="gradient-dark text-secondary-foreground">
//       <div className="container-main section-padding pb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div>
//             <img src={logo} alt="VPS" className="h-14 w-auto mb-4 brightness-0 invert" />
//             <p className="text-sm opacity-80 leading-relaxed">
//               No.1 Pest Control Services in Vijayawada. Safe, effective & long-lasting pest solutions since 2008.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {["Home", "About", "Services", "Careers", "Contact"].map((l) => (
//                 <li key={l}>
//                   <Link
//                     to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
//                     onClick={scrollToTop}
//                     className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
//                   >
//                     {l}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-bold mb-4">Services</h4>
//             <ul className="space-y-2">
//               {["Termite Control", "Cockroach Control", "Bed Bugs Control", "Rodent Control", "Mosquito Control"].map((s) => (
//                 <li key={s}>
//                   <Link to="/services" onClick={scrollToTop} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-bold mb-4">Contact</h4>
//             <div className="space-y-3">
//               <a href="tel:9985373922" className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
//                 <Phone className="w-4 h-4 text-primary" /> 9985373922
//               </a>
//               <a href="mailto:vijayawadapestcontrolservices@gmail.com" className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
//                 <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /> vijayawadapestcontrolservices@gmail.com
//               </a>
//               <div className="flex items-start gap-3 text-sm opacity-80">
//                 <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
//                 24-10-29, 1st Ln, Bavajipet, Vijayawada, AP 520003
//               </div>
//             </div>
//             <div className="flex items-center gap-4 mt-6">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors"><Facebook className="w-4 h-4" /></a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors"><Instagram className="w-4 h-4" /></a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-sm opacity-60">
//           © {new Date().getFullYear()} Vijayawada Pest Control Services. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import logo from "@/assets/logo2.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="gradient-dark text-secondary-foreground">
      <div className="container-main section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="VPS" className="h-14 w-auto mb-4" />
            <p className="text-sm opacity-80 leading-relaxed">
              No.1 Pest Control Services in Vijayawada. Safe, effective & long-lasting pest solutions since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Careers", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                    onClick={scrollToTop}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Termite Control",
                "Cockroach Control",
                "Bed Bugs Control",
                "Rodent Control",
                "Mosquito Control",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    onClick={scrollToTop}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:9985373922"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
              >
                <Phone className="w-4 h-4 text-primary" /> 9985373922
              </a>
              <a
                href="mailto:vijayawadapestcontrolservices@gmail.com"
                className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
              >
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /> vijayawadapestcontrolservices@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                24-10-29, 1st Ln, Bavajipet, Vijayawada, AP 520003
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center space-y-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Vijayawada Pest Control Services. All Rights Reserved.
          </p>
          
          <div className="flex justify-center items-center gap-1 text-sm">
            <span className="opacity-60">Made with</span>
            <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> 
            <span className="opacity-60">by</span>
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 font-medium hover:underline transition-all"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;