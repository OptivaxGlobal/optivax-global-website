import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import WebDesign from "./pages/WebDesign";
import ThankYou from "./pages/ThankYou";
import LogoDesign from "./pages/LogoDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import MobileAppDesign from "./pages/MobileAppDesign";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import BrandDesign from "./pages/BrandDesign";
import BrochureDesign from "./pages/BrochureDesign";
import GraphicsDesign from "./pages/GraphicsDesign";
import FlyerDesign from "./pages/FlyerDesign";
import StationaryDesign from "./pages/StationaryDesign";
import BrandManagement from "./pages/BrandManagement";
import ContentManagement from "./pages/ContentManagement";
import EmailMarketing from "./pages/EmailMarketing";
import PayPerClick from "./pages/PayPerClick";
import SearchEngineMarketing from "./pages/SearchEngineMarketing";
import SearchEngineOptimization from "./pages/SearchEngineOptimization";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import Animation from "./pages/Animation";
import EbookCover from "./pages/EbookCover";
import CorporatePresentation from "./pages/CorporatePresentation";

import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";

import Blog from "./pages/Blog";
import LogoDesignBlog from "./pages/blogs/LogoDesignBlog";
import WebDesignBlog from "./pages/blogs/WebDesignBlog";
import SeoBlog from "./pages/blogs/SeoBlog";
import BrandingBlog from "./pages/blogs/BrandingBlog";
import BrochureDesignBlog from "./pages/Blogs/BrochureDesignBlog";
import GraphicDesignBlog from "./pages/blogs/GraphicDesignBlog";
import MobileAppDesignBlog from "./pages/blogs/MobileAppDesignBlog";
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

            <Route
              path="project/:projectId"
              element={<Project />}
            />

            <Route
              path="web-design"
              element={<WebDesign />}
            />
            <Route
              path="web-development"
              element={<WebDevelopment />}
            />

            <Route
              path="app-ui-ux-design"
              element={<UIUXDesign />}
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
  path="/importance-of-small-businesses-seo-services"
  element={<SeoBlog />}
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
              path="content-management"
              element={<ContentManagement />}
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
              path="corporate-presentation-design"
              element={<CorporatePresentation />}
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
    </>
  );
}

export default App;