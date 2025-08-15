"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import {format} from "date-fns/format";
import {parse} from "date-fns/parse";
import {startOfWeek} from "date-fns/startOfWeek";
import {getDay} from "date-fns/getDay";
import {ja} from "date-fns/locale/ja";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ScheduleDetailDialog } from "./modal";

// サンプルルーム
const ROOMS = [
  { id: 1, name: "Board room", color: "#2563eb" },     // 青
  { id: 2, name: "Training room", color: "#059669" },  // 緑
  { id: 3, name: "Meeting room 1", color: "#d97706" }, // オレンジ
  { id: 4, name: "Meeting room 2", color: "#be185d" }, // ピンク
];

// サンプルイベント（各ルームで時間がかぶらないように設定）
const SAMPLE_EVENTS = [
  // Board room
  {
    id: 0,
    title: "Morning Meeting",
    start: new Date(2024, 0, 29, 9, 0),
    end: new Date(2024, 0, 29, 10, 0),
    roomId: 1,
  },
  {
    id: 1,
    title: "Project Briefing",
    start: new Date(2024, 0, 29, 10, 30),
    end: new Date(2024, 0, 29, 12, 0),
    roomId: 1,
  },
  // Training room
  {
    id: 2,
    title: "Staff Training",
    start: new Date(2024, 0, 29, 9, 0),
    end: new Date(2024, 0, 29, 11, 0),
    roomId: 2,
  },
  {
    id: 3,
    title: "Skill Up Seminar",
    start: new Date(2024, 0, 29, 13, 0),
    end: new Date(2024, 0, 29, 15, 0),
    roomId: 2,
  },
  // Meeting room 1
  {
    id: 4,
    title: "Client Call",
    start: new Date(2024, 0, 29, 11, 0),
    end: new Date(2024, 0, 29, 12, 0),
    roomId: 3,
  },
  {
    id: 5,
    title: "Internal Discussion",
    start: new Date(2024, 0, 29, 15, 30),
    end: new Date(2024, 0, 29, 17, 0),
    roomId: 3,
  },
  // Meeting room 2
  {
    id: 6,
    title: "Interview",
    start: new Date(2024, 0, 29, 10, 0),
    end: new Date(2024, 0, 29, 11, 30),
    roomId: 4,
  },
  {
    id: 7,
    title: "Team Review",
    start: new Date(2024, 0, 29, 14, 0),
    end: new Date(2024, 0, 29, 15, 0),
    roomId: 4,
  },
];

const locales = {
  ja: ja,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

type Event = typeof SAMPLE_EVENTS[number];

export default function RoomDailyCalendar() {
  const [date, setDate] = useState(new Date(2024, 0, 29));
  const [events, setEvents] = useState<Event[]>(SAMPLE_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const resources = ROOMS.map((room) => ({
    resourceId: room.id,
    resourceTitle: room.name,
  }));

  // イベントごとに部屋の色を割り当て
  const eventPropGetter = (event: Event) => {
    const room = ROOMS.find((r) => r.id === event.roomId);
    return {
      style: {
        backgroundColor: room?.color ?? "#2563eb",
        color: "#fff",
        borderRadius: "0.375rem",
        border: "none",
        fontWeight: 500,
      },
      className: "border-0",
    };
  };

  // react-big-calendar の onSelectEvent ハンドラ
  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  // ScheduleDetailDialog でイベントを更新したときのハンドラ
  const handleSave = (updated: Event) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === updated.id ? updated : ev))
    );
    setSelectedEvent(null);
  };

  // スロット線を薄いグレーにカスタマイズ
  const slotPropGetter = () => ({
    style: {
      borderBottom: "1px solid #e5e7eb", // Tailwindのgray-200相当
    },
  });

  const selectedRoom = selectedEvent && ROOMS.find(r => r.id === selectedEvent.roomId);

  return (
    <div className="p-4 bg-white rounded shadow">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={Views.DAY}
        views={['day', 'agenda']}
        step={20}
        timeslots={1}
        date={date}
        onNavigate={setDate}
        min={new Date(2024, 0, 29, 9, 0)}
        max={new Date(2024, 0, 29, 18, 0)}
        resources={resources}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        eventPropGetter={eventPropGetter}
        style={{ height: 700 }}
        resourceAccessor={(event: Event) => event.roomId}
        onSelectEvent={handleSelectEvent}
        slotPropGetter={slotPropGetter}
      />
      <div className="flex gap-6 mt-6">
        {ROOMS.map((room) => (
          <div key={room.id} className="flex items-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded"
              style={{ backgroundColor: room.color }}
            ></span>
            <span className="text-sm">{room.name}</span>
          </div>
        ))}
      </div>
      <ScheduleDetailDialog
        open={dialogOpen}
        onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) setSelectedEvent(null);
        }}
        event={selectedEvent}
        roomName={selectedRoom?.name}
        rooms={ROOMS}
        onSave={handleSave}
      />
    </div>
  );
}