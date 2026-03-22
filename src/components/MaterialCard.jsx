import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export function MaterialCard({ material, required, waste, total, unit, wastePercentage }) {
  const isHighWaste = parseFloat(wastePercentage) > 8.0;

  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.15 }} className="h-full">
      <Card className="h-full bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden group">
        <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
          <CardTitle className="text-[15px] flex justify-between items-center text-slate-900 font-semibold">
            {material}
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isHighWaste ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
              {wastePercentage}% Waste
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-2.5 mt-1">
            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
              <span className="text-slate-500 text-[13px] font-medium">Required</span>
              <span className="font-semibold text-slate-900 text-sm">{required} <span className="text-slate-400 text-xs font-normal">{unit}</span></span>
            </div>
            <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
              <span className={`text-[13px] ${isHighWaste ? 'font-semibold text-red-600' : 'font-medium text-slate-500'}`}>Est. Waste</span>
              <span className={`font-semibold text-sm ${isHighWaste ? 'text-red-600' : 'text-slate-700'}`}>+{waste} <span className={`text-xs font-normal ${isHighWaste ? 'text-red-400' : 'text-slate-400'}`}>{unit}</span></span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-semibold text-[13px] text-slate-900">Total Yield</span>
              <span className="font-bold text-base text-primary">{total} <span className="text-xs font-normal text-primary/70">{unit}</span></span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
