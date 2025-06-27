
import { CGPACard } from "@/components/dashboard/CGPACard";
import { ProgramCreditsCard } from "@/components/dashboard/ProgramCreditsCard";
import { EventsCard } from "@/components/dashboard/EventsCard";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CGPACard />
        <ProgramCreditsCard />
        <div className="md:col-span-2">
          <EventsCard />
        </div>
      </div>
    </div>
  );
}
