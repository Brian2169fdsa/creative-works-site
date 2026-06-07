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
    slug: "marketing",
    icon: "Megaphone",
    eyebrow: "Marketing",
    title: "Marketing that reaches your community and grows your mission.",
    lead: "Behavioral health organizations do vital work that most communities do not fully understand. We help you build awareness, connect with the people who need you, and create marketing that genuinely reflects your mission.",
    heroPlaceholder: "Marketing team at work, photo placeholder",
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
        image: "/images/marketing-hero.png",
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
    heroImage: "/images/sharepoint-hero.png",
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
    heroPlaceholder: "IT and systems support, photo placeholder",
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
        placeholder: "Secure systems, illustration placeholder",
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
    heroPlaceholder: "Team collaboration, photo placeholder",
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
    heroPlaceholder: "Operations team at work, photo placeholder",
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
    heroPlaceholder: "Business process work, photo placeholder",
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
    heroPlaceholder: "Strategy session, photo placeholder",
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
    heroPlaceholder: "Compliance and licensing documentation, photo placeholder",
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
    related: ["consulting", "operational-support", "business-process-services"],
    cta: {
      title: "Navigating licensure or accreditation?",
      body: "Schedule a consultation and we will help you map the requirements and build a clear path forward.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
