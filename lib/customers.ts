export interface CustomerDeliverable {
  title: string;
  type: "Print" | "Digital" | "Web" | "Social" | "Brand" | "Operations" | "Staffing" | "AI";
  placeholder: string;
  description: string;
}

export interface CustomerData {
  slug: string;
  name: string;
  fullName?: string;
  screenshotLabel: string;
  category: string;
  location: string;
  services: string[];
  serviceslugs: string[];
  tagline: string;
  bio: string;
  challenge: string;
  approach: string;
  results: { stat: string; label: string }[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  screenshot: null;
  deliverables: CustomerDeliverable[];
}

export const CUSTOMERS: CustomerData[] = [
  {
    slug: "phoenix-rising",
    name: "Phoenix Rising Window Cleaning",
    screenshotLabel: "customers/1",
    category: "Home Services",
    location: "Phoenix, AZ",
    services: ["Brand Development", "Website Design & Development", "Marketing", "Social Media Management", "Google Ads", "AI Development", "Automation"],
    serviceslugs: ["marketing", "automation", "ai-development"],
    tagline: "Built from the ground up — brand, website, and a full growth engine.",
    bio: "Creative Works built Phoenix Rising Window Cleaning from the ground up as a true end-to-end partner. We developed their complete brand identity — name, logo, and a clean 'crystal-clear, Phoenix strong' visual language that feels premium and local at once — then designed and built their full website with service pages, online booking, pricing, a before/after gallery, and a service-area experience covering the entire Phoenix metro. Beyond the build, we run the whole growth engine: marketing strategy, social media management, and Google Ads campaigns that turn searches into booked jobs. Under the hood, we deployed custom AI and automation to streamline quoting, scheduling, and customer follow-up — so the team focuses on spotless glass while the back office runs itself.",
    challenge: "Phoenix Rising needed to launch as a credible, professional brand in a crowded residential services market — with no prior identity, no website, and no marketing infrastructure.",
    approach: "We handled everything from naming and brand identity through website build, Google Ads launch, and full back-office automation. Every piece was designed to work together as a single system.",
    results: [
      { stat: "0→1", label: "Brand built from scratch" },
      { stat: "100%", label: "End-to-end partnership" },
      { stat: "Auto", label: "Quoting and scheduling" },
      { stat: "Live", label: "Google Ads running" },
    ],
    primaryHref: "https://phoenix-rising-web.vercel.app",
    primaryLabel: "Visit Site",
    screenshot: null,
    deliverables: [
      { title: "Brand Identity System", type: "Brand", placeholder: "phoenix-rising/work-1", description: "Logo, color palette, typography, and visual language built around 'crystal-clear, Phoenix strong.'" },
      { title: "Full Website Build", type: "Web", placeholder: "phoenix-rising/work-2", description: "Service pages, booking flow, pricing, before/after gallery, and full Phoenix metro service area." },
      { title: "Residential Services Flyer", type: "Print", placeholder: "phoenix-rising/work-3", description: "Door-hanger and leave-behind flyer for residential neighborhoods and HOA distribution." },
      { title: "Google Ads Creative", type: "Digital", placeholder: "phoenix-rising/work-4", description: "Search and display ad creative driving booked jobs from high-intent local queries." },
      { title: "Social Media Templates", type: "Social", placeholder: "phoenix-rising/work-5", description: "Branded Instagram and Facebook post templates for before/after photos, promotions, and seasonal campaigns." },
      { title: "Quoting and Booking Automation", type: "AI", placeholder: "phoenix-rising/work-6", description: "AI-powered quoting flow and automated scheduling pipeline so every inquiry becomes a confirmed job without manual effort." },
    ],
  },
  {
    slug: "cholla-behavioral-health",
    name: "Cholla Behavioral Health",
    screenshotLabel: "customers/2",
    category: "Behavioral Health Provider",
    location: "Phoenix, AZ",
    services: ["Staffing Support", "Behavioral Health Professional Placement"],
    serviceslugs: ["staffing-support"],
    tagline: "Connecting Cholla with the qualified behavioral health professionals they need.",
    bio: "Creative Works partnered with Cholla Behavioral Health to address their most pressing operational need: qualified, mission-aligned staffing. Cholla bridges behavioral health, physical health, and social support through compassionate, evidence-based care — and their team needed professionals who genuinely understood that model. We sourced, screened, and placed behavioral health professionals across clinical and administrative roles, ensuring each placement fit both the job requirements and Cholla's culture of care. Our staffing support gave Cholla's leadership team the capacity relief they needed to focus on clinical quality rather than open roles.",
    challenge: "Cholla needed to fill behavioral health professional roles quickly without compromising on cultural fit or clinical qualifications — a challenge common in the Phoenix behavioral health market.",
    approach: "We applied a culture-first matching process, sourcing candidates with direct behavioral health experience and screening for alignment with Cholla's integrated care model before any introduction to leadership.",
    results: [
      { stat: "Fast", label: "Time-to-placement" },
      { stat: "100%", label: "Mission-aligned candidates" },
      { stat: "↓", label: "Leadership burden reduced" },
      { stat: "Filled", label: "Clinical and admin roles" },
    ],
    primaryHref: "#",
    primaryLabel: "Visit Site",
    screenshot: null,
    deliverables: [
      { title: "Role Definition Package", type: "Staffing", placeholder: "cholla/work-1", description: "Clear job descriptions written for each open role, aligned to Cholla's integrated care model and compensation structure." },
      { title: "Candidate Screening Scorecard", type: "Staffing", placeholder: "cholla/work-2", description: "Custom screening criteria and interview scorecard built around clinical qualifications and culture fit." },
      { title: "Staff Onboarding Packet", type: "Operations", placeholder: "cholla/work-3", description: "Onboarding documentation, orientation materials, and role-specific checklists for new behavioral health staff." },
      { title: "Placement Tracking System", type: "Operations", placeholder: "cholla/work-4", description: "Workflow for tracking open roles, active candidates, placements, and 90-day check-ins." },
    ],
  },
  {
    slug: "abcac",
    name: "ABCAC",
    fullName: "Arizona Board for Certification of Addiction Counselors",
    screenshotLabel: "customers/3",
    category: "Certification Board",
    location: "Arizona",
    services: ["Website Development", "Member Portal", "AI Development", "Automation"],
    serviceslugs: ["ai-development", "automation"],
    tagline: "A modern credentialing platform for Arizona's addiction counseling professionals.",
    bio: "Creative Works partnered with the Arizona Board for Certification of Addiction Counselors (ABCAC) to modernize their entire digital infrastructure. We built their current website and a brand-new member portal giving Arizona's addiction counseling professionals one trusted place to apply for certification, register for IC&RC exams, manage recertifications and CEUs, and handle credential reciprocity. A fully redesigned Next.js and Vercel site is now launching — cleaner, mobile-first, and built to scale with ABCAC's 1,200+ certified professionals. We also delivered custom AI and automation that streamlines credentialing workflows, reduces manual administrative load, and creates a smoother experience for both staff and applicants.",
    challenge: "ABCAC's existing digital infrastructure was outdated, fragmented, and unable to scale — creating friction for applicants and significant manual workload for staff managing 1,200+ certified professionals.",
    approach: "We rebuilt their digital presence from the ground up: new website, purpose-built member portal, and AI-powered workflow automation — all on a modern stack that scales with the board's growth.",
    results: [
      { stat: "1,200+", label: "Certified professionals served" },
      { stat: "↓", label: "Manual admin workload" },
      { stat: "New", label: "Member portal launched" },
      { stat: "Fast", label: "Redesigned site launching" },
    ],
    primaryHref: "https://aback.org",
    primaryLabel: "Visit Current Site",
    secondaryHref: "https://abcac.vercel.app",
    secondaryLabel: "Preview New Site",
    screenshot: null,
    deliverables: [
      { title: "Website Redesign", type: "Web", placeholder: "abcac/work-1", description: "Mobile-first Next.js website built for speed, accessibility, and clarity for Arizona's addiction counseling community." },
      { title: "Member Portal", type: "Web", placeholder: "abcac/work-2", description: "Secure portal for certification applications, IC&RC exam registration, CEU management, and credential reciprocity." },
      { title: "Certification Application Flow", type: "Digital", placeholder: "abcac/work-3", description: "Redesigned application experience reducing friction and errors in the certification process." },
      { title: "Email Notification System", type: "Digital", placeholder: "abcac/work-4", description: "Automated email notifications for application status, renewal reminders, and exam registration confirmations." },
      { title: "Admin Workflow Automation", type: "AI", placeholder: "abcac/work-5", description: "AI-assisted processing that reduces manual review time and flags incomplete applications before staff ever see them." },
    ],
  },
  {
    slug: "da-vinci-consulting",
    name: "Da Vinci Consulting Services",
    screenshotLabel: "customers/4",
    category: "Behavioral Health Consulting",
    location: "Arizona",
    services: ["Website Development", "Brand Development", "Marketing"],
    serviceslugs: ["marketing"],
    tagline: "A polished brand and digital presence for 13 years of earned expertise.",
    bio: "Creative Works partnered with Da Vinci Consulting Services to build their digital presence and brand from the ground up. We designed and developed their website — a clean, professional platform that clearly communicates Da Vinci's full range of behavioral healthcare consulting services, from Medicaid credentialing and Joint Commission preparation to compliance training, leadership development, and operational consulting. Beyond the build, we led brand development and marketing strategy, shaping a polished, trustworthy identity that reflects the firm's 13+ years of expertise and its reputation for results-driven, compassionate consulting.",
    challenge: "Da Vinci had 13 years of deep expertise and a strong reputation — but a digital presence and brand identity that did not reflect either. Prospective clients could not quickly understand the full breadth of what Da Vinci offered.",
    approach: "We built a professional brand system from the ground up and developed a website that clearly communicates Da Vinci's service range, credentials, and positioning — backed by a targeted marketing strategy.",
    results: [
      { stat: "13yr", label: "Expertise now visible online" },
      { stat: "New", label: "Brand system built" },
      { stat: "Clear", label: "Service positioning" },
      { stat: "Live", label: "Marketing strategy active" },
    ],
    primaryHref: "https://davinciconsultingservices.com",
    primaryLabel: "Visit Site",
    screenshot: null,
    deliverables: [
      { title: "Brand Identity Package", type: "Brand", placeholder: "da-vinci/work-1", description: "Logo, color system, typography, and brand guidelines that communicate expertise and trustworthiness." },
      { title: "Website Design and Build", type: "Web", placeholder: "da-vinci/work-2", description: "Professional website articulating Da Vinci's full service range — credentialing, compliance, training, and operational consulting." },
      { title: "Service Brochure", type: "Print", placeholder: "da-vinci/work-3", description: "Printed leave-behind brochure for client meetings and conference distribution, reflecting the full scope of services." },
      { title: "Marketing One-Pager", type: "Print", placeholder: "da-vinci/work-4", description: "Single-page overview for email outreach and partnership conversations — clear positioning and key differentiators at a glance." },
      { title: "LinkedIn and Digital Templates", type: "Social", placeholder: "da-vinci/work-5", description: "Branded social templates for LinkedIn thought leadership, service announcements, and client wins." },
    ],
  },
  {
    slug: "rooted-practice",
    name: "Rooted Practice",
    screenshotLabel: "customers/5",
    category: "Clinical Resources and E-Commerce",
    location: "Nationwide",
    services: ["Website Design & Development", "Marketing"],
    serviceslugs: ["marketing"],
    tagline: "A trusted storefront for clinicians — built for the behavioral health field.",
    bio: "Creative Works partnered with Rooted Practice to design and develop their digital storefront and lead their marketing. We built a clean, professional e-commerce experience making it easy for therapists, group facilitators, and recovery centers to browse and purchase Rooted Practice's research-based clinical tools — from IOP and PHP curricula and facilitator kits to grief modules, mindfulness decks, and curated psychology book collections. Alongside the build, we developed a marketing strategy that positions Rooted Practice as a trusted, trauma-informed resource used by clinicians nationwide.",
    challenge: "Rooted Practice had exceptional clinical content but needed a digital home that could present it credibly to behavioral health professionals — and a marketing approach to drive awareness and sales nationwide.",
    approach: "We designed an e-commerce experience that communicates clinical credibility, built the full storefront, and developed a content-driven marketing strategy that speaks the language of the clinicians they serve.",
    results: [
      { stat: "Live", label: "E-commerce storefront" },
      { stat: "Natl.", label: "Marketing reach" },
      { stat: "↑", label: "Product visibility" },
      { stat: "Pro", label: "Clinical brand credibility" },
    ],
    primaryHref: "https://www.rooted-practice.com",
    primaryLabel: "Visit Site",
    screenshot: null,
    deliverables: [
      { title: "E-Commerce Website", type: "Web", placeholder: "rooted-practice/work-1", description: "Full product catalog, category navigation, and checkout flow designed for clinical buyers." },
      { title: "Product Listing Design", type: "Digital", placeholder: "rooted-practice/work-2", description: "Consistent, professional product pages with curriculum previews, facilitator guidance, and clear value propositions." },
      { title: "Social Media Content", type: "Social", placeholder: "rooted-practice/work-3", description: "Instagram and LinkedIn templates showcasing clinical tools, clinician testimonials, and educational content for behavioral health professionals." },
      { title: "Email Marketing Campaign", type: "Digital", placeholder: "rooted-practice/work-4", description: "Nurture and promotional emails targeting therapists, group facilitators, and treatment centers." },
      { title: "Digital Ad Creative", type: "Digital", placeholder: "rooted-practice/work-5", description: "Targeted ad creative for behavioral health professional audiences, driving traffic to the storefront." },
    ],
  },
  {
    slug: "at-the-crossroads",
    name: "At the Crossroads Therapy",
    screenshotLabel: "customers/6",
    category: "Telehealth and Counseling",
    location: "Arizona",
    services: ["Website Design & Development", "Marketing"],
    serviceslugs: ["marketing"],
    tagline: "A telehealth presence built to meet veterans and first responders exactly where they are.",
    bio: "Creative Works partnered with At the Crossroads Therapy to build their website and drive their marketing. We designed and developed a warm, trustworthy telehealth platform presenting their virtual counseling services — individual therapy, group counseling, CBT, and trauma-informed substance use care — with streamlined online scheduling. We paid special attention to the practice's mission of serving veterans, first responders, and law enforcement, shaping messaging that speaks directly to those who have spent their lives in service. On the marketing side, we built a strategy to grow the practice's reach and connect more individuals to compassionate care.",
    challenge: "At the Crossroads needed a digital presence that could reach their specific populations — veterans, first responders, and law enforcement — with messaging that resonated authentically, not generically.",
    approach: "We built a website and marketing strategy that speaks directly to service communities, with telehealth accessibility front and center and scheduling made as frictionless as possible.",
    results: [
      { stat: "Live", label: "Telehealth platform" },
      { stat: "Direct", label: "Veteran-focused messaging" },
      { stat: "Simple", label: "Online scheduling" },
      { stat: "↑", label: "Practice reach" },
    ],
    primaryHref: "https://www.atthecrossroadstherapy.com",
    primaryLabel: "Visit Site",
    screenshot: null,
    deliverables: [
      { title: "Telehealth Website", type: "Web", placeholder: "at-the-crossroads/work-1", description: "Warm, accessible platform presenting virtual counseling services with clear service descriptions and online scheduling." },
      { title: "Veterans and First Responders Flyer", type: "Print", placeholder: "at-the-crossroads/work-2", description: "Targeted print and digital flyer for distribution through VA networks, fire stations, and law enforcement outreach." },
      { title: "Social Media Content", type: "Social", placeholder: "at-the-crossroads/work-3", description: "Supportive, destigmatizing content designed for Instagram and Facebook — aimed at service communities and their families." },
      { title: "Email Outreach Templates", type: "Digital", placeholder: "at-the-crossroads/work-4", description: "Referral and partnership email templates for community organizations, employee assistance programs, and first responder leadership." },
    ],
  },
];

export function getCustomer(slug: string): CustomerData | undefined {
  return CUSTOMERS.find((c) => c.slug === slug);
}
