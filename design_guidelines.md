# AI & Automation Engineer Portfolio with Integrated Demos - Design Guidelines

## Design Approach
**Reference-Based Hybrid**: Combining Dribbble/Behance portfolio patterns + Linear/Vercel SaaS aesthetics + Replit dashboard functionality. Using DaisyUI component system for consistent UI with interactive demo integration. 

**Core Principle**: Professional portfolio that demonstrates capabilities through working tools—show don't just tell. Balance between service showcase and interactive proof-of-concept.

---

## Typography System

**Font Stack**: 
- Primary: Inter (Google Fonts) for body and UI
- Accent: Space Grotesk for hero headlines and section headers

**Hierarchy**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-bold
- Service Card Titles: text-xl md:text-2xl, font-semibold
- Category Headers: text-2xl md:text-3xl, font-bold
- Body Text: text-base md:text-lg, font-normal
- Filter Labels: text-sm md:text-base, font-medium
- Metadata/Tags: text-xs md:text-sm, font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 md:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-6, gap-8, gap-12
- Container: max-w-7xl mx-auto px-6

**Grid Patterns**:
- Service Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Demo Tools Section: grid-cols-1 lg:grid-cols-2 (for input/output split)
- Category Icons: grid-cols-2 md:grid-cols-5
- Testimonials: grid-cols-1 md:grid-cols-2
- Stats Display: grid-cols-2 md:grid-cols-4

---

## Component Library (DaisyUI-Based)

### Navigation
**Sticky Navbar**: DaisyUI navbar with glass morphism (backdrop-blur-md)
- Left: Logo + brand name
- Center: Main nav links (Services, Demos, About, Contact)
- Right: Theme toggle + "Get Quote" button (btn-primary)
- Mobile: DaisyUI drawer menu

### Hero Section
**Full-Width Impact Layout**:
- Large hero image: Modern workspace with multiple screens showing automation dashboards and AI tools
- Overlay content: Centered with backdrop-blur-sm bg-black/40 treatment
- Headline + supporting subtext + dual CTAs (Browse Services + Try Live Demo)
- Buttons: Use backdrop-blur-sm bg-white/20 with white text, no hover/active states
- Trust indicator: "Serving 50+ Indian SMBs" badge below CTAs
- Height: min-h-screen for immersive entry

**Hero Image Description**: Professional workspace shot featuring laptop displaying colorful automation dashboard, secondary monitor showing code/analytics, tablet with AI chat interface, coffee cup, notepad with sketches. Warm lighting, modern aesthetic. Image should fill viewport width and convey multi-tasking technical capability.

### Category Overview Section
**Icon Grid**: 5 category cards in single row (scroll on mobile)
- Icons: Custom illustrations for each category (AI Automation, Web Apps, Marketing, Localization, Data)
- Card structure: Icon + category name + service count
- Hover: Subtle scale and shadow increase
- Links to filtered gallery view

### Service Gallery Section
**Filter System**: Sticky filter bar (DaisyUI tabs + search input)
- Horizontal tabs for categories
- Search input: DaisyUI input with search icon (right-aligned)
- Active filters shown as DaisyUI badges with remove option
- Advanced filters: Dropdown for Business Type, Language, Price Range

**Service Cards**: DaisyUI card with image-first design
- Card structure: Screenshot/mockup image (aspect-video) → Service title → Brief description (2 lines) → Category badges → "Learn More" link
- Grid: Masonry-style layout for visual interest
- Hover: Lift effect (translate-y-2) + shadow-xl
- Image: Rounded-t-2xl, covers top half of card

### Interactive Demo Hub Section
**Section Layout**: Tabbed interface (DaisyUI tabs-boxed)
- 4 tabs: Resume Tailor, Email Generator, Social Media Creator, PDF Analyzer
- Each tab reveals full demo tool interface

**Demo Tool Structure** (consistent across all tools):
- Two-column layout (60/40 split): Input panel left, results panel right
- Input Panel: DaisyUI form components (textarea, file-input, select) + "Generate" button (btn-primary with loading state)
- Results Panel: DaisyUI mockup-code or formatted display area with fade-in animation
- Action bar: Copy button + Download button (btn-ghost)
- Example trigger: "Try Example" button pre-fills demo data

**Specific Demo Layouts**:
1. **Resume Tailor**: Textarea (resume) + Textarea (job description) → Formatted resume output
2. **Email Generator**: Select (email type) + Input fields (context) → Email preview with subject line
3. **Social Media Creator**: Textarea (topic/brief) + Select (platform) → Multi-platform post previews (card layout)
4. **PDF Analyzer**: File upload + Processing indicator → Extracted text + AI summary in collapsible sections

