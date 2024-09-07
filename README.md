## 開発環境
```
create-next-app@14.1.4
Ok to proceed? (y) y
✔ What is your project named? … nextjs14-design-tailwind
✔ Would you like to use TypeScript? …  / Yes
✔ Would you like to use ESLint? …  / Yes
✔ Would you like to use Tailwind CSS? …  / YES
✔ Would you like to use `src/` directory? … No / 
✔ Would you like to use App Router? (recommended) …  / Yes
✔ Would you like to customize the default import alias (@/*)? … No / 
```

## 追加ライブラリ
```
npm install classnames
npm install dayjs@1.11.10
npm install nextjs-basic-auth-middleware@3.1.0

- Headless UI
npm install @headlessui/react

- Heroicons
npm install @heroicons/react

- Tailwind Variants
npm install tailwind-variants
```

## Next.jsの開発モードでサーバーを起動
```
npm run dev

- ローカルサーバー
http://localhost:3000/
```

## Vscode補完機能
nafeで補完
```tsx
const sample = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export default sample;
```

## 履歴
|date|content|Link|
|:----|:----|:----|
|240901|HeaderとFooter||
|240901|Main||

## Vercel:デプロイ
https://next14-design-tailwind.vercel.app/

## Tailwind Variantsの使い方
```js
import { tv } from 'tailwind-variants';
const button = tv({
  base: 'text-white p-4',
  variants: {
    color: {
      primary: 'bg-blue-500',
      secondary: 'bg-red-500',
    },
  },
});
button({ color: 'primary' })
// => "text-white p-4 bg-blue-500"

button({ color: 'secondary' })
// => "text-white p-4 bg-red-500"
```

- settings.jsonの設定
```json
{
  "tailwindCSS.experimental.classRegex": [
    ["tv\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## 参考
- [チートシート](https://nerdcave.com/tailwind-cheat-sheet)
- [tailblocks: フレーム系](https://tailblocks.cc/)
- [ailwindtemplates: パーツ系](https://tailwindtemplates.io/templates)
- [icones：アイコン](https://icones.js.org/)
- [Preline：UI](https://preline.co/)
- [Pines：UIパーツ](https://devdojo.com/pines)
- [文字デザイン01](https://focaccia.co.jp/blog/css-gradient-text)
- [グラデーション](https://tailwind-gradient-generator.vercel.app/)
- [flowrift:テンプレ](https://flowrift.com/w/)
- [tailwing入門ドキュメント](https://zenn.dev/yohei_watanabe/books/c0b573713734b9)