import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { nutritionalHealthDoctors } from "@/constants/doctors";

const NutritionalDoctors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Nutritional Health Specialists
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Work with certified nutritionists and dietitians to develop sustainable eating habits 
                  and achieve your health goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {nutritionalHealthDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NutritionalDoctors;
