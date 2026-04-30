'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { copy, type Lang } from './copy';

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof copy.he;
  dir: 'rtl' | 'ltr';
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = 'eitzikna-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('he');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (stored === 'he' || stored === 'en') setLangState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'he' ? 'rtl' : 'ltr';
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, hydrated]);

  const setLang = (l: Lang) => setLangState(l);
  const t = copy[lang];
  const dir = lang === 'he' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
