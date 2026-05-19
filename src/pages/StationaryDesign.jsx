import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { CreditCard, FileText, Layers, Sparkles } from "lucide-react";

const StationaryDesign = () => {
  const features = [
    { icon: <CreditCard size={24} />, title: "Professional Brand Stationery", text: "Stationery designs that make your business appear organized, trustworthy, and polished." },
    { icon: <FileText size={24} />, title: "Complete Business Assets", text: "Letterheads, business cards, envelopes, and document templates designed to match your brand." },
    { icon: <Layers size={24} />, title: "Consistent Brand Presentation", text: "Every stationery piece uses the same visual system for a unified client experience." },
    { icon: <Sparkles size={24} />, title: "Print-Ready Formats", text: "Delivered in high-quality files ready for professional printing." },
  ];

  const deliverables = [
    "Business card design",
    "Letterhead layout",
    "Envelope design",
    "Email signature guidance",
    "Document template styling",
    "Print-ready file delivery",
    "Consistent brand identity",
    "Professional stationary system",
  ];

  const contentSections = [
    {
      title: "Stationery That Strengthens Your Brand",
      text: "Business stationery is a subtle but powerful way to show professionalism. We design cohesive stationery sets that reinforce your brand in every client interaction.",
    },
    {
      title: "Designed for Every Touchpoint",
      text: "From printed envelopes to email footers, your stationery should feel consistent and well-crafted across every business asset.",
    },
    {
      title: "Ready for Printing and Sharing",
      text: "We deliver stationery visuals in print-ready formats so you can order high-quality materials without extra design work.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Stationery Design Services In Wyoming USA - Optivax Global"
      metaDescription="Optivax Global provides stationery design services like business cards, letterheads, envelopes, and template design for polished, brand-consistent business materials."
      metaKeywords="stationery design, business card design, letterhead design, envelope design, brand stationery"
      canonicalUrl="https://optivaxglobal.com/stationary-design"
      serviceLabel="Stationary Design Services"
      heroHeadline="Stationary Design"
      heroSubheadline="That Feels Professional"
      heroText="We design brand stationery like business cards, letterheads, and envelopes that look polished and reinforce your company identity." 
      buttonText="Start Stationary Design"
      contactServiceName="Stationary Design"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default StationaryDesign;
