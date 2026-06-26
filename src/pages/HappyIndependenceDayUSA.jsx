import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  X,
  Maximize2,
  Clock,
  Sparkles,
  Image as ImageIcon,
  Star,
  Flag,
  Zap,
  BadgeCheck,
} from "lucide-react";

import Image01 from "@/assets/independence-day/01.webp";
import Image02 from "@/assets/independence-day/02.webp";
import Image03 from "@/assets/independence-day/03.webp";
import Image04 from "@/assets/independence-day/04.webp";
import Image05 from "@/assets/independence-day/05.webp";

import HeroRightImage from "@/assets/independence-day/hero-250-flag.webp";
import PremiumGalleryBg from "@/assets/independence-day/premium-gallery-bg.webp";

const AnimatedHeroBackground = React.lazy(() =>
  import("@/components/AnimatedHeroBackground")
);

const AnimatedCtaBackground = React.lazy(() =>
  import("@/components/AnimatedCtaBackground")
);

const getContactLink = (selectedService) =>
  `/contact?service=${encodeURIComponent(selectedService)}`;

const galleryItems = [
  {
    src: Image01,
    alt: "250th Anniversary USA Flyer Design",
    service: "Flyer Design",
    contactService: "Flyer Design",
  },
  {
    src: Image02,
    alt: "250th Anniversary USA Social Media Design",
    service: "Social Media Design",
    contactService: "Social Media Design",
  },
  {
    src: Image03,
    alt: "250th Anniversary USA Logo Design",
    service: "Logo Design",
    contactService: "Logo Design",
  },
  {
    src: Image04,
    alt: "250th Anniversary USA Cover Design",
    service: "Cover Design",
    contactService: "Cover Design",
  },
  {
    src: Image05,
    alt: "250th Anniversary USA Book Publishing Design",
    service: "Book Publishing",
    contactService: "Book Publishing",
  },
  {
    src: null,
    alt: "250th Anniversary USA Promo Design",
    service: "Promo Design",
    contactService: "Promo Design",
  },
];

const mainHighlights = [
  { title: "Limited Offer", icon: Clock, featured: true },
  { title: "250th Anniversary Special", icon: Star, featured: true },
  { title: "Patriotic Design", icon: Flag, featured: false },
  { title: "Fast Delivery", icon: Zap, featured: false },
  { title: "Ad Ready", icon: BadgeCheck, featured: false },
];

const ctaPoints = [
  { label: "Social Media Creatives", contactService: "Social Media Design" },
  { label: "Flyers & Banners", contactService: "Flyer Design" },
  { label: "Ad Campaign Visuals", contactService: "Promo Design" },
];

