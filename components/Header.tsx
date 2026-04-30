'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/lib/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#how', label: t.nav.how },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-bg/95 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="font-en-serif text-2xl font-semibold text-heading">Eitzikna</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-body hover:text-heading' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'he' ? 'en' : 'he')}
            className={`text-xs font-semibold tracking-wide transition-colors ${
              scrolled ? 'text-body hover:text-heading' : 'text-white/90 hover:text-white'
            }`}
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'font-bold' : 'opacity-60'}>EN</span>
            <span className="mx-1.5 opacity-40">|</span>
            <span className={lang === 'he' ? 'font-bold' : 'opacity-60'}>עב</span>
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-gold text-heading rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-gold/90 transition-colors"
          >
            {t.nav.cta}
          </a>
          <button
            className={`md:hidden ${scrolled ? 'text-heading' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-body font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-gold text-heading rounded-full px-5 py-2.5 text-center font-semibold mt-2"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
