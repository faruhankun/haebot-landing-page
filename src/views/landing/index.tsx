import CustomerSection from "./sections/customer";
import FeatureSection from "./sections/feature";
import HeroSection from "./sections/hero";
import ProductSection from "./sections/product";
import CTASection from "./sections/cta";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import CarouselSection from "./sections/carousel";

export function LandingPage() {
  return (
    <>
      <h1 className="sr-only">Landing Page HaeBot Teknologi Indonesia</h1>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CarouselSection />
      <ProductSection />
      <CustomerSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
