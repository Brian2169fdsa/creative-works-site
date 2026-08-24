export interface ServiceProvideCard {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  title: string;
  desc: string;
}

export interface ServiceBenefitItem {
  title: string;
  desc: string;
}

export interface ServiceSection {
  type: "callout" | "cards" | "checklist" | "architecture";
  tone?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  lead?: string;
  points?: string[];
  image?: string;
  imagePosition?: string;
  items?: string[];
  cards?: ServiceProvideCard[];
  columns?: number;
  nodes?: { icon: string; label: string }[];
  placeholder?: string;
  placeholderIcon?: string;
  align?: string;
}

export interface ServiceConfig {
  slug: string;
  icon: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroPlaceholder?: string;
  heroImage?: string;
  heroImagePosition?: string;
  href: string;
  tagline: string;
  short: string;
  problem?: {
    eyebrow?: string;
    title: string;
    lead?: string;
    items: string[];
    columns?: number;
    align?: string;
  };
  provide?: {
    eyebrow?: string;
    title: string;
    lead?: string;
    cards: ServiceProvideCard[];
    columns?: number;
  };
  features?: {
    eyebrow?: string;
    title: string;
    lead?: string;
    items: { title: string; desc: string }[];
    columns?: number;
  };
  sections?: ServiceSection[];
  process?: {
    eyebrow?: string;
    title: string;
    lead?: string;
    steps: ServiceProcessStep[];
  };
  benefits?: {
    eyebrow?: string;
    title: string;
    lead?: string;
    items: ServiceBenefitItem[];
    columns?: number;
  };
  related?: string[];
  cta?: {
    title: string;
    body?: string;
    label?: string;
    tone?: string;
  };
}

