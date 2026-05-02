'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Conditions() {
  const { t } = useLang();
  return (
    <section id="conditions" className="py-24 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2">{t.conditions.title}</h2>
          <p className="body-lg mt-4 text-body">{t.conditions.subtitle}</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {t.conditions.items.map((c, i) => (
            <article
              key={i}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-sage transition-colors flex flex-col h-full"
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="text-gold shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v6m0 8v6m10-10h-6M8 12H2m15.07-7.07l-4.24 4.24m-1.66 1.66l-4.24 4.24m12.14 0l-4.24-4.24m-1.66-1.66L4.93 4.93"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-heading text-lg">{c.title}</h3>
                  <p className="mt-2 text-body leading-relaxed text-[15px]">{c.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
