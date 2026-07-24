import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Code2, Boxes, HardDrive, RefreshCw } from "lucide-react";

const SoftwareDevelopment = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Custom Software Development",
      text: "We design and build dependable software solutions that align with your business workflows, goals, and growth plans.",
    },
    {
      icon: <Boxes size={24} />,
      title: "Web and Enterprise Systems",
      text: "Our development work includes web-based tools, internal platforms, SaaS products, and business systems built for daily use.",
    },
    {
      icon: <HardDrive size={24} />,
      title: "API and Integration Support",
      text: "We connect your software with third-party tools, databases, and platforms so your operations stay connected and efficient.",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Modernization and Maintenance",
      text: "We help improve older systems, modernize legacy workflows, and support long-term performance after launch.",
    },
  ];

  const deliverables = [
    "Custom software planning and architecture",
    "Web-based software solutions",
    "Enterprise and SaaS product development",
    "CRM and ERP system development",
    "API development and integration",
    "Software modernization and optimization",
    "Testing, QA, and release support",
    "Ongoing support and maintenance",
  ];

  const contentSections = [
    {
      title: "Software That Supports Business Operations",
      text: "We begin with a clear understanding of your workflows, user needs, and business priorities so the final product is practical, reliable, and easy to maintain.",
    },
    {
      title: "From Planning to Launch",
      text: "Our team helps businesses move from initial planning and design into development, testing, deployment, and long-term support without losing focus on quality.",
    },
    {
      title: "Built for Reliability and Growth",
      text: "Whether you need a customer portal, internal management tool, or a scalable SaaS platform, we focus on dependable software that can evolve as your business grows.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Software Development Services In Wyoming USA - Optivax Global"
      metaDescription="Optivax Global delivers custom software development services for web applications, enterprise systems, SaaS products, CRM and ERP platforms, APIs, and ongoing maintenance."
      metaKeywords="software development services, custom software development, enterprise software development, SaaS development, CRM development, ERP development"
      canonicalUrl="https://optivaxglobal.com/software-development"
      serviceLabel="Software Development Services"
      heroHeadline="Software Development"
      heroSubheadline="Reliable Solutions for Modern Business Needs"
      heroText="We help businesses plan, design, build, test, launch, and maintain custom software that supports daily operations and long-term growth."
      buttonText="Start Software Development"
      contactServiceName="Software Development"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default SoftwareDevelopment;
