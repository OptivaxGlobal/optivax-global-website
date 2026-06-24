import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
  Palette,
  Globe2,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  Zap,
  ChevronDown,
  ChevronUp,
  Layers,
} from "lucide-react";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

const servicesPackages = [
  {
    service: "Logo Design",
    icon: Palette,
    description:
      "Professional logo packages for startups, brand revamps, and businesses that need a strong visual identity.",
    packages: [
      {
        name: "Basic Logo Package",
        price: "$88.00",
        badge: "Basic",
        features: [
          "3 Custom Logo Design Concepts",
          "1 Dedicated Designer",
          "4 Revisions",
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
          "100% Money Back Guarantee *",
          "100% Ownership Rights",
          "Add on: $50 for 24 Hours Rush Delivery",
        ],
        suitable:
          "Suitable for potential super-startups and brand revamps for companies.",
      },
      {
        name: "Start Up Logo Package",
        price: "$168.00",
        badge: "Popular",
        popular: true,
        features: [
          "5 Custom Logo Design Concepts",
          "By 2 Designers",
          "FREE Icon",
          "FREE Business Card Design",
          "UNLIMITED Revisions",
          "48 to 72 hours TAT",
          "All Format (AI, PSD, PNG, GIF, JPG, PDF)",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
          "100% Ownership Rights",
          "Add on: $50 for 24 Hours Rush Delivery",
        ],
        suitable:
          "Suitable for potential super-startups and brand revamps for companies.",
      },
      {
        name: "Professional Logo Package",
        price: "$248.00",
        badge: "Professional",
        features: [
          "100% Unique Design Guarantee",
          "By 3 Designers",
          "UNLIMITED Revisions",
          "FREE Stationary Design Set",
          "FREE MS Word Letterhead",
          "48 to 72 hours TAT",
          "All Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
          "UNLIMITED Logo Design Concepts",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee *",
          "15% Discount on your next order",
          "Add on: $50 for 24 Hours Rush Delivery",
        ],
        suitable:
          "Suitable for potential super-startups and brand revamps for companies.",
      },
    ],
  },
  {
    service: "Website Design",
    icon: Globe2,
    description:
      "Professional WordPress and Elementor website packages for startups, business websites, and growing companies.",
    packages: [
      {
        name: "Start Up Website Package",
        price: "$229.00",
        badge: "Starter",
        features: [
          "Website",
          "Five Pages",
          "Conceptual and Dynamic Website",
          "Team of Expert Designers & Developers",
          "Custom Forms",
          "10 Stock images",
          "5 Unique Banner Designs",
          "Jquery Sliders",
          "Free Google Friendly Sitemap",
          "WordPress + Elementor",
          "Unique Interface",
          "SEO Friendly Design",
          "Add on: $50 for 24 Hours Rush Delivery",
        ],
        suitable:
          "Suitable for potential super-startups and brand revamps for companies.",
      },
      {
        name: "Professional Website Package",
        price: "$448.00",
        badge: "Popular",
        popular: true,
        features: [
          "Website",
          "Unlimited Pages",
          "Conceptual and Dynamic Website",
          "Team of Expert Designers & Developers",
          "Mobile Responsive",
          "Custom Forms",
          "Content Management System (CMS)",
          "Lead Capturing Forms (Optional)",
          "15 Stock images",
          "8 Unique Banner Designs",
          "Jquery Sliders",
          "Free Google Friendly Sitemap",
          "Complete W3C Certified HTML",
          "WordPress + Elementor",
          "Testing And Deployment",
          "Cross Browser Compatible",
          "Unique Interface",
          "SEO Friendly Design",
          "Add on: $50 for 24 Hours Rush Delivery",
        ],
        suitable:
          "Suitable for potential super-startups and brand revamps for companies.",
      },
      {
        name: "Custom Website Package",
        price: "Custom",
        badge: "Custom",
        features: [
          "Custom Website Scope",
          "Custom UI/UX Design",
          "WordPress + Elementor or Custom Development",
          "Advanced Forms & Integrations",
          "Mobile Responsive Layout",
          "SEO Friendly Structure",
          "Testing And Deployment",
          "Cross Browser Compatible",
          "Dedicated Project Direction",
          "Quote Based on Requirements",
          "Add on: $50 for 24 Hours Rush Delivery",
        ],
        suitable:
          "Best for businesses that need a fully custom website scope, advanced functionality, or a larger project plan.",
      },
    ],
  },
  {
  service: "Social Media Marketing",
  icon: Sparkles,
  description:
    "Monthly social media packages for brands that need consistent content, platform presence, and professional social growth.",
  packages: [
    {
      name: "Starter Social Package",
      price: "$150.00",
      badge: "Starter",
      features: [
        "2 Platform",
        "Facebook and Instagram",
        "Number of Posts 16/per month",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "100% Ownership Rights",
        "Add on: $50 for 24 Hours Rush Delivery",
      ],
      suitable:
        "Suitable for potential super-startups and brand revamps for companies.",
    },
    {
      name: "Professional Social Package",
      price: "$350.00",
      oldPrice: "$600.00",
      badge: "Popular",
      popular: true,
      features: [
        "4 Platform",
        "FB/Insta/LinkedIn/Pinterest",
        "Number of Posts 22/Per Month",
        "Video Reels 10/Per Month",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
        "100% Ownership Rights",
        "Add on: $50 for 24 Hours Rush Delivery",
      ],
      suitable:
        "Suitable for potential super-startups and brand revamps for companies.",
    },
    {
      name: "Custom Social Package",
      price: "Custom",
      badge: "Custom",
      features: [
        "Custom Platform Selection",
        "Facebook / Instagram / LinkedIn / Pinterest / TikTok",
        "Custom Number of Posts Per Month",
        "Custom Video Reels Plan",
        "Monthly Content Calendar",
        "Creative Post Designs",
        "Caption Writing",
        "Hashtag Research",
        "Brand-Focused Content Strategy",
        "100% Unique Design Guarantee",
        "100% Satisfaction Guarantee",
        "100% Ownership Rights",
        "Add on: $50 for 24 Hours Rush Delivery",
      ],
      suitable:
        "Best for businesses that need a custom social media plan based on platform goals, content volume, and monthly marketing needs.",
    },
  ],
 },
];

