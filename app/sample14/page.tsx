import S14Sec01 from "./Section01";
import S14Sec02 from "./Section02";
import S14Sec03 from "./Section03";

export default function Sample14(){
  return(
    <section className="min-h-screen bg-white flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-2">
        CTA: Sample01
      </h2>
      <S14Sec01 />
      <p className="border-b my-2"></p>
      <h2 className="text-3xl font-bold text-center mb-2">
        CTA: Sample02
      </h2>
      <S14Sec02 />
      <p className="border-b my-2"></p>
      <h2 className="text-3xl font-bold text-center mb-2">
        CTA: Sample02
      </h2>
      <S14Sec03 />
    </section>
  )
}