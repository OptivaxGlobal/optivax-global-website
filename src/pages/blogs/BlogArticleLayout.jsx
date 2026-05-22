import React from "react";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
  sections,
}) => {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white min-h-screen overflow-hidden">
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#031426] border-b border-white/10">

  {/* Animated Background */}

  <AnimatedHeroBackground />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/20 via-[#031426]/70 to-[#031426]/95"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6">

    {/* Back Button */}

    <a
      href="/blog"
      className="inline-flex items-center gap-2 text-[#A5F3FC] hover:text-white transition-all duration-300 mb-8 font-semibold"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Blog
    </a>

    {/* Featured Image */}

    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1120]/90 backdrop-blur-sm mb-12 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

      <img
        src={image}
        alt={imageAlt}
        className="w-full h-auto max-h-[520px] object-contain mx-auto"
      />

      {/* Optional Glow */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

    </div>

    {/* Category */}

    <p className="text-[#A5F3FC] uppercase tracking-[0.35em] text-sm mb-5 font-medium">
      {category}
    </p>

    {/* Main Heading */}

    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-[#A5F3FC] to-[#1BBCEF] bg-clip-text text-transparent">
      {title}
    </h1>

    {/* Date */}

    <p className="text-gray-400 text-sm tracking-wide">
      {date}
    </p>

  </div>

</section>

        <section className="py-20">
          <article className="max-w-5xl mx-auto px-6">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div
  key={`${section.heading}-${index}`}
  className={
    index === 0
      ? "rounded-3xl border border-[#1BBCEF]/20 bg-white/5 p-6 md:p-8"
      : "border-t border-white/10 pt-8"
  }
>
  {index !== 0 && (
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
      {section.heading}
    </h2>
  )}

  <p className="text-gray-300 text-base md:text-lg leading-8">
    {section.text}
  </p>
</div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-[#1BBCEF]/20 bg-[#1BBCEF]/10 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to improve your digital presence?
              </h2>

              <p className="text-gray-300 leading-8 mb-6">
                Optivax Global helps businesses build professional websites, stronger branding, better SEO visibility, and digital experiences that support real growth.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#A5F3FC] font-semibold hover:text-white transition"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default BlogArticleLayout;