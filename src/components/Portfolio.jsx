import React, { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const portfolioSections = [
  {
    title: "Logo & Branding",
    subtitle: "Strategic branding and visual identity projects",
    images: [logo2, logo3, logo4, logo5, logo1, logo6],
    contain: true,
    link: "/logo-design",
  },
  {
    title: "eBook Cover Design",
    subtitle: "Professional eBook covers designed for modern authors",
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
    subtitle: "Modern app experiences focused on usability and design",
    images: [ui1, ui2, ui4],
    contain: false,
    link: "/app-ui-ux-design",
  },
  {
    title: "Digital Marketing",
    subtitle: "Creative campaigns built for visibility and engagement",
    images: [dm1, dm2,  dm4],
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
      className="relative py-24 overflow-hidden bg-[#0C0D0D]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,174,255,0.12),transparent_55%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.3em] mb-5">
            Featured Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Creative Design
            <span className="block text-accent-purple">
              for Modern Brands
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore a selection of branding, website, UI/UX, eBook, and
            marketing projects crafted to help businesses build trust, improve
            visibility, and create a stronger digital presence.
          </p>
        </div>

        <div className="space-y-28">
          {portfolioSections.map((section) => (
            <div key={section.title} className="relative">
              <div className="flex items-end justify-between mb-10 flex-wrap gap-5">
                <div>
                  <span className="inline-block text-[#1CA4F4] font-semibold uppercase tracking-[0.22em] mb-3 text-xs sm:text-sm">
                    Portfolio Showcase
                  </span>

                  <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
                    {section.title}
                  </h3>

                  <p className="text-white/60 text-sm md:text-lg max-w-2xl">
                    {section.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => navigate(section.link)}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1CA4F4]/50 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  View Page
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {section.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="group cursor-pointer rounded-[26px] overflow-hidden bg-[#101018] border border-white/10 hover:border-[#1CA4F4] hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_55px_rgba(28,164,244,0.25)]"
                  >
                    <div
                      className={`w-full flex items-center justify-center ${
                        section.title === "eBook Cover Design"
                          ? "h-[300px] sm:h-[340px] md:h-[390px]"
                          : "h-[250px] sm:h-[290px] md:h-[330px]"
                      } ${
                        section.contain
                          ? "bg-white p-5"
                          : "bg-black/30 p-0"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${section.title} project ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                          section.contain ? "object-contain" : "object-cover"
                        }`}
                      />
                    </div>

                    <div className="p-5 bg-[#101018] border-t border-white/10">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-white font-bold text-lg">
                            {section.title}
                          </p>

                          <p className="text-sm text-gray-400">
                            Optivax Global
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(section.link);
                          }}
                          className="w-11 h-11 rounded-full bg-[#1CA4F4]/15 border border-[#1CA4F4]/30 flex items-center justify-center hover:bg-[#1CA4F4] transition-all duration-300"
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

        <div className="mt-24 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white font-semibold rounded-full shadow-lg shadow-[#1BBCEF]/25 hover:-translate-y-0.5 transition-all duration-300 border-0"
          >
            Let's Build Your Brand
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
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
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Selected Portfolio"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
            decoding="async"
            className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;