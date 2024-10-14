import Image from "next/image";
import HeroSection from "./components/Hero";
import DiscoverPremiumCropSelection from "./components/Discover-Premium-Crop-Selection";
import DiscoverHealthBenefitsOfCrops from "./components/Discover-Health-Benefits-of-Our-Crops";
import InnovativeFarmingTechniques from "./components/Innovative-Farming-Techniques";
import ExploreComprehensiveAgriServices from "./components/Explore-Comprehensive-Agri-Services";
import GetInTouch from "./components/Get-In-Touch";
import JoinUs from "./components/Join-Us";
import StayUpdated from "./components/Stay-Updated";
import CultivatingQualityCrops from "./components/Cultivating-Quality-Crops";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <div className="flex flex-col items-cente justify-items-center pt-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section  className="px-8">
        <HeroSection />
      </section>
      <section className="px-8"> 
        <DiscoverPremiumCropSelection />
      </section>
      <section className="px-8">
        <DiscoverHealthBenefitsOfCrops />
      </section>
      <section className="px-8"> 
        <InnovativeFarmingTechniques />
      </section>
      <section className="px-8">
        <ExploreComprehensiveAgriServices />
      </section>
      <section className="px-8">
        <CultivatingQualityCrops />
      </section>
      <section className="px-8">
        <JoinUs />
      </section>
      <section className="px-8">
        <StayUpdated />
      </section>
      <section className="px-8">
        {/* <Connect /> */}
        <GetInTouch />
      </section>
    </div>
  );
}
