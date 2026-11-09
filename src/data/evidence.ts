export interface ScientificReference {
  id: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  doi: string;
  url: string;
  relevance: string;
}

export interface FormulationComparison {
  dimension: string;
  traditionalApproach: string;
  freshBicApproach: string;
  scientificContext: string;
}

export const FORMULATION_COMPARISON: FormulationComparison[] = [
  {
    dimension: "Flour Selection",
    traditionalApproach: "Heavily reliant on ultra-refined wheat flour (Maida), stripped of outer bran and germ.",
    freshBicApproach: "Functional whole flours including regional water chestnut (Singhara), foxtail & finger millets, and rolled oats.",
    scientificContext: "Whole seed and tuber flours preserve natural botanical structures, resistant starch, and essential dietary micronutrients.",
  },
  {
    dimension: "Sweetening Matrix",
    traditionalApproach: "High concentrations of sucrose (refined white cane sugar) or high-fructose corn syrup.",
    freshBicApproach: "Proprietary SmartSweet formulations leveraging whole date purees, erythritol, and non-glycemic plant compounds.",
    scientificContext: "Avoiding simple sucrose spikes reduces rapid postprandial glucose surges and associated metabolic strain.",
  },
  {
    dimension: "Fat Selection",
    traditionalApproach: "Vanaspati, hydrogenated vegetable oils containing industrial trans-fatty acids, or cheap palm fractions.",
    freshBicApproach: "SmartFats philosophy: strictly zero partially hydrogenated fats; utilization of cold-pressed oils and natural seed lipids.",
    scientificContext: "Industrial trans fats strongly associate with systemic endothelial dysfunction and atherogenic dyslipidemia.",
  },
  {
    dimension: "Dietary Fibre & Texture",
    traditionalApproach: "Extremely low dietary fibre (<1g per serving); rapid gastric emptying and short satiety curve.",
    freshBicApproach: "Enriched with soluble beta-glucans, fermentable oligosaccharides, and resistant starch.",
    scientificContext: "Soluble dietary fibres slow carbohydrate absorption and produce short-chain fatty acids (SCFAs) via microbiome fermentation.",
  },
  {
    dimension: "Ingredient Disclosure",
    traditionalApproach: "Generic 'edible vegetable fat' or 'permitted additives' without batch-level transparency.",
    freshBicApproach: "SmartZero standard: 100% transparent labelling, clearly detailing flour varieties and sweetener types.",
    scientificContext: "Consumer clarity empowers households and clinicians to calculate actual carbohydrate exchanges accurately.",
  },
  {
    dimension: "Nutritional Testing",
    traditionalApproach: "Often unverified or derived from generic textbook tables without laboratory testing.",
    freshBicApproach: "Formulations subjected to product-specific nutritional profiling and applicable FSSAI safety compliance.",
    scientificContext: "Food safety regulations and nutritional verification protect vulnerable populations from hidden sugars.",
  },
];

