import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Video, Sparkles, Layers, Target } from "lucide-react";

const Animation = () => {
  const features = [
    { icon: <Video size={24} />, title: "Engaging Motion Design", text: "Animations that help your message move, feel alive, and capture attention quickly." },
    { icon: <Sparkles size={24} />, title: "Brand-Aligned Animation", text: "Every animation is designed to match your brand style, colors, and tone." },
    { icon: <Layers size={24} />, title: "Modern Visual Storytelling", text: "We use motion to explain ideas clearly and make your content more memorable." },
    { icon: <Target size={24} />, title: "Conversion-Focused Motion", text: "Animations are built to support your goals, whether that is clicks, leads, or awareness." },
  ];

  const deliverables = [
    "Custom animation concepts",
    "Brand-friendly motion graphics",
    "Explainer animation scenes",
    "Social media animation clips",
    "Video-ready export files",
    "Attention-grabbing transitions",
    "Visual storytelling direction",
    "Animation ready for digital campaigns",
  ];

  const contentSections = [
    {
      title: "Animations That Make Your Message Clear",
      text: "Animation helps ideas land faster and feel more engaging. We build motion that supports your brand story and helps viewers understand your message quickly.",
    },
    {
      title: "Motion Built for Your Brand",
      text: "Every animation is designed with your brand’s colors, style, and tone in mind so the final result feels consistent and professional.",
    },
    {
      title: "Ready for Web and Social",
      text: "Animations can be used on websites, social media, ads, and presentations. We deliver motion assets that are easy to share and use in digital campaigns.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Animation Services in Wyoming USA - Optivax Global"
      metaDescription="Optivax Global delivers custom animation services for web, social, and marketing campaigns with branded motion graphics and engaging visuals."
      metaKeywords="animation services, motion graphics, explainer animation, custom animation, animation agency"
      canonicalUrl="https://optivaxglobal.com/animation"
      serviceLabel="Animation Services"
      heroHeadline="Custom Animation Services"
      heroSubheadline="That Bring Your Brand to Life"
      heroText="We create branded animations that make your message more engaging, memorable, and easy to share across web and social media."
      buttonText="Start Animation Project"
      contactServiceName="Animation Services"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default Animation;
