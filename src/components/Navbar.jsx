import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const links = useMemo(
    () => [
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActive(visible.target.id)
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px', // trigger earlier so header doesn't obscure
        threshold: [0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [links])

  const handleNav = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const baseLink = 'transition hover:text-white'
  const inactive = 'text-neutral-300'
  const activeCls = 'text-emerald-400'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/70 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <a href="#" className="text-white font-semibold tracking-tight">MyPortfolio</a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={handleNav(l.id)}
                className={`${baseLink} ${active === l.id ? activeCls : inactive}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNav('contact')}
              className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-400 transition shadow-sm"
            >
              Hire Me
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-neutral-200 hover:text-white hover:bg-white/5"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-neutral-950/80 backdrop-blur md:hidden">
            <div className="flex flex-col p-4 text-neutral-300">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={handleNav(l.id)}
                  className={`rounded px-2 py-2 hover:text-white hover:bg-white/5 ${active === l.id ? 'text-emerald-400' : ''}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNav('contact')}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-400 transition"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
