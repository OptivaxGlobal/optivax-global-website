import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ClipboardList } from "lucide-react";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import WebsiteDesign from "./pages/WebsiteDesign";
import ThankYou from "./pages/ThankYou";
import LogoDesign from "./pages/LogoDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import MobileAppDesign from "./pages/MobileAppDesign";
import UIUXDesign from "./pages/UIUXDesign";
import BrandDesign from "./pages/BrandDesign";
import BrochureDesign from "./pages/BrochureDesign";
import GraphicsDesign from "./pages/GraphicsDesign";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
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

import AnalyticsTracker from "./components/AnalyticsTracker";

import "./index.css";

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
              path="website-design"
              element={<WebsiteDesign />}
            />
            <Route
              path="web-design"
              element={<WebsiteDesign />}
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
              path="web-development"
              element={<WebsiteDesign />}
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