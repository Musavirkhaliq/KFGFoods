export interface HealthStat {
  value: string;
  label: string;
  detail: string;
  source: string;
  accent: "red" | "amber" | "forest";
}

export const REGIONAL_HEALTH_STATS: HealthStat[] = [
  {
    value: "18.9%",
    label: "Overall Diabetes Prevalence",
    detail: "Significant proportion of adult population across surveyed regional cohorts exhibiting impaired glycemic metrics.",
    source: "ICMR-INDIAB National Epidemiological Survey (Lancet Diabetes & Endocrinol 2023)",
    accent: "red",
  },
  {
    value: "26.5%",
    label: "Urban Diabetes Burden",
    detail: "Elevated metabolic risk concentrated in urban centers with high sedentary patterns and refined staple consumption.",
    source: "Regional Urban Cohort Analysis / ICMR-INDIAB State Assessment",
    accent: "red",
  },
  {
    value: "40.0%",
    label: "Undiagnosed Metabolic Cases",
    detail: "Four out of ten individuals with elevated fasting blood glucose remain unaware due to absence of early symptoms.",
    source: "Public Health Surveillance & Screening Indicators in Northern India",
    accent: "amber",
  },
  {
    value: "29.6%",
    label: "Cardiovascular Mortality Share",
    detail: "Proportion of non-communicable disease mortality attributed to lifestyle and metabolic cardiovascular complications.",
    source: "Global Burden of Disease Regional Cardiovascular Synthesis",
    accent: "red",
  },
];

export const EDUCATIONAL_CONCEPTS = [
  {
    term: "Glycemic Index (GI)",
    simpleDefinition: "How rapidly carbohydrates break down into blood sugar.",
    explanation:
      "Refined flours (Maida) digest almost instantly, provoking steep insulin spikes. Functional alternatives like Singhara and millets release carbohydrates progressively.",
  },
  {
    term: "Dietary Soluble Fibre",
    simpleDefinition: "The natural plant matrix that slows digestion and nourishes the gut.",
    explanation:
      "Unlike refined wheat bran which is stripped away, whole grains and water chestnut retain dietary fibres that blunt post-meal glucose surges and promote satiety.",
  },
  {
    term: "Resistant Starch",
    simpleDefinition: "Starch molecules that resist small-intestine digestion.",
    explanation:
      "Resistant starches travel into the colon where beneficial gut bacteria ferment them into beneficial short-chain fatty acids (like butyrate), supporting metabolic health.",
  },
  {
    term: "Beta-Glucans",
    simpleDefinition: "Viscous soluble fibres found abundantly in rolled oats.",
    explanation:
      "Beta-glucans form a gentle gelatinous layer in the digestive tract, actively moderating lipid absorption and helping maintain balanced blood cholesterol.",
  },
  {
    term: "Gut Microbiome Balance",
    simpleDefinition: "Trillions of beneficial micro-organisms residing in your gut.",
    explanation:
      "A diverse diet rich in varied millets, seeds, and unrefined fibers feeds diverse bacterial strains, which in turn produce signalling molecules that influence energy metabolism.",
  },
];
