import React from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, BookOpen, Search, Sparkles, ShieldCheck, Layers } from "lucide-react";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import logoBlogImg from "@/assets/blog-images/logo-blog.webp";
import webDesignBlogImg from "@/assets/blog-images/web-design-blog.webp";
import seoBlogImg from "@/assets/blog-images/seo-blog.webp";
import brandingBlogImg from "@/assets/blog-images/branding-blog.webp";
import brochureBlogImg from "@/assets/blog-images/brochure-design-blog.webp";
import graphicDesignBlogImg from "@/assets/blog-images/graphic-design-blog.webp";
import mobileAppBlogImg from "@/assets/blog-images/mobile-app-blog.webp";
import ppcBlogImg from "@/assets/blog-images/ppc-blog.webp";
import ebookCoverBlogImg from "@/assets/blog-images/ebook-cover-blog.webp";
import flyerDesignBlogImg from "@/assets/blog-images/flyer-design-blog.webp";
import contentManagementBlogImg from "@/assets/blog-images/content-management-blog.webp";
import stationeryDesignBlogImg from "@/assets/blog-images/stationery-design-blog.webp";
import uiUxBlogImg from "@/assets/blog-images/ui-ux-blog.webp";
import emailMarketingBlogImg from "@/assets/blog-images/email-marketing-blog.webp";
import socialMediaMarketingBlogImg from "@/assets/blog-images/social-media-marketing-blog.webp";
import brandManagementBlogImg from "@/assets/blog-images/brand-management-blog.webp";
import webDevelopmentMarketingBlogImg from "@/assets/blog-images/web-development-marketing-blog.webp";
import mobileAppDevelopmentBlogImg from "@/assets/blog-images/mobile-app-development-blog.webp";
import animationBlogImg from "@/assets/blog-images/animation-blog.webp";
import digitalMarketingBlogImg from "@/assets/blog-images/digital-marketing-blog.webp";
import corporatePresentationBlogImg from "@/assets/blog-images/corporate-presentation-blog.webp";

