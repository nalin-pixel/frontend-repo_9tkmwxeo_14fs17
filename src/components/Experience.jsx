import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    location: 'Remote',
    highlights: [
      'Led the migration to a modern React + Vite stack with performance-first patterns.',
      'Built reusable UI systems and design tokens for dark mode at scale.',
      'Collaborated cross‑functionally to ship features used by 200k+ users.'
    ]
  },
  {
    company: 'Nimbus Labs',
    role: 'Full‑Stack Developer',
    period: '2020 — 2022',
    location: 'San Francisco, CA',
    highlights: [
      'Designed and implemented REST APIs with robust validation and monitoring.',
      'Introduced CI workflows and testing that reduced regressions by 40%.',
      'Optimized critical paths, cutting page load times by ~35%.'
    ]
  },
  {
    company: 'Studio Pixel',
    role: 'Frontend Developer',
    period: '2018 — 2020',
    location: 'New York, NY',
    highlights: [
      'Built interactive marketing sites with WebGL/Spline integrations.',
      'Improved accessibility and color contrast across projects.',
      'Partnered with designers to refine motion and micro‑interactions.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="relative z-0 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400">
            <Briefcase size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-100 sm:text-3xl">
              Experience
            </h2>
            <p className="text-sm text-neutral-400">Roles, impact, and what I shipped</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500/40 via-white/10 to-transparent md:block" />
          <ul className="space-y-6">
            {experiences.map((item, idx) => (
              <li key={idx} className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50 md:pl-14">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-100">
                      <span className="text-emerald-400">{item.role}</span>
                      <span className="text-neutral-400"> · {item.company}</span>
                    </h3>
                    <p className="text-sm text-neutral-400">{item.location}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-neutral-950 px-3 py-1 text-xs text-neutral-300">
                    {item.period}
                  </span>
                </div>
                <div className="mt-4 grid gap-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex gap-3 text-sm text-neutral-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                      <p>{h}</p>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
