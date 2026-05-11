import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, PenTool, Palette, BadgeCheck, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import logo1 from "@/assets/logo-showcase/jh8-shoez.png";
import logo2 from "@/assets/logo-showcase/burgera.png";
import logo3 from "@/assets/logo-showcase/clean.png";
import logo4 from "@/assets/logo-showcase/classic-cars.png";
import logo5 from "@/assets/logo-showcase/tarika.png";
import logo6 from "@/assets/logo-showcase/nativa.png";
import logo7 from "@/assets/logo-showcase/naznul.png";

const LogoDesign = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Custom Logo & Branding",
    "Brand color palette",
    "Typography selection",
    "Social media logo files",
    "High-resolution files",
    "Transparent PNG",
    "Source file delivery",
    "Brand identity direction",
  ];

  const features = [
    { icon: PenTool, title: "Custom Logo", text: "Unique Logo & Branding created around your brand personality and business goals." },
    { icon: Palette, title: "Brand Colors", text: "Professional color combinations that make your business look consistent and memorable." },
    { icon: BadgeCheck, title: "Premium Identity", text: "A clean and trusted visual identity that improves brand credibility." },
    { icon: Target, title: "Business Focused", text: "Designs made to attract the right audience and support long-term brand growth." },
  ];

  const logoShowcase = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <>
      <Helmet>
        <title>Logo & Branding Services | Professional Brand Identity | Optivax Global</title>
        <meta name="description" content="Professional Logo & Branding services by Optivax Global. Get a custom logo and brand identity that builds trust and makes your business stand out." />
        <link rel="canonical" href="https://optivaxglobal.com/logo-design-services" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">Logo & Branding Services</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Professional Logo & Branding
                <span className="block text-accent-purple">That Builds Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                We design memorable logos and brand identities that help businesses look professional, stand out, and create a strong first impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate("/contact")} className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-7 py-4 rounded-full font-bold transition group">
                  Get Logo & Branding <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="https://wa.me/13074301006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full font-bold transition">
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Brand Identity That Makes You Memorable</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
              A logo is not just an icon. It is the face of your business. We create Logo & Brandings that communicate professionalism, trust, and brand value.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-[#1E1E2A]/75 p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition">
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
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Your Business Needs a Professional Logo</h2>
            <p>A professional logo helps customers recognize your business, remember your brand, and trust your services. A weak or generic logo can make your business look unprofessional.</p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Logo & Branding Process</h2>
            <p>We understand your business, audience, industry, and brand style before creating logo concepts. Then we refine the design into a clean, modern, and usable identity.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-14">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {logoShowcase.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-5 h-52 flex items-center justify-center border border-white/10 hover:border-accent-purple/40 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  <img src={item} alt={`Logo design sample ${index + 1}`} className="max-h-36 max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ready to Build Your Brand?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Let’s create a professional logo that makes your business look premium and trustworthy.</p>
            <button onClick={() => navigate("/contact")} className="inline-flex items-center gap-2 bg-accent-purple px-8 py-4 rounded-full font-bold hover:bg-accent-purple/90 transition">
              Start Logo Project <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default LogoDesign;