import { useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SendOtp({ staticData }) {
  const inputsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const dir = useSelector((state) => state.lang.dir);

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    event.target.value = value;

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-10 text-text-primary" dir={dir}>
      <div className="w-full max-w-md rounded-[30px] border border-border bg-bg-surface p-8 shadow-[0_25px_80px_rgba(91,72,138,0.12)]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{staticData.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black text-text-primary">{staticData.title}</h1>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{staticData.subtitle}</p>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              ref={(element) => {
                inputsRef.current[index] = element;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              onChange={(event) => handleChange(index, event)}
              className="h-14 w-11 rounded-2xl border border-border bg-bg-secondary text-center text-xl font-bold text-text-primary outline-none transition focus:border-primary"
            />
          ))}
        </div>

        <button type="submit" className="mt-7 w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-hover">
          {staticData.actions.verify}
        </button>

        <div className="mt-6 flex items-center justify-between gap-4 text-sm">
          <button type="button" className="font-semibold text-primary hover:underline">
            {staticData.actions.resend}
          </button>
          <span className="text-text-secondary">{staticData.actions.timer.replace('{time}', timeLeft)}</span>
        </div>

        <Link to="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <ArrowLeft size={16} />
          {staticData.actions.back}
        </Link>
      </div>
    </div>
  );
}

export default SendOtp;