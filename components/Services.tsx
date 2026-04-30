'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';

const IMAGES = [
  'senior-resistance-band-leg-exercise-home.png',
  'elderly-rabbi-playing-mancala-board-game.png',
  'senior-eating-healthy-salad-jerusalem-window.png',
  'senior-sorting-weekly-pill-organizer.png',
  'senior-walking-with-rollator-indoors.png',
  'rabbi-learning-torah-at-shtender.png',
  'senior-stretching-among-olive-trees.png',
  'two-elders-playing-chess-old-city-courtyard.png',
  'elder-resting-on-bench-with-cane-garden.png',
];

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-24 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2">{t.services.title}</h2>
          <p className="body-lg mt-4 text-body">{t.services.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item, i) => (
            <article
              key={i}
              className="bg-surface border border-border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={`/images/${IMAGES[i]}`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="h3">{item.title}</h3>
                <p className="mt-3 text-body leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
