import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* LOGOS */
import logo1 from "@/assets/logo-showcase/jh8-shoez.png";
import logo2 from "@/assets/logo-showcase/burgera.png";
import logo3 from "@/assets/logo-showcase/clean.png";
import logo4 from "@/assets/logo-showcase/classic-cars.png";
import logo5 from "@/assets/logo-showcase/tarika.png";
import logo6 from "@/assets/logo-showcase/nativa.png";

/* EBOOKS */
import ebook1 from "@/assets/ebook-cover-showcase/ebook-cover-1.png";
import ebook2 from "@/assets/ebook-cover-showcase/ebook-cover-2.png";
import ebook3 from "@/assets/ebook-cover-showcase/ebook-cover-3.png";
import ebook4 from "@/assets/ebook-cover-showcase/ebook-cover-4.png";

/* APP UI */
import ui1 from "@/assets/app-uiux-showcase/app-uiux-1.png";
import ui2 from "@/assets/app-uiux-showcase/app-uiux-2.png";
import ui3 from "@/assets/app-uiux-showcase/app-uiux-3.png";
import ui4 from "@/assets/app-uiux-showcase/app-uiux-4.png";

/* DIGITAL MARKETING */
import dm1 from "@/assets/digital-marketing-showcase/digital-marketing-1.jpg";
import dm2 from "@/assets/digital-marketing-showcase/digital-marketing-2.jpg";
import dm3 from "@/assets/digital-marketing-showcase/digital-marketing-3.jpg";
import dm4 from "@/assets/digital-marketing-showcase/digital-marketing-4.jpg";

const portfolioSections = [
  {
    title: "Logo & Branding",
    subtitle: "Professional brand identity projects",
    images: [logo1, logo2, logo3, logo4, logo5, logo6],
    contain: true,
  },
  {
    title: "Ebook Cover Design",
    subtitle: "Premium ebook covers designed for authors",
    images: [ebook1, ebook2, ebook3, ebook4],
    contain: true,
  },
  {
    title: "App UI/UX Design",
    subtitle: "Modern mobile interface design projects",
    images: [ui1, ui2, ui3, ui4],
    contain: false,
  },
  {
    title: "Digital Marketing",
    subtitle: "Creative marketing & branding campaigns",
    images: [dm1, dm2, dm3, dm4],
    contain: false,
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section
      id="portfolio"
      className="relative py-20 overflow-hidden bg-[#0C0D0D]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,174,255,0.12),transparent_55%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.3em] mb-5">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Creative Work That Builds
            <span className="block text-accent-purple">
              Powerful Brands
            </span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            Explore our latest branding, ebook cover, app UI/UX, and digital
            marketing projects designed to help businesses grow online.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.title}>
              {/* Section Header */}
              <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                    {section.title}
                  </h3>

                  <p className="text-gray-400">
                    {section.subtitle}
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2 text-accent-purple">
                  <ArrowUpRight className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-widest">
                    Featured Work
                  </span>
                </div>
              </div>

              {/* Horizontal Slider */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 w-max pb-2">
                  {section.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      className="group relative w-[320px] h-[260px] rounded-3xl overflow-hidden bg-[#161622]/80 border border-white/10 hover:border-accent-purple/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl backdrop-blur-sm"
                    >
                      <img
                        src={img}
                        alt="portfolio"
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                          section.contain
                            ? "object-contain p-5 bg-white"
                            : "object-cover"
                        }`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <div>
                          <p className="text-white font-semibold">
                            {section.title}
                          </p>

                          <p className="text-xs text-gray-300">
                            Optivax Global
                          </p>
                        </div>

                        <div className="bg-accent-purple/20 border border-accent-purple/30 backdrop-blur-sm p-3 rounded-full">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-5 bg-accent-purple text-white font-bold rounded-full hover:bg-accent-purple/90 transition-all duration-300 hover:scale-105 shadow-2xl shadow-accent-purple/20"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;