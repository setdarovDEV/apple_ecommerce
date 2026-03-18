# GitHub push xatosi (100 MB cheklovi)

**Sabab:** `node_modules` Git ga commit qilingan. Ichida Next.js fayllari 100 MB dan katta — GitHub rad etadi.

**Yechim:** `node_modules` repoda bo‘lmasligi kerak. Endi `.gitignore` to‘g‘rilandi.

## Yangi boshlash (eng oson)

Terminalda loyiha papkasida:

```bash
cd ~/projects/primestack/AppleShop

# Eski Git tarixini o‘chirish (faqat shu loyiha)
rm -rf .git

git init
git branch -M main
git add .
git status
```

`git status` da **`node_modules` ko‘rinmasin**. Agar ko‘rinsa, `.gitignore`ni tekshiring.

```bash
git commit -m "Initial commit"
git remote add origin https://github.com/setdarovDEV/apple_ecommerce.git
git push -u origin main
```

Agar `remote origin already exists` desa:

```bash
git remote remove origin
git remote add origin https://github.com/setdarovDEV/apple_ecommerce.git
git push -u origin main
```

GitHubda repoda oldin noto‘g‘ri commit bo‘lsa:

```bash
git push -u origin main --force
```

---

## Keyin (Vercel va boshqalar)

Serverda `npm install` va `npm run build` o‘zi `node_modules`ni yaratadi — repoga yuklash shart emas.
