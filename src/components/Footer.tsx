import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground tracking-[0.15em]" style={{ fontFamily: "var(--font-sans)" }}>
          © {new Date().getFullYear()} Aurora Photography. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
