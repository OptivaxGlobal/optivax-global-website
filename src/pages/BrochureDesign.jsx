import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Layout, FileText, Sparkles, Layers } from "lucide-react";

const BrochureDesign = () => {
  const features = [
    { icon: <Layout size={24} />, title: "Engaging Layouts", text: "Brochures designed to guide readers naturally through your key messages and offers." },
    { icon: <FileText size={24} />, title: "Clear Content Structure", text: "Content and visuals are arranged for fast scanning, strong impact, and better lead response." },
    { icon: <Sparkles size={24} />, title: "Brand-Aligned Visuals", text: "Every brochure page matches your brand style, colors, and tone for a consistent look." },
    { icon: <Layers size={24} />, title: "Print & Digital Ready", text: "Delivered in formats ready for print, email, and PDF distribution without extra work." },
  ];

  const deliverables = [
    "Full brochure design layout",
    "Modern print-ready pages",
    "Digital PDF version",
    "Brand-consistent imagery",
    "Compelling headings and copy structure",
    "Professional typography pairing",
    "Visual hierarchy for easy reading",
    "Final delivery in ready-to-print format",
  ];

  const contentSections = [
    {
      title: "Brochures That Communicate Clearly",
      text: "A good brochure should present your product, service, or brand story in a way that is easy to understand. We design brochure layouts that feel modern, readable, and attractive.",
    },
    {
      title: "Print and Digital Versatility",
      text: "Your brochure can work as a printed handout, a downloadable PDF, or a digital brochure for email and social campaigns. We design with each format in mind.",
    },
    {
      title: "Designed to Support Your Marketing",
      text: "With the right brochure design, you can share your message confidently in meetings, events, and client outreach while maintaining a professional brand image.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional Brochure Design Services in Wyoming USA -Optivax Global"
      metaDescription="Optivax Global creates brochure design services for print and digital distribution, helping businesses present offers, brand stories, and product details with clarity and style."
      metaKeywords="brochure design, print brochure design, digital brochure, marketing brochure layout, brochure design services"
      canonicalUrl="https://optivaxglobal.com/brochure-design"
      serviceLabel="Brochure Design Services"
      heroHeadline="Brochure Design"
      heroSubheadline="That Speaks Clearly"
      heroText="We design professional brochures that present your story, services, and offers in a polished layout for print or digital distribution."
      buttonText="Start Brochure Design"
      contactServiceName="Brochure Design"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default BrochureDesign;
