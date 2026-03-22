import { materialsData } from "../data/materialsData";
import { wasteData, buildingWasteMultipliers } from "../data/wasteData";

export function calculateMaterials(buildingType, areaSqFt) {
  if (!buildingType || !areaSqFt || isNaN(areaSqFt)) {
    return [];
  }

  const materials = materialsData[buildingType];
  if (!materials) return [];

  const wasteMultiplier = buildingWasteMultipliers[buildingType] || 1.0;

  return materials.map(item => {
    const avgRequirement = (item.min + item.max) / 2;
    const required = avgRequirement * areaSqFt;

    const baseWastePct = wasteData[item.name] || 0.05;
    const finalWastePct = baseWastePct * wasteMultiplier;
    const wasteQuantity = required * finalWastePct;

    const total = required + wasteQuantity;

    return {
      material: item.name,
      required: parseFloat(required.toFixed(2)),
      waste: parseFloat(wasteQuantity.toFixed(2)),
      total: parseFloat(total.toFixed(2)),
      unit: item.unit,
      wastePercentage: (finalWastePct * 100).toFixed(1),
    };
  });
}
