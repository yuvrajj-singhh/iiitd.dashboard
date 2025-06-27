
import { TrendingUp } from "lucide-react";

export function CGPACard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">CGPA</h3>
        <TrendingUp className="w-5 h-5 text-indigo-600" />
      </div>
      <div className="text-4xl font-bold text-indigo-600 mb-2">8.40</div>
    </div>
  );
}
