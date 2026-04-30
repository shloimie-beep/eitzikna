'use client';

import { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <h2 className="h2">{t.faq.title}</h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-heading">{item.q}</span>
                  <svg
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    width="20"
                    height="20"
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
                    isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-body leading-relaxed">{item.a}</p>
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
