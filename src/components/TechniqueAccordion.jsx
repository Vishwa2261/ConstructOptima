import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { techniquesData } from "../data/techniquesData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Lightbulb } from 'lucide-react';

export function TechniqueAccordion() {
  const materials = Object.keys(techniquesData);

  return (
    <Card className="glass-panel w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-accent" />
          Optimization Techniques
        </CardTitle>
        <CardDescription>Learn how to minimize waste for specific materials</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {materials.map((material, index) => (
            <AccordionItem value={material} key={index}>
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                {material} Management
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {techniquesData[material].map((tech, i) => (
                    <div key={i} className="pl-4 border-l-2 border-primary/50">
                      <h4 className="font-semibold text-foreground">{tech.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{tech.description}</p>
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
