import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Room = {
  id: number;
  name: string;
  color: string;
};
type EventData = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  roomId: number;
};

type ScheduleDetailDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: EventData | null;
  roomName?: string;
  rooms: Room[];
  onSave: (updated: EventData) => void;
};

export function ScheduleDetailDialog({
  open,
  onOpenChange,
  event,
  roomName,
  rooms,
  onSave,
}: ScheduleDetailDialogProps) {
  const [start, setStart] = React.useState<string>("");
  const [end, setEnd] = React.useState<string>("");
  const [room, setRoom] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    if (event) {
      setStart(event.start.toISOString().slice(0, 16));
      setEnd(event.end.toISOString().slice(0, 16));
      setRoom(event.roomId);
    }
  }, [event]);

  if (!event) return null;

  const handleSave = () => {
    if (start && end && room !== undefined) {
      onSave({
        ...event,
        start: new Date(start),
        end: new Date(end),
        roomId: room,
      });
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form className="space-y-4 pt-2" onSubmit={e => { e.preventDefault(); handleSave(); }}>
            <div>
              <Label htmlFor="room">部屋</Label>
              <Select value={room ? String(room) : ""} onValueChange={v => setRoom(Number(v))}>
                <SelectTrigger id="room" className="mt-1">
                  <SelectValue placeholder="部屋を選択" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map(r => (
                    <SelectItem value={String(r.id)} key={r.id}>
                      <span className="inline-block w-3 h-3 mr-2 rounded" style={{ background: r.color }}></span>
                      {r.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="start">開始</Label>
              <Input
                id="start"
                type="datetime-local"
                className="mt-1"
                value={start}
                onChange={e => setStart(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="end">終了</Label>
              <Input
                id="end"
                type="datetime-local"
                className="mt-1"
                value={end}
                onChange={e => setEnd(e.target.value)}
                required
              />
            </div>
          </form>
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            閉じる
          </Button>
          <Button onClick={handleSave} disabled={!start || !end || !room}>
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}