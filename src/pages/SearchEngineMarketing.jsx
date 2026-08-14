import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Search, Target, LineChart, Layers } from "lucide-react";

const SearchEngineMarketing = () => {
  const features = [
    { icon: <Search size={24} />, title: "Search Visibility Strategy", text: "We build a plan to help your business appear when people are actively looking for services like yours." },
    { icon: <Target size={24} />, title: "Ad and Organic Coordination", text: "Paid search and organic visibility work best when they support the same goals, so we keep both aligned." },
    { icon: <LineChart size={24} />, title: "Performance Optimization", text: "Your search strategy is structured for better conversion tracking and measurable results." },
    { icon: <Layers size={24} />, title: "Search-Focused Creative", text: "Ad copy, landing pages, and messaging are built for search intent and clarity." },
  ];

  const deliverables = [
    "Search strategy planning",
    "Paid search guidance",
    "Keyword targeting and structure",
    "Landing page messaging support",
    "Search ad creative direction",
    "Performance measurement advice",
    "Organic and paid search alignment",
    "Search visibility recommendations",
  ];

  const contentSections = [
    {
      title: "Search Strategy with Clear Intent",
      text: "A strong search presence helps your brand appear where customers are already looking. We plan the right mix of paid and organic visibility for your business.",
    },
    {
      title: "Better Coordination, Better Results",
      text: "When search ads and on-site content work together, your business can appear more consistently, capture more attention, and convert more visitors.",
    },
    {
      title: "Measurable Growth from Search",
      text: "Your search strategy should be easy to evaluate. We help you track what's working and adjust your approach to improve results over time.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Search Visibility & Digital Growth Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global helps businesses build a search visibility strategy that combines paid search and organic optimization for a stronger, more consistent online presence."
      metaKeywords="search visibility strategy, paid search planning, search advertising support, online presence services"
      canonicalUrl="https://optivaxglobal.com/search-engine-marketing"
      serviceLabel="Search Visibility Strategy"
      heroHeadline="Search Visibility Strategy"
      heroSubheadline="That Connects Your Brand with Searchers"
      heroText="We build a search visibility plan around how people actually search, then connect that with landing pages and messaging that make sense for your business."
      buttonText="Start Search Strategy"
      contactServiceName="Search Visibility Strategy"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SearchEngineMarketing;
