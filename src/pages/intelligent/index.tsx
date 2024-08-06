import {
  HeroSection,
  FeatureSection,
  StreamlineSection,
  OptimizeSection,
  EcosystemSection,
  FinanceSection,
  FAQSection
} from "@features/sections/intelligent";
import S from "./index.module.scss";
import { CtaSection } from "@features/sections/cta";

const IntelligentCustody = () => {
  return (
    <div className={S.body}>
      <HeroSection />
      <FeatureSection/>
      <FinanceSection/>
      <StreamlineSection/>
      <OptimizeSection/>
      <EcosystemSection/>
      <CtaSection/>
      <FAQSection/>
    </div>
  );
};

export default IntelligentCustody;
