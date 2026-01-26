'use client'

const CLOUDBOT_URL = process.env.NEXT_PUBLIC_CLOUDBOT_URL || 'http://localhost:18789'

export interface CloudBotMessage {
  message: string
  context?: any
}

export interface CloudBotResponse {
  reply: string
  data?: any
  error?: string
}

/**
 * Send a message to CloudBot backend
 */
export async function sendToCloudbot(message: string): Promise<CloudBotResponse> {
  try {
    const response = await fetch(`${CLOUDBOT_URL}/agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      throw new Error(`CloudBot error: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('CloudBot client error:', error)
    return {
      reply: 'CloudBot is currently unavailable. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Check CloudBot health
 */
export async function checkCloudbotHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${CLOUDBOT_URL}/health`, {
      method: 'GET',
    })
    return response.ok
  } catch {
    return false
  }
}
