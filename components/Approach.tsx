'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';

export default function Approach() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-none">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/caregiver-warm-conversation-with-elder-and-son.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="order-1 md:order-none">
          <p className="eyebrow">{t.approach.eyebrow}</p>
          <h2 className="h2 mt-4">{t.approach.headline}</h2>
          <p className="body-lg mt-6 text-body">{t.approach.body}</p>
          <ul className="mt-8 space-y-4">
            {t.approach.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="text-sage shrink-0 mt-1.5"
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
                <span className="text-body text-lg">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
