'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'

// スワイプ作成例
export default function Sample12() {
  return (
     <div className="w-full h-screen bg-gray-50">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        style={{ height: '100vh' }}
      >
        <SwiperSlide>
          <section className="flex flex-col items-center justify-center h-full bg-blue-500 text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p>最初のセクションの内容</p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex flex-col items-center justify-center h-full bg-green-400 text-white">
            <h1 className="text-4xl font-bold mb-4">特徴</h1>
            <p>商品の特徴やサービス紹介</p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="flex flex-col items-center justify-center h-full bg-yellow-400 text-white">
            <h1 className="text-4xl font-bold mb-4">お問合せ</h1>
            <p>フォームやCTAボタンを配置</p>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}