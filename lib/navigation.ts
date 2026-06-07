export const CONSULT_HREF = "/schedule-consultation";

export interface NavItem {
  label: string;
  href: string;
  key: string;
  menu?: { label: string; href: string }[];
}

export const NAV: NavItem[] = [
  { label: "Home", href: "/", key: "home" },
  {
    label: "Services",
    href: "/services",
    key: "services",
    menu: [
      { label: "Marketing", href: "/services/marketing" },
      { label: "SharePoint Setup", href: "/services/sharepoint-setup" },
      { label: "Salesforce Build-Outs", href: "/services/salesforce-build-outs" },
      { label: "IT Services", href: "/services/it-services" },
      { label: "Staffing Support", href: "/services/staffing-support" },
      { label: "Operational Support", href: "/services/operational-support" },
      { label: "Business Process Services", href: "/services/business-process-services" },
      { label: "Consulting Services", href: "/services/consulting" },
      { label: "Licensure Services", href: "/services/licensure" },
      { label: "Automation", href: "/services/automation" },
      { label: "AI Development", href: "/services/ai-development" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    key: "industries",
    menu: [{ label: "Behavioral Health", href: "/industries/behavioral-health" }],
  },
  {
    label: "About",
    href: "/about",
    key: "about",
    menu: [
      { label: "About Creative Works", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  { label: "Resources", href: "/resources", key: "resources" },
  { label: "Contact", href: "/contact", key: "contact" },
];
