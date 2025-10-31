import { useRoute, Link } from "wouter";
import { servicesData } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, Code, DollarSign, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildServiceInquiryMessage, buildFreeDemoMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ServiceDetail() {
  const [, params] = useRoute("/service/:id");
  const service = servicesData.find(s => s.id === params?.id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const openWhatsappForService = () => {
    if (!service) return;
    const msg = buildServiceInquiryMessage(service.name);
    const url = buildWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openFreeDemo = () => {
    if (!service) return;
    const msg = buildFreeDemoMessage(service.name);
    const url = buildWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const relatedServices = servicesData
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/">
              <Button variant="ghost" className="mb-6" data-testid="button-back">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Services
              </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Badge className="mb-4" data-testid="badge-category">
                  {service.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-service-name">
                  {service.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-8" data-testid="text-service-description">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  <Card className="p-6 text-center">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">Price Range</div>
                    <div className="text-sm text-muted-foreground" data-testid="text-price-range">
                      {service.priceRange}
                    </div>
                  </Card>
                  <Card className="p-6 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">For Businesses</div>
                    <div className="text-sm text-muted-foreground">
                      {service.businessTypes.join(", ")}
                    </div>
                  </Card>
                  <Card className="p-6 text-center">
                    <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">Tech Stack</div>
                    <div className="text-sm text-muted-foreground">
                      {service.techStack.length} technologies
                    </div>
                  </Card>
                </div>

                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground" data-testid={`text-feature-${index}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              <div>
                <Card className="p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Get This Service</h3>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="text-sticky-price">
                    {service.priceRange}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fast delivery • 30 days support • Customizable
                  </p>
                  <Button 
                    className="w-full mb-3" 
                    size="lg"
                    onClick={openWhatsappForService}
                    data-testid="button-request-quote"
                  >
                    Get Quote on WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full mb-3"
                    onClick={openFreeDemo}
                    data-testid="button-free-demo"
                  >
                    Free Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={openWhatsappForService}
                    data-testid="button-whatsapp"
                  >
                    Chat on WhatsApp
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {relatedServices.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((related) => (
                  <Link key={related.id} href={`/service/${related.id}`}>
                    <Card className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 h-full" data-testid={`card-related-${related.id}`}>
                      <Badge variant="secondary" className="mb-3">
                        {related.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {related.description}
                      </p>
                      <div className="text-sm font-medium text-primary">
                        {related.priceRange}
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
