/* @ds-bundle: {"format":3,"namespace":"CreativeWorksDesignSystem_42e791","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CTASection","sourcePath":"components/marketing/CTASection.jsx"},{"name":"CheckoutButton","sourcePath":"components/marketing/CheckoutButton.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatItem","sourcePath":"components/marketing/StatItem.jsx"},{"name":"StatsBand","sourcePath":"components/marketing/StatsBand.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"HomeHero","sourcePath":"ui_kits/website/HomeHero.jsx"},{"name":"HomePage","sourcePath":"ui_kits/website/HomePage.jsx"},{"name":"PhoenixRooted","sourcePath":"ui_kits/website/PhoenixRooted.jsx"},{"name":"PillarStrip","sourcePath":"ui_kits/website/PillarStrip.jsx"},{"name":"ServicesGrid","sourcePath":"ui_kits/website/ServicesGrid.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/website/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/website/SiteHeader.jsx"},{"name":"WhyGrid","sourcePath":"ui_kits/website/WhyGrid.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2b5eca78ef2e","components/core/Button.jsx":"a213887575fe","components/core/Eyebrow.jsx":"ecd378be7645","components/core/SectionHeading.jsx":"3b322102a532","components/forms/Input.jsx":"8681e5ace1af","components/forms/Select.jsx":"95bf6f9db2bb","components/forms/Textarea.jsx":"4fc7fca909a4","components/marketing/CTASection.jsx":"144d1b1fdff7","components/marketing/CheckoutButton.jsx":"f862c1389772","components/marketing/FeatureCard.jsx":"fe15d979a521","components/marketing/ServiceCard.jsx":"64fa821d8b1b","components/marketing/StatItem.jsx":"7d67ede28af9","components/marketing/StatsBand.jsx":"00c5ac96f189","components/marketing/TestimonialCard.jsx":"92a1f264872a","ui_kits/website/HomeHero.jsx":"66e64e4828a8","ui_kits/website/HomePage.jsx":"df645b33d39e","ui_kits/website/PhoenixRooted.jsx":"dbce66aefc22","ui_kits/website/PillarStrip.jsx":"0c55f2bfdccc","ui_kits/website/ServicesGrid.jsx":"de7d49268eb7","ui_kits/website/SiteFooter.jsx":"7950777e6d6a","ui_kits/website/SiteHeader.jsx":"8ff3cd20a15f","ui_kits/website/WhyGrid.jsx":"0b467f980a06"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CreativeWorksDesignSystem_42e791 = window.CreativeWorksDesignSystem_42e791 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/** Small pill badge / tag. Tones: orange, navy, soft, success. */
function Badge({
  children,
  tone = 'orange',
  style = {}
}) {
  const tones = {
    orange: {
      bg: 'color-mix(in srgb, var(--cw-orange) 14%, white)',
      color: 'var(--cw-orange-burnt)'
    },
    navy: {
      bg: 'color-mix(in srgb, var(--cw-navy-midnight) 10%, white)',
      color: 'var(--cw-navy-midnight)'
    },
    soft: {
      bg: 'var(--cw-soft-blue)',
      color: 'var(--cw-navy-700)'
    },
    success: {
      bg: 'color-mix(in srgb, var(--cw-success) 16%, white)',
      color: 'var(--cw-success)'
    }
  };
  const t = tones[tone] || tones.orange;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Creative Works primary action button. Pill-shaped; orange solid (primary),
 * outlined navy (secondary), or text (ghost). Optional trailing arrow.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  disabled = false,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '10px 18px',
      font: '14px'
    },
    md: {
      padding: '14px 26px',
      font: '15px'
    },
    lg: {
      padding: '17px 32px',
      font: '16px'
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: hover ? 'var(--cw-orange-burnt)' : 'var(--cw-orange)',
      color: '#fff',
      border: '1px solid transparent',
      shadow: hover ? '0 14px 30px rgba(241,90,36,0.38)' : 'var(--shadow-cta)'
    },
    secondary: {
      bg: hover ? 'var(--cw-cloud)' : '#fff',
      color: 'var(--cw-navy-midnight)',
      border: '1px solid var(--border-strong)',
      shadow: 'none'
    },
    ghost: {
      bg: 'transparent',
      color: hover ? 'var(--cw-orange-burnt)' : 'var(--cw-orange)',
      border: '1px solid transparent',
      shadow: 'none'
    },
    inverse: {
      bg: hover ? 'rgba(255,255,255,0.12)' : 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.45)',
      shadow: 'none'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: s.font,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: 'var(--radius-pill)',
    background: p.bg,
    color: p.color,
    border: p.border,
    boxShadow: p.shadow,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
    transition: 'background var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-soft), color var(--dur-base)',
    whiteSpace: 'nowrap',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.1em',
      transform: hover ? 'translateX(3px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192"));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: css
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: css
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/**
 * Uppercase eyebrow label with the signature 3px orange rule. Sits above headings.
 */
