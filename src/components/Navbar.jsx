import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/70 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <a href="#" className="text-white font-semibold tracking-tight">MyPortfolio</a>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-400 transition shadow-sm">Hire Me</a>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-neutral-200 hover:text-white hover:bg-white/5">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-neutral-950/80 backdrop-blur md:hidden">
            <div className="flex flex-col p-4 text-neutral-300">
              <a onClick={() => setOpen(false)} href="#projects" className="rounded px-2 py-2 hover:text-white hover:bg-white/5">Projects</a>
              <a onClick={() => setOpen(false)} href="#experience" className="rounded px-2 py-2 hover:text-white hover:bg-white/5">Experience</a>
              <a onClick={() => setOpen(false)} href="#about" className="rounded px-2 py-2 hover:text-white hover:bg-white/5">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded px-2 py-2 hover:text-white hover:bg-white/5">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-400 transition">Hire Me</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
