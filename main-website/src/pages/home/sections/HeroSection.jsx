import { ArrowRight } from 'lucide-react';

function HeroSection({ data }) {
  return (
    <section className="relative overflow-hidden bg-bg-main py-section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,98,237,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.12),_transparent_28%)]" />
      <div className="container relative grid items-center gap-10 md:grid-cols-2">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {data.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-text-main md:text-5xl lg:text-6xl">
            {data.title}{' '}
            <span className="text-primary">{data.highlight}</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-text-muted">{data.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-hover">
              {data.primaryCta}
              <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-text-light/30 bg-bg-secondary px-6 py-3.5 text-sm font-semibold text-text-main transition hover:border-primary hover:text-primary">
              {data.secondaryCta}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-ball-1/35 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-ball-2/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-bg-secondary p-5 shadow-[0_30px_80px_rgba(38,18,66,0.12)]">
            <div className="flex items-center justify-between rounded-2xl border border-text-light/10 bg-bg-main p-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">Hospelyra</p>
                <h2 className="mt-2 text-xl font-bold text-text-main">Care dashboard</h2>
              </div>
              <div className="rounded-xl bg-primary-light px-3 py-2 text-xs font-bold text-primary">Live</div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary-light p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Patients</p>
                <p className="mt-3 text-3xl font-black text-primary">1.9K</p>
              </div>
              <div className="rounded-2xl bg-bg-main p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Booked</p>
                <p className="mt-3 text-3xl font-black text-text-main">482</p>
              </div>
              <div className="rounded-2xl bg-bg-main p-4 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Visits</p>
                  <p className="text-sm font-medium text-primary">+18.5%</p>
                </div>
                <div className="mt-4 space-y-3">
                  {[65, 80, 55, 90, 72].map((bar, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-10 text-xs text-text-muted">W{index + 1}</span>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-bg-layout">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${bar}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;