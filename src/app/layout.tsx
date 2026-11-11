import type { Metadata, Viewport } from "next";
import { Merriweather, Inter, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071109",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kfgfoods.com"),
  title: {
    default: "KFGFoods — Wholesome Food, Happier You | FreshBic Sugar-Free, Maida-Free Bakery in Kashmir",
    template: "%s | KFGFoods Kashmir",
  },
  description:
    "KFGFoods (KFG Foods Private Limited) — Kashmir's premier preventive food-tech enterprise. Formulating 100% Maida-free, zero-refined-sugar functional bakery with regional water chestnut (Singhara), mountain millets, and Medjool dates at SIDCO Lassipora, Pulwama.",
  keywords: [
    "KFGFoods",
    "KFG Foods",
    "FreshBic",
    "FreshBic Kashmir",
    "KFG Foods Private Limited",
    "Wholesome Food Happier You",
    "Singhara cookies",
    "water chestnut flour cookies",
    "Gaad flour Kashmir",
    "multi grain millet cookies",
    "heart healthy oat cookies",
    "millet khichdi premix",
    "dates dry fruit laddoos",
    "sugar free cookies Srinagar",
    "maida free bakery Kashmir",
    "diabetic friendly bakery India",
    "low glycemic index cookies",
    "Lassipora Pulwama food tech",
    "preventive food tech Kashmir",
    "Soni's Home Delicious",
    "Kashmiri Harisa",
    "PCOS friendly snacks Kashmir",
    "Haleeb's Glaxy distributor",
  ],
  authors: [{ name: "KFGFoods (KFG Foods Private Limited)" }],
  creator: "KFGFoods",
  publisher: "KFGFoods",
  category: "Food & Beverage / Health & Nutrition",
  classification: "Preventive Food Technology & Functional Bakery",
  alternates: {
    canonical: "https://kfgfoods.com",
    languages: {
      "en-IN": "https://kfgfoods.com",
      "en": "https://kfgfoods.com",
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "1231x1231", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kfgfoods.com",
    siteName: "KFGFoods — Wholesome Food, Happier You",
    title: "KFGFoods — FreshBic | Sugar-Free, Maida-Free Healthy Bakery & Nutrition in Kashmir",
    description:
      "Kashmir's leading preventive food-tech enterprise. Formulating 100% Maida-Free, Zero-Refined-Sugar healthy bakery staples with regional water chestnut (Singhara), mountain millets, and Medjool dates at SIDCO Lassipora, Pulwama.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KFGFoods Official Brand Logo — FreshBic Healthy Bakery Kashmir",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KFGFoods — FreshBic | Sugar-Free, Maida-Free Healthy Bakery",
    description:
      "Kashmir's preventive food-tech enterprise. Wholesome bakery without refined sugar or maida, made with regional Singhara and mountain millets.",
    images: ["/logo.png"],
    creator: "@KFGFoods",
    site: "@KFGFoods",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kfgfoods.com/#organization",
      name: "KFGFoods",
      legalName: "KFG Foods Private Limited",
      alternateName: ["FreshBic", "KFGFoods Kashmir"],
      url: "https://kfgfoods.com",
      logo: "https://kfgfoods.com/logo.png",
      slogan: "Wholesome Food, Happier You",
      brand: {
        "@type": "Brand",
        name: "FreshBic",
        slogan: "Sweetness for Life Without Sugar",
      },
      description:
        "Preventive food-tech enterprise in Jammu & Kashmir innovating sugar-free, maida-free functional bakery and nutrition from regional water chestnut and mountain millets.",
      telephone: "+916006922754",
      address: {
        "@type": "PostalAddress",
        streetAddress: "IGC SIDCO Industrial Area, Lassipora",
        addressLocality: "Pulwama",
        addressRegion: "Jammu and Kashmir",
        postalCode: "192301",
        addressCountry: "IN",
      },
      founder: {
        "@type": "Person",
        name: "Fayaz Anjum Wani",
        jobTitle: "Founder & Director",
      },
      identifier: {
        "@type": "PropertyValue",
        name: "FSSAI License",
        value: "11023470000115",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+916006922754",
        contactType: "Customer Support & Wholesale",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
      },
    },
    {
      "@type": "Bakery",
      "@id": "https://kfgfoods.com/#bakery",
      name: "KFGFoods FreshBic Artisanal Kitchen",
      image: "https://kfgfoods.com/logo.png",
      url: "https://kfgfoods.com",
      telephone: "+916006922754",
      priceRange: "₹₹",
      servesCuisine: [
        "Healthy Bakery",
        "Maida-Free Cookies",
        "Sugar-Free Confectionery",
        "Kashmiri Traditional Foods",
        "Functional Millet Nutrition",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "IGC SIDCO Industrial Area, Lassipora",
        addressLocality: "Pulwama",
        addressRegion: "Jammu and Kashmir",
        postalCode: "192301",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.8767,
        longitude: 74.8955,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://kfgfoods.com/#website",
      url: "https://kfgfoods.com",
      name: "KFGFoods",
      description: "Wholesome Food, Happier You — Preventive food-tech and conscious healthy bakery in Kashmir.",
      publisher: {
        "@id": "https://kfgfoods.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kfgfoods.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://kfgfoods.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products & SKUs",
          item: "https://kfgfoods.com#products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Artisanal Kitchen Craftsmanship",
          item: "https://kfgfoods.com#craftsmanship",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Nutrition Science",
          item: "https://kfgfoods.com#science",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "B2B Partnership & Distribution",
          item: "https://kfgfoods.com#partnership",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://kfgfoods.com/#itemlist",
      name: "Featured FreshBic Healthy Bakery & Nutrition SKUs",
      itemListElement: [
        {
          "@type": "Product",
          position: 1,
          name: "FreshBic Water Chestnut (Singhara) Cookies",
          image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
          description: "100% Maida-free artisanal crisp cookies made with regional water chestnut flour and natural sweetener alternatives.",
          brand: { "@type": "Brand", name: "FreshBic" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "180",
            availability: "https://schema.org/InStock",
            url: "https://kfgfoods.com#products",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "142",
          },
        },
        {
          "@type": "Product",
          position: 2,
          name: "FreshBic Multi-Grain Millet Cookies",
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
          description: "Slow-baked golden cookies combining foxtail, finger, and pearl millets for a nutty crunch and balanced glycemic release.",
          brand: { "@type": "Brand", name: "FreshBic" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "160",
            availability: "https://schema.org/InStock",
            url: "https://kfgfoods.com#products",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "98",
          },
        },
        {
          "@type": "Product",
          position: 3,
          name: "FreshBic Heart-Healthy Oat Cookies",
          image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800&auto=format&fit=crop",
          description: "Rolled oat cookies packed with soluble beta-glucan fibre, cinnamon undertones, and zero hydrogenated trans-fats.",
          brand: { "@type": "Brand", name: "FreshBic" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "170",
            availability: "https://schema.org/InStock",
            url: "https://kfgfoods.com#products",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "115",
          },
        },
        {
          "@type": "Product",
          position: 4,
          name: "FreshBic Pure Dates & Kashmiri Walnut Energy Balls",
          image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
          description: "Cold-pressed energy bites blending roasted channa, Kashmiri walnuts, and premium Medjool date puree with zero added sucrose.",
          brand: { "@type": "Brand", name: "FreshBic" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "240",
            availability: "https://schema.org/InStock",
            url: "https://kfgfoods.com#products",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "86",
          },
        },
        {
          "@type": "Product",
          position: 5,
          name: "FreshBic 15-Minute Millet Khichdi Breakfast Premix",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
          description: "Functional slow-release ancient millet meal premix infused with Kashmiri saffron and native digestive spices.",
          brand: { "@type": "Brand", name: "FreshBic" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "195",
            availability: "https://schema.org/InStock",
            url: "https://kfgfoods.com#products",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "74",
          },
        },
        {
          "@type": "Product",
          position: 6,
          name: "Soni's Kashmiri Authentic Mutton Harisa",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
          description: "Traditional winter delicacy slow-cooked overnight for 12 hours with tender Kashmiri mutton, aromatic spices, and tempered mustard oil.",
          brand: { "@type": "Brand", name: "Soni's Home Delicious" },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "650",
            availability: "https://schema.org/InStock",
            url: "https://kfgfoods.com#products",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "162",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://kfgfoods.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are FreshBic cookies suitable for diabetic and pre-diabetic individuals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. FreshBic cookies are formulated with low glycemic index (GI) flours including indigenous Kashmiri water chestnut (Singhara) and ancient Himalayan millets. They contain 0g refined white sugar and are naturally sweetened with whole Medjool date puree, avoiding rapid blood glucose spikes and promoting sustained satiety.",
          },
        },
        {
          "@type": "Question",
          name: "What flour does KFGFoods use instead of refined white flour (Maida)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KFGFoods maintains a strict 100% Maida-Free standard. We formulate our baked staples exclusively with regional water chestnut flour (Singhara/Gaad) sourced from Kashmir's wetlands, mixed ancient millets (foxtail, barnyard, finger millet), and whole rolled oats rich in beta-glucan.",
          },
        },
        {
          "@type": "Question",
          name: "Where are KFGFoods products manufactured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All KFGFoods and FreshBic products are produced at our specialized food-tech kitchen facility located at IGC SIDCO Industrial Complex, Lassipora, Pulwama, Jammu & Kashmir (192301) under FSSAI License Number 11023470000115.",
          },
        },
        {
          "@type": "Question",
          name: "Does KFGFoods ship products across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In addition to local distribution across Srinagar, Pulwama, Anantnag, and Baramulla via Haleeb's Glaxy, we ship fresh batches directly to households across India through dedicated courier logistics.",
          },
        },
        {
          "@type": "Question",
          name: "Do FreshBic products contain artificial chemical sweeteners like Aspartame or Sucralose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. FreshBic does not use artificial chemical sweeteners or synthetic sugar alcohols. We rely on the natural, mineral-rich sweetness of pure date puree and whole functional ingredients.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any hydrogenated fats, vanaspati, or trans-fats in FreshBic items?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "KFGFoods has a zero-tolerance policy against hydrogenated vegetable fats (Dalda/Vanaspati) and commercial bakery shortenings. We use only cold-pressed authentic vegetable fats and natural fats that maintain high cardiovascular health standards.",
          },
        },
        {
          "@type": "Question",
          name: "What are the health benefits of Kashmiri Singhara (Water Chestnut)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Water chestnut (known regionally as Singhara or Gaad) is an ancient gluten-free aquatic crop native to Kashmir's pristine freshwater lakes. It is rich in resistant starch, potassium, magnesium, and polyphenols, delivering low glycemic release and supporting healthy gut microbiome diversity.",
          },
        },
        {
          "@type": "Question",
          name: "How can businesses, dealers, or institutional buyers partner with KFGFoods?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wholesale distributors, retail supermarkets, hospitals, and hospitality partners (HoReCa) can connect directly with our partnership desk via WhatsApp at +91 60069 22754 or submit a partner application through the B2B portal at kfgfoods.com#partnership.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${merriweather.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} scroll-smooth`}
    >
      <head>
        {/* Geo Coordinates for Local Kashmiri SEO */}
        <meta name="geo.region" content="IN-JK" />
        <meta name="geo.placename" content="Pulwama, Jammu and Kashmir, India" />
        <meta name="geo.position" content="33.8767;74.8955" />
        <meta name="ICBM" content="33.8767, 74.8955" />

        {/* Mobile & PWA App Experience */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KFGFoods" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Comprehensive JSON-LD Structured Data Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon.png" sizes="192x192" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#08120A] text-[#F3F6F3] antialiased selection:bg-[#D97706] selection:text-[#08120A]">
        {children}
      </body>
    </html>
  );
}
