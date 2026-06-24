import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  X,
  Maximize2,
  Clock,
  Sparkles,
  Image as ImageIcon,
  CheckCircle2,
  Star,
  Flag,
  Zap,
  BadgeCheck,
} from "lucide-react";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import Image01 from "@/assets/independence-day/01.webp";
import Image02 from "@/assets/independence-day/02.webp";
import Image03 from "@/assets/independence-day/03.webp";
import Image04 from "@/assets/independence-day/04.webp";
import Image05 from "@/assets/independence-day/05.webp";

const getContactLink = (selectedService) =>
  `/contact?service=${encodeURIComponent(selectedService)}`;

const galleryItems = [
  {
    src: Image01,
    alt: "Happy Independence Day USA Flyer Design",
    service: "Flyer Design",
    contactService: "Flyer Design",
  },
  {
    src: Image02,
    alt: "Happy Independence Day USA Social Media Design",
    service: "Social Media Design",
    contactService: "Social Media Design",
  },
  {
    src: Image03,
    alt: "Happy Independence Day USA Logo Design",
    service: "Logo Design",
    contactService: "Logo Design",
  },
  {
    src: Image04,
    alt: "Happy Independence Day USA Cover Design",
    service: "Cover Design",
    contactService: "Cover Design",
  },
  {
    src: Image05,
    alt: "Happy Independence Day USA Book Publishing Design",
    service: "Book Publishing",
    contactService: "Book Publishing",
  },
  {
    src: null,
    alt: "Happy Independence Day USA Promo Design",
    service: "Promo Design",
    contactService: "Promo Design",
  },
];

const mainHighlights = [
  {
    title: "Limited Offer",
    icon: Clock,
    featured: true,
  },
  {
    title: "250th Anniversary Special",
    icon: Star,
    featured: true,
  },
  {
    title: "Patriotic Design",
    icon: Flag,
    featured: false,
  },
  {
    title: "Fast Delivery",
    icon: Zap,
    featured: false,
  },
  {
    title: "Ad Ready",
    icon: BadgeCheck,
    featured: false,
  },
];

const heroStats = [
  { value: "250th", label: "Years" },
  { value: "$25", label: "Starting" },
  { value: "2026", label: "USA" },
];

const packageItems = [
  "Custom Social Media Posts",
  "Campaign Flyers & Banners",
  "Ad-Ready Visual Designs",
];

const ctaPoints = [
  {
    label: "Social Media Creatives",
    contactService: "Social Media Design",
  },
  {
    label: "Flyers & Banners",
    contactService: "Flyer Design",
  },
  {
    label: "Ad Campaign Visuals",
    contactService: "Promo Design",
  },
];

