import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Building delightful web experiences</h1>
          <p className="mt-4 text-lg text-neutral-200">I craft modern, performant interfaces and robust backend systems that scale.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-400 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-white/10 px-4 py-2 text-neutral-200 hover:text-white hover:bg-white/5 transition">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
