import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Apple, Check } from "lucide-react";
import { serviceCards } from "@/constants/content";

const ServiceCards = () => {

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose the support that's right for you
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mental Health Card */}
          <Card className="overflow-hidden transition-all hover:shadow-[var(--shadow-card)] bg-[var(--gradient-card)]">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{serviceCards.mentalHealth.title}</CardTitle>
              </div>
              <p className="text-muted-foreground">
                {serviceCards.mentalHealth.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {serviceCards.mentalHealth.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/mental-health-doctors" className="w-full">
                <Button className="w-full">
                  View Specialists
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Nutritional Health Card */}
          <Card className="overflow-hidden transition-all hover:shadow-[var(--shadow-card)] bg-[var(--gradient-card)]">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Apple className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{serviceCards.nutritionalHealth.title}</CardTitle>
              </div>
              <p className="text-muted-foreground">
                {serviceCards.nutritionalHealth.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {serviceCards.nutritionalHealth.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/nutritional-doctors" className="w-full">
                <Button className="w-full">
                  View Specialists
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
