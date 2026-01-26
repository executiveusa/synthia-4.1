# CloudBot Gateway Service

HTTP gateway service for Cynthia's CloudBot backend.

## Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start server
npm run dev
```

Server runs on `http://localhost:18789`

## Docker Build

```bash
# Build image
docker build -t cloudbot-gateway .

# Run container
docker run -p 18789:18789 cloudbot-gateway
```

## Docker Compose

```bash
# Start with compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

## Deployment to Coolify

### Prerequisites
- Coolify installed on Hostinger VPS
- Domain configured (e.g., cloudbot.yourdomain.com)

### Steps

1. **Push code to Git repository**
   ```bash
   git add .
   git commit -m "Add CloudBot service"
   git push
   ```

2. **In Coolify Dashboard:**
   - Create new Service/Stack
   - Select "Docker Compose" deployment
   - Connect to your Git repository
   - Set project path: `services/clawdbot`
   - Configure domain: `cloudbot.yourdomain.com`

3. **Environment Variables:**
   Set in Coolify:
   - `CLOUDBOT_PORT=18789`
   - `NODE_ENV=production`
   - Add `ANTHROPIC_API_KEY` when ready to integrate Claude API

4. **Deploy:**
   - Click "Deploy"
   - Coolify will build and start the service
   - SSL certificate will be automatically provisioned

5. **Verify:**
   ```bash
   curl https://cloudbot.yourdomain.com/health
   ```

## API Endpoints

### Health Check
```
GET /health
```

### Agent Message
```
POST /agent
Content-Type: application/json

{
  "message": "Hello, CloudBot!",
  "context": {}
}
```

## Integration Notes

This is a placeholder gateway. To integrate with actual Clawdbot:

1. Install Clawdbot dependencies
2. Add Anthropic API key to environment
3. Update `/agent` endpoint to call Clawdbot logic
4. Configure workspace paths for agent persistence
