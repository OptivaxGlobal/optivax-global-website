import React from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ArrowRight,
  Presentation,
  Briefcase,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

const CorporatePresentation = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Corporate presentation design",
    "Pitch deck design",
    "Company profile design",
    "Business proposal slides",
    "Modern slide layouts",
    "Visual storytelling",
    "Professional typography",
    "Brand-consistent design",
  ];

  const features = [
    {
      icon: Presentation,
      title: "Premium Slides",
      text: "Clean, polished slides designed to make your business message easier to understand and remember.",
    },
    {
      icon: Briefcase,
      title: "Business Ready",
      text: "Presentations designed for clients, investors, partners, proposals, and internal business meetings.",
    },
    {
      icon: BarChart3,
      title: "Clear Data Visuals",
      text: "Charts, numbers, and content arranged in a way that makes important information easier to read.",
    },
    {
      icon: Sparkles,
      title: "Professional Impact",
      text: "Strong layouts, clean typography, and premium visuals that help your presentation look more credible.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Corporate Presentation Design | Pitch Decks | Optivax Global
        </title>

        <meta
          name="description"
          content="Professional corporate presentation design, pitch deck design, company profile design, and business proposal slides by Optivax Global."
        />

        <link
          rel="canonical"
          href="https://optivaxglobal.com/corporate-presentation"
        />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-24 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/60 to-[#031426]/85" />

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Corporate Presentation Design
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Presentations That
                <span className="block text-accent-purple">
                  Build Trust & Confidence
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                We design clean, professional presentations that help your team explain ideas clearly, impress clients, and present information with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
  navigate("/contact", {
    state: { service: "Corporate Presentation" },
  })
}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                >
                  Start Presentation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://wa.me/13074301006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full font-bold transition-all duration-300"
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

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Presentation Design That Feels Clear & Professional
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              A well-designed presentation makes information easier to
              understand and helps your business look more organized, credible,
              and professional.
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

        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Presentation Design Matters
            </h2>

            <p>
              A poorly designed presentation can make even a strong idea feel
              unclear. Professional slides improve clarity, credibility, and
              confidence during meetings, proposals, sales calls, and investor
              pitches.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Presentation Design Process
            </h2>

            <p>
              We organize your content, improve visual hierarchy, create modern
              layouts, and design slides that align with your brand identity,
              audience, and business goals.
            </p>
          </div>
        </section>

        <section className="relative py-24 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/60 to-[#031426]/85" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Need a Presentation That Looks Professional?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let’s create presentation slides that help your business
              communicate ideas more clearly and leave a stronger impression.
            </p>

            <button
              onClick={() =>
  navigate("/contact", {
    state: { service: "Corporate Presentation" },
  })
}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
            >
              Start Presentation Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CorporatePresentation;