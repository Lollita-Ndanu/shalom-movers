import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />

      <div className="relative" style={{ height: "600dvh" }}>
        <div className="sticky top-0 h-dvh overflow-y-auto z-0">
          <WhyChooseUs />
        </div>
        <div className="sticky top-0 h-dvh overflow-hidden z-10">
          <Testimonials />
        </div>
        <div className="sticky top-0 h-dvh overflow-y-auto z-20">
          <GalleryPreview />
        </div>
        <div className="sticky top-0 h-dvh overflow-y-auto z-25">
          <FaqSection />
        </div>
        <div className="sticky top-0 h-dvh overflow-hidden z-30">
          <CtaBanner />
        </div>
        <div className="sticky top-0 h-dvh overflow-y-auto z-40">
          <Footer />
        </div>
      </div>
    </>
  );
}
