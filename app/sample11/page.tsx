import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import Hero01 from "../_components/Hero/Hero01";
import Navi01 from "../_components/Navi/Navi01";
import Section02 from "./Section02";

export default function Sample11() {
  return (
    <div>
      <section className="flex flex-col">
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
          <Navi01 />    
        </header>
        {/* ヒーローセクション */}
        <Hero01 />
      </section>
      <section>
        <Section02/>
      </section>
    </div>
  );
}
