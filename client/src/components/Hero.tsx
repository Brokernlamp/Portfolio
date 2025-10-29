import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_tech_workspace_hero_image_b35923ec.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">Serving 50+ Indian SMBs</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }} data-testid="text-hero-title">
            Transform Your Business with AI, No-Code, and Automation Solutions
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }} data-testid="text-hero-subtitle">
            I design and develop practical digital tools — from AI chatbots to full automation dashboards — that small & medium Indian businesses actually use.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="group"
              data-testid="button-browse-services"
            >
              Browse Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-stat-projects">50+</div>
              <div className="text-sm text-white/70">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-stat-businesses">40+</div>
              <div className="text-sm text-white/70">Happy Businesses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-stat-time">15hrs</div>
              <div className="text-sm text-white/70">Avg. Time Saved/Week</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-stat-satisfaction">98%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
