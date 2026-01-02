// CPD Courses Content Library

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline?: string;
  description: string;
  challenge: string;
  solution: string;
  duration: string;
  cpdHours: string;
  format: string;
  assessment?: string;
  designation?: string;
  color: {
    primary: string;
    gradient: string;
    hover: string;
  };
  perfectFor: string[];
  objectives: string[];
  whatYouLearn: {
    category: string;
    topics: string[];
  }[];
  outcomes: string[];
  whoShouldAttend: {
    title: string;
    description: string;
  }[];
  trainer?: {
    name: string;
    credentials: string;
    bio: string;
    experience: string;
    achievements: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  pricing: {
    contactForPricing: boolean;
    baseFee?: string;
    fundingAvailable: boolean;
    fundingDetails?: string;
    subsidyPercentage?: string;
    subsidyCap?: string;
    fundingDeadline?: string;
  };
  upcomingDates?: {
    date: string;
    time: string;
    location: string;
    status?: string;
  }[];
}

export const cpdCourses: Course[] = [
  {
    id: "mfa",
    slug: "master-fund-advisor",
    title: "Master Fund Adviser",
    subtitle: "Navigate Volatile Markets with Confidence",
    tagline: "Never Has The Master Fund Adviser Course Been So Critical For Financial Advisers",
    description: "Master the strategies to help clients navigate volatile markets, manage behavioral biases, and build resilient portfolios designed for today's challenging environment. This comprehensive 2-day program equips you with the tools professional fund advisers use across different market cycles.",
    challenge: "Today, a key risk indicator warrants serious attention. With the S&P 500's P/E ratio above 29 and US equities dominating the MSCI World Index at 72.5%, traditional global diversification may not be enough to shield investors from a major drawdown.",
    solution: "Become the fund expert your clients need. Master fund evaluation, portfolio construction, behavioral finance, and risk-adjusted performance analysis to deliver confident recommendations in any market environment.",
    duration: "14 hours over 2 days",
    cpdHours: "14 Supplementary (Non-Core) CPD Hours",
    format: "In-Person Workshop",
    assessment: "1-hour Multiple Choice Question (MCQ) Assessment",
    designation: "Master Fund Adviser (MFA) Designation",
    color: {
      primary: "#6B4C9A",
      gradient: "from-purple-500 to-pink-600",
      hover: "hover:bg-purple-700"
    },
    perfectFor: [
      "Financial Planning Professionals",
      "Bank Relationship Managers",
      "Bancassurance Specialists",
      "Wealth Advisory Professionals",
      "Investment Consultants"
    ],
    objectives: [
      "Identifying and mitigating clients' behavioral and emotional biases during periods of market extremes and elevated valuations",
      "Applying macro-economic indicators, business cycles, and price signals to guide investment decisions in overvalued market conditions",
      "Structuring portfolios using modern tools such as collective investments, core-satellite models, and flexible allocation strategies",
      "Enhancing client confidence through clear investment frameworks driven by market data and emotionally intelligent conversations"
    ],
    whatYouLearn: [
      {
        category: "Behavioural Finance & Client Psychology",
        topics: [
          "Behavioural and emotional biases in investing during market extremes",
          "Investor personality types and their responses to overvalued markets",
          "Identifying biases in real-time conversations about portfolio risk",
          "Tools for managing client emotions during volatile periods (IPS, reframing, coaching)"
        ]
      },
      {
        category: "Macroeconomic Analysis for Investment Planning",
        topics: [
          "Understanding business and credit cycles in extended bull markets",
          "Key macroeconomic indicators and market timing for elevated valuations",
          "Reading and interpreting yield curves and LEI data for risk assessment",
          "Secular bull and bear markets: implications for today's conditions"
        ]
      },
      {
        category: "Price-Driven Strategies & Portfolio Construction",
        topics: [
          "Using technical analysis for timing and allocation in concentrated markets",
          "Flexible allocation, core-satellite, and fund portfolio strategies",
          "Asset class positioning based on market regimes and concentration risks",
          "Currency strategies and volatility management for global diversification"
        ]
      }
    ],
    outcomes: [
      "Understand how behavioural biases affect investment decisions during market extremes",
      "Apply concepts of bounded rationality to detect and correct client misjudgements",
      "Use macroeconomic indicators (yield curve, PMI, LEI) to inform asset allocation",
      "Identify and respond to bull and bear markets using technical price trends",
      "Build diversified portfolios using unit trusts, ILP sub-funds and ETFs",
      "Employ behavioural coaching tools to help clients navigate volatile periods",
      "Strengthen client trust through disciplined, logic-based investment advisory"
    ],
    whoShouldAttend: [
      {
        title: "Financial Planning Professionals",
        description: "Licensed representatives working in financial advisory who need to navigate elevated market valuations"
      },
      {
        title: "Bank Relationship Managers",
        description: "Banking professionals managing client portfolios and investment recommendations"
      },
      {
        title: "Bancassurance Specialists",
        description: "Insurance professionals advising on investment-linked products and fund selection"
      },
      {
        title: "Wealth Advisory Professionals",
        description: "Advisers serving HNW clients requiring sophisticated portfolio strategies"
      }
    ],
    trainer: {
      name: "William Cai",
      credentials: "MSc. FINANCE, CFP®, CHFC®, CMFC®",
      bio: "A seasoned wealth manager with over 31 years of experience, William provides sophisticated portfolio management and advisory services to high-net-worth individuals. He specializes in constructing multi-asset portfolios with absolute return strategies, engineered to deliver stable and consistent performance.",
      experience: "31+ years in wealth management and portfolio advisory",
      achievements: [
        "Author of bestselling book: How To Be A Successful Investor",
        "Featured in The Asian Wall Street Journal, The Straits Times, and Channel News Asia",
        "First-class Master's degree in Finance from the National University of Ireland, Dublin",
        "Finance lecturer at a local university",
        "CFP®, ChFC®, and CMFC® certified professional"
      ]
    },
    faqs: [
      {
        question: "What makes this course especially relevant now?",
        answer: "With the S&P 500 P/E ratio above 29 and US equities representing 72.5% of the MSCI World Index, historical data shows significant risk of poor returns in the next decade. This course equips you to protect clients' assets and strengthen relationships during challenging market conditions."
      },
      {
        question: "Who should attend this course?",
        answer: "This course is designed for licensed financial advisers, bank relationship managers, bancassurance specialists, and wealth advisory professionals who need to navigate today's elevated market valuations and concentration risks."
      },
      {
        question: "What certification will I receive?",
        answer: "Upon successful completion of the assessment, you will be awarded the Master Fund Adviser (MFA) designation, demonstrating your commitment to professional excellence."
      },
      {
        question: "Is funding available for this course?",
        answer: "Yes! This course is accredited under the Skills Framework for Financial Services and eligible for IBF-STS funding. Eligible candidates can receive up to 70% course fee subsidy, subject to a cap of S$3,000 per candidate, and all eligibility criteria being met."
      },
      {
        question: "How is the course delivered?",
        answer: "This 2-day program is delivered through short structured lectures, case studies, and group discussions for maximum practical application."
      },
      {
        question: "What CPD hours will I earn?",
        answer: "You will earn 14 Supplementary (Non-Core) CPD Hours upon completion."
      }
    ],
    pricing: {
      contactForPricing: true,
      fundingAvailable: true,
      fundingDetails: "This course has been accredited under the Skills Framework for Financial Services and is eligible for funding under the IBF Standards Training Scheme (IBF-STS), subject to all eligibility criteria being met.",
      subsidyPercentage: "Up to 70%",
      subsidyCap: "S$3,000 per candidate per course",
      fundingDeadline: "Funding period till 15-06-2030"
    },
    upcomingDates: [
      {
        date: "10 & 12 December 2025",
        time: "9:30 AM – 5:30 PM",
        location: "High Street Centre",
        status: "Limited Seats Available"
      }
    ]
  },
  {
    id: "aum",
    slug: "aum-growth",
    title: "Strategies to Supercharge AUM Growth",
    subtitle: "Scale Your Practice with Proven Growth Strategies",
    description: "Every wealth manager wants more assets under management. Few know the proven strategies that actually work. Master client acquisition, retention tactics, and wallet share growth strategies that top performers use to scale their practice.",
    challenge: "Every wealth manager wants more assets under management. Few know the proven strategies that actually work. Growing AUM requires systematic approaches to client acquisition, deepening relationships, and increasing wallet share.",
    solution: "Master client acquisition, retention tactics, and wallet share growth strategies that top performers use to scale their practice. Real frameworks. Measurable results.",
    duration: "1-2 Days",
    cpdHours: "8 CPD Hours",
    format: "In-Person Workshop",
    color: {
      primary: "#10B981",
      gradient: "from-green-500 to-emerald-600",
      hover: "hover:bg-green-700"
    },
    perfectFor: [
      "Wealth Managers",
      "Relationship Managers",
      "Financial Advisors",
      "Bank Private Banking Officers",
      "Independent Financial Advisers"
    ],
    objectives: [
      "Master proven client acquisition strategies that top performers use",
      "Develop systematic approaches to deepen existing client relationships",
      "Implement wallet share growth tactics to maximize client lifetime value",
      "Create referral systems that generate consistent new business"
    ],
    whatYouLearn: [
      {
        category: "Client Acquisition Strategies",
        topics: [
          "Identifying and targeting high-potential prospects",
          "Creating compelling value propositions",
          "Leveraging digital and traditional marketing channels",
          "Building a systematic prospecting process"
        ]
      },
      {
        category: "Retention & Deepening Relationships",
        topics: [
          "Client engagement frameworks that build loyalty",
          "Conducting effective portfolio reviews",
          "Cross-selling and upselling strategies",
          "Managing client expectations and communication"
        ]
      },
      {
        category: "Wallet Share Growth Tactics",
        topics: [
          "Identifying additional client needs and opportunities",
          "Positioning additional services effectively",
          "Overcoming objections to consolidation",
          "Measuring and tracking wallet share metrics"
        ]
      },
      {
        category: "Referral Generation Systems",
        topics: [
          "Creating referral-worthy client experiences",
          "Asking for referrals effectively",
          "Building strategic alliance networks",
          "Leveraging client testimonials and social proof"
        ]
      }
    ],
    outcomes: [
      "Implement a systematic client acquisition process",
      "Increase assets per client through deeper relationships",
      "Generate consistent referrals from satisfied clients",
      "Develop a scalable practice growth plan",
      "Measure and optimize key growth metrics"
    ],
    whoShouldAttend: [
      {
        title: "Wealth Managers",
        description: "Professionals managing client portfolios who want to grow their AUM systematically"
      },
      {
        title: "Relationship Managers",
        description: "Bank RMs looking to deepen client relationships and increase wallet share"
      },
      {
        title: "Financial Advisors",
        description: "Advisers seeking proven strategies to scale their advisory practice"
      }
    ],
    faqs: [
      {
        question: "What makes this course different from other sales training?",
        answer: "This course focuses specifically on wealth management and AUM growth, not generic sales. You'll learn strategies proven to work in the financial advisory context with real frameworks and measurable results."
      },
      {
        question: "Is this course suitable for new advisers?",
        answer: "Yes! The course covers both foundational client acquisition strategies and advanced wallet share growth tactics, making it valuable for advisers at all career stages."
      },
      {
        question: "Will I get practical tools I can use immediately?",
        answer: "Absolutely. You'll receive frameworks, templates, and action plans you can implement in your practice right away."
      },
      {
        question: "Is IBF funding available?",
        answer: "Yes, this course is IBF-FTS approved and eligible for funding support."
      }
    ],
    pricing: {
      contactForPricing: true,
      fundingAvailable: true,
      fundingDetails: "This course is IBF-FTS approved and eligible for funding support."
    }
  },
  {
    id: "ilp",
    slug: "ilp-sales-masterclass",
    title: "ILP Sales Masterclass",
    subtitle: "Master Investment-Linked Policy Advisory",
    description: "Investment-linked policies are complex. Selling them compliantly while meeting client needs requires expertise. From product mechanics to suitability assessment to objection handling—master every aspect of ILP advisory with confidence and compliance.",
    challenge: "Investment-linked policies are complex. Selling them compliantly while meeting client needs requires expertise. Advisers must balance product features, regulatory requirements, and client understanding.",
    solution: "From product mechanics to suitability assessment to objection handling—master every aspect of ILP advisory with confidence and compliance.",
    duration: "1-2 Days",
    cpdHours: "6 CPD Hours",
    format: "In-Person Workshop",
    color: {
      primary: "#0891B2",
      gradient: "from-blue-500 to-cyan-600",
      hover: "hover:bg-cyan-700"
    },
    perfectFor: [
      "Insurance Advisors",
      "Financial Consultants",
      "Bank Relationship Managers",
      "Wealth Advisors",
      "Bancassurance Representatives"
    ],
    objectives: [
      "Master ILP product mechanics and structures",
      "Conduct compliant suitability assessments",
      "Handle objections and concerns effectively",
      "Position ILPs appropriately in client portfolios"
    ],
    whatYouLearn: [
      {
        category: "ILP Product Mechanics",
        topics: [
          "Understanding ILP structures and components",
          "Fund selection and switching strategies",
          "Fees, charges, and their impact on returns",
          "Regular premium vs. single premium considerations"
        ]
      },
      {
        category: "Suitability & Compliance",
        topics: [
          "Conducting thorough fact-finding",
          "Assessing risk profile and investment objectives",
          "Documenting suitability rationale",
          "Meeting regulatory disclosure requirements"
        ]
      },
      {
        category: "Client Communication",
        topics: [
          "Explaining ILP features clearly",
          "Setting realistic performance expectations",
          "Discussing risks and risk management",
          "Comparing ILPs with alternative investment options"
        ]
      },
      {
        category: "Objection Handling",
        topics: [
          "Addressing concerns about fees and charges",
          "Responding to questions about past performance",
          "Handling surrender and switching queries",
          "Building confidence in long-term investment"
        ]
      }
    ],
    outcomes: [
      "Explain ILP mechanics and features with confidence",
      "Conduct compliant suitability assessments",
      "Position ILPs appropriately within financial plans",
      "Handle client objections effectively",
      "Increase ILP sales while maintaining compliance"
    ],
    whoShouldAttend: [
      {
        title: "Insurance Advisors",
        description: "Representatives who want to enhance their ILP advisory capabilities"
      },
      {
        title: "Financial Consultants",
        description: "Advisers looking to add ILPs to their product toolkit"
      },
      {
        title: "Bank Relationship Managers",
        description: "Bank RMs who advise clients on investment-linked products"
      }
    ],
    faqs: [
      {
        question: "Is this course suitable for new insurance representatives?",
        answer: "Yes! The course covers ILP fundamentals through to advanced advisory techniques, making it valuable for both new and experienced representatives."
      },
      {
        question: "Will this course help me meet compliance requirements?",
        answer: "Absolutely. We cover suitability assessment, disclosure requirements, and documentation standards to ensure your ILP advisory is fully compliant."
      },
      {
        question: "What about handling difficult client questions?",
        answer: "The course includes extensive objection handling training, covering the most common client concerns and questions about ILPs."
      },
      {
        question: "Can I get IBF funding for this course?",
        answer: "Yes, this course is IBF-FTS approved and eligible for funding support."
      }
    ],
    pricing: {
      contactForPricing: true,
      fundingAvailable: true,
      fundingDetails: "This course is IBF-FTS approved and eligible for funding support."
    }
  },
  {
    id: "help",
    slug: "estate-legacy-planning",
    title: "Holistic Estate & Legacy Planning (HELP)",
    subtitle: "Master Sophisticated Estate Planning for HNW Clients",
    description: "High-net-worth clients need sophisticated estate planning. Master the full spectrum of estate planning—from wills and trusts to philanthropy and legacy preservation. Serve your wealthy clients at the highest level.",
    challenge: "High-net-worth clients need sophisticated estate planning. Can you guide them through trusts, succession, and multi-generational wealth transfer? Estate planning is complex and requires specialized knowledge.",
    solution: "Master the full spectrum of estate planning—from wills and trusts to philanthropy and legacy preservation. Serve your wealthy clients at the highest level.",
    duration: "Workshop Format",
    cpdHours: "10 CPD Hours",
    format: "Case Study-Based Learning",
    color: {
      primary: "#DC2626",
      gradient: "from-orange-500 to-red-600",
      hover: "hover:bg-red-700"
    },
    perfectFor: [
      "Advisors Serving HNWIs",
      "Family Business Professionals",
      "Wealth Planners",
      "Private Bankers",
      "Senior Financial Advisors"
    ],
    objectives: [
      "Master estate planning tools and structures",
      "Design comprehensive legacy plans for HNW families",
      "Navigate trust structures and succession planning",
      "Integrate philanthropy into estate planning"
    ],
    whatYouLearn: [
      {
        category: "Estate Planning Fundamentals",
        topics: [
          "Wills and probate considerations",
          "Lasting Power of Attorney (LPA)",
          "CPF nomination strategies",
          "Estate duty and tax considerations"
        ]
      },
      {
        category: "Trust Structures",
        topics: [
          "Types of trusts and their applications",
          "Setting up and managing trusts",
          "Trustee selection and responsibilities",
          "Trust taxation and reporting"
        ]
      },
      {
        category: "Succession Planning",
        topics: [
          "Family business succession strategies",
          "Multi-generational wealth transfer",
          "Preparing next generation for wealth",
          "Governance structures for family wealth"
        ]
      },
      {
        category: "Philanthropy & Legacy",
        topics: [
          "Charitable giving structures",
          "Creating lasting family legacies",
          "Values-based wealth transfer",
          "Balancing family and charitable objectives"
        ]
      }
    ],
    outcomes: [
      "Design comprehensive estate plans for HNW clients",
      "Navigate complex trust and succession structures",
      "Integrate philanthropy into legacy planning",
      "Facilitate family wealth conversations",
      "Position yourself as a holistic wealth advisor"
    ],
    whoShouldAttend: [
      {
        title: "Advisors Serving HNWIs",
        description: "Financial advisers working with high-net-worth and ultra-high-net-worth clients"
      },
      {
        title: "Family Business Professionals",
        description: "Professionals managing family business operations and multi-generational wealth"
      },
      {
        title: "Wealth Planners",
        description: "Advisers who want to offer comprehensive estate and legacy planning services"
      }
    ],
    faqs: [
      {
        question: "Do I need to be working with HNW clients to benefit from this course?",
        answer: "While the course focuses on sophisticated estate planning, the principles apply to clients at all wealth levels. However, it's especially valuable if you serve or aspire to serve HNW clients."
      },
      {
        question: "Will this course cover Singapore-specific estate planning?",
        answer: "Yes, the course is tailored to Singapore's legal and regulatory framework, including CPF nomination, LPA, and local trust structures."
      },
      {
        question: "Is this course suitable for insurance advisers?",
        answer: "Absolutely. Estate planning is integral to insurance planning, and this course will enhance your ability to serve clients holistically."
      },
      {
        question: "What format is the workshop?",
        answer: "The course uses case study-based learning, allowing you to apply concepts to realistic scenarios and learn from peer discussions."
      }
    ],
    pricing: {
      contactForPricing: true,
      fundingAvailable: false
    }
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return cpdCourses.find(course => course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return cpdCourses.map(course => course.slug);
}