function Eyebrow({
  children,
  rule = true,
  color = 'var(--text-accent)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      ...style
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 'var(--accent-rule)',
      background: 'var(--cw-orange)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      fontWeight: 700,
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Section heading block: optional eyebrow, a display title, and optional lead
 * paragraph. Centers or left-aligns; inverts colors on navy backgrounds.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  inverse = false,
  style = {}
}) {
  const headColor = inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)';
  const leadColor = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    color: inverse ? 'var(--cw-orange-soft)' : 'var(--text-accent)',
    style: {
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2-fluid)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-heading)',
      color: headColor,
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-normal)',
      color: leadColor,
      margin: 0,
      maxWidth: '62ch'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldBase = {
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  color: 'var(--text-body)',
  background: '#fff',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius-md)',
  padding: '12px 14px',
  outline: 'none',
  transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
};

/** Labeled text input with orange focus ring. */
function Input({
  label,
  id,
  hint,
  required,
  type = 'text',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cw-orange)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      borderColor: focus ? 'var(--cw-orange)' : 'var(--border-strong)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled select with custom orange chevron and focus ring. `options` = string[] or {value,label}[]. */
function Select({
  label,
  id,
  hint,
  required,
  options = [],
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cw-orange)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    defaultValue: "",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: '#fff',
      border: '1px solid',
      borderColor: focus ? 'var(--cw-orange)' : 'var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 40px 12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--cw-orange)',
      fontSize: 12,
      pointerEvents: 'none'
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labeled multi-line textarea with orange focus ring. */
function Textarea({
  label,
  id,
  hint,
  required,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cw-orange)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      background: '#fff',
      border: '1px solid',
      borderColor: focus ? 'var(--cw-orange)' : 'var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTASection.jsx
try { (() => {
/**
 * Full-width call-to-action band. `tone="orange"` is the bold orange CTA band;
 * `tone="navy"` is a dark variant. Title + body on the left, button(s) on the right.
 */
function CTASection({
  title,
  body,
  buttonLabel = 'Schedule a Consultation',
  href = '#',
  tone = 'orange',
  phoenixSrc,
  style = {}
}) {
  const isOrange = tone === 'orange';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: isOrange ? 'var(--cw-gradient-cta)' : 'var(--cw-navy-deep)',
      color: '#fff',
      padding: 'clamp(2.25rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
      ...style
    }
  }, phoenixSrc && /*#__PURE__*/React.createElement("img", {
    src: phoenixSrc,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 24,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 200,
      opacity: isOrange ? 0.14 : 0.08,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 420px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2-fluid)',
      margin: 0,
      lineHeight: 'var(--lh-snug)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      margin: '14px 0 0',
      lineHeight: 'var(--lh-normal)',
      color: isOrange ? 'rgba(255,255,255,0.92)' : 'var(--text-on-inverse-muted)',
      maxWidth: '52ch'
    }
  }, body)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: href,
    arrow: true,
    variant: isOrange ? 'secondary' : 'primary',
    size: "lg",
    style: isOrange ? {
      background: '#fff',
      color: 'var(--cw-navy-midnight)',
      border: 'none'
    } : {}
  }, buttonLabel)));
}
Object.assign(__ds_scope, { CTASection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTASection.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CheckoutButton.jsx
try { (() => {
/**
 * Payment CTA for Stripe Checkout. Shows the service + price and a button. In the
 * real app, `onCheckout` POSTs to /api/stripe/checkout with `priceId` and redirects
 * to the returned session URL. Here it is a presentational placeholder.
 */
function CheckoutButton({
  label = 'Pay Deposit',
  price,
  priceNote,
  priceId,
  onCheckout,
  variant = 'primary',
  size = 'lg',
  note = 'Secure checkout via Stripe',
  style = {}
}) {
  const handle = e => {
    if (onCheckout) onCheckout({
      priceId
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: variant,
    size: size,
    arrow: true,
    onClick: handle
  }, label, price ? ` — ${price}` : ''), (priceNote || note) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--cw-success)'
    }
  }), priceNote || note));
}
Object.assign(__ds_scope, { CheckoutButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CheckoutButton.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
/**
 * Compact "why us" feature card: centered orange icon, bold title, short copy.
 * Used in 3–4 up grids (Strategic / Reliable / Human / Mission-Focused).
 */
function FeatureCard({
  icon,
  title,
  description,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 12,
      padding: '30px 22px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-card)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      height: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cw-orange)',
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/**
 * Service / offering card. Orange icon on top, title, description, and an optional
 * "Learn More" link. White surface, rounded, soft shadow, lifts on hover.
 */
function ServiceCard({
  icon,
  title,
  description,
  linkLabel = 'Learn More',
  href,
  align = 'left',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 14,
      padding: '28px 26px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      height: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cw-orange)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-heading)',
      margin: 0,
      letterSpacing: 'var(--ls-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-sm)',
      color: 'var(--cw-orange)',
      textDecoration: 'none',
      paddingTop: 4
    }
  }, linkLabel, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatItem.jsx
try { (() => {
/** Single statistic: large orange number + small uppercase label. For navy bands. */
function StatItem({
  value,
  label,
  inverse = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2rem, 1.4rem + 1.6vw, 2.75rem)',
      lineHeight: 1,
      color: 'var(--cw-orange-soft)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
      lineHeight: 1.3,
      maxWidth: '16ch'
    }
  }, label));
}
Object.assign(__ds_scope, { StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatsBand.jsx
try { (() => {
/**
 * Navy impact band with a heading and a row of orange statistics. A faint phoenix
 * watermark sits in the corner. Pass `stats` as [{value, label}].
 */
function StatsBand({
  title,
  subtitle,
  stats = [],
  phoenixSrc,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--cw-navy-deep)',
      color: 'var(--text-on-inverse)',
      padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)',
      borderRadius: 0,
      overflow: 'hidden',
      ...style
    }
  }, phoenixSrc && /*#__PURE__*/React.createElement("img", {
    src: phoenixSrc,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -40,
      bottom: -50,
      width: 280,
      opacity: 0.07,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'clamp(1.5rem, 4vw, 3.5rem)'
    }
  }, (title || subtitle) && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 220
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h3)',
      margin: 0,
      lineHeight: 'var(--lh-snug)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-on-inverse-muted)',
      margin: '12px 0 0',
      lineHeight: 'var(--lh-normal)',
      maxWidth: '36ch'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(1.25rem, 3vw, 2.5rem)',
      flex: '2 1 320px'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.StatItem, {
    key: i,
    value: s.value,
    label: s.label
  }))), children));
}
Object.assign(__ds_scope, { StatsBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatsBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
/**
 * Testimonial / pull quote. A big orange quote mark, the quote, and attribution.
 * `inverse` adapts colors for navy backgrounds.
 */
function TestimonialCard({
  quote,
  name,
  role,
  inverse = false,
  style = {}
}) {
  const text = inverse ? 'var(--text-on-inverse)' : 'var(--text-body)';
  const meta = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      paddingLeft: 22,
      position: 'relative',
      borderLeft: 'var(--accent-rule) solid var(--cw-orange)',
      maxWidth: '46ch',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-normal)',
      color: text
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)'
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: text
    }
  }, name), name && role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: meta
    }
  }, ", "), role && /*#__PURE__*/React.createElement("span", {
    style: {
      color: meta
    }
  }, role)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeHero.jsx
