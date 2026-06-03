import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  ArrowRight,
  SearchCheck,
  Layers3,
  Users,
  BadgeCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";

const faqs = [
  {
    question: "What is Optivax Global?",
    answer:
      "Optivax Global is a creative digital agency that helps businesses establish a strong online presence through modern design, strategic branding, websites, marketing, app design, and quality digital solutions.",
  },
  {
    question: "What does Optivax Global do?",
    answer:
      "We are a full-service digital solutions company providing website design and development, UI/UX design, logo and brand identity design, mobile app design, SEO, digital marketing, ebook cover design, publishing support, and creative business solutions for modern brands.",
  },
  {
    question: "Can you create a custom website for my business?",
    answer:
      "Yes. Every project is customized around your business goals, audience, and brand identity. We create professional, modern, responsive, and conversion-focused websites that help your business grow online.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Yes. All our websites are fully optimized for mobile, tablet, laptop, and desktop screens so your website looks great and works smoothly on every device.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If your current website feels outdated or no longer represents your brand, we can redesign it with a modern look, better user experience, faster performance, and a more professional presentation.",
  },
  {
    question: "Do you provide branding for companies?",
    answer:
      "Yes. Branding is more than just a logo. We help businesses build trust, improve brand recognition, create a consistent visual identity, and make a stronger impression online.",
  },
  {
    question: "What kind of SEO services do you offer?",
    answer:
      "We create SEO-friendly website structures and also provide optimization support to help improve your visibility, search ranking potential, and overall online presence.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the size and complexity of the work. Most business websites are completed within a few weeks, while larger or custom projects may take more time.",
  },
  {
    question: "Can I request changes during the project?",
    answer:
      "Yes. We believe the best results come from collaboration. You can review the work during the project, share feedback, and request revisions so the final result matches your vision.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with businesses and brands worldwide through online meetings, email, WhatsApp, and other communication platforms.",
  },
  {
    question: "Can I manage my website after completion?",
    answer:
      "Yes. We build websites that are simple to use and easy to maintain. We can also guide you on how to update content, images, and basic sections after your website is completed.",
  },
  {
    question: "Why choose Optivax Global?",
    answer:
      "Optivax Global combines creativity, strategy, and modern design to help companies build a professional digital presence. Our goal is to create work that looks good, builds trust, supports growth, and helps brands stand out in today’s digital world.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Creative Direction",
    text: "Every project is planned with design, purpose, and business goals in mind.",
  },
  {
    icon: SearchCheck,
    title: "SEO-Friendly Structure",
    text: "We build clean digital experiences that support visibility and long-term growth.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Quality",
    text: "Modern layouts, strong branding, and reliable execution for serious businesses.",
  },
  {
    icon: Globe2,
    title: "Global Support",
    text: "We work with brands across different industries through smooth online communication.",
  },
];

const process = [
  "Understand your business goals",
  "Plan the right digital solution",
  "Design a clean professional experience",
  "Develop, refine, and launch with confidence",
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQs | Optivax Global Digital Agency</title>
        <meta
          name="description"
          content="Find answers about Optivax Global services including website design, branding, UI/UX design, SEO, digital marketing, app design, and creative digital solutions."
        />
        <link rel="canonical" href="https://optivaxglobal.com/faqs" />
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/35 via-[#031426]/60 to-[#031426]/90" />

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                Frequently Asked Questions
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Helping You
                <span className="block text-accent-purple">
                  Grow Digitally
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Learn how Optivax Global helps modern businesses grow through
                website design, branding, UI/UX, SEO, digital marketing, app
                design, and creative digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                >
                  Ask Your Question
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                <HelpCircle size={32} />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                What You Need to Know
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                From project timelines to website ownership, SEO, branding, and
                revisions, this page answers the most common questions clients
                ask before starting a project with Optivax Global.
              </p>

              <div className="grid gap-4">
                {[
                  "Website design & development",
                  "Branding and logo design",
                  "SEO and digital marketing",
                  "Project process and support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-purple w-5 h-5 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Built for Businesses That Need Clarity Before Starting
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              We believe a strong project starts with clear communication,
              honest guidance, and a smooth process from idea to final launch.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white/[0.04] p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                    <p className="text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10 bg-[#0C0D0D]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div>
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 text-accent-purple font-semibold uppercase tracking-[0.18em] mb-4">
                  <Layers3 size={18} />
                  Client Questions
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                  Answers About Our Services, Process & Support
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  Here are the most important questions about working with
                  Optivax Global, so you can start your project with confidence.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden hover:border-accent-purple/40 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between gap-5 text-left px-6 md:px-8 py-6"
                    >
                      <span className="text-base md:text-lg font-bold text-white">
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={`shrink-0 text-accent-purple transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        size={24}
                      />
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="px-6 md:px-8 pb-7 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                <MessageCircle size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Tell us about your business and we’ll guide you with the right
                digital solution for your goals.
              </p>

              <div className="space-y-4 mb-7">
                {process.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BadgeCheck className="text-accent-purple w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
              >
                Contact Optivax Global
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </aside>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "For Startups",
                text: "Launch your business with a strong website, clean branding, and a professional online identity.",
              },
              {
                icon: Layers3,
                title: "For Growing Brands",
                text: "Upgrade your digital presence with better design, better user experience, and stronger marketing direction.",
              },
              {
                icon: ShieldCheck,
                title: "For Professional Teams",
                text: "Build trust with polished visuals, clear messaging, and digital solutions that support long-term growth.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white/[0.04] p-8 rounded-3xl border border-white/10 hover:border-accent-purple/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/85" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Build a Digital Presence That Feels Professional?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you need a new website, a rebrand, SEO, marketing, or a
              complete digital solution, Optivax Global is ready to help you
              move forward with confidence.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faqs;