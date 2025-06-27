
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Semester 1', earned: 16, registered: 20 },
  { name: 'Semester 2', earned: 20, registered: 20 },
];

export function CompletionChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Completion Rate</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              domain={[0, 24]}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="earned" 
              stroke="#22c55e" 
              strokeWidth={3}
              name="Earned Credits"
              dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="registered" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="Registered Credits"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
