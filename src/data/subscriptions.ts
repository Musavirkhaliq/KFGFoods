export interface SubscriptionPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  idealFor: string;
  curatedContents: string[];
  formulationPillars: string[];
  image: string;
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "diabetic-care-box",
    name: "Diabetic Care Essential Box",
    badge: "Most Recommended",
    isPopular: true,
    tagline: "Thoughtful everyday bakery & snacking for metabolic awareness.",
    description:
      "A tailored monthly assortment focused on low-GI flour alternatives, resistant starch, and natural zero-sugar sweetening formulations designed for households conscious of blood sugar management.",
    idealFor: "Households managing diabetes, pre-diabetes, or seeking low-glycemic everyday bakery staples.",
    curatedContents: [
      "Water Chestnut (Singhara) Cookies",
      "Heart-Healthy Rolled Oat Biscuits",
      "High-Fibre Low-GI Bakery Staples",
      "Pure Medjool Date & Seed Laddoos",
      "Batch Nutritional Profile Sheet",
    ],
    formulationPillars: [
      "100% Maida-Free",
      "Zero Refined Cane Sugar",
      "High Soluble Dietary Fibre",
      "Lab-Disclosed Formulation",
    ],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "family-smart-bakery-box",
    name: "Family Smart Bakery Box",
    badge: "Family Favorite",
    isPopular: false,
    tagline: "Guilt-free morning and evening favourites for the entire home.",
    description:
      "Designed to replace conventional maida and sugar-heavy tea biscuits with wholesome multi-millet, walnut, and oat alternatives that parents and kids both look forward to enjoying.",
    idealFor: "Modern families wanting wholesome tea-time snacks and school tiffin alternatives.",
    curatedContents: [
      "Multi-Grain Millet Cookies",
      "FreshBic Kashmiri Walnut Specialty Cookies",
      "Roasted Channa & Date Energy Spheres",
      "Children's Healthy Snack Packs",
      "Fresh Weekly Baking Delivery Option",
    ],
    formulationPillars: [
      "Zero Hydrogenated Vegetable Fats",
      "Ancient Millets (Ragi, Bajra, Foxtail)",
      "Naturally Sweetened with Dates",
      "Kid-Friendly Textures",
    ],
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "complete-millet-nutri-combo",
    name: "Complete Millet & Nutri Combo",
    badge: "Holistic Wellness",
    isPopular: false,
    tagline: "Total meal and snack solution: breakfast, dinner, and quick bites.",
    description:
      "Our most comprehensive monthly pantry box combining ready-in-minutes millet premixes, dry fruit nutrition balls, and artisanal baked biscuits for an all-round conscious lifestyle.",
    idealFor: "Busy professionals, seniors, and wellness enthusiasts prioritizing digestive and metabolic health.",
    curatedContents: [
      "Millet Khichdi 15-Minute Premix",
      "Millet Upma Breakfast Premix",
      "Dry Fruit & Kashmiri Walnut Nutrition Balls",
      "Singhara Crisp Cookies Assortment",
      "Functional Morning Porridge Premix",
    ],
    formulationPillars: [
      "Complete Plant-Based Balance",
      "Rich in Minerals & Resistant Starch",
      "Zero Preservatives or Fillers",
      "Fast 10-15 Min Cooking",
    ],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
  },
];
