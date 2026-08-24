import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Search, ShieldCheck, Layers, LineChart } from "lucide-react";

const SearchEngineOptimization = () => {
  const features = [
    { icon: <Search size={24} />, title: "Clear Page Structure", text: "We organize your page structure, headings, and copy so both visitors and search engines can quickly understand what you offer." },
    { icon: <ShieldCheck size={24} />, title: "Technical Site Health", text: "A clean site structure and strong page performance help your website perform more reliably in search results." },
    { icon: <Layers size={24} />, title: "Content Optimization", text: "We shape your content so it answers customer questions clearly and reflects the terms people actually search for." },
    { icon: <LineChart size={24} />, title: "Long-Term Visibility Focus", text: "Our approach is built around consistent, steady work on your search visibility over time." },
  ];

  const deliverables = [
    "On-page optimization guidance",
    "Keyword-focused page structure",
    "Meta title and description support",
    "Content clarity and relevance",
    "Technical optimization recommendations",
    "Search visibility planning",
    "Performance and mobile readiness",
    "Clarity-focused visibility advice",
  ];

  const contentSections = [
    {
      title: "Built for People and Search Engines",
      text: "Website visibility works best when your content is clear, useful, and easy to navigate. We help shape pages that customers and search engines both understand.",
    },
    {
      title: "Stronger, More Stable Search Performance",
      text: "Improving your search visibility is a long-term effort. We refine your page structure, content, and technical setup so your website can earn steadier visibility over time.",
    },
    {
      title: "Visibility Built Around Your Customers",
      text: "Stronger search visibility means more people finding your services. We help your website align with the terms your customers are actually searching for.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Search Visibility Optimization Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global helps businesses improve website visibility through clear content structure, technical optimization, and long-term search performance support."
      metaKeywords="website visibility, search visibility optimization, on-page optimization, website structure, online presence services"
      canonicalUrl="https://optivaxglobal.com/search-engine-optimization"
      serviceLabel="Search Visibility Optimization"
      heroHeadline="Website Visibility"
      heroSubheadline="That Helps Customers Find You"
      heroText="We structure your website so it's clear, easy to navigate, and easy for people to find when they're searching for what you offer."
      buttonText="Get Visibility Support"
      contactServiceName="Search Visibility Optimization"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SearchEngineOptimization;
