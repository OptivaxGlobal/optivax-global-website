import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import { BookOpen, Zap, Users, Brush } from "lucide-react";

const ComicArts = () => {
  const features = [
    { icon: <BookOpen size={24} />, title: "Character-Driven Storytelling", text: "We bring characters to life with personality, emotion, and expression that readers connect with instantly." },
    { icon: <Brush size={24} />, title: "Dynamic Visual Narratives", text: "Every panel is crafted to guide the reader's eye and build tension, humor, or drama in your story." },
    { icon: <Zap size={24} />, title: "Energetic Comic Aesthetics", text: "From bold lines to expressive faces, our art style captures the energy and style your story deserves." },
    { icon: <Users size={24} />, title: "Fully Developed Worlds", text: "Environments, backgrounds, and settings that feel lived-in and make your characters' journeys feel real." },
  ];

  const deliverables = [
    "Custom character designs with personality",
    "Detailed storyboards and panel layouts",
    "Comic book pages ready for publication",
    "Digital and print-ready illustrations",
    "Comic book cover art",
    "Character expression sheets",
    "Background and environment design",
    "Dialogue-integrated artwork",
    "Action and movement sequences",
    "Color or black & white styles",
  ];

  const contentSections = [
    {
      title: "Comic Art That Tells Your Story",
      text: "Comics are more than just drawings they're a unique way to tell stories that grab readers and keep them turning pages. Whether you're creating a graphic novel, comic series, marketing comic, or narrative art project, we design visuals that make every moment count. Our comic art combines expressive character work, dynamic panel layouts, and compelling visual storytelling that brings your ideas to life in ways that feel fresh, engaging, and impossible to put down.",
    },
    {
      title: "Characters That Readers Remember",
      text: "The heart of any great comic is unforgettable characters. We design characters with personality built into every line from their shape language to their expressions to the way they move. Each character we create has a distinct visual identity that makes them instantly recognizable and emotionally real. Your readers won't just follow the story; they'll care about the people in it.",
    },
    {
      title: "Panel Layouts Built for Impact",
      text: "Great comic art isn't just pretty pictures it's carefully structured visual choreography. We design panel compositions, pacing, and transitions that guide readers through your story with perfect rhythm. Action feels punchy. Emotions land harder. Dramatic moments breathe. Every panel flows naturally to the next, creating a reading experience that feels intentional and immersive.",
    },
    {
      title: "Worlds That Feel Real",
      text: "Whether your story is set in a bustling city, a fantasy realm, or outer space, we create environments that feel lived-in and authentic. Detailed backgrounds, consistent lighting, and thoughtful design choices make your world feel believable and make your characters feel like they genuinely belong there.",
    },
    {
      title: "Flexible Styles for Every Story",
      text: "Comic art comes in many flavors. Classic comic book style. Manga-inspired aesthetics. Indie comic vibes. Realistic illustrations. Digital or hand-drawn feels. We work in the style that fits your story and speaks to your audience. Whether you need bold, clean lines or intricate detail work, we adapt our craft to match your vision.",
    },
    {
      title: "Ready for Print or Digital",
      text: "Your comic art is delivered in formats that work for whatever comes next. Publication-ready files for print. Web-optimized versions for digital platforms. High-resolution master files for future reproductions. Files organized and documented so your comic is ready to reach readers however you want to share it.",
    },
  ];

  return (
    <ServiceTemplate
      pageTitle="Professional Comic Arts & Illustration Services - Optivax Global"
      metaDescription="Optivax Global creates stunning comic art, character design, storyboards, and graphic novel illustrations with expressive storytelling and dynamic visuals."
      metaKeywords="comic art, comic illustration, character design, graphic novel, storyboard, comic book art, manga art"
      canonicalUrl="https://optivaxglobal.com/comic-arts"
      serviceLabel="Comic Arts Services"
      heroHeadline="Comic Arts"
      heroSubheadline="That Tell Unforgettable Stories"
      heroText="We create expressive character-driven comic art, dynamic panel layouts, and compelling visual narratives that captivate readers and bring stories to life."
      buttonText="Start Your Comic Project"
      contactServiceName="Comic Arts"
      features={features}
      deliverables={deliverables}
      contentSections={contentSections}
    />
  );
};

export default ComicArts;
