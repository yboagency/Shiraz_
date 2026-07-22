import type { Metadata } from "next";
import Header from "@/components/Header";
import MenuPage from "@/components/MenuPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Menu — Shiraz Afghan Restaurant, Hayes London",
  description:
    "Explore the full Shiraz menu — charcoal-grilled kebabs, aromatic biryani, karahi, seafood, curries, Afghan pasta, sides, desserts and drinks. Authentic Afghan & Persian flavours in Hayes, London.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Our Menu — Shiraz Afghan Restaurant",
    description:
      "Charcoal-grilled kebabs, aromatic biryani, karahi, seafood and more — explore the full Shiraz menu.",
    url: "https://shirazafghan.co.uk/menu",
    siteName: "Shiraz",
    locale: "en_GB",
    type: "website",
  },
};

export default function Menu() {
  return (
    <>
      {/* Scoped to this route: React hoists <link> tags to <head> regardless of
          nesting, so menu.css only loads on /menu instead of on every page. */}
      <link rel="stylesheet" href="/css/menu.css" />
      <Header />
      <main className="site">
        <MenuPage />
      </main>
      <Footer />
    </>
  );
}
