import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Plus,
  Globe,
  PenTool,
  Smartphone,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    slug: "/web-design",
    icon: Globe,
    description:
      "Premium WordPress and landing page design built for small businesses, startups, and brand websites that need to look professional and convert visitors from day one.",
    points: [
      { title: "Small Business Websites" },
      { title: "Landing Pages" },
      { title: "WordPress & Brand Sites" },
    ],
  },
  {
    title: "Web Development",
    slug: "/web-development",
    icon: Globe,
    description:
      "Custom-coded web development for businesses that need more than a template React applications, dashboards, e-commerce platforms, and SaaS products built to scale.",
    points: [
      { title: "React Applications" },
      { title: "Dashboards & Admin Panels" },
      { title: "E-Commerce & SaaS" },
    ],
  },
  {
    title: "UI/UX Design",
    slug: "/ui-ux-design",
    icon: Smartphone,
    description:
      "Intuitive interfaces and user experiences designed for clarity, usability, consistency, and stronger digital interaction.",
    points: [
      { title: "Wireframes" },
      { title: "User Flows" },
      { title: "Prototype Design" },
    ],
  },
  {
    title: "Mobile App Design",
    slug: "/mobile-app-design",
    icon: Smartphone,
    description:
      "App interface design focused on clarity and usability, from first tap through everyday use.",
    points: [
      { title: "App Screens" },
      { title: "User-Friendly UX" },
      { title: "Modern Interfaces" },
    ],
  },
  {
    title: "Logo Design",
    slug: "/logo-design",
    icon: PenTool,
    description:
      "Custom logo design that creates a clear, memorable, and professional visual identity for your business.",
    points: [
      { title: "Brand Identity" },
      { title: "Concept Exploration" },
      { title: "Logo Assets" },
    ],
  },
  {
    title: "Branding Design",
    slug: "/brand-design",
    icon: PenTool,
    description:
      "Visual identity systems, colors, typography, and brand elements designed to represent your business clearly and consistently.",
    points: [
      { title: "Brand Identity" },
      { title: "Color System" },
      { title: "Visual Consistency" },
    ],
  },
  {
    title: "eBook Design",
    slug: "/ebook-cover-design",
    icon: BookOpen,
    description:
      "Professional eBook cover and publishing visuals tailored to present your work with a polished, credible appearance.",
    points: [
      { title: "Cover Design" },
      { title: "Book Branding" },
      { title: "Publishing Layout" },
    ],
  },
  {
    title: "eBook Publishing",
    slug: "/ebook-publishing",
    icon: BookOpen,
    description:
      "Formatting and presentation support for authors and creators who want clean, publish-ready digital book delivery.",
    points: [
      { title: "Formatting" },
      { title: "Layout" },
      { title: "Publishing Support" },
    ],
  },
];

const filterTags = [
  "Website Design",
  "Web Development",
  "UI/UX Design",
  "Mobile App Design",
  "Logo Design",
  "Branding Design",
  "eBook Design",
  "eBook Publishing",
];

const tagLinks = {
  "Website Design": "/web-design",
  "Web Development": "/web-development",
  "UI/UX Design": "/ui-ux-design",
  "Mobile App Design": "/mobile-app-design",
  "Logo Design": "/logo-design",
  "Branding Design": "/brand-design",
  "eBook Design": "/ebook-cover-design",
  "eBook Publishing": "/ebook-publishing",
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleServiceClick = (index, slug) => {
    if (activeIndex === index) {
      navigate(slug);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-5xl">
          <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
            Design Services
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
            Design Solutions
            <span className="block text-accent-purple">
              Built Around Your Brand
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mt-4 leading-relaxed">
            We provide professional digital design, development, branding,
            publishing, and creative solutions built around your business
            requirements.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {filterTags.map((tag) => (
              <Link
                key={tag}
                to={tagLinks[tag]}
                className="px-5 py-2 border border-accent-purple/30 bg-accent-purple/5 rounded-full text-gray-300 text-sm md:text-base transition-all duration-300 hover:bg-accent-purple hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/20"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={service.title}
                className="border-b border-white/10 hover:bg-white/[0.02] transition-all duration-300"
              >
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-left cursor-pointer py-8 group"
                  onClick={() => handleServiceClick(index, service.slug)}
                  aria-expanded={isActive}
                  aria-controls={`service-${index}`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? "border-accent-purple bg-accent-purple/15 text-accent-purple"
                          : "border-white/10 text-gray-500 group-hover:text-accent-purple group-hover:border-accent-purple/50"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <h3
                      className={`text-2xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 shrink-0"
                  >
                    <Plus
                      size={36}
                      className={`transition-colors ${
                        isActive
                          ? "text-accent-purple"
                          : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      id={`service-${index}`}
                      initial={{ opacity: 0, height: 0, y: -15 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pl-17">
                        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed mb-5">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {service.points.map((point) =>
                            point.link ? (
                              <Link
                                key={point.title}
                                to={point.link}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple text-white border border-accent-purple text-sm font-semibold shadow-lg shadow-accent-purple/20 hover:bg-white hover:text-[#0C0D0D] hover:border-white transition-all duration-300"
                              >
                                {point.title}
                                <ArrowUpRight size={16} />
                              </Link>
                            ) : (
                              <span
                                key={point.title}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                              >
                                {point.title}
                              </span>
                            )
                          )}
                        </div>

                        <div className="mt-6">
                          <Link
                            to={service.slug}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-accent-purple font-semibold hover:gap-3 transition-all duration-300"
                          >
                            Learn More
                            <ArrowUpRight size={22} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;