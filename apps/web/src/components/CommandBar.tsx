'use client'

import { useState } from 'react'
import { sendToCloudbot } from '@/api/cloudbotClient'

export default function CommandBar() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    setResponse('')

    try {
      const result = await sendToCloudbot(input)
      setResponse(JSON.stringify(result, null, 2))
    } catch (error) {
      setResponse(`Error: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        title="Open CloudBot Command Bar"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Command bar panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-h-96 bg-black/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-purple-500/30">
            <h3 className="text-white font-bold text-lg">CloudBot Command</h3>
            <p className="text-gray-400 text-sm">Send commands to your AI backend</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </form>

          {response && (
            <div className="p-4 border-t border-purple-500/30 max-h-64 overflow-auto">
              <pre className="text-xs text-green-400 whitespace-pre-wrap font-mono">
                {response}
              </pre>
            </div>
          )}
        </div>
      )}
    </>
  )
}
