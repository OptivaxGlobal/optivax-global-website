import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { ShieldCheck, Target, Layers, Sparkles } from "lucide-react";

const BrandManagement = () => {
  const features = [
    { icon: <ShieldCheck size={24} />, title: "Consistent Brand Control", text: "We help keep your brand messaging and visuals consistent across every channel." },
    { icon: <Target size={24} />, title: "Audience Alignment", text: "Brand management ensures your message reaches the right people with the right tone." },
    { icon: <Layers size={24} />, title: "Strategic Brand Growth", text: "We create guidelines and processes that support long-term brand reputation and recognition." },
    { icon: <Sparkles size={24} />, title: "Trusted Brand Experience", text: "Every touchpoint is reviewed and aligned to protect how your brand is perceived." },
  ];

  const deliverables = [
    "Brand guidelines document",
    "Visual identity review",
    "Messaging alignment strategy",
    "Channel consistency checks",
    "Brand asset organization",
    "Ongoing brand recommendations",
    "Campaign brand direction",
    "Professional brand positioning",
  ];

  const contentSections = [
    {
      title: "Protect Your Brand Image",
      text: "Brand management helps your business stay consistent, reliable, and recognizable over time. We build the systems that keep your voice, visuals, and positioning steady.",
    },
    {
      title: "Align Every Touchpoint",
      text: "From website content to social posts and marketing campaigns, consistent branding creates trust. We make sure every asset supports the same brand story.",
    },
    {
      title: "Brand Strategy That Scales",
      text: "With strong brand management, your business can grow without losing clarity. We help define the rules and assets that keep your brand strong as it expands.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Brand Management Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global offers brand management services to keep your messaging, design, and identity consistent across all channels for a stronger business presence."
      metaKeywords="brand management, brand strategy, brand consistency, brand guidelines, brand reputation management"
      canonicalUrl="https://optivaxglobal.com/brand-management"
      serviceLabel="Brand Management Services"
      heroHeadline="Brand Management"
      heroSubheadline="That Keeps Your Identity Consistent"
      heroText="We help businesses manage their visual identity, messaging, and brand presence so every customer interaction feels aligned and professional." 
      buttonText="Start Brand Management"
      contactServiceName="Brand Management"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default BrandManagement;
