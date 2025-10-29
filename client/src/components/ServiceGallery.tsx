import { useState, useMemo, useEffect } from "react";
import { servicesData } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@shared/schema";
import { Link } from "wouter";

interface ServiceGalleryProps {
  selectedCategory: string | null;
}

export function ServiceGallery({ selectedCategory }: ServiceGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(selectedCategory);

  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  const categories: (ServiceCategory | "All")[] = ["All", "AI Automation", "Web Apps", "Marketing", "Localization", "Data"];

  const filteredServices = useMemo(() => {
    return servicesData.filter(service => {
      const matchesCategory = !activeCategory || activeCategory === "All" || service.category === activeCategory;
      const matchesSearch = !searchQuery || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
            Service Gallery
          </h2>
          <p className="text-xl text-muted-foreground">
            Browse {servicesData.length}+ ready-to-deploy solutions
          </p>
        </div>

        <div className="sticky top-20 z-40 backdrop-blur-md bg-background/90 py-6 mb-12 -mx-6 px-6 rounded-xl border border-border">
          <div className="flex flex-col gap-4">
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-services"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category || (!activeCategory && category === "All") ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category === "All" ? null : category)}
                  data-testid={`button-category-${category.toLowerCase().replace(/ /g, "-")}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground" data-testid="text-no-services">
              No services found. Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={service.id}
                className="overflow-hidden hover-elevate transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{
                  animationDelay: `${(index % 9) * 0.05}s`,
                }}
                data-testid={`card-service-${service.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center">
                  <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                    {service.category === "AI Automation" && "🤖"}
                    {service.category === "Web Apps" && "💻"}
                    {service.category === "Marketing" && "📱"}
                    {service.category === "Localization" && "🌍"}
                    {service.category === "Data" && "📊"}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${service.id}`}>
                      {service.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-service-name-${service.id}`}>
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary" data-testid={`text-price-${service.id}`}>
                      {service.priceRange}
                    </span>
                    <Link href={`/service/${service.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn"
                        data-testid={`button-learn-more-${service.id}`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
