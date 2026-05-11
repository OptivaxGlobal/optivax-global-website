import React from "react";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ArrowRight,
  Megaphone,
  Users,
  BarChart3,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import dm1 from "@/assets/digital-marketing-showcase/digital-marketing-1.jpg";
import dm2 from "@/assets/digital-marketing-showcase/digital-marketing-2.jpg";
import dm3 from "@/assets/digital-marketing-showcase/digital-marketing-3.jpg";
import dm4 from "@/assets/digital-marketing-showcase/digital-marketing-4.jpg";

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Marketing strategy",
    "Social media campaign planning",
    "Content direction",
    "Lead generation strategy",
    "Ad campaign structure",
    "Audience targeting",
    "Brand awareness planning",
    "Performance-focused approach",
  ];

  const features = [
    {
      icon: Megaphone,
      title: "Brand Awareness",
      text: "Marketing campaigns built to improve visibility and make your brand more recognizable.",
    },
    {
      icon: Users,
      title: "Audience Growth",
      text: "Content and campaign planning focused on attracting the right customers.",
    },
    {
      icon: BarChart3,
      title: "Performance Focus",
      text: "Strategies built around engagement, leads, and measurable business results.",
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      text: "We help your message reach people who are more likely to become customers.",
    },
  ];

  const showcase = [dm1, dm2, dm3, dm4];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Growth Strategy | Optivax Global</title>
        <meta
          name="description"
          content="Optivax Global provides digital marketing services focused on visibility, engagement, lead generation, and sales growth."
        />
        <link rel="canonical" href="https://optivaxglobal.com/digital-marketing-services" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Digital Marketing Services
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Marketing Strategies
                <span className="block text-accent-purple">Built for Growth</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                We help businesses grow online with marketing strategies designed
                to increase visibility, engagement, leads, and sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-7 py-4 rounded-full font-bold transition group"
                >
                  Get Marketing Plan
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
        </section>

        {/* FEATURES */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Digital Marketing That Turns Attention Into Leads
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
              Your business needs more than posts. You need a clear marketing
              system that attracts attention, builds trust, and moves users toward action.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-[#1E1E2A]/75 p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition"
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

        {/* SHOWCASE */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                Digital Marketing Showcase
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Social media marketing, branding campaigns, SEO focused strategies,
                and digital growth systems designed to help businesses scale online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {showcase.map((img, index) => (
                <div
                  key={index}
                  className="group rounded-3xl overflow-hidden bg-[#1E1E2A]/75 border border-white/10 hover:border-accent-purple/40 transition-all duration-300 hover:-translate-y-2 shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Digital marketing sample ${index + 1}`}
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Digital Marketing Matters
            </h2>

            <p>
              Without marketing, even a good business can stay invisible. Digital
              marketing helps your business reach more people, explain your value,
              and generate new leads.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Marketing Approach
            </h2>

            <p>
              We focus on your audience, brand message, service offers, and
              conversion goals. Then we create a strategy that supports visibility,
              engagement, and sales.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Grow Online?
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Let’s create a marketing strategy that helps your business attract more customers.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-accent-purple px-8 py-4 rounded-full font-bold hover:bg-accent-purple/90 transition"
            >
              Start Marketing Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
export default DigitalMarketing;