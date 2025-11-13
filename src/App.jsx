import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

function Navbar() {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0e12]/70 px-4 py-2 backdrop-blur">
        <a href="#home" className="text-sm font-medium text-white/80 hover:text-white">AR</a>
        <nav className="hidden gap-6 md:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-white/60 hover:text-white">{i.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-100 transition hover:bg-cyan-400/20 md:block">Let’s Collaborate</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0e12] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Chatbot />
      <footer className="border-t border-white/10 bg-[#0b0e12]/90 py-8 text-center text-white/50">© {new Date().getFullYear()} Ahmad Raza</footer>
    </div>
  )
}
