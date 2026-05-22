import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Globe, Code2, Zap, ShieldCheck } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Custom Website Builds",
      text: "Websites built with clean, maintainable code so your business site works reliably and is easy to update.",
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Performance",
      text: "We optimize page speed, responsive loading, and smooth interactions so visitors stay engaged.",
    },
    {
      icon: <Globe size={24} />,
      title: "Responsive Frontend",
      text: "Your website will adapt gracefully on mobile, tablet, and desktop with polished layouts and navigation.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Reliable Launch Support",
      text: "We prepare your website with quality checks, browser compatibility, and launch-ready deployment guidance.",
    },
  ];

  const deliverables = [
    "Custom frontend development",
    "Responsive website build",
    "Page speed optimization",
    "CMS or contact form integration",
    "SEO-friendly markup",
    "Cross-browser compatibility",
    "Analytics and tracking setup",
    "Launch-ready website delivery",
  ];

  const contentSections = [
    {
      title: "Web Development That Works",
      text: "Good development combines reliable code with fast performance so your site stays stable and easy to maintain.",
    },
    {
      title: "Built for Real Visitors",
      text: "We build sites that load quickly, navigate naturally, and help people find your services and contact details without friction.",
    },
    {
      title: "Launch-Ready Quality",
      text: "We prepare websites with testing, compatibility checks, and launch support so your team can go live with confidence.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional Web Development Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global offers web development services to build fast, responsive, and launch-ready websites with clean code, SEO-friendly structure, and reliable performance."
      metaKeywords="web development services, website development, responsive web development, frontend development, performance optimization"
      canonicalUrl="https://optivaxglobal.com/web-development"
      serviceLabel="Web Development Services"
      heroHeadline="Modern Web Development "
      heroSubheadline="That Builds Trust & Drives Growth"
      heroText="We build websites with reliable code, fast loading pages, and a structure that supports your business goals today and tomorrow."
      buttonText="Start Web Development"
      contactServiceName="Web Development"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default WebDevelopment;
