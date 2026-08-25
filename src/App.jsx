import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import Project from "./pages/Project";
import WebDesign from "./pages/WebDesign";
import WebDevelopment from "./pages/WebDevelopment";
import ThankYou from "./pages/ThankYou";
import LogoDesign from "./pages/LogoDesign";
import UIUXDesign from "./pages/UIUXDesign";
import BrandDesign from "./pages/BrandDesign";
import BrochureDesign from "./pages/BrochureDesign";
import GraphicsDesign from "./pages/GraphicsDesign";
import MobileAppDesign from "./pages/MobileAppDesign";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import FlyerDesign from "./pages/FlyerDesign";
import StationaryDesign from "./pages/StationaryDesign";
import ContentManagement from "./pages/ContentManagement";
import Animation from "./pages/Animation";
import CorporatePresentation from "./pages/CorporatePresentation";
import BrandManagement from "./pages/BrandManagement";
import PackagesPage from "./pages/PackagesPage";
import DigitalMarketing from "./pages/DigitalMarketing";
import EmailMarketing from "./pages/EmailMarketing";
import PayPerClick from "./pages/PayPerClick";
import SearchEngineMarketing from "./pages/SearchEngineMarketing";

import SearchEngineOptimization from "./pages/SearchEngineOptimization";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import EbookCover from "./pages/EbookCover";
import EbookPublishing from "./pages/EbookPublishing";
import ComicArts from "./pages/ComicArts";
import HappyIndependenceDayUSA from "./pages/HappyIndependenceDayUSA";
import HomeLeadPopup from "./components/HomeLeadPopup";
import CreativePackagingDesignBlog from "./pages/blogs/CreativePackagingDesignBlog";

import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";

import Blog from "./pages/Blog";
import LogoDesignBlog from "./pages/blogs/LogoDesignBlog";
import WebDesignBlog from "./pages/blogs/WebDesignBlog";
import BrandingBlog from "./pages/blogs/BrandingBlog";
import BrochureDesignBlog from "./pages/Blogs/BrochureDesignBlog";
import GraphicDesignBlog from "./pages/blogs/GraphicDesignBlog";
import MobileAppDesignBlog from "./pages/blogs/MobileAppDesignBlog";
import SeoBlog from "./pages/blogs/SeoBlog";
import PPCAdvertisingBlog from "./pages/blogs/PPCAdvertisingBlog";
import EbookCoverDesignBlog from "./pages/blogs/EbookCoverDesignBlog";
import FlyerDesignBlog from "./pages/blogs/FlyerDesignBlog";
import ContentManagementBlog from "./pages/blogs/ContentManagementBlog";
import StationeryDesignBlog from "./pages/blogs/StationeryDesignBlog";
import UIUXDesignBlog from "./pages/blogs/UIUXDesignBlog";
import EmailMarketingBlog from "./pages/blogs/EmailMarketingBlog";
import SocialMediaMarketingBlog from "./pages/blogs/SocialMediaMarketingBlog";
import BrandManagementBlog from "./pages/blogs/BrandManagementBlog";
import WebDevelopmentMarketingBlog from "./pages/blogs/WebDevelopmentMarketingBlog";
import MobileAppDevelopmentBlog from "./pages/blogs/MobileAppDevelopmentBlog";
import AnimationMarketingBlog from "./pages/blogs/AnimationMarketingBlog";
import DigitalMarketingResultsBlog from "./pages/blogs/DigitalMarketingResultsBlog";
import CorporatePresentationBlog from "./pages/blogs/CorporatePresentationBlog";
import SEMMarketingBlog from "./pages/blogs/SEMMarketingBlog";
import America250Blog from "./pages/blogs/America250Blog";
import SmallBusinessWebsiteResultsBlog from "./pages/blogs/SmallBusinessWebsiteResultsBlog";
import LogoDesignSoftwareBlog from "./pages/blogs/LogoDesignSoftwareBlog";
import UIUXDesignExplainedBlog from "./pages/blogs/UIUXDesignExplainedBlog";
import EbookCoverDesignTipsBlog from "./pages/blogs/EbookCoverDesignTipsBlog";
import WebDesignAgencyVsDIYBlog from "./pages/blogs/WebDesignAgencyVsDIYBlog";
import GraphicDesignBusinessSuccessBlog from "./pages/blogs/GraphicDesignBusinessSuccessBlog";
import CreativeLogoGraphicDesignBlog from "./pages/blogs/CreativeLogoGraphicDesignBlog";
import GraphicDesignModernBrandsBlog from "./pages/blogs/GraphicDesignModernBrandsBlog";
import EffectiveBusinessLogoDesignElementsBlog from "./pages/blogs/EffectiveBusinessLogoDesignElementsBlog";
import MarketingDesignIdeasBrandVisibilityBlog from "./pages/blogs/MarketingDesignIdeasBrandVisibilityBlog";
import BrandIdentityDesignGuideBlog from "./pages/blogs/BrandIdentityDesignGuideBlog";
import RankOnGoogleWithoutPaidAdsBlog from "./pages/blogs/RankOnGoogleWithoutPaidAdsBlog";
import ShopifySolutionsSmallBusinessBlog from "./pages/blogs/ShopifySolutionsSmallBusinessBlog";
import SmallBusinessWebsiteCostBlog from "./pages/blogs/SmallBusinessWebsiteCostBlog";
import BrandIdentityDesignStartupBlog from "./pages/blogs/BrandIdentityDesignStartupBlog";
import SocialMediaGraphicDesignTipsBlog from "./pages/blogs/SocialMediaGraphicDesignTipsBlog";
import EssentialBusinessAppFeaturesBlog from "./pages/blogs/EssentialBusinessAppFeaturesBlog";
import DigitalMarketingMistakesBlog from "./pages/blogs/DigitalMarketingMistakesBlog";
import BestBrandingServicesStartupsBlog from "./pages/blogs/BestBrandingServicesStartupsBlog";

