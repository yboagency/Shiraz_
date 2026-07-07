import type { Metadata, Viewport } from "next";
import {
  Bentham,
  Varela_Round,
  Catamaran,
  Bilbo_Swash_Caps,
} from "next/font/google";
import "./globals.css";

const bentham = Bentham({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bentham",
  display: "swap",
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-varela",
  display: "swap",
});

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-catamaran",
  display: "swap",
});

const bilboSwashCaps = Bilbo_Swash_Caps({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bilbo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1A2F",
};

export const metadata: Metadata = {
  title: "Shiraz — Authentic Afghan Restaurant in Hayes, London",
  description:
    "Experience authentic Afghan cuisine at Shiraz in Hayes, London. Traditional charcoal-grilled kebabs, floor seating, and fresh flavours. Call 020 8569 0777 to book a table.",
  metadataBase: new URL("https://shirazafghan.co.uk"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Shiraz — Authentic Afghan Restaurant in Hayes, London",
    description:
      "Experience authentic Afghan cuisine at Shiraz in Hayes, London. Traditional charcoal-grilled kebabs, floor seating, and fresh flavours.",
    url: "https://shirazafghan.co.uk",
    siteName: "Shiraz",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/favicons/manifest.json",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Shiraz Afghan Restaurant",
  url: "https://shirazafghan.co.uk/",
  servesCuisine: ["Afghan", "Kebab", "Middle Eastern", "Halal"],
  telephone: "+442085690777",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "830 Uxbridge Rd",
    addressLocality: "Hayes",
    addressRegion: "Middlesex",
    postalCode: "UB4 0RR",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.52042,
    longitude: -0.40773,
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
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:00",
    },
  ],
  hasMenu: "https://shirazafghan.co.uk/menu",
  sameAs: [
    "https://www.instagram.com/shiraz_ub4/",
    "https://www.tiktok.com/@shiraz_restaurant",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bentham.variable} ${varelaRound.variable} ${catamaran.variable} ${bilboSwashCaps.variable}`}
    >
      <head>
        {/* Serve CSS as static files so relative url() paths (../media, ../mobilebg) resolve correctly */}
        <link rel="stylesheet" href="/css/chunk2.css" />
        <link rel="stylesheet" href="/css/animations.css" />
        <link rel="stylesheet" href="/css/menu.css" />
        <link rel="stylesheet" href="/css/privacy.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body>
        {children}
        <div id="overlay-root" />
        <div id="datepicker-portal" />
      </body>
    </html>
  );
}
