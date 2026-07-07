import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="site">
        <div className="relative w-full">
          <Hero />
          <About />
          <MenuSection />
          <Testimonials />
          <Gallery />
          <Reservation />
          <Contact />
          <Footer />
        </div>
      </main>
      <ScrollReveal />
    </>
  );
}
