# 🚀 Vercel Deployment Instructions

## Quick Deploy (Dashboard Method - Recommended)

Your project is already set up on Vercel:
- **Project URL:** https://vercel.com/jimmy-bowers-s-projects/synthia
- **Project ID:** prj_jzoHRcgd9V5kwUKF67i4rPfH0yua

### Deploy via Dashboard (Easiest)

1. **Go to your Vercel project:**
   https://vercel.com/jimmy-bowers-s-projects/synthia

2. **Click "Deployments" tab**

3. **Click "Create Deployment"**

4. **Select branch:** `claude/main-deploy-GkInj`

5. **Click "Deploy"**

✅ Your site will be live at: `https://synthia.vercel.app` (or similar)

---

## Alternative: CLI Deployment

If you prefer CLI deployment:

```bash
# 1. Login to Vercel (opens browser for authentication)
vercel login

# 2. Navigate to frontend
cd apps/web

# 3. Link to existing project
vercel link

# When prompted:
# - Set up and deploy: Yes
# - Scope: jimmy-bowers-s-projects
# - Link to existing project: Yes
# - Project name: synthia

# 4. Deploy to production
vercel --prod
```

---

## Manual Git-Based Deployment (Auto-Deploy)

If you connected GitHub to Vercel:

1. **Merge to main branch** (or configure deployment branch)
2. **Vercel auto-deploys** on every push to main
3. **Check deployment status:** https://vercel.com/jimmy-bowers-s-projects/synthia/deployments

---

## Environment Variables

After deploying, set this environment variable in Vercel dashboard:

```
NEXT_PUBLIC_CLOUDBOT_URL=https://cloudbot.yourdomain.com
```

(Or use `http://localhost:18789` for testing)

**To set:**
1. Go to: https://vercel.com/jimmy-bowers-s-projects/synthia/settings/environment-variables
2. Add: `NEXT_PUBLIC_CLOUDBOT_URL`
3. Value: Your CloudBot backend URL
4. Redeploy

---

## Expected Deployment Output

Once deployed, you'll get a URL like:
```
✅ Production: https://synthia.vercel.app
or
✅ Production: https://synthia-[unique-id].vercel.app
```

---

## Verify Deployment

Once deployed, verify:
1. Open the production URL
2. Check all 4 sections load:
   - HeroScene (gradient intro)
   - AvatarReveal (3D sphere)
   - OnboardingScroll (feature cards)
   - VRPortal (VR entrance)
3. Click CloudBot button (bottom right)
4. Send test message

---

## Troubleshooting

**Issue:** Build fails
- Check build logs in Vercel dashboard
- Ensure root directory is set to `apps/web`
- Build command: `cd ../.. && pnpm install && pnpm --filter web build`

**Issue:** Environment variable not working
- Must start with `NEXT_PUBLIC_` for client-side access
- Redeploy after setting variables

**Issue:** 404 errors
- Check that root directory is `apps/web` in project settings
- Verify output directory is `.next`

---

**Current Status:** All code committed to `claude/main-deploy-GkInj` branch ✅

**Deploy now via dashboard:** https://vercel.com/jimmy-bowers-s-projects/synthia
