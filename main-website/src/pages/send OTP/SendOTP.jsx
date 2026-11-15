import { useRef } from 'react';

function SendOTP({ data }) {
  const inputsRef = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    event.target.value = value;

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-main px-4 py-12 text-text-main">
      <div className="w-full max-w-md rounded-[28px] border border-primary/20 bg-bg-surface p-8 shadow-[0_25px_70px_rgba(38,18,66,0.12)]">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-black tracking-tight text-primary">{data.title}</h1>
          <p className="text-sm leading-7 text-text-muted">{data.subtitle}</p>
        </div>

        <div className="flex justify-center gap-3">
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
              className="h-14 w-11 rounded-2xl border border-text-light/20 bg-bg-secondary text-center text-xl font-bold text-text-main outline-none transition focus:border-primary"
            />
          ))}
        </div>

        <button type="submit" className="mt-7 w-full rounded-2xl bg-primary px-4 py-3.5 font-bold text-text-inverse transition hover:bg-primary-hover">
          {data.verify}
        </button>

        <div className="mt-6 flex items-center justify-between text-sm">
          <button type="button" className="font-semibold text-primary hover:underline">
            {data.resend}
          </button>
          <span className="text-text-muted">{data.countdown}</span>
        </div>
      </div>
    </div>
  );
}

export default SendOTP;