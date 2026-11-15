import { Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Login({ staticData }) {
  const [showPassword, setShowPassword] = useState(false);
  const dir = useSelector((state) => state.lang.dir);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-10 text-text-primary" dir={dir}>
      <div className="w-full max-w-md rounded-[30px] border border-border bg-bg-surface p-8 shadow-[0_25px_80px_rgba(91,72,138,0.12)]">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
            <ShieldCheck size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-black text-text-primary">{staticData.title}</h1>
          <p className="mt-3 text-sm text-text-secondary">{staticData.subtitle}</p>
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

          <label className="block text-sm font-semibold text-text-secondary">
            {staticData.fields.password}
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
                aria-label={showPassword ? staticData.actions.hidePassword : staticData.actions.showPassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-text-secondary">
              <input type="checkbox" className="h-4 w-4 rounded border-border text-primary focus:ring-primary" />
              {staticData.actions.remember}
            </label>
            <Link to="/forgot-password" className="font-semibold text-primary hover:underline">
              {staticData.actions.forgot}
            </Link>
          </div>

          <button type="submit" className="w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-hover">
            {staticData.actions.login}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary">
          <span>{staticData.actions.helpText}</span>
          <Link to="/send-otp" className="font-semibold text-primary hover:underline">
            {staticData.actions.verifyOtp}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;