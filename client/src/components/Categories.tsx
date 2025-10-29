import { categories } from "@/data/services";
import { Card } from "@/components/ui/card";

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

export function Categories({ onCategorySelect }: CategoriesProps) {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-categories-title">
            What I Can Build for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from 5 specialized categories of digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => {
                onCategorySelect(category.id);
                scrollToServices();
              }}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              data-testid={`card-category-${category.id.toLowerCase().replace(/ /g, "-")}`}
            >
              <div className="mb-4">
                <img
                  src={`/attached_assets/generated_images/${category.icon}`}
                  alt={category.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
