'use client';

import { useLang } from '@/lib/LanguageContext';
import { TEL_HREF, PHONE_NUMBER } from '@/lib/copy';
import { img } from '@/lib/img';

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${img('/images/smiling-elder-rabbi-wheelchair-home-library.png')})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-heading/75" />
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10 py-32">
        <div className="max-w-2xl text-white start-align">
          <h1 className="h1 text-white">{t.hero.headline}</h1>
          <p className="body-lg mt-6 text-white/95">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="bg-gold text-heading rounded-full px-8 py-4 font-semibold hover:bg-gold/90 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex items-center gap-2 text-white/95 hover:text-white font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span dir="ltr">{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
