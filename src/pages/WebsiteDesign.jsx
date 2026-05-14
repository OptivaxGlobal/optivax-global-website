import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, Globe, Smartphone, Zap, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

const WebsiteDesign = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Globe, title: "Professional Business Website", text: "Modern website design built to create trust and present your brand professionally." },
    { icon: Smartphone, title: "Mobile Responsive Design", text: "Your website will look clean and work smoothly on mobile, tablet, and desktop." },
    { icon: Search, title: "SEO-Ready Structure", text: "Clean heading structure, optimized content flow, and search-friendly page layout." },
    { icon: Zap, title: "Fast Loading Experience", text: "Optimized layouts focused on speed, smooth browsing, and better user experience." }
  ];

  const deliverables = [
    "Custom website design",
    "Responsive layout",
    "Landing page design",
    "Service page structure",
    "CTA sections",
    "Contact form setup",
    "SEO-friendly content structure",
    "Basic performance optimization"
  ];

  const faqs = [
    { question: "Do you design websites for small businesses?", answer: "Yes. We create professional websites for startups, small businesses, agencies, authors, and service-based brands." },
    { question: "Will my website be mobile responsive?", answer: "Yes. Every website is designed to work properly on mobile, tablet, laptop, and desktop screens." },
    { question: "Can you add SEO to my website?", answer: "Yes. We structure pages with proper titles, descriptions, headings, keywords, and user-focused content." }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Website Design Company In USA - Optivax Global</title>
        <meta
          name="description"
          content="Optivax Global offers professional website design services for businesses, startups, and brands. Get a modern, mobile responsive, SEO-ready website built to generate leads."
        />
        <meta
          name="keywords"
          content="website design services, professional web design, business website design, responsive website design, web design agency, website development services"
        />
        <link rel="canonical" href="https://optivaxglobal.com/website-design" />
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
                  Website Design Services
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                  Professional Websites
                  <span className="block text-accent-purple">
                    Built to Convert
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                  Optivax Global designs modern, mobile responsive, and SEO-ready
                  websites that help businesses build trust, attract customers,
                  and generate more leads online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
  navigate("/contact", {
    state: { service: "Website Design" },
  })
}
                    className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-7 py-4 rounded-full font-bold transition group"
                  >
                    Get a Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/923162787814"
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
                Website Design That Supports Business Growth
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A good website should not only look beautiful it should guide
                visitors, build credibility, and encourage them to take action.
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

        {/* SEO CONTENT */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Your Business Needs a Professional Website
            </h2>

            <p>
              Your website is often the first place customers check before
              trusting your business. A slow, outdated, or unclear website can
              make visitors leave quickly. A professional website helps you
              create a strong first impression, explain your services clearly,
              and guide users toward contacting you.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Website Design Services
            </h2>

            <p>
              At Optivax Global, we create websites for businesses, startups,
              authors, agencies, and service providers. Our focus is on clean
              design, smooth user experience, mobile responsiveness, SEO-ready
              structure, and conversion-focused content.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Website Design Process
            </h2>

            <p>
              We start by understanding your business goals, target audience,
              competitors, and services. Then we plan the page structure, design
              the layout, write conversion-focused sections, and build a website
              that supports user engagement and lead generation.
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
              premium, builds trust, and helps you generate more leads.
            </p>

            <button
              onClick={() =>
  navigate("/contact", {
    state: { service: "Website Design" },
  })
}
              className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-4 rounded-full font-bold transition group"
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

export default WebsiteDesign;