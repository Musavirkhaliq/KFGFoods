import type { Metadata, Viewport } from "next";
import { Merriweather, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
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
  themeColor: "#1B5E20",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://freshbic.in"),
  title: "KFGFoods — FreshBic | Sugar-Free, Maida-Free Healthy Bakery & Nutrition in Kashmir",
  description:
    "KFGFoods (KFG Foods Private Limited) — Wholesome Food, Happier You. Featuring FreshBic healthy bakery, Singhara water chestnut cookies, dates laddoos, and Kashmiri delicacies.",
  keywords: [
    "KFGFoods",
    "KFG Foods",
    "FreshBic",
    "Wholesome Food Happier You",
    "KFG Foods Private Limited",
    "Healthy Bakery Kashmir",
    "Singhara Cookies",
    "Water Chestnut Flour",
    "Sugar Free Cookies Srinagar",
    "Maida Free Bakery Kashmir",
    "Millet Khichdi Premix",
    "Lassipora Pulwama Food Tech",
    "Preventive Food Tech Kashmir",
    "Soni's Home Delicious",
    "Kashmiri Harisa",
  ],
  authors: [{ name: "KFGFoods (KFG Foods Private Limited)" }],
  creator: "KFGFoods",
  publisher: "KFGFoods",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.jpeg", sizes: "1254x1254", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://freshbic.in",
    siteName: "KFGFoods | FreshBic",
    title: "KFGFoods — FreshBic | Sugar-Free, Maida-Free Healthy Bakery & Nutrition in Kashmir",
    description:
      "KFGFoods — Wholesome Food, Happier You. Discover FreshBic healthy bakery, millet premixes, Singhara cookies, and Kashmiri delicacies.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1254,
        height: 1254,
        alt: "KFGFoods Official Brand Logo — Wholesome Food, Happier You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KFGFoods — FreshBic | Wholesome Food, Happier You",
    description:
      "Preventive food-tech and conscious healthy bakery crafted with Kashmiri water chestnut, millets, and dates.",
    images: ["/logo.jpeg"],
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
      "@id": "https://freshbic.in/#organization",
      name: "KFGFoods",
      legalName: "KFG Foods Private Limited",
      logo: "https://freshbic.in/logo.jpeg",
      brand: {
        "@type": "Brand",
        name: "KFGFoods",
        slogan: "Wholesome Food, Happier You",
        brand: {
          "@type": "Brand",
          name: "FreshBic",
          slogan: "Sweetness for Life Without Sugar",
        },
      },
      description:
        "Preventive food-tech enterprise in Jammu & Kashmir innovating sugar-free, maida-free functional bakery and nutrition.",
      url: "https://freshbic.in",
      telephone: "+916006922754",
      address: {
        "@type": "PostalAddress",
        streetAddress: "IGC SIDCO Industrial Area, Lassipora",
        addressLocality: "Pulwama",
        addressRegion: "Jammu and Kashmir",
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
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://freshbic.in/#establishment",
      name: "KFGFoods — FreshBic",
      image: "https://freshbic.in/logo.jpeg",
      telephone: "+916006922754",
      address: {
        "@type": "PostalAddress",
        streetAddress: "IGC SIDCO Industrial Area, Lassipora",
        addressLocality: "Pulwama",
        addressRegion: "Jammu and Kashmir",
        postalCode: "192301",
        addressCountry: "IN",
      },
      servesCuisine: "Healthy Bakery, Kashmiri Delicacies, Functional Premixes",
      priceRange: "₹₹",
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
      lang="en"
      className={`${merriweather.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon.png" sizes="192x192" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242923] antialiased selection:bg-[#2E7D32] selection:text-white">
        {children}
      </body>
    </html>
  );
}
