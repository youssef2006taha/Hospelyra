function PlansSection({ data }) {
  return (
    <section className="bg-bg-secondary py-section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black text-text-main md:text-4xl">{data.title}</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {data.items.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[28px] border p-8 transition hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? 'border-primary bg-primary-light shadow-[0_30px_80px_rgba(139,98,237,0.14)]'
                  : 'border-text-light/10 bg-bg-surface'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-text-inverse">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-black text-text-main">{plan.name}</h3>
              <p className="mt-4 text-base leading-7 text-text-muted">{plan.description}</p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-black text-text-main">{plan.price}</span>
                <span className="pb-1 text-sm font-medium text-text-muted">{plan.suffix}</span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-text-main">
                {(plan.features || []).map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-light text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-primary text-text-inverse hover:bg-primary-hover'
                    : 'bg-bg-main text-text-main hover:bg-bg-layout'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlansSection;