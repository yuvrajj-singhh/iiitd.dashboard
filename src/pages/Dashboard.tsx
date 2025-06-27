
import { CGPACard } from "@/components/dashboard/CGPACard";
import { ProgramCreditsCard } from "@/components/dashboard/ProgramCreditsCard";
import { CompletionChart } from "@/components/dashboard/CompletionChart";
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CompletionChart />
        </div>
      </div>
    </div>
  );
}
