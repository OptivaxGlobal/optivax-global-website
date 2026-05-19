import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Smartphone, Code2, Layers, Zap } from "lucide-react";

const MobileAppDevelopment = () => {
  const features = [
    { icon: <Smartphone size={24} />, title: "App-First Experience", text: "Mobile applications designed to feel fast, intuitive, and polished on every screen." },
    { icon: <Code2 size={24} />, title: "End-to-End Development", text: "We build mobile app projects that include design, development, deployment, and performance." },
    { icon: <Layers size={24} />, title: "Native-Like Usability", text: "App interfaces that behave like native mobile experiences with smooth navigation and clear controls." },
    { icon: <Zap size={24} />, title: "Launch-Ready Delivery", text: "A complete, polished app experience ready for user testing, launch, and ongoing app growth." },
  ];

  const deliverables = [
    "Custom mobile app design",
    "UX and interaction planning",
    "Clickable screen prototypes",
    "Developer-ready UI assets",
    "Performance-focused interface design",
    "App store ready visuals",
    "Mobile product strategy advice",
    "Modern design and navigation patterns",
  ];

  const contentSections = [
    {
      title: "Development That Starts with Users",
      text: "Mobile app development should begin with clarity around user goals. We focus on simple, effective screens that help people complete actions quickly and confidently.",
    },
    {
      title: "Polished Mobile Experiences",
      text: "Your app design should feel as responsive and intuitive as the best native mobile apps. We design each screen so users understand what to do without confusion.",
    },
    {
      title: "Launch-Ready App Design",
      text: "From onboarding to primary flows, we design app interfaces that are ready for developer handoff and real user adoption.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Mobile App DSevelopment Services Wyoming USA - Optivax Global"
      metaDescription="Optivax Global delivers mobile app development services that include UX design, app interface development, prototypes, and launch-ready mobile experiences."
      metaKeywords="mobile app development, app design services, mobile application development, ios app development, android app development"
      canonicalUrl="https://optivaxglobal.com/mobile-app-development"
      serviceLabel="Mobile App Development"
      heroHeadline="Mobile App Development"
      heroSubheadline="Built for Smooth Mobile Experiences"
      heroText="We deliver mobile app design and development support for polished, modern applications that feel intuitive and perform reliably." 
      buttonText="Start App Development"
      contactServiceName="Mobile App Development"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default MobileAppDevelopment;
