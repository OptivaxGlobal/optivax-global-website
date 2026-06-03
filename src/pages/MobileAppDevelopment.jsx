import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Smartphone, Code2, Layers, Zap } from "lucide-react";

const MobileAppDevelopment = () => {
  const features = [
    { icon: <Smartphone size={24} />, title: "App Performance Focus", text: "We build mobile app experiences optimized for smooth loading, responsive behavior, and stable interactions." },
    { icon: <Code2 size={24} />, title: "Technical App Development", text: "Our process covers the frontend, integration points, and launch readiness for your mobile product." },
    { icon: <Layers size={24} />, title: "Functional App Architecture", text: "We structure app screens, data flow, and navigation so your app works reliably across devices." },
    { icon: <Zap size={24} />, title: "Ready for Launch", text: "Your mobile app project will be prepared for testing, deployment, and ongoing improvement." },
  ];

  const deliverables = [
    "Custom mobile app development",
    "Responsive app frontend build",
    "API and integration support",
    "App performance tuning",
    "App store or deployment prep",
    "Cross-device testing",
    "Scalable app structure",
    "Technical handoff documentation",
  ];

  const contentSections = [
    {
      title: "Development That Starts with Strategy",
      text: "We define the customer journey, technical requirements, and success criteria so the app delivers real value.",
    },
    {
      title: "Reliable App Functionality",
      text: "Our focus is stable, testable code, efficient data flow, and performance tuning that keeps the app responsive.",
    },
    {
      title: "Launch-Ready Delivery",
      text: "We prepare your app for deployment with testing, integration guidance, and documentation for smooth releases and future updates.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Mobile App Development Services Wyoming USA - Optivax Global"
      metaDescription="Optivax Global delivers mobile app development services focused on performance, integrations and launch readiness for mobile products."
      metaKeywords="mobile app development, app design services, mobile application development, ios app development, android app development"
      canonicalUrl="https://optivaxglobal.com/mobile-app-development"
      serviceLabel="Mobile App Development"
      heroHeadline="Mobile App Development"
      heroSubheadline="Built for Smooth Mobile Experiences"
      heroText="We build mobile apps that feel fast, function reliably, and are ready for testing, launch, and future updates." 
      buttonText="Start App Development"
      contactServiceName="Mobile App Development"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default MobileAppDevelopment;
