import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ArrowRight,
  PenTool,
  Palette,
  BadgeCheck,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import logo1 from "@/assets/logo-showcase/jh8-shoez.webp";
import logo2 from "@/assets/logo-showcase/burgera.webp";
import logo3 from "@/assets/logo-showcase/clean.webp";
import logo4 from "@/assets/logo-showcase/classic-cars.webp";
import logo5 from "@/assets/logo-showcase/tarika.webp";
import logo6 from "@/assets/logo-showcase/nativa.webp";
import logo7 from "@/assets/logo-showcase/naznul.webp";
import logo8 from "@/assets/logo-showcase/barrie-truck-trailer.webp";

const LogoDesign = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const deliverables = [
    "Custom logo concept",
    "Clean professional design",
    "Color variations",
    "Black and white version",
    "Transparent PNG files",
    "High-resolution logo files",
    "Social media profile logo",
    "Final source file delivery",
  ];

  const features = [
    {
      icon: PenTool,
      title: "Original Logo Concepts",
      text: "We design logos from scratch, based on your business name, industry, audience, and the impression you want to create.",
    },
    {
      icon: Palette,
      title: "Clean Visual Style",
      text: "Your logo is designed with balanced colors, strong typography, and a polished look that feels modern and professional.",
    },
    {
      icon: BadgeCheck,
      title: "Trust-Building Design",
      text: "A good logo helps your business look serious, reliable, and ready for customers from the very first impression.",
    },
    {
      icon: Target,
      title: "Made for Real Use",
      text: "We create logos that work smoothly on websites, social media, business cards, packaging, profiles, and marketing materials.",
    },
  ];

  const logoShowcase = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
  ];

  return (
    <>
      <Helmet>
        <title>
          Professional Logo Design Services in Wyoming USA - Optivax Global
        </title>
        <meta
          name="description"
          content="Get professional logo design services by Optivax Global. We create custom, clean, memorable, and business-focused logos for startups, brands, and growing companies."
        />
        <link rel="canonical" href="https://optivaxglobal.com/logo-design" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/60 to-[#031426]/85" />

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Logo Design Services
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Custom Logo Design
                <span className="block text-accent-purple">
                  That Looks Professional
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Your logo is the face of your business. We create clean,
                memorable, and professional logo designs that help your brand
                look trustworthy, polished, and ready to stand out online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    navigate("/contact", {
                      state: { service: "Logo Design" },
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                >
                  Get Logo Design
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
              Logo Designs Made to Look Clear, Premium & Memorable
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              We focus on simple, strong, and practical logo design. Every logo
              is created to look good across digital platforms, print materials,
              and real business use.
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
              Why Your Business Needs a Professional Logo
            </h2>

            <p>
              A professional logo helps people recognize your business faster.
              It gives your company a clear identity and makes your website,
              social media, and marketing materials look more serious and
              trustworthy.
            </p>

            <p>
              When your logo looks clean and well-designed, customers naturally
              feel more confident about your business. That first impression can
              make a big difference, especially when people are comparing you
              with other brands online.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Logo Design Process
            </h2>

            <p>
              We start by understanding your business name, industry, audience,
              design style, and where the logo will be used. After that, we
              create a logo direction that feels simple, professional, and easy
              to remember.
            </p>

            <p>
              Once the design direction is ready, we refine the logo carefully
              so it looks balanced, clean, and usable across different sizes and
              platforms. The final files are prepared for website use, social
              media, print, and business presentation.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {logoShowcase.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  className="cursor-pointer bg-white rounded-3xl p-5 h-52 flex items-center justify-center border border-white/10 hover:border-accent-purple/40 hover:shadow-2xl hover:shadow-accent-purple/20 transition-all duration-300 shadow-xl"
                >
                  <img
                    src={item}
                    alt={`Professional logo design sample ${index + 1}`}
                    loading="lazy"
                    className="max-h-36 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-black font-bold text-2xl flex items-center justify-center hover:bg-[#1CA4F4] hover:text-white transition z-10"
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Selected Logo Design"
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        )}

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Need a Logo That Looks Professional Everywhere?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let’s create a custom logo that gives your business a clean,
              confident, and memorable look across every platform.
            </p>

            <button
              onClick={() =>
                navigate("/contact", {
                  state: { service: "Logo Design" },
                })
              }
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
            >
              Start Logo Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default LogoDesign;