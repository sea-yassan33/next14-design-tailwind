import Image from "next/image";

export default function Section02(){
  return(
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                提供サービスについて
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden relative">
                {/* 画像挿入 */}
                <Image src="/sample01.svg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover" width={200} height={200}/>
              </div>
              <h3 className="text-xl tracking-tight">療養支援</h3>
              <p className="text-muted-foreground text-base">
                買い物・掃除・料理などの生活支援を行います。
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden relative">
                {/* 画像挿入 */}
                <Image src="/sample01.svg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover" width={200} height={200}/>
              </div>
              <h3 className="text-xl tracking-tight">医師の指示による医療処置</h3>
              <p className="text-muted-foreground text-base">
                医師の指示のもと、点滴・注射・服薬管理などを行います。
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden relative">
                {/* 画像挿入 */}
                <Image src="/sample01.svg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover" width={200} height={200}/>
              </div>
              <h3 className="text-xl tracking-tight">リハビリ・重症化予防支援</h3>
              <p className="text-muted-foreground text-base">
                リハビリテーションや重症化予防のための支援を行います。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}