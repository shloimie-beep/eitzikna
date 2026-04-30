'use client';

import { useLang } from '@/lib/LanguageContext';

export default function WhyDifferent() {
  const { t } = useLang();
  const cols = [
    { title: t.why.colA, highlight: false, idx: 0 },
    { title: t.why.colB, highlight: false, idx: 1 },
    { title: t.why.colC, highlight: true, idx: 2 },
  ];
  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2">{t.why.title}</h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cols.map((col) => (
            <div
              key={col.idx}
              className={`rounded-2xl p-8 border ${
                col.highlight
                  ? 'border-gold bg-sage/10 shadow-lg'
                  : 'border-border bg-surface'
              }`}
            >
              <h3
                className={`h3 ${
                  col.highlight ? 'text-heading' : 'text-body'
                }`}
              >
                {col.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {t.why.rows.map((row, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {col.highlight ? (
                      <svg
                        className="text-sage shrink-0 mt-1"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="text-body/40 shrink-0 mt-1"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-base leading-relaxed ${
                        col.highlight ? 'text-body' : 'text-body/70'
                      }`}
                    >
                      {row[col.idx]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
