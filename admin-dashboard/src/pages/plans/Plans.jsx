import { Check, PencilLine, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState } from 'react';

function Plans({ staticData }) {
  const [plans, setPlans] = useState(staticData.plans);

  const togglePlan = (id) => {
    setPlans((currentPlans) =>
      currentPlans.map((plan) =>
        plan.id === id ? { ...plan, active: !plan.active } : plan,
      ),
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{staticData.eyebrow}</p>
          <h1 className="mt-2 text-3xl font-black text-text-primary md:text-4xl">{staticData.title}</h1>
        </div>
        <div className="rounded-full border border-border bg-bg-surface px-4 py-2 text-sm font-medium text-text-secondary">
          {staticData.summary}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className={`rounded-[28px] border p-6 shadow-sm ${plan.active ? 'border-primary/30 bg-primary-light' : 'border-border bg-bg-surface'}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{plan.tier}</p>
                <h2 className="mt-3 text-2xl font-black text-text-primary">{plan.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => togglePlan(plan.id)}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${plan.active ? 'bg-success/15 text-success' : 'bg-bg-hover text-text-secondary'}`}
              >
                {plan.active ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                {plan.active ? staticData.status.active : staticData.status.inactive}
              </button>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-black text-text-primary">{plan.price}</span>
              <span className="pb-2 text-sm text-text-secondary">{plan.period}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={12} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between gap-3">
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-4 py-2.5 text-sm font-semibold text-text-primary hover:bg-bg-hover">
                <PencilLine size={16} />
                {staticData.actions.edit}
              </button>

              <button type="button" className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover">
                {staticData.actions.manage}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;