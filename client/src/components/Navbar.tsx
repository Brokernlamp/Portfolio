import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 transition-all duration-300 cursor-pointer" data-testid="link-home">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">Swar</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              data-testid="button-nav-services"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="button-nav-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              data-testid="button-nav-contact"
            >
              Contact
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-quote"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
