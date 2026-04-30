'use client';

import Image from 'next/image';
import { useLang } from '@/lib/LanguageContext';

export default function FamilyPartnership() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2">{t.family.title}</h2>
          <p className="body-lg mt-4 text-body">{t.family.subtitle}</p>
        </div>

        <div className="mt-16 space-y-20">
          <Row
            image="/images/caregiver-warm-conversation-with-elder-and-son.png"
            title={t.family.row1.t}
            body={t.family.row1.b}
            imageStart
          />
          <Row
            image="/images/family-reviewing-care-plan-father-in-background.png"
            title={t.family.row2.t}
            body={t.family.row2.b}
            imageStart={false}
          />
        </div>

        <p className="mt-20 text-center font-en-serif italic text-2xl md:text-3xl text-heading max-w-3xl mx-auto leading-relaxed">
          {t.family.closing}
        </p>
      </div>
    </section>
  );
}

function Row({
  image,
  title,
  body,
  imageStart,
}: {
  image: string;
  title: string;
  body: string;
  imageStart: boolean;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className={imageStart ? 'order-1' : 'order-1 md:order-2'}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>
      <div className={imageStart ? 'order-2' : 'order-2 md:order-1'}>
        <h3 className="h3">{title}</h3>
        <p className="body-lg mt-4 text-body">{body}</p>
      </div>
    </div>
  );
}
