import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ForgetPassword({ data }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-12 text-text-main">
      <div className="w-full max-w-md rounded-[28px] border border-primary/20 bg-bg-surface p-8 shadow-[0_25px_70px_rgba(38,18,66,0.12)]">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-black tracking-tight text-primary">{data.title}</h1>
          <p className="text-sm leading-7 text-text-muted">{data.subtitle}</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="reset-email" className="mb-2 block text-sm font-semibold text-text-muted">
              {data.email}
            </label>
            <input
              id="reset-email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
            />
          </div>

          <button type="submit" className="w-full rounded-2xl bg-primary px-4 py-3.5 font-bold text-text-inverse transition hover:bg-primary-hover">
            {data.send}
          </button>
        </form>

        <Link to="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <ArrowLeft size={16} />
          {data.back}
        </Link>
      </div>
    </div>
  );
}

export default ForgetPassword;