function CtaSection({ data }) {
  return (
    <section className="bg-primary py-section-padding text-text-inverse">
      <div className="container text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">{data.eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black md:text-5xl">{data.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-primary-light">{data.description}</p>

        <button className="mt-8 inline-flex rounded-full bg-bg-main px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition hover:bg-bg-secondary">
          {data.button}
        </button>
      </div>
    </section>
  );
}

export default CtaSection;