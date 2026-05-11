import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import AppUIUX from "./pages/AppUIUX";
import EbookCover from "./pages/EbookCover";
import CorporatePresentation from "./pages/CorporatePresentation";
import './index.css';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="website-design-services" element={<WebsiteDesign />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="logo-design-services" element={<LogoDesign />} />
          <Route path="digital-marketing-services" element={<DigitalMarketing />} />
          <Route path="app-ui-ux-design" element={<AppUIUX />} />
          <Route path="ebook-cover-design" element={<EbookCover />} />
          <Route path="corporate-presentation-design" element={<CorporatePresentation />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;