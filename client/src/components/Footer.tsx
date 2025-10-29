import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Swar</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              AI & Automation Engineer helping Indian SMBs automate their workflows affordably.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild data-testid="button-social-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-social-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild data-testid="button-social-twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors" data-testid="link-footer-ai-automation">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors" data-testid="link-footer-web-apps">
                  Web & App Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors" data-testid="link-footer-marketing">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors" data-testid="link-footer-localization">
                  Localization Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors" data-testid="link-footer-data">
                  Data & Insights
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/">
                  <span className="hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-home">Home</span>
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors" data-testid="link-footer-services">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors" data-testid="link-footer-about">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get updates on new services and special offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div data-testid="text-copyright">
            © {new Date().getFullYear()} Swar. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with ❤️ by <span className="font-medium text-foreground">Swar</span> | AI Automation Engineer
          </div>
        </div>
      </div>
    </footer>
  );
}
