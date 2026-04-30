'use client';

import { useLang } from '@/lib/LanguageContext';

export default function Founder() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <div className="md:col-span-2">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-sage/20 border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-sage/40 mb-4 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-heading/50">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-sm text-body/60 italic">[FOUNDER_PORTRAIT]</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">{t.founder.eyebrow}</p>
          <h2 className="h2 mt-4">{t.founder.headline}</h2>
          <p className="body-lg mt-6 text-body whitespace-pre-line">{t.founder.body}</p>
          <p className="mt-6 text-sm text-sage font-semibold tracking-wide">
            {t.founder.credentials}
          </p>
        </div>
      </div>
    </section>
  );
}
