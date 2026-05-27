import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      {/* Glow Effect Top */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#9333ea] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.187rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-x-2 rounded-full px-3 py-1 text-sm font-medium bg-muted text-muted-foreground ring-1 ring-inset ring-border mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            V1.0 Production Release Available
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl bg-clip-text">
            Build your digital infrastructure with premium asset kits
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A production-ready Next.js boilerplate and component ecosystem engineered for developers building high-performance landing pages, portfolios, and commercial templates.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#features"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Explore Component Bricks
            </Link>
            <Link href="https://github.com" target="_blank" className="text-sm font-semibold leading-6 text-foreground hover:text-muted-foreground">
              View Source GitHub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature / Brick Matrix Section */}
      <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">The Architecture</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything needed to launch clean storefronts
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-muted-foreground/30">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <div className="h-5 w-5 flex-none text-primary">⚡</div>
                Next.js 15 & Tailwind v4
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Utilizing the absolute latest framework builds with CSS-native theme configurations for blazing fast compile times.</p>
              </dd>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-muted-foreground/30">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <div className="h-5 w-5 flex-none text-primary">🧱</div>
                Modular Component Bricks
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Built around highly reusable, data-driven UI blocks. Drag, drop, and inject JSON data structures to change layouts instantly.</p>
              </dd>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:border-muted-foreground/30">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <div className="h-5 w-5 flex-none text-primary">💼</div>
                Commercial Ready
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Optimized metadata structures, custom global style overrides, and semantic HTML layouts built to turn traffic into client acquisitions.</p>
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}