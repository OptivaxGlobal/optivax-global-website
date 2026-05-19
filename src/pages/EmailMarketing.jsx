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
      text: "The best email marketing delivers useful content, offers, and updates without feeling spammy. We design email campaigns that customers want to open.",
    },
    {
      title: "Designed for Engagement",
      text: "Every email should have a clear goal and easy path to act. We create layouts and messaging that help your audience respond.",
    },
    {
      title: "Stronger Campaign Results",
      text: "With the right email strategy and design, your business can turn subscribers into loyal customers while building lasting connections.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Smart Email Marketing Services In Wyoming USA -Optivax Global"
      metaDescription="Optivax Global offers email marketing services to create campaign strategy, newsletter design, automated email sequences, and performance-focused email content."
      metaKeywords="email marketing services, newsletter design, email campaign design, email automation, email strategy"
      canonicalUrl="https://optivaxglobal.com/email-marketing"
      serviceLabel="Email Marketing Services"
      heroHeadline="Email Marketing"
      heroSubheadline="That Connects with Customers"
      heroText="We design email campaigns and newsletter layouts that look professional, deliver value, and drive engagement from your target audience." 
      buttonText="Start Email Marketing"
      contactServiceName="Email Marketing"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default EmailMarketing;
