'use client';

import { useLang } from '@/lib/LanguageContext';
import { PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL } from '@/lib/copy';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-heading text-white/85 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10">
        <div>
          <span className="font-en-serif text-3xl font-semibold text-white">Eitzikna</span>
          <p className="mt-4 text-white/70 leading-relaxed">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">{PHONE_NUMBER}</a></li>
            <li><span dir="ltr">WhatsApp:</span> {WHATSAPP_NUMBER}</li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">{t.footer.areasTitle}</h4>
          <p className="text-white/70 leading-relaxed">{t.footer.areas}</p>
          <p className="text-white/70 leading-relaxed mt-2">{t.footer.hours}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
