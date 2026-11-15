import { LockKeyhole, Mail, UserCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';

function Profile({ staticData }) {
  const dir = useSelector((state) => state.lang.dir);

  return (
    <div className="space-y-6" dir={dir}>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{staticData.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black text-text-primary md:text-4xl">{staticData.title}</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-border bg-bg-surface p-6 shadow-sm">
          <div className="flex items-center gap-4 border-b border-border pb-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <UserCircle2 size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-text-primary">{staticData.user.name}</h2>
              <p className="text-sm text-text-secondary">{staticData.user.role}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-text-secondary">
              {staticData.form.name}
              <input defaultValue={staticData.user.name} className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary" />
            </label>

            <label className="block text-sm font-medium text-text-secondary">
              {staticData.form.role}
              <input defaultValue={staticData.user.role} className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary" />
            </label>

            <label className="block text-sm font-medium text-text-secondary md:col-span-2">
              {staticData.form.email}
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input defaultValue={staticData.user.email} className="w-full rounded-2xl border border-border bg-bg-secondary py-3 pl-10 pr-4 outline-none focus:border-primary" />
              </div>
            </label>

            <label className="block text-sm font-medium text-text-secondary md:col-span-2">
              {staticData.form.bio}
              <textarea rows="4" defaultValue={staticData.user.bio} className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary" />
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button type="button" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover">
              {staticData.actions.save}
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-border bg-bg-surface p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-light text-primary">
              <LockKeyhole size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black text-text-primary">{staticData.security.title}</h2>
              <p className="text-sm text-text-secondary">{staticData.security.subtitle}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-text-secondary">
              {staticData.security.current}
              <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary" />
            </label>
            <label className="block text-sm font-medium text-text-secondary">
              {staticData.security.new}
              <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary" />
            </label>
            <label className="block text-sm font-medium text-text-secondary">
              {staticData.security.confirm}
              <input type="password" placeholder="••••••••" className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 outline-none focus:border-primary" />
            </label>
          </div>

          <button type="button" className="mt-6 w-full rounded-full border border-border bg-bg-secondary px-4 py-3 text-sm font-semibold text-text-primary hover:bg-bg-hover">
            {staticData.security.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;