export const SERVICES: ServiceConfig[] = [
  {
    slug: "behavioral-health-billing",
    icon: "Receipt",
    eyebrow: "Behavioral Health Billing",
    title: "Get paid for every service.",
    lead: "Behavioral health billing done differently: the billing team that feels like your team. We work with your teams as part of your team, bill inside your EMR, report weekly, and answer when you call, backed by the full-service partner no billing-only vendor can match.",
    heroImage: "/images/billing-hero.png",
    href: "/services/behavioral-health-billing",
    tagline: "The billing team that feels like your team.",
    short:
      "Full revenue-cycle management inside your EMR, from same-day VOBs and utilization review to clean claims, denials, appeals, and weekly billed-and-collected reporting.",
    problem: {
      title: "Billing-only vendors leave revenue behind.",
      lead: "When billing lives outside your team and outside your systems, revenue quietly slips away, in slow VOBs, unbilled days, unworked denials, and reports you never see.",
      items: [
        "VOBs too slow for admissions to make confident decisions",
        "Authorized, medically necessary days lost without utilization review defense",
        "Claims sitting unbilled while cash flow tightens",
        "Denials written off instead of appealed and won",
        "Documentation gaps that become denials after the fact",
        "Three-day silences when you call your billing vendor",
      ],
      columns: 2,
    },
    provide: {
      eyebrow: "The Full Revenue Cycle, Managed",
      title: "Every stage of your revenue cycle, handled by your team.",
      lead: "We work with your teams as part of your team, inside your systems, across the entire revenue cycle.",
      columns: 4,
      cards: [
        {
          icon: "ClipboardCheck",
          title: "Verification of Benefits",
          desc: "Same-day VOBs your admissions team can trust.",
        },
        {
          icon: "ShieldCheck",
          title: "Utilization Review",
          desc: "Defend every authorized, medically necessary day.",
        },
        {
          icon: "Receipt",
          title: "Billing & Collections",
          desc: "Clean claims, disciplined follow-up, predictable cash.",
        },
        {
          icon: "Scale",
          title: "Denials & Appeals",
          desc: "Clinically grounded appeals that win.",
        },
        {
          icon: "Handshake",
          title: "Reimbursement Negotiations",
          desc: "Single-case agreements & fair-rate advocacy.",
        },
        {
          icon: "Search",
          title: "RCA, Training & Consulting",
          desc: "Find the leaks, prevent denials, plan growth.",
        },
        {
          icon: "FileSearch",
          title: "Documentation Compliance Review",
          desc: "We audit clinical documentation against payer and medical-necessity rules before it becomes a denial.",
        },
      ],
    },
    sections: [
      {
        type: "callout",
        tone: "navy",
        eyebrow: "Part of Your Team",
        title: "We work in your systems, as part of your team.",
        body: "No black-box billing portal, no data held hostage. We bill inside your EMR, Sunwave and other behavioral health platforms, so you see every claim, every denial, and every dollar collected in your own systems, in real time.",
        points: [
          "Inside your systems: we bill in your EMR, Sunwave & other BH platforms",
          "Daily billing, weekly clarity: claims out fast, reporting on billed & collected",
          "Always reachable: direct access, no three-day silences",
        ],
        image: "/images/billing-dashboard.png",
      },
      {
        type: "checklist",
        tone: "white",
        eyebrow: "Included in Every Partnership",
        title: "Everything your revenue cycle needs, included.",
        lead: "Full revenue-cycle support from day one, whatever your size or stage.",
        items: [
          "Verification of benefits & authorizations",
          "Utilization review & concurrent defense",
          "Claims submission & collections follow-up",
          "Denials management & multi-level appeals",
          "Documentation compliance review",
          "We work inside your EMR, your data stays yours",
          "Weekly billed & collected reporting",
          "Direct access to your billing team",
        ],
        columns: 2,
      },
      {
        type: "callout",
        tone: "cloud",
        eyebrow: "Partnership Pricing",
        title: "Specialized pricing that grows with you.",
        body: "Every organization gets specialized pricing built around its census and stage of growth, so what you pay always tracks what we recover. No setup fees, no long-term lock-in, and a partnership built on transparency: you see every claim, every denial, and every dollar collected, in your own systems, in real time.",
        points: [
          "Specialized pricing tailored to your organization",
          "No setup fees, no long-term lock-in",
          "Full revenue-cycle support from day one",
        ],
        image: "/images/billing-growth.png",
      },
    ],
    process: {
      eyebrow: "How It Works",
      title: "From assessment to predictable cash.",
      steps: [
        {
          title: "Free Revenue-Cycle Assessment",
          desc: "We find the revenue you're leaving behind, unbilled, denied, or underpaid.",
        },
        {
          title: "Onboard Inside Your EMR",
          desc: "We set up in your systems, Sunwave and other BH platforms, your data stays yours.",
        },
        {
          title: "Daily Billing",
          desc: "Clean claims out fast, with disciplined collections follow-up.",
        },
        {
          title: "Weekly Reporting",
          desc: "Clear reporting on billed and collected, every week.",
        },
        {
          title: "Defend and Improve",
          desc: "Denials appealed, rates negotiated, and leaks closed before they repeat.",
        },
      ],
    },
    benefits: {
      title: "What billing done differently gives you.",
      items: [
        {
          title: "Predictable cash",
          desc: "Clean claims and disciplined follow-up keep revenue flowing.",
        },
        {
          title: "Every day defended",
          desc: "Utilization review that protects authorized, medically necessary care.",
        },
        {
          title: "Denials that get won",
          desc: "Clinically grounded appeals instead of write-offs.",
        },
        {
          title: "Real transparency",
          desc: "You see every claim and every dollar in your own systems.",
        },
        {
          title: "A team that answers",
          desc: "Direct access to your billing team, no three-day silences.",
        },
        {
          title: "A full-service partner",
          desc: "Backed by marketing, IT, staffing, and operations support no billing-only vendor can match.",
        },
      ],
    },
    related: ["bhp-oversight", "business-process-services", "operational-support"],
    cta: {
      title: "Find the revenue you're leaving behind.",
      body: "Start with a free revenue-cycle assessment and see exactly what is going unbilled, denied, or underpaid.",
    },
  },
  {
    slug: "marketing",
    icon: "Megaphone",
    eyebrow: "Marketing",
    title: "Marketing that reaches your community and grows your mission.",
    lead: "Behavioral health organizations do vital work that most communities do not fully understand. We help you build awareness, connect with the people who need you, and create marketing that genuinely reflects your mission.",
    heroImage: "/images/marketing-hero.png",
    href: "/services/marketing",
    tagline: "Reach more people. Grow your mission.",
    short:
      "Strategic marketing that builds awareness, engages audiences, and advances your mission.",
    problem: {
      title: "Marketing for behavioral health is different, and harder.",
      lead: "Generic marketing approaches do not work for mission-driven organizations. The stakes are higher, the audiences are more complex, and the messaging has to be both clear and compassionate.",
      items: [
        "Inconsistent messaging across channels",
        "No clear referral partner strategy",
        "Website and materials that do not reflect the quality of care",
        "Limited internal capacity for ongoing marketing",
        "Social media with low engagement and no strategy",
        "Unclear brand identity in a competitive market",
      ],
    },
    provide: {
      title: "What we build with you",
      eyebrow: "What We Provide",
      lead: "A marketing foundation that is consistent, compassionate, and built to grow.",
      columns: 4,
      cards: [
        {
          icon: "Palette",
          title: "Brand Messaging",
          desc: "Clear, consistent messaging that reflects your mission and audience.",
        },
        {
          icon: "Users",
          title: "Referral Partner Materials",
          desc: "Collateral and campaigns that keep your organization top-of-mind.",
        },
        {
          icon: "Share2",
          title: "Social Media Strategy",
          desc: "Consistent, mission-aligned content that builds community trust.",
        },
        {
          icon: "Globe",
          title: "Website Support",
          desc: "Content and structure updates that reflect your real work.",
        },
        {
          icon: "Mail",
          title: "Email Campaigns",
          desc: "Newsletters and outreach that keep your audience engaged.",
        },
        {
          icon: "BarChart3",
          title: "Digital Advertising",
          desc: "Targeted ads that reach the people looking for your services.",
        },
        {
          icon: "FileText",
          title: "Program Launch Support",
          desc: "Campaigns and materials for new programs and services.",
        },
        {
          icon: "Search",
          title: "SEO Foundations",
          desc: "Basics that help the right people find you online.",
        },
      ],
    },
    sections: [
      {
        type: "callout",
        tone: "navy",
        eyebrow: "Mission-First Marketing",
        title: "Marketing that respects the people you serve.",
        body: "Behavioral health marketing requires a different kind of care. We approach every campaign with sensitivity to the communities you serve, creating materials that are honest, accessible, and genuinely helpful, not just promotional.",
        points: [
          "Messaging designed around your specific population",
          "Compassionate, jargon-free communications",
          "Materials that build trust with referral partners and community",
        ],
        placeholder: "Marketing materials, photo placeholder",
        placeholderIcon: "Megaphone",
        image: "/images/marketing-secondary.png",
        imagePosition: "center center",
      },
    ],
    process: {
      title: "How we build your marketing foundation.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Discovery",
          desc: "We learn your audience, mission, competitive landscape, and goals.",
        },
        {
          title: "Strategy",
          desc: "We map out a clear, prioritized marketing approach for your organization.",
        },
        {
          title: "Build",
          desc: "We create the materials, campaigns, and content your strategy needs.",
        },
        {
          title: "Launch",
          desc: "We roll out campaigns with clear goals and tracking in place.",
        },
        {
          title: "Sustain",
          desc: "We help you maintain momentum with ongoing support and guidance.",
        },
      ],
    },
    benefits: {
      title: "What consistent marketing gives your organization.",
      items: [
        {
          title: "Stronger community awareness",
          desc: "More people know who you are and what you offer.",
        },
        {
          title: "Better referral relationships",
          desc: "Partners reach out because they remember you.",
        },
        {
          title: "Professional brand presence",
          desc: "Materials that reflect the quality of your care.",
        },
        {
          title: "More consistent messaging",
          desc: "Everyone on your team communicates the same story.",
        },
        {
          title: "Higher program enrollment",
          desc: "Marketing that connects people to the help they need.",
        },
        {
          title: "Internal capacity relief",
          desc: "Your team focuses on care while we handle outreach.",
        },
      ],
    },
    related: ["operational-support", "consulting", "sharepoint-setup"],
    cta: {
      title: "Ready to reach more people?",
      body: "Schedule a consultation and we will map out a marketing approach that fits your mission and your capacity.",
    },
  },
  {
    slug: "sharepoint-setup",
    icon: "FolderCog",
    eyebrow: "SharePoint Setup",
    title: "SharePoint, organized around how your team actually works.",
    lead: "A well-built SharePoint portal turns document chaos into a system everyone can use. We design, configure, and launch portals that make internal collaboration easier and information actually findable.",
    heroPlaceholder: "SharePoint portal, screenshot placeholder",
    heroImage: "/images/sharepoint-hero2.png",
    heroImagePosition: "left center",
    href: "/services/sharepoint-setup",
    tagline: "Smarter systems. Stronger collaboration.",
    short:
      "Custom portals and workflows that improve collaboration and streamline operations.",
    problem: {
      title: "When documents are scattered, everyone loses time.",
      lead: "Most organizations start with email threads and shared drives. As you grow, the result is a patchwork that wastes staff hours and creates real compliance risk.",
      items: [
        "Documents scattered across email, drives, and desktops",
        "No clear version control or policy management",
        "Staff cannot find forms, policies, or procedures",
        "Onboarding takes too long because nothing is organized",
        "No department-level structure or access controls",
        "Migration from old systems feels overwhelming",
      ],
    },
    provide: {
      title: "What we build",
      eyebrow: "What We Build",
      lead: "A SharePoint environment your team will actually use.",
      columns: 4,
      cards: [
        {
          icon: "LayoutDashboard",
          title: "Intranet Portals",
          desc: "A home base for your organization, branded and organized.",
        },
        {
          icon: "FolderOpen",
          title: "Document Libraries",
          desc: "Organized libraries with clear naming and structure.",
        },
        {
          icon: "Shield",
          title: "Permissions Setup",
          desc: "The right access for every role and department.",
        },
        {
          icon: "Workflow",
          title: "Workflow Automation",
          desc: "Approval flows and automations using Power Automate.",
        },
        {
          icon: "ArrowUpCircle",
          title: "Migration",
          desc: "Move existing files in clean and properly organized.",
        },
        {
          icon: "GraduationCap",
          title: "Staff Training",
          desc: "Your team learns how to use it from day one.",
        },
        {
          icon: "Building2",
          title: "Department Pages",
          desc: "Individual spaces for each team or program area.",
        },
        {
          icon: "FileSearch",
          title: "Forms & Templates",
          desc: "Reusable, versioned forms your staff can always find.",
        },
      ],
    },
    sections: [
      {
        type: "callout",
        tone: "navy",
        eyebrow: "Adoption Focused",
        title: "A SharePoint build that people actually use.",
        body: "The best portal is the one your staff opens every day. We design with simplicity and usability first, and invest in training so your team adopts the system from the start.",
        points: [
          "Designed around how your team works, not how SharePoint works",
          "Simple enough that staff want to use it",
          "Training included, not bolted on at the end",
        ],
        placeholder: "Team using SharePoint, photo placeholder",
        placeholderIcon: "FolderCog",
        image: "/images/sharepoint-hero.png",
      },
    ],
    process: {
      title: "How we build it.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Discovery",
          desc: "We learn your team structure, document needs, and current pain points.",
        },
        {
          title: "Architecture",
          desc: "We map out the portal structure, permissions, and naming conventions.",
        },
        {
          title: "Build",
          desc: "We configure SharePoint, create libraries, and set up automations.",
        },
        {
          title: "Migrate",
          desc: "We move existing files in cleanly and organized.",
        },
        {
          title: "Train and Launch",
          desc: "We train your team and go live with a smooth handoff.",
        },
      ],
    },
    benefits: {
      title: "What an organized SharePoint gives your team.",
      items: [
        {
          title: "Documents always findable",
          desc: "Staff spend seconds looking, not hours.",
        },
        {
          title: "Smoother onboarding",
          desc: "New staff find what they need from day one.",
        },
        {
          title: "Better version control",
          desc: "Everyone works from the current document.",
        },
        {
          title: "Cleaner compliance posture",
          desc: "Policies and records properly organized and access-controlled.",
        },
        {
          title: "Less email for documents",
          desc: "Fewer attachments, fewer outdated files.",
        },
        {
          title: "Team-level organization",
          desc: "Every department has its own structured space.",
        },
      ],
    },
    related: ["it-services", "operational-support", "business-process-services"],
    cta: {
      title: "Ready to organize your systems?",
      body: "Schedule a consultation and we will map out a SharePoint build that fits how your team actually works.",
    },
  },
  {
    slug: "salesforce-build-outs",
    icon: "CloudCog",
    eyebrow: "Salesforce Build-Outs",
    title: "Salesforce, built around how you deliver care.",
    lead: "A CRM is only as good as the way it fits your work. We design, configure, and automate Salesforce around your intake, referrals, and reporting, so your team gets a system that helps, not another tool to fight.",
    heroPlaceholder: "Salesforce dashboard, screenshot placeholder",
    heroImage: "/images/salesforce-hero.png",
    href: "/services/salesforce-build-outs",
    tagline: "A CRM built around your care model.",
    short:
      "Salesforce setup, automation, and dashboards tailored to behavioral health workflows.",
    problem: {
      title: "When your CRM does not fit, your team works around it.",
      lead: "An off-the-shelf setup that ignores your workflow quietly becomes shelfware. The data gets messy, adoption drops, and you lose the visibility a CRM was supposed to give you.",
      items: [
        "A generic setup that does not match your workflow",
        "Manual data entry and double-keying",
        "Referrals tracked in spreadsheets",
        "No clear pipeline or reliable reporting",
        "Low adoption, staff avoid the system",
        "Disconnected from your other tools",
      ],
    },
    provide: {
      title: "What we build",
      eyebrow: "What We Build",
      lead: "A Salesforce environment configured around your real operations.",
      columns: 4,
      cards: [
        {
          icon: "SlidersHorizontal",
          title: "CRM Configuration",
          desc: "Objects, fields, and records that mirror your real work.",
        },
        {
          icon: "DoorOpen",
          title: "Intake and Referral Tracking",
          desc: "Capture and route referrals without spreadsheets.",
        },
        {
          icon: "Workflow",
          title: "Workflow Automation",
          desc: "Automate reminders, handoffs, and follow-ups.",
        },
        {
          icon: "BarChart3",
          title: "Dashboards and Reporting",
          desc: "See your pipeline and outcomes at a glance.",
        },
        {
          icon: "Database",
          title: "Data Migration",
          desc: "Move existing records in clean and organized.",
        },
        {
          icon: "Network",
          title: "Integrations",
          desc: "Connect Salesforce to the tools you already use.",
        },
        {
          icon: "KeyRound",
          title: "Roles and Permissions",
          desc: "The right access for every role on your team.",
        },
        {
          icon: "GraduationCap",
          title: "Training and Adoption",
          desc: "Help your team actually use the system.",
        },
      ],
    },
    sections: [
      {
        type: "callout",
        tone: "navy",
        eyebrow: "Built For Adoption",
        title: "A launch is the start. Adoption is the goal.",
        body: "A beautiful Salesforce build means nothing if your team will not use it. We design around how people actually work, keep it simple, and invest in training and support so adoption sticks long after go-live.",
        points: [
          "Configured around real day-to-day work",
          "Simple enough that staff want to use it",
          "Training and support that make it stick",
        ],
        placeholder: "Team using Salesforce, photo placeholder",
        placeholderIcon: "CloudCog",
        image: "/images/salesforce-secondary.png",
      },
    ],
    process: {
      title: "How we build it.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Discovery",
          desc: "We learn your intake, referrals, and reporting needs.",
        },
        {
          title: "Design the Model",
          desc: "We map objects and workflows to your real work.",
        },
        {
          title: "Configure and Automate",
          desc: "We build it out and automate the busywork.",
        },
        {
          title: "Migrate Data",
          desc: "We move your records in clean and organized.",
        },
        {
          title: "Test and Train",
          desc: "We validate everything and train your team.",
        },
        {
          title: "Launch and Support",
          desc: "We go live and stay on to support adoption.",
        },
      ],
    },
    benefits: {
      title: "What a CRM that fits gives you.",
      items: [
        {
          title: "Less manual work",
          desc: "Automation handles the repetitive steps.",
        },
        {
          title: "Cleaner data",
          desc: "One reliable source of truth.",
        },
        {
          title: "Clear pipeline visibility",
          desc: "See referrals and outcomes in real time.",
        },
        {
          title: "Higher adoption",
          desc: "A system your team actually uses.",
        },
        {
          title: "Better follow-through",
          desc: "Nothing falls through the cracks.",
        },
        {
          title: "Reporting you trust",
          desc: "Numbers you can make decisions on.",
        },
      ],
    },
    related: ["operational-support", "business-process-services", "it-services"],
    cta: {
      title: "Ready for a CRM that fits your work?",
      body: "Schedule a consultation and we will map a Salesforce build around how your team actually operates.",
    },
  },
  {
    slug: "it-services",
    icon: "ShieldCheck",
    eyebrow: "IT Services",
    title: "Technology that just works, so your team can focus on care.",
    lead: "Reliable systems are the quiet foundation behind everything your organization does. We provide practical, secure IT support that keeps accounts, devices, and tools running without the headaches.",
    heroPlaceholder: "it-services/1",
    heroImage: "/images/it-hero.png",
    heroImagePosition: "left center",
    href: "/services/it-services",
    tagline: "Secure, reliable technology support.",
    short:
      "Managed IT, cybersecurity, cloud solutions, and support your team can rely on.",
    problem: {
      title: "Technology problems pull your team away from people.",
      lead: "When access breaks, accounts are a mess, or no one knows who to call, your staff lose time they should be spending on care.",
      items: [
        "Staff access and login issues",
        "Device management problems",
        "Microsoft 365 confusion",
        "Messy email and account setup",
        "Security gaps and weak habits",
        "Inconsistent onboarding and offboarding",
        "Vendor confusion, no one owns IT",
        "No structured help desk",
      ],
      columns: 2,
    },
    provide: {
      title: "What we support",
      eyebrow: "What We Support",
      lead: "Practical IT coordination across the tools behavioral health teams rely on.",
      columns: 4,
      cards: [
        {
          icon: "Grid2x2",
          title: "Microsoft 365",
          desc: "Setup, configuration, and ongoing support.",
        },
        {
          icon: "UserPlus",
          title: "Account Setup",
          desc: "New accounts done right the first time.",
        },
        {
          icon: "KeyRound",
          title: "User Access",
          desc: "The right access for every role.",
        },
        {
          icon: "Laptop",
          title: "Device Coordination",
          desc: "Consistent, managed devices for your team.",
        },
        {
          icon: "Cloud",
          title: "Cloud Storage",
          desc: "Organized, secure cloud file storage.",
        },
        {
          icon: "ShieldCheck",
          title: "Cybersecurity Basics",
          desc: "Sensible protections and good habits.",
        },
        {
          icon: "Mail",
          title: "Email and Domain",
          desc: "Reliable email and domain support.",
        },
        {
          icon: "Headphones",
          title: "Help Desk Routing",
          desc: "A clear path to get problems solved.",
        },
      ],
    },
    sections: [
      {
        type: "callout",
        tone: "navy",
        eyebrow: "Security and Reliability",
        title: "In behavioral health, reliable systems are not optional.",
        body: "Your organization handles sensitive information and depends on systems being available when staff need them. We help you build reliable, security-aware technology habits, without overcomplicating things or locking you into tools you do not need.",
        points: [
          "Sensible, layered protections",
          "Clear onboarding and offboarding",
          "Documented systems your team understands",
        ],
        placeholder: "it-services/2",
        image: "/images/it-secondary.png",
        placeholderIcon: "Lock",
      },
      {
        type: "cards",
        tone: "white",
        eyebrow: "How We Engage",
        title: "A support model that fits your needs.",
        lead: "Bring us in for a one-time setup or partner with us for ongoing coordination.",
        columns: 5,
        cards: [
          {
            icon: "Rocket",
            title: "Project-Based Setup",
            desc: "A defined start-to-finish engagement.",
          },
          {
            icon: "CalendarCheck",
            title: "Monthly Support",
            desc: "Ongoing coordination and peace of mind.",
          },
          {
            icon: "Network",
            title: "Vendor Coordination",
            desc: "We manage your tech vendors for you.",
          },
          {
            icon: "UserCog",
            title: "Onboarding and Offboarding",
            desc: "Smooth, secure staff transitions.",
          },
          {
            icon: "FileText",
            title: "Documentation and Training",
            desc: "So your team knows how things work.",
          },
        ],
      },
    ],
    process: {
      title: "How we stabilize your IT.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Assessment",
          desc: "We review your current accounts, access, and tools.",
        },
        {
          title: "Prioritize",
          desc: "We identify the gaps that need fixing first.",
        },
        {
          title: "Configure",
          desc: "We set up accounts, permissions, and devices correctly.",
        },
        {
          title: "Document",
          desc: "We create clear records so your team knows how things work.",
        },
        {
          title: "Support",
          desc: "We stay available for ongoing questions and changes.",
        },
      ],
    },
    benefits: {
      title: "What reliable IT gives you back.",
      items: [
        {
          title: "More reliable technology",
          desc: "Fewer surprises, more uptime.",
        },
        {
          title: "Reduced interruptions",
          desc: "Staff stay focused on their work.",
        },
        {
          title: "Cleaner access management",
          desc: "The right access, every time.",
        },
        {
          title: "Better staff onboarding",
          desc: "New hires are productive on day one.",
        },
        {
          title: "Stronger security habits",
          desc: "Protection that becomes second nature.",
        },
        {
          title: "A clear point of contact",
          desc: "You always know who to call.",
        },
      ],
    },
    related: ["sharepoint-setup", "operational-support", "staffing-support"],
    cta: {
      title: "Want technology you can rely on?",
      body: "Schedule a consultation and we will review your systems and recommend a practical path forward.",
    },
  },
  {
    slug: "staffing-support",
    icon: "Users",
    eyebrow: "Staffing Support",
    title: "The right people, when and where your team needs them.",
    lead: "Staffing gaps happen. Whether you need temporary coverage, help finding a key hire, or support planning your team structure, we connect you with qualified professionals who understand behavioral health.",
    heroImage: "/images/staffing-hero.png",
    heroImagePosition: "center center",
    href: "/services/staffing-support",
    tagline: "The right people, when you need them.",
    short:
      "Connect with qualified professionals who bring the skills and heart your team needs.",
    problem: {
      title: "Staffing challenges put your mission at risk.",
      lead: "In behavioral health, the wrong hire or a staffing gap does not just affect operations, it affects the people in your care.",
      items: [
        "Leadership covering roles they should not have to",
        "Gaps in administrative and intake coverage",
        "Difficulty finding qualified candidates quickly",
        "High turnover and the cost of constant rehiring",
        "No clear structure for new role onboarding",
        "Temporary needs with no reliable solution",
      ],
    },
    provide: {
      title: "What we provide",
      eyebrow: "What We Provide",
      lead: "Staffing solutions built around the realities of behavioral health organizations.",
      columns: 3,
      cards: [
        {
          icon: "UserSearch",
          title: "Temporary Coverage",
          desc: "Qualified professionals to fill gaps when you need them.",
        },
        {
          icon: "ClipboardList",
          title: "Administrative Support",
          desc: "Intake, billing, and office support staff who understand your world.",
        },
        {
          icon: "UserCheck",
          title: "Onboarding Support",
          desc: "Smooth transitions for new staff so they hit the ground running.",
        },
        {
          icon: "Users2",
          title: "Team Structure Planning",
          desc: "Help defining roles and building the team you need.",
        },
        {
          icon: "Briefcase",
          title: "Contract to Hire",
          desc: "Trial engagements that let you build with confidence.",
        },
        {
          icon: "HeartHandshake",
          title: "Culture-First Matching",
          desc: "People who fit your mission, not just the job description.",
        },
      ],
    },
    process: {
      title: "How we find the right fit.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Understand Your Needs",
          desc: "We learn the role, the culture, and the urgency.",
        },
        {
          title: "Source Candidates",
          desc: "We identify qualified, mission-aligned professionals.",
        },
        {
          title: "Vet and Present",
          desc: "We screen and present only strong fits for your consideration.",
        },
        {
          title: "Support Placement",
          desc: "We coordinate the transition and support onboarding.",
        },
      ],
    },
    benefits: {
      title: "What the right staffing support gives you.",
      items: [
        {
          title: "Coverage when you need it",
          desc: "No more asking leaders to fill gaps.",
        },
        {
          title: "Qualified, mission-aligned staff",
          desc: "People who understand the work.",
        },
        {
          title: "Faster time to productivity",
          desc: "New staff onboard smoothly and quickly.",
        },
        {
          title: "Reduced turnover risk",
          desc: "Better matches lead to longer tenure.",
        },
        {
          title: "Leadership focused on leading",
          desc: "Your directors do their job, not five others.",
        },
        {
          title: "Continuity of care",
          desc: "Staffing gaps do not reach your clients.",
        },
      ],
    },
    related: ["operational-support", "business-process-services", "consulting"],
    cta: {
      title: "Need the right people in the right roles?",
      body: "Schedule a consultation and we will help you find qualified, mission-aligned professionals for your team.",
    },
  },
  {
    slug: "operational-support",
    icon: "RefreshCw",
    eyebrow: "Operational Support",
    title: "Stronger processes. A calmer, more effective organization.",
    lead: "Operations is everything behind the scenes that makes care possible. We help you map, improve, and sustain the processes that keep your organization moving forward, reliably and consistently.",
    heroImage: "/images/operational-support-hero.png",
    href: "/services/operational-support",
    tagline: "Better processes. Better outcomes.",
    short:
      "Process improvement, training, and day-to-day support to keep your organization strong.",
    problem: {
      title: "When operations are unclear, everything takes longer.",
      lead: "Informal processes and manual workarounds create invisible drag on your organization. Staff burn out, things fall through the cracks, and leaders spend more time managing chaos than leading.",
      items: [
        "No clear workflows or documented procedures",
        "Manual workarounds for things that should be automated",
        "Staff unclear on who is responsible for what",
        "Leadership spending time in the weeds instead of leading",
        "Inconsistent service delivery across programs",
        "Onboarding that reinvents the wheel every time",
      ],
    },
    provide: {
      title: "What we improve",
      eyebrow: "What We Improve",
      lead: "Operational clarity that gives your team confidence and your leaders room to lead.",
      columns: 3,
      cards: [
        {
          icon: "GitBranch",
          title: "Workflow Mapping",
          desc: "Document and visualize how work actually moves through your organization.",
        },
        {
          icon: "FileCheck",
          title: "SOP Development",
          desc: "Standard operating procedures written for how your team works.",
        },
        {
          icon: "TrendingUp",
          title: "Process Improvement",
          desc: "Identify bottlenecks and redesign processes to reduce friction.",
        },
        {
          icon: "BookOpen",
          title: "Staff Training",
          desc: "Training that builds consistent habits across your team.",
        },
        {
          icon: "LayoutGrid",
          title: "Operational Structure",
          desc: "Role clarity, reporting lines, and accountability systems.",
        },
        {
          icon: "RefreshCw",
          title: "Ongoing Support",
          desc: "Day-to-day operational support to keep things running smoothly.",
        },
      ],
    },
    process: {
      title: "How we improve your operations.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Operations Review",
          desc: "We learn how work flows through your organization today.",
        },
        {
          title: "Gap Analysis",
          desc: "We identify the friction points and their root causes.",
        },
        {
          title: "Design Solutions",
          desc: "We map out improved processes and clear accountabilities.",
        },
        {
          title: "Implement",
          desc: "We roll out SOPs, training, and structural changes.",
        },
        {
          title: "Sustain",
          desc: "We provide ongoing support to keep improvements in place.",
        },
      ],
    },
    benefits: {
      title: "What operational clarity gives your team.",
      items: [
        {
          title: "Less chaos, more confidence",
          desc: "Staff know what to do and how to do it.",
        },
        {
          title: "Faster onboarding",
          desc: "New staff learn from documented, consistent processes.",
        },
        {
          title: "More consistent service delivery",
          desc: "Every program runs the same reliable way.",
        },
        {
          title: "Leadership back to leading",
          desc: "Directors out of the weeds and focused on strategy.",
        },
        {
          title: "Fewer things falling through the cracks",
          desc: "Clear accountability means nothing gets lost.",
        },
        {
          title: "A foundation for growth",
          desc: "Scalable operations that can handle what is coming next.",
        },
      ],
    },
    related: ["business-process-services", "consulting", "staffing-support"],
    cta: {
      title: "Ready for operations that actually work?",
      body: "Schedule a consultation and we will help you find the highest-impact place to start improving.",
    },
  },
  {
    slug: "business-process-services",
    icon: "ListChecks",
    eyebrow: "Business Process Services",
    title: "The back office, handled right.",
    lead: "Billing, intake, HR, and administrative work are critical to your organization, but they do not have to be done by the people closest to clinical care. We help you optimize, document, or outsource these processes so your team can focus on what matters most.",
    heroImage: "/images/business-process-hero.png",
    href: "/services/business-process-services",
    tagline: "Run the back office, done right.",
    short:
      "Optimize or outsource billing, intake, HR, and administrative processes.",
    problem: {
      title: "Back office burden pulls clinical teams away from care.",
      lead: "When billing, intake, and administrative work are undocumented or inefficient, the entire organization feels it, from revenue cycle gaps to staff burnout.",
      items: [
        "Billing and revenue cycle errors eating into margins",
        "Intake processes that are slow or inconsistent",
        "HR and onboarding handled differently every time",
        "Administrative tasks falling to clinical staff",
        "No documented process for critical back-office functions",
        "Difficulty scaling because no one wrote down how things work",
      ],
    },
    provide: {
      title: "What we optimize and support",
      eyebrow: "What We Handle",
      lead: "Critical back-office functions, done consistently and correctly.",
      columns: 3,
      cards: [
        {
          icon: "Receipt",
          title: "Billing and Revenue Cycle",
          desc: "Clean, consistent billing processes that protect your revenue.",
        },
        {
          icon: "ClipboardList",
          title: "Intake Process Design",
          desc: "Standardized, efficient intake that creates a great first impression.",
        },
        {
          icon: "UserPlus",
          title: "HR and Onboarding",
          desc: "Documented processes for hiring, onboarding, and offboarding.",
        },
        {
          icon: "FileStack",
          title: "Administrative Documentation",
          desc: "Procedures written so anyone can follow them.",
        },
        {
          icon: "BarChart2",
          title: "Process Optimization",
          desc: "Identify and eliminate waste in your back-office workflows.",
        },
        {
          icon: "HandCoins",
          title: "Outsourced Support",
          desc: "Let us handle functions that do not need to be in-house.",
        },
      ],
    },
    process: {
      title: "How we improve your back office.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Process Audit",
          desc: "We review your current billing, intake, and administrative workflows.",
        },
        {
          title: "Document",
          desc: "We capture how things currently work and where gaps exist.",
        },
        {
          title: "Optimize",
          desc: "We redesign processes for consistency, accuracy, and efficiency.",
        },
        {
          title: "Implement",
          desc: "We roll out improved procedures and train your team.",
        },
        {
          title: "Support",
          desc: "We provide ongoing support or outsourced execution as needed.",
        },
      ],
    },
    benefits: {
      title: "What optimized back-office processes give you.",
      items: [
        {
          title: "Stronger revenue cycle",
          desc: "Fewer billing errors and faster collections.",
        },
        {
          title: "Consistent intake experience",
          desc: "Every new client gets the same quality welcome.",
        },
        {
          title: "Clinical staff focused on care",
          desc: "Administrative burden moved to the right place.",
        },
        {
          title: "Documented processes anyone can follow",
          desc: "No more institutional knowledge walking out the door.",
        },
        {
          title: "Faster onboarding",
          desc: "New staff learn back-office functions quickly.",
        },
        {
          title: "Scalability",
          desc: "Processes that grow with you without breaking.",
        },
      ],
    },
    related: ["operational-support", "salesforce-build-outs", "staffing-support"],
    cta: {
      title: "Ready to get the back office under control?",
      body: "Schedule a consultation and we will assess your current processes and recommend a practical path forward.",
    },
  },
  {
    slug: "consulting",
    icon: "Lightbulb",
    eyebrow: "Consulting Services",
    title: "Guidance for the decisions that shape your organization's future.",
    lead: "Sometimes you need an experienced outside perspective. We provide strategic consulting for behavioral health organizations navigating growth, change, technology decisions, and operational challenges.",
    heroImage: "/images/consulting-hero.png",
    href: "/services/consulting",
    tagline: "Guidance for the decisions that matter.",
    short:
      "Experienced advisors to help you plan growth, solve problems, and lead change.",
    problem: {
      title: "The hardest decisions need the right sounding board.",
      lead: "Strategic and operational decisions made in isolation, or without the right expertise, can cost an organization months of progress and significant resources.",
      items: [
        "Major decisions made without enough data or perspective",
        "Growth plans that outpace your operational capacity",
        "Change initiatives that stall or lose traction",
        "Technology decisions that create expensive problems",
        "Leadership teams stuck on how to move forward",
        "No outside perspective to challenge assumptions",
      ],
    },
    provide: {
      title: "What we advise on",
      eyebrow: "What We Provide",
      lead: "Strategic guidance across the decisions that shape your organization.",
      columns: 3,
      cards: [
        {
          icon: "Map",
          title: "Strategic Planning",
          desc: "Facilitated planning that connects your mission to a clear path forward.",
        },
        {
          icon: "TrendingUp",
          title: "Growth Strategy",
          desc: "Plans for program expansion, new markets, and service line development.",
        },
        {
          icon: "AlertTriangle",
          title: "Problem Solving",
          desc: "Structured approaches to operational and strategic challenges.",
        },
        {
          icon: "ArrowRightLeft",
          title: "Change Management",
          desc: "Guidance for leading organizational change with minimal disruption.",
        },
        {
          icon: "Cpu",
          title: "Technology Decisions",
          desc: "Unbiased guidance on technology investments and platforms.",
        },
        {
          icon: "Users",
          title: "Leadership Coaching",
          desc: "Support for executive and senior leaders navigating complex situations.",
        },
      ],
    },
    process: {
      title: "How we work together.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Discovery Session",
          desc: "We understand your situation, goals, and the decisions you are facing.",
        },
        {
          title: "Analysis",
          desc: "We research, assess, and develop informed perspectives.",
        },
        {
          title: "Recommendations",
          desc: "We present clear, actionable options with honest trade-offs.",
        },
        {
          title: "Support",
          desc: "We stay engaged as you implement and course-correct.",
        },
      ],
    },
    benefits: {
      title: "What experienced consulting gives your organization.",
      items: [
        {
          title: "Better-informed decisions",
          desc: "More data, more perspective, less guesswork.",
        },
        {
          title: "Faster progress",
          desc: "Skip the expensive wrong turns and move forward with confidence.",
        },
        {
          title: "Outside perspective",
          desc: "Honest input that your internal team may not provide.",
        },
        {
          title: "Operational alignment",
          desc: "Strategy and operations moving in the same direction.",
        },
        {
          title: "Change that actually sticks",
          desc: "Initiatives that are planned and supported properly.",
        },
        {
          title: "Leadership confidence",
          desc: "Decision-makers who feel clear and equipped.",
        },
      ],
    },
    related: ["operational-support", "marketing", "licensure"],
    cta: {
      title: "Ready for an outside perspective?",
      body: "Schedule a consultation and let us understand the challenges you are navigating.",
    },
  },
  {
    slug: "licensure",
    icon: "BadgeCheck",
    eyebrow: "Licensure Services",
    title: "Open your program and stay compliant, with confidence.",
    lead: "Behavioral health licensure and accreditation are complex, time-consuming, and unforgiving of errors. We guide organizations through the application, compliance, and accreditation processes so you can open your doors on schedule.",
    heroImage: "/images/licensure-hero.png",
    href: "/services/licensure",
    tagline: "Open and stay compliant with confidence.",
    short:
      "Guidance through behavioral health center licensure, accreditation, and compliance.",
    problem: {
      title: "Licensure errors cost time, money, and community access.",
      lead: "A missed requirement, incomplete application, or policy gap can delay your opening by months or put your existing license at risk. Most organizations do not have the internal expertise to navigate this alone.",
      items: [
        "Complex state and federal licensing requirements",
        "Policy and procedure gaps that create compliance risk",
        "Accreditation preparation that feels overwhelming",
        "Delays caused by incomplete or incorrect applications",
        "No clear roadmap for the licensure process",
        "Staff unfamiliar with regulatory standards",
      ],
    },
    provide: {
      title: "What we guide you through",
      eyebrow: "What We Support",
      lead: "End-to-end licensure and compliance support for behavioral health organizations.",
      columns: 3,
      cards: [
        {
          icon: "ClipboardCheck",
          title: "Licensure Applications",
          desc: "Complete, accurate applications submitted on time.",
        },
        {
          icon: "FileText",
          title: "Policy and Procedure Development",
          desc: "Compliant policies written for your specific programs.",
        },
        {
          icon: "BadgeCheck",
          title: "Accreditation Readiness",
          desc: "Preparation for CARF, The Joint Commission, and state accreditation.",
        },
        {
          icon: "AlertCircle",
          title: "Compliance Assessments",
          desc: "Gap analysis to identify and address compliance risks.",
        },
        {
          icon: "BookOpen",
          title: "Staff Training",
          desc: "Training on compliance expectations and documentation standards.",
        },
        {
          icon: "RefreshCw",
          title: "Ongoing Compliance Support",
          desc: "Help staying current with regulatory changes.",
        },
      ],
    },
    process: {
      title: "How we guide you through licensure.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Requirements Review",
          desc: "We map all applicable licensure and accreditation requirements for your programs.",
        },
        {
          title: "Gap Assessment",
          desc: "We identify what you have, what you need, and what needs to be fixed.",
        },
        {
          title: "Application Support",
          desc: "We help you prepare and submit complete, accurate applications.",
        },
        {
          title: "Policy Development",
          desc: "We develop or update policies and procedures to meet requirements.",
        },
        {
          title: "Compliance Maintenance",
          desc: "We provide ongoing support to keep your organization in good standing.",
        },
      ],
    },
    benefits: {
      title: "What professional licensure guidance gives you.",
      items: [
        {
          title: "Faster path to opening",
          desc: "No delays from incomplete applications or missed requirements.",
        },
        {
          title: "Reduced compliance risk",
          desc: "Gaps identified and addressed before they become problems.",
        },
        {
          title: "Accreditation readiness",
          desc: "Prepared for review with documentation in order.",
        },
        {
          title: "Compliant policies",
          desc: "Procedures written to meet regulatory standards.",
        },
        {
          title: "Confident leadership",
          desc: "Your team understands the requirements and how to meet them.",
        },
        {
          title: "Ongoing support",
          desc: "A partner who keeps you current as regulations change.",
        },
      ],
    },
    related: ["consulting", "operational-support", "bhp-oversight"],
    cta: {
      title: "Navigating licensure or accreditation?",
      body: "Schedule a consultation and we will help you map the requirements and build a clear path forward.",
    },
  },
  {
    slug: "bhp-oversight",
    icon: "Stethoscope",
    eyebrow: "BHP Oversight",
    title: "Clinical oversight that keeps your programs safe, compliant, and effective.",
    lead: "Behavioral Health Professional (BHP) oversight provides the clinical supervision, program consultation, quality assurance, and operational support that ensure your services are delivered in line with regulatory, payer, and best-practice standards.",
    heroImage: "/images/bhp-oversight-hero.png",
    href: "/services/bhp-oversight",
    tagline: "Clinical supervision, quality, and governance.",
    short:
      "Clinical supervision, quality assurance, compliance, and program oversight delivered by experienced behavioral health professionals.",
    problem: {
      title: "Without clinical oversight, quality and compliance drift.",
      lead: "Behavioral health programs operate under demanding regulatory and payer expectations. When clinical supervision and quality assurance are thin, documentation gaps, medical necessity issues, and compliance risk quietly accumulate, and the people in your care feel it first.",
      items: [
        "Inconsistent or insufficient clinical supervision",
        "Documentation that does not hold up to audit or payer review",
        "Medical necessity and treatment plans lacking clinical oversight",
        "Compliance findings with no clear corrective action plan",
        "Staff without structured coaching or competency development",
        "No reliable measurement of outcomes or program performance",
      ],
      columns: 2,
    },
    provide: {
      title: "What our BHP oversight covers",
      eyebrow: "What We Provide",
      lead: "End-to-end clinical and operational oversight delivered by experienced behavioral health professionals.",
      columns: 4,
      cards: [
        {
          icon: "UserCheck",
          title: "Clinical Supervision",
          desc: "Clinical supervision and consultation that supports your team and protects quality of care.",
        },
        {
          icon: "Workflow",
          title: "Program Development",
          desc: "Program development and implementation support from concept through launch.",
        },
        {
          icon: "FileCheck",
          title: "Documentation QA",
          desc: "Documentation review and quality assurance that stands up to audit and payer review.",
        },
        {
          icon: "ClipboardCheck",
          title: "Treatment Plan Oversight",
          desc: "Medical necessity and treatment plan oversight grounded in clinical standards.",
        },
        {
          icon: "ShieldCheck",
          title: "Compliance Monitoring",
          desc: "Compliance monitoring and corrective action support to close gaps before they grow.",
        },
        {
          icon: "GraduationCap",
          title: "Staff Training & Coaching",
          desc: "Staff training, coaching, and competency development that builds lasting skill.",
        },
        {
          icon: "FileText",
          title: "Policy & Procedure Development",
          desc: "Policies and procedures written for your programs and regulatory environment.",
        },
        {
          icon: "BadgeCheck",
          title: "Accreditation Readiness",
          desc: "AHCCCS, CMS, and accreditation readiness support so reviews go smoothly.",
        },
        {
          icon: "GitBranch",
          title: "Workflow Improvement",
          desc: "Clinical workflow and operational process improvement that reduces friction.",
        },
        {
          icon: "BarChart3",
          title: "Outcome Measurement",
          desc: "Outcome measurement and performance improvement initiatives that show impact.",
        },
        {
          icon: "ClipboardList",
          title: "Program Evaluation & Auditing",
          desc: "Behavioral health program evaluation and auditing to keep quality on track.",
        },
        {
          icon: "Scale",
          title: "Risk & Clinical Governance",
          desc: "Risk management and clinical governance support that protects your organization.",
        },
      ],
    },
    sections: [
      {
        type: "callout",
        tone: "navy",
        eyebrow: "Standards-Aligned",
        title: "Oversight measured against the standards that matter.",
        body: "Every program we oversee is held to regulatory, payer, and best-practice expectations, from AHCCCS and CMS requirements to accreditation standards. We help you meet them consistently, document them clearly, and demonstrate them confidently when it counts.",
        points: [
          "Aligned with AHCCCS, CMS, and accreditation requirements",
          "Built on payer expectations and clinical best practice",
          "Documented and defensible under audit and review",
        ],
        image: "/images/bhp-oversight-secondary.png",
      },
    ],
    process: {
      title: "How we provide oversight.",
      eyebrow: "How It Works",
      steps: [
        {
          title: "Clinical Review",
          desc: "We assess your programs, documentation, supervision, and compliance posture.",
        },
        {
          title: "Gap Analysis",
          desc: "We identify quality, compliance, and clinical risks and their root causes.",
        },
        {
          title: "Oversight Plan",
          desc: "We establish supervision, QA, and governance structures tailored to your programs.",
        },
        {
          title: "Implement and Coach",
          desc: "We deliver supervision, training, and corrective action support on the ground.",
        },
        {
          title: "Monitor and Improve",
          desc: "We measure outcomes and drive continuous performance improvement over time.",
        },
      ],
    },
    benefits: {
      title: "What strong clinical oversight gives your organization.",
      items: [
        {
          title: "Audit-ready documentation",
          desc: "Records that hold up to payer and regulatory review.",
        },
        {
          title: "Reduced compliance risk",
          desc: "Gaps identified and corrected before they become findings.",
        },
        {
          title: "Stronger clinical quality",
          desc: "Supervision and QA that protect the people you serve.",
        },
        {
          title: "More capable staff",
          desc: "Coaching and competency development that builds your team.",
        },
        {
          title: "Demonstrable outcomes",
          desc: "Performance data that proves the impact of your programs.",
        },
        {
          title: "Confident governance",
          desc: "Clinical leadership and risk management you can rely on.",
        },
      ],
    },
    related: ["licensure", "consulting", "operational-support"],
    cta: {
      title: "Ready for clinical oversight you can trust?",
      body: "Schedule a consultation and we will assess your programs and recommend the right oversight structure.",
    },
  },
  {
    slug: "automation",
    icon: "Zap",
    eyebrow: "Automation",
    tagline: "Make, n8n, and Temporal workflows.",
    short: "We design and build automated workflows on Make, n8n, and Temporal, connecting your systems, eliminating manual tasks, and scaling operations without adding headcount.",
    href: "/services/automation",
    title: "Automate the work that slows you down.",
    lead: "Your team is spending time on tasks that should run themselves. We build automated workflows on Make, n8n, and Temporal that connect your systems, move your data, and keep your operations running without manual intervention.",
    heroImage: "/images/automation-hero.png",
    problem: {
      eyebrow: "The Problem",
      title: "Manual work is expensive, error-prone, and exhausting.",
      lead: "Every manual handoff is a potential failure point. Data copied between systems, tasks waiting in inboxes, reports pulled by hand. These slow your team down and introduce mistakes at scale.",
      items: [
        "Staff spending hours on repetitive data entry and transfers",
        "Critical tasks falling through the cracks between systems",
        "No visibility into whether processes are running correctly",
        "Scaling operations requires hiring more people, not working smarter",
        "Disconnected tools that do not communicate with each other",
        "Errors introduced every time a human touches a routine process",
      ],
      columns: 2,
    },
    features: {
      eyebrow: "What We Build",
      title: "Workflows that run while your team focuses on the mission.",
      items: [
        { title: "Make.com Workflows", desc: "Visual automation flows connecting hundreds of apps, CRMs, email, forms, databases, and more, without writing code." },
        { title: "n8n Pipelines", desc: "Self-hosted or cloud automation with advanced logic, custom code nodes, and full control over your data." },
        { title: "Temporal Orchestration", desc: "Durable, fault-tolerant workflow orchestration for complex, long-running processes that cannot afford to fail." },
        { title: "System Integrations", desc: "Connect your EHR, CRM, billing, HR, and communication tools into a single coordinated operation." },
        { title: "Data Sync and Transforms", desc: "Keep data consistent across platforms with scheduled and event-driven sync pipelines." },
        { title: "Trigger-Based Automation", desc: "Kick off processes automatically on form submissions, status changes, emails, webhooks, and scheduled intervals." },
      ],
    },
    sections: [
      {
        type: "callout" as const,
        tone: "navy",
        eyebrow: "Platform Expertise",
        title: "The right tool for every workflow.",
        body: "Not every automation problem needs the same solution. We match the platform to your use case: Make for accessible visual workflows, n8n for self-hosted control and custom logic, and Temporal for mission-critical processes that require durability and fault tolerance.",
        points: [
          "Make.com for rapid, visual, multi-app integrations",
          "n8n for full control, custom code, and sensitive data workflows",
          "Temporal for complex, long-running, stateful process orchestration",
        ],
        image: "/images/automation-secondary.png",
      },
    ],
    process: {
      eyebrow: "How It Works",
      title: "From manual to automated in weeks, not months.",
      steps: [
        { title: "Process Mapping", desc: "We audit your current manual workflows and identify the highest-impact automation opportunities." },
        { title: "Platform Selection", desc: "We recommend the right tool for each workflow based on complexity, data sensitivity, and scale requirements." },
        { title: "Build and Test", desc: "We build, test, and document every workflow with edge cases and error handling built in from the start." },
        { title: "Deploy and Monitor", desc: "We deploy to production and set up monitoring so you always know when something needs attention." },
        { title: "Handoff and Train", desc: "We train your team to manage, modify, and extend automations as your needs evolve." },
      ],
    },
    benefits: {
      title: "What automation gives your organization.",
      items: [
        { title: "Hours returned to your team", desc: "Eliminate routine tasks so staff focus on the work that actually requires a human." },
        { title: "Fewer errors", desc: "Automated processes do not mistype, forget, or skip steps." },
        { title: "Consistent execution", desc: "Every workflow runs exactly the same way, every time." },
        { title: "Real-time visibility", desc: "Know the moment something needs attention instead of discovering it days later." },
        { title: "Scale without headcount", desc: "Grow your operational capacity without proportionally growing your team." },
        { title: "Connected systems", desc: "Your tools finally work together instead of creating more manual work." },
      ],
    },
    related: ["ai-development", "operational-support", "salesforce-build-outs"],
    cta: {
      title: "Ready to stop doing work that should run itself?",
      body: "Schedule a consultation and we will map your highest-impact automation opportunities.",
    },
  },
  {
    slug: "ai-development",
    icon: "Bot",
    eyebrow: "AI Development",
    tagline: "Custom AI agents and Claude integrations.",
    short: "We build custom AI solutions, from simple Claude integrations and prompt workflows to fully autonomous agents and AI-powered business processes.",
    href: "/services/ai-development",
    title: "Custom AI built around the way you work.",
    lead: "AI is not one-size-fits-all. We build purpose-built AI for your organization, from simple Claude-powered skills that augment your team, to custom agents that act autonomously, to full AI-to-workflow integrations that reshape how work gets done.",
    heroImage: "/images/ai-development-hero.png",
    problem: {
      eyebrow: "The Challenge",
      title: "Generic AI tools were not built for your work.",
      lead: "Off-the-shelf AI is built for the broadest possible audience. Your organization has specific workflows, specific data, and specific compliance requirements that generic tools cannot address.",
      items: [
        "Chatbots that do not understand your domain or client population",
        "AI tools that cannot connect to your actual systems and data",
        "No control over how AI handles sensitive client information",
        "Workflows that still require manual steps AI could handle",
        "Teams uncertain how to use AI safely and effectively",
        "No clear path from AI experiments to real operational value",
      ],
      columns: 2,
    },
    features: {
      eyebrow: "What We Build",
      title: "AI that fits your mission, not the other way around.",
      items: [
        { title: "Claude AI Integrations", desc: "Embed Anthropic's Claude into your tools and workflows: document processing, drafting, analysis, summarization, and more." },
        { title: "Custom AI Agents", desc: "Autonomous agents that take action, make decisions, and complete multi-step tasks without requiring human intervention at every step." },
        { title: "Workflow AI Attachment", desc: "Connect AI to your automation pipelines: trigger analysis, generation, or decisions as part of a larger automated workflow." },
        { title: "Knowledge Base AI", desc: "AI grounded in your documents, policies, and SOPs to answer staff and client questions with accuracy and context." },
        { title: "AI-Powered Intake and Forms", desc: "Intelligent intake that asks smart follow-up questions, validates responses, and routes submissions to the right destination." },
        { title: "AI Reporting and Summarization", desc: "Automated summarization, reporting, and insight generation from your operational and clinical data." },
      ],
    },
    sections: [
      {
        type: "callout" as const,
        tone: "navy",
        eyebrow: "Built Responsibly",
        title: "AI that respects the people you serve.",
        body: "Behavioral health organizations handle sensitive data and serve vulnerable populations. Every AI solution we build is designed with privacy, compliance, and ethical use as core requirements, not afterthoughts. We build AI your team can trust and your clients deserve.",
        points: [
          "Data privacy and HIPAA alignment built into every architecture",
          "Human oversight and escalation paths for high-stakes decisions",
          "Transparent AI behavior your staff can understand and rely on",
        ],
        image: "/images/ai-development-secondary.png",
      },
    ],
    process: {
      eyebrow: "How It Works",
      title: "From AI idea to working solution.",
      steps: [
        { title: "Discovery", desc: "We learn your workflows, data, compliance requirements, and where AI can deliver the most meaningful impact." },
        { title: "Solution Design", desc: "We design an AI architecture that fits your stack, your data model, and your team's real-world capabilities." },
        { title: "Build and Prompt Engineering", desc: "We build the integration, engineer and refine prompts, and configure agents for reliable, consistent output." },
        { title: "Testing and Safety Review", desc: "We test thoroughly for accuracy, edge cases, and failure modes before anything touches production." },
        { title: "Deploy and Support", desc: "We deploy, train your team, and stay engaged as your AI solution grows and your needs evolve." },
      ],
    },
    benefits: {
      title: "What custom AI gives your organization.",
      items: [
        { title: "AI that knows your work", desc: "Purpose-built solutions trained on your domain, not generic internet content." },
        { title: "Automation of cognitive tasks", desc: "Drafting, summarizing, classifying, and analyzing, done at scale without staff hours." },
        { title: "Consistent quality", desc: "AI delivers the same quality of output at 1 task or 10,000." },
        { title: "Faster decisions", desc: "AI surfaces the right information at the right moment so your team acts with confidence." },
        { title: "Responsible by design", desc: "Privacy, compliance, and ethical guardrails built in from the start." },
        { title: "A path forward", desc: "A partner who helps you grow your AI capabilities as the technology and your organization evolve." },
      ],
    },
    related: ["automation", "consulting", "operational-support"],
    cta: {
      title: "Ready to put AI to work for your mission?",
      body: "Schedule a consultation and we will identify the highest-impact AI opportunities for your organization.",
    },
  },
  {
    slug: "video-editing",
    icon: "Film",
    eyebrow: "Video Editing",
    tagline: "Professional video, polished and on brand.",
    short: "We edit, color grade, and produce professional video content, from testimonials and brand films to social reels and training videos, so your story lands with impact every time.",
    href: "/services/video-editing",
    title: "Video that tells your story the right way.",
    lead: "Great video content does not happen by accident. We take your raw footage and shape it into polished, purposeful video, edited, color graded, scored, and captioned, ready to perform on every platform your audience uses.",
    heroImage: "/images/video-editing-hero.png",
    problem: {
      eyebrow: "The Problem",
      title: "Raw footage is not content.",
      lead: "Most organizations capture video but never do anything with it. The footage sits on a hard drive because nobody has the time, tools, or expertise to turn it into something worth publishing. Every day it sits there is a missed opportunity.",
      items: [
        "Raw footage that never makes it to your audience",
        "Video that looks amateurish and undercuts your credibility",
        "Inconsistent edits that do not match your brand",
        "No captions, no subtitles, no accessibility",
        "Content that does not perform because it was not built for the platform",
        "Internal teams spending hours on editing instead of their core work",
      ],
      columns: 2,
    },
    features: {
      eyebrow: "What We Deliver",
      title: "Every format. Every platform. Every time.",
      items: [
        { title: "Brand and Promotional Films", desc: "Polished long-form video that tells your organization's story with clarity and impact." },
        { title: "Social Media Reels and Shorts", desc: "Vertical, square, and widescreen edits optimized for Instagram, TikTok, LinkedIn, and YouTube." },
        { title: "Testimonial and Interview Editing", desc: "Clean, professional cuts that let the human story come through without distraction." },
        { title: "Training and Educational Video", desc: "Structured, clearly edited instructional content your team can actually learn from." },
        { title: "Color Grading and Correction", desc: "Consistent, professional color treatment that makes every frame look intentional." },
        { title: "Captions and Subtitles", desc: "Accurate, styled captions that improve accessibility and boost performance on muted feeds." },
      ],
    },
    sections: [
      {
        type: "callout" as const,
        tone: "navy",
        eyebrow: "Built for Your Brand",
        title: "Every edit reflects who you are.",
        body: "We do not just cut footage together. We work from your brand guidelines, your tone, and your goals to produce video that feels consistent with everything else you put out. The pacing, music, graphics, and color all work together to reinforce your identity, not just fill time.",
        points: [
          "Brand-consistent lower thirds, titles, and graphics",
          "Music selection and audio mixing that fits your tone",
          "Multi-platform delivery in the formats and specs each channel requires",
        ],
        image: "/images/video-editing-secondary.png",
      },
    ],
    process: {
      eyebrow: "How It Works",
      title: "From raw footage to finished content.",
      steps: [
        { title: "Brief and Assets", desc: "You share your footage, brand guidelines, and goals. We confirm the scope and deliverables upfront." },
        { title: "First Cut", desc: "We assemble a structured first edit and share it for your review with timestamps for feedback." },
        { title: "Revisions", desc: "We incorporate your feedback and refine the edit until it is exactly what you envisioned." },
        { title: "Polish and Finishing", desc: "Color grade, audio mix, captions, graphics, and any motion elements are finalized." },
        { title: "Delivery", desc: "We export and deliver in every format you need, optimized for each platform." },
      ],
    },
    benefits: {
      title: "What professional video editing gives you.",
      items: [
        { title: "Content that performs", desc: "Properly edited video holds attention longer and converts better than raw or amateur cuts." },
        { title: "Brand credibility", desc: "Polished video signals professionalism and builds trust before a word is spoken." },
        { title: "Time back for your team", desc: "No more hours spent wrestling with Premiere or CapCut when your team should be focused elsewhere." },
        { title: "Consistent output", desc: "Every video looks and feels like it came from the same brand, because it did." },
        { title: "Platform-ready formats", desc: "No reformatting, no guessing: everything delivered in the right specs for where it will live." },
        { title: "Accessible content", desc: "Captions and subtitles make your content reach more people and perform better on silent autoplay." },
      ],
    },
    related: ["marketing", "ai-development", "automation"],
    cta: {
      title: "Ready to turn your footage into content that works?",
      body: "Schedule a consultation and tell us what you have and what you want to accomplish.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
