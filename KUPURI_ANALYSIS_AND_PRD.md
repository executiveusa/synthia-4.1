# 🎨 Kupuri Studios - Website Analysis & Completion PRD

**Version:** 1.0
**Date:** 2026-01-28
**Status:** MVP Complete, Production Enhancements Needed

---

## 📊 Executive Summary

**Kupuri Studios** is a bilingual (Spanish/English) landing page for a Mexico City-based creative agency. The site is currently **production-ready** with core functionality but uses placeholder content and has several enhancement opportunities.

**Current State:**
- ✅ **Build:** Passing (135 KB first load)
- ✅ **Core Features:** 100% functional
- ⚠️ **Content:** 80% placeholder
- ⚠️ **Integrations:** 40% complete (commented out)
- ⚠️ **Assets:** 60% placeholder

---

## 🏗️ Current Architecture Overview

### **Tech Stack**

```
Frontend Framework:
├── Next.js 14 (App Router)
├── React 18.2.0
├── TypeScript/JavaScript (mixed)
└── Tailwind CSS 3.4.0

Animation Libraries:
├── Framer Motion 12.29.2
├── GSAP 3.12.5
├── Lenis 1.0.42 (smooth scroll)
└── Lottie React 2.4.0 (installed, not used)

3D Capabilities (Available but not utilized):
├── React Three Fiber 8.15.12
├── @react-three/drei 9.92.7
├── @react-three/xr 6.2.3
├── Three.js 0.160.0
└── Old infrastructure from r3f-nextjs-starter

Backend (Ready, not wired):
├── API Routes (Next.js)
├── Supabase (code ready, commented)
└── Resend (code ready, commented)

Deployment:
└── Vercel (configured)
```

### **File Structure**

```
apps/web/
├── app/
│   ├── api/contact/route.ts          ✅ API endpoint (logs only)
│   ├── layout.jsx                    ✅ SEO metadata
│   ├── page.jsx                      ✅ Main page
│   ├── head.jsx                      ✅ Head component
│   └── blob/page.jsx                 ⚠️  Old example page
│
├── src/
│   ├── components/
│   │   ├── kupuri/                   ✅ All Kupuri components
│   │   │   ├── ContactForm.tsx       ✅ Slide-over modal
│   │   │   ├── KupuriFooter.tsx      ✅ Ecosystem links
│   │   │   ├── KupuriHero.tsx        ✅ Hero (no 3D)
│   │   │   ├── KupuriNavbar.tsx      ✅ Nav + language toggle
│   │   │   ├── KupuriServiceGrid.tsx ✅ Project filter
│   │   │   └── KupuriTicker.tsx      ✅ Marquee
│   │   ├── canvas/                   ⚠️  Old R3F components (unused)
│   │   └── dom/Layout.jsx            ✅ Root layout
│   │
│   ├── contexts/
│   │   └── LanguageContext.tsx       ✅ Bilingual support
│   │
│   ├── helpers/                      ⚠️  Old R3F infrastructure
│   └── templates/                    ⚠️  Old shader examples
│
├── public/
│   ├── icons/                        ✅ Favicon set
│   ├── img/                          ⚠️  Old logo
│   ├── dog.glb, duck.glb             ⚠️  Example 3D models
│   └── [MISSING: actual project images]
│
├── theme.json                         ✅ Content data layer
├── tailwind.config.js                 ✅ Kupuri branding
└── tsconfig.json                      ✅ TypeScript config
```

---

## ✅ What's BUILT and Working

### **1. Core Infrastructure (100%)**
- ✅ Next.js 14 App Router setup
- ✅ Monorepo structure (pnpm workspaces)
- ✅ TypeScript configuration
- ✅ Build pipeline (passing)
- ✅ Development environment

### **2. Bilingual System (100%)**
- ✅ LanguageContext (React Context)
- ✅ Spanish/English toggle in navbar
- ✅ All components language-aware
- ✅ theme.json with bilingual content
- ✅ Smooth toggle animations