try { (() => {
const TRUST = ['Strategic. Reliable. Human.', 'Phoenix-Based', 'Mission-Focused'];

/** Home hero: headline + subhead + dual CTA + trust row, paired with framed photo and phoenix curve. */
function HomeHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bg)',
      padding: 'clamp(2.5rem, 5vw, 4.5rem) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 'clamp(2rem, 4vw, 4rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1-fluid)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Full-Service Support for Behavioral Health Organizations"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)',
      margin: '20px 0 0',
      maxWidth: '52ch'
    }
  }, "Creative Works partners with behavioral health organizations to strengthen operations, elevate impact, and build better systems behind the care."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: "#contact",
    arrow: true,
    size: "lg"
  }, "Schedule a Consultation"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: "#services",
    variant: "secondary",
    arrow: true,
    size: "lg"
  }, "Explore Our Services")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px 28px',
      marginTop: 30
    }
  }, TRUST.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle-2",
    style: {
      width: 18,
      height: 18,
      color: 'var(--cw-orange)'
    }
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '5 / 3.4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-hero.jpg",
    alt: "Behavioral health leaders meeting",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -18,
      top: -18,
      width: 130,
      height: 130,
      border: '3px solid var(--cw-orange)',
      borderRadius: '50%',
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      transform: 'rotate(12deg)'
    }
  }))));
}
Object.assign(__ds_scope, { HomeHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PhoenixRooted.jsx
try { (() => {
const POINTS = [{
  title: 'Local Expertise',
  desc: 'Proudly based in Phoenix, serving organizations across Arizona and beyond.'
}, {
  title: 'Behavioral Health Understanding',
  desc: 'We focus on the realities of mission-driven care — your mission is our mission.'
}, {
  title: 'Partners in Progress',
  desc: 'We are invested in your long-term success and community impact.'
}];

/** "Rooted in Phoenix" — skyline photo paired with supporting points. */
function PhoenixRooted() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cw-cloud)',
      padding: 'var(--section-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(2rem, 4vw, 3.5rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      aspectRatio: '5 / 3.2'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-phoenix.jpg",
    alt: "Phoenix, Arizona skyline at sunset",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -16,
      bottom: -16,
      width: 110,
      height: 110,
      border: '3px solid var(--cw-orange)',
      borderRadius: '50%',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      transform: 'rotate(12deg)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Rooted in Phoenix"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h2-fluid)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-heading)',
      margin: '14px 0 0'
    }
  }, "Rooted in Phoenix. Driven by Purpose."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-muted)',
      margin: '14px 0 24px',
      maxWidth: '54ch'
    }
  }, "Creative Works is a Phoenix-based professional services firm dedicated to supporting behavioral health organizations. We understand the operational demands of mission-driven care and help teams build stronger organizations that change lives."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, POINTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "circle-check-big",
    style: {
      width: 22,
      height: 22,
      color: 'var(--cw-orange)',
      flex: '0 0 auto',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontSize: 'var(--fs-body)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.55
    }
  }, p.desc))))))));
}
Object.assign(__ds_scope, { PhoenixRooted });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PhoenixRooted.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PillarStrip.jsx
try { (() => {
const PILLARS = [{
  icon: 'megaphone',
  title: 'Marketing',
  sub: 'Reach more people. Grow your mission.'
}, {
  icon: 'folder-cog',
  title: 'SharePoint Setup',
  sub: 'Smarter systems. Stronger collaboration.'
}, {
  icon: 'shield-check',
  title: 'IT Services',
  sub: 'Secure, reliable technology support.'
}, {
  icon: 'users',
  title: 'Staffing',
  sub: 'The right people, when you need them.'
}, {
  icon: 'refresh-cw',
  title: 'Operational Support',
  sub: 'Better processes. Better outcomes.'
}];

/** Five-up service pillar strip with hairline dividers. Stacks on mobile. */
function PillarStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--container-pad)',
      marginTop: -32,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-card)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      overflow: 'hidden'
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: '26px 18px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 30,
      height: 30,
      color: 'var(--cw-orange)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)'
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, p.sub)))));
}
Object.assign(__ds_scope, { PillarStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PillarStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesGrid.jsx
try { (() => {
const SERVICES = [{
  icon: 'megaphone',
  title: 'Marketing',
  desc: 'Strategic marketing that builds awareness, engages audiences, and advances your mission.'
}, {
  icon: 'folder-cog',
  title: 'SharePoint Setup',
  desc: 'Custom portals and workflows that improve collaboration and streamline operations.'
}, {
  icon: 'shield-check',
  title: 'IT Services',
  desc: 'Managed IT, cybersecurity, cloud solutions, and support your team can rely on.'
}, {
  icon: 'users',
  title: 'Staffing',
  desc: 'Connect with qualified professionals who bring the skills and heart your team needs.'
}, {
  icon: 'refresh-cw',
  title: 'Operational Support',
  desc: 'Process improvement, training, and day-to-day support to keep your organization strong.'
}];

/** "Our Services" — centered heading over a responsive grid of service cards. */
function ServicesGrid() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: 'var(--color-bg)',
      padding: 'var(--section-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    align: "center",
    eyebrow: "Our Services",
    title: "Five core service areas. One trusted partner.",
    style: {
      marginBottom: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 20
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(__ds_scope.ServiceCard, {
    key: s.title,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": s.icon,
      style: {
        width: 30,
        height: 30
      }
    }),
    title: s.title,
    description: s.desc,
    href: "#"
  })))));
}
Object.assign(__ds_scope, { ServicesGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const COLS = [{
  head: 'Quick Links',
  links: ['Home', 'Services', 'About', 'Industries', 'Contact']
}, {
  head: 'Services',
  links: ['Marketing', 'SharePoint Setup', 'IT Services', 'Staffing', 'Operational Support']
}, {
  head: 'Industries',
  links: ['Behavioral Health', 'Nonprofits', 'Human Services']
}];
const SOCIAL = ['linkedin', 'facebook', 'twitter', 'youtube'];

/** Navy site footer: brand column, link columns, contact, social, legal bar. */
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cw-navy-deep)',
      color: 'var(--text-on-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'clamp(2.5rem,5vw,4rem) var(--container-pad) 2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 'clamp(2rem,4vw,3rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-white.png",
    alt: "Creative Works",
    style: {
      height: 36,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.6,
      color: 'var(--text-on-inverse-muted)',
      margin: '0 0 18px',
      maxWidth: '34ch'
    }
  }, "Full-service professional support for behavioral health organizations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, SOCIAL.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s,
    style: {
      width: 16,
      height: 16
    }
  }))))), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.head
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: '#fff',
      margin: '0 0 16px'
    }
  }, c.head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-inverse-muted)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: '#fff',
      margin: '0 0 16px'
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-on-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cw-orange-soft)'
    }
  }), "Phoenix, Arizona"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cw-orange-soft)'
    }
  }), "602-555-0198"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cw-orange-soft)'
    }
  }), "hello@creativeworksaz.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px var(--container-pad)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-on-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Creative Works. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-inverse-muted)',
      textDecoration: 'none'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-inverse-muted)',
      textDecoration: 'none'
    }
  }, "Terms of Service")))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const NAV = [{
  label: 'Home',
  href: '#'
}, {
  label: 'Services',
  href: '#services',
  menu: ['Marketing', 'SharePoint Setup', 'IT Services', 'Staffing', 'Operational Support']
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Industries',
  href: '#industries',
  menu: ['Behavioral Health']
}, {
  label: 'Resources',
  href: '#resources'
}, {
  label: 'Contact',
  href: '#contact'
}];

