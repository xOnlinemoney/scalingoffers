# Gemini Pro Prompt — ScalingOffers Client Testimonials Page

Copy everything below the line into Gemini:

---

You are building a "Client Testimonials" page for the ScalingOffers website. This is a dark-themed, premium sales agency site. The page will feature video testimonials from clients with key takeaway highlight words beneath each video. You MUST follow the exact design system below so the page matches the rest of the site perfectly.

## DESIGN SYSTEM TOKENS (from global.css — use these exact values)

```css
:root {
  /* Colors */
  --color-bg: #141414;
  --color-accent: #2abced;
  --color-accent-dim: rgba(42, 188, 237, 0.08);
  --color-accent-glow: rgba(42, 188, 237, 0.12);
  --color-surface: rgba(255, 255, 255, 0.02);
  --color-surface-elevated: rgba(255, 255, 255, 0.06);
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-accent: rgba(42, 188, 237, 0.07);

  /* Text colors — 3-tier system */
  --color-text-primary: rgba(255, 255, 255, 0.95);
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  --color-text-tertiary: rgba(255, 255, 255, 0.4);

  /* Spacing scale */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-4xl: 128px;

  /* Radii */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 32px;
  --radius-pill: 100px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  --font-accent: 'Poppins', sans-serif;

  /* Gradients */
  --gradient-text-white: linear-gradient(0deg, #fff 30%, rgba(255, 255, 255, 0.6) 100%);
  --gradient-text-accent: linear-gradient(0deg, #2abced 30%, rgba(42, 188, 237, 0.32) 100%);
  --gradient-card: linear-gradient(165deg, rgba(42, 188, 237, 0.9) 0%, rgba(42, 188, 237, 0.6) 50%, rgba(42, 188, 237, 0.4) 100%);
  --gradient-card-subtle: linear-gradient(165deg, rgba(42, 188, 237, 0.1) 0%, rgba(42, 188, 237, 0.02) 50%, rgba(42, 188, 237, 0.06) 100%);
  --gradient-card-glass: linear-gradient(180deg, rgba(42, 188, 237, 0.12) 0%, rgba(42, 188, 237, 0.04) 50%, rgba(42, 188, 237, 0.07) 100%);
}
```

## FONTS (load these in the `<head>`)

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
```

## LINKED CSS FILES (include these in order)

```html
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/global.css" />
<link rel="stylesheet" href="css/xxon-sca-ff-home.css" />
```

All page-specific styles go in a `<style>` tag in the `<head>`, NOT in a separate CSS file.

## NAVIGATION (copy this exactly — it must match every other page on the site)

```html
<header class="header">
  <div class="header-rect1" aria-hidden="true"></div>
  <div class="header-particles" aria-hidden="true"></div>
  <video class="header-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
    <source src="assets/hero-video.mp4" type="video/mp4" />
  </video>

  <div class="header-header">
    <div class="header-info" aria-label="Hiring announcement">
      <div class="header-rect2" aria-hidden="true"></div>
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <span class="marquee-text">HIRING NOW! Sales: High Ticket Closer — Earning potential $10,000 to $50,000/month</span>
          <span class="marquee-text" aria-hidden="true">HIRING NOW! Sales: High Ticket Closer — Earning potential $10,000 to $50,000/month</span>
          <span class="marquee-text" aria-hidden="true">HIRING NOW! Sales: High Ticket Closer — Earning potential $10,000 to $50,000/month</span>
        </div>
      </div>
    </div>

    <nav class="header-nav" aria-label="Main navigation">
      <a href="index.html" class="header-logo-link" aria-label="Scaling Offers home">
        <img src="assets/header-img.png" class="header-img" alt="Scaling Offers logo" />
      </a>
      <div class="header-row2">
        <a href="#" class="header-text">Products</a>
        <a href="#" class="header-text">Use Cases</a>
        <a href="#" class="header-text">Blog</a>
        <a href="#" class="header-text">About Us</a>
      </div>
      <div class="header-row-right">
        <a href="become-a-partner.html" class="header-btn-become-a-partner hover-bright text1">Become a Partner</a>
        <a href="client-login.html" class="header-btn-client-login text1 hover-bright">Client Login</a>
      </div>
      <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu-panel" aria-hidden="true">
      <div class="mobile-menu-links" role="menu">
        <a href="#" class="header-text" role="menuitem">Products</a>
        <a href="#" class="header-text" role="menuitem">Use Cases</a>
        <a href="#" class="header-text" role="menuitem">Blog</a>
        <a href="#" class="header-text" role="menuitem">About Us</a>
      </div>
      <div class="mobile-menu-actions">
        <a href="become-a-partner.html" class="header-btn-become-a-partner hover-bright text1">Become a Partner</a>
        <a href="client-login.html" class="header-btn-client-login text1 hover-bright">Client Login</a>
      </div>
    </div>
  </div>
</header>
```

## FOOTER (copy this exactly)

```html
<footer class="footer">
  <div class="footer-line-top" aria-hidden="true"></div>
  <div class="footer-row">
    <div class="footer-col-left">
      <img src="assets/header-img.png" class="footer-logo" alt="Scaling Offers logo" />
      <p class="footer-text-discover">
        Discover unparalleled success with Scaling Offers, your elite sales and marketing partner. We elevate businesses with expert teams, innovative strategies, and tailored solutions, driving growth and maximizing ROI. Experience the difference with our comprehensive, results-driven approach.
      </p>
    </div>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="index.html" class="footer-link">Products</a>
      <a href="index.html" class="footer-link">Use Cases</a>
      <a href="index.html" class="footer-link">Blog</a>
      <a href="index.html" class="footer-link">About Us</a>
    </nav>
  </div>
  <div class="footer-copyright">&copy; 2026 Scaling Offers | All Rights Reserved</div>