### **3. Branding & Design (95%)**
- ✅ Kupuri color palette implemented
- ✅ Fluid typography with clamp()
- ✅ Film grain overlay (animated)
- ✅ Custom selection colors
- ⚠️  Logo is placeholder gradient (needs actual logo)

### **4. Components Built**

#### **KupuriNavbar (90%)**
- ✅ Smooth scroll navigation
- ✅ Language toggle switch (animated)
- ✅ Scroll-based background blur
- ⚠️  Mobile menu not implemented
- ⚠️  Logo is placeholder

#### **KupuriHero (70%)**
- ✅ Full-screen layout
- ✅ Fluid typography
- ✅ Gradient animations
- ✅ Scroll indicator
- ⚠️  No 3D scene (was removed due to TypeScript issues)
- ⚠️  Background image missing (angel-storm.webp)

#### **KupuriTicker (100%)**
- ✅ Infinite scroll marquee
- ✅ Smooth animation
- ✅ Brand messaging

#### **KupuriServiceGrid (85%)**
- ✅ Category filter (ALL/BRANDING/FILM/DIGITAL)
- ✅ Framer Motion animations
- ✅ Hover effects
- ✅ Bilingual titles
- ⚠️  Images are placeholder gradients
- ⚠️  No click-through to case studies

#### **ContactForm (90%)**
- ✅ Slide-over modal design
- ✅ Form validation
- ✅ Success/error states
- ✅ Bilingual labels
- ✅ API integration
- ⚠️  No actual database saving
- ⚠️  No email notifications

#### **KupuriFooter (85%)**
- ✅ Ecosystem links
- ✅ Social media placeholders
- ✅ Bilingual content
- ⚠️  Links go to placeholder URLs

### **5. Backend (40%)**
- ✅ `/api/contact` endpoint created
- ✅ Form validation working
- ✅ Console logging active
- ⚠️  Supabase code written but commented out
- ⚠️  Resend email code written but commented out
- ❌ No database connected
- ❌ No email sending

### **6. SEO & Performance (80%)**
- ✅ OpenGraph metadata
- ✅ Twitter cards
- ✅ Proper title/description
- ✅ Favicon set
- ✅ Manifest.json
- ⚠️  metadataBase warning (needs domain)
- ⚠️  No sitemap.xml
- ⚠️  No robots.txt

---

## ❌ What's NOT Built / Missing

### **1. Content & Assets (Critical)**

#### **Images Missing:**
- ❌ `/angel-storm.webp` - Hero background (El Ángel de la Independencia storm scene)
- ❌ `/projects/branding.webp` - Ecosystem card
- ❌ `/projects/film.webp` - Ecosystem card
- ❌ `/projects/digital.webp` - Ecosystem card
- ❌ `/proj1.webp` - Service grid project 1
- ❌ `/proj2.webp` - Service grid project 2
- ❌ `/proj3.webp` - Service grid project 3
- ❌ Actual Kupuri logo (currently using gradient placeholder)

#### **Copy/Content:**
- ⚠️  About section is hardcoded Spanish text only
- ⚠️  No team bios
- ⚠️  No detailed service descriptions
- ⚠️  No actual case studies
- ⚠️  Social media links are placeholders

### **2. 3D Experience (Original Vision)**

**Status:** Infrastructure exists, not implemented due to TypeScript conflicts

**What Was Planned:**
- ❌ Storm scene with lightning effects
- ❌ El Ángel monument 3D model
- ❌ Parallax mouse interaction
- ❌ Three.js canvas with proper lighting
- ❌ VR/AR entry point (scaffolding exists)

**What's Available:**
- ✅ React Three Fiber installed
- ✅ @react-three/drei installed
- ✅ @react-three/xr installed
- ✅ Old r3f-nextjs-starter infrastructure
- ✅ Example 3D models (dog.glb, duck.glb)

