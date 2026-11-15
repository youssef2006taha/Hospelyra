import { Activity, Building2, CreditCard, ShieldAlert, Users } from 'lucide-react';
import { useSelector } from 'react-redux';

const statIcons = {
  total: Building2,
  pro: CreditCard,
  basic: Activity,
  pending: Users,
  inactive: ShieldAlert,
};

function Overview({ staticData }) {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {staticData.eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-black text-text-primary md:text-4xl">
            {staticData.title}
          </h1>
        </div>
        <div className="rounded-full border border-border bg-bg-surface px-4 py-2 text-sm font-medium text-text-secondary">
          {theme === 'dark' ? staticData.status.dark : staticData.status.light}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {staticData.stats.map((stat) => {
          const Icon = statIcons[stat.key] || Building2;

          return (
            <div key={stat.key} className="rounded-[24px] border border-border bg-bg-surface p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.tint}`}>
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                  {stat.trend}
                </span>
              </div>

              <p className="mt-5 text-3xl font-black text-text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;