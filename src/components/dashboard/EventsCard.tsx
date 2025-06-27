
import { Calendar } from "lucide-react";

export function EventsCard() {
  return (
    <div className="bg-indigo-600 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Upcoming / Ongoing Events</h3>
        <Calendar className="w-5 h-5" />
      </div>
      <div className="text-right">
        <p className="text-sm opacity-90">My Calendar</p>
      </div>
    </div>
  );
}
