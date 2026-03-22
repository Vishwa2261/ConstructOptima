import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { techniquesData } from "../data/techniquesData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Lightbulb } from 'lucide-react';

export function TechniqueAccordion() {
  const materials = Object.keys(techniquesData);

  return (
    <Card className="w-full bg-white border-slate-200 shadow-sm rounded-xl">
      <CardHeader className="pb-4 border-b border-slate-100">
        <CardTitle className="flex items-center gap-2 text-lg text-slate-900 font-semibold">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          Optimization Techniques
        </CardTitle>
        <CardDescription className="text-sm text-slate-500 mt-1">Actionable methodologies to minimize physical material waste</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <Accordion type="single" collapsible className="w-full">
          {materials.map((material, index) => (
            <AccordionItem value={material} key={index} className="border-slate-100">
              <AccordionTrigger className="text-[15px] font-medium text-slate-700 hover:text-primary transition-colors py-4 px-2">
                {material} Management
              </AccordionTrigger>
              <AccordionContent className="px-2">
                <div className="space-y-5 pt-2 pb-4">
                  {techniquesData[material].map((tech, i) => (
                    <div key={i} className="pl-4 border-l-2 border-primary/40 relative">
                      <div className="absolute w-2 h-2 rounded-full bg-primary/20 -left-[5px] top-1.5 border border-primary/50" />
                      <h4 className="font-semibold text-slate-900 text-[15px] leading-snug">{tech.title}</h4>
                      <p className="text-[13.5px] text-slate-600 mt-1.5 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
