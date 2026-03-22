import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

// Distinct unique vibrant colors for up to 15 different materials
const COLORS = [
  '#ef4444', '#f97316', '#f59e0b', '#84cc16',
  '#22c55e', '#10b981', '#14b8a6', '#0ea5e9', '#3b82f6',
  '#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'
];

export function WasteChart({ data }) {
  if (!data || data.length === 0) return (
    <Card className="h-full flex flex-col justify-center items-center p-6 text-slate-500 min-h-[300px] bg-white border-slate-200 shadow-sm rounded-xl">
      No data available
    </Card>
  );

  const chartData = data.map((item) => ({
    name: item.material,
    value: parseFloat(item.wastePercentage),
  })).filter(item => item.value > 0);

  return (
    <Card className="flex flex-col bg-white border-slate-200 shadow-sm rounded-xl overflow-hidden w-full">
      <CardHeader className="pb-4 border-b border-slate-100 bg-slate-50/30">
        <CardTitle className="text-lg text-slate-900 font-semibold">Waste Factor Analysis</CardTitle>
        <CardDescription className="text-sm text-slate-500 mt-1">Relative material waste percentages</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[380px] p-2 sm:p-4 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="45%"
              innerRadius="46%"
              outerRadius="82%"
              paddingAngle={2}
              dataKey="value"
              stroke="transparent"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', color: '#0f172a', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#0f172a', fontWeight: 600 }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                fontSize: '11px',
                color: '#475569',
                fontWeight: 500,
                paddingTop: '10px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