/** Sticky site header: logo, primary nav with dropdowns, consultation CTA, mobile menu. */
function SiteHeader() {
  const [open, setOpen] = React.useState(null);
  const [mobile, setMobile] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'saturate(160%) blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.png",
    alt: "Creative Works",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    },
    className: "cw-desktop-nav"
  }, NAV.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(item.menu ? item.label : null),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '8px 14px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-heading)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)'
    }
  }, item.label, item.menu && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 9,
      color: 'var(--cw-orange)'
    }
  }, "\u25BC")), item.menu && open === item.label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      minWidth: 220,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8
    }
  }, item.menu.map(m => /*#__PURE__*/React.createElement("a", {
    key: m,
    href: "#",
    style: {
      display: 'block',
      padding: '9px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--cw-cloud)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, m)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cw-desktop-nav"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: "#contact",
    size: "sm",
    arrow: true
  }, "Schedule a Consultation")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setMobile(v => !v),
    className: "cw-mobile-btn",
    style: {
      display: 'none',
      border: '1px solid var(--border-subtle)',
      background: '#fff',
      borderRadius: 'var(--radius-sm)',
      width: 42,
      height: 42,
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--text-heading)'
    }
  }, mobile ? '✕' : '☰'))), mobile && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: '#fff',
      padding: '8px var(--container-pad) 18px'
    }
  }, NAV.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.label,
    href: i.href,
    onClick: () => setMobile(false),
    style: {
      display: 'block',
      padding: '12px 4px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      textDecoration: 'none',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, i.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: "#contact",
    arrow: true,
    style: {
      width: '100%'
    }
  }, "Schedule a Consultation"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyGrid.jsx