const brandingSections = [
  {
    title: "Logo Design",
    items: [
      "Unlimited Logo Concepts",
      "Unlimited Revisions",
      "File Formats (PSD, PDF, AI, JPEG, PNG)",
      "Icon Design",
    ],
  },
  {
    title: "Stationary",
    items: [
      "Custom Stationery Designs",
      "MS Word Letterhead",
      "Letterhead",
      "Envelope",
      "Business Card",
      "Invoice",
    ],
  },
  {
    title: "Social Media",
    items: [
      "Facebook Page Design",
      "Twitter Page Design",
      "YouTube Page Design",
      "Google+ Page Design",
    ],
  },
  {
    title: "Website",
    collapsible: true,
    visibleLimit: 6,
    items: [
      "Website",
      "Unlimited Pages",
      "Conceptual and Dynamic Website",
      "Content Management System (CMS)",
      "Team of Expert Designers & Developers",
      "Mobile Responsive",
      "Custom Forms",
      "Lead Capturing Forms (Optional)",
      "15 Stock images",
      "8 Unique Banner Designs",
      "Jquery Sliders",
      "Free Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "WordPress Add/Edit Pages, Products, Images & Videos",
      "Testing And Deployment",
      "Cross Browser Compatible",
      "Unique Interface",
      "SEO Friendly Design",
    ],
  },
  {
    title: "Value Added Services",
    collapsible: true,
    visibleLimit: 3,
    items: [
      "All Final File Formats",
      "Dedicated Account Manager",
      "100% Satisfaction Guarantee",
      "100% Unique Design Guarantee",
      "100% Satisfaction And Money Back Guarantee**",
    ],
  },
];

const heroStats = [
  {
    label: "Starting From",
    value: "$88",
  },
  {
    label: "Popular Website",
    value: "$448",
  },
  {
    label: "Full Branding",
    value: "$1,499",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Clear Pricing",
    text: "Simple package structure so clients can compare options quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Rights",
    text: "Final files and ownership rights included with professional delivery.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    text: "Rush delivery option available for urgent business launches.",
  },
];

const getContactLink = (selectedService) =>
  `/contact?service=${encodeURIComponent(selectedService)}`;

const PackagesPage = () => {
  const [openPackages, setOpenPackages] = useState({});
  const [openBrandingSections, setOpenBrandingSections] = useState({});

  const togglePackageDetails = (key) => {
    setOpenPackages((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleBrandingDetails = (key) => {
    setOpenBrandingSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Helmet>
        <title>Digital Growth Packages | Optivax Global</title>
        <meta
          name="description"
          content="Explore professional digital growth packages for logo design, website design, complete branding solutions, and business growth by Optivax Global."
        />
        <meta
          name="keywords"
          content="digital growth packages, logo design packages, website design packages, branding package, complete branding solution, Optivax Global"
        />
        <link
          rel="canonical"
          href="https://optivaxglobal.com/digital-growth-packages"
        />
      </Helmet>

      <style>
        {`
          .og-heading-safe {
            line-height: 1.24 !important;
            letter-spacing: -0.025em !important;
            padding-top: 0.08em !important;
            padding-bottom: 0.12em !important;
            overflow: visible !important;
          }

          .og-gradient-line {
            display: block !important;
            line-height: 1.24 !important;
            padding-top: 0.06em !important;
            padding-bottom: 0.14em !important;
            overflow: visible !important;
          }

          .og-card-heading-safe {
            line-height: 1.3 !important;
            letter-spacing: -0.015em !important;
            padding-top: 0.08em !important;
            padding-bottom: 0.12em !important;
            overflow: visible !important;
          }

          .og-price-safe {
            line-height: 1.16 !important;
            padding-top: 0.04em !important;
            padding-bottom: 0.06em !important;
            overflow: visible !important;
          }
        `}
      </style>

      <main className="overflow-hidden bg-[#0C0D0D] text-white">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75" />

          <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.88fr] xl:gap-16">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
                  <Sparkles className="h-4 w-4 text-accent-purple" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-200 sm:text-xs">
                    Optivax Global Packages
                  </span>
                </div>

                <h1 className="og-heading-safe text-[36px] font-black sm:text-5xl md:text-[60px] xl:text-[74px]">
                  Digital Growth
                  <span className="og-gradient-line bg-gradient-to-r from-[#1BBCEF] via-white to-[#1BBCEF] bg-clip-text text-transparent">
                    Packages Built
                  </span>
                  <span className="block">For Business</span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  Compare professional logo design, website design, and complete
                  branding packages created to help your business look premium,
                  build trust, and convert more customers.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="#packages"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-7 py-3.5 text-sm font-bold text-white shadow-2xl shadow-[#1BBCEF]/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#004495] hover:to-[#1BBCEF]"
                  >
                    View Packages
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <Link
                    to={getContactLink("Custom Package")}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                  >
                    Get Custom Quote
                  </Link>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl"
                    >
                      <p className="og-price-safe text-2xl font-black tracking-[-0.025em] text-white drop-shadow-[0_0_16px_rgba(27,188,239,0.45)] md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-[560px] justify-self-center lg:justify-self-end">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#1BBCEF]/40 via-white/10 to-[#004495]/40 blur-2xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-2xl sm:p-5 lg:p-6">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#031426]/85 p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-purple">
                          Package Overview
                        </p>
                        <h2 className="og-card-heading-safe mt-1 text-2xl font-black sm:text-3xl">
                          Smart Plans
                        </h2>
                      </div>

                      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1BBCEF]/35 bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-5 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#1BBCEF]/25">
                        <Clock className="h-5 w-5" />
                        Limited Slots
                      </div>
                    </div>

                    <div className="mt-6 rounded-3xl border border-dashed border-[#1BBCEF]/40 bg-white/[0.04] p-5">
                      <p className="text-sm text-gray-400">
                        Packages start at
                      </p>
                      <div className="mt-2 flex items-end gap-3">
                        <span className="og-price-safe text-5xl font-black tracking-[-0.04em] text-white drop-shadow-[0_0_18px_rgba(27,188,239,0.5)] sm:text-6xl">
                          $88
                        </span>
                        <span className="pb-2 text-xs font-bold text-gray-300">
                          USD
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {["Logo", "Website", "Branding"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                        >
                          <CheckCircle2 className="mb-3 h-5 w-5 text-accent-purple" />
                          <p className="text-sm font-extrabold leading-snug">
                            {item}
                          </p>
                          <p className="mt-1 text-xs text-gray-400">
                            Growth Package
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {benefits.map((benefit) => {
                      const Icon = benefit.icon;

                      return (
                        <div
                          key={benefit.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <Icon className="h-5 w-5 text-accent-purple" />
                          <h3 className="mt-3 text-sm font-bold leading-snug">
                            {benefit.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-gray-400">
                            {benefit.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="packages"
          className="relative scroll-mt-24 border-t border-white/10 bg-[#0C0D0D] py-16 sm:py-20 lg:py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,188,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0,68,149,0.16),transparent_35%)]" />

          <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-accent-purple sm:text-xs">
                  Compare Packages
                </p>

                <h2 className="og-heading-safe max-w-3xl text-3xl font-black sm:text-4xl md:text-5xl">
                  Service Based Package Plans
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  Choose the package that fits your current business stage,
                  launch timeline, and growth goals.
                </p>
              </div>

              <Link
                to={getContactLink("Custom Package")}
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/[0.1]"
              >
                Need Help Choosing?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {servicesPackages.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.service}
                    className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 sm:p-4 lg:p-5"
                  >
                    <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
                      <aside className="rounded-[1.4rem] border border-white/10 bg-[#031426]/75 p-5 backdrop-blur-xl sm:p-6 lg:p-7">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1BBCEF]/30 bg-[#1BBCEF]/10 text-accent-purple">
                          <Icon size={26} />
                        </div>

                        <p className="mb-3 mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-accent-purple">
                          Service
                        </p>

                        <h3 className="og-card-heading-safe text-3xl font-black uppercase lg:text-4xl">
                          {service.service}
                        </h3>

                        <p className="mt-4 text-sm leading-relaxed text-gray-400">
                          {service.description}
                        </p>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                            Includes
                          </p>

                          <div className="mt-4 space-y-3">
                            {[
                              "Professional Design",
                              "Clear Deliverables",
                              "Business Focused",
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-3 text-sm text-gray-300"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-purple" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link
                          to={getContactLink(service.service)}
                          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-5 py-3.5 text-sm font-bold text-white transition hover:from-[#004495] hover:to-[#1BBCEF]"
                        >
                          Ask About This
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </aside>

                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {service.packages.map((pkg) => {
                          const packageKey = `${service.service}-${pkg.name}`;
                          const cleanFeatures = pkg.features.filter(
                            (feature) =>
                              !feature.toLowerCase().includes("add on")
                          );
                          const isOpen = openPackages[packageKey];
                          const visibleFeatures = isOpen
                            ? cleanFeatures
                            : cleanFeatures.slice(0, 6);

                          return (
                            <article
                              key={pkg.name}
                              className={`relative flex min-h-full flex-col overflow-hidden rounded-[1.4rem] border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                                pkg.popular
                                  ? "border-[#1BBCEF]/50 bg-[#031426]/95 shadow-2xl shadow-[#1BBCEF]/10"
                                  : "border-white/10 bg-white/[0.04] hover:border-[#1BBCEF]/35 hover:bg-white/[0.06]"
                              }`}
                            >
                              {pkg.popular && (
                                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-4 py-2 text-[10px] font-black uppercase text-white">
                                  Best Value
                                </div>
                              )}

                              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#1BBCEF]/35 bg-[#1BBCEF]/15 px-5 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-accent-purple shadow-lg shadow-[#1BBCEF]/10">
                                {pkg.popular && (
                                  <Star className="h-4 w-4 fill-accent-purple" />
                                )}
                                {pkg.badge}
                              </div>

                              <h4 className="og-card-heading-safe min-h-[76px] text-xl font-black uppercase sm:text-2xl">
                                {pkg.name}
                              </h4>

                              <div className="my-5 border-y border-white/10 py-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                  Package Price
                                </p>

                                <div className="mt-2 flex flex-wrap items-end gap-3">
                                  <span className="og-price-safe block text-4xl font-black tracking-[-0.04em] text-white drop-shadow-[0_0_18px_rgba(27,188,239,0.5)] sm:text-5xl">
                                    {pkg.price}
                                  </span>

                                  {pkg.oldPrice && (
                                    <span className="og-price-safe pb-1 text-2xl font-black tracking-[-0.04em] text-white/35 line-through sm:text-3xl">
                                      {pkg.oldPrice}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div className="mb-5 rounded-2xl border border-[#1BBCEF]/20 bg-[#1BBCEF]/10 p-4">
                                <p className="flex items-center gap-2 text-sm font-bold leading-snug text-gray-100">
                                  <Clock className="h-4 w-4 shrink-0 text-accent-purple" />
                                  Rush Delivery Available
                                </p>
                                <p className="mt-1 text-xs text-gray-400">
                                  Add on: $50 for 24 Hours Rush Delivery
                                </p>
                              </div>

                              <div className="space-y-3">
                                {visibleFeatures.map((feature) => (
                                  <div
                                    key={feature}
                                    className="flex gap-3 text-[13px] leading-relaxed text-gray-300 sm:text-sm"
                                  >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-purple" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>

                              {cleanFeatures.length > 6 && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    togglePackageDetails(packageKey)
                                  }
                                  aria-expanded={isOpen}
                                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-white/[0.1]"
                                >
                                  {isOpen ? (
                                    <>
                                      Show Less Details
                                      <ChevronUp className="h-4 w-4" />
                                    </>
                                  ) : (
                                    <>
                                      Show More Details
                                      <ChevronDown className="h-4 w-4" />
                                    </>
                                  )}
                                </button>
                              )}

                              <div className="mt-auto pt-6">
                                {pkg.suitable && (
                                  <p className="mb-5 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-gray-400">
                                    {pkg.suitable}
                                  </p>
                                )}

                                <Link
                                  to={getContactLink(pkg.name)}
                                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-5 py-3.5 text-sm font-bold text-white transition hover:from-[#004495] hover:to-[#1BBCEF]"
                                >
                                  Choose Package
                                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/20 sm:p-4 lg:mt-12 lg:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#031426]/85 p-5 sm:p-7 lg:p-10">
                <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1BBCEF]/20 blur-[110px]" />
                <div className="absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-[#004495]/25 blur-[120px]" />

                <div className="relative grid gap-7 lg:grid-cols-2 lg:items-stretch">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1BBCEF]/35 bg-[#1BBCEF]/15 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-accent-purple shadow-lg shadow-[#1BBCEF]/10 sm:text-sm">
                      <Layers className="h-5 w-5" />
                      Premium Full Package
                    </div>

                    <h2 className="og-heading-safe mt-3 max-w-3xl text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
                      Complete Branding
                      <span className="og-gradient-line bg-gradient-to-r from-[#1BBCEF] via-white to-[#1BBCEF] bg-clip-text text-transparent">
                        Solution
                      </span>
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                      Complete business branding package including logo,
                      stationery, social media branding, website development,
                      final files, dedicated support, and value-added services.
                    </p>
                  </div>

                  <div className="relative flex min-h-[430px] w-full overflow-hidden rounded-[1.7rem] border border-[#1BBCEF]/25 bg-gradient-to-br from-[#0354A1] via-[#0A2548] to-[#283E74] p-6 text-white shadow-2xl shadow-[#1BBCEF]/20 sm:p-8 lg:min-h-[460px]">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#1BBCEF]/30 blur-3xl" />
                    <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

                    <div className="relative z-10 flex w-full flex-col justify-between">
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/15 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-xl sm:text-base">
                          Limited Deal
                        </span>

                        <span className="rounded-full bg-white px-6 py-3 text-base font-black uppercase tracking-[0.16em] text-[#0354A1] shadow-lg sm:text-lg">
                          70% Off
                        </span>
                      </div>

                      <div className="my-8 text-right">
                        <p className="og-price-safe text-3xl font-black text-white/35 line-through sm:text-4xl">
                          $5,000
                        </p>

                        <p className="og-price-safe mt-2 text-7xl font-black tracking-[-0.045em] text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.35)] sm:text-8xl">
                          $1,499
                        </p>

                        <p className="mt-3 text-base font-bold text-white/75 sm:text-lg">
                          Complete Branding Solution
                        </p>
                      </div>

                      <div>
                        <div className="rounded-[1.25rem] border border-white/10 bg-[#031426]/75 p-5 backdrop-blur-xl sm:p-6">
                          <div className="flex items-center justify-between gap-5">
                            <div>
                              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1BBCEF] sm:text-base">
                                Save Big
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                                Premium full brand package
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="og-price-safe text-3xl font-black text-white drop-shadow-[0_0_16px_rgba(27,188,239,0.55)] sm:text-4xl">
                                $3,501
                              </p>
                              <p className="text-xs font-semibold text-white/50 sm:text-sm">
                                Saved
                              </p>
                            </div>
                          </div>
                        </div>

                        <Link
                          to={getContactLink("Complete Branding Solution")}
                          className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-[#0354A1] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#1BBCEF] hover:text-white sm:text-base"
                        >
                          Claim This Package
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {brandingSections.map((section) => {
                    const isOpen = openBrandingSections[section.title];
                    const shouldCollapse =
                      section.collapsible &&
                      section.items.length > section.visibleLimit;

                    const visibleItems =
                      shouldCollapse && !isOpen
                        ? section.items.slice(0, section.visibleLimit)
                        : section.items;

                    return (
                      <div
                        key={section.title}
                        className="flex min-h-full flex-col rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-5 transition hover:border-[#1BBCEF]/35 hover:bg-white/[0.07] sm:p-6"
                      >
                        <h3 className="og-card-heading-safe mb-4 text-xl font-black uppercase sm:text-2xl">
                          {section.title}
                        </h3>

                        <div className="space-y-3">
                          {visibleItems.map((item) => (
                            <div
                              key={item}
                              className="flex gap-3 text-[13px] leading-relaxed text-gray-300 sm:text-sm"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-purple" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {shouldCollapse && (
                          <button
                            type="button"
                            onClick={() => toggleBrandingDetails(section.title)}
                            aria-expanded={isOpen}
                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-white/[0.1]"
                          >
                            {isOpen ? (
                              <>
                                Show Less Details
                                <ChevronUp className="h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Show More Details
                                <ChevronDown className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-7 flex flex-col gap-5 rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
                  <p className="max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
                    Suitable for potential super-startups, growing businesses,
                    and complete brand revamps.
                  </p>

                  <Link
                    to={getContactLink("Complete Branding Solution")}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-7 py-3.5 text-sm font-bold text-white transition hover:from-[#004495] hover:to-[#1BBCEF]"
                  >
                    Get This Package
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80" />

          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-accent-purple sm:text-xs">
                  Let’s Build Your Brand
                </p>

                <h2 className="og-heading-safe max-w-3xl text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
                  Ready to Grow with
                  <span className="og-gradient-line bg-gradient-to-r from-[#1BBCEF] via-white to-[#1BBCEF] bg-clip-text text-transparent">
                    Digital Packages?
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  Let’s create a professional experience that reflects your
                  brand, supports your goals, and helps you win more customers.
                </p>

                <Link
                  to={getContactLink("Custom Package")}
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-7 py-3.5 text-sm font-bold text-white shadow-2xl shadow-[#1BBCEF]/20 transition hover:-translate-y-0.5 hover:from-[#004495] hover:to-[#1BBCEF]"
                >
                  Get Custom Package
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-purple sm:text-sm">
                    Starting
                  </p>
                  <p className="og-price-safe mt-2 text-4xl font-black tracking-[-0.035em] text-white drop-shadow-[0_0_16px_rgba(27,188,239,0.45)] sm:text-5xl">
                    $88
                  </p>
                  <p className="mt-3 text-sm text-gray-400">
                    Logo design packages
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-purple sm:text-sm">
                    Popular
                  </p>
                  <p className="og-price-safe mt-2 text-4xl font-black tracking-[-0.035em] text-white drop-shadow-[0_0_16px_rgba(27,188,239,0.45)] sm:text-5xl">
                    $448
                  </p>
                  <p className="mt-3 text-sm text-gray-400">
                    Website package
                  </p>
                </div>

                <div className="rounded-[1.4rem] border border-[#1BBCEF]/25 bg-[#1BBCEF]/10 p-5 backdrop-blur-xl sm:col-span-2 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-purple sm:text-sm">
                    Complete Branding Solution
                  </p>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <p className="og-price-safe text-4xl font-black tracking-[-0.035em] text-white drop-shadow-[0_0_16px_rgba(27,188,239,0.45)] sm:text-5xl">
                      $1,499
                    </p>
                    <p className="w-fit rounded-full bg-white px-4 py-2 text-base font-black text-[#031426] sm:text-xl">
                      70% OFF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PackagesPage;