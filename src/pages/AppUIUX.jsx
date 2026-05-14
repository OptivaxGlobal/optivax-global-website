import React from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ArrowRight,
  Smartphone,
  LayoutGrid,
  MousePointerClick,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import ui1 from "@/assets/app-uiux-showcase/app-uiux-1.webp";
import ui2 from "@/assets/app-uiux-showcase/app-uiux-2.webp";
import ui3 from "@/assets/app-uiux-showcase/app-uiux-3.webp";
import ui4 from "@/assets/app-uiux-showcase/app-uiux-4.webp";

const AppUIUX = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Mobile app UI design",
    "User experience planning",
    "Wireframes & layout structure",
    "Clickable design prototype",
    "Modern design system",
    "User flow direction",
    "Clean screen organization",
    "Developer-ready design structure",
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Modern Mobile Interfaces",
      text: "Clean and modern app screens designed to feel smooth, professional, and easy to use.",
    },
    {
      icon: LayoutGrid,
      title: "Organized Screen Layouts",
      text: "Every screen is structured clearly so users can understand features without confusion.",
    },
    {
      icon: MousePointerClick,
      title: "Better User Flow",
      text: "We create experiences that guide users naturally toward important actions and interactions.",
    },
    {
      icon: Users,
      title: "User-Focused Experience",
      text: "Design decisions are made around clarity, usability, engagement, and real user behavior.",
    },
  ];

  const showcase = [ui1, ui2, ui3, ui4];

  return (
    <>
      <Helmet>
        <title>
          Professional User Interface & UX Design Agency In USA - Optivax Global
        </title>

        <meta
          name="description"
          content="Professional app UI/UX design services for mobile apps. Optivax Global creates clean, modern, and user-friendly app interfaces focused on usability and engagement."
        />
        

        <link
          rel="canonical"
          href="https://optivaxglobal.com/app-ui-ux-design"
        />

        

      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                App UI/UX Design
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Mobile App Interfaces
                <span className="block text-accent-purple">
                  Designed for Real Users
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                We design mobile app experiences that feel clean, modern, and
                easy to use. From user flow planning to screen design, every
                detail is focused on clarity, engagement, and better user
                experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
  navigate("/contact", {
    state: { service: "App UI/UX Design" },
  })
}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                >
                  Start App Design
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/13074301006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full font-bold transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">What You Get</h2>

              <div className="grid gap-4">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-purple w-5 h-5 shrink-0" />

                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              UI/UX Design That Feels Clear & Easy to Use
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Good app design is not only about visuals. It is about helping
              users understand the product quickly, move smoothly through the
              interface, and complete actions without frustration.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-white/[0.04] p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                App Interface Showcase
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Explore modern app interfaces designed with usability, clean
                layouts, and user-friendly experiences that help digital
                products feel more professional and engaging.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {showcase.map((img, index) => (
                <div
                  key={index}
                  className="group rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-accent-purple/40 hover:shadow-2xl hover:shadow-accent-purple/20 transition-all duration-300 shadow-xl"
                >
                  <img
                    src={img}
                    alt={`App UI/UX showcase ${index + 1}`}
                    loading="lazy"
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why UI/UX Design Matters
            </h2>

            <p>
              Users quickly leave apps that feel confusing or difficult to use.
              A strong UI/UX experience improves navigation, trust, engagement,
              and overall product satisfaction.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our App Design Process
            </h2>

            <p>
              We start by understanding your users, app goals, and feature
              structure. Then we create wireframes, user flows, and modern
              interface designs that feel smooth, clear, and easy to navigate.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Need a Better App Experience?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let’s design a mobile app interface that feels modern,
              user-friendly, and built to create a smoother experience for your
              users.
            </p>

            <button
              onClick={() =>
  navigate("/contact", {
    state: { service: "App UI/UX Design" },
  })
}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
            >
              Start UI/UX Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default AppUIUX;