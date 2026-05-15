import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Plus,
  Globe,
  PenTool,
  Smartphone,
  Megaphone,
  BookOpen,
  Presentation,
} from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    slug: "/website-design",
    icon: Globe,
    description:
      "We build modern, responsive, and high-performing websites designed to strengthen your online presence, build customer trust, and turn visitors into clients.",
    points: [
      "Business Websites",
      "Landing Pages",
      "Responsive Design",
      "SEO-Optimized Structure",
    ],
  },
  {
    title: "Logo & Branding",
    slug: "/logo-design",
    icon: PenTool,
    description:
      "We create memorable brand identities with professional logos, color systems, typography, and visual branding that help businesses stand out confidently.",
    points: [
      "Custom Logo Design",
      "Brand Identity",
      "Color Palette",
      "Typography System",
    ],
  },
  {
    title: "App UI/UX Design",
    slug: "/app-ui-ux-design",
    icon: Smartphone,
    description:
      "We design clean and engaging mobile app experiences focused on usability, user satisfaction, and modern interface design.",
    points: [
      "Mobile App UI",
      "User Experience",
      "Wireframes",
      "Interactive Prototypes",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "/digital-marketing",
    icon: Megaphone,
    description:
      "We help brands grow through strategic digital marketing, SEO, content planning, and campaigns focused on visibility, engagement, and conversions.",
    points: [
      "SEO Optimization",
      "Social Media Marketing",
      "Lead Generation",
      "Marketing Campaigns",
    ],
  },
  {
    title: "eBook Cover Design",
    slug: "/ebook-cover-design",
    icon: BookOpen,
    description:
      "We design professional eBook covers that capture attention, improve credibility, and help authors increase clicks, engagement, and sales.",
    points: [
      "KDP Covers",
      "Book Branding",
      "Creative Concepts",
      "Sales-Focused Design",
    ],
  },
  {
    title: "Corporate Presentation Design",
    slug: "/corporate-presentation-design",
    icon: Presentation,
    description:
      "We create premium pitch decks, company profiles, and business presentations designed to impress clients, investors, and business partners.",
    points: [
      "Pitch Decks",
      "Company Profiles",
      "Business Proposals",
      "Presentation Design",
    ],
  },
];

const filterTags = [
  "Web Design",
  "Branding",
  "App UI/UX",
  "Marketing",
  "eBook Covers",
];

const tagLinks = {
  "Web Design": "/website-design",
  Branding: "/logo-design",
  "App UI/UX": "/app-ui-ux-design",
  Marketing: "/digital-marketing",
  "eBook Covers": "/ebook-cover-design",
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleServiceClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-5xl">
          <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
            Professional Digital Services
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
  Digital Solutions Built to
  <span className="block text-accent-purple">
    Elevate Modern Brands
  </span>
</h2>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mt-4 leading-relaxed">
  From professional websites and branding to UI/UX design, SEO, and digital
  marketing, Optivax Global helps businesses build a stronger online presence
  and create lasting customer impact.
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

            return (
              <div key={service.title} className="border-b border-white/10 hover:bg-white/[0.02] transition-all duration-300">
                <button
                  type="button"
                  className="w-full flex justify-between items-center text-left cursor-pointer py-8 group"
                  onClick={() => {
                    if (service.slug) {
                      navigate(service.slug);
                    } else {
                      handleServiceClick(index);
                    }
                  }}
                  aria-expanded={activeIndex === index}
                  aria-controls={`service-${index}`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        activeIndex === index
                          ? "border-accent-purple bg-accent-purple/15 text-accent-purple"
                          : "border-white/10 text-gray-500 group-hover:text-accent-purple group-hover:border-accent-purple/50"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <h3
                      className={`text-2xl md:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 shrink-0"
                  >
                    <Plus
                      size={36}
                      className={`transition-colors ${
                        activeIndex === index
                          ? "text-accent-purple"
                          : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
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
                          {service.points.map((point) => (
                            <span
                              key={point}
                              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                            >
                              {point}
                            </span>
                          ))}
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