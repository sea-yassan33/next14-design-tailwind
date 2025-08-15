"use client";

import React from "react";
import Link from "next/link";

type NewsCategory = "all" | "notice" | "info" | "event";

type NewsItem = {
  date: string;
  category: NewsCategory;
  categoryLabel: string;
  labelColor: string;
  title: string;
  href: string;
};

const news: NewsItem[] = [
  {
    date: "20XX年XX月XX日",
    category: "notice",
    categoryLabel: "大切なお知らせ",
    labelColor: "bg-[#D72638] text-white",
    title: "新型コロナウイルス感染症に関するお知らせ",
    href: "/news/sample",
  },
  {
    date: "20XX年XX月XX日",
    category: "notice",
    categoryLabel: "大切なお知らせ",
    labelColor: "bg-[#D72638] text-white",
    title: "新型コロナウイルスワクチン接種に関するお知らせ",
    href: "/news/sample2",
  },
  {
    date: "20XX年XX月XX日",
    category: "event",
    categoryLabel: "講座・イベント",
    labelColor: "bg-[#E6F1FA] text-[#2176AE]",
    title:
      "地域健康フェア20XXのご案内",
    href: "/news/sample3",
  },
  {
    date: "20XX年XX月XX日",
    category: "notice",
    categoryLabel: "大切なお知らせ",
    labelColor: "bg-[#D72638] text-white",
    title:
      "新型コロナウイルス感染症に関する最新情報",
    href: "/news/sample4",
  },
];

// カテゴリボタン
const categories = [
  { key: "all", label: "ALL" },
  { key: "notice", label: "大切なお知らせ" },
  { key: "info", label: "新着情報" },
  { key: "event", label: "講座・イベント" },
];

export function NewsSection() {
  const [selected, setSelected] = React.useState<NewsCategory>("all");

  const filtered =
    selected === "all"
      ? news
      : news.filter((item) => item.category === selected);

  return (
    <section className="relative py-12 px-4 bg-gradient-to-br from-[#3688C2] to-[#E5F0FB] min-h-[500px]">
      <div className="relative max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-lg px-8 py-10">
        {/* タイトル行 */}
        <div className="flex flex-col md:flex-row md:items-end gap-3 mb-8">
          <h2 className="text-4xl font-bold text-[#2176AE] leading-snug mr-4">
            NEWS
            <span className="text-black text-2xl align-middle ml-3 font-medium">お知らせ</span>
          </h2>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`px-5 py-1 rounded-full font-semibold border border-[#2176AE] transition ${selected === cat.key ? "bg-[#2176AE] text-white" : "bg-white text-[#2176AE] hover:bg-[#e6f1fa]"}`}
                onClick={() => setSelected(cat.key as NewsCategory)}
                type="button"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        {/* ニュースリスト */}
        <ul>
          {filtered.map((item, i) => (
            <li
              key={item.title + i}
              className="flex flex-col md:flex-row md:items-center border-b border-[#E5E5E5] py-5 gap-2 md:gap-0"
            >
              {/* 日付 */}
              <div className="flex flex-row md:flex-col items-start md:items-end w-32 shrink-0 md:text-right mb-1">
                <span className="block text-[#2176AE] font-semibold md:text-base text-sm">
                  {item.date.slice(0, 5)}
                </span>
                <span className="block text-black font-bold md:text-lg text-base ml-2 md:ml-0">
                  {item.date.slice(5)}
                </span>
              </div>
              {/* カテゴリラベル */}
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold mr-2 ${item.labelColor}`}
              >
                {item.categoryLabel}
              </span>
              {/* タイトル */}
              <Link
                href={item.href}
                className="flex-1 text-base md:text-lg text-black font-medium hover:underline"
              >
                {item.title}
              </Link>
              {/* →アイコン */}
              <Link href={item.href} className="ml-3 text-[#2176AE] font-bold text-2xl">
                &rarr;
              </Link>
            </li>
          ))}
        </ul>
        {/* 下部ボタン */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            href="/news"
            className="flex-1 flex items-center justify-center rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition"
          >
            お知らせ一覧はこちら&nbsp;<span className="ml-1 text-lg">&rarr;</span>
          </Link>
          <Link
            href="/events"
            className="flex-1 flex items-center justify-center rounded-full border border-[#2176AE] text-[#2176AE] font-semibold py-3 text-base hover:bg-[#e6f1fa] transition"
          >
            講座・イベント一覧はこちら&nbsp;<span className="ml-1 text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}