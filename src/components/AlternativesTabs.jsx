import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { alternativesData } from "../data/alternativesData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CheckCircle2, Leaf } from 'lucide-react';

export function AlternativesTabs() {
  const materials = Object.keys(alternativesData);
  const defaultTab = materials[0];

  return (
    <Card className="w-full bg-white border-slate-200 shadow-sm rounded-xl">
      <CardHeader className="pb-4 border-b border-slate-100">
        <CardTitle className="flex items-center gap-2 text-lg text-slate-900 font-semibold">
          <Leaf className="w-5 h-5 text-primary" />
          Smart Alternatives
        </CardTitle>
        <CardDescription className="text-sm text-slate-500 mt-1">Sustainable & cost-effective material substitutes</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="overflow-x-auto pb-3 scrollbar-none">
            <TabsList className="bg-slate-100 p-1 min-w-max rounded-lg">
              {materials.map(mat => (
                <TabsTrigger key={mat} value={mat} className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-600 min-w-[100px] font-medium text-[13px] rounded-md transition-all">
                  {mat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {materials.map(mat => (
            <TabsContent key={mat} value={mat} className="mt-6 space-y-5">
              {alternativesData[mat].map((alt, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="text-[17px] font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {alt.name}
                  </h3>
                  <p className="text-[14.5px] text-slate-600 mb-6 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">{alt.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold tracking-widest uppercase text-primary mb-2.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Primary Benefits
                      </span>
                      <p className="text-[14.5px] leading-relaxed text-slate-700 font-medium">{alt.benefits}</p>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold tracking-widest uppercase text-slate-500 mb-2.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Comparison Benchmark
                      </span>
                      <p className="text-[14.5px] leading-relaxed text-slate-700 font-medium">{alt.comparison}</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