export const SCIENTIFIC_REFERENCES: ScientificReference[] = [
  {
    id: 1,
    authors: "Anjana RM, Unnikrishnan R, Deepa M, et al.",
    year: 2023,
    title: "Metabolic non-communicable disease health report in India: the ICMR-INDIAB national cross-sectional study (ICMR-INDIAB-17)",
    journal: "The Lancet Diabetes & Endocrinology",
    doi: "10.1016/S2213-8587(23)00119-5",
    url: "https://doi.org/10.1016/S2213-8587(23)00119-5",
    relevance: "Establishes epidemiological prevalence of diabetes (18.9% in regional populations) and metabolic risk patterns across India and Northern territories.",
  },
  {
    id: 2,
    authors: "Ludwig DS.",
    year: 2002,
    title: "The glycemic index: physiological mechanisms relating to obesity, diabetes, and cardiovascular disease",
    journal: "JAMA (Journal of the American Medical Association)",
    doi: "10.1001/jama.287.18.2414",
    url: "https://doi.org/10.1001/jama.287.18.2414",
    relevance: "Detailed physiological overview of how rapidly digestible high-GI refined starches trigger postprandial hyperinsulinemia and subsequent metabolic exhaustion.",
  },
  {
    id: 3,
    authors: "Ceriello A, Motz E.",
    year: 2004,
    title: "Is oxidative stress the pathogenic mechanism underlying insulin resistance, diabetes, and cardiovascular disease? The common soil hypothesis revisited",
    journal: "Diabetologia",
    doi: "10.1007/s00125-004-1351-4",
    url: "https://doi.org/10.1007/s00125-004-1351-4",
    relevance: "Correlates acute postprandial hyperglycemia spikes with transient endothelial oxidative stress, reinforcing the need for low-glycemic dietary alternatives.",
  },
  {
    id: 4,
    authors: "Stanhope KL, Schwarz JM, Keim NL, et al.",
    year: 2009,
    title: "Consuming fructose-sweetened, not glucose-sweetened, beverages increases visceral adiposity and lipids and decreases insulin sensitivity in humans",
    journal: "The Journal of Clinical Investigation",
    doi: "10.1172/JCI37264",
    url: "https://doi.org/10.1172/JCI37264",
    relevance: "Demonstrates metabolic consequences of industrial refined fructose/sucrose on hepatic de novo lipogenesis and visceral fat accumulation.",
  },
  {
    id: 5,
    authors: "Sonnenburg ED, Sonnenburg JL.",
    year: 2016,
    title: "Starving our microbial self: the deleterious consequences of a diet deficient in microbiota-accessible carbohydrates",
    journal: "Cell Metabolism",
    doi: "10.1016/j.cmet.2016.08.014",
    url: "https://doi.org/10.1016/j.cmet.2016.08.014",
    relevance: "Identifies modern refined diets as lacking microbiota-accessible carbohydrates (MACs), causing gut barrier degradation and chronic low-grade inflammation.",
  },
  {
    id: 6,
    authors: "Jenkins DJ, Kendall CW, Augustin LS, et al.",
    year: 2002,
    title: "Glycemic index: overview of implications in health and disease",
    journal: "The American Journal of Clinical Nutrition",
    doi: "10.1093/ajcn/76.1.266S",
    url: "https://doi.org/10.1093/ajcn/76.1.266S",
    relevance: "Foundational clinical paper demonstrating benefits of replacing high-GI starches with legumes, millets, and unrefined grains on HbA1c control.",
  },
  {
    id: 7,
    authors: "Livesey G.",
    year: 2003,
    title: "Health potential of polyols as sugar replacers, with emphasis on low glycaemic properties",
    journal: "British Journal of Nutrition",
    doi: "10.1079/BJN2002700",
    url: "https://doi.org/10.1079/BJN2002700",
    relevance: "Validates caloric dilution, non-cariogenic properties, and near-zero glycemic impact of alternative functional sweeteners utilized in SmartSweet.",
  },
  {
    id: 8,
    authors: "Canfora EE, Jocken JW, Blaak EE.",
    year: 2015,
    title: "Short-chain fatty acids in control of body weight and insulin sensitivity",
    journal: "Nature Reviews Endocrinology",
    doi: "10.1038/nrendo.2015.128",
    url: "https://doi.org/10.1038/nrendo.2015.128",
    relevance: "Mechanistic evidence showing how dietary fibre fermentation into acetate, propionate, and butyrate stimulates GLP-1 secretion and improves insulin sensitivity.",
  },
  {
    id: 9,
    authors: "Mozaffarian D.",
    year: 2016,
    title: "Dietary and policy priorities for cardiovascular disease, diabetes, and obesity: a comprehensive review",
    journal: "Circulation",
    doi: "10.1161/CIRCULATIONAHA.115.018585",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.115.018585",
    relevance: "Broad consensus review calling for elimination of partially hydrogenated fats and reduction of ultra-processed refined grains in everyday food staples.",
  },
];
