# CYNTHIA - Product Requirements Document

## Project Overview
Build and deploy Cynthia (SYNTHIA) as a one-page cinematic AI experience platform.

**Frontend:** Vercel
**Backend:** Coolify (Docker) on Hostinger VPS
**Architecture:** Monorepo with pnpm workspaces

---

## Implementation Checklist

### Phase 1: Monorepo Structure ✅
- [x] Create monorepo layout (apps/, services/)
- [x] Configure pnpm workspaces
- [x] Move frontend to apps/web
- [x] Create backend structure in services/clawdbot
- [x] Root package.json with workspace scripts

### Phase 2: Frontend - Cinematic Experience ✅
- [x] Install dependencies (gsap, lenis, @react-three/xr, lottie-react)
- [x] Motion system implementation
  - [x] scroll.ts (Lenis + GSAP ScrollTrigger sync)
  - [x] timelines.ts (section-specific animations)
- [x] Section components
  - [x] HeroScene (cinematic intro with GSAP text reveal)
  - [x] AvatarReveal (R3F canvas with scroll-scrubbed animation)
  - [x] OnboardingScroll (pinned section with progress indicators)
  - [x] VRPortal (XR scaffolding with dramatic CTA)
- [x] UI Components
  - [x] Navbar with smooth scroll navigation
  - [x] CommandBar for CloudBot interaction
  - [x] Section wrapper component
- [x] CloudBot API client (cloudbotClient.ts)
- [x] Main page integration with all sections

### Phase 3: Backend - CloudBot Service ✅
- [x] HTTP adapter (Express server)
- [x] Docker configuration
  - [x] Dockerfile
  - [x] docker-compose.yml for Coolify
- [x] API endpoints
  - [x] POST /agent (message handler)
  - [x] GET /health (health check)
- [x] Environment configuration
- [x] README with deployment instructions

### Phase 4: Deployment Configuration ✅
- [x] Vercel configuration
  - [x] vercel.json
  - [x] Environment variables setup
  - [x] .env.example files
- [x] Coolify deployment guide
  - [x] Docker Compose labels
  - [x] Traefik configuration
  - [x] Domain setup instructions

### Phase 5: Build & Quality Checks 🔄
- [ ] Frontend build passes (pnpm build:web)
- [ ] Frontend lint passes (pnpm lint:web)
- [ ] Backend Docker build succeeds
- [ ] Backend Docker Compose boots locally
- [ ] No TODOs or hardcoded URLs in production code
- [ ] Environment variables documented

### Phase 6: Deployment 🔄
- [ ] Frontend deployed to Vercel (production URL obtained)
- [ ] Backend Dockerfile tested locally
- [ ] Coolify deployment guide verified
- [ ] Environment variables documented for both services

### Phase 7: Documentation & Handoff 🔄
- [ ] Root README with:
  - [ ] Project overview
  - [ ] Local development commands
  - [ ] Deployment instructions (Vercel + Coolify)
  - [ ] Environment variables reference
- [ ] Handoff document with:
  - [ ] Production URLs
  - [ ] Remaining enhancements list
  - [ ] Integration notes

---

## Success Criteria

✅ **Complete:**
- Monorepo structure established
- All frontend sections implemented with cinematic animations
- CloudBot backend service created with Docker support
- Deployment configurations in place

🔄 **In Progress:**
- Build validation
- Deployment execution
- Documentation completion

⏳ **Pending:**
- Vercel production deployment
- Coolify backend deployment
- Final QA and handoff

---

## Technology Stack

### Frontend (apps/web)
- Next.js 14 (App Router)
- React Three Fiber + Drei
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Tailwind CSS
- @react-three/xr (WebXR)

### Backend (services/clawdbot)
- Node.js + Express
- Docker + Docker Compose
- Coolify deployment

### DevOps
- pnpm workspaces
- Vercel CLI
- Docker
- Coolify (Hostinger VPS)

---

## Next Steps

1. Run build and lint validation
2. Deploy frontend to Vercel
3. Test backend Docker build
4. Complete documentation
5. Generate handoff materials
