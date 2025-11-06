const projects = [
  {
    title: 'Realtime Chat App',
    description: 'A websocket-powered chat with rooms, typing indicators, and message persistence.',
    tags: ['React', 'FastAPI', 'WebSocket', 'MongoDB'],
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Analytics dashboard with sales insights, cohort charts, and product management.',
    tags: ['React', 'Tailwind', 'Charts'],
  },
  {
    title: '3D Landing Page',
    description: 'Immersive hero using Spline with smooth scroll animations and parallax layers.',
    tags: ['React', 'Spline', 'Framer Motion'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Selected Work</h2>
        <p className="mt-2 text-neutral-300">A few projects that showcase my focus on usability, performance, and craft.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-neutral-900 p-6 shadow-sm transition hover:border-white/20 hover:shadow">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-neutral-800 px-2 py-1 text-xs text-neutral-300">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
