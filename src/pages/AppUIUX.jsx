import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, Smartphone, LayoutGrid, MousePointerClick, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

import ui1 from "@/assets/app-uiux-showcase/app-uiux-1.png";
import ui2 from "@/assets/app-uiux-showcase/app-uiux-2.png";
import ui3 from "@/assets/app-uiux-showcase/app-uiux-3.png";
import ui4 from "@/assets/app-uiux-showcase/app-uiux-4.png";

const AppUIUX = () => {
  const navigate = useNavigate();

  const deliverables = [
    "Mobile app UI design",
    "User experience flow",
    "Wireframes",
    "Clickable prototype",
    "Clean screen layouts",
    "Modern design system",
    "User journey planning",
    "Developer-ready design direction",
  ];

  const features = [
    { icon: Smartphone, title: "Mobile UI Design", text: "Modern app screens designed for mobile users and smooth interaction." },
    { icon: LayoutGrid, title: "Clean Layouts", text: "Organized screens that make features easy to understand and use." },
    { icon: MousePointerClick, title: "User Flow", text: "UX flows that guide users toward important actions with less confusion." },
    { icon: Users, title: "User Focused", text: "Design decisions made around user behavior, clarity, and engagement." },
  ];

  const showcase = [ui1, ui2, ui3, ui4];

  return (
    <>
      <Helmet>
        <title>App UI/UX Design Services | Mobile App Design | Optivax Global</title>
        <meta name="description" content="Professional app UI/UX design services for mobile apps. Optivax Global creates clean, modern, and user-friendly app interfaces." />
        <link rel="canonical" href="https://optivaxglobal.com/app-ui-ux-design" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75"></div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                App UI/UX Design
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Mobile App Designs
                <span className="block text-accent-purple">Users Love to Use</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8">
                We design clean, modern, and user-friendly mobile app interfaces that improve engagement, usability, and customer experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate("/contact")} className="inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-7 py-4 rounded-full font-bold transition group">
                  Start App Design <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a href="https://wa.me/13074301006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-7 py-4 rounded-full font-bold transition">
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

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">UI/UX Design That Improves Experience</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
              Good app design makes the product easy, clear, and enjoyable to use. We create interfaces that support better user experience and retention.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-[#1E1E2A]/75 p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition">
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

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                App Interface Showcase
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Clean, modern, and conversion-focused app interfaces designed for better usability and a premium product experience.
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
                    alt={`App UI/UX design sample ${index + 1}`}
                    className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-300 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why UI/UX Design Matters</h2>
            <p>If users cannot understand your app quickly, they leave. Strong UI/UX design improves navigation, trust, engagement, and overall product experience.</p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our App Design Process</h2>
            <p>We plan user flows, create wireframes, design modern screens, and structure the interface so users can complete actions easily and smoothly.</p>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Need a Better App Interface?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Let’s design a mobile app experience that feels simple, smart, and professional.</p>
            <button onClick={() => navigate("/contact")} className="inline-flex items-center gap-2 bg-accent-purple px-8 py-4 rounded-full font-bold hover:bg-accent-purple/90 transition">
              Start UI/UX Project <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default AppUIUX;