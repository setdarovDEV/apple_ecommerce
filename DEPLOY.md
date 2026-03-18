# Dasturni tekin serverga chiqarish

## 1. **Vercel** (tavsiya — Next.js bilan eng yaxshi)

- **Nima uchun:** Next.js yaratuvchilari serveri, tekin **Hobby** rejim, tez CDN, HTTPS avtomatik.
- **Cheklovlar:** Shaxsiy loyihalar uchun yetarli; katta trafikda pullik rejim kerak bo‘lishi mumkin.

### Qadamlar

1. Kodni **GitHub**ga yuklang (repository yarating, `git push`).
2. [vercel.com](https://vercel.com) ga kirish (GitHub orqali).
3. **Add New → Project** → repongizni tanlang.
4. **Framework:** Next.js avtomatik aniqlanadi → **Deploy**.
5. 1–2 daqiqadan keyin sayt `https://sizning-loyiha.vercel.app` ko‘rinishida ochiladi.

Keyinroq o‘z domeningizni ulash ham mumkin (Vercel panel → Domains).

---

## 2. **Netlify** (muqobil)

- Next.js qo‘llab-quvvatlaydi: [netlify.com](https://www.netlify.com) → Git ulab deploy.
- Tekin rejim mavjud.

---

## 3. **Cloudflare Pages**

- Tekin, tez; Next.js uchun sozlamalar biroz murakkabroq.
- [pages.cloudflare.com](https://pages.cloudflare.com)

---

## 4. **VPS (Oracle Free, Fly.io va hokazo)**

- “Server” o‘zingiz boshqarasiz, lekin **tekin VPS**da Node o‘rnatish, `npm run build`, `npm start`, nginx — ko‘proq vaqt va bilim kerak.
- Oddiy do‘kon sayti uchun **Vercel yetarli**.

---

## Tekshiruvlar (deploy oldin)

Lokalda (Node 20+):

```bash
npm run build
npm start
```

Xatosiz build bo‘lsa, Vercel ham odatda muvaffaqiyatli deploy qiladi.

---

## Xavfsizlik

- `.env` da maxfiy kalitlar bo‘lsa, Vercel **Settings → Environment Variables** ga qo‘shing (repoga commit qilmang).
