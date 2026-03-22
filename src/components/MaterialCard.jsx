import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export function MaterialCard({ material, required, waste, total, unit, wastePercentage }) {
  const isHighWaste = parseFloat(wastePercentage) > 5.0;

  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
      <Card className={`h-full border-t-4 ${isHighWaste ? 'border-t-destructive' : 'border-t-primary'} glass-panel`}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex justify-between items-center">
            {material}
            <span className={`text-sm font-normal px-2 py-1 rounded ${isHighWaste ? 'bg-destructive/10 text-destructive' : 'bg-muted text-muted-foreground'}`}>
              {wastePercentage}% Waste
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-muted-foreground text-sm">Required Min.</span>
              <span className="font-medium">{required} <span className="text-muted-foreground text-xs">{unit}</span></span>
            </div>
            <div className={`flex justify-between items-center border-b border-border pb-2 ${isHighWaste ? 'text-destructive/90' : 'text-muted-foreground text-sm'}`}>
              <span className={isHighWaste ? 'font-medium' : ''}>Est. Waste</span>
              <span className="font-medium">+{waste} <span className="text-xs">{unit}</span></span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-xl text-primary">{total} {unit}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
