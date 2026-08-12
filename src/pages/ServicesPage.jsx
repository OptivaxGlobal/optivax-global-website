import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Code2,
  PenTool,
  Palette,
  Layers,
  FileText,
  Newspaper,
  Stamp,
  Smartphone,
  AppWindow,
  MousePointer2,
  ShieldCheck,
  Database,
  Megaphone,
  Mail,
  Target,
  TrendingUp,
  SearchCheck,
  Share2,
  Clapperboard,
  Presentation,
  BookOpen,
  BookMarked,
  Sparkles,
} from "lucide-react";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";
import SectionAnimator from "@/components/SectionAnimator";

const serviceCategories = [
  {
    category: "Web & Development",
    items: [
      {
        icon: Globe,
        title: "Web Design",
        text: "A website is often the first impression your business makes. We design sites that look professional, load quickly, and guide visitors toward taking action.",
        href: "/web-design",
      },
      {
        icon: Code2,
        title: "Web Development",
        text: "Behind every good website is code that holds up. We build fast, secure websites that are easy to maintain long after launch.",
        href: "/web-development",
      },
      {
        icon: Database,
        title: "Content Management System",
        text: "We set up and support content systems that make updating your website simple, even if you're not technical.",
        href: "/content-management-system",
      },
    ],
  },
  {
    category: "Branding & Creative",
    items: [
      {
        icon: PenTool,
        title: "Logo Design",
        text: "Your logo shows up everywhere your brand does. We create marks that are simple enough to remember and distinctive enough to stand out.",
        href: "/logo-design",
      },
      {
        icon: Palette,
        title: "Brand Design",
        text: "From color palette to typography, we build a visual identity that stays consistent across your website, marketing, and everything in between.",
        href: "/brand-design",
      },
      {
        icon: ShieldCheck,
        title: "Brand Management",
        text: "Keeping a brand consistent across every platform takes ongoing attention. We help manage that, so your identity never feels disjointed.",
        href: "/brand-management",
      },
      {
        icon: Layers,
        title: "Graphics Design",
        text: "Social posts, ads, print materials, whatever you need designed, we create graphics that match your brand and actually get noticed.",
        href: "/graphics-design",
      },
      {
        icon: FileText,
        title: "Brochure Design",
        text: "Well-designed brochures still work. We create layouts that present your business clearly and give prospects a reason to keep reading.",
        href: "/brochure-design",
      },
      {
        icon: Newspaper,
        title: "Flyer Design",
        text: "For promotions, events, and campaigns, we design flyers built to catch attention fast and get your offer across clearly.",
        href: "/flyer-design",
      },
      {
        icon: Stamp,
        title: "Stationary Design",
        text: "Business cards, letterheads, and everyday materials designed to keep your brand looking consistent wherever it shows up.",
        href: "/stationary-design",
      },
      {
        icon: Presentation,
        title: "Corporate Presentation",
        text: "Pitch decks, company profiles, and business presentations designed to look sharp and support your message.",
        href: "/corporate-presentation-design",
      },
      {
        icon: Clapperboard,
        title: "Animation",
        text: "Custom animation and motion design that bring your brand, product, or story to life on screen.",
        href: "/animation",
      },
    ],
  },
  {
    category: "Marketing & SEO",
    items: [
      {
        icon: Megaphone,
        title: "Digital Marketing",
        text: "A growth strategy built around search, social, and content, designed to bring the right people to your business.",
        href: "/digital-marketing",
      },
      {
        icon: Mail,
        title: "Email Marketing",
        text: "Campaigns built to nurture leads and stay in front of your audience, without feeling like spam.",
        href: "/email-marketing",
      },
      {
        icon: Target,
        title: "Pay Per Click (PPC)",
        text: "Targeted ad campaigns managed to bring in qualified traffic, not just clicks.",
        href: "/pay-per-click",
      },
      {
        icon: TrendingUp,
        title: "Search Engine Marketing",
        text: "We help your business show up when people are actively searching for what you offer.",
        href: "/search-engine-marketing",
      },
      {
        icon: SearchCheck,
        title: "Search Engine Optimization (SEO)",
        text: "SEO-focused site structure and ongoing optimization support to help your business rank and get found.",
        href: "/search-engine-optimization",
      },
      {
        icon: Share2,
        title: "Social Media Marketing",
        text: "Strategy, content planning, and campaign direction built to create real engagement, not just impressions.",
        href: "/social-media-marketing",
      },
    ],
  },
  {
    category: "Mobile & UI/UX",
    items: [
      {
        icon: Smartphone,
        title: "Mobile App Development",
        text: "We build custom iOS and Android apps around how your business actually works, not a one-size-fits-all template.",
        href: "/mobile-app-development",
      },
      {
        icon: AppWindow,
        title: "Mobile App Design",
        text: "App interfaces designed to feel intuitive from the first tap, so people stick around instead of bouncing.",
        href: "/mobile-app-design",
      },
      {
        icon: MousePointer2,
        title: "UI/UX Design",
        text: "We design interfaces based on how people actually use websites and apps, not just how they look in a mockup.",
        href: "/ui-ux-design",
      },
    ],
  },
  {
    category: "Publishing & Content",
    items: [
      {
        icon: BookOpen,
        title: "eBook Cover Design",
        text: "Genre-appropriate cover design built to make your book stand out the moment readers see it.",
        href: "/ebook-cover-design",
      },
      {
        icon: BookMarked,
        title: "eBook Publishing",
        text: "From manuscript preparation to formatting and platform setup, we help take your book from draft to published.",
        href: "/ebook-publishing",
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
        <title>Professional Digital Services | Optivax Global</title>
        <meta
          name="description"
          content="Explore Optivax Global services including web design, development, branding, SEO, digital marketing, mobile apps, eBook design, publishing and more."
        />
        <link rel="canonical" href="https://optivaxglobal.com/services" />

        <meta property="og:title" content="Professional Digital Services | Optivax Global" />
        <meta
          property="og:description"
          content="Explore Optivax Global services including web design, development, branding, SEO, digital marketing, mobile apps, eBook design, publishing and more."
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
              From your first design concept to a fully launched digital
              presence, Optivax Global brings design, development,
              marketing, and publishing services together under one team.
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
                Tell us what you need — we'll point you to the right service.
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