### **3. Backend Integrations**

#### **Supabase (Not Connected):**
- ⚠️  Code written, commented out
- ❌ No environment variables set
- ❌ No database table created
- ❌ No connection tested

**What's Needed:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

**SQL Schema Ready:**
```sql
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  created_at timestamp DEFAULT now()
);
```

#### **Resend Email (Not Connected):**
- ⚠️  Code written, commented out
- ❌ No API key set
- ❌ No sender email verified

**What's Needed:**
```env
RESEND_API_KEY=re_your_key
CONTACT_EMAIL=your-email@kupuri.media
```

### **4. Missing Sections**

#### **Team Section (Not Built)**
- ❌ Team member profiles
- ❌ Photos and bios
- ❌ Role descriptions

#### **Testimonials (Not Built)**
- ❌ Client quotes
- ❌ Company logos
- ❌ Star ratings/metrics

#### **Process/Methodology (Not Built)**
- ❌ How you work section
- ❌ Timeline/phases
- ❌ Deliverables overview

#### **Blog/News (Not Built)**
- ❌ Blog posts
- ❌ Company news
- ❌ Content management

#### **Case Studies (Not Built)**
- ❌ Detailed project pages
- ❌ Project routes (/projects/[slug])
- ❌ Before/after comparisons
- ❌ Client testimonials per project

### **5. Features Not Implemented**

#### **Analytics:**
- ❌ Google Analytics 4
- ❌ Vercel Analytics
- ❌ Hotjar/heatmaps
- ❌ Conversion tracking

#### **Performance:**
- ⚠️  No Lighthouse audit results
- ⚠️  No image optimization (Next Image not used)
- ⚠️  No lazy loading strategy

#### **Newsletter:**
- ❌ Email signup form
- ❌ Mailchimp/ConvertKit integration

#### **Social Proof:**
- ❌ Client logos ticker
- ❌ Awards/recognition
- ❌ Instagram feed embed

#### **Mobile:**
- ⚠️  Mobile menu not implemented (navbar)
- ⚠️  Touch gestures for service grid

#### **Accessibility:**
- ⚠️  No ARIA labels
- ⚠️  No keyboard navigation testing
- ⚠️  No screen reader optimization

#### **Animations Not Used:**
- ❌ Lottie animations (library installed)
- ❌ Advanced GSAP timeline sequences
- ❌ Page transitions

---

## 🎯 COMPLETION PRD - Phase 2

**Goal:** Transform from "MVP Landing Page" to "Pro Max Agency Website"

### **Priority 1: Critical Path to Launch (1-2 weeks)**

#### **P1.1 - Real Content & Assets**

**User Stories:**
- As a visitor, I want to see actual Kupuri branding so I understand the agency identity
- As a visitor, I want to see real project work so I can evaluate quality

**Tasks:**
1. **Logo Integration**
   - [ ] Get actual Kupuri logo (SVG format)
   - [ ] Replace gradient placeholder in KupuriNavbar
   - [ ] Add to favicon set
   - [ ] Update manifest.json

2. **Hero Image**
   - [ ] Source/create El Ángel storm image (1920x1080 minimum)
   - [ ] Optimize to WebP format
   - [ ] Add to `/public/angel-storm.webp`
   - [ ] Update KupuriHero to use actual image

3. **Project Images**
   - [ ] Get 6-9 high-quality project photos
   - [ ] Optimize to WebP (800x800 recommended)
   - [ ] Place in `/public/projects/`
   - [ ] Update theme.json with actual paths

4. **Copy/Content**
   - [ ] Write bilingual About section
   - [ ] Create 3-6 detailed service descriptions
   - [ ] Add actual ecosystem service descriptions
   - [ ] Update metadata descriptions

**Acceptance Criteria:**
- All placeholder gradients replaced with real images
- Logo appears consistently across site
- Content is professional and bilingual

---

#### **P1.2 - Backend Integration (Production Ready)**

