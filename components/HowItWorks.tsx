'use client';

import { useLang } from '@/lib/LanguageContext';

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how" className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2">{t.how.title}</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
          {t.how.steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-sage font-en-serif text-6xl font-medium leading-none">
                0{i + 1}
              </div>
              <h3 className="h3 mt-6">{s.t}</h3>
              <p className="mt-4 text-body leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
