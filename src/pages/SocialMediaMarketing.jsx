import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { MessageCircle, Heart, Layers, Sparkles } from "lucide-react";

const SocialMediaMarketing = () => {
  const features = [
    { icon: <MessageCircle size={24} />, title: "Engaging Social Strategy", text: "We build social media plans that help your brand post with purpose, consistency, and relevance." },
    { icon: <Heart size={24} />, title: "Audience Connection", text: "Content is designed to engage people and build stronger relationships with your followers." },
    { icon: <Layers size={24} />, title: "Brand Consistency", text: "Your social posts, stories, and ads all reflect the same brand style and message." },
    { icon: <Sparkles size={24} />, title: "Campaigns for Growth", text: "Social activity is created to increase visibility, trust, and meaningful responses." },
  ];

  const deliverables = [
    "Social content planning",
    "Post design and creative guidance",
    "Story and carousel direction",
    "Campaign messaging support",
    "Engagement-focused content",
    "Branded social visuals",
    "Platform-appropriate assets",
    "Strategy for consistent posting",
  ];

  const contentSections = [
    {
      title: "Social Marketing That Feels Purposeful",
      text: "Social media success starts with clarity. We help your brand share content that feels useful, consistent, and worth engaging with.",
    },
    {
      title: "More Than Just Posts",
      text: "A strong social media plan connects your content, campaigns, and brand story so each post supports your goals.",
    },
    {
      title: "Building Visibility and Trust",
      text: "With the right social media presence, your business can become more familiar, trusted, and visible to ideal customers.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Social Media Marketing Services In Wyoming USA - Optivax Global"
      metaDescription="Optivax Global provides social media marketing services for post strategy, campaign design, engagement planning, and brand consistency across social platforms."
      metaKeywords="social media marketing, social content strategy, social campaign design, social media agency, social media management"
      canonicalUrl="https://optivaxglobal.com/social-media-marketing"
      serviceLabel="Social Media Marketing"
      heroHeadline="Social Media Marketing"
      heroSubheadline="That Builds Real Engagement"
      heroText="We create social media content and campaign ideas that help your business look active, professional, and easy to follow." 
      buttonText="Start Social Marketing"
      contactServiceName="Social Media Marketing"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SocialMediaMarketing;
