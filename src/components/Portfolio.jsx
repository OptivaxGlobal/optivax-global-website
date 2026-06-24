import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Animated-background/BACKGROUND IMAGE.webp";

/* LOGOS */
import logo2 from "@/assets/logo-showcase/burgera.webp";
import logo3 from "@/assets/logo-showcase/clean.webp";
import logo4 from "@/assets/logo-showcase/classic-cars.webp";
import logo5 from "@/assets/logo-showcase/tarika.webp";
import logo6 from "@/assets/logo-showcase/nativa.webp";
import logo1 from "@/assets/logo-showcase/jh8-shoez.webp";

/* EBOOKS */
import ebook1 from "@/assets/ebook-cover-showcase/ebook-cover-1.webp";
import ebook2 from "@/assets/ebook-cover-showcase/ebook-cover-2.webp";
import ebook3 from "@/assets/ebook-cover-showcase/ebook-cover-3.webp";
import ebook4 from "@/assets/ebook-cover-showcase/ebook-cover-4.webp";
import ebook5 from "@/assets/ebook-cover-showcase/ebook-cover-5.webp";
import ebook6 from "@/assets/ebook-cover-showcase/ebook-cover-6.webp";
import ebook7 from "@/assets/ebook-cover-showcase/ebook-cover-7.webp";
import ebook8 from "@/assets/ebook-cover-showcase/ebook-cover-8.webp";
import ebook9 from "@/assets/ebook-cover-showcase/ebook-cover-9.webp";
import ebook10 from "@/assets/ebook-cover-showcase/ebook-cover-10.webp";
import ebook11 from "@/assets/ebook-cover-showcase/ebook-cover-11.webp";
import ebook12 from "@/assets/ebook-cover-showcase/ebook-cover-12.webp";

/* APP UI */
import ui1 from "@/assets/app-uiux-showcase/app-uiux-1.webp";
import ui2 from "@/assets/app-uiux-showcase/app-uiux-2.webp";
import ui3 from "@/assets/app-uiux-showcase/app-uiux-3.webp";
import ui4 from "@/assets/app-uiux-showcase/app-uiux-4.webp";

/* DIGITAL MARKETING */
import dm1 from "@/assets/digital-marketing-showcase/digital-marketing-1.webp";
import dm2 from "@/assets/digital-marketing-showcase/digital-marketing-2.webp";
import dm3 from "@/assets/digital-marketing-showcase/digital-marketing-3.webp";
import dm4 from "@/assets/digital-marketing-showcase/digital-marketing-4.webp";

const PortfolioBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1.05, 1.15, 1.05],
          x: ["0%", "2%", "0%"],
          y: ["0%", "-2%", "0%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.45) contrast(1.1)",
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#020B16]/82" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_32%)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/25 via-[#031C33]/65 to-[#020B16]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,22,0.08)_0%,rgba(3,28,51,0.16)_28%,rgba(3,28,51,0.18)_55%,rgba(2,11,22,0.38)_82%,rgba(2,11,22,0.52)_100%)]" />
    </div>
  );
};

