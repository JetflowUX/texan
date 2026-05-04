---
name: Texan HVAC Modern Identity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#454651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#767682'
  outline-variant: '#c6c5d3'
  surface-tint: '#4c57a9'
  primary: '#010d67'
  on-primary: '#ffffff'
  primary-container: '#1e297b'
  on-primary-container: '#8a95ec'
  inverse-primary: '#bcc2ff'
  secondary: '#bb0024'
  on-secondary: '#ffffff'
  secondary-container: '#e31f35'
  on-secondary-container: '#fffbff'
  tertiary: '#1e1e1e'
  on-tertiary: '#ffffff'
  tertiary-container: '#333333'
  on-tertiary-container: '#9c9b9b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bcc2ff'
  on-primary-fixed: '#000b62'
  on-primary-fixed-variant: '#343f90'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#93001a'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 3rem
  xl: 5rem
  gutter: 24px
  container-max: 1200px
---

## Brand & Style

This design system establishes a visual language of reliability, efficiency, and comfort. Moving away from the cluttered layouts common in the HVAC industry, the style adopts a **Corporate / Modern** aesthetic with a strong influence from **Minimalism**.

The goal is to evoke a sense of professional precision. By prioritizing generous whitespace and high-quality photography of serene home environments and expert technicians, the UI positions the brand as a premium service provider. The interface should feel "breathable," utilizing the brand’s red and blue not as dominant blocks, but as strategic navigational beacons that guide the user toward scheduling and service information.

## Colors

The palette is rooted in the brand's heritage but applied with modern restraint.

- **Primary Blue (#1E297B):** Used for primary navigation, headings, and high-level structural elements. It conveys trust, stability, and "cooling."
- **Secondary Red (#ED283B):** Reserved exclusively for "Heat" related services, emergency alerts, and primary Call-to-Action (CTA) buttons. Its use must be intentional to maintain high visual impact without overwhelming the user.
- **Neutral / Background:** A clean White (#FFFFFF) is the canvas, supported by a soft Neutral (#F8FAFC) for sectional contrast.
- **Typography:** Deep Charcoal (#333333) provides superior readability over pure black, maintaining a softer, professional tone.

## Typography

This design system utilizes **Manrope** for all text levels to ensure a unified, modern, and highly legible appearance.

The typographic hierarchy emphasizes bold headlines to communicate authority and clear body text for readability. Headlines use tighter letter-spacing and heavier weights to create a "locked-in," architectural feel. Labels and smaller UI elements utilize medium weights and subtle tracking to remain legible even at reduced sizes. All line heights are optimized for a comfortable reading rhythm, particularly in long-form service descriptions.

## Layout & Spacing

The layout follows a **Fixed Grid** model for the core content to maintain a structured, professional appearance on desktop, while transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid with a 24px gutter.
- **Section Spacing:** Generous vertical padding (xl units) is used to separate service offerings, ensuring the user is never overwhelmed by information.
- **Rhythm:** An 8pt spatial system governs all internal component margins to ensure a mathematically consistent visual pace.

## Elevation & Depth

Depth is conveyed through **Ambient Shadows** and subtle tonal layering.

- **Level 1 (Default):** Flat surfaces with low-contrast 1px borders (#E2E8F0) for inputs and static cards.
- **Level 2 (Interactive):** Cards and buttons use a soft, diffused shadow (0px 4px 20px rgba(30, 41, 123, 0.08)) to indicate hover states or interactivity.
- **Level 3 (Overlays):** Modals and navigation menus utilize a more pronounced shadow with a wider blur radius to separate them from the content plane.

The use of "Blue Tinting" in shadows (using a very low-opacity primary blue) ensures the depth feels integrated into the brand rather than generic gray.

## Shapes

The shape language centers on **Soft Roundedness**. Based on the 8px-12px requirement, the system defaults to a base radius of 8px (0.5rem) for standard components like buttons and form fields.

Larger containers, such as feature cards or testimonial blocks, utilize the `rounded-lg` (16px) or `rounded-xl` (24px) settings to soften the overall visual aesthetic and make the brand feel more approachable and modern. Circular treatments are reserved exclusively for icons and avatar images.

## Components

### Buttons

- **Primary:** Solid #ED283B for urgent CTAs ("Book Now") or #1E297B for general actions. Bold Manrope text, 8px radius.
- **Secondary/Outline:** 2px primary blue border with transparent background, used for "Learn More" actions.

### Cards

Service cards feature a white background, an 8px radius, and a subtle Level 1 shadow that transitions to Level 2 on hover. Imagery within cards should use a top-aligned 16:9 aspect ratio with rounded top corners.

### Inputs

Text fields are outlined with a light gray border, utilizing the 8px radius. Focused states switch to a 2px Primary Blue border with a soft blue outer glow.

### Chips/Badges

Used for service categories (e.g., "AC Repair," "Furnace"). These are small, low-contrast capsules with a light blue background (#EFF6FF) and Primary Blue text.

### High-Quality Imagery

All imagery should feature natural lighting. Images of technicians should show them in clean, branded uniforms, interacting professionally with the equipment or smiling at homeowners to build immediate trust. Home comfort images should focus on "clean air" and "perfect temperature" vibes—think soft textiles, sunlight, and comfortable living spaces.