const blogPosts = [
  {
  title: "From Slides to Strategy: The Impact of Corporate Presentation Design",
  excerpt:
    "Corporate presentation design helps businesses communicate clearly, build trust, explain data effectively, and turn ideas into stronger business decisions.",
  category: "Corporate Presentation",
  date: "June 2026",
  image: corporatePresentationBlogImg,
  url: "/impact-of-corporate-design",
},
  {
  title: "Why Consistent Digital Marketing Produces Long-Term Results",
  excerpt:
    "Consistent digital marketing helps businesses build recognition, stay visible, grow trust, improve messaging, and produce stronger long-term results.",
  category: "Digital Marketing",
  date: "June 2026",
  image: digitalMarketingBlogImg,
  url: "/digital-marketing-produce-long-term-result",
},
  {
  title: "The Growing Importance of Animation in Digital Marketing",
  excerpt:
    "Animation helps businesses capture attention, explain ideas clearly, improve brand storytelling, strengthen engagement, and stand out in digital marketing.",
  category: "Animation",
  date: "June 2026",
  image: animationBlogImg,
  url: "/important-of-animation-in-digital-marketing",
},
  {
  title: "Why Mobile Apps Development Have Become a Business Growth Necessity",
  excerpt:
    "Mobile app development helps businesses improve accessibility, customer experience, engagement, conversions, and long-term business growth.",
  category: "Mobile App Development",
  date: "June 2026",
  image: mobileAppDevelopmentBlogImg,
  url: "/mobile-app-development-business-growth-necessity",
},
  {
  title: "How Businesses Can Maximize Growth with Modern Web Development and Marketing",
  excerpt:
    "Modern web development and digital marketing help businesses improve visibility, build trust, attract customers, and support sustainable business growth.",
  category: "Web Development",
  date: "June 2026",
  image: webDevelopmentMarketingBlogImg,
  url: "/maximize-growth-modern-web-development",
},
  
{
  title: "Why Strong Brand Management Is the Foundation of Business Growth",
  excerpt:
    "Strong brand management helps businesses build trust, improve recognition, strengthen customer loyalty, and create a foundation for sustainable growth.",
  category: "Brand Management",
  date: "June 2026",
  image: brandManagementBlogImg,
  url: "/Strong-brand-management-business-growth",
},

{
  title: "How Email Marketing Builds Stronger Customer Relationships",
  excerpt:
    "Email marketing helps businesses build trust, strengthen customer relationships, improve engagement, and encourage long-term customer loyalty.",
  category: "Email Marketing",
  date: "June 2026",
  image: emailMarketingBlogImg,
  url: "/stronge-email-marketing-to-build-relationship",
},
  {
  title: "How Great UI/UX Design Turns Visitors into Loyal Customers",
  excerpt:
    "Great UI/UX design improves user experience, builds trust, increases customer retention, and helps businesses convert visitors into loyal customers.",
  category: "UI/UX Design",
  date: "June 2026",
  image: uiUxBlogImg,
  url: "/ui-ux-design-turns-into-loyal-customers",
},
{
  title: "The Power of Social Media Marketing in Today's Digital Landscape",
  excerpt:
    "Social media marketing helps businesses increase brand visibility, engage customers, build credibility, generate leads, and drive long-term business growth.",
  category: "Social Media Marketing",
  date: "June 2026",
  image: socialMediaMarketingBlogImg,
  url: "/power-of-social-media-in-digital-landscape",
},
  
{
  title: "Why Branding Is Critical for Today's Businesses",
  excerpt:
    "Strong branding helps businesses build trust, improve recognition, create emotional connection, and stand out in digital markets.",
  category: "Branding",
  date: "June 2026",
  image: brandingBlogImg,
  url: "/branding-more-critical-for-today-businesses",
},
{
  title: "The Strategic Importance of Content Management in Modern Marketing",
  excerpt:
    "Effective content management helps businesses maintain consistency, improve customer engagement, strengthen branding, and support long-term marketing growth.",
  category: "Content Management",
  date: "June 2026",
  image: contentManagementBlogImg,
  url: "/strategic-important-of-content-management-marketing",
},
 {
  title: "The Importance of Ebook Cover Design in a Competitive Marketplace",
  excerpt:
    "Professional ebook cover design helps authors attract readers, improve visibility, strengthen credibility, and increase sales potential in competitive marketplaces.",
  category: "Ebook Cover Design",
  date: "June 2026",
  image: ebookCoverBlogImg,
  url: "/important-of-ebook-design-for-competitive-market",
}, 
{
  title: "How PPC Advertising Helps Businesses Generate Faster Results",
  excerpt:
    "PPC advertising helps businesses reach high-intent customers, increase visibility, generate qualified leads, and achieve measurable marketing results faster.",
  category: "PPC Advertising",
  date: "June 2026",
  image: ppcBlogImg,
  url: "/ppc-advertising-help-to-generate-results",
},
{
  title: "Why Every Modern Business Needs a Well-Designed Mobile App",
  excerpt:
    "A professionally designed mobile app improves customer experience, strengthens brand visibility, increases engagement, and helps businesses stay competitive in a mobile-first world.",
  category: "Mobile App Design",
  date: "June 2026",
  image: mobileAppBlogImg,
  url: "/modern-bussiness-well-design-mobile-app",
},
{
  title: "Why Brochure Design Is More Important for Professional Businesses Than Ever",
  excerpt:
    "Professional brochure design helps businesses communicate services clearly, build credibility, strengthen branding, and create a lasting impression.",
  category: "Brochure Design",
  date: "June 2026",
  image: brochureBlogImg,
  url: "important-of-professional-brochure-design",
},
{
  title: "How Custom Stationery Design Builds Business Credibility",
  excerpt:
    "Professional stationery design helps businesses strengthen branding, improve recognition, build trust, and create a more credible and professional image.",
  category: "Stationery Design",
  date: "May 2026",
  image: stationeryDesignBlogImg,
  url: "/custom-stationery-design-builds-business-credilbility",
},

{
  title: "The Importance of Modern Web Design for Business Growth",
  excerpt:
    "Modern web design helps businesses improve user experience, build trust, increase engagement, and create stronger online visibility.",
  category: "Web Design",
  date: "May 2026",
  image: webDesignBlogImg,
  url: "/importance-of-modern-web-design",
},
{
  title: "Why SEO Services Are Important for Small Businesses",
  excerpt:
    "SEO helps small businesses improve visibility, attract quality leads, build credibility, and grow consistently in competitive markets.",
  category: "SEO",
  date: "April 2026",
  image: seoBlogImg,
  url: "/importance-of-small-businesses-seo-services",
},
{
  title: "Why Graphic Design Is More Important for Professional Businesses Than Ever",
  excerpt:
    "Professional graphic design helps businesses create strong first impressions, build trust, improve recognition, and communicate clearly across digital and print platforms.",
  category: "Graphic Design",
  date: "April 2026",
  image: graphicDesignBlogImg,
  url: "/important-of-graphic-design-bussiness",
},
{
  title: "Why Professional Logo Design Matters for Modern Businesses",
  excerpt:
    "A professional logo is more than a graphic. It builds trust, improves recognition, and creates a powerful first impression across every platform.",
  category: "Logo Design",
  date: "April 2026",
  image: logoBlogImg,
  url: "/importance-of-professional-logo-design-businesses",
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
                Websites, Branding & <br /> Digital Growth
              </span>
            </h1>

            <p className="mx-auto text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
              Explore practical articles on web design, SEO, logo design, branding, and digital marketing written to help modern businesses build trust, <br /> improve visibility, and grow online.
            </p>
            

            <a
              href="#featured"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white font-semibold rounded-full shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300 border-0"
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
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white font-semibold rounded-full shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300 border-0"
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