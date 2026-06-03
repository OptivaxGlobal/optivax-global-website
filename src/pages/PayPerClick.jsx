import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { DollarSign, Target, LineChart, Sparkles } from "lucide-react";

const PayPerClick = () => {
  const features = [
    { icon: <DollarSign size={24} />, title: "Targeted Ad Strategy", text: "PPC campaigns built around the keywords and audiences that matter most to your business." },
    { icon: <Target size={24} />, title: "Conversion Focus", text: "Ads are designed with clear messaging and strong calls-to-action for better results." },
    { icon: <LineChart size={24} />, title: "Performance Monitoring", text: "We help you measure ad performance so budgets are spent efficiently and ROI improves." },
    { icon: <Sparkles size={24} />, title: "Fast Visibility", text: "PPC can deliver rapid visibility on search engines and social platforms for your services." },
  ];

  const deliverables = [
    "PPC campaign planning",
    "Ad copy and creative direction",
    "Keyword targeting suggestions",
    "Conversion-driven landing page ideas",
    "Budget and bidding guidance",
    "Performance monitoring support",
    "Google Ads and social ad strategy",
    "Action-oriented campaign setup",
  ];

  const contentSections = [
    {
      title: "Paid Ads with Purpose",
      text: "Pay Per Click advertising can deliver immediate visibility when it is built around focused offers, audience intent, and strong messaging.",
    },
    {
      title: "Designed for Measurable Results",
      text: "Every PPC effort should be easy to measure. We structure campaigns so you can see how each click and ad contributes to your goals.",
    },
    {
      title: "Better Leads Through Better Ads",
      text: "Ads are only valuable when they attract the right audience. We help create PPC campaigns that match your service with people ready to take action.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Pay Per Click (PPC) Advertising Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global helps businesses run pay-per-click ads with targeted campaigns, conversion-focused creatives, and performance monitoring for faster visibility."
      metaKeywords="pay per click services, ppc management, ppc agency, paid ads, google ads management"
      canonicalUrl="https://optivaxglobal.com/pay-per-click"
      serviceLabel="Pay Per Click Services"
      heroHeadline="Pay Per Click (PPC)"
      heroSubheadline="That Delivers Faster Visibility"
      heroText="We plan paid search campaigns that put your offer in front of the right people quickly and make your budget work harder." 
      buttonText="Start PPC Campaign"
      contactServiceName="Pay Per Click"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default PayPerClick;
