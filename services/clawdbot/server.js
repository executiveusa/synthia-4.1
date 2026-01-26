const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.CLOUDBOT_PORT || 18789

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() })
})

// Agent endpoint - main interface for Cynthia frontend
app.post('/agent', async (req, res) => {
  const { message, context } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  try {
    // ⚠️ PLACEHOLDER RESPONSE - CLAWDBOT NOT YET WIRED ⚠️
    // TODO: Integrate with actual Clawdbot/Claude API
    const response = {
      placeholder: true,
      status: 'DEMO_MODE',
      reply: `Hello! This is a placeholder response. You said: "${message}"\n\nClawdbot integration with Claude API is pending. This gateway is ready to receive messages, but needs the actual AI backend connected.`,
      data: {
        timestamp: new Date().toISOString(),
        messageLength: message.length,
        context: context || null,
        note: 'This is a demo response until Claude API is integrated',
      },
    }

    res.json(response)
  } catch (error) {
    console.error('Agent error:', error)
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    })
  }
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'CloudBot Gateway',
    version: '1.0.0',
    status: 'PLACEHOLDER - Claude API not yet integrated',
    endpoints: [
      { method: 'GET', path: '/health', description: 'Health check' },
      { method: 'POST', path: '/agent', description: 'Send message to agent (placeholder response)' },
    ],
  })
})

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`CloudBot Gateway running on port ${PORT}`)
  console.log(`Health: http://localhost:${PORT}/health`)
  console.log(`Agent: http://localhost:${PORT}/agent`)
  console.log(`⚠️  NOTE: Running in PLACEHOLDER mode - Claude API not yet integrated`)
})
