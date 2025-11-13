import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0e12] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-white/80">
            <p>Email: <a href="mailto:ahmadrazaai801@gmail.com" className="text-sky-300 hover:underline">ahmadrazaai801@gmail.com</a></p>
            <p>Portfolio: <a href="https://ahmadart.online" target="_blank" className="text-sky-300 hover:underline" rel="noreferrer">ahmadart.online</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/ahmadraza-ai" target="_blank" className="text-sky-300 hover:underline" rel="noreferrer">linkedin.com/in/ahmadraza-ai</a></p>
          </div>

          <div className="">
            <a href="mailto:ahmadrazaai801@gmail.com" className="inline-flex items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 px-6 py-4 text-sky-100 shadow-[0_0_40px_-12px_rgba(56,189,248,0.5)] transition hover:bg-sky-400/20">
              Let’s Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
