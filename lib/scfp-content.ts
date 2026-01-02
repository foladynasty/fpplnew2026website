// Centralized content data for SCFP-HNWI page

export interface SCFPModule {
  id: string;
  title: string;
  type: 'core' | 'elective';
  description: string;
  topics: string[];
  duration: string;
}

export interface SCFPFAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface SCFPPricing {
  component: string;
  price: string;
  ibfFunding: string;
  netPrice: string;
  description: string;
}

export const scfpModules: SCFPModule[] = [
  {
    id: "module-1",
    title: "Module 1: HNWI Market Segmentation & Client Acquisition",
    type: "core",
    description: "Master the art of identifying, targeting, and acquiring high-net-worth clients in Singapore's competitive wealth advisory landscape.",
    topics: [
      "HNWI market analysis and segmentation strategies",
      "Psychographic profiling of ultra-wealthy individuals",
      "Value proposition development for affluent clients",
      "Client acquisition strategies and referral networks",
      "Digital marketing for premium advisory services",
      "Building trust and credibility with wealthy prospects"
    ],
    duration: "24 hours"
  },
  {
    id: "module-2",
    title: "Module 2: Family Business Advisory & Succession Planning",
    type: "core",
    description: "Navigate the unique challenges of family-owned enterprises and guide multi-generational wealth transfer strategies.",
    topics: [
      "Family business dynamics and governance structures",
      "Succession planning frameworks and implementation",
      "Conflict resolution in family enterprises",
      "Business valuation for family transitions",
      "Tax-efficient ownership transfer strategies",
      "Next-generation preparation and leadership development"
    ],
    duration: "28 hours"
  },
  {
    id: "module-3",
    title: "Module 3: Advanced Wealth Structuring & Estate Planning",
    type: "core",
    description: "Design sophisticated wealth structures for asset protection, tax efficiency, and multi-generational legacy preservation.",
    topics: [
      "Trust structures for HNWI (local and offshore)",
      "Foundation establishment and management",
      "Private trust companies and family businesses",
      "Cross-border estate planning considerations",
      "Asset protection strategies and structures",
      "Philanthropic planning and charitable giving vehicles"
    ],
    duration: "32 hours"
  },
  {
    id: "module-4",
    title: "Module 4: HNWI Investment & Portfolio Management",
    type: "core",
    description: "Construct and manage sophisticated investment portfolios tailored to ultra-high-net-worth client objectives.",
    topics: [
      "Alternative investments for HNWI portfolios",
      "Private equity and venture capital allocation",
      "Real estate investment strategies for wealthy families",
      "Art, collectibles, and passion investments",
      "Concentrated stock position management",
      "Tax-efficient portfolio optimization"
    ],
    duration: "28 hours"
  },
  {
    id: "module-5",
    title: "Module 5: Ethics, Compliance & Professional Standards",
    type: "core",
    description: "Navigate the ethical complexities and regulatory requirements of serving ultra-high-net-worth clients with integrity.",
    topics: [
      "Fiduciary duty in HNWI advisory relationships",
      "Conflicts of interest management",
      "Anti-money laundering (AML) considerations",
      "Know Your Customer (KYC) for complex structures",
      "Professional liability and risk management",
      "Ethical dilemmas in family advisory situations"
    ],
    duration: "20 hours"
  },
  {
    id: "module-6-gig",
    title: "Elective A: Gig Economy & Non-Traditional Income Planning",
    type: "elective",
    description: "Advise wealthy entrepreneurs and gig economy leaders on managing irregular income streams and building sustainable wealth.",
    topics: [
      "Financial planning for variable income professionals",
      "Tax strategies for self-employed high earners",
      "Retirement planning without employer benefits",
      "Risk management for entrepreneurs",
      "Business succession in gig economy ventures",
      "Wealth accumulation strategies for non-traditional careers"
    ],
    duration: "16 hours"
  },
  {
    id: "module-6-retirement",
    title: "Elective B: HNWI Retirement & Longevity Planning",
    type: "elective",
    description: "Design comprehensive retirement solutions for ultra-wealthy clients with complex income sources and legacy goals.",
    topics: [
      "Retirement income planning for HNWI",
      "Longevity risk management and planning",
      "Healthcare and long-term care for wealthy retirees",
      "Lifestyle maintenance in retirement",
      "Phased retirement strategies for business owners",
      "Legacy planning integrated with retirement goals"
    ],
    duration: "16 hours"
  }
];

