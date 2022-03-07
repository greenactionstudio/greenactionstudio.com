import React from "react";

import Footer from "../components/common/Footer";
import FeatureGrid from "../components/marketing/FeatureGrid";
import PartnerSection from "../components/marketing/PartnerSection";
import Testimonial from "../components/marketing/Testimonial";
import HomepageHero from "../components/marketing/HomepageHero";
import { openPopupWidget } from "react-calendly";

export default function Index() {
  const onClick = () =>
    openPopupWidget({
      url: "https://calendly.com/green-action-studio/green-action-studio-intro-call",
    });

  return (
    <div className="relative overflow-hidden">
      <main>
        <HomepageHero onClick={onClick} />
        {/* Partner Solutions */}
        <div className="relative z-0 -mt-10 -mr-10 h-56 -rotate-2 transform bg-white lg:-mt-20"></div>
        <div className="relative z-10 -mt-48">
          <PartnerSection onDemoClick={onClick} onTechClick={onClick} />
        </div>
        {/* Features */}
        <div className="relative z-20 -ml-10 h-56 rotate-2 transform bg-primary-700"></div>
        <div className="relative z-30 -mt-16 bg-primary-700 pb-40">
          <FeatureGrid />
        </div>
        {/* Testimonial */}
        <div className="relative z-40 -mr-10 -mt-20 h-56 -rotate-2 transform bg-white"></div>
        <div className="relative z-50 -mt-16 bg-white pb-20">
          <Testimonial />
        </div>
      </main>

      <Footer />
    </div>
  );
}
