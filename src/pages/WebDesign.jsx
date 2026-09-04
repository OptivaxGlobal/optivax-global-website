import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, Globe, Smartphone, Zap, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import caulk from "@/assets/website-design-showcase/Caulk-a-doodle Website.png";
import detective from "@/assets/website-design-showcase/Local Detectives Website Design V2.png";
import detectiveDark from "@/assets/website-design-showcase/localdetectives.png";
import stickyMeds from "@/assets/website-design-showcase/Stickymeds Layout 6.png";
import dental from "@/assets/website-design-showcase/DOTQ Website Layout RV 01.png";
import tmmc from "@/assets/website-design-showcase/TMMC25 Website.png";
import juccini from "@/assets/website-design-showcase/Juccini Scrub Web UI 2 copy.jpg";
import marvel from "@/assets/website-design-showcase/Web Design Marvel.png";
import bx5 from "@/assets/website-design-showcase/B5-X Boron-Infused Coating website layout 2.png";
import version from "@/assets/website-design-showcase/Version 5 Gray Sample 1.png";
import ruthEllenWeisberg from "@/assets/website-design-showcase/ruth-ellen-weisberg.png";


const WebDesign = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Globe, title: "Small Business & Brand Websites", text: "Premium WordPress/Elementor website design built for small businesses, startups, and brand websites that need to look professional from day one." },
    { icon: Smartphone, title: "Landing Pages That Convert", text: "High-converting landing pages and business websites designed to turn visitors into inquiries, calls, and paying customers." },
    { icon: Search, title: "Search-Ready Structure", text: "Clean heading structure, optimized content flow, and search-friendly page layout so US customers can find your business." },
    { icon: Zap, title: "Fast Loading Experience", text: "Optimized layouts focused on speed, smooth browsing, and a better mobile experience for every visitor." }
  ];

  const deliverables = [
    "Custom website design",
    "Small business website design",
    "Landing page design",
    "Responsive layout",
    "WordPress/Elementor setup",
    "Service page structure",
    "CTA sections",
    "Contact form setup",
    "Search-friendly content structure",
    "Brand and style direction"
  ];
  const portfolioProjects = [
  {
    title: "Detective.com",
    category: "Private Investigation Website",
    image: detective,
  },
  {
    title: "Sticky Meds",
    category: "E-Commerce Website",
    image: stickyMeds,
  },
  {
    title: "Bright Tomorrow Counseling",
    category: "Healthcare Website",
    image: version,
  },
  {
    title: "Missing Middle Conference",
    category: "Event Website",
    image: tmmc,
  },
  {
    title: "Juccini Scrubs",
    category: "Healthcare E-Commerce",
    image: juccini,
  },
  {
    title: "Web Design Marvel",
    category: "Digital Agency Website",
    image: marvel,
  },
  {
    title: "B5-X Coating",
    category: "Automotive Product Website",
    image: bx5,
  },
  {
    title: "Caulk-A-Doodle",
    category: "Construction Website",
    image: caulk,
  },
  {
    title: "Dental Clinic",
    category: "Dental Website",
    image: dental,
  },
  {
  title: "Local Detectives",
  category: "Investigation Website",
  image: detectiveDark,
  },
  {
    title: "Ruth Ellen Weisberg",
    category: "Art Gallery Website",
    image: ruthEllenWeisberg,
  }
];

  const faqs = [
    { question: "Do you design websites for small businesses?", answer: "Yes. We create professional websites for startups, small businesses, agencies, authors, and service-based brands." },
    { question: "Will my website be mobile responsive?", answer: "Yes. Every website is designed to work properly on mobile, tablet, laptop, and desktop screens." },
    { question: "Can you help my website show up better in search results?", answer: "Yes. We structure pages with proper titles, descriptions, headings, keywords, and user-focused content." }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Web Design Services in Wyoming USA - Optivax Global</title>
        <meta
          name="description"
          content="Optivax Global offers professional website design services for businesses, startups, and brands. Get a modern, mobile-responsive website built to attract and engage more customers."
        />
        <meta
          name="keywords"
          content="website design services, professional web design, business website design, responsive website design, web design agency, website layout design"
        />
        <link rel="canonical" href="https://optivaxglobal.com/web-design" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                  Website Design For Small Business & Brands
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                  Premium Websites
                  <span className="block text-accent-purple">
                    Built to Convert
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                  Professional WordPress and landing page design for small businesses, startups, and brand websites across the USA. We design modern, mobile-friendly websites that make it easy for visitors to understand your services and take the next step.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
  navigate("/contact", {
    state: { service: "Website Design" },
  })
}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                                    >
                                      Get a Free Website Design Quote
                                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                    
                                    <a
                                      href="https://wa.me/13074301006"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full font-bold transition"
                                    >
                                      Chat on WhatsApp
                                    </a>
                                  </div>
                                </div>

              <div className="bg-[#1E1E2A]/75 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">What You Get</h2>

                <div className="grid gap-4">
                  {deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent-purple w-5 h-5 shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                Website Design Built Around Your Business
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A great website guides visitors, builds credibility, and makes
                it easy for people to take the next step whether that’s
                contacting you, requesting a quote, or booking a service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-[#1E1E2A]/75 backdrop-blur-xl p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 hover:bg-[#1E1E2A]/90 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                    <p className="text-gray-400 leading-relaxed">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


       {/* PORTFOLIO */}

<section className="py-28 border-t border-white/10 relative overflow-hidden">

<div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#1BBCEF]/10 blur-[160px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#004495]/10 blur-[160px] rounded-full"></div>


<div className="max-w-7xl mx-auto px-6 relative z-10">


<div className="text-center max-w-3xl mx-auto mb-16">

<span className="text-accent-purple uppercase tracking-[0.35em] text-sm font-semibold">
Our Portfolio
</span>


<h2 className="text-4xl md:text-6xl font-extrabold mt-5">
Website Designs We Created
</h2>


<p className="text-gray-400 mt-5 text-lg">
Explore our premium website design projects created for businesses,
brands, and organizations.
</p>


</div>



<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">


{portfolioProjects.map((project)=>(


<div
key={project.title}
className="
group
rounded-3xl
overflow-hidden
bg-[#151621]
border border-white/10
hover:border-[#1BBCEF]/50
transition-all
duration-500
hover:-translate-y-3
shadow-xl
"
>


<a
href={project.image}
target="_blank"
rel="noopener noreferrer"
className="block"
>


<div className="
relative
h-[520px]
overflow-hidden
bg-[#07121F]
"
>


<img
src={project.image}
alt={project.title}
className="
w-full
h-full
object-contain
object-top
transition-transform
duration-700
group-hover:scale-110
"
/>


<div className="
absolute
inset-0
bg-black/70
opacity-0
group-hover:opacity-100
transition-all
duration-500
flex
items-center
justify-center
">


<div
className="
bg-gradient-to-r
from-[#1BBCEF]
to-[#004495]
px-8
py-4
rounded-full
font-bold
shadow-xl
"
>

View Full Website

</div>


</div>


</div>


</a>




<div className="p-7">


<p className="
text-[#1BBCEF]
text-xs
uppercase
tracking-widest
font-semibold
">

{project.category}

</p>



<h3 className="
text-2xl
font-bold
mt-3
">

{project.title}

</h3>


<p className="
text-gray-400
text-sm
mt-4
leading-relaxed
">

Complete responsive website design with modern UI,
professional layout and user-focused experience.

</p>



</div>


</div>


))}


</div>


</div>


</section>


        {/* SEARCH VISIBILITY CONTENT */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Your Business Needs a Professional Website
            </h2>

            <p>
              Most visitors decide in seconds whether your business is worth
              contacting. A slow, confusing, or dated website makes that decision
              harder. We design sites that feel clear, fast, and easy to explore.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Website Design Services
            </h2>

            <p>
              We build websites for businesses, startups, and service providers.
              The design is clean, intuitive, mobile-ready, and structured so it
              helps people understand your offer quickly.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Website Design Process
            </h2>

            <p>
              We start by understanding your audience, goals, and competitors.
              From there, we plan the site structure, design layouts, and build
              pages that help visitors move from interest to contact.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-[#1E1E2A]/75 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-accent-purple/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 border-t border-white/10 overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Build Your Website?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Let’s create a professional website that makes your business look
              premium, builds trust, and helps you connect with more customers.
            </p>

            <button
              onClick={() =>
  navigate("/contact", {
    state: { service: "Website Design" },
  })
}
             className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
            >
              Start Your Website Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebDesign;