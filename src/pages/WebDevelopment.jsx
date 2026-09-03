import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Globe, Code2, Zap, ShieldCheck, LayoutDashboard, ShoppingCart } from "lucide-react";

import devAmericanBusinessFormations from "@/assets/web-development-showcase/american-business-formations.png";
import devGoGetShip from "@/assets/web-development-showcase/gogetship.png";
import devLeatherLiftOff from "@/assets/web-development-showcase/leather-lift-off.png";
import devkey from "@/assets/web-development-showcase/key.png";
import devpms from "@/assets/web-development-showcase/pms.png";
import devshineshub from "@/assets/web-development-showcase/shineshub.png";
import devaquagreen from "@/assets/web-development-showcase/aquagreens.png";
import devdentalcare from "@/assets/web-development-showcase/dental.png";
import devebook from "@/assets/web-development-showcase/ebook.png";
import devpraxis from "@/assets/web-development-showcase/praxis.png";
import devzova from "@/assets/web-development-showcase/zova.png";



const WebDevelopment = () => {

  const features = [
    {
      icon: <Code2 size={24} />,
      title: "Custom Websites & React Applications",
      text: "We build custom-coded websites and React applications with clean code, modern technologies, and reliable functionality not template-based builds.",
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Dashboards & Admin Panels",
      text: "Custom business dashboards, admin panels, and internal tools with authentication, database integration, and API connectivity.",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "E-Commerce & SaaS Platforms",
      text: "Scalable e-commerce stores and SaaS product builds with secure payments, user roles, and subscription-ready architecture.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure & Reliable",
      text: "Quality-tested applications with clean structure, browser compatibility, and reliable deployment support.",
    },
  ];


  const deliverables = [
    "Custom website & application development",
    "React / Next.js frontend development",
    "Custom dashboards & admin panels",
    "E-commerce platform development",
    "SaaS application development",
    "API development & integration",
    "Database & authentication setup",
    "Performance optimization",
    "Deployment and launch support",
  ];


  const portfolioProjects = [

    {
      title: "Optivax PMS",
      category: "Custom Web Application",
      description:
        "A custom business management system developed with modern web technologies and structured workflows.",
      link: "https://optivaxglobal.com/pms/#/login",
      image: devpms,
    },

    {
      title: "American Business Formations",
      category: "Business Platform",
      description:
        "A professional business formation platform designed to simplify company setup services and customer processes.",
      link: "https://americanbusinessformations.com/",
      image: devAmericanBusinessFormations,
    },
    {
  title: "Ebook Writer USA",
  category: "Publishing Platform Website",
  description:
    "A professional publishing service platform developed with modern web technologies, service-focused pages, and a seamless user experience for authors.",
  link: "https://ebookwriterusa.com/",
  image: devebook,
},

    {
      title: "Key Velocity",
      category: "Web Application",
      description:
        "A custom web solution developed with modern frontend experience and business-focused functionality.",
      link: "http://keyvelocity.optivaxglobal.com/",
      image: devkey,
    },

    {
      title: "GoGetShip",
      category: "E-Commerce Platform",
      description:
        "An online shopping platform developed with product-focused layouts and customer-friendly buying experience.",
      link: "https://gogetship.com/",
      image: devGoGetShip,
    },

    {
      title: "Leather Lift Off",
      category: "Shopify E-Commerce Store",
      description:
        "A premium fashion e-commerce store developed with product collections and optimized shopping experience.",
      link: "https://leatherliftoff.com/",
      image: devLeatherLiftOff,
    },

    {
      title: "Praxis Authority",
      category: "Healthcare Website",
      description:
        "A professional healthcare website developed to showcase medical billing services and solutions.",
      link: "https://praxisauthority.com/",
      image: devpraxis,
    },

    {
      title: "Aqua Greens",
      category: "Corporate Website",
      description:
        "A modern corporate website developed to establish a strong digital presence and showcase services.",
      link: "https://aquagreens.us/",
      image: devaquagreen,
    },

    {
      title: "Zova Coffee",
      category: "Food & Beverage Website",
      description:
        "A branded website experience developed for a modern coffee business with a clean customer-focused layout.",
      link: "https://zovacoffee.com/",
      image: devzova,
    },
    {
    title:"DentalCare Website",
    category: "Healthcare Website",
   description:"Modern dental healthcare website with appointment-focused design and responsive user experience.",
    link:"https://dentalcare.optivaxglobal.com/",
    image: devdentalcare,
    },
    
      {
  title: "ShinesHub Website",
  category: "Business Website Development",
  description:
    "A professional business website developed with a modern user experience, responsive design, and conversion-focused structure.",
  link: "https://shineshub.com/",
  image: devshineshub,
},


  ];


  const contentSections = [
    {
      title: "Custom Development, Not Templates",
      text:
        "When a WordPress or template website isn't enough, we develop custom websites, React applications, dashboards, and platforms using modern technologies and clean architecture.",
    },
    {
      title: "Built For React, Dashboards & E-Commerce",
      text:
        "From custom admin dashboards and internal tools to e-commerce stores and SaaS products, our development process transforms approved designs into responsive, functional, production-ready applications.",
    },
    {
      title: "Built For Business Growth",
      text:
        "Every application is developed with performance, scalability, security, and long-term business goals in mind built to support US businesses as they grow.",
    },
  ];


  return (
    <ServiceTemplate

      pageTitle="Professional Web Development Services in Wyoming USA - Optivax Global"

      metaDescription="Optivax Global provides professional web development services including custom websites, React development, e-commerce solutions, and scalable business platforms."

      metaKeywords="web development services, custom website development, React development, ecommerce development, frontend development"

      canonicalUrl="https://optivaxglobal.com/web-development"


      serviceLabel="Custom Web Development"

      heroHeadline="Custom Web Development"

      heroSubheadline="For Modern Businesses"

      heroText="For businesses that need more than a template website. We develop custom websites, React applications, business dashboards, e-commerce platforms, and SaaS products built to scale."


      buttonText="Get a Free Development Quote"

      contactServiceName="Web Development"


      features={features}

      deliverables={deliverables}

      contentSections={contentSections}

      portfolioProjects={portfolioProjects}

    />
  );
};


export default WebDevelopment;