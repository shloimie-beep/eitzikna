'use client';

import { useLang } from '@/lib/LanguageContext';
import { WHATSAPP_HREF } from '@/lib/copy';

export default function Reviews() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 className="h2">{t.references.title}</h2>
        <p className="body-lg mt-4 text-body">{t.references.subtitle}</p>
        <p className="body-lg mt-8 text-body italic max-w-2xl mx-auto">{t.references.body}</p>
        <div className="mt-10">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-heading text-white rounded-full px-7 py-3.5 font-semibold hover:bg-heading/90 transition-colors"
          >
            {t.references.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