export const scfpFAQs: SCFPFAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is SCFP-HNWI and who is it for?",
    answer: "The Specialist Certificate in Financial Planning - High Net Worth & Family-Owned Business (SCFP-HNWI) is an advanced certification for experienced financial advisors who want to specialize in serving ultra-high-net-worth individuals and family enterprises. It's designed for CFP® professionals or advisors with equivalent experience in wealth management."
  },
  {
    id: "faq-2",
    category: "Prerequisites",
    question: "Do I need CFP® certification to enroll?",
    answer: "Yes, CFP® certification is the recommended prerequisite. Alternatively, you may qualify with equivalent professional experience serving affluent clients (typically 5+ years in private banking, family business advisory, or wealth advisory) and relevant professional designations. Our admissions team will assess your eligibility on a case-by-case basis."
  },
  {
    id: "faq-3",
    category: "Program",
    question: "How long does the program take to complete?",
    answer: "The SCFP-HNWI program typically takes 12-15 months to complete. This includes 5 core modules, 1 elective module, capstone project, and final assessment. The flexible format allows you to balance your studies with your professional commitments."
  },
  {
    id: "faq-4",
    category: "Program",
    question: "What is the difference between the two electives?",
    answer: "Elective A (Gig Economy Planning) focuses on advising wealthy entrepreneurs and non-traditional high earners with variable income. Elective B (HNWI Retirement Planning) specializes in retirement and longevity planning for ultra-wealthy clients. Choose based on your target clientele and career focus."
  },
  {
    id: "faq-5",
    category: "Format",
    question: "Is this program available online or in-person?",
    answer: "The SCFP-HNWI uses a blended learning approach combining in-person masterclasses for core modules with e-learning for flexibility. In-person sessions allow for case study discussions, peer learning, and networking with other HNWI advisors. E-learning modules can be completed at your pace."
  },
  {
    id: "faq-6",
    category: "Certification",
    question: "What certifications will I receive upon completion?",
    answer: "Upon successful completion, you will earn two credentials: (1) SCFP-HNWI™ designation from Financial Perspectives, and (2) IBF-Advanced Certification (Level II) from the Institute of Banking & Finance Singapore. Both are recognized markers of advanced expertise in wealth advisory."
  },
  {
    id: "faq-7",
    category: "Career",
    question: "How will this certification benefit my career?",
    answer: "SCFP-HNWI positions you as a specialist in high-net-worth advisory, allowing you to command premium fees, serve more sophisticated clients, and differentiate yourself in Singapore's competitive wealth management market. Graduates typically see increased client acquisition, higher revenue per client, and advancement to senior advisory roles."
  },
  {
    id: "faq-8",
    category: "Investment",
    question: "Is IBF funding available for this program?",
    answer: "Yes, eligible Singapore Citizens and Permanent Residents working in financial institutions may qualify for IBF-STS funding support. As an IBF-Advanced Level II program, funding levels may differ from standard courses. Contact our course advisors for specific funding eligibility and application assistance."
  },
  {
    id: "faq-9",
    category: "Assessment",
    question: "How is the program assessed?",
    answer: "Assessment includes module-based examinations, case study analysis, and a final capstone project where you develop a comprehensive wealth advisory plan for a simulated HNWI client. The capstone integrates learning from all modules and demonstrates your mastery of advanced advisory concepts."
  },
  {
    id: "faq-10",
    category: "General",
    question: "When does the next cohort start?",
    answer: "The inaugural SCFP-HNWI cohort launches in Q1 2026. Limited seats are available for this exclusive program. We recommend registering your interest early to secure your place and receive updates on the exact start date and preview webinar schedule."
  }
];

