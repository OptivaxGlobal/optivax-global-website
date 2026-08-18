import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { DollarSign, Target, LineChart, Sparkles } from "lucide-react";

const PayPerClick = () => {
  const features = [
    { icon: <DollarSign size={24} />, title: "Targeted Ad Strategy", text: "Paid search plans built around the keywords and audiences that matter most to your business." },
    { icon: <Target size={24} />, title: "Clear Ad Messaging", text: "Ads are designed with clear messaging and strong calls-to-action." },
    { icon: <LineChart size={24} />, title: "Performance Monitoring", text: "We help you measure ad performance so budgets are spent efficiently." },
    { icon: <Sparkles size={24} />, title: "Search & Social Visibility", text: "Paid search is designed to increase visibility on search engines and social platforms for your services." },
  ];

  const deliverables = [
    "Paid search planning",
    "Ad copy and creative direction",
    "Keyword targeting suggestions",
    "Landing page ideas built around your campaign",
    "Budget and bidding guidance",
    "Performance monitoring support",
    "Google Ads and social ad strategy",
    "Action-oriented ad setup",
  ];

  const contentSections = [
    {
      title: "Paid Ads with Purpose",
      text: "Paid search advertising is built around focused offers, audience intent, and strong messaging.",
    },
    {
      title: "Designed to Be Measurable",
      text: "Every paid search effort should be easy to measure. We structure your ad plan so you can see how each click relates to your goals.",
    },
    {
      title: "Ads Built Around Your Audience",
      text: "Ads are only valuable when they reach the right audience. We help build paid search plans that connect your service with the people searching for it.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Paid Search Support Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global helps businesses run paid search advertising with targeted plans, clear ad creative, and performance monitoring."
      metaKeywords="paid search support, paid search advertising, paid ads management, google ads management, paid search campaigns"
      canonicalUrl="https://optivaxglobal.com/pay-per-click"
      serviceLabel="Paid Search Support"
      heroHeadline="Paid Search Support"
      heroSubheadline="Built Around Your Business"
      heroText="We plan paid search advertising that puts your offer in front of the right people and helps you manage your budget efficiently."
      buttonText="Start Paid Advertising"
      contactServiceName="Paid Search Support"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default PayPerClick;
