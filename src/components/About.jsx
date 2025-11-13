import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0e12] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-3xl text-white/80 leading-relaxed"
        >
          Ahmad Raza is a Pakistan-based AI Specialist and Automation Designer at Trivia.Global. He builds intelligent communication frameworks, automates creative workflows, and designs practical AI systems that merge logic and aesthetics.
        </motion.p>

        <div className="relative mt-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="pointer-events-none absolute -inset-12 opacity-30">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="space-y-3">
              <h3 className="text-white/90 font-medium">Focus</h3>
              <p className="text-white/70 text-sm">LLM systems, prompt architecture, creative automations, human-centered AI tooling.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-white/90 font-medium">Approach</h3>
              <p className="text-white/70 text-sm">Minimal, modular, and durable systems with clarity, speed, and measurable impact.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
