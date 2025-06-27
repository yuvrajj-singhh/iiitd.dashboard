
export default function TADetails() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">TA Details</h1>
        <p className="text-gray-600">Home / TA Details</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 font-medium">
          TA details for / 2024638 Yuvraj Singh / July 2024 / BTech / CSD / Summer Term 1
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-green-800 font-medium">
          Student status is active.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">July 2024/BTech/CSD-IITD/Semester 1</h3>
            <span className="text-red-600 font-medium">Not Assigned to Any Course as TA..!!</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">July 2024/BTech/CSD-IITD/Semester 2</h3>
            <span className="text-red-600 font-medium">Not Assigned to Any Course as TA..!!</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">July 2024/BTech/CSD-IITD/Summer Term 1</h3>
            <span className="text-red-600 font-medium">Not Assigned to Any Course as TA..!!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
