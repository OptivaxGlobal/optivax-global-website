import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { Gamepad2, MonitorPlay, Sparkles, ShieldCheck } from "lucide-react";

const GameDevelopment = () => {
  const features = [
    {
      icon: <Gamepad2 size={24} />,
      title: "Custom Game Development",
      text: "We build polished games for mobile, PC, and console with clear gameplay flow, strong performance, and a thoughtful player experience.",
    },
    {
      icon: <MonitorPlay size={24} />,
      title: "2D and 3D Experiences",
      text: "From casual 2D projects to immersive 3D worlds, we shape the experience around your audience and goals.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Unity and Unreal Builds",
      text: "We work with modern engines to deliver reliable builds, clean project structure, and smoother development cycles.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Testing and Ongoing Support",
      text: "Our work includes quality assurance, bug resolution, and updates that keep your game stable after launch.",
    },
  ];

  const deliverables = [
    "Custom game concept and planning",
    "Mobile, PC, and console game development",
    "2D and 3D game build support",
    "Unity and Unreal Engine implementation",
    "Multiplayer and live-service features",
    "AR and VR experience development",
    "Game UI/UX design and onboarding",
    "Testing, maintenance, and update support",
  ];

  const contentSections = [
    {
      title: "Games Designed for Real Players",
      text: "We approach game development as both a creative and technical process. Every build is shaped around gameplay clarity, visual quality, and a smoother experience from the first screen to the final level.",
    },
    {
      title: "Built for Different Platforms",
      text: "Whether you need a mobile game, a desktop experience, or a cross-platform release, we help plan the right structure, features, and performance approach for each target platform.",
    },
    {
      title: "Support Beyond the Launch",
      text: "A successful game does not end at release. We also support ongoing improvements, updates, bug fixing, and quality checks so your project stays strong as it grows.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Custom Game Development Services In Wyoming - Optivax Global"
      metaDescription="Optivax Global offers custom game development services for mobile, PC, console, AR, VR, multiplayer, and UI/UX-focused game projects."
      metaKeywords="game development services, custom game development, mobile game development, unity development, unreal engine development, multiplayer game development"
      canonicalUrl="https://optivaxglobal.com/game-development"
      serviceLabel="Game Development Services"
      heroHeadline="Game Development"
      heroSubheadline="Built for Play, Performance, and Polish"
      heroText="We create custom games for mobile, PC, console, and emerging platforms with thoughtful design, strong gameplay flow, and reliable technical execution."
      buttonText="Start Game Development"
      contactServiceName="Game Development"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default GameDevelopment;
