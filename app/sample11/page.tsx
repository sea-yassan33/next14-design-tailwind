import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Sample11() {
  return (
    <section className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/icons/logo_sample.png" alt="sample logo" width={120} height={60} className="h-14 w-auto" />
            </Link>
          </div>
          <div className="flex flex-col items-end mt-2 md:mt-0">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-amber-500 mr-2" />
              <span className="text-3xl font-bold text-gray-800">012-3456-7890</span>
            </div>
            <p className="text-sm text-gray-600">受付時間 9:00〜17:00 土曜・日曜・祝日定休</p>
          </div>
        </div>
        {/* ナビケーションメニュー */}
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
      </header>
      {/* ヒーローセクション */}
      <div className="relative w-full">
        <div className="relative w-full h-[400px]">
          <Image src="/sample_img01.png" alt="ヒーロセッション" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/70 flex items-center justify-end">
            <div className="max-w-md p-8 text-right">
              <h1 className="text-4xl font-bold mb-4">
                <span className="text-cyan-500">気持ちに寄添った</span>
              </h1>
              <h2 className="text-3xl font-bold text-gray-800">在宅生活を支援</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
