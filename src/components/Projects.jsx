import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Vizora – AI-Powered Visual SaaS Platform',
    desc: 'An end-to-end platform for AI image, video, and prompt generation using OpenAI GPT-5 and Gemini Pro.',
    tag: 'SaaS • Generative AI'
  },
  {
    title: 'AI Receptionist Agent',
    desc: 'A GPT-4o and ElevenLabs-powered voice assistant for restaurants.',
    tag: 'Voice • Agents'
  },
  {
    title: 'Automation Workflows (n8n, Zapier, Make)',
    desc: 'Custom multi-step AI automations for marketing and client systems.',
    tag: 'Automation • Integrations'
  },
  {
    title: 'Visual Branding & Logo Design Gallery',
    desc: 'Minimalist visual identity work emphasizing precision and balance.',
    tag: 'Design • Identity'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0e12] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-transform will-change-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="pointer-events-none absolute -inset-24 rounded-full bg-sky-400/10 blur-3xl" />
              </div>
              <div className="flex min-h-[160px] flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-sky-300/80">{p.tag}</p>
                  <h3 className="mt-2 text-lg font-medium text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </div>
                <div className="mt-4 inline-flex items-center text-sky-300/90">
                  <span className="mr-1">Explore</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
