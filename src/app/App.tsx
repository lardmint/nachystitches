import { Hero } from "./components/Hero";
import { BrandStory } from "./components/BrandStory";
import { WhyDifferent } from "./components/WhyDifferent";
import { ProductHighlight } from "./components/ProductHighlight";
import { Gallery } from "./components/Gallery";
import { StylingDelivery } from "./components/StylingDelivery";
import { NationwideDelivery } from "./components/NationwideDelivery";
import { Reviews } from "./components/Reviews";
import { ShopLocation } from "./components/ShopLocation";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BrandStory />
      <WhyDifferent />
      <ProductHighlight />
      <Gallery />
      <StylingDelivery />
      <NationwideDelivery />
      <Reviews />
      <ShopLocation />
      <FinalCTA />
      <Footer />
    </div>
  );
}