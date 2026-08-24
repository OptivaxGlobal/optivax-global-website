import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  MousePointer2,
  PenTool,
  Palette,
  BookOpen,
  BookMarked,
  Sparkles,
  Smartphone
} from "lucide-react";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";
import SectionAnimator from "@/components/SectionAnimator";

const serviceCategories = [
  {
    category: "Website & Digital Design",
    items: [
      {
        icon: Globe,
        title: "Website Design",
        text: "Professional, responsive website design tailored to your brand, content, and desired user experience.",
        href: "/web-design",
      },
      {
        icon: Globe,
        title: "Web Development",
        text: "Reliable website development using clean functionality and modern technical implementation for dependable digital experiences.",
        href: "/web-development",
      },
      {
        icon: MousePointer2,
        title: "UI/UX Design",
        text: "Interface and experience design focused on clarity, usability, consistency, and smooth digital interaction.",
        href: "/ui-ux-design",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        text: "Custom mobile app experiences designed to support modern business workflows and intuitive user journeys.",
        href: "/mobile-app-development",
      },
      {
        icon: Smartphone,
        title: "Mobile App Design",
        text: "App interface design focused on clarity and usability, from first tap through everyday use.",
        href: "/mobile-app-design",
      },
    ],
  },
  {
    category: "Branding & Identity",
    items: [
      {
        icon: PenTool,
        title: "Logo Design",
        text: "Custom logo design created to establish a clear, memorable, and professional identity for your brand.",
        href: "/logo-design",
      },
      {
        icon: Palette,
        title: "Branding Design",
        text: "Supporting visual brand elements including color system, typography, and consistent identity design across touchpoints.",
        href: "/brand-design",
      },
      {
        icon: PenTool,
        title: "Graphic Design",
        text: "Creative design work for digital and print assets that strengthen brand communication and visual presentation.",
        href: "/graphics-design",
      },
      {
        icon: PenTool,
        title: "Corporate Presentation Design",
        text: "Professional presentation design to communicate your message with clarity, confidence, and visual structure.",
        href: "/corporate-presentation-design",
      },
      {
        icon: Palette,
        title: "Brand Management",
        text: "Ongoing support to keep your visual identity consistent and organized across every platform and touchpoint.",
        href: "/brand-management",
      },
    ],
  },
  {
    category: "Creative & Publishing",
    items: [
      {
        icon: BookOpen,
        title: "eBook Design",
        text: "Professional eBook cover design and visual presentation that help your work feel polished and credible.",
        href: "/ebook-cover-design",
      },
      {
        icon: BookMarked,
        title: "eBook Publishing",
        text: "Interior layout, formatting, and presentation support that help authors prepare a publish-ready digital book.",
        href: "/ebook-publishing",
      },
      {
        icon: PenTool,
        title: "Brochure Design",
        text: "Well-structured brochure design for clear communication of your services, offerings, and value.",
        href: "/brochure-design",
      },
      {
        icon: PenTool,
        title: "Flyer Design",
        text: "Promotional flyer design created to communicate offers, announcements, and key information in a visually strong way.",
        href: "/flyer-design",
      },
      {
        icon: PenTool,
        title: "Stationery Design",
        text: "Business stationery design that supports a polished, consistent, and professional brand identity.",
        href: "/stationary-design",
      },
    ],
  },
  {
    category: "Product & Experience",
    items: [
      {
        icon: Globe,
        title: "Animation Services",
        text: "Creative motion graphics and visual storytelling that bring products, messages, and brand experiences to life.",
        href: "/animation",
      },
      {
        icon: Globe,
        title: "CMS Solutions",
        text: "Content management systems that make it easier to organize, update, and maintain digital content efficiently.",
        href: "/content-management-system",
      },
    ],
  },
  {
    category: "Digital Marketing",
    items: [
      {
        icon: Globe,
        title: "Digital Marketing",
        text: "Professional digital marketing support built around your business goals, brand voice, and audience.",
        href: "/digital-marketing",
      },
      /*{
        icon: Globe,
        title: "Search Engine Optimization",
        text: "Website structure and content practices designed to help search engines understand and index your site clearly.",
        href: "/search-engine-optimization",
      },*/
      {
        icon: Globe,
        title: "Search Engine Marketing",
        text: "Search-based campaign design and landing page support built around clear, professional messaging.",
        href: "/search-engine-marketing",
      },
      {
        icon: Globe,
        title: "Social Media Marketing",
        text: "Social media content, visuals, and account presentation designed to reflect your brand consistently.",
        href: "/social-media-marketing",
      },
      {
        icon: Globe,
        title: "Email Marketing",
        text: "Email campaign design and communication templates built for clear, professional customer messaging.",
        href: "/email-marketing",
      },
      {
        icon: Globe,
        title: "Pay Per Click",
        text: "Paid search and social ad creative and landing page design built around clear, professional presentation.",
        href: "/pay-per-click",
      },
    ],
  },
];

