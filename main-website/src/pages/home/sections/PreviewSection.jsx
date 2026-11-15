import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

function PreviewSection({ data }) {
  return (
    <section className="bg-bg-main py-section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black text-text-main md:text-4xl">{data.title}</h2>
          <p className="mt-4 text-lg leading-8 text-text-muted">{data.description}</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-text-light/10 bg-bg-secondary p-5 shadow-[0_30px_80px_rgba(38,18,66,0.06)]">
          <div className="rounded-[24px] bg-bg-surface p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-text-light/10 pb-4">
              <div>
                <p className="text-sm font-medium text-text-muted">{data.cardTitle}</p>
                <h3 className="mt-2 text-2xl font-bold text-text-main">Clinics overview</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-primary-light px-3 py-2 text-sm font-semibold text-primary">
                <ArrowUpRight size={16} />
                24.8%
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] bg-bg-layout p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-muted">Appointments</span>
                  <span className="text-sm font-bold text-primary">This month</span>
                </div>

                <div className="mt-8 grid grid-cols-5 items-end gap-3">
                  {[55, 75, 60, 92, 76, 100].map((height, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3">
                      <div className="w-full rounded-t-2xl bg-primary/85" style={{ height: `${height}px` }} />
                      <span className="text-[10px] uppercase text-text-light">{['M', 'T', 'W', 'T', 'F', 'S'][idx]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {data.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-text-light/10 bg-bg-main p-4">
                    <p className="text-sm text-text-muted">{metric.label}</p>
                    <p className="mt-2 text-3xl font-black text-text-main">{metric.value}</p>
                  </div>
                ))}

                <div className="rounded-2xl border border-primary/20 bg-primary-light p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-semibold">Operationally ready</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-text-muted">Digital workflows and patient communication are already live and measurable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewSection;