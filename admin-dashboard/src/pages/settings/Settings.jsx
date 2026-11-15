import { Bell, Globe, Palette, ShieldCheck } from 'lucide-react';
import { useSelector } from 'react-redux';

const toneMap = {
  general: 'bg-primary-light text-primary',
  theme: 'bg-warning/15 text-warning',
  language: 'bg-success/15 text-success',
  security: 'bg-danger/15 text-danger',
};

function Settings({ staticData }) {
  const dir = useSelector((state) => state.lang.dir);

  return (
    <div className="space-y-6" dir={dir}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{staticData.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black text-text-primary md:text-4xl">{staticData.title}</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {staticData.groups.map((group) => {
          const Icon = {
            general: Palette,
            theme: Bell,
            language: Globe,
            security: ShieldCheck,
          }[group.key] || Palette;

          return (
            <div key={group.key} className="rounded-[28px] border border-border bg-bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${toneMap[group.key]}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-text-primary">{group.title}</h2>
                  <p className="text-sm text-text-secondary">{group.subtitle}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {group.options.map((option) => (
                  <div key={option.label} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-bg-secondary px-4 py-3">
                    <div>
                      <p className="font-semibold text-text-primary">{option.label}</p>
                      <p className="text-sm text-text-secondary">{option.helper}</p>
                    </div>
                    {option.type === 'switch' ? (
                      <button type="button" className={`relative h-7 w-12 rounded-full ${option.value ? 'bg-primary' : 'bg-bg-hover'}`}>
                        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${option.value ? 'left-6' : 'left-1'}`} />
                      </button>
                    ) : (
                      <select className="rounded-xl border border-border bg-bg-surface px-3 py-2 text-sm text-text-primary outline-none">
                        {option.values.map((value) => (
                          <option key={value} value={value}>{value}</option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Settings;