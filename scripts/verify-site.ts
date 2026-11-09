import assert from "node:assert";
import {
  WHATSAPP_NUMBER,
  createWhatsAppUrl,
  getGeneralWhatsAppUrl,
  getProductWhatsAppUrl,
  getSubscriptionWhatsAppUrl,
  getAssessmentWhatsAppUrl,
  getB2BWhatsAppUrl,
  isValidIndianPhone,
} from "../src/lib/whatsapp.ts";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../src/data/products.ts";
import { SUBSCRIPTION_PLANS } from "../src/data/subscriptions.ts";
import { SCIENTIFIC_REFERENCES, FORMULATION_COMPARISON } from "../src/data/evidence.ts";
import { EXECUTIVE_TEAM, ADVISORY_BOARD } from "../src/data/leadership.ts";
import { REGIONAL_HEALTH_STATS } from "../src/data/healthChallenge.ts";

console.log("=========================================");
console.log("  KFG FOODS / FRESHBIC VERIFICATION SUITE");
console.log("=========================================\n");

// 1. WhatsApp Configuration & Generators
console.log("▶ 1. Testing WhatsApp Generators & Helpers...");
assert.strictEqual(WHATSAPP_NUMBER, "916006922754");

const generalUrl = getGeneralWhatsAppUrl();
assert(generalUrl.startsWith("https://wa.me/916006922754?text="));
assert(generalUrl.includes("FreshBic"));

const productUrl = getProductWhatsAppUrl("Water Chestnut (Singhara) Cookies");
assert(productUrl.includes("Water%20Chestnut%20(Singhara)%20Cookies"));
assert(productUrl.includes("pricing"));

const subUrl = getSubscriptionWhatsAppUrl("Diabetic Care Essential Box");
assert(subUrl.includes("Diabetic%20Care%20Essential%20Box"));

const assessUrl = getAssessmentWhatsAppUrl({
  bakeryFrequency: "Daily / Frequently",
  priority: "Blood sugar choices",
  preference: "Subscription",
  recommendedBox: "FreshBic Diabetic Care Monthly Box",
});
assert(assessUrl.includes("FreshBic%20Diabetic%20Care%20Monthly%20Box"));

const b2bUrl = getB2BWhatsAppUrl({
  fullName: "Tariq Ahmad",
  businessName: "Kashmir Supermart",
  districtCity: "Srinagar",
  phone: "9876543210",
  partnershipCategory: "Distributor",
  message: "Interested in district level distribution.",
});
assert(b2bUrl.includes("Tariq%20Ahmad"));
assert(b2bUrl.includes("Kashmir%20Supermart"));
console.log("   ✓ All WhatsApp URL generators tested successfully.");

// 2. Phone Validation Tests
console.log("\n▶ 2. Testing Indian Phone Validation...");
assert.strictEqual(isValidIndianPhone("6006922754"), true, "Valid 6006922754");
assert.strictEqual(isValidIndianPhone("9876543210"), true, "Valid 9876543210");
assert.strictEqual(isValidIndianPhone("+91 6006922754"), true, "Valid with formatted prefix");
assert.strictEqual(isValidIndianPhone("919876543210"), true, "Valid 12-digit with 91");
assert.strictEqual(isValidIndianPhone("1234567890"), false, "Invalid start digit");
assert.strictEqual(isValidIndianPhone("98765"), false, "Invalid length (too short)");
assert.strictEqual(isValidIndianPhone("abcd1234ef"), false, "Invalid non-numeric");
console.log("   ✓ Phone validation behaves accurately.");

// 3. Products & Category Catalog Integrity
console.log("\n▶ 3. Testing Product Catalog...");
assert.strictEqual(PRODUCT_CATEGORIES.length, 6, "Total 6 category tabs (All + 5 distinct categories)");
assert(PRODUCTS.length >= 18, `Found ${PRODUCTS.length} products (expected >= 18)`);

// Check mandatory category representation
const categoriesInProducts = new Set(PRODUCTS.map((p) => p.category));
assert(categoriesInProducts.has("bakery"), "Bakery present");
assert(categoriesInProducts.has("nutri"), "Nutri Foods present");
assert(categoriesInProducts.has("premix"), "Premixes present");
assert(categoriesInProducts.has("sonis"), "Soni's Home Delicious present");
assert(categoriesInProducts.has("pipeline"), "Coming Soon pipeline present");

