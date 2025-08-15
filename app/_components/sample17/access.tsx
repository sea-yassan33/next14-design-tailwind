"use client";

import Link from "next/link";

export function AccessSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Map */}
        <div className="flex-1 w-full">
          <div className="w-full aspect-[1.27/1] rounded-3xl overflow-hidden shadow border">
            {/* 画像埋め込み or iframeに差替え可能 */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7959.912893497492!2d132.92476720033522!3d32.984495286995674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1755243930585!5m2!1sja!2sjp" width="600" height="450" className="w-full h-full object-cover" loading="lazy" ></iframe>
            {/* <img
              src="/sample4.png"
              alt="横須賀市立総合医療センター地図"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
        {/* Access Info */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-[#174C8F] font-bold text-2xl md:text-3xl mb-2">交通・アクセス</h2>
          <div className="text-base text-black mb-2 font-semibold">
            sample立総合予防センター
          </div>
          <div className="text-base text-black mb-4">
            〒XXX-XXXX ハワイ県sample市sample町1-2-3<br />
          </div>
          <div className="space-y-3 text-sm md:text-base">
            <div>
              <span className="inline-block bg-[#2254A3] text-white font-semibold px-3 py-1 rounded-full text-xs mb-1 mr-2 align-middle">
                電車をご利用の場合
              </span>
              <div className="ml-1 mt-1">
                ・sample線 sample駅から徒歩約7分<br />
                ・ハワイメトロ線 sample駅から徒歩約12分
              </div>
            </div>
            <div>
              <span className="inline-block bg-[#2254A3] text-white font-semibold px-3 py-1 rounded-full text-xs mb-1 mr-2 align-middle">
                バスをご利用の場合
              </span>
              <div className="ml-1 mt-1">
                ・JRハワイ駅から、XX番号のりばよりsample行き、<br className="hidden md:inline" />
                またsample行きでAAABBBCCC前バス停下車、徒歩5分<br />
              </div>
            </div>
            <div>
              <span className="inline-block bg-[#2254A3] text-white font-semibold px-3 py-1 rounded-full text-xs mb-1 mr-2 align-middle">
                自家用車をご利用の場合
              </span>
              <div className="ml-1 mt-1">
                ・Sampleインターより約10分 総合予防センター入口交差点よりお越しください
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <Link
              href="/access"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#174C8F] text-[#174C8F] font-semibold bg-white hover:bg-[#e6f1fa] transition"
            >
              交通アクセス&nbsp;<span className="ml-1 text-lg">&rarr;</span>
            </Link>
            <a
              href="https://maps.app.goo.gl/LusvAsPw8WKTbqB86"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border border-[#174C8F] text-[#174C8F] font-semibold bg-white hover:bg-[#e6f1fa] transition"
            >
              GoogleMAPで表示&nbsp;
              <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}