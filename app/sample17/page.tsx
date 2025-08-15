"use client";
import Image from "next/image";
import Link from 'next/link';
import { tv } from 'tailwind-variants';
import { cn } from "@/lib/utils";
import { NewsSection } from "../_components/sample17/news";
import { AboutSection } from "../_components/sample17/about";
import { AccessSection } from "../_components/sample17/access";

export default function Sample00() {
  const twStayles = tv({
    variants: {
      style:{
        main01:'relative w-full h-[600px] flex items-center bg-gradient-to-br from-[#0062A5] to-[#3083C9] overflow-hidden',
      },
    },
  });
  return (
    <>
      <section className={twStayles({style:'main01'})}>
        {/* 背景画像（病院の建物） */}
        <Image
          src="/sample_img01.png"
          alt="総合医療センター"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0062A5]/70 to-[#3083C9]/10" />
        {/* テキストコンテンツ */}
        <div className="relative z-10 max-w-3xl px-8">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-md mb-8">
            これまでも、<br />
            これからも、<br />
            地域のための予防を。
          </h1>
          <div className="space-y-2">
            <div className="bg-white/90 rounded px-3 py-1 w-fit text-lg font-medium text-gray-900 shadow">
              私たちは
            </div>
            <div className="bg-white/90 rounded px-3 py-1 w-fit text-lg font-medium text-gray-900 shadow">
              予防を大切にし、
            </div>
            <div className="bg-white/90 rounded px-3 py-1 w-fit text-lg font-medium text-gray-900 shadow">
              総合予防センターとして
            </div>
            <div className="bg-white/90 rounded px-3 py-1 w-fit text-lg font-medium text-gray-900 shadow">
              新たな一歩を踏み出しました
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-6 pb-12 bg-white">
        {/* お知らせバー */}
        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="flex items-center justify-between bg-[#FCEEEE] rounded-2xl px-6 py-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center bg-[#D72638] text-white rounded-full px-3 py-1 text-sm font-semibold">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                  大切なお知らせ
                </span>
                <span className="text-[#D72638] font-semibold text-base ml-4">
                  2025年3月1日
                </span>
              </span>
              <span className="ml-6 text-[#D72638] font-medium text-base">
                面会制限について
              </span>
            </div>
            <span className="text-[#D72638] font-bold text-2xl">&rarr;</span>
          </div>
        </div>
        {/* 4つのカード */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {/* 外来受診される方 */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <Image
                src="/sample01.svg"
                alt="外来受付"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 220px, 50vw"
                priority
              />
            </div>
            <h3 className="text-[#174C8F] font-bold text-lg mb-2">外来受診される方</h3>
            <ul className="text-gray-700 text-sm mb-4 space-y-1">
              <li>外来診療予定表</li>
              <li>初診の方へ</li>
              <li>再診の方へ</li>
            </ul>
            <Link
              href="/outpatient"
              className="mt-auto inline-flex items-center px-4 py-2 border border-[#174C8F] rounded-full text-[#174C8F] font-semibold bg-white hover:bg-[#F4F8FC] transition"
            >
              外来のご案内&nbsp;
              <span className="ml-1 text-lg">&rarr;</span>
            </Link>
          </div>
          {/* 入院される方 */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <Image
                src="/sample01.svg"
                alt="入院病室"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 220px, 50vw"
                priority
              />
            </div>
            <h3 className="text-[#174C8F] font-bold text-lg mb-2">入院される方</h3>
            <ul className="text-gray-700 text-sm mb-4 space-y-1">
              <li>入院案内パンフレット</li>
              <li>入院手続・持ち物</li>
              <li>ご面会・お見舞い</li>
            </ul>
            <Link
              href="/inpatient"
              className="mt-auto inline-flex items-center px-4 py-2 border border-[#174C8F] rounded-full text-[#174C8F] font-semibold bg-white hover:bg-[#F4F8FC] transition"
            >
              入院のご案内&nbsp;
              <span className="ml-1 text-lg">&rarr;</span>
            </Link>
          </div>
          {/* 医療関係者の方 */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <Image
                src="/sample01.svg"
                alt="医療関係者"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 220px, 50vw"
                priority
              />
            </div>
            <h3 className="text-[#174C8F] font-bold text-lg mb-2">医療関係者の方</h3>
            <ul className="text-gray-700 text-sm mb-4 space-y-1">
              <li>患者さんの紹介方法</li>
              <li>研修医について</li>
              <li>専門研修プログラム</li>
            </ul>
            <Link
              href="/cooperation"
              className="mt-auto inline-flex items-center px-4 py-2 border border-[#174C8F] rounded-full text-[#174C8F] font-semibold bg-white hover:bg-[#F4F8FC] transition"
            >
              地域医療連携室&nbsp;
              <span className="ml-1 text-lg">&rarr;</span>
            </Link>
          </div>
          {/* 当院について */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
              <Image
                src="/sample01.svg"
                alt="院内"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 220px, 50vw"
                priority
              />
            </div>
            <h3 className="text-[#174C8F] font-bold text-lg mb-2">当院について</h3>
            <ul className="text-gray-700 text-sm mb-4 space-y-1">
              <li>当院の特長</li>
              <li>交通アクセス</li>
              <li>フロアマップ</li>
            </ul>
            <Link
              href="/about"
              className="mt-auto inline-flex items-center px-4 py-2 border border-[#174C8F] rounded-full text-[#174C8F] font-semibold bg-white hover:bg-[#F4F8FC] transition"
            >
              当院について&nbsp;
              <span className="ml-1 text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
      <NewsSection />
      <AboutSection />
      <AccessSection />
    </>
  );
}