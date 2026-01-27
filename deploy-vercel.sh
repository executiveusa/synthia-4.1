#!/bin/bash
set -e

echo "🚀 Deploying Cynthia to Vercel..."
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must run from apps/web directory"
    exit 1
fi

# Deploy to Vercel
echo "📦 Building and deploying to production..."
vercel --prod --yes

echo ""
echo "✅ Deployment complete!"