### How It Works Section
**Process Timeline**: Horizontal stepper (4 steps)
- Steps: Browse Services → Request Quote → Build Together → Launch & Support
- Each step: Number badge + icon + title + description
- Connect with dotted line on desktop, vertical on mobile

### Pricing Packages Section
**Three-Tier Cards**: Side-by-side comparison (DaisyUI card-bordered)
- Tiers: Basic (₹5,000-15,000), Standard (₹15,000-40,000), Enterprise (Custom)
- Highlighted tier: border-2 with scale-105
- Structure: Package name + price range + feature list (with checkmarks) + "Get Started" button
- Feature comparison: Icons for included/excluded features

### Social Proof Section
**Client Logos Grid**: Grayscale logos (grid-cols-3 md:grid-cols-6) with hover color reveal
**Testimonials**: Two-column layout with DaisyUI card
- Structure: Quote text + Avatar + Client name + Business type + Results metric
- Include specific wins: "Saved 15 hours/week" or "3x faster customer response"

### About Section
**Split Layout**: 50/50 image and content
- Left: Professional photo of workspace or founder
- Right: Brief bio + expertise areas (as badges) + credentials + "Read More" collapse
- Background: Subtle gradient overlay

### Footer
**Comprehensive Multi-Column**:
- Column 1: Newsletter signup (DaisyUI input-group with email + button)
- Column 2: Quick Links (Services by category)
- Column 3: Contact Info (Email, WhatsApp, Phone, Location)
- Column 4: Social Links (LinkedIn, GitHub, Twitter - btn-ghost btn-circle)
- Bottom bar: Copyright + "Built with ❤️ by Swar" + Trust badges

---

## Visual Treatment

**Rounded Elements**:
- Cards/Containers: rounded-2xl
- Buttons: rounded-xl
- Images: rounded-xl
- Input fields: rounded-lg
- Badges/Tags: rounded-full

**Shadows** (DaisyUI utilities):
- Default cards: shadow-lg
- Hover states: shadow-2xl
- Elevated sections: shadow-xl
- Demo panels: shadow-inner for inputs

**Glass Morphism**: 
- Navbar: backdrop-blur-md bg-base-100/90
- Hero overlay: backdrop-blur-sm bg-black/40
- Modal backgrounds: backdrop-blur-lg

---

## Animations

**Purposeful Micro-Interactions**:
- Scroll reveal: Fade-up for section entries (stagger by 100ms for cards)
- Card hover: Scale 1.02 + translate-y-2 + shadow increase
- Button interactions: Scale 0.98 on active
- Tab switching: Fade transition between demo tools
- Demo results: Fade-in with 300ms delay after generation
- Filter application: Smooth grid re-arrangement
- **Duration**: transition-all duration-300

---

## Images

**Required Images**:
1. **Hero Image**: Full-width workspace shot with multiple screens showing automation dashboards (described above)
2. **Service Mockups**: 12-15 screenshots/mockups for service cards (invoices, dashboards, chatbot interfaces, websites)
3. **Category Icons**: 5 custom illustrations (AI brain, web browser, megaphone, globe, chart)
4. **Demo Screenshots**: Interface previews for each demo tool's expected output
5. **Process Icons**: 4 icons for How It Works timeline
6. **About Image**: Professional workspace or founder photo (high-quality)
7. **Client Logos**: 6-12 grayscale business logos
8. **Testimonial Avatars**: Client photos or professional placeholders

**Image Strategy**: Hero image establishes credibility immediately. Service cards use mockups to show actual deliverables. Demo tools display real interface screenshots.

---

## Page-Specific Layouts

### Individual Service Detail Page
**Hero Banner**: Service screenshot (full-width, aspect-video) with overlay title
**Content Structure**: 
- Overview section with key features (3-column grid)
- Benefits with icons (2-column alternating layout)
- Pricing details (card with breakdown)
- Tech stack used (badge list)
- Related services (carousel)
- CTA section: "Request Custom Quote" form

---

## Accessibility & Indian Market

**Multilingual Support**: Language toggle (English/Hindi/Marathi) in navbar
**WhatsApp Integration**: Floating WhatsApp button (btn-circle, fixed bottom-right)
**Trust Signals**: 
- "Trusted by 50+ Indian Businesses" in hero
- Regional language support badges
- INR pricing with value emphasis
- Testimonials from familiar business types (clinic, tuition, retail)
**Mobile-First**: All demos must work seamlessly on mobile with responsive inputs

---

**Delivery**: Production-ready portfolio with 10-12 comprehensive sections, working AI demos, full service gallery with filtering, and individual service pages. Every component designed for conversion and credibility.