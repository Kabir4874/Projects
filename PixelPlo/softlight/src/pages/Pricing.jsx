import Faq from "../components/about/Faq";
import NewsLetter from "../components/about/NewsLetter";
import Enterprise from "../components/pricing/Enterprise";
import HeroSection from "../components/pricing/HeroSection";
import PricingPlans from "../components/pricing/PricingPlans";

const Pricing = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <PricingPlans />
      <Enterprise />
      <div className="w-[1012px] mx-auto -mt-[4.94rem]">
        <Faq/>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default Pricing;