</footer>
```

## BACKGROUND DECORATIONS (place inside `.main-wrapper` before the header)

```html
<div class="bg" aria-hidden="true">
  <div class="bg-circle-blue bg-circle-blue1"></div>
  <div class="bg-circle-blue bg-circle-blue2"></div>
  <div class="bg-circle-blue bg-circle-blue3"></div>
  <div class="bg-circle-blue bg-circle-blue4"></div>
  <div class="bg-circle-blue bg-circle-blue5"></div>
  <div class="bg-circle-blue bg-circle-blue6"></div>
  <div class="bg-circle-blue bg-circle-blue7"></div>
  <div class="bg-circle-blue bg-circle-blue8"></div>
  <object data="assets/bg-graphic1.svg" class="bg-graphic1" type="image/svg+xml" tabindex="-1"></object>
  <div class="bg-ellipse bg-ellipse1"></div>
  <object data="assets/bg-graphic2.svg" class="bg-graphic2" type="image/svg+xml" tabindex="-1"></object>
  <img src="assets/ellipse.png" class="bg-ellipse3" alt="" />
  <img src="assets/bg-noise.png" class="bg-noise" alt="" />
</div>
```

## DESIGN PATTERNS TO FOLLOW

1. **Headings** use `background: var(--gradient-text-white)` with `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent` for the gradient text effect
2. **Accent headings** use `background: var(--gradient-text-accent)` with same clip technique
3. **Pill badges/tags** use `background: rgba(42, 188, 237, 0.1)`, `border: 1px solid rgba(42, 188, 237, 0.2)`, `border-radius: var(--radius-pill)`, small text (12px), font-weight 500
4. **Glass cards** use `backdrop-filter: blur(20px)`, `background: var(--gradient-card-glass)`, `border: 1px solid rgba(42, 188, 237, 0.2)`, `border-radius: var(--radius-lg)`
5. **Hover effects on cards**: `border-color: rgba(42, 188, 237, 0.9)`, `box-shadow: 0 0 0 1px rgba(42, 188, 237, 0.9), 0 0 18px rgba(42, 188, 237, 0.45), 0 0 36px rgba(42, 188, 237, 0.25)`
6. **Buttons** use `background-color: var(--color-accent)`, white text, `border-radius: var(--radius-sm)`, font-weight 700, min-height 43px
7. **Section labels** (small tags above headings) use the `.frame-a` class pattern: `backdrop-filter: blur(12px)`, `background-color: var(--color-surface-elevated)`, `border: 1px solid var(--color-accent)`, `border-radius: var(--radius-pill)`, font-size 12px, letter-spacing 0.24px
8. **Scroll reveal animation**: elements with class `.reveal` start with `opacity: 0; transform: translateY(24px)` and animate to `opacity: 1; transform: translateY(0)` on scroll
9. **Body text** is `rgba(255, 255, 255, 0.88)`, font-size 16px, line-height 24px

## WHAT TO BUILD

Create a single-file `client-testimonials.html` page with all page-specific CSS in a `<style>` tag. The page should include:

### Hero Section (below the navigation)
- A small pill badge saying "CLIENT SUCCESS STORIES" using the `.frame-a` pattern
- Large heading: "Real Results From Real Clients" using gradient text white
- Subtitle text in secondary color
- A stats bar with 3 stats in a glass card: "50+ Happy Clients", "40x Average Revenue Increase", "$100M+ Revenue Generated" — stats use gradient text accent, labels use secondary text color

### Video Testimonials Grid
- 2-column grid layout (1 column on mobile) with 8 testimonial cards
- Each card contains:
  - A 16:9 video placeholder area (dark background `rgba(255, 255, 255, 0.04)` with a centered play button circle in accent color `#2abced` with a white triangle play icon)
  - Client name (18px, bold, primary text color)
  - Company/industry (14px, accent color `#2abced`)
  - 3-4 **highlight tag pills** beneath each video — these are the key takeaways like "300% Revenue Growth", "40x ROI", "Elite Closers", "Scaled to 7 Figures", etc.
- Cards should have subtle glass effect, hover state with accent border glow, and slight `translateY(-4px)` lift on hover

### CTA Section
- Glass card centered, with heading "Ready to Be Our Next Success Story?" and a prominent "Book a Call" button

### JavaScript
- Include IntersectionObserver for scroll reveal animations on `.reveal` elements
- Include mobile menu toggle functionality (same as other pages)

### Responsive Design
- At 1024px+: 2 columns for testimonial grid
- At 768px and below: single column, reduced padding
- Stats bar goes to single column on mobile

### Key Style Rules
- Background: `#141414`
- All text: Space Grotesk font
- Accent color: `#2abced` (a bright cyan-blue)
- Cards: dark glass with subtle blue tints
- Tags/pills: semi-transparent accent background with accent border
- Everything should feel premium, dark, and modern

Please generate the complete HTML file.
