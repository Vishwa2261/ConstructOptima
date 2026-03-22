import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppStore } from '../store/useAppStore';
import { calculateMaterials } from '../utils/calculateMaterials';
import { buildingTypes } from '../data/materialsData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Calculator } from 'lucide-react';

const formSchema = z.object({
  buildingType: z.string().min(1, "Please select a building type"),
  area: z.number().min(100, "Area must be at least 100 sq.ft").max(1000000, "Area too large"),
});

export function CalculatorForm() {
  const { setCalculationParams, buildingType, areaSqFt } = useAppStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buildingType: buildingType || buildingTypes[0],
      area: areaSqFt || 1000,
    }
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = calculateMaterials(data.buildingType, data.area);
        setCalculationParams(data.buildingType, data.area, results);
        
        // Smooth scroll to results
        document.getElementById('results-dashboard')?.scrollIntoView({ behavior: 'smooth' });
        
        resolve();
      }, 500);
    });
  };

  return (
    <Card className="glass shadow-2xl border-white/10 w-full max-w-xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calculator className="text-primary w-6 h-6" />
          Project Parameters
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Enter your project details to estimate structural material requirements.
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-7">
          <div className="space-y-3 relative">
            <Label htmlFor="buildingType" className="text-base font-semibold">Building Type</Label>
            <Select id="buildingType" {...register("buildingType")} className="h-12 text-[15px]">
              {buildingTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </Select>
            {errors.buildingType && (
              <p className="text-sm text-destructive absolute -bottom-6 left-0">{errors.buildingType.message}</p>
            )}
          </div>

          <div className="space-y-3 relative">
            <div className="flex justify-between items-center">
              <Label htmlFor="area" className="text-base font-semibold">Total Floor Area</Label>
              <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                Sq.Ft
              </span>
            </div>
            <Input 
              id="area" 
              type="number" 
              placeholder="e.g. 1500" 
              className="text-lg py-6" 
              {...register("area", { valueAsNumber: true })} 
            />
            {errors.area && (
              <p className="text-sm text-destructive absolute -bottom-6 left-0">{errors.area.message}</p>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="bg-muted/20 pt-6 mt-4 border-t border-border">
          <Button type="submit" className="w-full text-lg h-14 tracking-wide font-medium bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 shadow-lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Optimizing Structure...
              </span>
            ) : "Calculate Material Matrix"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
