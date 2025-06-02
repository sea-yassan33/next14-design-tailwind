## 開発環境
```sh
npx create-next-app@14.1.4
Ok to proceed? (y) y
✔ What is your project named? … nextjs14-design-tailwind
✔ Would you like to use TypeScript? …  / Yes
✔ Would you like to use ESLint? …  / Yes
✔ Would you like to use Tailwind CSS? …  / YES
✔ Would you like to use `src/` directory? … No / 
✔ Would you like to use App Router? (recommended) …  / Yes
✔ Would you like to customize the default import alias (@/*)? … No / 
```

## 履歴
|date|content|Link|
|:----|:----|:----|
|240901|HeaderとFooter||
|240901|Main||
|250320|sample10||

## 追加ライブラリ
```sh
npm install classnames
npm install dayjs@1.11.10
npm install nextjs-basic-auth-middleware@3.1.0

## Tailwind Variants
npm install tailwind-variants

## ui.shadcn
npx shadcn@latest init -d
npx shadcn@latest add

## ブラウザ依存のライブラリ
npm install framer-motion

## Headless UI
npm install @headlessui/react

## reacticons
## https://react-icons.github.io/react-icons/
npm install react-icons

## svgr
npm install @svgr/webpack

## Swiper
## https://swiperjs.com/
npm install swiper
```

- settings.jsonの設定
```json
{
  "tailwindCSS.experimental.classRegex": [
    ["tv\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Next.jsの開発モードでサーバーを起動
```
npm run dev

- ローカルサーバー
http://localhost:3000/
```

##  page開発テンプレート
```js
import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';

export default function Sample00() {
  const twStayles = tv({
    variants: {
      style:{
        text01:'text-cyan-400',
      },
    },
  });
  return (
    <div className={twStayles({style:'text01'})}>
      first_commit
    </div>
  );
}
```

## Vercel:デプロイ
https://next14-design-tailwind.vercel.app/

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
- [Lucide-アイコン](https://lucide.dev/icons/)
- [21ST](https://21st.dev/)
- [私なりのチートシート](https://zenn.dev/aew2sbee/articles/tailwind-css-cheat-sheet)