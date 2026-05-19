import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Eye,
  ShoppingCart,
  BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import cover1 from "@/assets/ebook-cover-showcase/ebook-cover-1.webp";
import cover2 from "@/assets/ebook-cover-showcase/ebook-cover-2.webp";
import cover3 from "@/assets/ebook-cover-showcase/ebook-cover-3.webp";
import cover4 from "@/assets/ebook-cover-showcase/ebook-cover-4.webp";
import cover5 from "@/assets/ebook-cover-showcase/ebook-cover-5.webp";
import cover6 from "@/assets/ebook-cover-showcase/ebook-cover-6.webp";
import cover7 from "@/assets/ebook-cover-showcase/ebook-cover-7.webp";
import cover8 from "@/assets/ebook-cover-showcase/ebook-cover-8.webp";
import cover9 from "@/assets/ebook-cover-showcase/ebook-cover-9.webp";
import cover10 from "@/assets/ebook-cover-showcase/ebook-cover-10.webp";
import cover11 from "@/assets/ebook-cover-showcase/ebook-cover-11.webp";
import cover12 from "@/assets/ebook-cover-showcase/ebook-cover-12.webp";
import cover13 from "@/assets/ebook-cover-showcase/ebook-cover-13.webp";
import cover14 from "@/assets/ebook-cover-showcase/ebook-cover-14.webp";
import cover15 from "@/assets/ebook-cover-showcase/ebook-cover-15.webp";
import cover16 from "@/assets/ebook-cover-showcase/ebook-cover-16.webp";
import cover17 from "@/assets/ebook-cover-showcase/ebook-cover-17.webp";
import cover18 from "@/assets/ebook-cover-showcase/ebook-cover-18.webp";
import cover19 from "@/assets/ebook-cover-showcase/ebook-cover-19.webp";
import cover20 from "@/assets/ebook-cover-showcase/ebook-cover-20.webp";
import cover21 from "@/assets/ebook-cover-showcase/ebook-cover-21.webp";
import cover22 from "@/assets/ebook-cover-showcase/ebook-cover-22.webp";
import cover23 from "@/assets/ebook-cover-showcase/ebook-cover-23.webp";
import cover24 from "@/assets/ebook-cover-showcase/ebook-cover-24.webp";
import cover25 from "@/assets/ebook-cover-showcase/ebook-cover-25.webp";
import cover26 from "@/assets/ebook-cover-showcase/ebook-cover-26.webp";
import cover27 from "@/assets/ebook-cover-showcase/ebook-cover-27.webp";
import cover28 from "@/assets/ebook-cover-showcase/ebook-cover-28.webp";
import cover29 from "@/assets/ebook-cover-showcase/ebook-cover-29.webp";
import cover30 from "@/assets/ebook-cover-showcase/ebook-cover-30.webp";
import cover31 from "@/assets/ebook-cover-showcase/ebook-cover-31.webp";
import cover32 from "@/assets/ebook-cover-showcase/ebook-cover-32.webp";
import cover33 from "@/assets/ebook-cover-showcase/ebook-cover-33.webp";
import cover34 from "@/assets/ebook-cover-showcase/ebook-cover-34.webp";
import cover35 from "@/assets/ebook-cover-showcase/ebook-cover-35.webp";
import cover36 from "@/assets/ebook-cover-showcase/ebook-cover-36.webp";
import cover37 from "@/assets/ebook-cover-showcase/ebook-cover-37.webp";

const EbookCover = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const showcase = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
    cover7,
    cover8,
    cover9,
    cover10,
    cover11,
    cover12,
    cover13,
    cover14,
    cover15,
    cover16,
    cover17,
    cover18,
    cover19,
    cover20,
    cover22,
    cover23,
    cover24,
    cover25,
    cover26,
    cover27,
    cover28,
    cover29,
    cover30,
    cover31,
    cover32,
    cover33,
    cover34,
    cover35,
    cover36,
    cover37,
  ];

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
    {
      icon: BookOpen,
      title: "KDP Ready",
      text: "Covers designed for authors publishing on platforms like Amazon KDP and other online marketplaces.",
    },
    {
      icon: Eye,
      title: "Attention Grabbing",
      text: "Strong visuals and readable typography that help your book stand out quickly.",
    },
    {
      icon: ShoppingCart,
      title: "Sales Focused",
      text: "Cover designs created to improve clicks, build trust, and increase buyer interest.",
    },
    {
      icon: BadgeCheck,
      title: "Professional Look",
      text: "Premium design quality that helps your book look credible, polished, and market-ready.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Ebook Cover Design Services | KDP Book Covers | Optivax Global
        </title>
        <meta
          name="description"
          content="Professional ebook cover design services for authors. Get KDP-ready, eye-catching book covers designed to build trust, attract readers, and increase clicks."
        />
        <link
          rel="canonical"
          href="https://optivaxglobal.com/ebook-cover-design"
        />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75" />

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Ebook Cover Design
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Ebook Covers That
                <span className="block text-accent-purple">
                  Make Readers Stop & Look
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                We create ebook covers that help your book look professional,
                attract attention quickly, and give readers a stronger reason to
                click and explore your story.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    navigate("/contact", {
                      state: { service: "Ebook Cover Design" },
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
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
              Book Covers Designed to Catch Attention
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Readers make quick decisions based on visuals. A professional
              cover helps your book look credible, genre-appropriate, and worth
              exploring.
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

                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative bg-black py-16 md:py-24 overflow-hidden border-t border-white/10">
          <div className="max-w-[1450px] mx-auto px-4 md:px-8">
            <div className="mb-10">
              <span className="inline-block text-[#1CA4F4] font-semibold uppercase tracking-[0.22em] mb-3 text-xs sm:text-sm">
                Featured Covers
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Ebook Cover Showcase
              </h2>

              <p className="text-white/60 text-sm md:text-lg max-w-2xl mt-4">
                Professional ebook covers crafted with premium visuals, modern
                typography, and market-ready presentation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {showcase.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer rounded-[26px] overflow-hidden bg-[#101018] border border-white/10 hover:border-[#1CA4F4] hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_55px_rgba(28,164,244,0.25)]"
                >
                  <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-black/30 flex items-center justify-center p-5">
                    <img
                      src={image}
                      alt={`Ebook Cover ${index + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center px-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-black font-bold text-2xl flex items-center justify-center hover:bg-[#1CA4F4] hover:text-white transition z-10"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Selected Ebook Cover"
                onClick={(e) => e.stopPropagation()}
                className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Ebook Cover Design Matters
            </h2>

            <p>
              Your cover is usually the first thing readers notice. A
              professional ebook cover improves trust, communicates the genre
              clearly, and helps your book feel more valuable before someone
              even reads the description.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Cover Design Process
            </h2>

            <p>
              We study your book genre, audience, title, and market style before
              creating design concepts. Then we build a cover that feels
              visually balanced, professional, and easy for readers to recognize.
            </p>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Make Your Book Stand Out?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let’s create a professional ebook cover that makes your book look
              polished, trustworthy, and ready for readers.
            </p>

            <button
              onClick={() =>
                navigate("/contact", {
                  state: { service: "Ebook Cover Design" },
                })
              }
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
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