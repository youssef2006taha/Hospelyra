import { Mail, MapPin, MessageSquareText, Phone } from 'lucide-react';
import { useSelector } from 'react-redux';

function Contact({ data }) {
  const { dir } = useSelector((state) => state.lang);

  const details = [
    { icon: Mail, label: data.info.emailLabel, value: data.info.email },
    { icon: Phone, label: data.info.phoneLabel, value: data.info.phone },
    { icon: MapPin, label: data.info.locationLabel, value: data.info.location },
    { icon: MessageSquareText, label: data.info.hoursLabel, value: data.info.hours },
  ];

  return (
    <section className="py-section-padding bg-bg-main">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{data.title}</p>
          <h1 className="mt-4 text-4xl font-black text-text-main md:text-5xl">{data.title}</h1>
          <p className="mt-4 text-lg leading-8 text-text-muted">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-text-light/10 bg-bg-secondary p-6 md:p-8">
            <h2 className="text-2xl font-bold text-text-main">{data.info.title}</h2>

            <div className="mt-6 space-y-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl bg-bg-surface p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted">{label}</p>
                    <p className="mt-1 text-base font-semibold text-text-main">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-[28px] border border-text-light/10 bg-bg-surface p-6 shadow-sm md:p-8" dir={dir}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-semibold text-text-muted">
                {data.form.fullName}
                <input
                  type="text"
                  placeholder={data.form.fullName}
                  className="mt-2 w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm font-semibold text-text-muted">
                {data.form.email}
                <input
                  type="email"
                  placeholder={data.form.email}
                  className="mt-2 w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm font-semibold text-text-muted">
                {data.form.phone}
                <input
                  type="tel"
                  placeholder={data.form.phone}
                  className="mt-2 w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
                />
              </label>

              <label className="block text-sm font-semibold text-text-muted">
                {data.form.subject}
                <input
                  type="text"
                  placeholder={data.form.subject}
                  className="mt-2 w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-text-muted">
              {data.form.message}
              <textarea
                rows="6"
                placeholder={data.form.message}
                className="mt-2 w-full rounded-2xl border border-text-light/20 bg-bg-secondary px-4 py-3 text-text-main outline-none transition focus:border-primary"
              />
            </label>

            <button type="submit" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-text-inverse transition hover:bg-primary-hover">
              {data.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;