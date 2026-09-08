import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, Code2, Gauge, Globe2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const solutionPaths = [
  {
    icon: Globe2,
    eyebrow: "For most businesses",
    title: "Website Design",
    description:
      "Launch a polished, easy-to-manage business website without overbuilding the project.",
    benefits: [
      "WordPress + Elementor",
      "Faster launch and easy updates",
      "SEO-friendly, responsive structure",
      "Cost-effective for growing teams",
    ],
    href: "/web-design",
    action: "Explore website design",
    tone: "blue",
  },
  {
    icon: Code2,
    eyebrow: "For advanced needs",
    title: "Web Development",
    description:
      "Build the workflows, dashboards, and digital products your business cannot buy off the shelf.",
    benefits: [
      "React apps and custom frontends",
      "Dashboards, APIs, and databases",
      "SaaS and e-commerce platforms",
      "Scalable custom workflows",
    ],
    href: "/web-development",
    action: "Explore web development",
    tone: "slate",
  },
];

const faqs = [
  {
    question: "Should I choose WordPress or custom development?",
    answer:
      "WordPress with Elementor is usually the right fit for a professional business website, service company, or marketing site that needs fast launch and easy updates. Custom development makes sense when you need unique logic, user accounts, dashboards, APIs, or a product that will grow beyond standard website functionality.",
  },
  {
    question: "Can you improve an existing website instead of starting over?",
    answer:
      "Yes. We can redesign the visual system, improve page structure, rebuild selected sections, or plan a full migration based on what is already working and what is holding the business back.",
  },
  {
    question: "What happens after I request a project?",
    answer:
      "We review your goals, current website or idea, required features, and timeline. You receive a clear recommendation and scope before design or development begins, so you know what is being built and why.",
  },
  {
    question: "How much does a website project cost?",
    answer:
      "Website design packages start at $229, popular professional website packages start at $448, and custom development starts at $599. Final pricing depends on pages, content, integrations, and functionality.",
  },
];

const HomepageConversionSections = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0C0D0D] py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-accent-purple font-semibold uppercase tracking-[0.25em]">Start with the right build</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              One Partner For The Website You Need Now And The Platform You May Need Next.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
              Choose a practical website launch or a deeper custom build. Both paths begin with strategy, clear scope, and a digital experience designed around your customers.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {solutionPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <motion.article
                  key={path.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className={`group rounded-[1.5rem] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-9 ${
                    path.tone === "blue"
                      ? "border-accent-purple/40 bg-white/[0.06] hover:border-accent-purple/60"
                      : "border-white/10 bg-white/[0.04] hover:border-accent-purple/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-purple">{path.eyebrow}</p>
                      <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{path.title}</h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-purple/30 bg-accent-purple/10 text-accent-purple">
                      <Icon size={24} />
                    </div>
                  </div>
                  <p className="mt-5 max-w-xl leading-relaxed text-gray-300">{path.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {path.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-purple" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={path.href} className="mt-8 inline-flex items-center gap-2 font-semibold text-accent-purple transition hover:gap-3">
                    {path.action}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0C0D0D] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-accent-purple font-semibold uppercase tracking-[0.25em]">Why Optivax</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">Clarity Is Part Of The Deliverable.</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">You should never have to guess what is being built, what it costs, or how it supports the next stage of your business.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                [Gauge, "Business-First", "Every page and feature has a job: build trust, explain value, or create the next step."],
                [ShieldCheck, "Built To Last", "Responsive, maintainable work with a clear handoff and room to grow."],
                [Globe2, "One Focused Team", "Design, development, and digital presentation aligned under one direction."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="border-t border-white/10 pt-5">
                  <Icon className="h-6 w-6 text-accent-purple" />
                  <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-4">
            {["Strategy before screens", "Mobile-ready delivery", "Clear project scope", "Support beyond launch"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                <Check className="h-4 w-4 text-accent-purple" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#0C0D0D] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-accent-purple font-semibold uppercase tracking-[0.25em]">Before we build</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">Good Questions Lead To Better Projects.</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-400">Still deciding what your business needs? Start with a conversation and we will help you choose the right path.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] px-6 py-3.5 font-bold text-white transition hover:from-[#004495] hover:to-[#1BBCEF]">Talk about your project <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold text-white">
                    {faq.question}
                    <ChevronDown className={`h-5 w-5 shrink-0 text-accent-purple transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="max-w-3xl pb-6 pr-10 leading-relaxed text-gray-400">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageConversionSections;
