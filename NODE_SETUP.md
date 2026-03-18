# Node.js 20 (nvm bilan)

**Muammo:** `nvm` o‘rnatilgandan keyin yangi terminal ochilmaguncha `nvm` ishlamaydi.

**Hozirgi terminalda** quyidagilarni ketma-ket yozing:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 20
nvm use 20
node -v
```

`v20.x.x` chiqsa — to‘g‘ri. Keyin:

```bash
cd ~/projects/primestack/AppleShop
npm install
npm run dev
```

**Keyingi safar:** terminalni oddiy ochsangiz ham `nvm` ishlaydi (`.bashrc` ga qo‘shilgan).

---

**Eslatma:** Node versiyasini o‘zgartirish uchun `npm install 20` **ishlatmang** — bu boshqa paket. Faqat `nvm install 20`.

---

## Tailwind: "Cannot find native binding" / `@tailwindcss/oxide-linux-x64-gnu`

Node 18 dan 20 ga o‘tgach yoki `npm install` noto‘g‘ri bo‘lsa:

```bash
cd ~/projects/primestack/AppleShop
rm -rf node_modules package-lock.json
npm install
```

- Linux x64 uchun `@tailwindcss/oxide-linux-x64-gnu` **dependencies** da (npm ba’zan optional-depsni o‘tkazib yuboradi).
- `npm run dev` **Webpack** bilan ishlaydi (`next dev --webpack`) — Turbopack ba’zan Tailwind native modulini topa olmaydi.
