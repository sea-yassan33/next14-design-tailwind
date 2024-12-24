import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function S08_Mission(){
  return(
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl text-center mb-16">MISSION</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src="/sample01.svg"
            alt="Interior design sketches and materials"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl">インテリアデザインで<br />暮らしを豊かにする</h3>
          <p className="text-muted-foreground">
            インテリアデザインは単なる装飾ではなく、<br />
            そこで生活する人のストーリーを想像し、<br />
            心の豊かさ、そこでする日常の心地よさを作るため<br />
            ここから始めていきます。
          </p>
          <p className="text-muted-foreground">
            当事務所は丁寧な打合せと的確なイメージ提案で<br />
            お客様のお気持ちを形にします。インテリア<br />
            デザイン・インテリアコーディネート相談は<br />
            CONTACTからお気軽にご連絡ください。
          </p>
          <Button variant="outline" className="bg-[#E5B864] text-white hover:bg-[#E5B864]/90 border-0">
            MORE
          </Button>
        </div>
      </div>
    </section>
  )
}