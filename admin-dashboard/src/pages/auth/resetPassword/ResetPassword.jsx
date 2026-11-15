import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ResetPassword({ staticData }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dir = useSelector((state) => state.lang.dir);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-10 text-text-primary" dir={dir}>
      <div className="w-full max-w-lg rounded-[30px] border border-border bg-bg-surface p-8 shadow-[0_25px_80px_rgba(91,72,138,0.12)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{staticData.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black text-text-primary">{staticData.title}</h1>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{staticData.subtitle}</p>
        </div>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-semibold text-text-secondary">
            {staticData.fields.newPassword}
            <div className="relative mt-2">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 pr-11 text-text-primary outline-none transition focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-3 flex items-center text-text-muted"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <label className="block text-sm font-semibold text-text-secondary">
            {staticData.fields.confirmPassword}
            <div className="relative mt-2">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-border bg-bg-secondary px-4 py-3 pr-11 text-text-primary outline-none transition focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((value) => !value)}
                className="absolute inset-y-0 right-3 flex items-center text-text-muted"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
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

export default ResetPassword;
