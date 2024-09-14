import Image from "next/image";
import Link from "next/link";
import Colllection from "./_components/Collection";

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
          {/* テンプレート集 */}
          <Colllection/>
        </div>
      </div>
    </section>
  );
}
