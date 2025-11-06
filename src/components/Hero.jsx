import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full bg-neutral-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Dynamic 3D experiences with a modern, accessible touch
          </h1>
          <p className="mt-4 text-lg text-neutral-200">
            I design and build high‑performance web apps and immersive interfaces that respond to your cursor and feel alive.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-white transition hover:bg-emerald-400">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/10 px-4 py-2 text-neutral-200 transition hover:bg-white/5 hover:text-white">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