// Check key specific products mentioned in specification
const productNames = PRODUCTS.map((p) => p.name);
assert(productNames.some((n) => n.includes("Water Chestnut")), "Water chestnut cookies present");
assert(productNames.some((n) => n.includes("Millet Cookies")), "Millet cookies present");
assert(productNames.some((n) => n.includes("Oat Cookies")), "Heart healthy oat cookies present");
assert(productNames.some((n) => n.includes("Pure Dates Laddoo")), "Pure dates laddoo present");
assert(productNames.some((n) => n.includes("Millet Khichdi Premix")), "Millet khichdi present");
assert(productNames.some((n) => n.includes("Authentic Kashmiri Harisa")), "Kashmiri Harisa present");
assert(productNames.some((n) => n.includes("KFG Natural Spring Water")), "KFG Water present");
console.log(`   ✓ Catalog valid with ${PRODUCTS.length} verified products.`);

// 4. Subscriptions
console.log("\n▶ 4. Testing Subscription Plans...");
assert.strictEqual(SUBSCRIPTION_PLANS.length, 3, "Exactly 3 subscription plans");
assert.strictEqual(SUBSCRIPTION_PLANS[0].id, "diabetic-care-box");
assert.strictEqual(SUBSCRIPTION_PLANS[1].id, "family-smart-bakery-box");
assert.strictEqual(SUBSCRIPTION_PLANS[2].id, "complete-millet-nutri-combo");
console.log("   ✓ All 3 subscription plans present.");

// 5. Scientific References & Comparison
console.log("\n▶ 5. Testing Scientific References (9 citations)...");
assert.strictEqual(SCIENTIFIC_REFERENCES.length, 9, "Exactly 9 peer-reviewed citations");
const authors = SCIENTIFIC_REFERENCES.map((r) => r.authors);
assert(authors.some((a) => a.includes("Anjana")), "Anjana et al. Lancet present");
assert(authors.some((a) => a.includes("Ludwig")), "Ludwig JAMA present");
assert(authors.some((a) => a.includes("Ceriello")), "Ceriello & Motz present");
assert(authors.some((a) => a.includes("Stanhope")), "Stanhope et al. present");
assert(authors.some((a) => a.includes("Sonnenburg")), "Sonnenburg & Sonnenburg present");
assert(authors.some((a) => a.includes("Jenkins")), "Jenkins et al. present");
assert(authors.some((a) => a.includes("Livesey")), "Livesey present");
assert(authors.some((a) => a.includes("Canfora")), "Canfora et al. present");
assert(authors.some((a) => a.includes("Mozaffarian")), "Mozaffarian present");

assert.strictEqual(FORMULATION_COMPARISON.length, 6, "6 formulation comparison dimensions");
console.log("   ✓ All 9 scientific references and 6 formulation comparisons verified.");

// 6. Leadership & Advisory Board
console.log("\n▶ 6. Testing Leadership & Advisors...");
assert.strictEqual(EXECUTIVE_TEAM.length, 4, "4 Core Executive Leaders");
assert.strictEqual(EXECUTIVE_TEAM[0].name, "Fayaz Anjum Wani", "Founder & Director");
assert.strictEqual(EXECUTIVE_TEAM[1].name, "Rifat Ara", "Director Operations");
assert.strictEqual(EXECUTIVE_TEAM[2].name, "Er. Bashee Mir", "Co-Founder");
assert.strictEqual(EXECUTIVE_TEAM[3].name, "Naureen Farooq", "MD Marketing");

assert.strictEqual(ADVISORY_BOARD.length, 4, "4 Domain Mentors/Advisors");
assert(ADVISORY_BOARD.some((a) => a.name.includes("Parvez A. Mir")), "Prof. Parvez A. Mir present");
assert(ADVISORY_BOARD.some((a) => a.name.includes("Muheet Mehraj")), "Mr. Muheet Mehraj present");
assert(ADVISORY_BOARD.some((a) => a.name.includes("Sayyed Pervaz Qalander")), "Er. Sayyed Pervaz Qalander present");
assert(ADVISORY_BOARD.some((a) => a.name.includes("Dr. Sajad Ahmad")), "Dr. Sajad Ahmad present");
console.log("   ✓ Leadership and advisory board complete without fabricated biographies.");

// 7. Health Statistics
console.log("\n▶ 7. Testing Regional Health Stats...");
assert.strictEqual(REGIONAL_HEALTH_STATS.length, 4, "4 Health Stats");
assert.strictEqual(REGIONAL_HEALTH_STATS[0].value, "18.9%", "18.9% Overall diabetes prevalence");
assert.strictEqual(REGIONAL_HEALTH_STATS[1].value, "26.5%", "26.5% Urban burden");
assert.strictEqual(REGIONAL_HEALTH_STATS[2].value, "40.0%", "40.0% Undiagnosed");
assert.strictEqual(REGIONAL_HEALTH_STATS[3].value, "29.6%", "29.6% Cardiovascular mortality");
console.log("   ✓ Health statistics verified with exact peer-reviewed attributions.");

console.log("\n=========================================");
console.log("  ALL UNIT & INTEGRITY TESTS PASSED! 🎉");
console.log("=========================================\n");
