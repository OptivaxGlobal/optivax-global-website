import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Search, ShieldCheck, Layers, LineChart } from "lucide-react";

const SearchEngineOptimization = () => {
  const features = [
    { icon: <Search size={24} />, title: "SEO-Friendly Pages", text: "We optimize page structure, headings, and copy to help search engines understand your services." },
    { icon: <ShieldCheck size={24} />, title: "Technical SEO Stability", text: "Clean site structure and page performance help your website rank more reliably." },
    { icon: <Layers size={24} />, title: "Content Optimization", text: "We shape your content so it answers customer questions and supports your target keywords." },
    { icon: <LineChart size={24} />, title: "Long-Term Ranking Growth", text: "SEO efforts are built to improve your search visibility over time with consistent progress." },
  ];

  const deliverables = [
    "On-page SEO guidance",
    "Keyword-focused page structure",
    "Meta title and description support",
    "Content clarity and relevance",
    "Technical SEO recommendations",
    "Search visibility planning",
    "Performance and mobile readiness",
    "Conversion-focused SEO advice",
  ];

  const contentSections = [
    {
      title: "SEO Built for People and Search Engines",
      text: "Search engine optimization works best when your content is clear, useful, and easy to navigate. We help shape pages that customers and search engines both understand.",
    },
    {
      title: "Stronger, More Stable Rankings",
      text: "SEO is a long-term effort. We improve your page structure, content, and technical setup so your website can earn more stable visibility over time.",
    },
    {
      title: "Visibility That Supports Growth",
      text: "Higher search visibility means more people finding your services. We help your website connect with the keywords your customers are searching for.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional SEO Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global provides search engine optimization services to improve website visibility, SEO-friendly content, page structure, and long-term search performance."
      metaKeywords="search engine optimization, seo services, on-page seo, website seo, seo agency"
      canonicalUrl="https://optivaxglobal.com/search-engine-optimization"
      serviceLabel="Search Engine Optimization"
      heroHeadline="Search Engine Optimization"
      heroSubheadline="That Helps Your Site Be Found"
      heroText="We shape your website so people and search engines both understand what your business offers." 
      buttonText="Start SEO"
      contactServiceName="Search Engine Optimization"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SearchEngineOptimization;
