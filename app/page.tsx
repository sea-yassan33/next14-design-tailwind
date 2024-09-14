import Image from "next/image";
import Link from "next/link";

const twStayles = {
  //main
  mainItem01:"p-4 md:w-1/3",
  mainItem02:"h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden",
  mainItemImg:"lg:h-48 md:h-36 w-full object-cover object-center",
  mainItemTxtH1:"title-font text-lg font-medium text-gray-900 mb-3",
  mainItemTxtH2:"tracking-widest text-xs title-font font-medium text-gray-400 mb-1",
  mainItemTxt:"leading-relaxed mb-3",
  mainTitle:"text-5xl font-bold tracking-widest bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent",
}

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <h1 className={`${twStayles.mainTitle} mb-5`}>テンプレート集</h1>
        <div className="flex flex-wrap -m-4">
          {/* ループ予定 */}
          <div className={`${twStayles.mainItem01}`}>
            <div className={`${twStayles.mainItem02}`}>
              <Link href='/sample01'>
                <Image className={`${twStayles.mainItemImg}`} src="https://i.gyazo.com/f8bf59f059fe478e8ff969dc2cbaf0b9.png" alt="" width={4000} height={1200}/>
              </Link>
              <div className="p-6">
                <h2 className={`${twStayles.mainItemTxtH2}`}>CATEGORY</h2>
                <Link href='/sample01' className={`${twStayles.mainItemTxtH1}`}>sample01</Link>
                <p className={`${twStayles.mainItemTxt}`}>
                  画像、youtube動画の一覧を表示するデザイン。
                </p>
              </div>
            </div>
          </div>
          <div className={`${twStayles.mainItem01}`}>
            <div className={`${twStayles.mainItem02}`}>
              <Link href='/sample02'>
                <Image className={`${twStayles.mainItemImg}`} src="https://i.gyazo.com/505fc3f175597de655ce21fb4d66bf2c.png" alt="" width={4000} height={1200}/>
              </Link>
              <div className="p-6">
                <h2 className={`${twStayles.mainItemTxtH2}`}>CATEGORY</h2>
                <Link href='/sample02' className={`${twStayles.mainItemTxtH1}`}>sample02</Link>
                <p className={`${twStayles.mainItemTxt}`}>
                  アイテムのデザインサンプル。
                </p>
              </div>
            </div>
          </div>
          <div className={`${twStayles.mainItem01}`}>
            <div className={`${twStayles.mainItem02}`}>
              <Image className={`${twStayles.mainItemImg}`} src="/preparatImg.png" alt="" width={4000} height={1200}/>
              <div className="p-6">
                <h2 className={`${twStayles.mainItemTxtH2}`}>CATEGORY</h2>
                <h1 className={`${twStayles.mainItemTxtH1}`}>TITLE</h1>
                <p className={`${twStayles.mainItemTxt}`}>
                  Photo booth fam kinfol
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
