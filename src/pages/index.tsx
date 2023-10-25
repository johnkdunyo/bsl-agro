import SiteLayout from "@/components/Layout/SiteLayout";
import AboutSection from "@/components/agroSpectrumPage/AboutSection";
import AreaOfExpertiseSection from "@/components/agroSpectrumPage/AreaOfExpertiseSection";
import EnumerationProcess from "@/components/agroSpectrumPage/EnumerationProcess";
import FAQsection from "@/components/agroSpectrumPage/FAQsection";
import HeroSection from "@/components/agroSpectrumPage/HeroSection";
import MapSection from "@/components/agroSpectrumPage/MapSection";
import MissionVission from "@/components/agroSpectrumPage/MissionVision";
import OurRolloutSection from "@/components/agroSpectrumPage/OurRolloutSection";
import PartnerShipSection from "@/components/agroSpectrumPage/PartnerShipSection";
import RollingTextSection from "@/components/agroSpectrumPage/RollingTextSection";
import SmartFarming from "@/components/agroSpectrumPage/SmartFarming";
import WeInnovateSection from "@/components/agroSpectrumPage/WeInnovateSection";
import React from "react";

const Spectrumfibre = () => {
  return (
    <SiteLayout pageName={"AgroSpectrum"}>
      <>
        <HeroSection />
        <AboutSection />
        <MapSection />
        <SmartFarming />
        <EnumerationProcess />
        <FAQsection />
      </>
    </SiteLayout>
  );
};

export default Spectrumfibre;
