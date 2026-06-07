/* ============================================================================
   Creative Works, shared site chrome + reusable section helpers.
   Exposes everything on window.CW. Loaded as a Babel script on every page,
   AFTER the design-system bundle (window.CreativeWorksDesignSystem_42e791).
   ========================================================================== */
(function () {
  // Suppress the benign "ResizeObserver loop" notification that some browsers emit
  // during rapid layout/observer churn. It is not an actual error.
  window.addEventListener('error', function (e) {
    if (e && e.message && e.message.indexOf('ResizeObserver loop') !== -1) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return false;
    }
  }, true);
  // Also filter the benign message if it is routed through console.error.
  var _consoleError = console.error;
  console.error = function () {
    var first = arguments[0];
    if (typeof first === 'string' && first.indexOf('ResizeObserver loop') !== -1) return;
    return _consoleError.apply(console, arguments);
  };
  const DS = window.CreativeWorksDesignSystem_42e791;
  const {
    Button, Eyebrow, SectionHeading, Badge, ServiceCard, FeatureCard,
    StatsBand, CTASection, TestimonialCard, CheckoutButton, Input, Select, Textarea,
  } = DS;

  /* ----------------------------- Site constants ---------------------------- */
  const CONTACT = {
    city: 'Phoenix, Arizona',
    phone: '602-402-5121',
    phoneHref: 'tel:+16024025121',
    email: 'hello@phoenixcreativeworks.com',
    hours: ['Mon–Fri · 8:00 AM – 6:00 PM MST', 'Weekends · By appointment'],
  };

  // The Creative Works service suite, single source of truth.
  const SERVICES = [
    { slug: 'marketing', href: 'service-marketing.html', icon: 'megaphone', title: 'Marketing',
      tagline: 'Reach more people. Grow your mission.',
      short: 'Strategic marketing that builds awareness, engages audiences, and advances your mission.' },
    { slug: 'sharepoint', href: 'service-sharepoint.html', icon: 'folder-cog', title: 'SharePoint Setup',
      tagline: 'Smarter systems. Stronger collaboration.',
      short: 'Custom portals and workflows that improve collaboration and streamline operations.' },
    { slug: 'salesforce', href: 'service-salesforce.html', icon: 'cloud-cog', title: 'Salesforce Build-Outs',
      tagline: 'A CRM built around your care model.',
      short: 'Salesforce setup, automation, and dashboards tailored to behavioral health workflows.' },
    { slug: 'it', href: 'service-it.html', icon: 'shield-check', title: 'IT Services',
      tagline: 'Secure, reliable technology support.',
      short: 'Managed IT, cybersecurity, cloud solutions, and support your team can rely on.' },
    { slug: 'staffing', href: 'service-staffing.html', icon: 'users', title: 'Staffing Support',
      tagline: 'The right people, when you need them.',
      short: 'Connect with qualified professionals who bring the skills and heart your team needs.' },
    { slug: 'operations', href: 'service-operations.html', icon: 'refresh-cw', title: 'Operational Support',
      tagline: 'Better processes. Better outcomes.',
      short: 'Process improvement, training, and day-to-day support to keep your organization strong.' },
    { slug: 'bps', href: 'service-business-process.html', icon: 'list-checks', title: 'Business Process Services',
      tagline: 'Run the back office, done right.',
      short: 'Optimize or outsource billing, intake, HR, and administrative processes.' },
    { slug: 'consulting', href: 'service-consulting.html', icon: 'lightbulb', title: 'Consulting Services',
      tagline: 'Guidance for the decisions that matter.',
      short: 'Experienced advisors to help you plan growth, solve problems, and lead change.' },
    { slug: 'licensure', href: 'service-licensure.html', icon: 'badge-check', title: 'Licensure Services',
      tagline: 'Open and stay compliant with confidence.',
      short: 'Guidance through behavioral health center licensure, accreditation, and compliance.' },
  ];

  const NAV = [
    { label: 'Home', href: 'index.html', key: 'home' },
    { label: 'Services', href: 'services.html', key: 'services',
      menu: SERVICES.map((s) => ({ label: s.title, href: s.href })) },
    { label: 'Industries', href: 'industries.html', key: 'industries',
      menu: [{ label: 'Behavioral Health', href: 'behavioral-health.html' }] },
    { label: 'About', href: 'about.html', key: 'about' },
    { label: 'Resources', href: 'resources.html', key: 'resources' },
    { label: 'Contact', href: 'contact.html', key: 'contact' },
  ];

  const CONSULT_HREF = 'schedule-consultation.html';

  // Stripe product catalog, amounts in cents. Mirrors lib/constants.ts in the handoff.
  // priceId values are placeholders to be replaced with real Stripe Price IDs.
  const PRODUCTS = {
    consultationDeposit: { key: 'consultationDeposit', name: 'Initial Consultation Deposit', amount: 25000, mode: 'payment', priceId: 'price_REPLACE_consult', blurb: 'Applied toward your engagement.' },
    discoveryAssessment: { key: 'discoveryAssessment', name: 'Discovery & Operations Assessment', amount: 150000, mode: 'payment', priceId: 'price_REPLACE_discovery', blurb: 'A full assessment of systems, marketing, staffing, and operations.' },
    projectDeposit: { key: 'projectDeposit', name: 'Custom Project Deposit', amount: 250000, mode: 'payment', priceId: 'price_REPLACE_project', blurb: 'Reserve your project start and lock in scope.' },
  };
  const usd = (cents) => '$' + (cents / 100).toLocaleString('en-US', { minimumFractionDigits: 0 });

  /* ------------------------------- Primitives ------------------------------ */
  const container = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)' };

  function Container({ children, style }) {
    return <div style={{ ...container, ...style }}>{children}</div>;
  }

  // Tinted square icon container (Lucide icon inside).
  function IconBadge({ icon, size = 52, iconSize = 26, tone = 'orange' }) {
    const c = tone === 'navy' ? 'var(--cw-navy-midnight)' : 'var(--cw-orange)';
    return (
      <div style={{
        width: size, height: size, borderRadius: 'var(--radius-md)', flex: '0 0 auto',
        background: 'color-mix(in srgb, ' + c + ' 9%, white)',
        border: '1px solid color-mix(in srgb, ' + c + ' 22%, white)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: c,
      }}>
        <i data-lucide={icon} style={{ width: iconSize, height: iconSize }}></i>
      </div>
    );
  }

  // Stable, per-page-unique id generator for image slots (persistence keys).
  const _usedSlotIds = {};
  function makeSlotId(key) {
    const page = (location.pathname.split('/').pop() || 'page').replace(/\.html$/, '') || 'page';
    let base = page + '__' + String(key || 'img').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 44);
    let id = base, n = 2;
    while (_usedSlotIds[id]) { id = base + '-' + n; n++; }
    _usedSlotIds[id] = true;
    return id;
  }
  function useSlotId(key, explicit) {
    const ref = React.useRef(null);
    if (!ref.current) {
      ref.current = explicit
        ? 'cw-' + String(key).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48)
        : makeSlotId(key);
    }
    return ref.current;
  }

  // Photo in a rounded frame with optional phoenix-curve accent.
  // Now a user-fillable <image-slot>: `src` is the default until an image is dropped.
  function ImageFrame({ src, alt = '', ratio = '5 / 3.4', curve = 'tr', shadow = 'var(--shadow-lg)', slot, style }) {
    const id = useSlotId(slot || src || alt || 'image', !!slot);
    const curves = {
      tr: { right: -18, top: -18, borderLeftColor: 'transparent', borderBottomColor: 'transparent', transform: 'rotate(12deg)' },
      bl: { left: -16, bottom: -16, borderRightColor: 'transparent', borderTopColor: 'transparent', transform: 'rotate(12deg)' },
      none: null,
    };
    const cv = curves[curve];
    return (
      <div style={{ position: 'relative', ...style }}>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: shadow, aspectRatio: ratio }}>
          <image-slot id={id} src={src} fit="cover" shape="rect"
            placeholder={alt ? ('Drop a photo · ' + alt) : 'Drop a photo'}
            style={{ display: 'block', width: '100%', height: '100%' }}></image-slot>
        </div>
        {cv && <div aria-hidden="true" style={{
          position: 'absolute', width: 120, height: 120, border: '3px solid var(--cw-orange)',
          borderRadius: '50%', ...cv, pointerEvents: 'none',
        }} />}
      </div>
    );
  }

  // Empty image placeholder, also a user-fillable <image-slot> (no default image).
  function Placeholder({ label = 'Drop an image', ratio = '5 / 3.4', tone = 'cloud', icon = 'image', slot, style }) {
    const id = useSlotId(slot || label || 'image', !!slot);
    return (
      <div style={{
        position: 'relative', aspectRatio: ratio, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        ...style,
      }}>
        <image-slot id={id} shape="rect" placeholder={label}
          style={{ display: 'block', width: '100%', height: '100%' }}></image-slot>
      </div>
    );
  }

  /* -------------------------------- Section -------------------------------- */
  // Page section with bg variant + vertical rhythm. tone: white | cloud | navy
  function Section({ tone = 'white', children, id, pad, style }) {
    const bg = tone === 'cloud' ? 'var(--cw-cloud)' : tone === 'navy' ? 'var(--cw-navy-midnight)' : 'var(--color-bg)';
    return (
      <section id={id} style={{ background: bg, padding: (pad || 'var(--section-y)') + ' 0', ...style }}>
        <Container>{children}</Container>
      </section>
    );
  }

  /* ------------------------------ Breadcrumb ------------------------------- */
  function Breadcrumb({ items = [] }) {
    return (
      <nav aria-label="Breadcrumb" style={{ marginBottom: 22 }}>
        <ol style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, margin: 0, padding: 0,
          fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>
          {items.map((it, i) => (
            <li key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {it.href ? <a href={it.href} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{it.label}</a>
                       : <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{it.label}</span>}
              {i < items.length - 1 && <span aria-hidden="true" style={{ color: 'var(--cw-gray-400)' }}>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  /* -------------------------------- Header --------------------------------- */
  function Header({ active }) {
    const [open, setOpen] = React.useState(null);
    const [mobile, setMobile] = React.useState(false);
    const linkStyle = (item) => ({
      display: 'inline-flex', alignItems: 'center', gap: 5, padding: '8px 14px',
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--fs-sm)',
      color: active === item.key ? 'var(--cw-orange)' : 'var(--text-heading)',
      textDecoration: 'none', borderRadius: 'var(--radius-sm)', position: 'relative',
    });
    return (
      <header style={{
        position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'saturate(160%) blur(8px)', borderBottom: '1px solid var(--border-subtle)',
      }}>
        <div style={{ ...container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingTop: 12, paddingBottom: 12 }}>
          <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="assets/logo-full.png" alt="Creative Works" style={{ height: 38 }} />
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="cw-desktop-nav">
            {NAV.map((item) => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => setOpen(item.menu ? item.label : null)}
                onMouseLeave={() => setOpen(null)}>
                <a href={item.href} style={linkStyle(item)}>
                  {item.label}
                  {item.menu && <span aria-hidden="true" style={{ fontSize: 9, color: 'var(--cw-orange)' }}>▼</span>}
                  {active === item.key && <span aria-hidden="true" style={{ position: 'absolute', left: 14, right: 14, bottom: 1, height: 2, background: 'var(--cw-orange)', borderRadius: 2 }} />}
                </a>
                {item.menu && open === item.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, minWidth: 230, background: '#fff',
                    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-lg)', padding: 8,
                  }}>
                    {item.menu.map((m) => (
                      <a key={m.label} href={m.href} style={{
                        display: 'block', padding: '9px 12px', fontFamily: 'var(--font-body)',
                        fontSize: 'var(--fs-sm)', color: 'var(--text-body)', textDecoration: 'none', borderRadius: 'var(--radius-sm)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--cw-cloud)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >{m.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="cw-desktop-nav"><Button href={CONSULT_HREF} size="sm" arrow>Schedule a Consultation</Button></span>
            <button aria-label="Menu" onClick={() => setMobile((v) => !v)} className="cw-mobile-btn" style={{
              display: 'none', border: '1px solid var(--border-subtle)', background: '#fff',
              borderRadius: 'var(--radius-sm)', width: 42, height: 42, cursor: 'pointer', fontSize: 18, color: 'var(--text-heading)',
            }}>{mobile ? '✕' : '☰'}</button>
          </div>
        </div>

        {mobile && (
          <div style={{ borderTop: '1px solid var(--border-subtle)', background: '#fff', padding: '8px var(--container-pad) 18px' }}>
            {NAV.map((i) => (
              <a key={i.label} href={i.href} style={{
                display: 'block', padding: '12px 4px', fontFamily: 'var(--font-body)', fontWeight: 600,
                color: active === i.key ? 'var(--cw-orange)' : 'var(--text-heading)', textDecoration: 'none',
                borderBottom: '1px solid var(--border-subtle)',
              }}>{i.label}</a>
            ))}
            <div style={{ marginTop: 16 }}><Button href={CONSULT_HREF} arrow style={{ width: '100%' }}>Schedule a Consultation</Button></div>
          </div>
        )}
      </header>
    );
  }

  /* -------------------------------- Footer --------------------------------- */
  const FOOTER_COLS = [
    { head: 'Quick Links', links: [
      { label: 'Home', href: 'index.html' }, { label: 'Services', href: 'services.html' },
      { label: 'About', href: 'about.html' }, { label: 'Case Studies', href: 'case-studies.html' },
      { label: 'Resources', href: 'resources.html' }, { label: 'Contact', href: 'contact.html' } ] },
    { head: 'Services', links: SERVICES.map((s) => ({ label: s.title, href: s.href })) },
    { head: 'Industries', links: [
      { label: 'Behavioral Health', href: 'behavioral-health.html' },
      { label: 'All Industries', href: 'industries.html' },
      { label: 'Schedule a Consultation', href: CONSULT_HREF } ] },
  ];
  const SOCIAL = ['linkedin', 'facebook', 'twitter', 'youtube'];

  function Footer() {
    const linkCss = { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-on-inverse-muted)', textDecoration: 'none' };
    const headCss = { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--ls-label)', color: '#fff', margin: '0 0 16px' };
    return (
      <footer style={{ background: 'var(--cw-navy-deep)', color: 'var(--text-on-inverse)' }}>
        <div style={{ ...container, paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: '2rem',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={{ minWidth: 220 }}>
            <img src="assets/logo-full-white.png" alt="Creative Works" style={{ height: 36, marginBottom: 16 }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', lineHeight: 1.6, color: 'var(--text-on-inverse-muted)', margin: '0 0 18px', maxWidth: '34ch' }}>
              Full-service professional support for behavioral health organizations, marketing, SharePoint, IT, staffing, and operations.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIAL.map((s) => (
                <a key={s} href="#" aria-label={s} style={{
                  width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}><i data-lucide={s} style={{ width: 16, height: 16 }}></i></a>
              ))}
            </div>
          </div>
          {FOOTER_COLS.map((c) => (
            <div key={c.head}>
              <h4 style={headCss}>{c.head}</h4>
              <div style={{ display: 'grid', gap: 10 }}>
                {c.links.map((l) => <a key={l.label} href={l.href} style={linkCss}>{l.label}</a>)}
              </div>
            </div>
          ))}
          <div>
            <h4 style={headCss}>Contact Us</h4>
            <div style={{ display: 'grid', gap: 12, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--text-on-inverse-muted)' }}>
              <span style={{ display: 'flex', gap: 9, alignItems: 'center' }}><i data-lucide="map-pin" style={{ width: 16, height: 16, color: 'var(--cw-orange-soft)' }}></i>{CONTACT.city}</span>
              <a href={CONTACT.phoneHref} style={{ ...linkCss, display: 'flex', gap: 9, alignItems: 'center' }}><i data-lucide="phone" style={{ width: 16, height: 16, color: 'var(--cw-orange-soft)' }}></i>{CONTACT.phone}</a>
              <a href={'mailto:' + CONTACT.email} style={{ ...linkCss, display: 'flex', gap: 9, alignItems: 'center' }}><i data-lucide="mail" style={{ width: 16, height: 16, color: 'var(--cw-orange-soft)' }}></i>{CONTACT.email}</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
          <div style={{ ...container, paddingTop: 18, paddingBottom: 18, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-inverse-muted)' }}>
            <span>© 2026 Creative Works. All rights reserved.</span>
            <span style={{ display: 'flex', gap: 22 }}>
              <a href="privacy-policy.html" style={{ color: 'var(--text-on-inverse-muted)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="terms-of-service.html" style={{ color: 'var(--text-on-inverse-muted)', textDecoration: 'none' }}>Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }

  /* ------------------------------- PageHero -------------------------------- */
  // Inner hero for sub-pages. tone: cloud (default) | white | navy. Optional image/placeholder on the right.
  function PageHero({ eyebrow, title, lead, primary, secondary, breadcrumb, image, imageAlt, placeholder, tone = 'cloud', align }) {
    const dark = tone === 'navy';
    const bg = dark ? 'var(--cw-navy-midnight)' : tone === 'white' ? 'var(--color-bg)' : 'var(--cw-cloud)';
    const headColor = dark ? '#fff' : 'var(--text-heading)';
    const leadColor = dark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
    const hasMedia = image || placeholder;
    const centered = align === 'center' || !hasMedia;
    return (
      <section style={{ background: bg, padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', position: 'relative', overflow: 'hidden' }}>
        {dark && <img src="assets/phoenix-mark.png" alt="" aria-hidden="true" style={{ position: 'absolute', right: -60, top: -40, width: 320, opacity: 0.06, pointerEvents: 'none' }} />}
        <Container style={{ position: 'relative' }}>
          <div style={{
            display: 'grid', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center',
            gridTemplateColumns: hasMedia ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            textAlign: centered && !hasMedia ? 'center' : 'left',
            maxWidth: centered && !hasMedia ? 800 : 'none', marginInline: centered && !hasMedia ? 'auto' : 0,
          }}>
            <div>
              {breadcrumb && <Breadcrumb items={breadcrumb} />}
              {eyebrow && <Eyebrow color={dark ? 'var(--cw-orange-soft)' : 'var(--text-accent)'} style={{ alignItems: centered && !hasMedia ? 'center' : 'flex-start' }}>{eyebrow}</Eyebrow>}
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1-fluid)',
                lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-tight)', color: headColor, margin: eyebrow ? '16px 0 0' : 0,
              }}>{title}</h1>
              {lead && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-normal)', color: leadColor, margin: '20px 0 0', maxWidth: '56ch', marginInline: centered && !hasMedia ? 'auto' : 0 }}>{lead}</p>}
              {(primary || secondary) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 28, justifyContent: centered && !hasMedia ? 'center' : 'flex-start' }}>
                  {primary && <Button href={primary.href} arrow size="lg" variant={dark ? 'primary' : 'primary'}>{primary.label}</Button>}
                  {secondary && <Button href={secondary.href} variant={dark ? 'inverse' : 'secondary'} arrow size="lg">{secondary.label}</Button>}
                </div>
              )}
            </div>
            {image && <ImageFrame src={image} alt={imageAlt} />}
            {placeholder && <Placeholder label={placeholder} tone={dark ? 'navy' : 'cloud'} />}
          </div>
        </Container>
      </section>
    );
  }

  /* ---------------------------- ProcessSteps ------------------------------- */
  function ProcessSteps({ steps = [], columns }) {
    const cols = columns || Math.min(steps.length, 4);
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)', padding: '26px 24px', position: 'relative', display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <span style={{
              width: 38, height: 38, borderRadius: '50%', background: 'var(--cw-gradient-phoenix)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16,
            }}>{i + 1}</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h4)', color: 'var(--text-heading)', margin: '4px 0 0' }}>{s.title}</h3>
            {s.desc && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>}
          </div>
        ))}
      </div>
    );
  }

  /* ------------------------------ CheckGrid -------------------------------- */
  // Grid of orange-check bullet items. items = string[] or {title, desc}[]
  function CheckGrid({ items = [], columns = 2, icon = 'circle-check-big', inverse = false }) {
    const titleColor = inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)';
    const descColor = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${columns >= 3 ? 220 : 280}px, 1fr))`, gap: '18px 32px' }}>
        {items.map((it, i) => {
          const obj = typeof it === 'string' ? { title: it } : it;
          return (
            <div key={i} style={{ display: 'flex', gap: 12 }}>
              <i data-lucide={icon} style={{ width: 22, height: 22, color: 'var(--cw-orange)', flex: '0 0 auto', marginTop: 2 }}></i>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: obj.desc ? 700 : 600, color: titleColor, fontSize: 'var(--fs-body)' }}>{obj.title}</div>
                {obj.desc && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: descColor, lineHeight: 1.55, marginTop: 3 }}>{obj.desc}</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  /* --------------------------- Problem / Solution -------------------------- */
  function ProblemSolution({ problems = [], solutions = [], problemTitle = 'The common challenge', solutionTitle = 'The Creative Works solution' }) {
    const col = (title, items, accent, icon) => (
      <div style={{
        flex: '1 1 320px', background: accent ? 'var(--surface-card)' : 'var(--cw-cloud)',
        border: '1px solid ' + (accent ? 'color-mix(in srgb, var(--cw-orange) 30%, white)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-xl)', padding: '30px 28px', boxShadow: accent ? 'var(--shadow-card)' : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <i data-lucide={icon} style={{ width: 22, height: 22, color: accent ? 'var(--cw-orange)' : 'var(--cw-gray-400)' }}></i>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h4)', color: 'var(--text-heading)', margin: 0 }}>{title}</h3>
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
          {items.map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: accent ? 'var(--text-body)' : 'var(--text-muted)', lineHeight: 1.5 }}>
              <i data-lucide={accent ? 'check' : 'minus'} style={{ width: 18, height: 18, flex: '0 0 auto', marginTop: 3, color: accent ? 'var(--cw-orange)' : 'var(--cw-gray-400)' }}></i>
              {t}
            </li>
          ))}
        </ul>
      </div>
    );
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'stretch' }}>
        {col(problemTitle, problems, false, 'alert-circle')}
        {col(solutionTitle, solutions, true, 'sparkles')}
      </div>
    );
  }

  /* --------------------------------- FAQ ----------------------------------- */
  function FAQ({ items = [] }) {
    const [open, setOpen] = React.useState(0);
    return (
      <div style={{ display: 'grid', gap: 12, maxWidth: 820, margin: '0 auto' }}>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-body-lg)', color: 'var(--text-heading)',
              }}>
                {it.q}
                <i data-lucide="chevron-down" style={{ width: 20, height: 20, color: 'var(--cw-orange)', flex: '0 0 auto', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-base)' }}></i>
              </button>
              {isOpen && <div style={{ padding: '0 22px 20px', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)' }}>{it.a}</div>}
            </div>
          );
        })}
      </div>
    );
  }

  /* ----------------------------- Pill / chips ------------------------------ */
  function PillList({ items = [], icon = 'building-2' }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {items.map((t, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px',
            background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)',
            boxShadow: 'var(--shadow-xs)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', fontWeight: 600, color: 'var(--text-heading)',
          }}>
            <i data-lucide={icon} style={{ width: 16, height: 16, color: 'var(--cw-orange)' }}></i>{t}
          </span>
        ))}
      </div>
    );
  }

  /* ------------------------------ Page wrapper ----------------------------- */
  function Page({ active, children }) {
    return (
      <div style={{ background: 'var(--color-bg)' }}>
        <Header active={active} />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }

  /* ------------------------------ Lucide hydrate --------------------------- */
  function hydrateIcons(root) {
    root = root || document.body;
    const draw = () => { if (window.lucide) window.lucide.createIcons(); };
    draw();
    setTimeout(draw, 300);
    // Permanent but heavily-debounced observer: coalesce bursts of DOM mutations
    // during load (React mount, image-slot upgrades) into ONE redraw per 220ms,
    // so we don't feed a sustained reflow wave to the preview's layout observer.
    // Stays connected so late interactions (filters, menus) still hydrate icons.
    let timer = null;
    const obs = new MutationObserver(() => {
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        obs.disconnect();
        draw();
        obs.observe(root, { childList: true, subtree: true });
      }, 220);
    });
    obs.observe(root, { childList: true, subtree: true });
  }

  // Mount a page element into #root, with header/footer chrome + icon hydration.
  function mount(element, active) {
    const root = document.getElementById('root');
    ReactDOM.createRoot(root).render(<Page active={active}>{element}</Page>);
    hydrateIcons(root);
  }

  // Mount raw (no chrome), for checkout / standalone screens.
  function mountRaw(element) {
    const root = document.getElementById('root');
    ReactDOM.createRoot(root).render(element);
    hydrateIcons(root);
  }

  window.CW = {
    DS, CONTACT, SERVICES, NAV, CONSULT_HREF, PRODUCTS, usd,
    Container, IconBadge, ImageFrame, Placeholder, Section, Breadcrumb,
    Header, Footer, PageHero, ProcessSteps, CheckGrid, ProblemSolution, FAQ, PillList, Page,
    mount, mountRaw, hydrateIcons,
  };
})();
