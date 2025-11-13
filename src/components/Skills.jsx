import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'LLM Workflow Design',
  'Prompt Engineering',
  'Automation Architecture',
  'Generative AI',
  'Visual Identity',
  'Creative Systems'
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0b0e12] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="pointer-events-none absolute -inset-20 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 shadow-inner" />
                <p className="text-white/90">{s}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
