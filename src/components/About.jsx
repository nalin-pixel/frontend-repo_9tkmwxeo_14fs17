import { User, Code } from 'lucide-react'

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'FastAPI',
    'Node.js',
    'MongoDB',
    'Framer Motion',
    'Spline',
  ]

  return (
    <section id="about" className="relative z-0 bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-400">
            <User size={18} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">About</h2>
            <p className="text-sm text-neutral-400">A quick intro and what I focus on</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
              <p className="text-neutral-200">
                I’m a product‑minded engineer who loves crafting fast, accessible interfaces and the services that power them. I balance design sensibility with engineering rigor to ship work that feels polished and purposeful.
              </p>
              <p className="mt-4 text-neutral-300">
                My toolkit centers around React on the frontend and Python/Node on the backend. I enjoy building end‑to‑end features, tightening feedback loops, and leaving teams with systems that are a joy to maintain.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
            <div className="mb-4 flex items-center gap-2 text-neutral-200">
              <Code size={18} className="text-emerald-400" />
              <span className="font-medium">Core Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-md border border-white/10 bg-neutral-800 px-2 py-1 text-xs text-neutral-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