export const scfpPricing: SCFPPricing[] = [
  {
    component: "Full Program (5 Core + 1 Elective)",
    price: "$18,500",
    ibfFunding: "Up to 70%",
    netPrice: "From $5,550",
    description: "Complete SCFP-HNWI certification with dual credentials"
  },
  {
    component: "Core Modules Only (5 modules)",
    price: "$15,000",
    ibfFunding: "Up to 70%",
    netPrice: "From $4,500",
    description: "Core curriculum without elective specialization"
  },
  {
    component: "Individual Module",
    price: "$2,500 - $3,200",
    ibfFunding: "Up to 70%",
    netPrice: "From $750",
    description: "Pay-as-you-go option per module"
  }
];

export const whySCFPBenefits = [
  {
    title: "Serve Singapore's Wealthiest",
    description: "Position yourself to advise ultra-high-net-worth individuals, family businesses, and business dynasties with confidence and expertise.",
    icon: "users"
  },
  {
    title: "Command Premium Fees",
    description: "HNWI advisory commands significantly higher compensation. Specialists earn 40-60% more than generalist advisors.",
    icon: "trending-up"
  },
  {
    title: "Exclusive Positioning",
    description: "Join an elite group of certified HNWI specialists. Stand out in Singapore's competitive wealth management landscape.",
    icon: "award"
  },
  {
    title: "Family Business Opportunities",
    description: "Gain expertise to work with family business owners, and private wealth advisory boutiques.",
    icon: "building"
  },
  {
    title: "Complex Problem Solving",
    description: "Master sophisticated strategies for wealth structuring, succession planning, and multi-generational advisory that few advisors can offer.",
    icon: "lightbulb"
  },
  {
    title: "Network with Elite Peers",
    description: "Learn alongside and build relationships with Singapore's top wealth advisors serving the most sophisticated clients.",
    icon: "users-round"
  }
];

export const targetAudience = [
  {
    title: "Financial Planners",
    description: "Licensed representatives looking to differentiate themselves amongst competitors as a specialist certified professional.",
    criteria: ["Licensed Financial Planner", "Seeking competitive differentiation", "Desire for specialization"]
  },
  {
    title: "Insurance Agents",
    description: "Agents seeking highly rewarding career opportunities in the HNWIs and Family-Owned Business segment.",
    criteria: ["Licensed Insurance Agent", "Focus on HNWI segment", "Career growth mindset"]
  },
  {
    title: "Bancassurance Specialists",
    description: "Existing practitioners looking to advance their career opportunities and find a significant boost to their career breakthrough.",
    criteria: ["Bancassurance professional", "Seeking career advancement", "Ready for breakthrough"]
  }
];

export const programDifferentiators = [
  "Specialised HNWI program contextualized for financial advisers",
  "Dual certification: HNWI and Family-Owned Businesses™ Certification + IBF-Advanced (Level II) Certification",
  "Learn from practitioners with actual experience planning for HNWI",
  "Real-world case studies from actual family business clients",
  "Small cohort sizes for personalized attention and networking",
  "Access to exclusive HNWI advisor community and alumni events"
];

export const enrollmentProcess = [
  {
    step: 1,
    title: "Register Interest",
    description: "Complete the expression of interest form. Limited seats available for inaugural cohort."
  },
  {
    step: 2,
    title: "Qualification Review",
    description: "Our admissions team reviews your CFP® status and professional experience to confirm eligibility."
  },
  {
    step: 3,
    title: "Preview Webinar",
    description: "Attend a free program preview to meet the faculty and understand the curriculum in detail."
  },
  {
    step: 4,
    title: "Application & Interview",
    description: "Submit formal application with CV and participate in brief interview with program director."
  },
  {
    step: 5,
    title: "Enrollment Confirmation",
    description: "Receive admission offer, complete enrollment paperwork, and arrange payment or funding."
  },
  {
    step: 6,
    title: "Begin Your Journey",
    description: "Attend orientation, receive materials, and start Module 1 with your cohort."
  }
];

