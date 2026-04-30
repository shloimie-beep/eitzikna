'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Problem() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="eyebrow">{t.problem.eyebrow}</p>
        <h2 className="h2 mt-4">{t.problem.headline}</h2>
        <p className="body-lg mt-6 text-body">{t.problem.body}</p>
      </div>
    </section>
  );
}
