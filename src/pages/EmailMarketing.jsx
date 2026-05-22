import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Mail, Sparkles, Target, Layers } from "lucide-react";

const EmailMarketing = () => {
  const features = [
    { icon: <Mail size={24} />, title: "Campaign Strategy", text: "Email campaigns built to deliver the right message to the right people at the right time." },
    { icon: <Target size={24} />, title: "Audience Focus", text: "Segmentation and targeting help your emails reach customers who are most likely to act." },
    { icon: <Sparkles size={24} />, title: "Engaging Creative", text: "Email layouts and messaging designed to feel professional and encourage clicks." },
    { icon: <Layers size={24} />, title: "Performance Tracking", text: "We help structure your email content for better open rates, engagement, and conversions." },
  ];

  const deliverables = [
    "Email campaign design",
    "Newsletter layout and content",
    "Automated email series guidance",
    "Promotional email visuals",
    "Audience targeting ideas",
    "Copy and design alignment",
    "Responsive email-ready assets",
    "Conversion-focused email strategy",
  ];

  const contentSections = [
    {
      title: "Emails That Feel Valuable",
      text: "The best email campaigns deliver real value, not noise. We help you send messages people actually want to open.",
    },
    {
      title: "Designed for Engagement",
      text: "Clear layouts and strong calls to action make it easy for readers to understand what to do next.",
    },
    {
      title: "Measure What Matters",
      text: "We help you track opens, clicks, and responses so your email program improves over time.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Smart Email Marketing Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global offers email marketing services to create campaign strategy, newsletter design, automated email sequences, and performance-focused email content."
      metaKeywords="email marketing services, newsletter design, email campaign design, email automation, email strategy"
      canonicalUrl="https://optivaxglobal.com/email-marketing"
      serviceLabel="Email Marketing Services"
      heroHeadline="Email Marketing"
      heroSubheadline="That Connects with Customers"
      heroText="Email is the direct channel for people who already know your business. We craft messages that feel helpful, clear, and worth opening." 
      buttonText="Start Email Marketing"
      contactServiceName="Email Marketing"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default EmailMarketing;
