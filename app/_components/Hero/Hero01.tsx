import Image from "next/image";
export default function Hero01(){
  return(
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
  )
}