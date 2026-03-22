import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { alternativesData } from "../data/alternativesData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { CheckCircle2, Leaf } from 'lucide-react';

export function AlternativesTabs() {
  const materials = Object.keys(alternativesData);
  const defaultTab = materials[0];

  return (
    <Card className="glass-panel w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-primary" />
          Smart Alternatives
        </CardTitle>
        <CardDescription>Sustainable & cost-effective material substitutes</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={defaultTab} className="w-full">
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <TabsList className="bg-muted min-w-max">
              {materials.map(mat => (
                <TabsTrigger key={mat} value={mat} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-w-[100px] font-medium">
                  {mat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {materials.map(mat => (
            <TabsContent key={mat} value={mat} className="mt-4 space-y-4">
              {alternativesData[mat].map((alt, i) => (
                <div key={i} className="bg-card/40 rounded-lg p-5 border border-border transition-all hover:bg-card/60">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {alt.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{alt.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-3 rounded-md border border-primary/10">
                      <span className="text-xs font-semibold uppercase text-primary mb-1 block">Benefits</span>
                      <p className="text-sm leading-relaxed text-foreground">{alt.benefits}</p>
                    </div>
                    <div className="bg-accent/5 p-3 rounded-md border border-accent/10">
                      <span className="text-xs font-semibold uppercase text-accent mb-1 block">
                        Comparison vs Traditional
                      </span>
                      <p className="text-sm leading-relaxed text-foreground">{alt.comparison}</p>
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
