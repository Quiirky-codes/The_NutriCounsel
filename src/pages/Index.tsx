import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthCarousel from "@/components/HealthCarousel";
import ServiceCards from "@/components/ServiceCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HealthCarousel />
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
