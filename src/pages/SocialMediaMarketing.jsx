import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { MessageCircle, Heart, Layers, Sparkles } from "lucide-react";

const SocialMediaMarketing = () => {
  const features = [
    { icon: <MessageCircle size={24} />, title: "Engaging Social Strategy", text: "We build social media plans that help your brand post with purpose, consistency, and relevance." },
    { icon: <Heart size={24} />, title: "Audience Connection", text: "Content is designed to engage people and build stronger relationships with your followers." },
    { icon: <Layers size={24} />, title: "Brand Consistency", text: "Your social posts, stories, and ads all reflect the same brand style and message." },
    { icon: <Sparkles size={24} />, title: "Built for Growth", text: "Social activity is created to increase visibility, trust, and meaningful responses." },
  ];

  const deliverables = [
    "Social content planning",
    "Post design and creative guidance",
    "Story and carousel direction",
    "Social messaging support",
    "Engagement-focused content",
    "Branded social visuals",
    "Platform-appropriate assets",
    "Strategy for consistent posting",
  ];

  const contentSections = [
    {
      title: "Social Presence That Feels Purposeful",
      text: "Social media works best when every post supports a clear idea. We help your brand share content that feels useful, consistent, and worth engaging with.",
    },
    {
      title: "More Than Just Posts",
      text: "A strong social media plan connects content, timing, and message so your activity supports real business goals.",
    },
    {
      title: "Building Visibility and Trust",
      text: "When your social presence is consistent and helpful, your business becomes easier to recognize and trust.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Social Media Management Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global provides social media management services including post strategy, content design, engagement planning, and brand consistency across social platforms."
      metaKeywords="social media management, social content strategy, social media design, social media agency, social media planning"
      canonicalUrl="https://optivaxglobal.com/social-media-marketing"
      serviceLabel="Social Media Management"
      heroHeadline="Social Media Management"
      heroSubheadline="That Builds Real Engagement"
      heroText="We create social media content and post ideas that help your business feel active, professional, and easy to follow."
      buttonText="Start Social Media Management"
      contactServiceName="Social Media Management"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SocialMediaMarketing;