const portfolioSections = [
  {
    title: "Logo & Branding",
    subtitle:
      "Strategic brand identities designed to look premium, memorable, and trustworthy.",
    tag: "Brand Identity",
    images: [logo2, logo3, logo4, logo5, logo1, logo6],
    contain: true,
    link: "/logo-design",
  },
  {
    title: "eBook Cover Design",
    subtitle:
      "Professional book covers crafted for authors, publishing platforms, and digital readers.",
    tag: "Publishing Design",
    images: [
      ebook1,
      ebook2,
      ebook3,
      ebook4,
      ebook5,
      ebook6,
      ebook7,
      ebook8,
      ebook9,
      ebook10,
      ebook11,
      ebook12,
    ],
    contain: true,
    link: "/ebook-cover-design",
  },
  {
    title: "App UI/UX Design",
    subtitle:
      "Modern mobile app interfaces focused on clean user flow, clarity, and visual experience.",
    tag: "Product Design",
    images: [ui1, ui2, ui4],
    contain: false,
    link: "/mobile-app-design",
  },
  {
    title: "Digital Marketing",
    subtitle:
      "Creative marketing visuals built to increase brand visibility, trust, and engagement.",
    tag: "Growth Creative",
    images: [dm2, dm3, dm4],
    contain: false,
    link: "/digital-marketing",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="portfolio"
      className="relative pt-24 md:pt-28 pb-12 md:pb-14 overflow-hidden bg-[#020B16]"
    >
      <PortfolioBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-24">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-purple/10 border border-accent-purple/30 rounded-full mb-7 text-[#d8d0ff] font-medium uppercase tracking-[0.25em] text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-accent-purple" />
            Featured Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[0.95] tracking-[-0.04em] mb-6">
            Creative Work That Builds
            <span className="block text-accent-purple">Digital Trust</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore selected branding, UI/UX, eBook cover, and marketing
            projects crafted to help businesses look professional, build
            credibility, and grow stronger online.
          </p>
        </div>

        <div className="space-y-24 md:space-y-28">
          {portfolioSections.map((section) => (
            <div key={section.title} className="relative">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
                <div>
                  <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.22em] mb-3 text-xs sm:text-sm">
                    {section.tag}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
                    {section.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-lg max-w-2xl leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => navigate(section.link)}
                  className="group inline-flex items-center gap-2 bg-[#031C33]/65 backdrop-blur-xl hover:bg-[#1BBCEF]/15 border border-white/10 hover:border-accent-purple/60 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1BBCEF]/20"
                >
                  View Page
                  <ArrowUpRight className="w-5 h-5 text-accent-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setSelectedImage({
                        image: img,
                        title: section.title,
                      })
                    }
                    className="group cursor-pointer rounded-[28px] overflow-hidden bg-[#031C33]/72 backdrop-blur-xl border border-white/10 hover:border-accent-purple/70 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/35 hover:shadow-[0_0_65px_rgba(27,188,239,0.24)]"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1BBCEF]/10 via-transparent to-[#004495]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                      <div
                        className={`w-full flex items-center justify-center ${
                          section.title === "eBook Cover Design"
                            ? "h-[310px] sm:h-[360px] md:h-[410px]"
                            : "h-[260px] sm:h-[300px] md:h-[340px]"
                        } ${
                          section.contain
                            ? "bg-[#F8FBFF] p-5"
                            : "bg-[#031C33]/45 p-0"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${section.title} project ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                            section.contain ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="p-5 bg-[#031C33]/90 border-t border-white/10">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-white font-bold text-lg">
                            {section.title}
                          </p>

                          <p className="text-sm text-gray-400">
                            Optivax Global Showcase
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(section.link);
                          }}
                          className="shrink-0 w-11 h-11 rounded-full bg-[#1BBCEF]/12 border border-accent-purple/35 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#1BBCEF] hover:to-[#004495] hover:border-accent-purple transition-all duration-300"
                          aria-label={`Open ${section.title} page`}
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white font-semibold rounded-full shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300 border-0"
          >
            Let’s Build Your Brand
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#1BBCEF] hover:border-[#1BBCEF] transition z-10"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[94vw] max-h-[90vh] rounded-3xl border border-white/10 bg-[#0C0D0D] p-3 shadow-2xl shadow-black/70"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1BBCEF]/30 to-[#004495]/30 blur-xl -z-10" />

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              loading="lazy"
              decoding="async"
              className="max-w-[90vw] max-h-[82vh] w-auto h-auto object-contain rounded-2xl"
            />

            <div className="pt-3 px-2 pb-1 text-center">
              <p className="text-white font-semibold">{selectedImage.title}</p>
              <p className="text-gray-400 text-sm">
                Optivax Global Portfolio
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;