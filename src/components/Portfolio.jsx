import React, { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight,ArrowRight, } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* LOGOS */
import logo1 from "@/assets/logo-showcase/jh8-shoez.webp";
import logo2 from "@/assets/logo-showcase/burgera.webp";
import logo3 from "@/assets/logo-showcase/clean.webp";
import logo4 from "@/assets/logo-showcase/classic-cars.webp";
import logo5 from "@/assets/logo-showcase/tarika.webp";
import logo6 from "@/assets/logo-showcase/nativa.webp";

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
    images: [logo1, logo2, logo3, logo4, logo5, logo6],
    contain: true,
    link: "/logo-design-services",
  },
  {
    title: "eBook Cover Design",
    subtitle: "Professional eBook covers designed for modern authors",
    images: [ebook1, ebook2, ebook3, ebook4, ebook5, ebook6, ebook7, ebook8, ebook9, ebook10, ebook11, ebook12],
    contain: true,
    link: "/ebook-cover-design",
  },
  {
    title: "App UI/UX Design",
    subtitle: "Modern app experiences focused on usability and design",
    images: [ui1, ui2, ui3, ui4],
    contain: false,
    link: "/app-ui-ux-design",
  },
  {
    title: "Digital Marketing",
    subtitle: "Creative campaigns built for visibility and engagement",
    images: [dm1, dm2, dm3, dm4],
    contain: false,
    link: "/digital-marketing-services",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const sliderRefs = useRef([]);

  const scrollSlider = (index, direction) => {
    const slider = sliderRefs.current[index];
    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  const handleWheelScroll = (e, index) => {
    const slider = sliderRefs.current[index];
    if (!slider) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    }
  };

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

        <div className="space-y-24">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.title} className="relative">
              <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                    {section.title}
                  </h3>

                  <p className="text-gray-400 text-lg">{section.subtitle}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => scrollSlider(sectionIndex, "left")}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-[#1BBCEF] text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    onClick={() => scrollSlider(sectionIndex, "right")}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] hover:bg-[#1BBCEF] text-white flex items-center justify-center transition-all duration-300"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={22} />
                  </button>

                  <button
                    onClick={() => navigate(section.link)}
                    className="hidden md:flex items-center gap-2 text-accent-purple hover:text-white transition-all duration-300 ml-2"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-widest">
                      View Page
                    </span>
                  </button>
                </div>
              </div>

              <div
                ref={(el) => (sliderRefs.current[sectionIndex] = el)}
                onWheel={(e) => handleWheelScroll(e, sectionIndex)}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
              >
                <div className="flex gap-7 min-w-max pb-3">
                  {section.images.map((img, index) => (
                    <div
                      key={index}
                      className="group relative w-[340px] h-[270px] shrink-0 rounded-[30px] overflow-hidden bg-white/[0.03] border border-white/10 hover:border-accent-purple/40 transition-colors duration-300 hover:shadow-2xl hover:shadow-accent-purple/20 backdrop-blur-md"
                    >
                      <img
                        src={img}
                        alt={`${section.title} project ${index + 1}`}
                        loading="lazy"
                        className={`w-full h-full transition-opacity duration-300 ${
                          section.contain
                            ? "object-contain p-5 bg-white"
                            : "object-cover"
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <div>
                          <p className="text-white font-semibold text-lg">
                            {section.title}
                          </p>

                          <p className="text-sm text-gray-300">
                            Optivax Global
                          </p>
                        </div>

                        <button
                          onClick={() => navigate(section.link)}
                          className="bg-accent-purple/20 border border-accent-purple/30 backdrop-blur-sm p-3 rounded-full hover:bg-accent-purple transition-all duration-300"
                          aria-label={`Open ${section.title} page`}
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button
    onClick={() => navigate("/contact")}
    className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white font-semibold rounded-full shadow-lg shadow-[#1BBCEF]/25 hover:-translate-y-0.5 transition-all duration-300 border-0"
  >
    Let's Build Your Brand
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;