import Image from "next/image";
import Link from "next/link";
import Colllection from "./_components/Collection";
import { tv } from 'tailwind-variants';
import Footer from "./_components/Footer";

const twStayles = tv({
  base:'font-bold tracking-widest bg-clip-text text-transparent mb-5',
  variants: {
    color:{
      s01:'bg-gradient-to-r from-pink-500 to-violet-500',
      s02:'bg-gradient-to-r from-yellow-500 to-green-500',
    },
    size:{
      s01:'text-5xl',
      s02:'text-4xl',
    },
  },
});

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <h1 className={twStayles({color:'s01',size:'s02'})}>テンプレート集</h1>
          <div className="flex flex-wrap -m-4">
            {/* テンプレート集 */}
            <Colllection/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
