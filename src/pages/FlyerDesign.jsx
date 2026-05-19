import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Layout, Megaphone, Sparkles, FilePlus } from "lucide-react";

const FlyerDesign = () => {
  const features = [
    { icon: <Megaphone size={24} />, title: "Promotional Focus", text: "Flyers designed to clearly share your offer and motivate fast action." },
    { icon: <Layout size={24} />, title: "Strong Visual Hierarchy", text: "Information is organized so readers understand the message instantly." },
    { icon: <Sparkles size={24} />, title: "Brand-Aligned Design", text: "Every flyer matches your brand style, color palette, and tone." },
    { icon: <FilePlus size={24} />, title: "Print and Digital Ready", text: "Delivered in formats ready for printing or sharing online." },
  ];

  const deliverables = [
    "Flyer layout design",
    "Event and promotion visuals",
    "Clear headline and CTA placement",
    "High-resolution print files",
    "Optimized digital flyer version",
    "Professional type hierarchy",
    "On-brand imagery and styling",
    "Ready-to-share artwork",
  ];

  const contentSections = [
    {
      title: "Designs That Drive Response",
      text: "A flyer is a quick way to share a service, event, or promotion. We design flyers that look professional and make the desired action easy to understand.",
    },
    {
      title: "Flexible for Print and Online",
      text: "Whether you need a printed handout or a digital social asset, we design flyers that work beautifully in both formats.",
    },
    {
      title: "Clear Messaging, Smart Design",
      text: "Your flyer should say what matters first: who you help, what is offered, and what the next step is. We design around that clarity.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Flyer Design Services In Wyoming  USA - Optivax Global"
      metaDescription="Optivax Global creates flyer design services for promotions, events, and campaigns, delivering professional print and digital flyers that communicate clearly."
      metaKeywords="flyer design, event flyer design, promotional flyer design, print flyer design, digital flyer design"
      canonicalUrl="https://optivaxglobal.com/flyer-design"
      serviceLabel="Flyer Design Services"
      heroHeadline="Flyer Design"
      heroSubheadline="That Gets Attention Quickly"
      heroText="We design promotional flyers for events, offers, and campaigns that are attractive, clear, and ready to share in print or digital channels." 
      buttonText="Start Flyer Design"
      contactServiceName="Flyer Design"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default FlyerDesign;
