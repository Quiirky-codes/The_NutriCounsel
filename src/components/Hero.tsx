import { heroContent } from "@/constants/content";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-none">
            <span className="block mb-4">{heroContent.title}</span>
          </h1>
          
          <p className="font-playfair text-3xl md:text-4xl text-primary font-medium max-w-3xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>
          
          <p className="font-playfair text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {heroContent.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
