import Link from "next/link";

export default function Navi01(){
  return(
    <nav className="bg-cyan-500 text-white w-full">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-between">
          <li className="flex-1 text-center border-r border-cyan-400">
            <Link href="/" className="block py-4 hover:bg-cyan-600 transition-colors">
              ホーム
            </Link>
          </li>
          <li className="flex-1 text-center border-r border-cyan-400">
            <Link href="/services" className="block py-4 hover:bg-cyan-600 transition-colors">
              サービス内容
            </Link>
          </li>
          <li className="flex-1 text-center border-r border-cyan-400">
            <Link href="/guide" className="block py-4 hover:bg-cyan-600 transition-colors">
              ご利用案内
            </Link>
          </li>
          <li className="flex-1 text-center border-r border-cyan-400">
            <Link href="/jobs" className="block py-4 hover:bg-cyan-600 transition-colors">
              求人情報
            </Link>
          </li>
          <li className="flex-1 text-center">
            <Link href="/contact" className="block py-4 hover:bg-cyan-600 transition-colors">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}