
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("My Profile");

  const tabs = [
    "My Profile",
    "Family Details", 
    "Contact Details",
    "Additional Details",
    "Mentor Details"
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600 mb-4">You can see a summary of your profiles.</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "My Profile" && (
        <div className="space-y-6">
          {/* General Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                General Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gray-100 text-gray-600 text-xl">
                      YS
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Yuvraj Singh
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contact No.</p>
                  <p className="font-medium">9910445032</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">yuvraj2463@iitd.ac.in</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Unique Identification Number</p>
                  <p className="font-medium">505091005503</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                  <p className="font-medium">Dec 18, 2006</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Marital Status</p>
                  <p className="font-medium">Single</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Blood Group</p>
                  <p className="font-medium">NA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Nationality</p>
                  <p className="font-medium">NA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Gender</p>
                  <p className="font-medium">Male</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Passport No.</p>
                <p className="font-medium">NA</p>
              </div>
            </CardContent>
          </Card>

          {/* Academic Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Academic Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Program</p>
                  <p className="font-medium">July 2024/BTech/CSD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Roll Number</p>
                  <p className="font-medium">2024638</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Batch</p>
                  <p className="font-medium">Aug 1, 2024 - Jul 31, 2028</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Enrollment No.</p>
                  <p className="font-medium">NA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab !== "My Profile" && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">
              {activeTab} content will be displayed here.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
