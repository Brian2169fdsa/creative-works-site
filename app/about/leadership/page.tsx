import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Eyebrow from "@/components/ui/Eyebrow";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Leadership | Phoenix Creative Works",
  description:
    "Meet the leadership team behind Phoenix Creative Works, the Phoenix-based professional services firm helping behavioral health organizations build stronger operations and serve their communities better.",
  openGraph: {
    title: "Leadership | Phoenix Creative Works",
    description:
      "The experienced team guiding Phoenix Creative Works and the organizations we serve.",
    images: [{ url: "/images/phoenix-mark.png" }],
  },
};

const LEADERS = [
  {
    name: "Brian Reinhart",
    title: "CEO / President",
    photo: "/images/leader-brian-reinhart.png",
    bio: "Brian founded Phoenix Creative Works with a clear conviction: behavioral health organizations do vital work, and they deserve operational support that truly understands their mission. With a background spanning professional services, business development, and organizational strategy, Brian leads Phoenix Creative Works with a people-first approach that puts long-term client outcomes ahead of short-term transactions. He is responsible for the firm's strategic direction, client relationships, and overall vision.",
    focus: [
      "Strategic direction and firm leadership",
      "Client partnership and growth",
      "Business development and community engagement",
    ],
  },
  {
    name: "Sierra Largo",
    title: "CFO",
    photo: "/images/leader-sierra-largo.png",
    bio: "Sierra brings financial clarity and operational discipline to Phoenix Creative Works, ensuring the firm and the clients it serves are built on a foundation that is sustainable, transparent, and built to grow. Her expertise spans financial planning, reporting, internal controls, and the operational finance needs unique to mission-driven organizations. Sierra partners closely with clients who need stronger financial systems and processes as part of their broader operational transformation.",
    focus: [
      "Financial planning and reporting",
      "Internal controls and operational finance",
      "Client financial systems support",
    ],
  },
  {
    name: "Wayne Giles",
    title: "COO",
    photo: "/images/leader-wayne-giles.png",
    bio: "Wayne is the operational engine behind Phoenix Creative Works, overseeing how the firm delivers on its commitments to clients. With deep experience in process design, systems implementation, and operational leadership, Wayne ensures that every engagement is executed with consistency, clarity, and care. He works directly with clients on operational support engagements, bringing structure to organizations that are ready to run more efficiently and serve more effectively.",
    focus: [
      "Firm operations and delivery excellence",
      "Process design and systems implementation",
      "Client operational support engagements",
    ],
  },
];

const VALUES = [
  {
    title: "Experienced across disciplines",
    desc: "Our leadership team brings expertise in strategy, finance, and operations, covering the full range of what behavioral health organizations need.",
  },
  {
    title: "Deeply committed to the mission",
    desc: "Every member of our leadership team chose this work because they believe in it. We are not here to process transactions, we are here to make a difference.",
  },
  {
    title: "Accountable to outcomes",
    desc: "We measure our success by the strength of the organizations we support, not by the scope of our engagements. Your results are our results.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Leadership"
        title="The team behind Phoenix Creative Works."
        lead="Phoenix Creative Works is led by a team of experienced professionals who believe that stronger organizations produce better outcomes for the communities they serve. We bring strategy, finance, and operations together under one roof, so our clients never have to work with multiple disconnected partners."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "About Phoenix Creative Works", href: "/about" }}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
        tone="cloud"
      />

      {/* Leadership Cards */}
      <Section>
        <div className="grid grid-cols-1 gap-16">
          {LEADERS.map((leader, idx) => (
            <div
              key={leader.name}
              className={`grid grid-cols-1 gap-10 items-center ${
                idx % 2 === 0
                  ? "lg:grid-cols-[1fr_auto]"
                  : "lg:grid-cols-[auto_1fr]"
              }`}
            >
              {/* Odd rows: photo renders first in DOM → left column */}
              {idx % 2 === 1 && (
                <div className="hidden lg:block">
                  <LeaderPhoto leader={leader} />
                </div>
              )}

              {/* Content */}
              <div>
                {/* Mobile photo */}
                <div className="lg:hidden mb-8">
                  <LeaderPhoto leader={leader} />
                </div>

                <Eyebrow>{leader.title}</Eyebrow>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-snug text-navy-midnight mt-3 mb-5">
                  {leader.name}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {leader.bio}
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-navy-midnight mb-3">
                    Areas of Focus
                  </h3>
                  <ul className="grid gap-2">
                    {leader.focus.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-2.5" />
                        <span className="text-base text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-1">
                  <a
                    href="#"
                    aria-label={`Connect with ${leader.name} on LinkedIn`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-midnight border border-gray-200 rounded-pill px-4 py-2 hover:border-orange hover:text-orange transition-colors"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:hello@phoenixcreativeworks.com`}
                    aria-label={`Email ${leader.name}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-midnight border border-gray-200 rounded-pill px-4 py-2 hover:border-orange hover:text-orange transition-colors"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Email
                  </a>
                </div>
              </div>

              {/* Even rows: photo renders last in DOM → right column */}
              {idx % 2 === 0 && (
                <div className="hidden lg:block">
                  <LeaderPhoto leader={leader} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* Team values */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="How We Lead"
          title="Leadership that puts your mission first."
          lead="The Phoenix Creative Works leadership team is involved in every client engagement. We do not hand work off and disappear. We stay accountable to the outcomes we set out to achieve."
          className="mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-lg border border-gray-200 shadow-card p-7 flex flex-col gap-3"
            >
              <div className="w-10 h-1 bg-orange rounded-full" />
              <h3 className="font-display font-bold text-lg text-navy-midnight">
                {v.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Navy mission band */}
      <Section tone="navy">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-display font-bold text-2xl md:text-3xl leading-snug text-white">
            We built Phoenix Creative Works because we believe behavioral health
            organizations deserve a partner that shows up, follows through, and
            truly understands the work.
          </p>
          <p className="mt-5 text-base text-white/60">
            Brian Reinhart, Founder and CEO
          </p>
        </div>
      </Section>

      <CTASection
        title="Ready to work with our team?"
        body="Schedule a consultation and we will match you with the right support for your organization."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}

function LeaderPhoto({
  leader,
}: {
  leader: { name: string; title: string; photo?: string };
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-[3px] border-orange opacity-60 pointer-events-none z-10"
      />
      <div className="rounded-xl overflow-hidden shadow-card bg-cloud">
        {leader.photo ? (
          <Image
            src={leader.photo}
            alt={leader.name}
            width={0}
            height={0}
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="w-full h-auto"
          />
        ) : (
          <div className="aspect-[3/3.6] flex flex-col items-center justify-center gap-4">
            <div className="w-24 h-24 rounded-full bg-navy-midnight flex items-center justify-center">
              <span className="font-display font-extrabold text-3xl text-white tracking-tight">
                {leader.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <p className="font-display font-bold text-lg text-navy-midnight">{leader.name}</p>
            <p className="text-sm text-orange font-semibold">{leader.title}</p>
          </div>
        )}
      </div>
    </div>
  );
}
