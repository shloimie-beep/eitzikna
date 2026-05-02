'use client';

import { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';

export default function Pillars() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="pillars" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2">{t.pillars.title}</h2>
          <p className="body-lg mt-4 text-body">{t.pillars.subtitle}</p>
        </div>

        <div className="mt-16 space-y-4">
          {t.pillars.items.map((p, i) => {
            const isOpen = open === i;
            return (
              <article
                key={i}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? 'border-gold bg-bg shadow-lg' : 'border-border bg-bg/50 hover:border-sage'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-6 md:p-8 flex items-start gap-5 md:gap-8 text-start"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-en-serif text-3xl md:text-4xl font-medium leading-none shrink-0 mt-1 ${
                      isOpen ? 'text-gold' : 'text-sage'
                    }`}
                  >
                    {p.number}
                  </span>
                  <span className="flex-1">
                    <span className="block h3 mb-2">{p.title}</span>
                    <span className="block text-body leading-relaxed">{p.summary}</span>
                  </span>
                  <svg
                    className={`shrink-0 mt-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 md:pb-10 pt-2 md:ps-24">
                      <ul className="space-y-5 border-t border-border pt-6">
                        {p.details.map((d, j) => (
                          <li key={j} className="flex gap-4">
                            <svg
                              className="text-sage shrink-0 mt-1.5"
                              width="16"
                              height="16"
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
                            <div>
                              <h4 className="font-semibold text-heading">{d.h}</h4>
                              <p className="mt-1 text-body leading-relaxed">{d.b}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
