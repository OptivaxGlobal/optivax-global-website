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
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    slug: "/web-design",
    icon: Globe,
    description:
      "Your website is often the first place people meet your brand. We design and develop clean, fast, and responsive websites that look professional, feel easy to use, and help turn visitors into real customers.",
    points: [
      { title: "Mobile App Design", link: "/mobile-app-design", highlight: true },
      { title: "SEO Optimization", link: "/search-engine-optimization", highlight: true },
      { title: "Responsive Design" },
      { title: "Landing Pages" },
    ],
  },
  {
    title: "Branding",
    slug: "/brand-design",
    icon: PenTool,
    description:
      "A strong brand makes your business easier to remember and trust. We create meaningful brand identities with logos, colors, typography, and visuals that give your business a polished and consistent look.",
    points: [
      { title: "Logo Design", link: "/logo-design", highlight: true },
      { title: "Brand Identity" },
      { title: "Color Palette" },
      { title: "Typography Style" },
    ],
  },
  {
    title: "UI/UX Design",
    slug: "/ui-ux-design",
    icon: Smartphone,
    description:
      "Good design is not just about how it looks. It is about how smoothly it works. We design modern, user-friendly interfaces that make websites and apps simple, clear, and enjoyable for your audience.",
    points: [
      { title: "Mobile App Design", link: "/mobile-app-design", highlight: true },
      { title: "Website UI Design" },
      { title: "Wireframes" },
      { title: "Interactive Prototypes" },
    ],
  },
  {
    title: "Digital Marketing",
    slug: "/digital-marketing",
    icon: Megaphone,
    description:
      "We help your brand get seen by the right people. From SEO and social media to smart campaign planning, our marketing approach is focused on visibility, engagement, and better business results.",
    points: [
      { title: "SEO Optimization", link: "/search-engine-optimization", highlight: true },
      { title: "Social Media Marketing", link: "/social-media-marketing", highlight: true },
      { title: "Lead Generation" },
      { title: "Campaign Strategy" },
    ],
  },
  {
    title: "eBook Cover Design",
    slug: "/ebook-cover-design",
    icon: BookOpen,
    description:
      "A great cover can make readers stop, look, and click. We design professional eBook covers that match your story, build trust, and help your book stand out on Amazon KDP and other platforms.",
    points: [
      { title: "KDP Covers" },
      { title: "Book Branding" },
      { title: "Creative Concepts" },
      { title: "Sales-Focused Covers" },
    ],
  },
  {
    title: "Corporate Presentation Design",
    slug: "/corporate-presentation-design",
    icon: Presentation,
    description:
      "Your presentation should explain your ideas clearly and leave a strong impression. We design premium pitch decks, company profiles, and corporate presentations that look sharp, organized, and business-ready.",
    points: [
      { title: "Pitch Decks" },
      { title: "Company Profiles" },
      { title: "Business Proposals" },
      { title: "Presentation Design" },
    ],
  },
];

const filterTags = [
  "Web Design",
  "Branding",
  "UI/UX Design",
  "Marketing",
  "eBook Covers",
];

const tagLinks = {
  "Web Design": "/web-design",
  Branding: "/brand-design",
  "UI/UX Design": "/ui-ux-design",
  Marketing: "/digital-marketing",
  "eBook Covers": "/ebook-cover-design",
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
            Professional Digital Services
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
            Digital Solutions Built to
            <span className="block text-accent-purple">
              Elevate Modern Brands
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mt-4 leading-relaxed">
            We help businesses build a stronger digital presence with
            professional websites, creative branding, smooth UI/UX design,
            result-focused marketing, and high-quality visual content.
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