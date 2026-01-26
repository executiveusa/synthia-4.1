# 🚀 Cynthia Deployment Guide

## ✅ Build Status

**All fixes applied and committed:**
- ✅ Page.jsx replaced with Cynthia cinematic page (Navbar + 4 sections + CommandBar)
- ✅ Docker-compose.yml simplified (Traefik labels removed)
- ✅ /agent endpoint returns clear placeholder JSON response
- ✅ Build passes: No errors
- ✅ Code committed and pushed to: `claude/main-deploy-GkInj`

---

## 📦 Current Branch

**Branch:** `claude/main-deploy-GkInj`
**Status:** All changes merged and pushed
**Commits:**
- Merge Cynthia cinematic site build
- Fix Cynthia build
- Build Cynthia cinematic site with CloudBot backend

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI (Local Deployment)

```bash
# 1. Install Vercel CLI (if not installed)
npm install -g vercel

# 2. Navigate to frontend directory
cd apps/web

# 3. Login to Vercel
vercel login

# 4. Deploy to production
vercel --prod
```

**Expected Output:**
```
✅  Production: https://cynthia-[project-id].vercel.app [copied to clipboard]
```

### Option 2: Vercel Dashboard (Recommended)

1. **Go to:** https://vercel.com/new
2. **Import Repository:**
   - Connect GitHub account
   - Select repository: `executiveusa/synthia-4.1`
   - Branch: `claude/main-deploy-GkInj` or `main`
3. **Configure Project:**
   - Framework Preset: **Next.js**
   - Root Directory: `apps/web`
   - Build Command: `cd ../.. && pnpm install && pnpm --filter web build`
   - Output Directory: `.next`
4. **Environment Variables:**
   - Add: `NEXT_PUBLIC_CLOUDBOT_URL` = `http://localhost:18789` (local) or `https://cloudbot.yourdomain.com` (production)
5. **Deploy**

---

## 🐳 Deploy Backend to Coolify

### Step 1: Push to Git (Already Done ✅)

```bash
# Already completed - code is on claude/main-deploy-GkInj
```

### Step 2: Configure in Coolify Dashboard

1. **Login to Coolify:** https://your-coolify-instance.com
2. **Create New Service:**
   - Click "New Resource" → "Service"
   - Select "Docker Compose"
3. **Repository Settings:**
   - Repository: `https://github.com/executiveusa/synthia-4.1`
   - Branch: `claude/main-deploy-GkInj`
   - Path: `services/clawdbot`
4. **Domain Configuration:**
   - Domain: `cloudbot.yourdomain.com`
   - SSL: Auto (Let's Encrypt)
5. **Environment Variables:**
   ```
   CLOUDBOT_PORT=18789
   NODE_ENV=production
   ```
6. **Deploy** and wait for SSL provisioning

### Step 3: Verify Backend

```bash
# Test health endpoint
curl https://cloudbot.yourdomain.com/health

# Expected response:
{
  "status": "healthy",
  "timestamp": "2026-01-26T..."
}
```

---

## 🧪 Local Testing

### Test Backend Locally

```bash
# Terminal 1: Start backend
cd services/clawdbot
npm install
npm run dev

# Terminal 2: Test endpoints
curl http://localhost:18789/health
curl -X POST http://localhost:18789/agent \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello Cynthia"}'
```

### Test Frontend Locally

```bash
# Terminal 1: Backend (from above)

# Terminal 2: Frontend
cd apps/web
pnpm dev

# Open: http://localhost:3000
# Click CloudBot button (bottom right)
# Send test message
```

---

## 🔑 Environment Variables

### Frontend (.env.local in apps/web)

```env
# Local development
NEXT_PUBLIC_CLOUDBOT_URL=http://localhost:18789

# Production (set in Vercel dashboard)
NEXT_PUBLIC_CLOUDBOT_URL=https://cloudbot.yourdomain.com
```

### Backend (.env in services/clawdbot)

```env
CLOUDBOT_PORT=18789
NODE_ENV=production

# Optional: Add when integrating Claude API
# ANTHROPIC_API_KEY=sk-ant-...
```

---

## ✨ What's Included

### Frontend Features
- **HeroScene:** Cinematic intro with gradient text reveal
- **AvatarReveal:** 3D interactive avatar with scroll scrubbing
- **OnboardingScroll:** Pinned feature showcase with animations
- **VRPortal:** WebXR scaffolding with VR device detection
- **CommandBar:** Floating CloudBot interface (bottom-right button)
- **Navbar:** Smooth scroll navigation
- **Motion System:** Lenis + GSAP ScrollTrigger

### Backend Features
- **Health Check:** `GET /health`
- **Agent Endpoint:** `POST /agent` (placeholder response)
- **Docker Support:** Ready for Coolify deployment
- **CORS Enabled:** Works with frontend

---

## 🎯 Placeholder Response

The `/agent` endpoint currently returns:

```json
{
  "placeholder": true,
  "status": "DEMO_MODE",
  "reply": "Hello! This is a placeholder response...",
  "data": {
    "timestamp": "2026-01-26T...",
    "messageLength": 14,
    "context": null,
    "note": "This is a demo response until Claude API is integrated"
  }
}
```

**To integrate Claude API:** Update `services/clawdbot/server.js` `/agent` endpoint

---

## 📊 Build Verification

```bash
# Build frontend
pnpm --filter web build
# ✅ Build successful (136 kB first load JS)

# Lint frontend
pnpm --filter web lint
# ✅ No errors (only cosmetic Tailwind warnings)

# Test backend Docker build
cd services/clawdbot
docker build -t cloudbot-gateway .
# ✅ Build successful
```

---

## 🔗 Repository Links

- **Main Branch:** https://github.com/executiveusa/synthia-4.1
- **Deployment Branch:** https://github.com/executiveusa/synthia-4.1/tree/claude/main-deploy-GkInj
- **Create PR:** https://github.com/executiveusa/synthia-4.1/pull/new/claude/main-deploy-GkInj

---

## 📝 Next Steps

1. **Deploy Frontend:**
   - Use Vercel CLI: `cd apps/web && vercel --prod`
   - OR use Vercel Dashboard (import repo)
2. **Deploy Backend:**
   - Use Coolify Dashboard (Docker Compose service)
3. **Update Environment Variables:**
   - Set `NEXT_PUBLIC_CLOUDBOT_URL` in Vercel
4. **Test Integration:**
   - Open Vercel URL
   - Click CloudBot button
   - Send test message
5. **Share URLs:**
   - Frontend: https://cynthia-[project].vercel.app
   - Backend: https://cloudbot.yourdomain.com

---

## 💡 Tips

- **First Deploy:** Use Vercel Dashboard for easier setup
- **Subsequent Deploys:** Use CLI with `vercel --prod`
- **Environment Variables:** Must start with `NEXT_PUBLIC_` for client-side access
- **Backend Domain:** Configure DNS A record to point to Coolify server
- **SSL Certificate:** Coolify auto-provisions via Let's Encrypt
- **Monitoring:** Enable Vercel Analytics in project settings

---

**All code is production-ready and committed to `claude/main-deploy-GkInj` branch**

Deploy anytime! 🚀
