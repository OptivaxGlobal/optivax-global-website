import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { DollarSign, Target, LineChart, Sparkles } from "lucide-react";

const PayPerClick = () => {
  const features = [
    { icon: <DollarSign size={24} />, title: "Targeted Ad Strategy", text: "Paid search plans built around the keywords and audiences that matter most to your business." },
    { icon: <Target size={24} />, title: "Conversion Focus", text: "Ads are designed with clear messaging and strong calls-to-action for better results." },
    { icon: <LineChart size={24} />, title: "Performance Monitoring", text: "We help you measure ad performance so budgets are spent efficiently and ROI improves." },
    { icon: <Sparkles size={24} />, title: "Fast Visibility", text: "Paid search can deliver rapid visibility on search engines and social platforms for your services." },
  ];

  const deliverables = [
    "Paid search planning",
    "Ad copy and creative direction",
    "Keyword targeting suggestions",
    "Conversion-driven landing page ideas",
    "Budget and bidding guidance",
    "Performance monitoring support",
    "Google Ads and social ad strategy",
    "Action-oriented ad setup",
  ];

  const contentSections = [
    {
      title: "Paid Ads with Purpose",
      text: "Paid search advertising can deliver immediate visibility when it is built around focused offers, audience intent, and strong messaging.",
    },
    {
      title: "Designed for Measurable Results",
      text: "Every paid search effort should be easy to measure. We structure your ad plan so you can see how each click contributes to your goals.",
    },
    {
      title: "Better Results Through Better Ads",
      text: "Ads are only valuable when they reach the right audience. We help build paid search plans that connect your service with people ready to take action.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Paid Search Support Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global helps businesses run paid search advertising with targeted plans, conversion-focused creative, and performance monitoring for faster visibility."
      metaKeywords="paid search support, paid search advertising, paid ads management, google ads management, paid search campaigns"
      canonicalUrl="https://optivaxglobal.com/pay-per-click"
      serviceLabel="Paid Search Support"
      heroHeadline="Paid Search Support"
      heroSubheadline="That Delivers Faster Visibility"
      heroText="We plan paid search advertising that puts your offer in front of the right people quickly and helps your budget work harder."
      buttonText="Start Paid Advertising"
      contactServiceName="Paid Search Support"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default PayPerClick;
