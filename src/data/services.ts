import type { ImageMetadata } from 'astro';
import imgPolymer from '../assets/images/polymer-testing.jpg';
import imgRubber from '../assets/images/rubber-testing.jpg';
import imgMetal from '../assets/images/metallurgical-analysis.jpg';
import imgPlywood from '../assets/images/plywood-testing.jpg';
import imgTile from '../assets/images/tile-testing.jpg';
import imgUtensil from '../assets/images/utensil-testing.jpg';
import imgBis from '../assets/images/chemical-analysis.jpg';
import imgChem from '../assets/images/chemical-analysis.jpg';
import imgMech from '../assets/images/mechanical-testing.jpg';
import imgCorrosion from '../assets/images/corrosion-testing.jpg';
import imgHardness from '../assets/images/hardness-testing.jpg';
import imgRohs from '../assets/images/rohs-reach-pfas.jpg';

export type IconName =
  | 'polymer' | 'rubber' | 'metal' | 'plywood' | 'tile' | 'utensil' | 'standard'
  | 'flask' | 'gauge' | 'microscope' | 'hardness' | 'corrosion' | 'chip';

export interface Service {
  slug: string;
  /** material = testing by material category; specialised = testing by discipline / compliance. */
  group: 'material' | 'specialised';
  name: string;
  shortName: string;
  icon: IconName;
  image: ImageMetadata;
  imageAlt: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  overview: string[];
  scopeLabel: string;
  scope: string[];
  tests: string[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'plastics-polymer-testing',
    group: 'material',
    name: 'Plastics & Polymer Testing',
    shortName: 'Plastics & Polymers',
    icon: 'polymer',
    image: imgPolymer,
    imageAlt: 'Plastic polymer granules used as raw material for moulded products',
    summary:
      'Testing and characterisation of plastic and polymer materials, components and finished products — from FTIR identification to melt flow, ageing and mechanical properties.',
    seoTitle: 'Plastics & Polymer Testing Lab in Greater Noida',
    seoDescription:
      'Plastic and polymer testing including FTIR material identification, melt flow index, tensile strength, impact, hardness, density, ash content and ageing — as per IS/BIS, ASTM and ISO methods.',
    overview: [
      'We test plastic and polymer raw materials, moulded components and finished products for manufacturers, compounders, OEMs and suppliers.',
      'Our polymer team — led by specialists in Plastic Technology — provides comprehensive analytical and mechanical testing for product development, including tensile strength, elongation, impact resistance, thermal analysis (TGA, DSC), melt flow index, FTIR and chemical resistance.',
      'We also support material identification, grade verification, incoming quality checks and investigation of in-service failures.',
    ],
    scopeLabel: 'What we test',
    scope: ['Plastic and polymer raw materials', 'Plastic components', 'Finished plastic products'],
    tests: [
      'Material identification by FTIR',
      'Melt Flow Index (MFI / MFR)',
      'Moisture content',
      'Hardness testing',
      'Impact testing',
      'Ozone resistance testing',
      'Tensile strength & elongation',
      'Density / specific gravity',
      'Ash content',
      'Heat ageing',
      'Accelerated ageing',
      'Dimensional & physical properties',
      'Thermal analysis (TGA, DSC)',
      'Chemical resistance',
      'Other chemical, physical and mechanical characterisation as per applicable standards',
    ],
    faqs: [
      {
        q: 'Can you identify an unknown plastic material?',
        a: 'Yes. We use FTIR (Fourier-transform infrared spectroscopy) for material identification, supported by tests such as density and ash content where needed.',
      },
      {
        q: 'Do you test finished plastic products as well as raw material?',
        a: 'Yes. We test raw materials, components and finished products, including dimensional, physical and mechanical properties.',
      },
    ],
  },
  {
    slug: 'rubber-testing',
    group: 'material',
    name: 'Rubber Testing',
    shortName: 'Rubber',
    icon: 'rubber',
    image: imgRubber,
    imageAlt: 'Black rubber seals and gaskets for engineering applications',
    summary:
      'Physical and mechanical testing of rubber compounds, finished rubber products and elastomeric materials, including ageing and ozone resistance.',
    seoTitle: 'Rubber Testing Lab — Tensile, Hardness, Ageing, Ozone',
    seoDescription:
      'Rubber and elastomer testing: tensile strength and elongation, hardness, tear strength, compression set, ozone resistance, heat and accelerated ageing, and density.',
    overview: [
      'We test rubber compounds, finished rubber products and elastomeric materials used in automotive, industrial and consumer applications.',
      'Testing covers properties before and after ageing, so you can see how a compound or component performs over time and under exposure.',
    ],
    scopeLabel: 'What we test',
    scope: ['Rubber compounds', 'Finished rubber products', 'Elastomeric materials'],
    tests: [
      'Tensile strength & elongation',
      'Hardness',
      'Tear strength',
      'Compression set',
      'Ozone resistance',
      'Heat ageing',
      'Accelerated ageing',
      'Change in physical properties after ageing',
      'Specific gravity / density',
      'Other applicable physical and mechanical tests',
    ],
    faqs: [
      {
        q: 'Can you measure how rubber properties change after ageing?',
        a: 'Yes. We carry out heat ageing and accelerated ageing, and report the change in physical properties such as tensile strength, elongation and hardness.',
      },
    ],
  },
  {
    slug: 'metal-alloy-testing',
    group: 'material',
    name: 'Metal & Alloy Testing',
    shortName: 'Metals & Alloys',
    icon: 'metal',
    image: imgMetal,
    imageAlt: 'Hardness testing of a metal specimen on a laboratory test machine',
    summary:
      'Chemical composition, mechanical properties, metallography and weld examination for metals, alloys and coated components.',
    seoTitle: 'Metal & Alloy Testing — Composition, Mechanical, Metallography',
    seoDescription:
      'Metal and alloy testing: chemical composition, tensile, yield/proof stress, elongation, bend, hardness, impact, metallography, microstructure and weld examination.',
    overview: [
      'We determine the elemental composition of metals and alloys to confirm they meet the specified grade, and evaluate strength, hardness and toughness through mechanical testing.',
      'Metallographic examination reveals microstructure, grain size, defects and the effectiveness of heat treatment. Our metallurgy team also supports weld examination and metal failure investigation.',
    ],
    scopeLabel: 'What we test',
    scope: ['Ferrous and non-ferrous metals', 'Alloys', 'Welded joints', 'Coated components'],
    tests: [
      'Chemical composition',
      'Tensile testing',
      'Fatigue testing',
      'Yield / proof stress',
      'Elongation',
      'Bend testing',
      'Hardness testing (Brinell, Rockwell, Vickers)',
      'Impact testing',
      'Metallography',
      'Microstructure examination',
      'Weld & weld penetration examination',
      'Coating-related testing',
      'Material identification and characterisation',
    ],
    faqs: [
      {
        q: 'Which hardness methods do you use?',
        a: 'We measure the hardness of metals using Brinell, Rockwell and Vickers methods, depending on the material and the applicable standard.',
      },
      {
        q: 'Do you help investigate metal failures?',
        a: 'Yes. Our metallurgy team uses composition analysis, mechanical testing and microstructure examination to help identify the cause of a failure.',
      },
    ],
  },
  {
    slug: 'plywood-wood-testing',
    group: 'material',
    name: 'Plywood & Wood Testing',
    shortName: 'Plywood & Wood',
    icon: 'plywood',
    image: imgPlywood,
    imageAlt: 'Edge of stacked plywood sheets showing the veneer layers',
    summary:
      'Physical and mechanical testing of plywood, wood and wood-based panels — moisture, density, bending strength, glue bond and dimensional stability.',
    seoTitle: 'Plywood & Wood Testing as per BIS Specifications',
    seoDescription:
      'Plywood and wood-based panel testing: moisture content, density, water absorption, thickness swelling, bending strength, modulus of elasticity, glue bond and dimensional stability.',
    overview: [
      'We test plywood, wood and wood-based panels for manufacturers, suppliers and buyers who need to confirm quality and conformity with the relevant BIS specifications.',
      'Testing covers physical and mechanical properties, bond quality and dimensional behaviour in the presence of moisture.',
    ],
    scopeLabel: 'What we test',
    scope: ['Plywood', 'Wood', 'Wood-based panels'],
    tests: [
      'Plywood physical & mechanical properties',
      'Moisture content',
      'Density',
      'Water absorption',
      'Thickness swelling',
      'Tensile / strength-related properties',
      'Bending strength',
      'Modulus of elasticity',
      'Glue bond / adhesion-related testing',
      'Dimensional stability',
      'Termite / durability-related testing, where applicable',
      'Other tests as per relevant BIS specifications',
    ],
    faqs: [
      {
        q: 'Do you test plywood as per BIS specifications?',
        a: 'Yes. Plywood and wood-based panels are tested against the relevant BIS specification for the product, or against a customer-specified method.',
      },
    ],
  },
  {
    slug: 'tile-ceramic-testing',
    group: 'material',
    name: 'Tile & Ceramic Testing',
    shortName: 'Tiles & Ceramics',
    icon: 'tile',
    image: imgTile,
    imageAlt: 'Ceramic floor and wall tiles arranged for inspection',
    summary:
      'Testing of ceramic tiles, vitrified tiles and other tile products — water absorption, breaking strength, modulus of rupture, flatness and surface quality.',
    seoTitle: 'Ceramic & Vitrified Tile Testing Lab',
    seoDescription:
      'Tile testing: water absorption, breaking strength, modulus of rupture, dimensional characteristics, surface quality, flatness and warpage as per relevant BIS/IS standards.',
    overview: [
      'We test ceramic tiles, vitrified tiles and other tile products to verify their physical and dimensional properties against the relevant BIS/IS standard.',
      'Results help manufacturers control production quality and help buyers and contractors confirm that tiles meet the specified requirement.',
    ],
    scopeLabel: 'What we test',
    scope: ['Ceramic tiles', 'Vitrified tiles', 'Other tile products'],
    tests: [
      'Water absorption',
      'Breaking strength',
      'Modulus of rupture',
      'Dimensional characteristics',
      'Surface quality',
      'Flatness',
      'Warpage',
      'Resistance-related properties',
      'Chemical / physical characterisation as applicable',
      'Other tests as per relevant BIS/IS standards',
    ],
    faqs: [
      {
        q: 'Which types of tiles can you test?',
        a: 'We test ceramic tiles, vitrified tiles and other tile products.',
      },
    ],
  },
  {
    slug: 'utensil-testing',
    group: 'material',
    name: 'Utensil Testing',
    shortName: 'Utensils',
    icon: 'utensil',
    image: imgUtensil,
    imageAlt: 'Stainless steel cooking utensils and kitchenware',
    summary:
      'Testing of metal utensils and kitchenware as per applicable BIS requirements — composition, material identification, mechanical properties and corrosion.',
    seoTitle: 'Utensil & Kitchenware Testing as per BIS Requirements',
    seoDescription:
      'Metal utensil and kitchenware testing: chemical composition, material identification, dimensional, physical and mechanical properties, surface finish and corrosion-related tests.',
    overview: [
      'We test metal utensils and kitchenware against the applicable BIS requirements for the product.',
      'Testing confirms the material and its composition, checks dimensional, physical and mechanical properties, and examines surface finish and corrosion behaviour.',
    ],
    scopeLabel: 'What we test',
    scope: ['Metal utensils', 'Kitchenware'],
    tests: [
      'Chemical composition',
      'Material identification',
      'Dimensional & physical properties',
      'Mechanical properties',
      'Surface / finish examination',
      'Corrosion-related testing',
      'Applicable safety and performance tests as per relevant standards',
    ],
    faqs: [
      {
        q: 'Can you confirm the grade of steel used in a utensil?',
        a: 'Yes. Chemical composition analysis and material identification confirm the material and whether it matches the declared grade.',
      },
    ],
  },
  {
    slug: 'chemical-composition-analysis',
    group: 'specialised',
    name: 'Chemical Composition Analysis',
    shortName: 'Chemical Analysis',
    icon: 'flask',
    image: imgChem,
    imageAlt: 'Chemical analysis in a laboratory using glass flasks',
    summary:
      'Using advanced spectrometry and chemical analysis, we determine the exact elemental makeup of metals and alloys, ensuring they meet industry standards.',
    seoTitle: 'Chemical Composition Analysis of Metals & Alloys',
    seoDescription:
      'Chemical composition analysis by spectrometry to determine the elemental makeup of metals and alloys, verify grades and confirm conformity with industry standards.',
    overview: [
      'Using advanced spectrometry and chemical analysis, we determine the exact elemental makeup of metals and alloys, ensuring they meet industry standards.',
      'Composition analysis confirms that a material matches its declared grade — for incoming raw material checks, supplier approval, product development and failure investigation.',
    ],
    scopeLabel: 'What we test',
    scope: ['Metals and alloys', 'Utensils and kitchenware', 'Engineering materials and components'],
    tests: [
      'Elemental composition by spectrometry',
      'Chemical analysis of metals and alloys',
      'Grade verification against specification',
      'Material identification',
      'Chemical characterisation as per applicable standards',
    ],
    faqs: [
      {
        q: 'Can you confirm whether a material matches its specified grade?',
        a: 'Yes. We determine the elemental composition and compare it with the requirements of the specified grade or standard.',
      },
    ],
  },
  {
    slug: 'mechanical-testing',
    group: 'specialised',
    name: 'Mechanical Testing',
    shortName: 'Mechanical Testing',
    icon: 'gauge',
    image: imgMech,
    imageAlt: 'Illustration of automated mechanical testing of an automotive assembly',
    summary:
      'We evaluate the strength, hardness and durability of metals through tensile, impact and fatigue testing to ensure structural integrity.',
    seoTitle: 'Mechanical Testing — Tensile, Impact, Fatigue',
    seoDescription:
      'Mechanical testing of metals, polymers and rubber: tensile strength, yield/proof stress, elongation, impact, fatigue, bend and hardness testing to confirm structural integrity.',
    overview: [
      'We evaluate the strength, hardness and durability of metals through tensile, impact and fatigue testing to ensure structural integrity.',
      'Mechanical testing is also carried out on plastics, rubber, plywood and tiles as part of our material testing services.',
    ],
    scopeLabel: 'What we test',
    scope: ['Metals and alloys', 'Plastics and polymers', 'Rubber and elastomers', 'Components and assemblies'],
    tests: [
      'Tensile testing',
      'Yield / proof stress',
      'Elongation',
      'Impact testing',
      'Fatigue testing',
      'Bend testing',
      'Hardness testing',
      'Tear strength and compression set (rubber)',
    ],
    faqs: [
      {
        q: 'Do you test both metals and polymers?',
        a: 'Absolutely. We are specialists in both metals/alloys and polymer/plastic testing. Our team includes experts in metallurgy and plastic technology.',
      },
    ],
  },
  {
    slug: 'metallurgical-analysis',
    group: 'specialised',
    name: 'Metallurgical Analysis',
    shortName: 'Metallurgy',
    icon: 'microscope',
    image: imgMetal,
    imageAlt: 'Metal specimen under test on a laboratory machine',
    summary:
      'Our microscopic examination of metal structures helps identify defects, grain size and heat treatment effectiveness.',
    seoTitle: 'Metallurgical Analysis & Metal Failure Investigation',
    seoDescription:
      'Metallurgical analysis: metallography, microstructure examination, grain size, heat treatment evaluation, weld examination and metal failure investigation.',
    overview: [
      'Our microscopic examination of metal structures helps identify defects, grain size and heat treatment effectiveness.',
      'We have extensive experience with all metallurgical tests, examinations and metal failure investigations. Our metallurgical team has experience with all manufacturing industries and base metals, and we also perform field inspections.',
    ],
    scopeLabel: 'What we examine',
    scope: ['Ferrous and non-ferrous metals', 'Welded joints', 'Heat-treated components', 'Failed parts'],
    tests: [
      'Metallography',
      'Microstructure examination',
      'Grain size determination',
      'Heat treatment effectiveness',
      'Weld & weld penetration examination',
      'Defect identification',
      'Metal failure investigation',
      'Field inspections',
    ],
    faqs: [
      {
        q: 'Do you help investigate metal failures?',
        a: 'Yes. We have extensive experience with metal failure investigations, combining composition analysis, mechanical testing and microstructure examination to identify the root cause.',
      },
    ],
  },
  {
    slug: 'hardness-testing',
    group: 'specialised',
    name: 'Hardness Testing',
    shortName: 'Hardness',
    icon: 'hardness',
    image: imgHardness,
    imageAlt: 'Portable hardness tester measuring the surface of a metal component',
    summary:
      'We measure the hardness of metals using Brinell, Rockwell and Vickers methods to determine wear resistance and material strength.',
    seoTitle: 'Hardness Testing — Brinell, Rockwell, Vickers',
    seoDescription:
      'Hardness testing of metals by Brinell, Rockwell and Vickers methods, and hardness testing of plastics and rubber, to determine wear resistance and material strength.',
    overview: [
      'We measure the hardness of metals using Brinell, Rockwell and Vickers methods to determine wear resistance and material strength.',
      'Hardness testing of plastics and rubber is also available as part of our polymer and rubber testing services.',
    ],
    scopeLabel: 'What we test',
    scope: ['Metals and alloys', 'Heat-treated components', 'Plastics', 'Rubber'],
    tests: [
      'Brinell hardness',
      'Rockwell hardness',
      'Vickers hardness',
      'Hardness of plastics and rubber',
      'Hardness after heat treatment',
    ],
    faqs: [
      {
        q: 'Which hardness methods do you use?',
        a: 'We measure the hardness of metals using Brinell, Rockwell and Vickers methods, depending on the material and the applicable standard.',
      },
    ],
  },
  {
    slug: 'corrosion-testing',
    group: 'specialised',
    name: 'Corrosion Testing',
    shortName: 'Corrosion',
    icon: 'corrosion',
    image: imgCorrosion,
    imageAlt: 'Metal test panels showing different stages of corrosion',
    summary:
      'Our corrosion resistance tests simulate real-world conditions to assess how metals withstand environmental factors like moisture, chemicals and temperature changes.',
    seoTitle: 'Corrosion Testing of Metals & Coatings',
    seoDescription:
      'Corrosion resistance testing that simulates real-world conditions — moisture, chemicals and temperature changes — for metals, coatings, utensils and pipeline steel.',
    overview: [
      'Our corrosion resistance tests simulate real-world conditions to assess how metals withstand environmental factors like moisture, chemicals and temperature changes.',
      'Corrosion analysis supports coating evaluation, utensil testing and industries such as oil & gas, where pipeline steel and coatings must perform in aggressive environments.',
    ],
    scopeLabel: 'What we test',
    scope: ['Metals and alloys', 'Coated components', 'Utensils and kitchenware', 'Pipeline steel'],
    tests: [
      'Corrosion resistance under moisture exposure',
      'Resistance to chemicals',
      'Effect of temperature changes',
      'Coating-related testing',
      'Corrosion-related testing of utensils',
    ],
    faqs: [
      {
        q: 'Can you test coated parts for corrosion resistance?',
        a: 'Yes. We carry out coating-related and corrosion resistance testing on metals and coated components.',
      },
    ],
  },
  {
    slug: 'rohs-reach-pfas-testing',
    group: 'specialised',
    name: 'RoHS, REACH & PFAS Testing',
    shortName: 'RoHS / REACH',
    icon: 'chip',
    image: imgRohs,
    imageAlt: 'RoHS compliant and REACH compliant marks',
    summary:
      'Ensure compliance, build trust and access global markets with our comprehensive testing services for RoHS, REACH and PFAS regulations.',
    seoTitle: 'RoHS, REACH & PFAS Compliance Testing',
    seoDescription:
      'RoHS, REACH and PFAS testing for electronics, components, PCBs and materials requiring regulatory compliance for global markets.',
    overview: [
      'Ensure compliance, build trust and access global markets with our comprehensive testing services for RoHS, REACH and PFAS regulations.',
      'We provide RoHS, REACH and PFAS testing for electronics, components and materials requiring regulatory compliance for global markets.',
    ],
    scopeLabel: 'What we test',
    scope: ['Electronics', 'Components and PCBs', 'Polymers and coatings', 'Materials for export markets'],
    tests: ['RoHS compliance testing', 'REACH compliance testing', 'PFAS testing', 'Compliance reports for regulatory submissions'],
    faqs: [
      {
        q: 'Do you offer RoHS/REACH compliance testing?',
        a: 'Yes. We provide comprehensive RoHS, REACH and PFAS testing for electronics, components and materials requiring regulatory compliance for global markets.',
      },
    ],
  },
  {
    slug: 'bis-oriented-testing',
    group: 'specialised',
    name: 'BIS-Oriented Testing',
    shortName: 'BIS-Oriented Testing',
    icon: 'standard',
    image: imgBis,
    imageAlt: 'Chemical analysis in a laboratory using glass flasks',
    summary:
      'Testing to support requirements associated with BIS/IS standards across plastics, rubber, plywood, tiles, metals, utensils and engineering materials.',
    seoTitle: 'BIS / IS Standard Testing Support',
    seoDescription:
      'Testing support for requirements associated with BIS/IS standards across plastics, rubber, plywood, tiles, metals, utensils and engineering materials and components.',
    overview: [
      'Avani Ecocare Labs supports testing requirements associated with BIS/IS standards across multiple product categories.',
      'Testing is carried out against the applicable IS/BIS, ASTM, ISO or customer-specified methods, depending on the product and the test requirement. We help you identify the applicable standard and the tests it calls for.',
    ],
    scopeLabel: 'Product categories',
    scope: [
      'Plastics & polymer products',
      'Rubber products',
      'Plywood & wood-based products',
      'Tiles & ceramic products',
      'Metal & alloy products',
      'Utensils & kitchenware',
      'Engineering materials & components',
    ],
    tests: [
      'Identification of the applicable IS/BIS standard for your product',
      'Chemical tests as specified in the standard',
      'Physical and dimensional tests',
      'Mechanical tests',
      'Ageing, durability and resistance-related tests where specified',
      'Detailed test report against each specified requirement',
    ],
    faqs: [
      {
        q: 'Can you tell me which BIS standard applies to my product?',
        a: 'We offer technical consultation for test selection and applicable standards. Share your product details and we will advise on the relevant standard and tests.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const materialServices = services.filter((s) => s.group === 'material');
export const specialisedServices = services.filter((s) => s.group === 'specialised');
