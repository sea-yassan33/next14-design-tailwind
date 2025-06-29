"use client";

import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addDays, format, parseISO, startOfWeek, getDay, parse } from "date-fns";
import {ja} from "date-fns/locale/ja";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// カテゴリーごとの色マップ
const categoryColors: Record<string, string> = {
  client: "#2563eb", // blue-600
  meeting: "#059669", // emerald-600
  call: "#f59e42",    // orange-400
  kickoff: "#d946ef", // fuchsia-500
  quote: "#f43f5e",   // rose-500
  default: "#64748b", // slate-500
};
// TypeScriptの型定義
type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  category: string;
  description: string;
};

const locales = {
  "Ja": ja,
};
const localizer = dateFnsLocalizer({
  format,
  parse: (str: string, fmt: string, refDate: Date) => parseISO(str), 
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0, locale: ja}),
  getDay,
  locales,
});

// DB等から取得したISO8601文字列のサンプル
const rawEvents = [
  {
    title: "顧客対応可能",
    start: "2025-04-13T06:00:00",
    end: "2025-04-13T18:00:00",
    category: "client",
    description: "クライアントとの対応が可能な時間です。",
  },
  {
    title: "Paigeとの計画ミーティング",
    start: "2025-04-13T08:00:00",
    end: "2025-04-13T10:30:00",
    category: "meeting",
    description: "Paigeとプロジェクト計画について打ち合わせ。",
  },
  {
    title: "不便なカンファレンスコール",
    start: "2025-04-13T09:30:00",
    end: "2025-04-13T12:00:00",
    category: "call",
    description: "リモートチームとのカンファレンスコール。",
  },
  {
    title: "プロジェクトキックオフ - Lou's Shoes",
    start: "2025-04-13T11:30:00",
    end: "2025-04-13T14:00:00",
    category: "kickoff",
    description: "Lou's Shoesプロジェクトのキックオフミーティング。",
  },
  {
    title: "見積もりフォローアップ - Tea by Tina",
    start: "2025-04-13T15:30:00",
    end: "2025-04-13T16:00:00",
    category: "quote",
    description: "Tea by Tinaへの見積もりフォローアップ。",
  },
  {
    title: "見積もりフォローアップ - Tea by Tina",
    start: "2025-04-14T09:20:00",
    end: "2025-04-14T12:00:00",
    category: "quote",
    description: "Tea by Tinaへの見積もりフォローアップ。",
  },
];

// ISO文字列 → Date型に変換（本番ではAPIフェッチ後に変換すると良い）
const events = rawEvents.map(ev => ({
  ...ev,
  start: parseISO(ev.start),
  end: parseISO(ev.end),
}));

export default function CalendarPage() {
  // 表示基準日もISOで管理し、parseISOでDate化
  const [date, setDate] = useState(parseISO("2025-04-13"));
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  // 指定日のイベントを抽出
  const filteredEvents = useMemo(
    () =>
      events.filter(
        (e) =>
          e.start.toDateString() === date.toDateString() ||
          e.end.toDateString() === date.toDateString()
      ),
    [date]
  );

  // イベントごとに色を変更
  const eventPropGetter = (
    event: typeof events[number],
    _start: Date,
    _end: Date,
    _isSelected: any
  ) => {
    const bgColor = categoryColors[event.category as string] ?? categoryColors.default;
    return {
      style: {
        backgroundColor: bgColor,
        color: "#fff",
        borderRadius: "6px",
        border: "none",
        opacity: 0.95,
      },
    };
  };

  // スロット線を薄いグレーにカスタマイズ
  const slotPropGetter = () => ({
    style: {
      borderBottom: "1px solid #e5e7eb", // Tailwindのgray-200相当
    },
  });

  return (
    <div className="container p-4 bg-white">
      <div className="flex items-center mb-2 gap-2">
        <Button onClick={() => setDate(addDays(date, -1))}>Back</Button>
        <div className="font-bold text-lg mx-4">
          {format(date, "yyyy年M月d日(E)", { locale: ja })}
        </div>
        <Button onClick={() => setDate(addDays(date, 1))}>Next</Button>
      </div>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        defaultView={Views.DAY}
        views={["month", "week", "work_week", "day", "agenda"]}
        date={date}
        onNavigate={(newDate: Date) => setDate(newDate)}
        style={{ height: 700 }}
        step={20}
        timeslots={1}
        min={new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 0)}
        max={new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 0)}
        toolbar={false}
        popup={true}
        className="rounded shadow"
        slotPropGetter={slotPropGetter}
        eventPropGetter={eventPropGetter}
        onSelectEvent={(event: CalendarEvent) => setSelectedEvent(event)}
      />
      {/* モーダル表示 */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription>
              <div className="mb-2 text-sm text-gray-500">
                {selectedEvent &&
                  `${format(selectedEvent.start, "HH:mm")} - ${format(selectedEvent.end, "HH:mm")}`
                }
              </div>
              <div>
                {selectedEvent?.description}
              </div>
              <div className="mt-2">
                <span
                  className="inline-block rounded px-2 py-1 text-xs"
                  style={{
                    background: categoryColors[selectedEvent?.category || "default"],
                    color: "#fff",
                  }}
                >
                  {selectedEvent?.category}
                </span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button variant="outline" className="mt-4 w-full">閉じる</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}