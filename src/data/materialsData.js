export const materialsData = {
  Residential: [
    { name: "Cement", min: 0.4, max: 0.5, unit: "bags" },
    { name: "Sand", min: 1.8, max: 2.0, unit: "cu.ft" },
    { name: "Aggregates", min: 1.35, max: 1.5, unit: "cu.ft" },
    { name: "Steel", min: 2.5, max: 3.5, unit: "kg" },
    { name: "Bricks", min: 8, max: 10, unit: "nos" },
  ],
  Educational: [
    { name: "Cement", min: 0.5, max: 0.6, unit: "bags" },
    { name: "Sand", min: 2.0, max: 2.2, unit: "cu.ft" },
    { name: "Aggregates", min: 1.5, max: 1.7, unit: "cu.ft" },
    { name: "Steel", min: 3.5, max: 4.5, unit: "kg" },
    { name: "Bricks", min: 10, max: 12, unit: "nos" },
  ],
  Institutional: [
    { name: "Cement", min: 0.5, max: 0.6, unit: "bags" },
    { name: "Sand", min: 2.2, max: 2.5, unit: "cu.ft" },
    { name: "Aggregates", min: 1.6, max: 1.8, unit: "cu.ft" },
    { name: "Steel", min: 4.0, max: 5.0, unit: "kg" },
    { name: "Bricks", min: 12, max: 14, unit: "nos" },
  ],
  Assembly: [
    { name: "Cement", min: 0.6, max: 0.7, unit: "bags" },
    { name: "Sand", min: 2.5, max: 2.8, unit: "cu.ft" },
    { name: "Aggregates", min: 1.8, max: 2.0, unit: "cu.ft" },
    { name: "Steel", min: 4.5, max: 6.0, unit: "kg" },
    { name: "Bricks", min: 8, max: 10, unit: "nos" },
  ],
  Business: [
    { name: "Cement", min: 0.45, max: 0.55, unit: "bags" },
    { name: "Sand", min: 1.9, max: 2.1, unit: "cu.ft" },
    { name: "Aggregates", min: 1.4, max: 1.6, unit: "cu.ft" },
    { name: "Steel", min: 3.5, max: 4.5, unit: "kg" },
    { name: "Bricks", min: 9, max: 11, unit: "nos" },
  ],
  Mercantile: [
    { name: "Cement", min: 0.5, max: 0.6, unit: "bags" },
    { name: "Sand", min: 2.0, max: 2.3, unit: "cu.ft" },
    { name: "Aggregates", min: 1.5, max: 1.8, unit: "cu.ft" },
    { name: "Steel", min: 4.0, max: 5.5, unit: "kg" },
    { name: "Bricks", min: 10, max: 12, unit: "nos" },
  ],
  Industrial: [
    { name: "Cement", min: 0.6, max: 0.8, unit: "bags" },
    { name: "Sand", min: 2.5, max: 3.0, unit: "cu.ft" },
    { name: "Aggregates", min: 2.0, max: 2.5, unit: "cu.ft" },
    { name: "Steel", min: 5.0, max: 7.0, unit: "kg" },
    { name: "Bricks", min: 6, max: 8, unit: "nos" },
  ],
  Storage: [
    { name: "Cement", min: 0.5, max: 0.6, unit: "bags" },
    { name: "Sand", min: 2.0, max: 2.5, unit: "cu.ft" },
    { name: "Aggregates", min: 1.8, max: 2.2, unit: "cu.ft" },
    { name: "Steel", min: 3.0, max: 5.0, unit: "kg" },
    { name: "Bricks", min: 12, max: 15, unit: "nos" },
  ],
  Hazardous: [
    { name: "Cement", min: 0.8, max: 1.0, unit: "bags" },
    { name: "Sand", min: 3.0, max: 3.5, unit: "cu.ft" },
    { name: "Aggregates", min: 2.5, max: 3.0, unit: "cu.ft" },
    { name: "Steel", min: 7.0, max: 10.0, unit: "kg" },
    { name: "Bricks", min: 15, max: 20, unit: "nos" },
  ]
};

export const buildingTypes = Object.keys(materialsData);
