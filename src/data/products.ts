export interface Product {
  id: string;
  name: string;
  category: "bakery" | "nutri" | "premix" | "sonis" | "pipeline";
  description: string;
  ingredients: string[];
  attributes: string[];
  image: string;
  badge?: string;
  isAvailable: boolean;
  comingSoon?: boolean;
}

export interface ProductCategory {
  id: "all" | "bakery" | "nutri" | "premix" | "sonis" | "pipeline";
  name: string;
  shortName: string;
  tagline?: string;
  description: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "all",
    name: "All Creations",
    shortName: "All",
    description: "Explore the complete preventive food-tech and artisanal culinary ecosystem.",
  },
  {
    id: "bakery",
    name: "FreshBic Healthy Bakery",
    shortName: "Healthy Bakery",
    description: "100% Maida-free, zero refined sugar, artisanal cookies and baked staples crafted with regional Singhara and millets.",
  },
  {
    id: "nutri",
    name: "FreshBic Nutri Foods",
    shortName: "Nutri Foods",
    description: "Wholesome, naturally sweetened nutrition bites formulated with premium dates, roasted channa, and selected dry fruits.",
  },
  {
    id: "premix",
    name: "FreshBic Premix Range",
    shortName: "Millet Premixes",
    description: "Instant functional breakfast and meal premixes designed for modern busy households seeking wholesome nutrition.",
  },
  {
    id: "sonis",
    name: "Soni's Home Delicious",
    shortName: "Soni's Homemade",
    tagline: "Unmatched Recipes, Made with Sister's Love",
    description: "Authentic, time-honoured Kashmiri homemade specialties and slow-cooked culinary traditions prepared with familial care.",
  },
  {
    id: "pipeline",
    name: "Coming Soon Pipeline",
    shortName: "Upcoming",
    description: "Exciting expansions currently under formulation and pilot scaling by KFG Foods.",
  },
];

