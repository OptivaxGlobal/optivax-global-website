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

import dm1 from "@/assets/digital-marketing-showcase/digital-marketing-1.webp";
import dm2 from "@/assets/digital-marketing-showcase/digital-marketing-2.webp";
import dm3 from "@/assets/digital-marketing-showcase/digital-marketing-3.webp";
import dm4 from "@/assets/digital-marketing-showcase/digital-marketing-4.webp";

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Digital marketing strategy",
    "SEO-focused growth planning",
    "Social media campaign direction",
    "Content planning and positioning",
    "Lead generation strategy",
    "Audience targeting",
    "Brand awareness planning",
    "Performance-focused campaign structure",
  ];

  const features = [
    {
      icon: Megaphone,
      title: "Clear Brand Message",
      text: "We help shape a message that makes your business easier to understand, trust, and remember.",
    },
    {
      icon: Users,
      title: "Right Audience Focus",
      text: "Your marketing should reach people who actually need your service, not just random viewers.",
    },
    {
      icon: BarChart3,
      title: "Lead-Focused Planning",
      text: "Every campaign direction is built to support enquiries, engagement, and real business growth.",
    },
    {
      icon: Target,
      title: "Smarter Campaign Direction",
      text: "We plan content and campaigns around your goals, audience behavior, and service value.",
    },
  ];

  const showcase = [dm1, dm2, dm3, dm4];

  return (
    <>
      <Helmet>
        <title>
          Custom Digital Marketing Solutions In USA - Optivax Global
        </title>
        <meta
          name="description"
          content="Optivax Global provides digital marketing services, SEO strategy, content planning, social media marketing, lead generation, and growth-focused campaigns for modern businesses."
        />
        <link
          rel="canonical"
          href="https://optivaxglobal.com/digital-marketing"
        />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Digital Marketing Services
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Digital Marketing
                <span className="block text-accent-purple">
                  That Turns Attention Into Leads
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                We help your business show up with the right message, reach the
                right audience, and turn online attention into real enquiries.
                From SEO and content planning to social media campaigns,
                everything is built around trust, visibility, and consistent
                growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
  navigate("/contact", {
    state: { service: "Digital Marketing" },
  })
}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
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

            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
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

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Marketing That Feels Clear, Useful, and Built for Action
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Good marketing is not just posting content. It is about
              understanding your audience, presenting your offer clearly, and
              creating a path that moves people from interest to action.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-white/[0.04] p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                Digital Marketing Showcase
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                A look at creative campaign visuals, social media concepts,
                brand-focused designs, and digital content built to make
                businesses look active, professional, and easy to trust.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {showcase.map((img, index) => (
                <div
                  key={index}
                  className="group rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-accent-purple/40 hover:shadow-2xl hover:shadow-accent-purple/20 transition-all duration-300 shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Digital marketing campaign showcase ${index + 1}`}
                    loading="lazy"
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Build a Stronger Online Presence
            </h2>

            <p>
              People cannot choose a business they cannot find or understand. A
              strong digital marketing strategy helps your brand become visible,
              explain its value clearly, and stay in front of the customers who
              are most likely to need your services.
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              A Strategy-Focused Marketing Process
            </h2>

            <p>
              We start by understanding your business, your audience, and your
              goals. Then we shape the message, content direction, and campaign
              structure so your marketing feels clear, professional, and focused
              on real business results.
            </p>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Make Your Marketing Work Better?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let’s create a marketing direction that helps your business look
              more professional, reach better customers, and turn attention into
              real leads.
            </p>

            <button
              onClick={() =>
  navigate("/contact", {
    state: { service: "Digital Marketing" },
  })
}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
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