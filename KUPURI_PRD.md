# PRD: Kupuri Studios - High-End Creative Landing Page

## 1. Project Vision

Build a world-class, "Pro Max" landing page for **Kupuri Studios** (Mexico City). The site must function as a high-conversion ecosystem hub, utilizing cinematic 3D elements, fluid micro-interactions, bilingual support (Spanish/English), and a full-stack lead capture system.

## 2. Technical Stack

* **Framework:** Next.js 14 (App Router) + TypeScript/JSX
* **Styling:** Tailwind CSS + Framer Motion
* **3D Engine:** React Three Fiber (R3F) + Drei
* **Backend/DB:** Supabase (Database for leads) - Ready for integration
* **Email:** Resend - Ready for integration
* **Deployment:** Vercel
* **Current Branch:** claude/main-deploy-GkInj

## 3. Core Features & User Stories

### Phase 1: Infrastructure & Data Layer ✅ COMPLETED

* **US 1.1:** ✅ `theme.json` stores global colors, typography, and bilingual content
* **US 1.2:** ✅ API route `/api/contact` validates inputs and handles form submissions
* **US 1.3:** ✅ Language context provides Spanish/English toggle functionality

### Phase 2: The "Spatial" Hero (3D) ✅ COMPLETED

* **US 2.1:** ✅ Fullscreen 3D Canvas with Storm scene and parallax effects
* **US 2.2:** ✅ Lightning flash effects using Three.js point lights
* **US 2.3:** ✅ Responsive fluid typography with clamp() for all devices

### Phase 3: Interactive Service Hub ✅ COMPLETED

* **US 3.1:** ✅ Interactive grid filters between [All, Film, Branding, Digital]
* **US 3.2:** ✅ Cards expand with Framer Motion layoutId animations
* **US 3.3:** ✅ Bilingual content switches dynamically

### Phase 4: Lead Capture & Conversion ✅ COMPLETED

* **US 4.1:** ✅ Sliding modal contact form with premium UX
* **US 4.2:** ✅ Form validation and API integration ready
* **US 4.3:** ✅ Success messages in both Spanish and English

### Phase 5: Polish & Production ⚠️ IN PROGRESS

* **US 5.1:** ✅ Film grain overlay at 0.03 opacity
* **US 5.2:** ✅ Custom selection colors (Kupuri Cyan)
* **US 5.3:** ⚠️ Lighthouse Performance score >90 (needs testing)
* **US 5.4:** ⚠️ Mobile responsiveness verification
* **US 5.5:** 🔲 Supabase integration (schema created, needs env vars)
* **US 5.6:** 🔲 Resend email integration (code ready, needs API key)

## 4. Design Guidelines (The "Pro Max" Polish)

* **Fluid Typography:** ✅ Headers use `clamp(4rem, 12vw, 15rem)`
* **Grain Overlay:** ✅ Subtle noise texture at 0.03 opacity with animation
* **Color Palette:** ✅ Dark (#0A0A0C), Bone (#F9F6F2), Kupuri Cyan (#00E5FF), Kupuri Blue (#2962FF), Kupuri Violet (#8a2be2)
* **Bilingual:** ✅ Spanish primary, English secondary with toggle
* **Animations:** ✅ Framer Motion for scroll reveals, stagger delays 0.2s

## 5. Deployment Checklist

- [x] Code committed to branch
- [x] Build passing
- [x] API routes functional
- [ ] Supabase environment variables set
- [ ] Resend API key configured
- [ ] Deploy to Vercel production
- [ ] Test contact form end-to-end
- [ ] Verify SEO metadata on social shares

## 6. Integration Requirements (Post-MVP)

### Supabase Schema

```sql
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

### Environment Variables Needed

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend
RESEND_API_KEY=your_resend_api_key

# Contact Email
CONTACT_EMAIL=your-email@kupuri.media
```

## 7. Acceptance Criteria

1. ✅ `pnpm --filter web build` passes with zero errors
2. ✅ Contact form renders and validates inputs
3. ⚠️ Form submission writes to console (Supabase integration pending)
4. ⚠️ Lighthouse Performance score `>90` (needs verification)
5. ✅ Mobile responsiveness implemented
6. ✅ Bilingual toggle works correctly
7. ✅ 3D scene renders without errors

---

**Status:** MVP Complete, ready for production deployment

**Branch:** `claude/main-deploy-GkInj`

**Last Updated:** 2026-01-28
