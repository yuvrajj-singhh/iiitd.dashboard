
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

export default function RegisterCourses() {
  const [batchTerm, setBatchTerm] = useState("");

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Register for Courses</h1>
        <p className="text-gray-600">Home / Register for Courses</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <div className="flex justify-between items-start">
            <p className="text-blue-800">
              Course registration dates are over. Registered course PDF will be enabled to download only when minimum credit/courses criteria is fulfilled (for approved courses only).
            </p>
            <Button variant="ghost" size="sm">
              <X size={16} />
            </Button>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex justify-between items-start">
            <p className="text-yellow-800">Please select Batch / Term Code!</p>
            <Button variant="ghost" size="sm">
              <X size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-indigo-600 text-white p-4 rounded-t-lg">
        <h2 className="font-semibold">Select Input</h2>
      </div>

      <div className="bg-gray-50 p-8 rounded-b-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium min-w-fit">
              Batch / Term Code
            </label>
            <Select value={batchTerm} onValueChange={setBatchTerm}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="--Select--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="july2024-btech-csd">July 2024/BTech/CSD-IITD/Summer Term 1</SelectItem>
                <SelectItem value="july2024-btech-csd-sem2">July 2024/BTech/CSD-IITD/Semester 2</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              fetch courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
