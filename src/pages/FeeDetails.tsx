
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeeDetails() {
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Fee Details</h1>
          <p className="text-gray-600">Home / My Fee Details</p>
        </div>
        <Button variant="outline" className="bg-green-500 hover:bg-green-600 text-white border-green-500">
          <Printer size={16} className="mr-2" />
          Print
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex items-center gap-2">
            <span className="text-lg">👤</span>
            <h2 className="font-semibold">Student Info</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Roll No :</label>
                <p className="text-gray-900">2024638 Yuvraj Singh</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Student Name :</label>
                <p className="text-gray-900">Yuvraj Singh</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Admission Year :</label>
                <p className="text-gray-900">July 2024</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Term :</label>
                <p className="text-gray-900">July 2024/BTech/CSD-IITD/Summer Term 1</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Fee Pattern :</label>
                <p className="text-gray-900">Fee Pattern of July 2024/BTech/CSD</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">All Amounts In :</label>
                <p className="text-gray-900">₹ Currency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex items-center gap-2">
            <span className="text-lg">💰</span>
            <h2 className="font-semibold">Student Fee Details</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Total Due(Regular+Credit Based+Extra) Amount :</label>
              <p className="text-gray-900 font-semibold">0</p>
            </div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-500">Fine Amount :</label>
              <p className="text-gray-900 font-semibold">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
