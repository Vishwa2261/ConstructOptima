import { materialsData } from "../data/materialsData";
import { wasteData } from "../data/wasteData";

export function calculateMaterials(buildingType, areaSqFt) {
  if (!buildingType || !areaSqFt || isNaN(areaSqFt)) {
    return [];
  }

  const materials = materialsData[buildingType];
  const buildingWaste = wasteData[buildingType];
  if (!materials || !buildingWaste) return [];

  return materials.map(item => {
    // 1. Calculate Average Requirement per sq ft
    const avgRequirement = (item.min + item.max) / 2;
    
    // 2. Total Required (Net)
    let required = avgRequirement * areaSqFt;

    // 3. Calculate Waste
    const wasteRange = buildingWaste[item.name] || [5, 5]; 
    const avgWastePct = (wasteRange[0] + wasteRange[1]) / 2 / 100;
    const wasteQuantity = required * avgWastePct;

    // 4. Total Gross Requirement
    const total = required + wasteQuantity;

    return {
      material: item.name,
      required: parseFloat(required.toFixed(2)),
      waste: parseFloat(wasteQuantity.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
      unit: item.unit,
      wastePercentage: (avgWastePct * 100).toFixed(1),
    };
  });
}
