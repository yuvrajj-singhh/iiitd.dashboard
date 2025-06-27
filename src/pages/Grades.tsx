
import { Printer, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    slNo: 1,
    course: "COM101-Communication Skills-Lecture-",
    courseType: "Mandatory (Core)",
    credit: 4,
    grade: "B-",
    gradePoint: 7
  },
  {
    slNo: 2,
    course: "CSE101-Introduction to Programming-Lecture-",
    courseType: "Mandatory (Core)",
    credit: 4,
    grade: "C",
    gradePoint: 6
  },
  {
    slNo: 3,
    course: "DES102-Introduction to HCI-Lecture-",
    courseType: "Mandatory (Core)",
    credit: 4,
    grade: "C-",
    gradePoint: 5
  },
  {
    slNo: 4,
    course: "ECE111-Digital Circuits-Lecture-",
    courseType: "Mandatory (Core)",
    credit: 4,
    grade: "D",
    gradePoint: 4
  },
  {
    slNo: 5,
    course: "MTH100-Maths I-Lecture-",
    courseType: "Mandatory (Core)",
    credit: 4,
    grade: "F",
    gradePoint: 2
  }
];

export default function Grades() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Grades</h1>
          <p className="text-gray-600">Home / Grades</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer size={16} />
          </Button>
          <Button variant="outline">
            <Download size={16} />
          </Button>
          <Button variant="outline">
            <FileText size={16} />
          </Button>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded mb-6">
        <p className="text-green-800">Student status is active.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-indigo-600 text-white p-4">
            <h2 className="font-semibold">July 2024/BTech/CSD-IITD/Semester 1</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sl No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade Point
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course.slNo} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.slNo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {course.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.courseType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.credit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {course.grade}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {course.gradePoint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-between">
            <span className="text-sm font-medium text-gray-900">SGPA: 4.80</span>
            <span className="text-sm font-medium text-gray-900">CGPA: 5.50</span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-indigo-600 text-white p-4">
            <h2 className="font-semibold">July 2024/BTech/CSD-IITD/Semester 2</h2>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-indigo-600 text-white p-4">
            <h2 className="font-semibold">July 2024/BTech/CSD-IITD/Summer Term 1</h2>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <p className="text-sm text-gray-700"><strong>Note:</strong></p>
        <p className="text-sm text-gray-700">
          1. (*)-Grades have not been given or frozen for one or more subjects for this student. Hence SGPA and CGPA not calculated.
        </p>
      </div>
    </div>
  );
}
