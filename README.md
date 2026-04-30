# Eitzikna — עצקנה

Premium geriatric wellness landing page (Hebrew + English).

**Live preview:** https://shloimie-beep.github.io/eitzikna/ (available after first GitHub Action run)

## Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Static export → GitHub Pages
- Bilingual (HE default, EN toggle), RTL/LTR aware

## Local dev
```bash
npm install
npm run dev
```

## Build (static export)
```bash
npm run build
# Output → ./out
```

## Placeholders to fill
Search the codebase for these and replace:
- `[PHONE_NUMBER]`
- `[WHATSAPP_NUMBER]`
- `[EMAIL]`
- `[FOUNDER_NAME]`
- `[FOUNDER_BIO_PARAGRAPH_1]`, `[FOUNDER_BIO_PARAGRAPH_2]`, `[FOUNDER_BIO_PARAGRAPH_3]`
- `[FOUNDER_CREDENTIALS]`
- `[REVIEWER_NAME_*]`, `[REVIEW_TEXT_*]`, `[REVIEW_DATE_*]`
- `[FOUNDER_PORTRAIT]` — replace placeholder div in `components/Founder.tsx` once portrait image is dropped at `public/images/founder-portrait.png`

`GBP_URL`, `PHONE_NUMBER`, `WHATSAPP_NUMBER`, and `EMAIL` are exported from `lib/copy.ts` — set them in one place and they propagate everywhere.

## Migrating to Railway later
1. Remove `output: 'export'`, `basePath`, and `assetPrefix` from `next.config.mjs`
2. Connect repo to Railway, root dir `/`, start command `npm start`
