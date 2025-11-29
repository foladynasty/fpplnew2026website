// About Us Content Library

export interface Trainer {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image?: string;
  profileUrl?: string;
  specialization: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  program: string;
  content: string;
  rating?: number;
  featured?: boolean;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

// Mission & Vision
export const mission = {
  title: "Our Mission",
  content: "Our Mission is to provide a superior training experience that delivers a holistic approach to aid our students' understanding and application of wealth management concepts. We aspire to be the link between consumers and Financial Services Professionals by contemporaneously promoting financial literacy to the public and empowering Financial Services Professionals with competencies to help their clients create wealth, preserve dignity and change lives, turning their dreams into reality."
};

export const vision = {
  title: "Our Vision",
  content: "It is our vision to be the Centre for Professional Excellence in Advisory Competency & Ethics, to provide excellent financial education and life-long professional development to financial planning professionals in Asia, where every financial planning professional can be trained and equipped to exhibit Professional Excellence in Advisory Competency & Ethics (PEACE) in their practice. FP is committed to play a part in developing professionalism in the Financial Services Industry and promoting financial literacy in Singapore. We will strive to continuously be the premier Education Provider of the CFP® Certification Education Program in Singapore and other financial training in Asia."
};

// Core Values
export const coreValues: CoreValue[] = [
  {
    title: "Committed to our Mission",
    description: "Dedicated to excellence in financial education",
    icon: "🎯"
  },
  {
    title: "Focused on the Outcome",
    description: "Results-driven approach to student success",
    icon: "🎓"
  },
  {
    title: "Professional in our Approach",
    description: "Maintaining highest standards of professionalism",
    icon: "💼"
  },
  {
    title: "Innovative in our Methodology",
    description: "Modern teaching methods for maximum impact",
    icon: "💡"
  },
  {
    title: "Passionate in our Delivery",
    description: "Energetic and engaging training experience",
    icon: "🔥"
  },
  {
    title: "Practical in Application",
    description: "Real-world relevance in every lesson",
    icon: "⚡"
  },
  {
    title: "Care for our Employees",
    description: "Supporting our team's growth and well-being",
    icon: "❤️"
  },
  {
    title: "Loyalty to one another",
    description: "Strong team bonds and mutual support",
    icon: "🤝"
  },
  {
    title: "Spirit of Adventure",
    description: "Embracing innovation and new challenges",
    icon: "🚀"
  }
];

// Trainers
export const trainers: Trainer[] = [
  {
    id: "ronald-wong",
    name: "Ronald Wong",
    credentials: "MBA, CFP®, CHFC®, CWM®, CHMA, AEPP, STEP ASSOCIATE",
    role: "INSTRUCTOR FOR CFP AND CPD PROGRAMS (MFA)",
    specialization: ["CFP®", "MFA", "Comprehensive Planning"],
    featured: true,
    profileUrl: "/trainers/ronald-wong"
  },
  {
    id: "bernard-soh",
    name: "Bernard Soh",
    credentials: "CFP®, MPA(SMU DEAN'S LIST), INSEAD MBA(GENERAL MANAGEMENT & CONSULTING), B ENG (HONS)",
    role: "INSTRUCTOR FOR CFP PROGRAM",
    specialization: ["CFP®", "Wealth Management"],
    featured: true,
    profileUrl: "/trainers/bernard-soh"
  },
  {
    id: "aaron-graham-tay",
    name: "Aaron Graham Tay",
    credentials: "BSC(BANKING & FINANCE), CFP®, CERTIFIED BEHAVIORAL & CAREER CONSULTANT™",
    role: "INSTRUCTOR FOR CFP PROGRAM",
    specialization: ["CFP®", "Behavioral Finance"],
    featured: true,
    profileUrl: "/trainers/aaron-graham-tay"
  },
  {
    id: "lim-chung-wei",
    name: "Lim Chung Wei",
    credentials: "LLB(HONS), MSC(MARKETING), CFP®, ADV. CERT-IN-TEACHING(NEWCASTLE), ACTA",
    role: "INSTRUCTOR FOR CFP AND FA-CPD PROGRAMS",
    specialization: ["CFP®", "CPD", "Legal Planning"],
    profileUrl: "/trainers/lim-chung-wei"
  },
  {
    id: "chew-hock-beng",
    name: "Chew Hock Beng",
    credentials: "CFP®,CHFC®, CLU, IBFA, MFA, CIWA, CFOS, CBFC, AEPP®, ACTA",
    role: "INSTRUCTOR FOR CPD PROGRAM (HELP PROFESSIONAL)",
    specialization: ["Estate Planning", "HELP", "CPD"],
    profileUrl: "/trainers/chew-hock-beng"
  },
  {
    id: "joshua-jimmy-tan",
    name: "Joshua Jimmy Tan",
    credentials: "MBA(STRATEGIC WEALTH MANAGEMENT), CFP®, CWM®, RFC®, ASEP®, CHMA®, CBC",
    role: "INSTRUCTOR FOR CFP PROGRAM",
    specialization: ["CFP®", "Strategic Wealth Management"],
    profileUrl: "/trainers/joshua-jimmy-tan"
  },
  {
    id: "william-cai",
    name: "William Cai",
    credentials: "MSC(FINANCE), CFP®, CHFC®, CMFC®",
    role: "INSTRUCTOR FOR CFP AND CPD PROGRAMS",
    specialization: ["CFP®", "MFA", "Investment Planning"],
    featured: true,
    profileUrl: "/trainers/william-cai"
  },
  {
    id: "kenny-loh",
    name: "Kenny Loh",
    credentials: "MBA, CFP®, IBFA, AEPP®",
    role: "INSTRUCTOR FOR CPD PROGRAM (ARIA)",
    specialization: ["CPD", "ARIA", "Wealth Advisory"],
    profileUrl: "/trainers/kenny-loh"
  }
];

// Testimonials (Featured selection)
export const testimonials: Testimonial[] = [
  {
    id: "tan-siew-hui",
    name: "Tan Siew Hui",
    program: "CFP®",
    content: "Thankful to Ronald and Irene who are responsive whenever I sent them questions. Especially for Ronald, because of his practical experience, he provided us with practical steps or information. It is very helpful for a new agent like me.",
    rating: 5,
    featured: true
  },
  {
    id: "jean-chai",
    name: "Jean Chai",
    program: "CFP®",
    content: "This is one of the best investments for myself. It opened my eyes to the wide spectrum of financial planning, on top of the vast knowledge gained. Ronald never fails to make the topics interesting, practical and easy to digest. Enjoyed all my classes.",
    rating: 5,
    featured: true
  },
  {
    id: "candice-ang",
    name: "Candice Ang",
    program: "CFP®",
    content: "I passed all CFP modules at my first attempt with the guidance of Ronald and Team as well as attempting the well prepared online quiz and mock exam questions numerous times!",
    rating: 5,
    featured: true
  },
  {
    id: "marcus-cai",
    name: "Marcus Cai",
    title: "CFP, Professional Investment Advisory Services",
    program: "ASFB",
    content: "The 6 weeks of ASFB has been very rewarding and insightful. Learning from a seasoned practitioner is definitely worth paying a premium for. The sessions are entertaining and interactive, and Ronald has provided many cases studies and resources.",
    rating: 5,
    featured: true
  },
  {
    id: "joseph-tan",
    name: "Joseph Tan",
    title: "Director & Co-founder, Elite Legacy Planning Pte Ltd",
    program: "CPD",
    content: "Excellent course with full of practical case studies! Ronald is humorous, approachable and able to relate his well-thought training material to real-life application. Strongly recommended for Ronald's course as it is simply under-priced and over-delivered!",
    rating: 5,
    featured: true
  },
  {
    id: "lawrence-chow",
    name: "Lawrence Chow",
    program: "CFP®",
    content: "I urge all practitioners to embark on the CFP course to greatly enhance their knowledge and competence. Financial Perspectives' professionalism & dedication in conducting the entire course is commendable.",
    rating: 5
  }
];

// International Affiliation
export const affiliation = {
  name: "Financial Planning Standards Board Ltd (FPSB)",
  description: "The Financial Planning Standards Board Ltd (FPSB) is a U.S.-based non-profit association that manages, develops and operates certification, education and related programs for financial planning organizations to benefit the global community by establishing, upholding and promoting worldwide professional standards in personal financial planning.",
  marks: "FPSB owns the CFP®, CERTIFIED FINANCIAL PLANNER™ marks and awards them to individuals who meet FPSB's initial and ongoing certification requirements.",
  singapore: "The Financial Planning Association of Singapore (FPAS) is the marks licensing authority for the CFP® marks in Singapore, through agreement with FPSB."
};

// Association
export const association = {
  name: "Financial Planning Association Of Singapore (FPAS)",
  description: "FPAS is a non-profit professional association dedicated to developing and promoting an industry providing unbiased financial advice to the Singaporean public. Since 1st December 1998, its vision is to ensure that all Singaporeans have access to responsible and appropriate financial planning advice by raising the professional standards of the industry through education and a shared code of ethics.",
  role: "FPAS is part of a global assembly of financial planning bodies, and a licensee of the Financial Planning Standards Boards Ltd (FPSB). Launched in October 2004, its aim is to set standards and oversee the international CFP® certification program. As such, FPAS oversee the licensing process for the CERTIFIED FINANCIAL PLANNER™, Associate Wealth Planner and Associate Financial Planner.",
  url: "https://www.fpas.org.sg"
};

// Stats
export const stats = [
  { number: "26", label: "Years of Excellence", suffix: "" },
  { number: "20,000", label: "Graduates", suffix: "+" },
  { number: "#1", label: "CFP® Provider", suffix: "" },
  { number: "8", label: "Expert Trainers", suffix: "+" }
];