const HappyIndependenceDayUSA = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});
  const [showAnimatedBg, setShowAnimatedBg] = useState(false);

  const openImage = (item, index) => {
    if (!item?.src || brokenImages[index]) return;
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleImageError = (index) => {
    setBrokenImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  useEffect(() => {
    const loadBg = () => {
      setShowAnimatedBg(true);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadBg, { timeout: 1200 });

      return () => {
        window.cancelIdleCallback(idleId);
      };
    }

    const timer = window.setTimeout(loadBg, 700);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedImage]);

  return (
    <>
      <Helmet>
        <title>250th Anniversary Celebrate America - Optivax Global</title>

        <meta
          name="description"
          content="Celebrate America’s 250th Anniversary with premium patriotic campaign designs, social media creatives, flyers, ads, branding visuals, and promotional graphics by Optivax Global."
        />

        <meta
          name="keywords"
          content="250th Anniversary Celebrate America, 250th Anniversary USA, America 250th Anniversary, USA Independence Day design, patriotic campaign design, 4th of July 2026, Optivax Global"
        />

        <meta
          property="og:title"
          content="250th Anniversary Celebrate America - Optivax Global"
        />

        <meta
          property="og:description"
          content="Premium patriotic creative designs for America’s 250th Anniversary celebration by Optivax Global."
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://optivaxglobal.com/250-anniversary-usa"
        />
      </Helmet>

      <main className="overflow-hidden bg-[#020817] text-white">
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:min-h-[calc(100vh-90px)] lg:pt-36 lg:pb-24">
          <div className="absolute inset-0 bg-[#020817]" />

          {showAnimatedBg && (
            <Suspense fallback={null}>
              <AnimatedHeroBackground />
            </Suspense>
          )}

          <div className="absolute inset-0 bg-[#020B16]/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#031426]/80 to-[#06265A]/46" />
          <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-[#020817]/88 via-[#020817]/44 to-transparent" />
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/60 via-black/18 to-transparent" />

          <div className="absolute -left-32 top-28 h-[360px] w-[360px] rounded-full bg-[#F00000]/14 blur-[120px]" />
          <div className="absolute right-10 top-28 h-[320px] w-[320px] rounded-full bg-[#2DA8FF]/12 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 h-[260px] w-[620px] -translate-x-1/2 rounded-full bg-white/5 blur-[130px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#F00000] shadow-lg shadow-white/10 sm:text-xs">
                  <Sparkles className="h-4 w-4" />
                  Celebrating America’s 250th Anniversary
                </div>

                <div className="relative inline-flex flex-wrap items-end gap-3">
                  <span
                    className="inline-block text-[62px] font-black leading-[0.85] tracking-[-0.055em] text-white sm:text-[86px] md:text-[106px]"
                    style={{
                      WebkitTextStroke: "0.35px #ffffff",
                      transform: "scaleX(1.03)",
                      textRendering: "geometricPrecision",
                    }}
                  >
                    250th
                  </span>

                  <span className="mb-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#F00000] shadow-lg shadow-white/10 sm:text-sm">
                    Years
                  </span>
                </div>
              </div>

              <h1 className="relative max-w-full text-[clamp(2.25rem,5.8vw,4.55rem)] font-black uppercase leading-[0.96] tracking-[-0.025em]">
                <span className="block text-[#F00000] drop-shadow-[0_10px_30px_rgba(240,0,0,0.24)]">
                  Independence
                </span>

                <span className="mt-1 block text-white">Day</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-white/88 sm:text-base md:text-lg">
                Celebrate America’s 250th Anniversary with premium patriotic
                visuals for social media, flyers, paid ads, branding, and
                promotional campaigns designed for powerful visibility.
              </p>

              <div className="mt-8 max-w-4xl space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {mainHighlights.slice(0, 2).map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex min-h-[68px] items-center justify-center gap-4 rounded-2xl bg-white px-5 py-4 text-center text-xs font-black uppercase tracking-[0.08em] text-[#F00000] shadow-[0_18px_60px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(255,255,255,0.13)] sm:text-sm"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F00000] text-white shadow-lg shadow-red-950/20">
                          <Icon className="h-4 w-4" />
                        </span>

                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {mainHighlights.slice(2).map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex min-h-[68px] items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.09] px-5 py-4 text-center text-xs font-black uppercase tracking-[0.08em] text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.14] sm:text-sm"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#F00000] shadow-lg shadow-black/10">
                          <Icon className="h-4 w-4" />
                        </span>

                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#gallery"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.04em] text-[#F00000] shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F00000] hover:text-white sm:px-8 sm:text-xs"
                >
                  View Designs
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  to={getContactLink("Custom Patriotic Design")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.09] px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.04em] text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#F00000] sm:px-8 sm:text-xs"
                >
                  Get Custom Design
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex w-full items-center justify-center lg:justify-end">
              <div className="absolute right-8 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#2DA8FF]/12 blur-[120px]" />
              <div className="absolute bottom-8 left-8 h-[260px] w-[260px] rounded-full bg-[#F00000]/12 blur-[110px]" />

              <div className="relative w-full max-w-[500px] overflow-hidden rounded-[34px] border border-white/12 bg-white/[0.04] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:max-w-[540px] lg:max-w-[500px] xl:max-w-[540px]">
                <img
                  src={HeroRightImage}
                  alt="250 Years of Freedom and Pride"
                  width="1080"
                  height="1350"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 540px, 500px"
                  className="h-auto w-full rounded-[28px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          id="gallery"
          className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "1px 1500px",
          }}
        >
          <div className="absolute inset-0">
            <img
              src={PremiumGalleryBg}
              alt=""
              width="1024"
              height="1450"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="h-full w-full object-cover object-center"
              style={{
                opacity: 0.5,
                filter: "brightness(0.95) saturate(0.95)",
              }}
            />
          </div>

          <div className="absolute inset-0 bg-[#04173E]/84" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06265A]/86 via-[#052255]/91 to-[#031426]/96" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.13),transparent_35%)]" />

          <div className="absolute -left-36 top-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-[110px]" />
          <div className="absolute -right-36 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F00000]/18 blur-[110px]" />
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2DA8FF]/8 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <p className="mb-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#F00000] shadow-lg shadow-black/20 sm:text-xs">
                Patriotic Gallery
              </p>

              <h2 className="text-4xl font-black uppercase leading-tight tracking-[-0.02em] text-[#F00000] sm:text-5xl md:text-6xl">
                Premium USA
                <span className="block text-white">Campaign Designs</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-white/82 md:text-lg">
                Explore our Independence Day creative collection designed for
                brands that want to stand out with powerful patriotic visuals.
                From flyers and social media posts to logos, covers, book
                publishing graphics, and promo designs, every creative is built
                with bold typography, premium styling, and campaign-ready
                impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item, index) => {
                const hasImage = item.src && !brokenImages[index];

                return (
                  <article
                    key={`${item.service}-${index}`}
                    className="group overflow-hidden rounded-[34px] bg-white/[0.08] p-2.5 text-left shadow-[0_24px_85px_rgba(0,0,0,0.4)] ring-1 ring-white/15 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.12] hover:ring-white/25 hover:shadow-[0_38px_110px_rgba(0,0,0,0.5)]"
                  >
                    <button
                      type="button"
                      onClick={() => openImage(item, index)}
                      disabled={!hasImage}
                      className={`relative aspect-square w-full overflow-hidden rounded-[26px] bg-[#020817] ${
                        hasImage ? "cursor-pointer" : "cursor-default"
                      }`}
                      aria-label={
                        hasImage
                          ? `Open ${item.alt}`
                          : `${item.service} preview`
                      }
                    >
                      {hasImage ? (
                        <>
                          <img
                            src={item.src}
                            alt={item.alt}
                            width="1080"
                            height="1080"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 45vw, 390px"
                            onError={() => handleImageError(index)}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                          <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#F00000] opacity-0 shadow-xl transition duration-300 group-hover:opacity-100">
                            <Maximize2 className="h-5 w-5" />
                          </div>
                        </>
                      ) : (
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden p-8 text-center">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(240,0,0,0.24),transparent_30%),linear-gradient(180deg,#06265A_0%,#031426_55%,#020817_100%)]" />

                          <div className="absolute left-6 top-6 z-10 text-left">
                            <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
                              Celebrating
                            </p>

                            <p className="text-3xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                              250th
                              <span className="block text-[#F00000]">
                                Years
                              </span>
                            </p>
                          </div>

                          <div className="absolute right-6 top-8 z-10 grid grid-cols-2 gap-3">
                            {["USA", "Ad", "Post", "Flyer"].map(
                              (label, labelIndex) => (
                                <span
                                  key={label}
                                  className={`flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-2xl bg-white text-xs font-black text-[#F00000] shadow-xl ${
                                    labelIndex % 2 === 0 ? "translate-y-5" : ""
                                  }`}
                                >
                                  {label}
                                </span>
                              )
                            )}
                          </div>

                          <div className="absolute bottom-10 left-1/2 z-10 w-full -translate-x-1/2 px-6">
                            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-[20px] bg-white text-[#F00000] shadow-2xl shadow-black/20">
                              <ImageIcon className="h-6 w-6" />
                            </div>

                            <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                              Custom Creative
                            </p>

                            <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                              Available On Request
                            </h3>

                            <div className="mt-4 inline-flex rounded-[18px] bg-[#F00000] px-5 py-3">
                              <span className="text-4xl font-black leading-none tracking-[-0.08em] text-white">
                                $25
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </button>

                    <div className="relative mt-3 overflow-hidden rounded-[26px] bg-[#020817]/94 px-5 py-5 ring-1 ring-white/10">
                      <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.75) 0 1px, transparent 2px)",
                          backgroundSize: "38px 38px",
                        }}
                      />

                      <div className="relative z-10">
                        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-white sm:text-xs">
                          250th Anniversary Celebration
                        </p>

                        <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-[#F00000]">
                          {item.service}
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <span className="inline-flex w-fit rounded-xl bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#F00000] sm:text-xs">
                            Design {index + 1}
                          </span>

                          <Link
                            to={getContactLink(item.contactService)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-white ring-1 ring-white/10 transition hover:bg-white hover:text-[#F00000] sm:text-xs"
                          >
                            Get Service
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="relative isolate overflow-hidden border-t border-white/5 px-4 py-20 sm:px-6 lg:py-28"
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "1px 900px",
          }}
        >
          {showAnimatedBg && (
            <Suspense fallback={null}>
              <AnimatedCtaBackground />
            </Suspense>
          )}

          <div className="absolute inset-0 bg-[#020B16]/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/25 via-[#031C33]/65 to-[#020B16]" />

          <div className="absolute -left-32 top-28 h-[360px] w-[360px] rounded-full bg-[#F00000]/14 blur-[120px]" />
          <div className="absolute -right-28 bottom-20 h-[360px] w-[360px] rounded-full bg-[#2DA8FF]/12 blur-[120px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#F00000] shadow-lg shadow-white/10 sm:text-xs">
                Limited Creative Offer
              </p>

              <h2 className="max-w-4xl text-[clamp(2.2rem,6.4vw,4.2rem)] font-black uppercase leading-[1.02] tracking-[-0.02em] text-[#F00000]">
                Let’s Create a
                <span className="block text-white">Patriotic Campaign</span>
                <span className="block text-[#F00000]">For Your Brand.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/82 sm:text-lg">
                Optivax Global can design complete Independence Day campaigns,
                social media creatives, flyers, ads, banners, and branding
                visuals with a premium business-focused style.
              </p>

              <Link
                to={getContactLink("Independence Day Campaign Design")}
                className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-xs font-black uppercase tracking-[0.04em] text-[#F00000] shadow-2xl shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F00000] hover:text-white sm:px-10 sm:py-5 sm:text-sm"
              >
                Contact Optivax Global
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-white/[0.09] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.42)] ring-1 ring-white/15 backdrop-blur-md sm:p-8">
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.75) 0 1px, transparent 2px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <Sparkles className="h-10 w-10 text-white" />

                  <span className="rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#F00000]">
                    Limited Offer
                  </span>
                </div>

                <p className="text-2xl font-black uppercase leading-tight text-white">
                  Independence Day creative designs starting at
                </p>

                <div className="my-6 inline-flex rounded-[28px] bg-[#F00000] px-7 py-4 shadow-xl shadow-red-950/25">
                  <span className="text-7xl font-black leading-none tracking-[-0.08em] text-white">
                    $25
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {mainHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={`cta-card-${item.title}`}
                        className={`flex min-h-[58px] items-center gap-4 rounded-2xl px-5 py-4 text-sm font-black uppercase tracking-[0.08em] sm:text-base ${
                          item.featured
                            ? "bg-white text-[#F00000]"
                            : "bg-white/10 text-white ring-1 ring-white/10"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            item.featured
                              ? "bg-[#F00000] text-white"
                              : "bg-white text-[#F00000]"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>

                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {ctaPoints.map((item) => (
                    <Link
                      key={item.label}
                      to={getContactLink(item.contactService)}
                      className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.06em] text-white ring-1 ring-white/10 transition hover:bg-white hover:text-[#F00000]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <p className="mt-6 text-2xl font-black uppercase text-white">
                  Celebrating 250th Anniversary
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div
            className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImage}
              className="absolute -right-3 -top-14 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F00000] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#F00000] sm:-right-14 sm:-top-4"
              aria-label="Close image preview"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative overflow-hidden rounded-[28px] bg-transparent shadow-2xl shadow-black/70">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                loading="lazy"
                decoding="async"
                className="block max-h-[88vh] max-w-[88vw] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HappyIndependenceDayUSA;