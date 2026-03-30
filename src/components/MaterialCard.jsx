import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export function MaterialCard({ material, required, waste, total, unit, wastePercentage }) {
  const getStatus = () => {
    const p = parseFloat(wastePercentage);
    let thresholds = { amber: 5.0, red: 8.0 };
    
    if (["Water", "Timber"].includes(material)) {
      thresholds = { amber: 10.0, red: 15.0 };
    } else if (material === "Tiles") {
      thresholds = { amber: 8.0, red: 12.0 };
    }
    
    if (p >= thresholds.red) return "alert";
    if (p >= thresholds.amber) return "warning";
    return "success";
  };

  const status = getStatus();
  
  const statusStyles = {
    success: {
      badge: "bg-emerald-50 text-emerald-600 border-emerald-200",
      text: "text-emerald-600",
      label: "text-slate-500",
      value: "text-slate-700",
      subtext: "text-emerald-400"
    },
    warning: {
      badge: "bg-amber-50 text-amber-600 border-amber-200",
      text: "text-amber-600",
      label: "text-amber-600 font-semibold",
      value: "text-amber-600",
      subtext: "text-amber-400"
    },
    alert: {
      badge: "bg-red-50 text-red-600 border-red-200",
      text: "text-red-600",
      label: "text-red-600 font-semibold",
      value: "text-red-600",
      subtext: "text-red-400"
    }
  };

  const style = statusStyles[status];

  return (
    <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.15 }} className="h-full">
      <Card className="h-full bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden group">
        <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
          <CardTitle className="text-[15px] flex justify-between items-center text-slate-900 font-semibold">
            {material}
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${style.badge}`}>
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
              <span className={`text-[13px] ${style.label}`}>Est. Waste</span>
              <span className={`font-semibold text-sm ${style.value}`}>+{waste} <span className={`text-xs font-normal ${style.subtext}`}>{unit}</span></span>
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
