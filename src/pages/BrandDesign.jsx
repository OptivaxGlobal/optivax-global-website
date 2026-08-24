import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Paintbrush, Layers, Target, Sparkles } from "lucide-react";

const BrandDesign = () => {
  const features = [
    { icon: <Paintbrush size={24} />, title: "Distinct Brand Identity", text: "We create visual systems that make your business feel memorable, professional, and uniquely yours." },
    { icon: <Layers size={24} />, title: "Consistent Brand Assets", text: "Every design element is built to work together across websites, social media, print, and packaging." },
    { icon: <Target size={24} />, title: "Audience-Driven Visuals", text: "Brand design that reflects your values and attracts the right customers." },
    { icon: <Sparkles size={24} />, title: "Polished Creative Direction", text: "A refined brand look and feel that supports your marketing, sales, and product experience." },
  ];

  const deliverables = [
    "Brand logo and identity system",
    "Color palette and typography",
    "Brand style guide reference",
    "Marketing asset visuals",
    "Social media imagery direction",
    "Print-ready logo files",
    "Digital brand usage files",
    "Brand consistency recommendations",
  ];

  const contentSections = [
    {
      title: "Build a Strong Visual Brand",
      text: "Brand design is more than a logo. It is the entire feeling people take away when they see your business online or in print. We create a polished brand system that supports trust and recognition.",
    },
    {
      title: "Design That Works Across Media",
      text: "Your brand should feel consistent on your website, social posts, brochures, business cards, and promotional campaigns. Our brand designs are built to perform across every channel.",
    },
    {
      title: "Why Brand Design Matters",
      text: "A strong visual brand helps your business stand out, look reliable, and be remembered. When your brand appears professional, customers feel more confident choosing your services.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional Brand Design Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global offers brand design services that create polished visual identities, logos, color systems, and consistent design assets for businesses."
      metaKeywords="brand design services, visual identity design, brand identity agency, logo and branding, corporate brand design"
      canonicalUrl="https://optivaxglobal.com/brand-design"
      serviceLabel="Brand Design Services"
      heroHeadline="Brand Design"
      heroSubheadline="That Makes Your Business Look Polished"
      heroText="We craft cohesive visual brand systems that create trust, recognition, and a professional presence across websites, social media, and print." 
      buttonText="Start Brand Design"
      contactServiceName="Brand Design"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default BrandDesign;
