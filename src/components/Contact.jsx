export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Let’s build something</h2>
            <p className="mt-2 text-neutral-300">Tell me about your project and I’ll get back within 24 hours.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-neutral-900 p-6">
              <dl className="space-y-3 text-neutral-300">
                <div>
                  <dt className="text-sm text-neutral-400">Email</dt>
                  <dd className="font-medium text-white">hello@example.com</dd>
                </div>
                <div>
                  <dt className="text-sm text-neutral-400">Location</dt>
                  <dd className="font-medium text-white">Remote / Worldwide</dd>
                </div>
              </dl>
            </div>
          </div>

          <form className="rounded-xl border border-white/10 bg-neutral-900 p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-neutral-300">Name</label>
                <input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="What are you building?" />
              </div>
            </div>
            <div className="mt-4">
              <button type="button" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 font-medium text-white hover:bg-emerald-400 transition">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
