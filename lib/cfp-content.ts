// Centralized content data for CFP Certification page

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface PricingTier {
  level: string;
  price: string;
  ibfFunding: string;
  netPrice: string;
  duration: string;
  modules: number;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  experience: string;
  image: string;
  bio: string;
}

export const curriculumModules: CurriculumModule[] = [
  {
    id: "module-1",
    title: "Module 1: Foundations of Financial Planning",
    description: "Build a solid foundation in financial planning principles, ethics, and professional standards.",
    topics: [
      "Introduction to Financial Planning Process",
      "Professional Ethics and Standards of Conduct",
      "Regulatory Framework in Singapore",
      "Client Communication and Relationship Management",
      "Time Value of Money and Financial Mathematics"
    ],
    duration: "40 hours"
  },
  {
    id: "module-2",
    title: "Module 2: Insurance and Risk Management",
    description: "Master insurance planning and risk management strategies for comprehensive client protection.",
    topics: [
      "Life Insurance Planning and Needs Analysis",
      "Health and Medical Insurance Strategies",
      "Disability and Long-Term Care Planning",
      "Property and Liability Insurance",
      "Risk Assessment and Management Techniques"
    ],
    duration: "45 hours"
  },
  {
    id: "module-3",
    title: "Module 3: Investment Planning",
    description: "Develop expertise in investment strategies, portfolio management, and asset allocation.",
    topics: [
      "Investment Vehicles and Asset Classes",
      "Modern Portfolio Theory and Asset Allocation",
      "Equity and Fixed Income Analysis",
      "Alternative Investments and Derivatives",
      "Performance Measurement and Portfolio Rebalancing"
    ],
    duration: "50 hours"
  },
  {
    id: "module-4",
    title: "Module 4: Tax Planning",
    description: "Understand tax-efficient strategies for individuals and businesses in Singapore.",
    topics: [
      "Singapore Income Tax System",
      "Personal Tax Planning Strategies",
      "Business and Corporate Tax Planning",
      "GST and Property Tax Considerations",
      "International Tax Planning Fundamentals"
    ],
    duration: "35 hours"
  },
  {
    id: "module-5",
    title: "Module 5: Retirement and Estate Planning",
    description: "Learn comprehensive retirement and estate planning strategies for long-term wealth management.",
    topics: [
      "CPF Optimization and Retirement Planning",
      "SRS and Private Retirement Schemes",
      "Estate Planning and Wealth Transfer",
      "Wills, Trusts, and Probate",
      "Succession Planning for Business Owners"
    ],
    duration: "40 hours"
  },
  {
    id: "module-6",
    title: "Module 6: Comprehensive Financial Plan Development",
    description: "Integrate all planning areas to create comprehensive financial plans for diverse client scenarios.",
    topics: [
      "Financial Planning Case Analysis",
      "Comprehensive Plan Development",
      "Client Presentation and Communication",
      "Implementation and Monitoring Strategies",
      "Practice Management and Business Development"
    ],
    duration: "45 hours"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is CFP® certification and why is it valuable?",
    answer: "CFP® (Certified Financial Planner) is the globally recognized gold standard in financial planning. It demonstrates your competence, ethical standards, and commitment to serving clients' best interests. CFP® professionals command higher salaries, greater client trust, and access to premium career opportunities worldwide."
  },
  {
    id: "faq-2",
    category: "Enrollment",
    question: "What are the prerequisites to enroll in the CFP® program?",
    answer: "To pursue CFP® certification, you need to complete the AFP® and AWP® levels first. Entry to AFP® requires a relevant diploma or degree. You must also pass the Financial Planning Association of Singapore (FPAS) exam and become a student member before starting your CFP® journey."
  },
  {
    id: "faq-3",
    category: "Enrollment",
    question: "Can I start directly at AWP® or CFP® level?",
    answer: "No, the CFP® pathway is progressive. All candidates must complete AFP® → AWP® → CFP® in sequence. This ensures you build a solid foundation before advancing to more complex financial planning concepts. However, exemptions may be available based on prior qualifications—contact us to assess your eligibility."
  },
  {
    id: "faq-4",
    category: "General",
    question: "How long does it take to complete the full CFP® certification?",
    answer: "The complete pathway typically takes 12-18 months, depending on your pace. AFP® takes 3-6 months, AWP® takes 6-9 months, and CFP® itself requires completion of 6 modules plus exams. We offer flexible schedules including weekday, weekend, and intensive options to fit your lifestyle."
  },
  {
    id: "faq-5",
    category: "Exams",
    question: "What is the exam format and pass rate?",
    answer: "CFP® exams consist of multiple-choice questions and case study analysis. Each module has its own examination. Our students benefit from comprehensive practice exams, case studies, and exam preparation support. While pass rates vary, our structured approach and experienced trainers give you the best chance of success."
  },
  {
    id: "faq-6",
    category: "Funding",
    question: "Can I get funding support for CFP® courses?",
    answer: "Yes! Singapore Citizens and Permanent Residents may qualify for IBF Standards Training Scheme (IBF-STS) funding, which can cover up to 90% of course fees. We also offer the MAS Enhanced Support for eligible candidates. Our team will guide you through the application process to maximize your funding support."
  },
  {
    id: "faq-7",
    category: "Career",
    question: "What career opportunities are available after CFP® certification?",
    answer: "CFP® professionals work as financial planners, wealth managers, private bankers, insurance advisors, and financial consultants. The certification opens doors to premium advisory roles, management positions, and international opportunities. Many CFP® holders also start their own financial planning practices."
  },
  {
    id: "faq-8",
    category: "General",
    question: "What support do I receive during my studies?",
    answer: "You'll receive comprehensive study materials, access to online resources and video lectures, practice exams, and continuous support from our expert trainers. We also provide student membership benefits, study groups, and one-on-one consultation when needed. Our goal is your success."
  },
  {
    id: "faq-9",
    category: "Exams",
    question: "What happens if I fail an exam?",
    answer: "If you don't pass an exam on your first attempt, you can retake it. We provide additional support including review sessions and targeted coaching to help you succeed. Exam retake fees apply, but many students find success on their second attempt with our guidance."
  },
  {
    id: "faq-10",
    category: "Funding",
    question: "Are there payment plans available?",
    answer: "Yes, we offer flexible payment plans to make your CFP® journey more manageable. You can pay by module or opt for installment plans. Contact our course advisors to discuss payment options that work for your budget, in addition to available funding support."
  }
];

