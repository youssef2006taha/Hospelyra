import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQs({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => data.items || [], [data.items]);

  return (
    <section className="bg-bg-main py-section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hospelyra</p>
          <h1 className="mt-4 text-4xl font-black text-text-main md:text-5xl">{data.title}</h1>
          <p className="mt-4 text-lg text-text-muted">{data.subtitle}</p>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={item.question} className="overflow-hidden rounded-[24px] border border-text-light/10 bg-bg-secondary">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                >
                  <span className="text-base font-semibold text-text-main md:text-lg">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-7 text-text-muted md:px-6">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQs;