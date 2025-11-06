import { useState } from 'react'
import { User, Code } from 'lucide-react'

const SKILL_GROUPS = [
  {
    heading: 'Programming Languages',
    items: ['Python', 'C#', 'C++', 'Java', 'SQL'],
  },
  {
    heading: 'AI/ML & Data Science',
    items: ['Generative AI', 'NLP', 'Deep Learning', 'scikit-learn', 'PyTorch', 'TensorFlow'],
  },
  {
    heading: 'Software Development',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'RESTful APIs',
      'Microservices',
      'Design Patterns',
      'System Design',
    ],
  },
  {
    heading: 'Testing & Quality Engineering',
    items: [
      'Selenium',
      'pytest',
      'JUnit',
      'TestNG',
      'Postman',
      'Unit Testing',
      'Integration Testing',
      'Performance Testing',
      'Test Coverage Analysis',
      'CI/CD Integration (Azure DevOps)',
    ],
  },
  {
    heading: 'Cloud & DevOps',
    items: ['Azure AI Services', 'Microsoft Azure', 'Model Deployment', 'Azure Pipelines (CI/CD)'],
  },
  {
    heading: 'Version Control & Collaboration',
    items: ['Git Bash', 'GitHub'],
  },
]

export default function About() {
  const [open, setOpen] = useState(false)

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

        <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
          <p className="text-neutral-200">
            I’m a product‑minded engineer who loves crafting fast, accessible interfaces and the services that power them. I balance design sensibility with engineering rigor to ship work that feels polished and purposeful.
          </p>
          <p className="mt-4 text-neutral-300">
            My toolkit spans modern frontend and backend stacks with a strong focus on AI/ML and testing excellence. I enjoy building end‑to‑end features, tightening feedback loops, and leaving teams with systems that are a joy to maintain.
          </p>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-neutral-200">
              <Code size={18} className="text-emerald-400" />
              <span className="font-medium">Core Skills</span>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20 hover:text-emerald-200"
            >
              View Core Skills
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="skills-title"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* dialog */}
          <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-950 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md border border-emerald-500/20 bg-emerald-500/10 p-1.5 text-emerald-400">
                  <Code size={16} />
                </div>
                <h3 id="skills-title" className="text-lg font-semibold text-white">Core Skills</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 px-2 py-1 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <div className="max-h-[70vh] space-y-6 overflow-y-auto px-5 py-5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.heading}>
                  <h4 className="text-sm font-medium uppercase tracking-wide text-neutral-300">{group.heading}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-white/10 px-5 py-4">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-400"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