**User Stories:**
- As a business owner, I want to receive contact form submissions via email
- As a business owner, I want to track leads in a database

**Tasks:**

1. **Supabase Setup (30 minutes)**
   - [ ] Create Supabase account
   - [ ] Create new project
   - [ ] Run SQL schema (provided in VERCEL_ENV_VARS.txt)
   - [ ] Get credentials
   - [ ] Add to Vercel environment variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     ```

2. **Code Integration (15 minutes)**
   - [ ] Uncomment Supabase code in `/api/contact/route.ts`
   - [ ] Install `@supabase/supabase-js` if needed
   - [ ] Test form submission writes to database
   - [ ] Verify data appears in Supabase dashboard

3. **Resend Email Setup (20 minutes)**
   - [ ] Create Resend account
   - [ ] Verify sending domain
   - [ ] Get API key
   - [ ] Add to Vercel:
     ```
     RESEND_API_KEY
     CONTACT_EMAIL
     ```

4. **Code Integration (15 minutes)**
   - [ ] Uncomment Resend code in `/api/contact/route.ts`
   - [ ] Install `resend` package if needed
   - [ ] Test email sending
   - [ ] Customize email template

**Acceptance Criteria:**
- Form submissions save to Supabase
- Email notifications arrive immediately
- Error handling works for failed submissions
- Success message shows in UI

---

#### **P1.3 - Mobile Optimization**

**User Stories:**
- As a mobile visitor, I want to navigate easily on my phone
- As a mobile visitor, I want touch-friendly interactions

**Tasks:**

1. **Mobile Menu (4 hours)**
   - [ ] Create hamburger menu component
   - [ ] Add slide-out navigation
   - [ ] Animate with Framer Motion
   - [ ] Test on mobile devices

2. **Touch Optimization (2 hours)**
   - [ ] Increase touch targets (44x44px minimum)
   - [ ] Add swipe gestures to service grid
   - [ ] Test form on mobile keyboards
   - [ ] Fix any overflow issues

3. **Responsive Testing (2 hours)**
   - [ ] Test on iPhone (Safari)
   - [ ] Test on Android (Chrome)
   - [ ] Test on iPad
   - [ ] Fix any layout issues

**Acceptance Criteria:**
- Mobile menu works smoothly
- All interactions are touch-friendly
- No horizontal scroll
- Forms work with mobile keyboards

---

### **Priority 2: Enhanced Features (2-4 weeks)**

#### **P2.1 - 3D Storm Scene (Original Vision)**

**User Stories:**
- As a visitor, I want a cinematic 3D experience so I'm impressed
- As a visitor on VR, I want to explore in immersive mode

**Tasks:**

1. **Fix TypeScript Issues (2 hours)**
   - [ ] Properly configure `@react-three/fiber` types
   - [ ] Add global type declarations
   - [ ] Test build with R3F components

2. **Storm Scene Implementation (8 hours)**
   - [ ] Create `StormScene.tsx` component (working)
   - [ ] Add lightning flash effects
   - [ ] Implement parallax mouse tracking
   - [ ] Add El Ángel plane texture
   - [ ] Optimize performance (60 FPS target)

3. **Integration (2 hours)**
   - [ ] Add to KupuriHero as background
   - [ ] Ensure text readability over 3D
   - [ ] Add loading state
   - [ ] Graceful fallback for older devices

**Acceptance Criteria:**
- 3D scene renders without errors
- Lightning effects are cinematic
- Performance is 60 FPS on desktop
- Mobile shows simpler version or static image

---

#### **P2.2 - Case Study Pages**

**User Stories:**
- As a visitor, I want to see detailed project work
- As a potential client, I want to understand your process

**Tasks:**

1. **Route Setup (2 hours)**
   - [ ] Create `/app/projects/[slug]/page.tsx`
   - [ ] Set up dynamic routing
   - [ ] Create layout component

2. **Case Study Template (6 hours)**
   - [ ] Hero section with project image
   - [ ] Client/industry/year metadata
   - [ ] Challenge/solution/results sections
   - [ ] Image gallery component
   - [ ] Testimonial section
   - [ ] Next/previous project navigation

3. **Content Creation (8 hours)**
   - [ ] Write 3-6 case studies (bilingual)
   - [ ] Collect project images
   - [ ] Get client testimonials
   - [ ] Optimize all images

**Acceptance Criteria:**
- Case study pages look professional
- Navigation works smoothly
- SEO metadata per project
- Shareable on social media

---

#### **P2.3 - Team Section**

**User Stories:**
- As a potential client, I want to know who I'll work with
- As a potential hire, I want to see the team culture

**Tasks:**

1. **Component Creation (4 hours)**
   - [ ] Create `TeamSection.tsx`
   - [ ] Grid layout for team members
   - [ ] Hover effects showing bio
   - [ ] Social links per member

2. **Content (6 hours)**
   - [ ] Professional photos of team
   - [ ] Write bios (bilingual)
   - [ ] Add roles/expertise
   - [ ] Collect social media links

3. **Integration (1 hour)**
   - [ ] Add to main page or `/about`
   - [ ] Link from footer
   - [ ] Add to theme.json

**Acceptance Criteria:**
- Team members display professionally
- Bios are engaging and bilingual
- Photos are high quality
- Hover states work smoothly

---

#### **P2.4 - Testimonials & Social Proof**

**User Stories:**
- As a potential client, I want to see client satisfaction
- As a visitor, I want to trust the agency's expertise

**Tasks:**

1. **Testimonials Component (4 hours)**
   - [ ] Create carousel/slider
   - [ ] Client logo + quote + name
   - [ ] Star ratings (optional)
   - [ ] Auto-rotation

2. **Client Logo Ticker (2 hours)**
   - [ ] Infinite scroll of client logos
   - [ ] Similar to KupuriTicker
   - [ ] Grayscale with hover color

3. **Metrics Section (3 hours)**
   - [ ] Years in business
   - [ ] Projects completed
   - [ ] Client satisfaction %
   - [ ] Awards won
   - [ ] Animated counters

**Acceptance Criteria:**
- Testimonials look credible
- Client logos are recognizable
- Metrics are impressive
- Animations are smooth

---

### **Priority 3: Advanced Features (4+ weeks)**

#### **P3.1 - Blog/Content Hub**

**Tasks:**
- [ ] Set up content management (MDX or Sanity)
- [ ] Create blog post template
- [ ] Category/tag system
- [ ] RSS feed
- [ ] Search functionality

**Estimated Time:** 20 hours

---

#### **P3.2 - Analytics & Optimization**

**Tasks:**
- [ ] Google Analytics 4 setup
- [ ] Vercel Analytics integration
- [ ] Hotjar/heatmaps
- [ ] Conversion tracking
- [ ] A/B testing setup
- [ ] Lighthouse optimization (90+ score)

**Estimated Time:** 12 hours

---

#### **P3.3 - Newsletter Integration**

**Tasks:**
- [ ] Email signup form component
- [ ] Mailchimp/ConvertKit API
- [ ] Thank you page
- [ ] Welcome email automation
- [ ] GDPR compliance

**Estimated Time:** 8 hours

---

#### **P3.4 - Process/Methodology Page**

**Tasks:**
- [ ] Create `/methodology` route
- [ ] Timeline visualization
- [ ] Phase descriptions
- [ ] Deliverables per phase
- [ ] Lottie animations for each step

**Estimated Time:** 12 hours

---

#### **P3.5 - VR/AR Experience**

**Tasks:**
- [ ] Full WebXR implementation
- [ ] VR portfolio gallery
- [ ] Hand controller support
- [ ] Spatial audio
- [ ] 360° project showcases

**Estimated Time:** 40 hours

---

## 📋 Implementation Roadmap

### **Week 1-2: Critical Path**
- Day 1-2: Content gathering (images, copy)
- Day 3-4: Backend integration (Supabase + Resend)
- Day 5-7: Mobile menu + responsive fixes
- Day 8-10: Polish and QA

**Deliverable:** Fully functional production site

### **Week 3-4: Enhanced Features**
- Week 3: 3D scene implementation
- Week 4: Case study pages (3 minimum)

**Deliverable:** Cinematic 3D experience + portfolio depth

### **Week 5-8: Advanced Features**
- Week 5-6: Team section + testimonials
- Week 7: Blog setup + first posts
- Week 8: Analytics + optimization

**Deliverable:** Complete agency website

### **Week 9+: Ongoing**
- Content creation
- SEO optimization
- A/B testing
- Feature requests

---

## 🎯 Success Metrics

### **Phase 1 (Critical Path)**
- [ ] All placeholder content replaced
- [ ] Contact form saves to database
- [ ] Email notifications working
- [ ] Mobile menu functional
- [ ] Lighthouse Performance > 80

### **Phase 2 (Enhanced)**
- [ ] 3D scene working at 60 FPS
- [ ] 3-6 case study pages live
- [ ] Team section complete
- [ ] Lighthouse Performance > 90

### **Phase 3 (Advanced)**
- [ ] Blog with 5+ posts
- [ ] Analytics tracking all conversions
- [ ] Newsletter with 100+ subscribers
- [ ] Lighthouse Performance 95+

---

## 🔧 Technical Debt to Address

1. **Remove Old Code**
   - [ ] Delete `/app/blob/page.jsx` (example page)
   - [ ] Delete unused R3F templates
   - [ ] Delete old 3D models (dog.glb, duck.glb)
   - [ ] Clean up unused imports

2. **TypeScript Migration**
   - [ ] Convert remaining .jsx to .tsx
   - [ ] Add proper type definitions
   - [ ] Fix any `any` types

3. **Performance**
   - [ ] Implement Next Image for all images
   - [ ] Add lazy loading
   - [ ] Optimize bundle size
   - [ ] Add service worker caching

4. **Accessibility**
   - [ ] Add ARIA labels
   - [ ] Keyboard navigation
   - [ ] Screen reader testing
   - [ ] Focus management

---

## 📞 Dependencies & Requirements

### **External Services Needed:**
- Supabase account (free tier OK)
- Resend account (free tier: 100 emails/day)
- Domain name (for production)
- CDN/image hosting (Vercel works)

### **Content Needed:**
- Kupuri logo (SVG)
- 10-15 high-quality project images
- El Ángel storm photo/render
- Team photos (professional)
- Client testimonials (3-6)
- Client logos (6-12)

### **Skills Required:**
- Next.js/React development
- TypeScript (for 3D scene)
- Three.js (for 3D scene)
- Content writing (bilingual)
- Image optimization
- API integration

---

## 🚀 Quick Start for Phase 2

To continue development:

```bash
# 1. Install any missing dependencies
pnpm install

# 2. Set up environment variables
cp apps/web/.env.example apps/web/.env.local
# Edit .env.local with your Supabase/Resend keys

# 3. Start development
pnpm dev

# 4. Access site
# http://localhost:3000
```

---

## 📝 Notes

- **Build is stable:** No breaking changes needed
- **Infrastructure is solid:** Focus on content and features
- **Bilingual is working:** Just needs content translation
- **Performance is good:** 135 KB is acceptable, can optimize further
- **3D is optional:** Site works great without it, but it's the original vision

**Recommended Priority:**
1. Get real content ASAP (biggest impact)
2. Connect backend (enables lead capture)
3. Add mobile menu (UX critical)
4. Then do 3D scene (wow factor)
5. Everything else is enhancement

---

**Status:** Ready for Phase 2 development
**Last Updated:** 2026-01-28
**Branch:** `claude/main-deploy-GkInj`