const allServices = serviceCategories.flatMap((group) => group.items);

const ServicesPage = () => {
  const navigate = useNavigate();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Optivax Global Services",
    itemListElement: allServices.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      url: `https://optivaxglobal.com${service.href}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Professional Digital Design Services | Optivax Global</title>
        <meta
          name="description"
          content="Explore Optivax Global services including website design and development, UI/UX design, branding, publishing, and digital marketing solutions."
        />
        <link rel="canonical" href="https://optivaxglobal.com/services" />

        <meta property="og:title" content="Professional Digital Design Services | Optivax Global" />
        <meta
          property="og:description"
          content="Explore Optivax Global services including website design and development, UI/UX design, branding, publishing, and digital marketing solutions."
        />
        <meta property="og:url" content="https://optivaxglobal.com/services" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />

          {/* soft premium glow depth */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-[#1BBCEF]/10 blur-[140px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#004495]/20 blur-[130px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/80" />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl mx-auto px-6 relative z-10 text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-purple font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              What We Offer
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-[0_0_35px_rgba(22,153,241,0.18)]">
              Our Services
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Optivax Global provides professional digital design,
              development, branding, publishing, and creative solutions for
              businesses, brands, professionals, and creators tailored to
              each client's individual requirements.
            </p>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/40 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500">
                Tell us what you need we'll point you to the right service.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="relative py-20 border-t border-white/10 overflow-hidden">
          {/* subtle section depth */}
          <div
            className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-[#1BBCEF]/5 blur-[150px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 -right-40 w-[420px] h-[420px] rounded-full bg-[#004495]/10 blur-[150px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {serviceCategories.map((group, groupIndex) => (
              <SectionAnimator
                key={group.category}
                className={groupIndex === 0 ? "" : "mt-16"}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="shrink-0 text-accent-purple font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
                    {group.category}
                  </span>
                  <span className="flex-1 h-px bg-gradient-to-r from-accent-purple/30 via-white/10 to-transparent" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.title}
                        className="group relative flex flex-col h-full bg-white/[0.04] p-8 rounded-3xl border border-white/10 overflow-hidden hover:border-accent-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(22,153,241,0.35)] transition-all duration-300"
                      >
                        {/* top accent line, appears on hover */}
                        <span className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent-purple/0 group-hover:via-accent-purple/70 to-transparent transition-all duration-500" />

                        <div className="w-16 h-16 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6 group-hover:bg-accent-purple/25 group-hover:scale-105 transition-all duration-300">
                          <Icon size={28} />
                        </div>

                        <h2 className="text-xl font-bold mb-3">{service.title}</h2>

                        <p className="text-gray-400 text-[15px] leading-relaxed mb-6 flex-1">
                          {service.text}
                        </p>

                        <Link
                          to={service.href}
                          className="inline-flex items-center gap-2 text-accent-purple font-semibold pt-5 mt-auto border-t border-white/10 group-hover:gap-3 transition-all duration-300"
                        >
                          Learn More
                          <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </SectionAnimator>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/85" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                Not Sure Where to Start?
              </h2>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Tell us a bit about your business and we'll help you figure
                out which service actually fits your goals.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/40 hover:-translate-y-0.5"
              >
                Talk to Our Team
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
