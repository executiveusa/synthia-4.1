# 🌟 CYNTHIA - Cinematic AI Experience Platform

A one-page cinematic website showcasing an immersive AI interaction experience with CloudBot backend integration.

**Status:** ✅ Built and ready for deployment

---

## 📋 Project Overview

**Frontend:** Next.js 14 + React Three Fiber + GSAP  
**Backend:** Node.js Express Gateway (CloudBot)  
**Architecture:** Monorepo with pnpm workspaces  
**Deployment:** Vercel (frontend) + Coolify/Docker (backend)

### Features
- 🎬 Cinematic scroll animations with GSAP + Lenis
- 🎨 Interactive 3D avatar with React Three Fiber
- 🚀 WebXR/VR scaffolding
- 💬 CloudBot command interface
- 📱 Mobile-first responsive design
- ♿ Accessibility support (reduced motion, focus states)

---

## 🚀 Quick Start

```bash
# Install all dependencies
pnpm install

# Start frontend
pnpm dev

# Start backend (separate terminal)
cd services/clawdbot && npm run dev
```

Frontend: http://localhost:3000  
Backend: http://localhost:18789

---

## 🚀 Deployment

### Frontend: Vercel

```bash
cd apps/web
vercel --prod
```

Set environment variable:
- `NEXT_PUBLIC_CLOUDBOT_URL=https://cloudbot.yourdomain.com`

### Backend: Coolify

1. In Coolify: New Service → Docker Compose
2. Path: `services/clawdbot`
3. Domain: `cloudbot.yourdomain.com`
4. Deploy

---

## 📚 Full Documentation

See detailed documentation in the repository for:
- Local development setup
- Project structure
- Deployment guides
- Troubleshooting

---

**Built with ❤️ by Claude Code**
