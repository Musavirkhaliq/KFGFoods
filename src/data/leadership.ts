export interface Leader {
  name: string;
  role: string;
  department: string;
  background?: string;
  tag?: string;
}

export interface Advisor {
  name: string;
  designation: string;
  organization: string;
  domain: string;
}

export const EXECUTIVE_TEAM: Leader[] = [
  {
    name: "Fayaz Anjum Wani",
    role: "Founder & Director",
    department: "Product Development & R&D",
    background: "Driving preventive food-tech formulations, regional ingredient innovation, and the core vision of sugar-free conscious indulgence.",
    tag: "Founder",
  },
  {
    name: "Rifat Ara",
    role: "Director",
    department: "Operations & Finance",
    background: "Former Zonal Education Officer bringing rigorous administrative oversight, institutional governance, and financial stewardship to KFG Foods.",
    tag: "Director",
  },
  {
    name: "Er. Bashee Mir",
    role: "Co-Founder",
    department: "Strategy & Scale",
    background: "Academic Coordinator and engineer guiding scalable manufacturing processes, strategic growth, and regional partnership architecture.",
    tag: "Co-Founder",
  },
  {
    name: "Naureen Farooq",
    role: "Managing Director",
    department: "Marketing & Branding",
    background: "Sports enthusiast and brand strategist championing health literacy, active living, and consumer connection across Jammu & Kashmir.",
    tag: "Leadership",
  },
];

export const ADVISORY_BOARD: Advisor[] = [
  {
    name: "Prof. Parvez A. Mir",
    designation: "CEO",
    organization: "CIED, IUST (Islamic University of Science & Technology)",
    domain: "Innovation, Incubation & Enterprise Development",
  },
  {
    name: "Mr. Muheet Mehraj",
    designation: "Founder & CEO",
    organization: "Kashmir Box",
    domain: "Regional E-Commerce, Global Supply Chain & D2C Scaling",
  },
  {
    name: "Er. Sayyed Pervaz Qalander",
    designation: "Principal Consultant",
    organization: "Industrial Consultancy Services",
    domain: "Industrial Engineering, Factory Compliance & Infrastructure",
  },
  {
    name: "Dr. Sajad Ahmad",
    designation: "Domain Advisor",
    organization: "Food Science & Processing",
    domain: "Nutritional Formulations & Food Safety Protocols",
  },
];
