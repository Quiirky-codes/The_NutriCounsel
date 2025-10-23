import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, Award, DollarSign, Briefcase } from "lucide-react";
import { Doctor } from "@/constants/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-[var(--shadow-card)] bg-[var(--gradient-card)]">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground">{doctor.name}</h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground/90">Qualification</p>
              <p className="text-muted-foreground">{doctor.qualification}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground/90">Experience</p>
              <p className="text-muted-foreground">{doctor.experience}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground/90">Timing</p>
              <p className="text-muted-foreground">{doctor.timing}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground/90">Consultation Fee</p>
              <p className="text-muted-foreground">{doctor.consultationFee}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground/90">Location</p>
              <p className="text-muted-foreground">{doctor.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground/90">Contact</p>
              <a 
                href={`tel:${doctor.phone}`} 
                className="text-accent hover:underline"
              >
                {doctor.phone}
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
