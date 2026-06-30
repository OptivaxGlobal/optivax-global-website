import React from "react";
import { Helmet } from "react-helmet";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Sparkles,
} from "lucide-react";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

const BlogArticleLayout = ({
  title,
  metaTitle,
  metaDescription,
  canonicalUrl,
  category,
  date,
  image,
  imageAlt,
  sections = [],
}) => {
  const createId = (heading, index) =>
    `${heading || "section"}-${index}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-[#040B12] text-white">
        {/* Premium Page Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(27,188,239,0.22),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(59,120,163,0.18),transparent_36%),linear-gradient(180deg,#061A2C_0%,#050D18_42%,#03070C_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:80px_80px] opacity-25" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1BBCEF]/10 blur-[120px]" />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 pt-28 pb-16 md:pt-32 md:pb-20">
          <AnimatedHeroBackground />

          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/20 via-[#031426]/70 to-[#040B12]" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
            {/* Back Button */}
            <a
              href="/blog"
              className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-bold text-[#A5F3FC] shadow-[0_15px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:border-[#1BBCEF]/50 hover:bg-[#1BBCEF]/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blog
            </a>

            {/* Full Width Top Image */}
            <div className="relative mb-12 md:mb-14">
              <div className="absolute -inset-4 rounded-[42px] bg-gradient-to-r from-[#1BBCEF]/35 via-white/5 to-[#3B78A3]/35 blur-3xl" />

              <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.06] p-2 shadow-[0_35px_120px_rgba(0,0,0,0.62)] backdrop-blur-2xl md:rounded-[42px] md:p-3">
                <div className="relative overflow-hidden rounded-[28px] bg-[#071624] md:rounded-[34px]">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="mx-auto h-auto max-h-[680px] w-full object-contain transition-transform duration-700 hover:scale-[1.015]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/5" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040B12]/70 to-transparent" />
                </div>

                {/* Image Floating Badge */}
                <div className="absolute left-5 top-5 hidden rounded-2xl border border-white/12 bg-[#06111F]/75 px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl md:flex md:items-center md:gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1BBCEF]/15 text-[#A5F3FC]">
                    <Sparkles className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-black text-white">
                      Featured Article
                    </p>
                    <p className="text-xs font-medium text-gray-400">
                      Optivax Global Insights
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Content Below Image */}
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center rounded-full border border-[#1BBCEF]/30 bg-[#1BBCEF]/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#A5F3FC]">
                  {category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-5 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-xl">
                  <CalendarDays className="h-4 w-4 text-[#A5F3FC]" />
                  {date}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-5 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-xl">
                  <Clock className="h-4 w-4 text-[#A5F3FC]" />
                  5 min read
                </span>
              </div>

              <h1 className="text-4xl font-black leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-[#DDFBFF] to-[#1BBCEF] bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
                Practical insights, modern digital strategies, and professional guidance designed to help businesses build a stronger online presence.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#article-content"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#1BBCEF] px-7 py-4 text-sm font-black text-[#031426] shadow-[0_18px_55px_rgba(27,188,239,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5F3FC]"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-7 py-4 text-sm font-black text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#1BBCEF]/45 hover:bg-white/10"
                >
                  Work With Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section id="article-content" className="relative py-16 md:py-24">
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1BBCEF]/70 to-transparent" />

                <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#A5F3FC]">
                  Article Sections
                </p>

                <div className="space-y-3">
                  {sections.map((section, index) => (
                    <a
                      key={`toc-${index}`}
                      href={`#${createId(section.heading, index)}`}
                      className="group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm text-gray-400 transition-all duration-300 hover:border-[#1BBCEF]/25 hover:bg-[#1BBCEF]/10 hover:text-white"
                    >
                      <span className="mt-0.5 text-xs font-black text-[#1BBCEF]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="leading-6">
                        {section.heading || "Introduction"}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="min-w-0">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#071624]/75 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                {sections.map((section, index) => (
                  <div
                    id={createId(section.heading, index)}
                    key={`${section.heading}-${index}`}
                    className={`group relative overflow-hidden p-6 md:p-10 lg:p-12 ${
                      index !== sections.length - 1
                        ? "border-b border-white/10"
                        : ""
                    } ${
                      index === 0
                        ? "bg-gradient-to-br from-[#1BBCEF]/14 via-white/[0.045] to-transparent"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="pointer-events-none absolute right-6 top-6 text-6xl font-black leading-none text-white/[0.035] md:text-8xl">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {index === 0 && (
                      <span className="mb-5 inline-flex rounded-full border border-[#1BBCEF]/30 bg-[#1BBCEF]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#A5F3FC]">
                        Introduction
                      </span>
                    )}

                    {section.heading && (
                      <h2 className="relative z-10 mb-5 max-w-4xl text-2xl font-black leading-tight text-white md:text-4xl">
                        {section.heading}
                      </h2>
                    )}

                    <p className="relative z-10 max-w-4xl text-base leading-8 text-gray-300 md:text-lg md:leading-9">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Premium CTA */}
              <div className="relative mt-12 overflow-hidden rounded-[36px] border border-[#1BBCEF]/25 bg-gradient-to-br from-[#1BBCEF]/18 via-white/[0.07] to-[#3B78A3]/12 p-6 shadow-[0_30px_100px_rgba(27,188,239,0.16)] backdrop-blur-2xl md:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1BBCEF]/18 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#3B78A3]/20 blur-[100px]" />

                <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <span className="mb-5 inline-flex rounded-full border border-[#1BBCEF]/30 bg-[#1BBCEF]/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#A5F3FC]">
                      Grow With Optivax
                    </span>

                    <h2 className="text-2xl font-black leading-tight text-white md:text-4xl">
                      Ready to improve your digital presence?
                    </h2>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
                      Optivax Global helps businesses build professional websites, stronger branding, better SEO visibility, and digital experiences that support real growth.
                    </p>
                  </div>

                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1BBCEF] px-8 py-4 text-sm font-black text-[#031426] shadow-[0_20px_60px_rgba(27,188,239,0.34)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A5F3FC]"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Bottom Links */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-sm font-black text-gray-400 transition-colors duration-300 hover:text-[#A5F3FC]"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to All Blogs
                </a>

                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-black text-[#A5F3FC] transition-colors duration-300 hover:text-white"
                >
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogArticleLayout;