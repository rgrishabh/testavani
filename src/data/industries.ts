// "Industries Served" from the previous site.
export const industries = [
  {
    name: 'Automotive',
    icon: 'car',
    text: 'Testing for OEM parts, coatings, rubbers and structural metals, including NPD testing support from concept to launch.',
    services: ['rubber-testing', 'mechanical-testing', 'metal-alloy-testing'],
  },
  {
    name: 'Aerospace',
    icon: 'plane',
    text: 'High-precision alloy, composite and fatigue analysis.',
    services: ['metallurgical-analysis', 'mechanical-testing', 'chemical-composition-analysis'],
  },
  {
    name: 'Construction',
    icon: 'building',
    text: 'Structural steel, rebar and building material qualification — including tiles, plywood and wood-based panels.',
    services: ['metal-alloy-testing', 'tile-ceramic-testing', 'plywood-wood-testing'],
  },
  {
    name: 'Pharmaceuticals',
    icon: 'flask',
    text: 'Packaging polymer compliance and material safety testing.',
    services: ['plastics-polymer-testing', 'chemical-composition-analysis'],
  },
  {
    name: 'Electronics',
    icon: 'chip',
    text: 'RoHS, REACH & PFAS testing for components and PCBs.',
    services: ['rohs-reach-pfas-testing'],
  },
  {
    name: 'Oil & Gas',
    icon: 'corrosion',
    text: 'Corrosion analysis, pipeline steel and coating testing.',
    services: ['corrosion-testing', 'metal-alloy-testing', 'metallurgical-analysis'],
  },
  {
    name: 'Manufacturing',
    icon: 'factory',
    text: 'QA/QC of raw materials, finished parts and assemblies — including utensils and kitchenware as per BIS requirements.',
    services: ['utensil-testing', 'hardness-testing', 'bis-oriented-testing'],
  },
  {
    name: 'Plastics & Polymers',
    icon: 'polymer',
    text: 'Full mechanical, thermal and chemical characterisation.',
    services: ['plastics-polymer-testing', 'rubber-testing'],
  },
] as const;

export const customers = [
  {
    name: 'Manufacturers',
    icon: 'factory',
    text: 'Raw material verification, in-process quality control and finished product testing.',
  },
  {
    name: 'Suppliers',
    icon: 'layers',
    text: 'Test reports showing that supplied materials and components meet the buyer’s specification.',
  },
  {
    name: 'OEMs',
    icon: 'cog',
    text: 'Material and component validation for product development and supplier approval.',
  },
] as const;

export const applications = [
  {
    name: 'Product development',
    icon: 'flask',
    text: 'Engineering and testing support during new product development — evaluating materials and prototypes against your targets.',
  },
  {
    name: 'Quality control',
    icon: 'gauge',
    text: 'Routine testing of incoming raw materials, production batches and finished products.',
  },
  {
    name: 'Material characterisation',
    icon: 'microscope',
    text: 'Identifying a material and measuring its chemical, physical and mechanical properties.',
  },
  {
    name: 'Failure investigation',
    icon: 'search',
    text: 'Root-cause analysis of failed parts using composition, mechanical and microstructural examination.',
  },
  {
    name: 'Compliance-oriented testing',
    icon: 'standard',
    text: 'Testing against the applicable IS/BIS, ASTM, ISO or customer-specified requirements.',
  },
] as const;
