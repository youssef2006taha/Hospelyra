import { Activity, BellRing, CalendarCheck2 } from 'lucide-react';

const icons = [CalendarCheck2, Activity, BellRing];

function FeaturesSections({ data }) {
  return (
    <section className="bg-bg-secondary py-section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black text-text-main md:text-4xl">{data.title}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {data.items.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div key={feature.title} className="rounded-[28px] border border-text-light/10 bg-bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-text-main">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-text-muted">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSections;