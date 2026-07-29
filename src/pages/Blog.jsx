import React, { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
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
import semBlogImg from "@/assets/blog-images/sem-blog.webp";
import america250BlogImg from "@/assets/blog-images/america-250-blog.webp";
import logoSoftwareBlogImg from "@/assets/blog-images/logo-software-blog.webp";
import smallBusinessWebsiteBlogImg from "@/assets/blog-images/small-business-website-results-blog.webp";
import uiuxDesignBlogImg from "@/assets/blog-images/uiux-design-blog.webp";
import ebookCoverTipsBlogImg from "@/assets/blog-images/ebook-cover-tips-blog.webp";
import webDesignAgencyVsDiyBlogImg from "@/assets/blog-images/web-design-agency-vs-diy-blog.webp";

const blogPosts = [
  {
  title: "Web Design Agency vs DIY Website Builder: Which Is Better?",
  excerpt:
    "Compare DIY website builders and professional web design agencies based on cost, customization, branding, SEO, performance, conversions, and long-term growth.",
  category: "Web Design",
  date: "July 2026",
  image: webDesignAgencyVsDiyBlogImg,
  url: "/diy-builder-vs-web-design-agency",
},
  {
  title: "Ebook Cover Design Tips to Make Your Book Stand Out",
  excerpt:
    "Learn how genre, typography, colors, imagery, visual hierarchy, thumbnail testing, and series branding help authors create professional ebook covers.",
  category: "Ebook Cover Design",
  date: "July 2026",
  image: ebookCoverTipsBlogImg,
  url: "/ebook-cover-design-tip-for-author",
},
  {
  title: "UI UX Design Explained for Better Digital Experiences",
  excerpt:
    "Learn how UI and UX design improve usability, user experience, mobile responsiveness, accessibility, trust, and business growth through better digital experiences.",
  category: "UI/UX Design",
  date: "July 2026",
  image: uiuxDesignBlogImg,
  url: "/explain-business-for-ui-ux-design",
},

  {
  title: "How Small Business Websites Help Brands Look Professional",
  excerpt:
    "Learn how professional design, mobile responsiveness, fast speed, strong service pages, trust signals, clear calls to action, and SEO help small business websites generate better results.",
  category: "Web Design",
  date: "July 2026",
  image: smallBusinessWebsiteBlogImg,
  url: "/small-business-websites-that-get-results",
},
  
  {
  title: "250th Anniversary Celebrate America",
  excerpt:
    "The year 2026 marks a historic moment for the United States: the 250th anniversary of American independence, honoring freedom, unity, progress, and America’s historic journey.",
  category: "USA 250th Anniversary",
  date: "July 2026",
  image: america250BlogImg,
  url: "/celebrating-americas-250th-anniversary",
},
{
  title: "Compare Popular Logo Design Software Features",
  excerpt:
    "Compare popular logo design tools based on ease of use, templates, customization, brand kit features, AI options, and export quality.",
  category: "Logo Design",
  date: "July 2026",
  image: logoSoftwareBlogImg,
  url: "/compare-logo-design-for-popular-business-software",
},

  {
  title: "How Search Engine Marketing Turns Searches Into Sales",
  excerpt:
    "Search Engine Marketing helps businesses reach high-intent customers, improve visibility, drive qualified traffic, and convert online searches into real sales.",
  category: "Search Engine Marketing",
  date: "June 2026",
  image: semBlogImg,
  url: "/sem-turns-searches-into-sales",
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
  title: "From Slides to Strategy: The Impact of Corporate Presentation Design",
  excerpt:
    "Corporate presentation design helps businesses communicate clearly, build trust, explain data effectively, and turn ideas into stronger business decisions.",
  category: "Corporate Presentation",
  date: "June 2026",
  image: corporatePresentationBlogImg,
  url: "/impact-of-corporate-design",
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
  title: "Creative Flyer Design Services That Get Your Business Noticed",
  excerpt:
    "Professional flyer design helps businesses attract attention, communicate their message clearly, strengthen brand awareness, and achieve better marketing results.",
  category: "Flyer Design",
  date: "June 2026",
  image: flyerDesignBlogImg,
  url: "/Creative-flyer-design-get-your-business-noticed",
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

const BLOGS_PER_PAGE = 10;

// Builds a compact page list like [1, "ellipsis", 8, 9, 10, "ellipsis", 20]
function getPaginationRange(currentPage, totalPages) {
  const range = [];

  if (totalPages <= 7) {
    for (let page = 1; page <= totalPages; page += 1) range.push(page);
    return range;
  }

  range.push(1);
  if (currentPage > 3) range.push("ellipsis-start");

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);
  for (let page = start; page <= end; page += 1) range.push(page);

  if (currentPage < totalPages - 2) range.push("ellipsis-end");
  range.push(totalPages);

  return range;
}

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const blogListingRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(blogPosts.length / BLOGS_PER_PAGE));

  const requestedPage = parseInt(searchParams.get("page"), 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    return blogPosts.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  }, [currentPage]);

  const paginationRange = useMemo(
    () => getPaginationRange(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const goToPage = (page) => {
    const safePage = Math.min(Math.max(page, 1), totalPages);
    if (safePage === currentPage) return;

    const nextParams = new URLSearchParams(searchParams);
    if (safePage === 1) {
      nextParams.delete("page");
    } else {
      nextParams.set("page", String(safePage));
    }
    setSearchParams(nextParams);

    blogListingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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


        <section
  id="featured"
  ref={blogListingRef}
  className="relative py-24 border-t border-white/10 bg-[#050B14] overflow-hidden"
>
  {/* Dark Premium Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,188,239,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.16),transparent_40%),linear-gradient(180deg,#050B14_0%,#07121F_50%,#050B14_100%)]"></div>

  {/* Subtle Grid Texture */}
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]"></div>

  {/* Soft Glow Effects */}
  <div className="absolute top-20 left-8 h-56 w-56 rounded-full bg-[#1BBCEF]/10 blur-[100px]"></div>
  <div className="absolute bottom-20 right-8 h-72 w-72 rounded-full bg-[#004495]/18 blur-[120px]"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">
    {/* Section Heading */}
    <div className="mb-14">
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495]"></span>

        <p className="text-[#7DD3FC] uppercase tracking-[0.35em] text-xs md:text-sm font-semibold">
          Featured Articles
        </p>
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
        Practical Insights For{" "}
        <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#60A5FA] bg-clip-text text-transparent">
          Custom Service Brands.
        </span>
      </h2>
    </div>

    {/* Blog Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {paginatedPosts.map((post, index) => (
        <a
          key={`${post.title}-${index}`}
          href={post.url}
          className="group relative h-full block"
        >
          {/* Hover Glow Border */}
          <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-[#1BBCEF]/35 via-white/5 to-[#004495]/35 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"></div>

          <article className="relative h-full rounded-[32px] bg-[#0B1625]/92 border border-white/10 p-5 md:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl hover:border-[#1BBCEF]/45 hover:-translate-y-2 hover:shadow-[0_26px_90px_rgba(27,188,239,0.13)] transition-all duration-500 flex flex-col overflow-hidden">
            
            {/* Image Area - Same Border Radius */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07121F] h-[230px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain mx-auto transition duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Image Premium Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07121F]/45 via-transparent to-transparent opacity-70"></div>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(27,188,239,0.10),transparent_32%)] opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition duration-700 group-hover:translate-x-[120%]"></div>
            </div>

            {/* Content Area */}
            <div className="pt-6 flex flex-col flex-1">
              {/* Category */}
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#A5F3FC]/15 bg-[#A5F3FC]/10 px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.22em] text-[#A5F3FC]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#A5F3FC]/10 text-[#A5F3FC] border border-[#A5F3FC]/10">
                  <BookOpen className="w-4 h-4" />
                </span>
                {post.category}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-5 min-h-[86px] text-white transition duration-300 group-hover:text-[#BFEFFF]">
                {post.title}
              </h3>

              {/* Small Premium Divider */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495]"></span>
                <span className="h-[2px] w-2 rounded-full bg-[#1BBCEF]/60"></span>
              </div>

              {/* Excerpt */}
              <p className="text-gray-300 leading-7 mb-8 text-base min-h-[92px]">
                {post.excerpt}
              </p>

              {/* Bottom Row */}
              <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400">
                  {post.date}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#A5F3FC] transition duration-300 group-hover:bg-[#1BBCEF]/10 group-hover:text-white group-hover:translate-x-1">
                  Read Full Blog
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>

    {/* Pagination */}
    {totalPages > 1 && (
      <nav
        aria-label="Blog pagination"
        className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
      >
        {currentPage > 1 && (
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            aria-label="Go to previous page"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-gray-300 transition hover:border-[#1BBCEF]/45 hover:text-white"
          >
            Previous
          </button>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          {paginationRange.map((page, index) =>
            page === "ellipsis-start" || page === "ellipsis-end" ? (
              <span
                key={`${page}-${index}`}
                aria-hidden="true"
                className="px-1 text-sm text-gray-500 select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                  page === currentPage
                    ? "bg-gradient-to-r from-[#1BBCEF] to-[#004495] text-white shadow-lg shadow-[#1BBCEF]/25"
                    : "text-gray-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:border-[#1BBCEF]/45 hover:bg-[#1BBCEF]/10"
          }`}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>
    )}
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