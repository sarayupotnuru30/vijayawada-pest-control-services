import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919985373922?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Vijayawada."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 p-4 rounded-full text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ background: "hsl(142, 70%, 45%)", animation: "pulse-glow 2s infinite" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
