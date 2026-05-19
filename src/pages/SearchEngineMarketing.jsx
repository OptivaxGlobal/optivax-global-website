import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Search, Target, LineChart, Layers } from "lucide-react";

const SearchEngineMarketing = () => {
  const features = [
    { icon: <Search size={24} />, title: "Search Visibility Strategy", text: "We plan search marketing to help your business appear when people are actively looking for services like yours." },
    { icon: <Target size={24} />, title: "Ad and Organic Coordination", text: "Search engine marketing works best when paid ads and SEO support the same goals." },
    { icon: <LineChart size={24} />, title: "Performance Optimization", text: "Campaigns are structured for better conversion tracking and measurable growth." },
    { icon: <Layers size={24} />, title: "Search-Focused Creative", text: "Ad copy, landing pages, and messaging are built for search intent and clarity." },
  ];

  const deliverables = [
    "Search engine marketing plan",
    "Paid search campaign guidance",
    "Keyword targeting and structure",
    "Landing page messaging support",
    "Search ad creative direction",
    "Performance measurement advice",
    "SEO and PPC alignment",
    "Search visibility recommendations",
  ];

  const contentSections = [
    {
      title: "Search Marketing with Clear Intent",
      text: "Search engine marketing helps your brand appear where customers are already searching. We plan the right mix of paid and organic attention for your business.",
    },
    {
      title: "Better Campaign Coordination",
      text: "When search ads and SEO content work together, your business can rank higher, capture more clicks, and convert more traffic.",
    },
    {
      title: "Measurable Growth from Search", 
      text: "Search marketing should be easy to evaluate. We help you track what works and adjust campaigns to improve results over time.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional SEO Marketing  Services Online In USA - Optivax Global"
      metaDescription="Optivax Global offers search engine marketing services that combine paid search, search strategy, and conversion-oriented campaigns for stronger visibility."
      metaKeywords="search engine marketing, sem services, paid search strategy, search marketing agency, search advertising"
      canonicalUrl="https://optivaxglobal.com/search-engine-marketing"
      serviceLabel="Search Engine Marketing"
      heroHeadline="Search Engine Marketing"
      heroSubheadline="That Connects Your Brand with Searchers"
      heroText="We build search engine marketing plans that help your business show up for the keywords your customers use and turn search traffic into leads." 
      buttonText="Start Search Marketing"
      contactServiceName="Search Engine Marketing"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SearchEngineMarketing;