export const pricingData: PricingTier[] = [
  {
    level: "AFP®",
    price: "$3,500",
    ibfFunding: "Up to 90%",
    netPrice: "From $350",
    duration: "3-6 months",
    modules: 2
  },
  {
    level: "AWP®",
    price: "$4,800",
    ibfFunding: "Up to 90%",
    netPrice: "From $480",
    duration: "6-9 months",
    modules: 3
  },
  {
    level: "CFP®",
    price: "$8,500",
    ibfFunding: "Up to 90%",
    netPrice: "From $850",
    duration: "9-12 months",
    modules: 6
  }
];

export const trainersData: Trainer[] = [
  {
    id: "trainer-1",
    name: "Dr. Michael Tan",
    title: "Lead CFP® Instructor",
    credentials: ["CFP®", "CFA", "PhD in Finance"],
    experience: "25+ years in financial planning and wealth management",
    image: "/trainers/michael-tan.jpg",
    bio: "Former Head of Wealth Management at a leading private bank, Dr. Tan has trained over 5,000 financial professionals across Asia. His practical approach combines academic rigor with real-world insights."
  },
  {
    id: "trainer-2",
    name: "Sarah Lim",
    title: "Senior Investment Planning Instructor",
    credentials: ["CFP®", "CFA", "FRM"],
    experience: "20+ years in investment advisory and portfolio management",
    image: "/trainers/sarah-lim.jpg",
    bio: "Sarah brings extensive experience from her time as Chief Investment Strategist at a major financial institution. She specializes in making complex investment concepts accessible and actionable."
  },
  {
    id: "trainer-3",
    name: "David Wong",
    title: "Estate & Tax Planning Specialist",
    credentials: ["CFP®", "TEP", "LLB"],
    experience: "18+ years in estate planning and tax advisory",
    image: "/trainers/david-wong.jpg",
    bio: "A qualified lawyer and CFP® professional, David has helped hundreds of high-net-worth families with sophisticated estate planning strategies. His case-based teaching style is highly rated by students."
  },
  {
    id: "trainer-4",
    name: "Jennifer Chen",
    title: "Insurance & Risk Management Expert",
    credentials: ["CFP®", "ChFC", "CLU"],
    experience: "22+ years in insurance and risk advisory",
    image: "/trainers/jennifer-chen.jpg",
    bio: "Jennifer has served as an insurance consultant for major insurance companies and brings deep expertise in comprehensive protection planning. She's known for her practical, client-focused teaching approach."
  }
];

export const studyMaterials = {
  materials: [
    "Comprehensive printed textbooks for all modules",
    "Digital study guides and e-learning resources",
    "Video lectures accessible 24/7 online",
    "Practice questions and mock examinations",
    "Case study workbooks with real-world scenarios",
    "Financial calculator and Excel templates",
    "Quick reference guides and formula sheets"
  ],
  support: [
    "Access to online student portal",
    "Discussion forums and study groups",
    "One-on-one consultation sessions",
    "Email support from instructors",
    "Exam preparation workshops",
    "Revision classes before examinations"
  ]
};

export const enrollmentSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Ensure you meet the academic and professional requirements for your desired level."
  },
  {
    step: 2,
    title: "FPAS Membership",
    description: "Register and pass the Financial Planning Association of Singapore (FPAS) exam to become a student member."
  },
  {
    step: 3,
    title: "Submit Application",
    description: "Complete the online application form and submit required documents (certificates, ID, etc.)."
  },
  {
    step: 4,
    title: "Funding Application",
    description: "Apply for IBF-STS or MAS Enhanced Support funding if eligible (we'll guide you through this)."
  },
  {
    step: 5,
    title: "Payment & Confirmation",
    description: "Make payment (or pay net amount after funding) and receive course confirmation."
  },
  {
    step: 6,
    title: "Begin Your Journey",
    description: "Attend orientation, receive study materials, and start your classes!"
  }
];

