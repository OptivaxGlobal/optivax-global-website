import React from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, BookOpen, Search, Sparkles, ShieldCheck, Layers } from "lucide-react";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import logoBlogImg from "@/assets/blog-images/logo-blog.jpg";
import webDesignBlogImg from "@/assets/blog-images/web-design-blog.jpg";
import seoBlogImg from "@/assets/blog-images/seo-blog.jpg";
import brandingBlogImg from "@/assets/blog-images/branding-blog.jpg";

const blogPosts = [
  {
    title:
      "Why Logo Design Is More Important for Professional Businesses Than Ever",
    excerpt:
      "A professional logo is more than a small graphic. It builds recognition, trust, and a strong first impression across every digital platform.",
    category: "Logo Design",
    date: "May 2026",
    image: logoBlogImg,
    url: "/blog/professional-logo-design",
  },

  {
    title:
      "The Importance of Modern Web Design in the Present Day",
    excerpt:
      "Modern web design helps businesses build trust, improve user experience, increase engagement, and create a stronger first impression online.",
    category: "Web Design",
    date: "May 2026",
    image: webDesignBlogImg,
    url: "/blog/importance-of-professional-web-design",
  },

  {
    title:
      "The Importance of SEO for Small Service Businesses",
    excerpt:
      "SEO helps small service businesses improve visibility, build credibility, attract better leads, and grow without depending only on paid ads.",
    category: "SEO",
    date: "May 2026",
    image: seoBlogImg,
    url: "/blog/importance-of-seo-for-service-businesses",
  },

  {
    title:
      "Why Branding Is More Critical Than Ever for Today's Businesses",
    excerpt:
      "Strong branding helps businesses build trust, create emotional connection, improve recognition, and stand out in competitive digital markets.",
    category: "Branding",
    date: "May 2026",
    image: brandingBlogImg,
    url: "/blog/professional-branding-for-business-growth",
  },
];

const categories = [
  { label: "Web Design", href: "/web-design" },
  { label: "Web Development", href: "/web-development" },
  { label: "Logo Design", href: "/logo-design" },
  { label: "Ebook Cover Design", href: "/ebook-cover-design" },
  { label: "Animation", href: "/animation" },
  { label: "Mobile App Development", href: "/mobile-app-development" },
  { label: "Brand Management", href: "/brand-management" },
  { label: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
  { label: "Social Media Marketing", href: "/social-media-marketing" },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Optivax Global Blog | Web Design, SEO, Branding & Digital Marketing Insights</title>
        <meta
          name="description"
          content="Read Optivax Global blogs about web design, SEO, logo design, branding, and digital marketing for modern businesses."
        />
        <meta
          name="keywords"
          content="Optivax Global blog, web design blog, SEO blog, logo design blog, branding blog, digital marketing blog"
        />
        <link rel="canonical" href="https://optivaxglobal.com/blog" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <span className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-white/5 text-sm uppercase tracking-[0.35em] text-[#A5F3FC] border border-[#A5F3FC]/20">
              Optivax Global Blog
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Read the Latest Insights for
              <span className="block text-accent-purple">
                Websites, Branding and Digital Growth
              </span>
            </h1>

            <p className="mx-auto text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
              Explore practical articles on web design, SEO, logo design, branding, and digital marketing — written to help modern businesses build trust, improve visibility, and grow online.
            </p>

            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-6 py-4 rounded-full font-semibold text-white shadow-lg shadow-[#1BBCEF]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Featured Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="featured" className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-accent-purple uppercase tracking-[0.35em] text-sm mb-3">
                Featured Articles
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold">
                Practical Insights For{" "}
                <span className="text-accent-purple">Custom Service Brands.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {blogPosts.map((post, index) => (
                <a
                  key={`${post.title}-${index}`}
                  href={post.url}
                  className="group h-full rounded-[32px] bg-[#141828]/90 border border-[#1BBCEF]/20 p-5 md:p-6 hover:border-accent-purple/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120] h-[230px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain mx-auto group-hover:scale-[1.02] transition duration-500"
                    />
                  </div>

                  <div className="pt-6 flex flex-col flex-1">
                    <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A5F3FC]">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#A5F3FC]/10 text-[#A5F3FC]">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      {post.category}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-5 min-h-[86px] group-hover:text-accent-purple transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 leading-7 mb-8 text-base min-h-[92px]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-2 text-[#A5F3FC] group-hover:text-white transition font-semibold">
                        Read Full Blog
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10 bg-[#07121F]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Professional blog content for{" "}
                  <span className="text-accent-purple">Custom Service Brands.</span>
                </h2>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Our blog is built for business owners, startups, and service brands that want clear, practical guidance on websites, SEO, branding, and digital marketing. Every article is written to be easy to understand and useful for real business growth.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Search className="w-6 h-6" />,
                      title: "Practical topics",
                      text: "Helpful articles focused on websites, SEO, branding, content, and business growth.",
                    },
                    {
                      icon: <Layers className="w-6 h-6" />,
                      title: "Easy to read",
                      text: "Clear headings, simple language, and structured content for better understanding.",
                    },
                    {
                      icon: <ShieldCheck className="w-6 h-6" />,
                      title: "Brand-first advice",
                      text: "Insights that help businesses look more professional, trustworthy, and memorable.",
                    },
                    {
                      icon: <Sparkles className="w-6 h-6" />,
                      title: "Growth-focused ideas",
                      text: "Actionable guidance that supports visibility, engagement, leads, and long-term growth.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl bg-[#111827]/90 border border-white/10 p-6"
                    >
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3A8A] text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl bg-[#111827]/90 border border-white/10 p-8">
                <h3 className="text-2xl font-bold mb-4">Browse by topic</h3>
                <div className="grid gap-3">
                  {categories.map((category) => (
                    <a
                      key={category.label}
                      href={category.href}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
                    >
                      {category.label}
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <p className="text-accent-purple uppercase tracking-[0.35em] text-sm mb-4">
              Need help with your digital presence?
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Let’s build something your audience can trust.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              From websites and SEO to branding and digital strategy, Optivax Global helps businesses create stronger online experiences.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-8 py-4 rounded-full font-semibold text-white shadow-lg shadow-[#1BBCEF]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;