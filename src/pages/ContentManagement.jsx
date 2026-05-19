import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { FileText, Layers, Sparkles, ClipboardList } from "lucide-react";

const ContentManagement = () => {
  const features = [
    { icon: <FileText size={24} />, title: "Content Planning", text: "We map out the content your brand needs to stay visible, authoritative, and useful." },
    { icon: <ClipboardList size={24} />, title: "Publishing Workflow", text: "Content is organized so updates, approvals, and publishing happen smoothly." },
    { icon: <Layers size={24} />, title: "Brand Content Consistency", text: "Every piece of content reflects your business voice, style, and audience needs." },
    { icon: <Sparkles size={24} />, title: "Content That Converts", text: "We shape content to build trust, answer customer questions, and drive action." },
  ];

  const deliverables = [
    "Content strategy planning",
    "Page and blog content structure",
    "Social content guidance",
    "Content calendar recommendations",
    "SEO-friendly content direction",
    "Publishing process support",
    "Consistent brand voice",
    "Ongoing content improvement advice",
  ];

  const contentSections = [
    {
      title: "Manage Content with Confidence",
      text: "Content management helps your business stay relevant and consistent. We create structures and strategies so your content supports your goals clearly.",
    },
    {
      title: "Content That Works for Your Brand",
      text: "Good content should be useful, easy to find, and aligned with your brand voice. We help shape content that feels cohesive across website, email, and social channels.",
    },
    {
      title: "Publish More Without Chaos",
      text: "A solid content process saves time and keeps every asset on-brand. We provide direction for content planning, creation, and publishing across your team.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Content Management System in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global provides content management services to help businesses plan, publish, and organize brand content for websites, social media, and digital campaigns."
      metaKeywords="content management services, content strategy, content planning, editorial calendar, content publishing"
      canonicalUrl="https://optivaxglobal.com/content-management-system"
      serviceLabel="Content Management Services"
      heroHeadline="Content Management"
      heroSubheadline="That Keeps Your Brand Clear"
      heroText="We help manage your content strategy, publishing workflow, and brand voice so every page, post, and email feels aligned with your business goals." 
      buttonText="Start Content Management"
      contactServiceName="Content Management"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default ContentManagement;
