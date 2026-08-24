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

const MobileAppDesign = () => {
  const navigate = useNavigate();

  const deliverables = [
    "App screen design",
    "UX flow planning",
    "Wireframes and prototypes",
    "Visual design system",
    "Navigation and interaction design",
    "App icon and button style",
    "Mobile-first layout design",
    "Developer-ready design assets",
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Screen-by-Screen Design",
      text: "Each app screen is designed with clarity, visual hierarchy, and strong user interaction patterns.",
    },
    {
      icon: LayoutGrid,
      title: "Intuitive Flow",
      text: "We map the user journey so app screens guide people naturally from start to finish.",
    },
    {
      icon: MousePointerClick,
      title: "Interactive Prototypes",
      text: "Clickable prototypes help you test the design and review the experience before development begins.",
    },
    {
      icon: Users,
      title: "User-Centered Interface",
      text: "Design decisions are made for real users, not just for visuals, to improve usability and trust.",
    },
  ];

  const showcase = [ui1, ui2, ui3, ui4];

  return (
    <>
      <Helmet>
        <title>
          Top Mobile App Design Services in Wyoming USA - Optivax Global
        </title>

        <meta
          name="description"
          content="Optivax Global offers mobile app design services for polished, user-friendly app screens, clear navigation, and intuitive mobile interactions for businesses."
        />

        <link
          rel="canonical"
          href="https://optivaxglobal.com/mobile-app-design"
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
                Mobile App Design
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Mobile App Interfaces
                <span className="block text-accent-purple">
                  Designed for Real Users
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                We craft polished app screens, interaction patterns and visual
                systems that help users complete tasks quickly and confidently.
                Our deliverables are developer-ready so design handoffs are
                smooth and efficient.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
  navigate("/contact", {
    state: { service: "Mobile App Design" },
  })
}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                >
                  Start App Design Project
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
              App Design That Guides Users Smoothly
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Great app design balances visual polish with easy interaction.
              We make screen layouts, gestures, and flows feel natural so users
              can complete tasks without confusion.
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
                Browse examples of app screens we designed for clarity,
                accessibility and efficient task flows. Each layout is built to
                reduce friction and improve user satisfaction.
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
                    alt={`Mobile app design showcase ${index + 1}`}
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
              Why Mobile App Design Matters
            </h2>

            <p>
              Mobile app design focuses on screen layout, interactions, and
              visual clarity. It makes your app feel intuitive, trustworthy, and
              easy to use before any development begins.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Mobile App Design Process
            </h2>

            <p>
              We begin with the user journey, then craft screen layouts,
              interaction details, and visual style so your app feels consistent,
              modern, and easy to use.
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
    state: { service: "Mobile App Design" },
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

export default MobileAppDesign;