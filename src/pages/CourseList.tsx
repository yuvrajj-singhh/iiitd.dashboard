
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, Presentation, MessageSquare, GraduationCap } from "lucide-react";

export default function CourseList() {
  const [selectedTerm, setSelectedTerm] = useState("");

  const courses = [
    {
      code: "MSC481",
      name: "Self Growth",
      classType: "Outside Institute",
      credits: "1",
      registrationType: "Thesis"
    },
    {
      code: "MSC481",
      name: "Self Growth",
      classType: "Outside Institute", 
      credits: "1",
      registrationType: "Thesis"
    },
    {
      code: "MSC491",
      name: "Community Work",
      classType: "Outside Institute",
      credits: "1", 
      registrationType: "Thesis"
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Course List</h1>
        <p className="text-gray-600">Home / My Course List</p>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">Please select term to see previous term data.</p>
        
        <div className="flex items-center gap-4 mb-6">
          <Select value={selectedTerm} onValueChange={setSelectedTerm}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Summer Term 1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="summer1">Summer Term 1</SelectItem>
              <SelectItem value="summer2">Summer Term 2</SelectItem>
              <SelectItem value="semester1">Semester 1</SelectItem>
              <SelectItem value="semester2">Semester 2</SelectItem>
            </SelectContent>
          </Select>
          
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Result Not Declared Yet
          </Badge>

          <Button variant="outline" className="ml-auto">
            <FileText className="w-4 h-4 mr-2" />
            Syllabus Details
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-4 border-b">
              <h3 className="font-semibold text-blue-900">
                Code - {course.code} • Course - {course.name}
              </h3>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Class Type</p>
                  <p className="font-medium">{course.classType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Credits</p>
                  <p className="font-medium">{course.credits}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Registration Type</p>
                  <p className="font-medium">{course.registrationType}</p>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Time Table
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Attendance
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Assignment
                </Button>
                <Button variant="outline" size="sm">
                  <Presentation className="w-4 h-4 mr-2" />
                  Lesson Plan
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Course Feedback
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
