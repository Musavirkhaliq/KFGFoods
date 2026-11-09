export const WHATSAPP_NUMBER = "916006922754";
export const DISPLAY_PHONE = "+91 6006922754";

export interface B2BInquiryData {
  fullName: string;
  businessName: string;
  districtCity: string;
  phone: string;
  partnershipCategory: string;
  message?: string;
}

export interface AssessmentAnswers {
  bakeryFrequency: string;
  priority: string;
  preference: string;
  recommendedBox: string;
}

/**
 * Creates a formatted wa.me link with encoded text.
 */
export function createWhatsAppUrl(message: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-filled message for general enquiries
 */
export function getGeneralWhatsAppUrl(): string {
  const msg = "Hello KFGFoods, I would like to know more about your healthy bakery and preventive nutrition products.";
  return createWhatsAppUrl(msg);
}

/**
 * Pre-filled message for a specific product
 */
export function getProductWhatsAppUrl(productName: string): string {
  const msg = `Hello KFGFoods, I am interested in ${productName}. Please share product details, pricing, and availability.`;
  return createWhatsAppUrl(msg);
}

/**
 * Pre-filled message for subscriptions
 */
export function getSubscriptionWhatsAppUrl(planName: string): string {
  const msg = `Hello KFGFoods, I am interested in the ${planName}. Please share monthly subscription details, packaging sizes, and delivery schedule.`;
  return createWhatsAppUrl(msg);
}

/**
 * Pre-filled message for interactive assessment match
 */
export function getAssessmentWhatsAppUrl(data: AssessmentAnswers): string {
  const msg =
    `Hello KFGFoods! I completed the Food Match Assessment on your website.\n\n` +
    `• Household Bakery Consumption: ${data.bakeryFrequency}\n` +
    `• Wellness Priority: ${data.priority}\n` +
    `• Preferred Format: ${data.preference}\n` +
    `• Recommended Selection: ${data.recommendedBox}\n\n` +
    `Please share details, ingredients, and how I can order my recommended box.`;
  return createWhatsAppUrl(msg);
}

/**
 * Pre-filled message for B2B Partnership inquiry
 */
export function getB2BWhatsAppUrl(data: B2BInquiryData): string {
  const msg =
    `*KFG FOODS — BUSINESS PARTNERSHIP INQUIRY*\n\n` +
    `• Full Name: ${data.fullName}\n` +
    `• Organization: ${data.businessName}\n` +
    `• District / City: ${data.districtCity}\n` +
    `• Contact Number: ${data.phone}\n` +
    `• Partnership Track: ${data.partnershipCategory}\n` +
    (data.message ? `• Note / Requirement: ${data.message}\n\n` : `\n`) +
    `I would like to explore distribution/partnership terms with KFG Foods and FreshBic.`;
  return createWhatsAppUrl(msg);
}

/**
 * Helper to validate 10-digit Indian mobile numbers
 */
export function isValidIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "");
  // Accept 10 digits or 12 digits (with 91 prefix)
  if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) {
    return true;
  }
  if (cleaned.length === 12 && cleaned.startsWith("91") && /^[6-9]\d{9}$/.test(cleaned.slice(2))) {
    return true;
  }
  return false;
}