try { (() => {
const WHY = [{
  icon: 'target',
  title: 'Strategic',
  desc: 'Thoughtful solutions aligned with your mission and goals.'
}, {
  icon: 'circle-check-big',
  title: 'Reliable',
  desc: 'You can count on us to show up, follow through, and deliver.'
}, {
  icon: 'heart-handshake',
  title: 'Human',
  desc: 'We lead with empathy and build lasting relationships.'
}, {
  icon: 'compass',
  title: 'Mission-Focused',
  desc: 'We exist to strengthen the systems behind care.'
}];

/** "Why Creative Works" — heading column beside a 4-up feature grid. */
function WhyGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bg)',
      padding: 'var(--section-y) var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2.5rem)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Why Creative Works",
    title: "Strategy, technology, and people \u2014 together.",
    lead: "We combine strategy, technology, and people to deliver solutions that make a real difference. Our approach is built around what matters most: clarity, reliability, and sustainable growth."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: 16,
      gridColumn: 'span 1'
    }
  }, WHY.map(w => /*#__PURE__*/React.createElement(__ds_scope.FeatureCard, {
    key: w.title,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": w.icon,
      style: {
        width: 26,
        height: 26
      }
    }),
    title: w.title,
    description: w.desc
  })))));
}
Object.assign(__ds_scope, { WhyGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
/** Creative Works marketing homepage — full assembly of all sections. */
function HomePage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(__ds_scope.HomeHero, null), /*#__PURE__*/React.createElement(__ds_scope.PillarStrip, null), /*#__PURE__*/React.createElement(__ds_scope.WhyGrid, null), /*#__PURE__*/React.createElement(__ds_scope.PhoenixRooted, null), /*#__PURE__*/React.createElement(__ds_scope.ServicesGrid, null), /*#__PURE__*/React.createElement(__ds_scope.StatsBand, {
    title: "Stronger Organizations. Better Outcomes.",
    subtitle: "We help behavioral health organizations strengthen the systems behind care.",
    phoenixSrc: "../../assets/phoenix-mark.png",
    stats: [{
      value: '100+',
      label: 'Organizations Supported'
    }, {
      value: '15+',
      label: 'Years Combined Experience'
    }, {
      value: '98%',
      label: 'Client Satisfaction Rate'
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      minWidth: 280,
      borderLeft: '1px solid rgba(255,255,255,0.14)',
      paddingLeft: 'clamp(1.25rem, 3vw, 2.5rem)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TestimonialCard, {
    inverse: true,
    quote: "Creative Works is a true partner. They understand our world and consistently deliver solutions that make our organization stronger and more effective.",
    name: "Executive Director",
    role: "Behavioral Health Organization"
  }))), /*#__PURE__*/React.createElement(__ds_scope.CTASection, {
    title: "Let's Build a Stronger Future\u2014Together.",
    body: "Whether you need strategic guidance, better systems, or the right people, Creative Works is here to help your mission thrive.",
    buttonLabel: "Schedule a Consultation",
    href: "#contact",
    phoenixSrc: "../../assets/phoenix-mark.png"
  })), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, null));
}
Object.assign(__ds_scope, { HomePage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CTASection = __ds_scope.CTASection;

__ds_ns.CheckoutButton = __ds_scope.CheckoutButton;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatItem = __ds_scope.StatItem;

__ds_ns.StatsBand = __ds_scope.StatsBand;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.HomeHero = __ds_scope.HomeHero;

__ds_ns.HomePage = __ds_scope.HomePage;

__ds_ns.PhoenixRooted = __ds_scope.PhoenixRooted;

__ds_ns.PillarStrip = __ds_scope.PillarStrip;

__ds_ns.ServicesGrid = __ds_scope.ServicesGrid;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.WhyGrid = __ds_scope.WhyGrid;

})();
