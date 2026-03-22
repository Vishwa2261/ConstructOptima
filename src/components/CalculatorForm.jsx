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
        
        document.getElementById('results-dashboard')?.scrollIntoView({ behavior: 'smooth' });
        resolve();
      }, 400);
    });
  };

  return (
    <Card className="bg-white shadow-sm border border-slate-200 w-full max-w-xl mx-auto overflow-hidden relative rounded-xl">
      <CardHeader className="pb-6 border-b border-slate-100 bg-slate-50/50">
        <CardTitle className="text-xl flex items-center gap-2 text-slate-900 font-semibold">
          <Calculator className="text-primary w-5 h-5" />
          Project Parameters
        </CardTitle>
        <CardDescription className="text-sm text-slate-500 mt-1">
          Specify building type and total floor area.
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6 pt-6 pb-2">
          <div className="space-y-2 relative">
            <Label htmlFor="buildingType" className="text-sm font-medium text-slate-700">Building Type</Label>
            <Select id="buildingType" {...register("buildingType")} className="h-11 bg-white border-slate-200 text-slate-900 focus:ring-primary/20 focus:border-primary shadow-sm rounded-lg text-sm">
              {buildingTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
            {errors.buildingType && (
              <p className="text-xs text-red-500 absolute -bottom-5 left-0 font-medium">{errors.buildingType.message}</p>
            )}
          </div>

          <div className="space-y-2 relative">
            <div className="flex justify-between items-center">
              <Label htmlFor="area" className="text-sm font-medium text-slate-700">Total Floor Area</Label>
              <span className="text-[10px] font-bold tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase border border-slate-200">
                Sq.Ft
              </span>
            </div>
            <Input 
              id="area" 
              type="number" 
              placeholder="e.g. 1500" 
              className="h-11 bg-white border-slate-200 text-slate-900 focus:ring-primary/20 focus:border-primary shadow-sm rounded-lg text-sm" 
              {...register("area", { valueAsNumber: true })} 
            />
            {errors.area && (
              <p className="text-xs text-red-500 absolute -bottom-5 left-0 font-medium">{errors.area.message}</p>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-6 pb-6 mt-2">
          <Button type="submit" className="w-full h-11 text-sm font-semibold shadow-sm transition-all rounded-lg text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing Data...
              </span>
            ) : "Calculate Material Matrix"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
