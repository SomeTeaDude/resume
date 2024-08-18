import HistorySection from "./sections/HistorySection";
import PageSection from "./PageSection";
import BrandsSection from "./sections/BrandsSection";
import ContactInformationSection from "./sections/ContactInformationSection";
import GetInTouchSection from "./sections/GetInTouchSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import RecommendationsSection from "./sections/RecommendationsSection";
import ServicesSection from "./sections/ServicesSection";
import WidgetNumberSection from "./sections/WidgetNumberSection";

const PageSectionsContainer = () => {
  return (
    <div>
      <PageSection className="pt-6 bg-mountain-fade" id="hero">
        <span className="fader"></span>
        <HeroSection />
      </PageSection>
      <PageSection id="widgets">
        <WidgetNumberSection />
      </PageSection>
      <PageSection id="services">
        <ServicesSection />
      </PageSection>
      <PageSection id="recommendations">
        <RecommendationsSection />
      </PageSection>
      <PageSection id="portfolios">
        <PortfolioSection />
      </PageSection>
      <PageSection id="history">
        <HistorySection />
      </PageSection>
      <PageSection id="contact">
        <ContactInformationSection />
      </PageSection>
      <PageSection id="get-in-touch">
        <GetInTouchSection />
      </PageSection>
      <PageSection id="brands">
        <BrandsSection />
      </PageSection>
    </div>
  );
};

export default PageSectionsContainer;
