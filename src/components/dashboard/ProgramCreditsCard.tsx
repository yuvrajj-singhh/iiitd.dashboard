
import { BookOpen } from "lucide-react";

export function ProgramCreditsCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Program Credits</h3>
        <BookOpen className="w-5 h-5 text-indigo-600" />
      </div>
      <div className="text-4xl font-bold text-indigo-600 mb-2">
        36 <span className="text-lg text-gray-500">/999</span>
      </div>
    </div>
  );
}
