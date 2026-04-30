'use client';

import { useLang } from '@/lib/LanguageContext';
import { GBP_URL } from '@/lib/copy';

export default function Reviews() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2">{t.reviews.title}</h2>
          <p className="body-lg mt-4 text-body">{t.reviews.subtitle}</p>
        </div>

        {/* TODO: Replace static cards with EmbedSocial / Elfsight Google Reviews widget once GBP is live */}
        <div id="google-reviews-widget" className="mt-12 grid md:grid-cols-3 gap-6">
          {t.reviews.items.map((r, i) => (
            <article key={i} className="bg-bg border border-border rounded-2xl p-6 flex flex-col">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.939 6.65 7.061.575-5.376 4.677 1.612 6.948L12 17.27 5.764 20.85l1.612-6.948L2 9.225l7.061-.575L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-body leading-relaxed flex-1">{r.text}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-heading">{r.name}</p>
                <p className="text-sm text-body/60 mt-1">
                  {r.location} · {r.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold hover:underline underline-offset-4"
          >
            {t.reviews.seeAll}
          </a>
        </div>
      </div>
    </section>
  );
}
