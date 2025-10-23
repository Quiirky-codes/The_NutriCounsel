export interface Doctor {
  id: string;
  name: string;
  phone: string;
  timing: string;
  qualification: string;
  consultationFee: string;
  experience: string;
  location: string;
}

export const mentalHealthDoctors: Doctor[] = [
  {
    id: "mh1",
    name: "Dr George Palackal ",
    phone: "+91 94873 62724",
    timing: "Based on Appointment Slot Availability",
    qualification: "PhD in Counseling Psychology, Major in Clinical Counselling",
    consultationFee: "₹ 1800/- ",
    experience: "10 years",
    location: "Montfort Counseling and Education"
  },
  {
    id: "mh2",
    name: "Ms Uma S Iyer",
    phone: "+91 76762 52264",
    timing: "Based on Appointment Slot Availability",
    qualification: "Masters in Counseling and Family Therapy.",
    consultationFee: "₹ 2500/- ",
    experience: "24 years",
    location: "Neermana Clinic, Bilekahalli,Bangalore"
  },
  {
    id: "mh3",
    name: "Dr Anupama Bajaj",
    phone: "+91 99014 11333",
    timing: "Based on Appointment Slot Availability",
    qualification: "PhD Psychology",
    consultationFee: "₹ 1500/- ",
    experience: "10 years",
    location: "Dr Anupama Bajaj's Clinic, Bangalore"
  },
  {
    id: "mh4",
    name: "Ms Shruti Chaubey",
    phone: "+91 77069 68262",
    timing: "Based on Appointment Slot Availability",
    qualification: "MA  Counseling Psychology, BEd in Special Education (Learning Disability)",
    consultationFee: "₹ 1500/- ",
    experience: "10 years",
    location: "Mindspace, Bangalore"
  },
  {
    id: "mh5",
    name: "Dr Smitha Saikumar",
    phone: "+91 94497 11902",
    timing: "Based on Appointment Slot Availability",
    qualification: "MSc Psychology ",
    consultationFee: "₹ 1500/- ",
    experience: "17 years",
    location: "Aayu Saamya Clinic, Bangalore"
  }
];

export const nutritionalHealthDoctors: Doctor[] = [
  {
    id: "nh1",
    name: "Ashli Dilafini.M",
    phone: "+91 93606 87310",
    timing: "Monday - Sat: 7-8 PM ",
    qualification: "BSC Nutrition and Dietetics, MSC Clinical Nutrition, CDE ",
    consultationFee: "₹800 per session",
    experience: "1.5 years",
    location: "Los Angeles, CA - Nutrition Wellness Center"
  },
  
];
