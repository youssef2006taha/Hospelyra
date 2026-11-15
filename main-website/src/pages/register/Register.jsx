import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

function Register({ data }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-12 text-text-main">
      <div className="w-full max-w-lg rounded-[28px] border border-primary/20 bg-bg-surface p-8 shadow-[0_25px_70px_rgba(38,18,66,0.12)]">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-black tracking-tight text-primary">{data.createNewAccount}</h1>
          <p className="text-sm font-medium text-text-muted">{data.join}</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="register-name" className="mb-2 block text-sm font-semibold text-text-muted">
              {data.fullName}
            </label>
            <input
              id="register-name"
              type="text"
              placeholder={data.exmName}
              className="w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="register-email" className="mb-2 block text-sm font-semibold text-text-muted">
              {data.email}
            </label>
            <input
              id="register-email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="register-password" className="mb-2 block text-sm font-semibold text-text-muted">
              {data.password}
            </label>
            <div className="relative">
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 pr-11 text-text-main outline-none transition focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute inset-y-0 right-3 flex items-center text-text-muted"
                aria-label={showPassword ? data.hidePassword : data.showPassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="register-confirm" className="mb-2 block text-sm font-semibold text-text-muted">
              {data.confirmPassword}
            </label>
            <div className="relative">
              <input
                id="register-confirm"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 pr-11 text-text-main outline-none transition focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((value) => !value)}
                className="absolute inset-y-0 right-3 flex items-center text-text-muted"
                aria-label={showConfirmPassword ? data.hidePassword : data.showPassword}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-text-muted">
            <input type="checkbox" className="h-4 w-4 rounded border-text-light text-primary focus:ring-primary" />
            {data.agree}
          </label>

          <button type="submit" className="w-full rounded-2xl bg-primary px-4 py-3.5 font-bold text-text-inverse transition hover:bg-primary-hover">
            {data.createAccount}
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-text-muted">
          {data.haveAccount}{' '}
          <Link to="/login" className="font-bold text-primary hover:underline">
            {data.login}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;