const HappyIndependenceDayUSA = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});

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
        <title>
          Happy Independence Day USA | Celebrating 250th Anniversary | Optivax
          Global
        </title>

        <meta
          name="description"
          content="Celebrate America’s 250th Anniversary with premium Happy Independence Day USA creative designs by Optivax Global."
        />

        <meta
          name="keywords"
          content="Happy Independence Day USA, Celebrating 250th Anniversary, 250th Years USA, 4th of July 2026, USA Independence Day design, patriotic creative design, Optivax Global"
        />

        <meta
          property="og:title"
          content="Happy Independence Day USA | Celebrating 250th Anniversary"
        />

        <meta
          property="og:description"
          content="Premium patriotic creative designs for America’s 250th Anniversary celebration."
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://optivaxglobal.com/happy-independence-day-usa"
        />
      </Helmet>

      <main className="overflow-hidden bg-[#020817] text-white">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pt-36 lg:pb-28">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_18%_18%,rgba(240,0,0,0.22),transparent_30%),linear-gradient(135deg,#020817_0%,#031426_38%,#06265A_74%,#020817_100%)]" />

          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 24px 24px, rgba(255,255,255,0.75) 0 1px, transparent 2px)",
              backgroundSize: "54px 54px",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(115deg, transparent 0%, transparent 42%, rgba(255,255,255,0.9) 42%, rgba(255,255,255,0.9) 43%, transparent 43%, transparent 52%, rgba(240,0,0,0.9) 52%, rgba(240,0,0,0.9) 53%, transparent 53%)",
            }}
          />

          <div className="pointer-events-none absolute left-0 right-0 top-0 z-[1] h-36 bg-gradient-to-b from-black/80 via-black/25 to-transparent" />

          <div className="absolute -left-40 top-28 h-[460px] w-[460px] rounded-full bg-[#F00000]/16 blur-[120px]" />
          <div className="absolute -right-44 top-14 h-[620px] w-[620px] rounded-full bg-white/10 blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[#168CFF]/12 blur-[130px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <div className="mb-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#F00000] shadow-xl shadow-white/10 sm:text-xs">
                  <Sparkles className="h-4 w-4" />
                  Celebrating America’s 250th Anniversary
                </div>

                <div className="relative inline-flex flex-wrap items-end gap-4">
                  <Star className="absolute -left-5 -top-5 h-5 w-5 fill-white text-white opacity-90" />
                  <Sparkles className="absolute -right-8 top-1 h-7 w-7 text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
                  <Star className="absolute -bottom-1 right-14 h-4 w-4 fill-[#F00000] text-[#F00000]" />

                  <span className="text-[82px] font-black leading-[0.78] tracking-[-0.08em] text-white drop-shadow-[0_14px_42px_rgba(255,255,255,0.16)] sm:text-[126px] md:text-[154px]">
                    250th
                  </span>

                  <span className="mb-3 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#F00000] shadow-xl shadow-white/10 sm:text-base">
                    Years
                  </span>
                </div>
              </div>

              <h1 className="max-w-full text-[clamp(2.4rem,10vw,6.6rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#F00000]">
                Happy
                <span className="block text-white">Independence</span>
                <span className="block text-[#F00000]">Day USA</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm font-semibold leading-relaxed text-white/78 sm:text-lg">
                Celebrate America’s 250th Anniversary with premium patriotic
                visuals for social media, flyers, paid ads, branding, and
                promotional campaigns designed for powerful visibility.
              </p>

              {/* Main Points - Top 2 + Bottom 3 In One Row */}
              <div className="mt-8 max-w-4xl space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {mainHighlights.slice(0, 2).map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex min-h-[76px] items-center justify-center gap-4 rounded-2xl bg-white px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#F00000] shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-1 sm:text-base"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F00000] text-white">
                          <Icon className="h-5 w-5" />
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
                        className="group flex min-h-[76px] items-center justify-center gap-4 rounded-2xl bg-white/10 px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:text-base"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#F00000]">
                          <Icon className="h-5 w-5" />
                        </span>

                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#gallery"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.04em] text-[#F00000] shadow-2xl shadow-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F00000] hover:text-white sm:px-9 sm:text-sm"
                >
                  View Designs
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  to={getContactLink("Custom Patriotic Design")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4 text-xs font-black uppercase tracking-[0.04em] text-white shadow-xl ring-1 ring-white/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#F00000] sm:px-9 sm:text-sm"
                >
                  Get Custom Design
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* HERO PREMIUM CARD */}
            <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
              <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-white/12 blur-[90px]" />
              <div className="absolute -left-10 bottom-6 h-64 w-64 rounded-full bg-[#F00000]/20 blur-[95px]" />

              <div className="relative rounded-[46px] bg-white/10 p-2 shadow-[0_34px_120px_rgba(0,0,0,0.45)] ring-1 ring-white/12 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[40px] bg-[#020817] p-6 ring-1 ring-white/10">
                  <div
                    className="absolute inset-0 opacity-[0.16]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 18px 18px, rgba(255,255,255,0.75) 0 1px, transparent 2px)",
                      backgroundSize: "42px 42px",
                    }}
                  />

                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F00000]/24 blur-[70px]" />
                  <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/12 blur-[80px]" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#F00000]">
                        <Sparkles className="h-4 w-4" />
                        Premium Campaign Pack
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white ring-1 ring-white/15">
                        <Clock className="h-4 w-4" />
                        Limited Slots
                      </div>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-[34px] bg-white text-[#031426] shadow-2xl shadow-black/35">
                      <div className="relative p-6">
                        <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[70px] bg-[#F00000]" />

                        <Star className="absolute left-4 top-4 h-5 w-5 fill-[#F00000] text-[#F00000]" />
                        <Sparkles className="absolute right-6 top-6 z-10 h-7 w-7 text-white" />

                        <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-[#F00000]">
                          Celebrating
                        </p>

                        <h2 className="mt-3 text-[clamp(2.8rem,7vw,5rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#F00000]">
                          250th
                          <span className="block text-[#06265A]">Years</span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm font-bold leading-relaxed text-[#34445C] sm:text-base">
                          Optivax Global creates high-impact designs, websites,
                          branding, SEO, and digital marketing campaigns that
                          help businesses stand out and grow online.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 border-t border-[#06265A]/10 sm:grid-cols-3">
                        {packageItems.map((item) => (
                          <div
                            key={item}
                            className="border-[#06265A]/10 px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#06265A] sm:border-r last:sm:border-r-0"
                          >
                            <CheckCircle2 className="mb-2 h-5 w-5 text-[#F00000]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {heroStats.map((item, index) => (
                        <div
                          key={item.label}
                          className={`rounded-[24px] px-3 py-4 text-center shadow-xl ${
                            index === 1
                              ? "bg-[#F00000] text-white shadow-red-950/25"
                              : "bg-white/10 text-white ring-1 ring-white/10"
                          }`}
                        >
                          <p className="text-2xl font-black leading-none tracking-[-0.05em] sm:text-3xl">
                            {item.value}
                          </p>
                          <p className="mt-2 text-[9px] font-black uppercase tracking-[0.15em] text-white/75">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[26px] bg-white p-4 shadow-xl">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F00000]">
                          Independence Day Package
                        </p>
                        <p className="mt-1 text-lg font-black uppercase leading-tight text-[#06265A]">
                          Starting From $25
                        </p>
                      </div>

                      <Link
                        to={getContactLink("Custom Patriotic Design")}
                        className="inline-flex items-center gap-2 rounded-full bg-[#F00000] px-5 py-3 text-xs font-black uppercase text-white transition hover:bg-[#06265A]"
                      >
                        Order Style
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          id="gallery"
          className="relative overflow-hidden bg-[#06265A] px-4 py-20 sm:px-6 lg:py-28"
        >
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 22px 22px, rgba(255,255,255,0.75) 0 1px, transparent 2px), linear-gradient(135deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "54px 54px, 34px 34px",
            }}
          />

          <div className="absolute -left-36 top-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-[110px]" />
          <div className="absolute -right-36 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F00000]/20 blur-[110px]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-4xl text-center">
              <p className="mb-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#F00000] shadow-lg shadow-black/20 sm:text-xs">
                Patriotic Gallery
              </p>

              <h2 className="text-4xl font-black uppercase leading-tight tracking-[-0.03em] text-[#F00000] sm:text-5xl md:text-6xl">
                Premium USA
                <span className="block text-white">Campaign Designs</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/78 md:text-lg">
  Explore our Independence Day creative collection designed for brands that
  want to stand out with powerful patriotic visuals. From flyers and social
  media posts to logos, covers, book publishing graphics, and promo designs,
  every creative is built with bold typography, premium styling, and
  campaign-ready impact.
</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item, index) => {
                const hasImage = item.src && !brokenImages[index];

                return (
                  <article
                    key={`${item.service}-${index}`}
                    className="group overflow-hidden rounded-[32px] bg-white/10 p-2.5 text-left shadow-[0_22px_80px_rgba(0,0,0,0.38)] ring-1 ring-white/15 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_34px_100px_rgba(0,0,0,0.46)]"
                  >
                    <button
                      type="button"
                      onClick={() => openImage(item, index)}
                      disabled={!hasImage}
                      className={`relative aspect-square w-full overflow-hidden rounded-[24px] bg-[#020817] ${
                        hasImage ? "cursor-pointer" : "cursor-default"
                      }`}
                      aria-label={
                        hasImage ? `Open ${item.alt}` : `${item.service} preview`
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
                            onError={() => handleImageError(index)}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/85 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

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

                    <div className="relative mt-3 overflow-hidden rounded-[24px] bg-[#020817] px-5 py-5 ring-1 ring-white/10">
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
        <section className="relative overflow-hidden bg-[#020817] px-4 py-20 sm:px-6 lg:py-28">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_18%_28%,rgba(240,0,0,0.20),transparent_30%),linear-gradient(135deg,#020817_0%,#031426_45%,#06265A_100%)]" />

          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 24px 24px, rgba(255,255,255,0.75) 0 1px, transparent 2px)",
              backgroundSize: "54px 54px",
            }}
          />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#F00000] shadow-lg shadow-white/10 sm:text-xs">
                Limited Creative Offer
              </p>

              <h2 className="max-w-4xl text-[clamp(2.35rem,7vw,4.6rem)] font-black uppercase leading-[1.04] tracking-[-0.035em] text-[#F00000]">
                Let’s Create a
                <span className="block text-white">Patriotic Campaign</span>
                <span className="block text-[#F00000]">For Your Brand.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/78 sm:text-lg">
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

            <div className="relative overflow-hidden rounded-[40px] bg-white/10 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.42)] ring-1 ring-white/15 backdrop-blur-md sm:p-8">
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

                {/* CTA Points - Arrows Removed + Correct Icons */}
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

      {/* IMAGE POPUP */}
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