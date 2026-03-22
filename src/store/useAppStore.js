import { create } from 'zustand';

export const useAppStore = create((set) => ({
  buildingType: '',
  areaSqFt: 0,
  results: [],
  setCalculationParams: (buildingType, areaSqFt, results) => 
    set({ buildingType, areaSqFt, results }),
  reset: () => set({ buildingType: '', areaSqFt: 0, results: [] })
}));
