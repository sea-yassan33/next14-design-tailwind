"use client";

import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-[#2176AE] font-bold text-4xl md:text-5xl mb-6">ABOUT</h2>
          <h3 className="text-black font-bold text-2xl md:text-3xl mb-6 leading-snug">
            sample市立<br />
            総合予防センターについて
          </h3>
          <div className="text-black text-base md:text-lg leading-relaxed mb-10 space-y-2">
            <p>
              当院は、地域の皆様の健康を守るため、予防医療に特化した総合予防センターとして設立されました。
            </p>
            <p>
              予防接種や健康診断、生活習慣病の予防・管理を中心に、地域医療の充実を目指しています。
            </p>
            <p>
              私たちは、地域の健康を支えるため、最新の医療技術と専門知識を活かし、予防に力を入れています。
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-full border border-[#2176AE] text-[#2176AE] font-semibold text-base hover:bg-[#e6f1fa] transition"
          >
            当院について&nbsp;
            <span className="ml-1 text-lg">&rarr;</span>
          </Link>
        </div>
        {/* Right: Image + dots */}
        <div className="flex-1 flex flex-col items-end">
          <div className="relative w-full max-w-xl aspect-[1.1/1] rounded-[2rem] overflow-hidden">
            <Image
              src="/sample01.svg"
              alt="総合予防センター外観"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}