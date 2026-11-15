import { ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ForgotPassword({ staticData }) {
  const dir = useSelector((state) => state.lang.dir);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-10 text-text-primary" dir={dir}>
      <div className="w-full max-w-md rounded-[30px] border border-border bg-bg-surface p-8 shadow-[0_25px_80px_rgba(91,72,138,0.12)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{staticData.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black text-text-primary">{staticData.title}</h1>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{staticData.subtitle}</p>
        </div>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-semibold text-text-secondary">
            {staticData.fields.email}
            <input
              type="email"
              placeholder="name@hospelyra.com"
              className="mt-2 w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 text-text-primary outline-none transition focus:border-primary"
            />
          </label>

          <button type="submit" className="w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-hover">
            {staticData.actions.submit}
          </button>
        </form>

        <Link to="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <ArrowLeft size={16} />
          {staticData.actions.back}
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
