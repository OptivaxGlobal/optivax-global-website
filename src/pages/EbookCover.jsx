import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, BookOpen, Eye, ShoppingCart, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import cover1 from "@/assets/ebook-cover-showcase/ebook-cover-1.png";
import cover2 from "@/assets/ebook-cover-showcase/ebook-cover-2.png";
import cover3 from "@/assets/ebook-cover-showcase/ebook-cover-3.png";
import cover4 from "@/assets/ebook-cover-showcase/ebook-cover-4.png";
import cover5 from "@/assets/ebook-cover-showcase/ebook-cover-5.jpg";
import cover6 from "@/assets/ebook-cover-showcase/ebook-cover-6.jpg";

const EbookCover = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Professional ebook cover",
    "KDP-ready design",
    "Genre-based concept",
    "High-resolution cover",
    "Front cover design",
    "Typography styling",
    "Sales-focused layout",
    "Marketing-ready files",
  ];

  const features = [
    { icon: BookOpen, title: "KDP Ready", text: "Covers designed for authors publishing on platforms like Amazon KDP." },
    { icon: Eye, title: "Attention Grabbing", text: "Strong visuals and typography that help your book stand out." },
    { icon: ShoppingCart, title: "Sales Focused", text: "Cover design made to improve clicks, trust, and buyer interest." },
    { icon: BadgeCheck, title: "Professional Look", text: "Premium design quality that makes your book look credible." },
  ];

  const showcase = [cover1, cover2, cover3, cover4, cover5, cover6];

  return (
    <>
      <Helmet>
        <title>Ebook Cover Design Services | KDP Book Covers | Optivax Global</title>
        <meta
          name="description"
          content="Professional ebook cover design services for authors. Get KDP-ready, eye-catching book covers designed to increase clicks and sales."
        />
        <link rel="canonical" href="https://optivaxglobal.com/ebook-cover-design" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Ebook Cover Design
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Ebook Covers That
                <span className="block text-accent-purple">Sell Your Story</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                We design professional ebook covers that grab attention, build credibility, and help authors increase clicks and sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-7 py-4 rounded-full font-bold transition group"
                >
                  Get Ebook Cover
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

            <div className="bg-[#1E1E2A]/75 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
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
              Book Covers Designed for Attention
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
              Readers judge books quickly. A professional cover helps your book look valuable, genre-appropriate, and worth clicking.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-[#1E1E2A]/75 p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                Ebook Cover Showcase
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Professional book cover designs crafted with strong visuals, clean typography, and market-ready presentation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcase.map((img, index) => (
                <div
                  key={index}
                  className="group rounded-3xl overflow-hidden bg-[#161622]/80 border border-white/10 hover:border-accent-purple/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl h-[320px] flex items-center justify-center backdrop-blur-sm"
                >
                  <img
                    src={img}
                    alt={`Ebook cover design sample ${index + 1}`}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Ebook Cover Design Matters
            </h2>

            <p>
              Your cover is often the first thing readers see. A professional ebook cover improves trust, communicates genre, and can influence buying decisions.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Cover Design Process
            </h2>

            <p>
              We study your book genre, audience, title, and market style. Then we create a professional cover concept with strong visuals and readable typography.
            </p>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready for a Premium Book Cover?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Let’s design a cover that makes your book look professional and market-ready.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-accent-purple px-8 py-4 rounded-full font-bold hover:bg-accent-purple/90 transition"
            >
              Start Cover Design
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default EbookCover;