export const PRODUCTS: Product[] = [
  // --- FRESHBIC HEALTHY BAKERY ---
  {
    id: "singhara-cookies",
    name: "Water Chestnut (Singhara) Cookies",
    category: "bakery",
    description: "Artisanal crisp cookies made with regional water chestnut flour, enriched with whole seeds and natural sweetener alternatives.",
    ingredients: ["Water Chestnut (Singhara) Flour", "Cold-Pressed Vegetable Fats", "SmartSweet Natural Blend", "Cardamom & Seeds"],
    attributes: ["100% Maida-Free", "Zero Refined Sugar", "Regional Ingredient", "High Dietary Fibre"],
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    badge: "Flagship Innovation",
    isAvailable: true,
  },
  {
    id: "millet-cookies",
    name: "Multi-Grain Millet Cookies",
    category: "bakery",
    description: "Slow-baked golden cookies combining foxtail, finger, and pearl millets for a nutty crunch and balanced glycemic release.",
    ingredients: ["Mixed Millet Flours (Ragi, Bajra, Kangni)", "SmartSweet Blend", "Oat Flakes", "Natural Spices"],
    attributes: ["Whole Grain Millets", "Maida-Free Formulation", "Sustained Energy", "Zero Refined Sugar"],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    badge: "Millet Mission",
    isAvailable: true,
  },
  {
    id: "oat-cookies",
    name: "Heart-Healthy Oat Cookies",
    category: "bakery",
    description: "Rolled oat cookies packed with soluble beta-glucan fibre, cinnamon undertones, and gentle crunch without hydrogenated fats.",
    ingredients: ["Whole Rolled Oats", "Nutritional Seed Blend", "SmartSweet Formulation", "Pure Vanilla Extract"],
    attributes: ["Beta-Glucan Rich", "Zero Trans-Fats", "Maida-Free", "High Fibre"],
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800&auto=format&fit=crop",
    badge: "Fibre Champion",
    isAvailable: true,
  },
  {
    id: "specialty-cookies",
    name: "FreshBic Specialty Cookies",
    category: "bakery",
    description: "Crafted for connoisseurs combining Kashmiri walnuts, toasted almonds, and aromatic saffron essence with low-GI flour blends.",
    ingredients: ["Kashmiri Walnut Meal", "Singhara & Oat Flour", "Natural Saffron", "Non-Sugar Sweetener"],
    attributes: ["Kashmiri Walnuts", "Maida-Free", "Artisanal Small-Batch", "Refined-Sugar Free"],
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop",
    badge: "Chef's Selection",
    isAvailable: true,
  },
  {
    id: "celebration-cakes",
    name: "Healthy Celebration Cakes & Pastries",
    category: "bakery",
    description: "Moist, celebratory bakes sweetened thoughtfully with natural fruit reductions and alternative sweeteners for guilt-free family occasions.",
    ingredients: ["Nut Flours & Millet Bases", "SmartSweet Natural Syrup", "Pure Dairy Cream", "Cocoa & Berries"],
    attributes: ["Order-To-Bake", "No Artificial Colors", "Zero Added Cane Sugar", "Celebration Ready"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    badge: "Custom Orders",
    isAvailable: true,
  },
  {
    id: "high-fibre-bakery-staples",
    name: "High-Fibre Bakery Staples",
    category: "bakery",
    description: "Everyday conscious alternatives to traditional refined-flour breakfast staples, enriched with resistant starch and seeds.",
    ingredients: ["Multi-Millet Bran", "Singhara Flour", "Wheat Bran Extracts", "Yeast & Himalayan Salt"],
    attributes: ["Resistant Starch", "High Fibre Content", "No Bromates / No Bleach", "Maida-Free Focus"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    badge: "Daily Essential",
    isAvailable: true,
  },

  // --- FRESHBIC NUTRI FOODS ---
  {
    id: "pure-dates-laddoo",
    name: "Pure Dates Laddoo",
    category: "nutri",
    description: "Traditional nutrient-dense sphere hand-rolled with mashed Arabian dates, crushed Kashmiri almonds, and green cardamom.",
    ingredients: ["Pitted Dates", "Kashmiri Almonds", "Green Cardamom", "Chia Seeds"],
    attributes: ["100% Date Sweetened", "Zero Added Sugar", "Rich in Iron & Potassium", "Raw Cold-Pressed"],
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800&auto=format&fit=crop",
    badge: "Zero Added Sugar",
    isAvailable: true,
  },
  {
    id: "roasted-channa-dates-laddoo",
    name: "Roasted Channa & Dates Laddoo",
    category: "nutri",
    description: "High-protein wholesome treat combining roasted Bengal gram flour, dates, and unrefined seeds for long-lasting satiety.",
    ingredients: ["Roasted Bengal Gram (Channa)", "Medjool Date Puree", "Dry Fruits", "Nutmeg"],
    attributes: ["Plant Protein", "Zero Cane Sugar", "Complex Carbs", "Kid Friendly"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    badge: "High Plant Protein",
    isAvailable: true,
  },
  {
    id: "dry-fruit-nutrition-balls",
    name: "Dry Fruit Nutrition Balls",
    category: "nutri",
    description: "Energy-dense spheres packed with premium walnuts, cashews, pistachios, dates, and flax seeds. Perfect for mid-day energy.",
    ingredients: ["Kashmiri Walnuts", "Pistachios", "Flaxseed Powder", "Date Binder", "Fig Puree"],
    attributes: ["Omega-3 Rich Walnuts", "No Preservatives", "Naturally Energizing", "Clean Label"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    badge: "Superfood Snack",
    isAvailable: true,
  },
  {
    id: "childrens-snack-range",
    name: "Children's Healthy Snack Range",
    category: "nutri",
    description: "Fun, nutritious snacking formulations crafted to keep children energetic without hyper sugar spikes or artificial chemicals.",
    ingredients: ["Roasted Millets", "Cocoa Powder", "Date Powder", "Sunflower Seeds"],
    attributes: ["No HFCS / Glucose Syrups", "No Artificial Flavours", "Nutrient Packed", "Lunchbox Friendly"],
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
    badge: "Mom Approved",
    isAvailable: true,
  },

  // --- FRESHBIC PREMIX RANGE ---
  {
    id: "millet-khichdi-premix",
    name: "Millet Khichdi Premix",
    category: "premix",
    description: "A restorative comforting meal ready in 15 minutes. Blends ancient millets with split yellow moong and fragrant Kashmiri whole spices.",
    ingredients: ["Barnyard & Foxtail Millets", "Yellow Moong Dal", "Dehydrated Spices", "Cumin & Asafoetida"],
    attributes: ["Ready in 15 Mins", "Low Glycemic Index", "Easy Digestibility", "100% Natural Spices"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
    badge: "Quick Wholesome Meal",
    isAvailable: true,
  },
  {
    id: "millet-upma-premix",
    name: "Millet Upma Premix",
    category: "premix",
    description: "A nourishing breakfast alternative to wheat semolina made from coarsely cracked millets, curry leaves, and roasted lentils.",
    ingredients: ["Cracked Little Millet (Kutki)", "Roasted Bengal Gram", "Mustard Seeds", "Dehydrated Curry Leaves"],
    attributes: ["Semolina-Free (No Sooji)", "High Soluble Fibre", "10-Minute Cook Time", "Sustained Morning Energy"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
    badge: "Smart Breakfast",
    isAvailable: true,
  },
  {
    id: "functional-breakfast-premix",
    name: "Instant Functional Breakfast Premixes",
    category: "premix",
    description: "Targeted morning warm porridge formulations infused with roasted seeds, water chestnut starch, and micro-nutrients.",
    ingredients: ["Sprouted Millet Flours", "Singhara Starch", "Toasted Pumpkin Seeds", "Cinnamon"],
    attributes: ["High Bioavailability", "Gut Friendly", "Warm Instant Prep", "No Added Cane Sugar"],
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=800&auto=format&fit=crop",
    badge: "Gut Wellness",
    isAvailable: true,
  },

  // --- SONI'S HOME DELICIOUS ---
  {
    id: "kashmiri-harisa",
    name: "Authentic Kashmiri Harisa",
    category: "sonis",
    description: "The pride of Kashmiri culinary winter tradition. Mutton slow-cooked overnight with Kashmiri spices and seasoned rice, beaten into a velvety, warming delicacy.",
    ingredients: ["Tender Local Mutton", "Kashmiri Rice", "Aromatic Spices (Saunf, Ginger, Cinnamon)", "Tempered Mustard Oil"],
    attributes: ["Slow-Cooked Overnight", "Authentic Kashmiri Recipe", "Winter Heritage", "Sister's Kitchen"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    badge: "Kashmiri Heritage",
    isAvailable: true,
  },
  {
    id: "homestyle-biryani",
    name: "Homestyle Chicken Biryani",
    category: "sonis",
    description: "Fragrant long-grain basmati cooked in the traditional 'dum' method with tender chicken, whole spices, and caramelized onions.",
    ingredients: ["Aged Basmati Rice", "Tender Farm Chicken", "Kashmiri Saffron", "Whole Garam Masala", "Mint & Brown Onions"],
    attributes: ["Dum Cooked", "Homestyle Recipe", "No Artificial Flavours", "Freshly Made to Order"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    badge: "Homestyle Dum",
    isAvailable: true,
  },
  {
    id: "crispy-chicken-samosa",
    name: "Crispy Chicken Samosa",
    category: "sonis",
    description: "Golden flaky triangles filled with delicately spiced minced chicken, herbs, and mild regional spices for evening tea-time gatherings.",
    ingredients: ["Spiced Minced Chicken", "Coriander & Green Chilli", "Thin Pastry Sheet", "Mustard Oil Fry"],
    attributes: ["Crisp Flaky Shell", "Generous Meat Filling", "No Artificial MSG", "Party Favorite"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    badge: "Evening Special",
    isAvailable: true,
  },
  {
    id: "kashmiri-fish-specialties",
    name: "Traditional Kashmiri Fish Specialties",
    category: "sonis",
    description: "Local river fish prepared according to authentic Kashmiri culinary recipes featuring radish, dried lotus stem (nadru), or mustard gravies.",
    ingredients: ["Fresh Valley Fish", "Kashmiri Red Chilli (Wande)", "Dried Lotus Stem (Nadru)", "Fennel & Turmeric"],
    attributes: ["Valley Culinary Tradition", "Fresh Catch Prep", "Seasonal Recipes", "Family Feast"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    badge: "Seasonal Delicacy",
    isAvailable: true,
  },
  {
    id: "homemade-catering",
    name: "Customized Homemade Catering Services",
    category: "sonis",
    description: "Bespoke traditional Kashmiri and celebratory home-cooked catering for intimate family gatherings, weddings, and corporate events.",
    ingredients: ["Tailored Menu Selection", "Authentic Home-Cooked Preparation", "Premium Local Produce", "Hygienic Packaging"],
    attributes: ["Personalized Menus", "Authentic Home Style", "Intimate Gatherings", "Full Service Delivery"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    badge: "Bespoke Service",
    isAvailable: true,
  },

  // --- COMING SOON ---
  {
    id: "kfg-water",
    name: "KFG Natural Spring Water",
    category: "pipeline",
    description: "Naturally filtered, mineral-balanced pristine drinking water sourced from the crystalline mountain aquifers of Kashmir.",
    ingredients: ["Pristine Mountain Spring Water", "Natural Electrolytes & Minerals"],
    attributes: ["Naturally Alkaline", "Untouched Source", "Rigorous Testing", "In Pilot Stage"],
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=800&auto=format&fit=crop",
    badge: "Coming Soon",
    isAvailable: false,
    comingSoon: true,
  },
  {
    id: "kfg-restaurant-supply",
    name: "KFG Commercial & Restaurant Supply",
    category: "pipeline",
    description: "Bulk supply of functional flours, Singhara premixes, and healthy bakery formulations for quality hotels, cafes, and restaurants.",
    ingredients: ["Bulk Singhara Flour", "Millet Blends", "SmartSweet Food-Service Packs"],
    attributes: ["Institutional Packs", "Cost Optimized", "Consistent Quality", "B2B Distribution"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    badge: "B2B Pipeline",
    isAvailable: false,
    comingSoon: true,
  },
  {
    id: "kfg-traditional-foods",
    name: "KFG Traditional Packaged Foods",
    category: "pipeline",
    description: "Preserving and modernizing Kashmiri culinary staples like dried turnip delicacies, lotus stem crisps, and traditional seasonings.",
    ingredients: ["Sun-Dried Valley Produce", "Heritage Kashmiri Herbs", "Natural Sun Curing"],
    attributes: ["Preserving Heritage", "Zero Artificial Additives", "Vacuum Sealed", "Under Formulation"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    badge: "Research Stage",
    isAvailable: false,
    comingSoon: true,
  },
  {
    id: "kfg-home-chef-network",
    name: "KFG Home Chef Network",
    category: "pipeline",
    description: "A community empowerment platform connecting passionate Kashmiri home chefs with consumers seeking authentic, safe, and hygienic regional home food.",
    ingredients: ["Micro-Culinary Entrepreneurs", "Standardized Safety Protocols", "Quality Packaging"],
    attributes: ["Community Empowerment", "Women Led", "Hygiene Audited", "Scaling Soon"],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    badge: "Platform Ecosystem",
    isAvailable: false,
    comingSoon: true,
  },
];
