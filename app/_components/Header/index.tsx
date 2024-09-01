import Image from "next/image";
import Link from 'next/link';

const twStyles = {
  // ヘッダーのスタイル
  headerTop:"text-gray-600 body-font bg-gray-100",
  header01:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
  header01Right:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
  header01Left:"md:ml-auto flex flex-wrap items-center text-base justify-center",
}

export default function Header(){
  return(
    <header className={`${twStyles.headerTop}`}>
      <div className={`${twStyles.header01}`}>
        <div className={`${twStyles.header01Right}`}>
          <Link href={'/'} className="text-3xl">Design by tailwing</Link>
        </div>
        <div className={`${twStyles.header01Left}`}>
          <Link href="https://tailblocks.cc/" className="mr-5 hover:text-gray-900" target="_blank">tailblocks</Link>
          <Link href="https://tailblocks.cc/" className="mr-5 hover:text-gray-900" target="_blank">tailblocks</Link>
        </div>
      </div>
    </header>
  );
}