import ProfessionalBusinessWebsiteDesignBlog from "./pages/blogs/ProfessionalBusinessWebsiteDesignBlog";


import AnalyticsTracker from "./components/AnalyticsTracker";
import PaymentForm from "@/pages/PaymentForm";
import PaymentSuccessful from "@/pages/PaymentSuccessful";



function MetaPixelPageView() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);
  const shouldShowLeadPopup = location.pathname !== "/payment-form";

  useEffect(() => {
    if (location.pathname === "/payment-form") {
      return;
    }

    const leadPopupShown =
      sessionStorage.getItem("leadPopupShown") ||
      sessionStorage.getItem("homePopupShown");

    if (leadPopupShown || isLeadPopupOpen) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsLeadPopupOpen(true);
    }, 9500);

    return () => window.clearTimeout(timer);
  }, [location.pathname, isLeadPopupOpen]);

  const handleCloseLeadPopup = () => {
    setIsLeadPopupOpen(false);
    sessionStorage.setItem("leadPopupShown", "true");
  };

  return (
    <>
      {/* Google Analytics Page Tracking */}
      <AnalyticsTracker />

      {/* Meta Pixel Page Tracking */}
      <MetaPixelPageView />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="contact" element={<Contact />} />

            <Route path="services" element={<ServicesPage />} />

            <Route
              path="project/:projectId"
              element={<Project />}
            />
            <Route
              path="digital-growth-packages"
              element={<PackagesPage />}
            />

            <Route
              path="web-design"
              element={<WebDesign />}
            />
            <Route
              path="web-development"
              element={<WebDevelopment />}
            />
            {/* Hidden from public positioning redirected to the active Services page */}
            <Route
              path="game-development"
              element={<Navigate to="/services" replace />}
            />
            <Route
              path="software-development"
              element={<Navigate to="/services" replace />}
            />

            <Route
              path="ui-ux-design"
              element={<UIUXDesign />}
            />

            <Route
              path="thank-you"
              element={<ThankYou />}
            />

  <Route path="/blog" element={<Blog />} />

 <Route
  path="/importance-of-professional-logo-design-businesses"
  element={<LogoDesignBlog />}
/>

<Route
  path="/importance-of-modern-web-design"
  element={<WebDesignBlog />}
/>

<Route
  path="/branding-more-critical-for-today-businesses"
  element={<BrandingBlog />}
/>
<Route
  path="/important-of-professional-brochure-design"
  element={<BrochureDesignBlog />}
/>
<Route
  path="/important-of-graphic-design-bussiness"
  element={<GraphicDesignBlog />}
/>
<Route
  path="/modern-bussiness-well-design-mobile-app"
  element={<MobileAppDesignBlog />}
/>
<Route
  path="/importance-of-small-businesses-seo-services"
  element={<SeoBlog />}
/>
<Route
  path="/ppc-advertising-help-to-generate-results"
  element={<PPCAdvertisingBlog />}
/>
<Route
  path="/important-of-ebook-design-for-competitive-market"
  element={<EbookCoverDesignBlog />}
/>
<Route
  path="/Creative-flyer-design-get-your-business-noticed"
  element={<FlyerDesignBlog />}
/>
<Route
  path="/strategic-important-of-content-management-marketing"
  element={<ContentManagementBlog />}
/>
<Route
  path="/custom-stationery-design-builds-business-credilbility"
  element={<StationeryDesignBlog />}
/>
<Route
  path="/ui-ux-design-turns-into-loyal-customers"
  element={<UIUXDesignBlog />}
/>
<Route
  path="/stronge-email-marketing-to-build-relationship"
  element={<EmailMarketingBlog />}
/>
<Route
  path="/power-of-social-media-in-digital-landscape"
  element={<SocialMediaMarketingBlog />}
/>
<Route
  path="/Strong-brand-management-business-growth"
  element={<BrandManagementBlog />}
/>
<Route
  path="/maximize-growth-modern-web-development"
  element={<WebDevelopmentMarketingBlog />}
/>
<Route
  path="/mobile-app-development-business-growth-necessity"
  element={<MobileAppDevelopmentBlog />}
/>
<Route
  path="/important-of-animation-in-digital-marketing"
  element={<AnimationMarketingBlog />}
/>
<Route
  path="/digital-marketing-produce-long-term-result"
  element={<DigitalMarketingResultsBlog />}
/>
<Route
  path="/impact-of-corporate-design"
  element={<CorporatePresentationBlog />}
/>
<Route
  path="/sem-turns-searches-into-sales"
  element={<SEMMarketingBlog />}
/>
<Route
  path="/celebrating-americas-250th-anniversary"
  element={<America250Blog />}
/>
<Route
  path="/compare-logo-design-for-popular-business-software"
  element={<LogoDesignSoftwareBlog />}
/>
<Route
  path="/small-business-websites-that-get-results"
  element={<SmallBusinessWebsiteResultsBlog />}
/>
<Route
  path="/explain-business-for-ui-ux-design"
  element={<UIUXDesignExplainedBlog />}
/>
<Route
  path="/ebook-cover-design-tip-for-author"
  element={<EbookCoverDesignTipsBlog />}
/>
<Route
  path="/diy-builder-vs-web-design-agency"
  element={<WebDesignAgencyVsDIYBlog />}
/>
<Route
  path="/graphic-design-matters-for-business-success"
  element={<GraphicDesignBusinessSuccessBlog />}
/>
<Route
  path="/creative-packaging-design-better-product-appeal"
  element={<CreativePackagingDesignBlog />}
/>
<Route
  path="/creative-logo-and-graphic-design-modern-brands"
  element={<CreativeLogoGraphicDesignBlog />}
/>
<Route
  path="/graphic-design-service-for-modern-brands"
  element={<GraphicDesignModernBrandsBlog />}
/>
<Route
  path="/effective-business-logo-design-elements"
  element={<EffectiveBusinessLogoDesignElementsBlog />}
/>
<Route
  path="/marketing-design-ideas-brands-visibility"
  element={<MarketingDesignIdeasBrandVisibilityBlog />}
/>
<Route
  path="/brand-identity-design-guide-for-business"
  element={<BrandIdentityDesignGuideBlog />}
/>
<Route
  path="/rank-on-google-without-paid-ads"
  element={<RankOnGoogleWithoutPaidAdsBlog />}
/>
<Route
  path="/shopify-solution-for-small-business"
  element={<ShopifySolutionsSmallBusinessBlog />}
/>
<Route
  path="/small-business-websites-cost"
  element={<SmallBusinessWebsiteCostBlog />}
/>
<Route
  path="/brand-identity-design-for-business-startup"
  element={<BrandIdentityDesignStartupBlog />}
/>
<Route
  path="/social-media-graphics-design-tips"
  element={<SocialMediaGraphicDesignTipsBlog />}
/>
<Route
  path="/essential-feature-for-business-needs"
  element={<EssentialBusinessAppFeaturesBlog />}
/>
<Route
  path="/digital-marketing-mistakes-avoid"
  element={<DigitalMarketingMistakesBlog />}
/>
<Route
  path="/startup-for-best-branding-services"
  element={<BestBrandingServicesStartupsBlog />}
/>
<Route
  path="/professional-business-website-design-services"
  element={<ProfessionalBusinessWebsiteDesignBlog />}
/>


<Route path="/payment-form" element={<PaymentForm />} />
<Route path="/payment-successful" element={<PaymentSuccessful />} />

            <Route
              path="logo-design"
              element={<LogoDesign />}
            />

            <Route
              path="digital-marketing"
              element={<DigitalMarketing />}
            />

            <Route
              path="brand-design"
              element={<BrandDesign />}
            />
            <Route
              path="brochure-design"
              element={<BrochureDesign />}
            />
            <Route
              path="graphics-design"
              element={<GraphicsDesign />}
            />
            <Route
              path="mobile-app-design"
              element={<MobileAppDesign />}
            />
            <Route
              path="mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route
              path="flyer-design"
              element={<FlyerDesign />}
            />
            <Route
              path="stationary-design"
              element={<StationaryDesign />}
            />
            <Route
              path="brand-management"
              element={<BrandManagement />}
            />

            <Route
              path="content-management-system"
              element={<ContentManagement />}
            />
            <Route
              path="email-marketing"
              element={<EmailMarketing />}
            />
            <Route
              path="pay-per-click"
              element={<PayPerClick />}
            />
            <Route
              path="search-engine-marketing"
              element={<SearchEngineMarketing />}
            />
            <Route
              path="search-engine-optimization"
              element={<SearchEngineOptimization />}
            />
            <Route
              path="social-media-marketing"
              element={<SocialMediaMarketing />}
            />
            <Route
              path="animation"
              element={<Animation />}
            />

            <Route
              path="ebook-cover-design"
              element={<EbookCover />}
            />

            <Route
              path="ebook-publishing"
              element={<EbookPublishing />}
            />

            <Route
              path="corporate-presentation-design"
              element={<CorporatePresentation />}
            />

            <Route
              path="comic-arts"
              element={<ComicArts />}
            />

            <Route
              path="250-anniversary-usa"
              element={<HappyIndependenceDayUSA />}
            />

            <Route
              path="privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="terms"
              element={<Terms />}
            />

            <Route
              path="faqs"
              element={<Faqs />}
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
      {shouldShowLeadPopup && (
        <HomeLeadPopup isOpen={isLeadPopupOpen} onClose={handleCloseLeadPopup} />
      )}
    </>
  );
}

export default App;