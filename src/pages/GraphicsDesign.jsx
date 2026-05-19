import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Image, Sparkles, Palette, Layers } from "lucide-react";

const GraphicsDesign = () => {
  const features = [
    { icon: <Image size={24} />, title: "Bold Visual Content", text: "Graphics that help your brand capture attention and communicate ideas quickly." },
    { icon: <Palette size={24} />, title: "Consistent Brand Style", text: "Designs that match your brand colors, fonts, and personality across every asset." },
    { icon: <Sparkles size={24} />, title: "Marketing-Ready Graphics", text: "From social posts to ads, every graphic is made for engagement and shareability." },
    { icon: <Layers size={24} />, title: "Flexible Design Files", text: "Delivered in formats ready for web, social, print, and campaign use." },
  ];

  const deliverables = [
    "Social media graphics",
    "Digital ad visuals",
    "Brand illustrations",
    "Presentation and event assets",
    "Promotional design templates",
    "High-resolution export files",
    "Creative visual concepts",
    "Designs built for quick publishing",
  ];

  const contentSections = [
    {
      title: "Graphics Designed to Perform",
      text: "Strong graphic design helps your business stand out in crowded feeds, ads, and email campaigns. We create visuals that communicate your message quickly and professionally.",
    },
    {
      title: "Every Asset Looks Like One Brand",
      text: "We design graphics with consistent style, color, and typography so every piece of content feels part of the same brand story.",
    },
    {
      title: "Fast Visual Support for Marketing",
      text: "Whether you need social posts, ad banners, or campaign visuals, we deliver graphics that are ready to launch with your marketing plan.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional Graphic Design Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global provides graphics design services for digital campaigns, social media, ads, and brand content with polished, on-brand visuals built for results."
      metaKeywords="graphics design, digital graphics, social media graphics, marketing visuals, brand graphics design"
      canonicalUrl="https://optivaxglobal.com/graphics-design"
      serviceLabel="Graphics Design Services"
      heroHeadline="Graphics Design"
      heroSubheadline="That Makes Your Brand Stand Out"
      heroText="We design polished visual content for social media, digital ads, print campaigns, and branded marketing materials." 
      buttonText="Start Graphics Design"
      contactServiceName="Graphics Design"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default GraphicsDesign;
