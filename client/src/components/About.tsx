import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const expertise = [
    "AI & Automation",
    "Full-Stack Development",
    "No-Code Solutions",
    "React & TypeScript",
    "Python & Flask",
    "API Integrations",
    "Database Design",
    "Cloud Deployment"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-about-title">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-intro">
              I'm <span className="font-semibold text-foreground">Swar</span>, an AI & Automation Engineer helping small and medium Indian businesses automate their workflows affordably.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With expertise in both cutting-edge AI technologies and practical no-code solutions, I bridge the gap between complex automation and accessible business tools.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Every solution I build is designed to save time, reduce costs, and help your business grow. From AI chatbots to full-scale web applications, I deliver tools that actually work for Indian SMBs.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Expertise Areas</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm" data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Fast Delivery:</span> Most projects completed within 1-2 weeks
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Affordable Pricing:</span> Transparent pricing starting from ₹5,000
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Post-Launch Support:</span> Free support for 30 days after delivery
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-experience">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-clients">40+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </Card>
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-delivered">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </Card>
            <Card className="p-6 text-center hover-elevate transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-rating">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </Card>

            <Card className="p-6 col-span-2 hover-elevate transition-all duration-300">
              <h4 className="font-semibold mb-3">Client Testimonial</h4>
              <p className="text-sm text-muted-foreground italic mb-3">
                "Swar built an inventory management system that saved us 15 hours every week. The chatbot alone increased our customer response rate by 300%. Highly recommend!"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">RK</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Rajesh Kumar</div>
                  <div className="text-xs text-muted-foreground">Retail Shop Owner, Mumbai</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
