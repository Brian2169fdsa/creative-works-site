/* ============================================================================
   Creative Works, generic Service detail page engine.
   Exposes CW.ServicePage(config). Load AFTER lib/site.jsx.
   ========================================================================== */
(function () {
  const CW = window.CW;
  const DS = window.CreativeWorksDesignSystem_42e791;
  const { Container, Section, ImageFrame, Placeholder, ProcessSteps, CheckGrid, ProblemSolution, SERVICES, CONSULT_HREF } = CW;
  const { Button, Eyebrow, SectionHeading, ServiceCard, CTASection } = DS;

  function bySlug(slug) { return SERVICES.find((s) => s.slug === slug); }

  function CardRow({ cards = [], columns }) {
    const min = columns >= 4 ? 200 : columns === 3 ? 240 : 260;
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap: 20 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {c.icon && <CW.IconBadge icon={c.icon} size={46} iconSize={22} />}
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h4)', color: 'var(--text-heading)', margin: 0 }}>{c.title}</h3>
            {c.desc && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)', margin: 0 }}>{c.desc}</p>}
          </div>
        ))}
      </div>
    );
  }

  function Architecture({ nodes = [] }) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14 }}>
        {nodes.map((n, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 18px', background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xs)' }}>
            <i data-lucide={n.icon || 'folder'} style={{ width: 20, height: 20, color: 'var(--cw-orange)', flex: '0 0 auto' }}></i>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--fs-sm)', color: 'var(--text-heading)' }}>{n.label}</span>
          </div>
        ))}
      </div>
    );
  }

  function Callout({ s }) {
    const dark = s.tone === 'navy';
    return (
      <Section tone={dark ? 'navy' : 'cloud'}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'center' }}>
          <div>
            <SectionHeading inverse={dark} eyebrow={s.eyebrow} title={s.title} lead={s.body} />
            {s.points && (
              <div style={{ marginTop: 24 }}>
                <CheckGrid items={s.points} columns={1} inverse={dark} />
              </div>
            )}
          </div>
          {s.image ? <ImageFrame src={s.image} alt={s.imageAlt || ''} curve="bl" shadow="var(--shadow-card)" />
                   : <Placeholder label={s.placeholder || 'Image placeholder'} tone={dark ? 'navy' : 'cloud'} icon={s.placeholderIcon || 'image'} />}
        </div>
      </Section>
    );
  }

  function renderSection(s, i) {
    if (s.type === 'cards') {
      return (
        <Section key={i} tone={s.tone || 'white'}>
          <SectionHeading align={s.align || 'center'} eyebrow={s.eyebrow} title={s.title} lead={s.lead} style={{ marginBottom: 40 }} />
          <CardRow cards={s.cards} columns={s.columns || Math.min(s.cards.length, 4)} />
        </Section>
      );
    }
    if (s.type === 'checklist') {
      return (
        <Section key={i} tone={s.tone || 'white'}>
          <SectionHeading align={s.align || 'left'} eyebrow={s.eyebrow} title={s.title} lead={s.lead} style={{ marginBottom: 36 }} />
          <CheckGrid items={s.items} columns={s.columns || 2} icon={s.icon} />
        </Section>
      );
    }
    if (s.type === 'architecture') {
      return (
        <Section key={i} tone={s.tone || 'cloud'}>
          <SectionHeading align="center" eyebrow={s.eyebrow} title={s.title} lead={s.lead} style={{ marginBottom: 36 }} />
          <Architecture nodes={s.nodes} />
        </Section>
      );
    }
    if (s.type === 'callout') return <Callout key={i} s={s} />;
    return null;
  }

  function RelatedServices({ slugs = [] }) {
    const items = slugs.map(bySlug).filter(Boolean);
    if (!items.length) return null;
    return (
      <Section tone="cloud">
        <SectionHeading align="center" eyebrow="Works Better Together" title="Pair this with our other services." lead="Most organizations need more than one kind of support. We coordinate it all under one trusted partner." style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(240px, 1fr))`, gap: 20 }}>
          {items.map((s) => <ServiceCard key={s.slug} icon={<i data-lucide={s.icon} style={{ width: 30, height: 30 }}></i>} title={s.title} description={s.short} href={s.href} />)}
        </div>
      </Section>
    );
  }

  function ServicePage(cfg) {
    const svc = bySlug(cfg.slug) || {};
    return (
      <React.Fragment>
        {/* Hero */}
        <section style={{ background: 'var(--cw-cloud)', padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', position: 'relative', overflow: 'hidden' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
              <div>
                <CW.Breadcrumb items={[{ label: 'Home', href: 'index.html' }, { label: 'Services', href: 'services.html' }, { label: cfg.eyebrow }]} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <CW.IconBadge icon={cfg.icon || svc.icon} size={56} iconSize={28} />
                  <Eyebrow rule={false}>{cfg.eyebrow}</Eyebrow>
                </div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1-fluid)', lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-tight)', color: 'var(--text-heading)', margin: 0 }}>{cfg.title}</h1>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)', margin: '20px 0 0', maxWidth: '54ch' }}>{cfg.lead}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 28 }}>
                  <Button href={CONSULT_HREF} arrow size="lg">Schedule a Consultation</Button>
                  <Button href="contact.html" variant="secondary" arrow size="lg">Talk With Our Team</Button>
                </div>
              </div>
              {cfg.heroImage ? <ImageFrame src={cfg.heroImage} alt={cfg.heroAlt || ''} />
                             : <Placeholder label={cfg.heroPlaceholder || (cfg.eyebrow + ', photo placeholder')} icon={cfg.icon || svc.icon} />}
            </div>
          </Container>
        </section>

        {/* Problem */}
        {cfg.problem && (
          <Section>
            <SectionHeading align={cfg.problem.align || 'left'} eyebrow={cfg.problem.eyebrow || 'The Challenge'} title={cfg.problem.title} lead={cfg.problem.lead} style={{ marginBottom: 32 }} />
            <CheckGrid items={cfg.problem.items} columns={cfg.problem.columns || 2} icon="alert-circle" />
          </Section>
        )}

        {/* What we provide (primary cards) */}
        {cfg.provide && (
          <Section tone="cloud">
            <SectionHeading align="center" eyebrow={cfg.provide.eyebrow || 'What We Provide'} title={cfg.provide.title} lead={cfg.provide.lead} style={{ marginBottom: 40 }} />
            <CardRow cards={cfg.provide.cards} columns={cfg.provide.columns || Math.min(cfg.provide.cards.length, 4)} />
          </Section>
        )}

        {/* Custom sections */}
        {(cfg.sections || []).map(renderSection)}

        {/* Process */}
        {cfg.process && (
          <Section>
            <SectionHeading align="center" eyebrow={cfg.process.eyebrow || 'How It Works'} title={cfg.process.title} lead={cfg.process.lead} style={{ marginBottom: 44 }} />
            <ProcessSteps steps={cfg.process.steps} />
          </Section>
        )}

        {/* Benefits */}
        {cfg.benefits && (
          <Section tone="cloud">
            <SectionHeading align="center" eyebrow={cfg.benefits.eyebrow || 'The Payoff'} title={cfg.benefits.title} lead={cfg.benefits.lead} style={{ marginBottom: 36 }} />
            <CheckGrid items={cfg.benefits.items} columns={cfg.benefits.columns || 3} />
          </Section>
        )}

        <RelatedServices slugs={cfg.related} />

        <CTASection title={(cfg.cta && cfg.cta.title) || "Let's Build a Stronger Future, Together."} body={(cfg.cta && cfg.cta.body) || 'Schedule a consultation and we will help you find the right next step for your organization.'} buttonLabel={(cfg.cta && cfg.cta.label) || 'Schedule a Consultation'} href={CONSULT_HREF} tone={(cfg.cta && cfg.cta.tone) || 'orange'} phoenixSrc="assets/phoenix-mark.png" />
      </React.Fragment>
    );
  }

  CW.ServicePage = ServicePage;
})();
