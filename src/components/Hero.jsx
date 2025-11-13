import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const accent = 'from-cyan-400/20 via-sky-400/10 to-blue-500/20'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0e12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients for depth (pointer-events-none so 3D stays interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0e12]/40 via-[#0b0e12]/60 to-[#0b0e12]" />
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b ${accent} blur-2xl opacity-60`} />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 pb-16 md:px-10 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
          <p className="text-sm text-white/80">Futuristic portfolio • interactive 3D</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Ahmad Raza
          <span className="block text-xl font-normal text-white/70 sm:text-2xl md:text-3xl mt-3">
            AI Specialist | Prompt Engineer | Automation Designer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-white/70"
        >
          Bridging creativity and intelligence through generative systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm text-sky-200 transition hover:bg-sky-400/20">
            <span className="relative">
              View Projects
              <span className="absolute inset-x-0 -bottom-1 block h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </span>
          </a>
          <a href="#chat" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition hover:bg-white/10">
            Talk to My AI Twin
          </a>
        </motion.div>
      </div>
    </section>
  )
}
