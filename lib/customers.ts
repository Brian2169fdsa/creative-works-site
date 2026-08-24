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
  screenshot: string | null;
  deliverables: CustomerDeliverable[];
}

export const CUSTOMERS: CustomerData[] = [
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
    primaryHref: "https://cholla-behavioral-health-azure.vercel.app",
    primaryLabel: "View the Website",
    screenshot: "/images/customer-cholla.png",
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
    primaryHref: "https://www.abcac.org",
    primaryLabel: "Visit Current Site",
    secondaryHref: "https://abcac.vercel.app",
    secondaryLabel: "Preview New Site",
    screenshot: "/images/customer-abcac.png",
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
    slug: "sanctuary-community-initiative",
    name: "Sanctuary Community Initiative",
    screenshotLabel: "customers/6",
    category: "Nonprofit",
    location: "Maricopa & Pinal Counties, AZ",
    services: ["Website Design & Development", "Brand & Messaging", "Marketing", "Automation"],
    serviceslugs: ["marketing", "automation"],
    tagline: "A digital home for the nonprofit bridging the gap between treatment and lasting stability.",
    bio: "Creative Works partnered with Sanctuary Community Initiative to build the digital presence behind their mission: funding the practical support people need after treatment ends or incarceration ends — housing, transportation, food, clothing, IDs, job readiness, and family connection. We designed and built their full website around the message that treatment may end, but the need for support does not, with donation and monthly membership flows through The Sanctuary, impact storytelling, testimonials, a blog, and a clear connection to their licensed treatment partner, Sanctuary Recovery Centers. Behind the scenes, automated email and text outreach keeps donors and community partners connected without adding administrative burden.",
    challenge: "Sanctuary Community Initiative needed a credible digital presence that could tell a complex story simply — why post-treatment support matters — and turn that understanding into donations, monthly members, and community partnerships.",
    approach: "We built the website and messaging around their True Healing & Community Support mission, made giving frictionless with donation and membership flows, and automated donor and partner outreach so a lean nonprofit team can stay focused on the people they serve.",
    results: [
      { stat: "Live", label: "Nonprofit platform" },
      { stat: "Simple", label: "Donation & membership flows" },
      { stat: "Auto", label: "Donor & partner outreach" },
      { stat: "Clear", label: "Mission-first messaging" },
    ],
    primaryHref: "https://www.sanctuaryci.org",
    primaryLabel: "View the Website",
    screenshot: "/images/customer-sanctuary.png",
    deliverables: [
      { title: "Nonprofit Website Build", type: "Web", placeholder: "sanctuary/work-1", description: "Full website presenting the mission, impact, board, and programs — built to turn understanding into support." },
      { title: "Donation & Membership Flows", type: "Digital", placeholder: "sanctuary/work-2", description: "One-time and monthly giving through The Sanctuary sustaining membership, designed to make every gift effortless." },
      { title: "Brand Messaging Framework", type: "Brand", placeholder: "sanctuary/work-3", description: "Messaging built around 'Treatment may end. The need for support does not.' and the True Healing & Community Support mission." },
      { title: "Impact Storytelling", type: "Digital", placeholder: "sanctuary/work-4", description: "The Numbers, testimonials, gallery, and blog — showing where every dollar goes and what it changes." },
      { title: "Email & Text Outreach Automation", type: "AI", placeholder: "sanctuary/work-5", description: "Automated email and MMS outreach keeping donors and community partners engaged without manual effort." },
    ],
  },
];

export function getCustomer(slug: string): CustomerData | undefined {
  return CUSTOMERS.find((c) => c.slug === slug);
}
