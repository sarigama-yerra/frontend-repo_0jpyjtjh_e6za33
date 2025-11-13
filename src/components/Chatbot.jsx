import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SYSTEM_PROMPT = `You are Ahmad Raza’s virtual assistant — an intelligent and conversational AI portfolio guide that represents Ahmad’s real personality, tone, and work. You communicate with clarity, confidence, and authenticity — no exaggeration, no sales pitch.\n\nYour purpose: guide visitors through Ahmad’s portfolio, explain his skills, and answer questions about his work.\nKey facts you know:\n\nAhmad Raza is a Pakistani AI Specialist, Prompt Engineer, and Automation Designer.\n\nWorks at Trivia.Global, building communication frameworks and automation systems using GPT and generative models.\n\nExpertise: LLM workflow design, prompt engineering, generative AI, automation tools (n8n, Zapier, Make), and visual branding.\n\nProjects: Vizora, AI Receptionist Agent, n8n Automation Frameworks, and Creative Design Systems.\n\nTools: OpenAI GPT-5, Gemini Pro, ElevenLabs, Fal.ai, Photoshop, Figma, Python.\n\nVision: To merge human creativity with AI intelligence through design and automation.\nIf users ask for contact or collaborations, share:\nEmail: ahmadrazaai801@gmail.com\n\nPortfolio: ahmadart.online\nLinkedIn: linkedin.com/in/ahmadraza-ai\nStay concise, insightful, and always on-brand with Ahmad’s professional identity.`

// Lightweight local assistant (no backend) with seeded context
function useLocalAssistant() {
  const context = useMemo(() => ({
    intro:
      "I’m Ahmad’s AI twin. Ask about projects like Vizora, the AI Receptionist Agent, or how he designs LLM workflows and automations.",
  }), [])

  const reply = async (message) => {
    const m = message.toLowerCase()
    // Very small heuristic engine to keep things lightweight
    if (m.includes('contact') || m.includes('email') || m.includes('collab') || m.includes('hire')) {
      return "You can reach Ahmad at ahmadrazaai801@gmail.com. Portfolio: ahmadart.online • LinkedIn: linkedin.com/in/ahmadraza-ai"
    }
    if (m.includes('vizora')) {
      return "Vizora is an AI-powered visual SaaS for image/video/prompt generation. It leverages GPT-5 and Gemini Pro with a modular workflow Ahmad designed."
    }
    if (m.includes('receptionist') || m.includes('voice')) {
      return "The AI Receptionist Agent combines GPT-4o with ElevenLabs for natural voice, optimized for restaurants and bookings."
    }
    if (m.includes('automation') || m.includes('n8n') || m.includes('zapier') || m.includes('make')) {
      return "Ahmad builds multi-step automations with n8n/Zapier/Make — routing prompts, enrichment, and notifications across tools."
    }
    if (m.includes('skills') || m.includes('expertise')) {
      return "Core skills: LLM workflow design, prompt engineering, automation architecture, generative AI, visual identity, creative systems."
    }
    if (m.includes('tools') || m.includes('stack')) {
      return "Tools include GPT-5, Gemini Pro, ElevenLabs, Fal.ai, Python, Photoshop, and Figma."
    }
    return context.intro
  }

  return { reply }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi — I’m Ahmad’s AI twin. How can I help?' }])
  const [input, setInput] = useState('')
  const { reply } = useLocalAssistant()
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = async () => {
    if (!input.trim()) return
    const user = { role: 'user', content: input.trim() }
    setMessages((m) => [...m, user])
    setInput('')
    // fake typing delay
    setMessages((m) => [...m, { role: 'assistant', content: 'typing...', typing: true }])
    const res = await reply(user.content)
    await new Promise((r) => setTimeout(r, 400))
    setMessages((m) => [...m.slice(0, -1), { role: 'assistant', content: res }])
  }

  return (
    <div id="chat" className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-200 shadow-[0_0_30px_-10px_rgba(56,189,248,0.55)] transition hover:bg-cyan-400/20"
        aria-label="Open AI Assistant"
      >
        <svg className="h-5 w-5 transition group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h9"/><path d="M14 2v4"/><path d="M14 10h8"/></svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="mt-3 w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e12]/95 backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                <p className="text-sm">Ahmad’s AI Assistant</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white/80">×</button>
            </div>
            <div className="max-h-[300px] space-y-3 overflow-y-auto px-4 py-3 text-sm text-white/80">
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'assistant' ? '' : 'text-right'}>
                  <div className={`${m.role === 'assistant' ? 'bg-white/5' : 'bg-cyan-400/10 text-cyan-100'} inline-block max-w-[85%] rounded-lg px-3 py-2`}>
                    {m.typing ? <span className="inline-flex items-center gap-1 opacity-70"><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70"/><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70 [animation-delay:120ms]"/><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/70 [animation-delay:240ms]"/></span> : m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Ask about projects, skills, or tools…"
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none"
                />
                <button onClick={send} className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-cyan-100 hover:bg-cyan-400/20">Send</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
