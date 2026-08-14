import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  BookOpen,
  FileEdit,
  LayoutTemplate,
  ImageIcon,
  FileStack,
  UploadCloud,
  Barcode,
  Share2,
  MessageCircle,
  FileCheck2,
  Users,
  Wand2,
  Megaphone,
  FileSearch,
  Rocket,
  Store,
  Library,
  Network,
  BadgeCheck,
} from "lucide-react";
import { SiApple, SiGoogleplay, SiRakutenkobo } from "react-icons/si";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";
import SectionAnimator from "@/components/SectionAnimator";

const trustPoints = [
  { icon: Users, text: "Author-Focused" },
  { icon: BadgeCheck, text: "KDP-Ready Files" },
  { icon: Share2, text: "Multi-Platform Support" },
];

const included = [
  {
    icon: FileCheck2,
    title: "Manuscript Preparation",
    text: "Before editing begins, we review your manuscript and clean up its structure  headings, chapter breaks, and formatting inconsistencies  so it's organized and ready for the next stage.",
  },
  {
    icon: FileEdit,
    title: "Editing & Proofreading",
    text: "A close read-through to catch grammar issues, awkward phrasing, and inconsistencies, so your manuscript reads clearly and professionally from the first page to the last.",
  },
  {
    icon: LayoutTemplate,
    title: "eBook Formatting",
    text: "Your manuscript is converted into a properly structured eBook file with clean spacing and chapter navigation that displays correctly across Kindle and other e-readers.",
  },
  {
    icon: ImageIcon,
    title: "Cover Design Support",
    text: "Cover concepts built around your book's genre and tone, giving readers a strong first impression the moment your title shows up in search results.",
  },
  {
    icon: FileStack,
    title: "Publishing File Preparation",
    text: "We package your manuscript and cover into the exact file formats each platform requires, so nothing gets rejected or delayed once you're ready to upload.",
  },
  {
    icon: UploadCloud,
    title: "Amazon KDP Publishing Support",
    text: "Step-by-step guidance through the KDP upload process, from account setup to final file submission, so your book goes live without technical guesswork.",
  },
  {
    icon: Barcode,
    title: "Metadata & Category Guidance",
    text: "Support choosing the right title formatting, description, keywords, and categories  the details that help readers actually discover your book.",
  },
  {
    icon: Share2,
    title: "Multi-Platform Publishing Support",
    text: "Publishing beyond Amazon? We help prepare and format your files for Apple Books, Kobo, Google Play Books, and other major platforms.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: FileSearch,
    title: "Manuscript Review",
    text: "We read through your manuscript and get to know your genre, goals, and audience, then map out the right path to publication.",
  },
  {
    step: "02",
    icon: FileEdit,
    title: "Editing & Preparation",
    text: "Your manuscript goes through an editing pass for clarity and consistency, then gets structured and prepped for formatting and design.",
  },
  {
    step: "03",
    icon: LayoutTemplate,
    title: "Formatting & Design",
    text: "We format your eBook file for digital reading and coordinate a cover design that fits your book's genre and tone.",
  },
  {
    step: "04",
    icon: UploadCloud,
    title: "Publishing Setup",
    text: "Your files, metadata, and platform listings are prepared and set up correctly, whether you're publishing on Amazon KDP or elsewhere.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch Support",
    text: "Once your book goes live, we stay available to guide you through early promotion and help you build momentum after launch.",
  },
];

const whyChooseUs = [
  {
    icon: BookOpen,
    title: "Professional Publishing Support",
    text: "From your first draft to your final upload, you're guided by a team that understands the publishing process, not left to figure out platform requirements on your own.",
  },
  {
    icon: Users,
    title: "Author-Focused Approach",
    text: "We build every project around your book, your voice, and your goals. There's no template treatment here, your manuscript gets the attention it needs.",
  },
  {
    icon: FileStack,
    title: "Professional File Preparation",
    text: "Clean, accurate file preparation that meets the technical requirements of Amazon KDP and other platforms, reducing the chance of delays or rejected uploads.",
  },
  {
    icon: Wand2,
    title: "Design & Formatting Expertise",
    text: "Formatting and cover design handled by people who understand how digital books are actually read, browsed, and purchased.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "You'll always know where your project stands. No long silences, no guessing, just clear updates from review through to launch.",
  },
  {
    icon: Megaphone,
    title: "Digital Growth Support",
    text: "Once your book is live, our digital growth team is available to help you build visibility and reach more readers.",
  },
];

const platforms = [
  {
    icon: Store,
    name: "Amazon Kindle Direct Publishing (KDP)",
    text: "The most widely used platform for self-published eBooks and print-on-demand titles.",
  },
  {
    icon: SiRakutenkobo,
    name: "Kobo",
    text: "A strong option for reaching international readers and independent bookstore audiences.",
  },
  {
    icon: Network,
    name: "IngramSpark",
    text: "A distribution platform used for wider retail and library reach. We can help prepare publishing-ready files and provide setup guidance where applicable.",
  },
  {
    icon: Library,
    name: "Barnes & Noble Press",
    text: "Publishes your eBook directly to the Barnes & Noble NOOK marketplace.",
  },
  {
    icon: SiGoogleplay,
    name: "Google Play Books",
    text: "Extends your book's reach across Android devices and the web.",
  },
  
  {
    icon: SiApple,
    name: "Apple Books",
    text: "Puts your eBook in front of readers directly through Apple's dedicated reading app.",
  },
];

const relatedServices = [
  { name: "eBook Cover Design", href: "/ebook-cover-design" },
  { name: "Digital Growth", href: "/digital-marketing" },
  { name: "Web Design", href: "/web-design" },
];

const faqs = [
  {
    question: "I've never published a book before. Can you still help me?",
    answer:
      "Yes, and you're not alone. Many of the authors we work with are publishing for the first time. We guide you through manuscript preparation, editing, formatting, and publishing setup, so the whole process feels manageable rather than overwhelming.",
  },
  {
    question: "Can you help me publish on Amazon KDP?",
    answer:
      "Yes. We provide Amazon KDP publishing support, including preparing your manuscript and cover files and walking you through the upload and listing setup, so your book meets Amazon's publishing requirements the first time.",
  },
  {
    question: "What does eBook formatting actually involve?",
    answer:
      "It's the process of structuring your manuscript with proper headings, spacing, and chapter breaks so it displays correctly on Kindle and other digital readers, giving readers a clean, professional experience regardless of the device they're using.",
  },
  {
    question: "Do you also design the book cover?",
    answer:
      "Cover design support is part of our eBook publishing service. If you'd like a closer look at our cover design work specifically, our dedicated Ebook Cover Design page has examples and details.",
  },
  {
    question: "Can you help publish my book on platforms besides Amazon?",
    answer:
      "Yes. Our multi-platform publishing support covers preparing your eBook for other marketplaces, including Apple Books, Kobo, Google Play Books, Barnes & Noble Press, and wider distribution through IngramSpark.",
  },
  {
    question: "What does the publishing process with Optivax Global actually look like?",
    answer:
      "It starts with a manuscript review, then moves through editing and preparation, formatting and design, and publishing setup on your chosen platforms. Once your book is live, we stay involved to support your launch.",
  },
];

const EbookPublishing = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const goToContact = () =>
    navigate("/contact", { state: { service: "eBook Publishing" } });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "eBook Publishing Services",
    provider: {
      "@type": "Organization",
      name: "Optivax Global",
      url: "https://optivaxglobal.com/",
    },
    areaServed: "Worldwide",
    url: "https://optivaxglobal.com/ebook-publishing",
    description:
      "Professional eBook publishing services including manuscript preparation, formatting, cover design, publishing support and digital publishing guidance.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>eBook Publishing Services | Optivax Global</title>
        <meta
          name="description"
          content="Professional eBook publishing services including manuscript preparation, formatting, cover design, publishing support and digital publishing guidance."
        />
        <link rel="canonical" href="https://optivaxglobal.com/ebook-publishing" />

        <meta property="og:title" content="eBook Publishing Services | Optivax Global" />
        <meta
          property="og:description"
          content="Professional eBook publishing services including manuscript preparation, formatting, cover design, publishing support and digital publishing guidance."
        />
        <meta property="og:url" content="https://optivaxglobal.com/ebook-publishing" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-[#0C0D0D] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-[#031426]">
          <AnimatedHeroBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/55 to-[#031426]/75" />

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
                eBook Publishing Services
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Get Your eBook 
                <span className="block text-accent-purple">
                  Published Professionally
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-6">
                Whether you're finishing your first manuscript or preparing
                your next title, we handle the editing, formatting, cover
                coordination, and platform setup that turn a finished draft
                into a polished, ready-to-sell eBook.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {trustPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <span
                      key={point.text}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300"
                    >
                      <Icon className="w-3.5 h-3.5 text-accent-purple" />
                      {point.text}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button
                  onClick={goToContact}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-7 py-4 rounded-full font-bold transition-all duration-300 group shadow-lg shadow-[#1BBCEF]/20"
                >
                  Start Your Publishing Project
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

              <p className="text-sm text-gray-500">
                No pressure, no obligation  we'll walk you through the
                process before you commit to anything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">At a Glance</h2>

              <div className="grid gap-4">
                {[
                  "Manuscript preparation & review",
                  "Professional editing & proofreading",
                  "Kindle-ready eBook formatting",
                  "Cover design support",
                  "Amazon KDP publishing support",
                  "Metadata & category guidance",
                  "Multi-platform publishing support",
                  "Launch support",
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

        

        {/* WHAT'S INCLUDED */}
        <SectionAnimator>
          <section id="whats-included" className="py-20 border-t border-white/10 bg-[#0C0D0D] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-12">
                <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.2em] mb-4">
                  Service Breakdown
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                  What's Included in eBook Publishing
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Every part of our eBook Publishing service works together
                  to take your manuscript from draft to a market-ready
                  eBook.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {included.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="bg-white/[0.04] p-7 rounded-3xl border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-lg font-bold mb-3">{item.title}</h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </SectionAnimator>

        {/* PROCESS */}
        <SectionAnimator>
          <section className="py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-14">
                <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.2em] mb-4">
                  Our Process
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                  How Our eBook Publishing Process Works
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  A clear, step-by-step process that takes your manuscript
                  from first review to a published, market-ready eBook.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {processSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.step}
                      className="relative bg-white/[0.04] p-6 rounded-3xl border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                          <Icon size={20} />
                        </div>

                        <span className="text-3xl font-extrabold text-accent-purple/30">
                          {step.step}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </SectionAnimator>

        {/* PUBLISHING PLATFORMS */}
        <SectionAnimator>
          <section className="py-20 border-t border-white/10 bg-[#0C0D0D]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-10">
                <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.2em] mb-4">
                  Where Your Book Can Reach Readers
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                  Publishing Platforms
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  We help prepare and guide your eBook for publishing on
                  leading digital marketplaces and distribution networks,
                  including:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                {platforms.map((platform) => {
                  const Icon = platform.icon;

                  return (
                    <div
                      key={platform.name}
                      className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-accent-purple/40 hover:bg-white/[0.07] transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-4">
                        <Icon size={20} />
                      </div>

                      <h3 className="text-gray-100 font-bold text-base mb-2">
                        {platform.name}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {platform.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-gray-500 text-sm max-w-3xl leading-relaxed">
                Optivax Global provides independent publishing preparation
                and support services. We are not officially affiliated with
                or endorsed by Amazon, Apple, Kobo, Google, Barnes &amp;
                Noble, or IngramSpark.
              </p>
            </div>
          </section>
        </SectionAnimator>

        {/* WHY CHOOSE US */}
        <SectionAnimator>
          <section className="py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-12">
                <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.2em] mb-4">
                  Why Optivax Global
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                  Why Choose Optivax Global
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Publishing a book involves more than writing it. Here's
                  what authors get when they work with our team.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item) => {
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
                      <p className="text-gray-400 leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </SectionAnimator>


        {/* RELATED SERVICES */}
        <section className="py-16 border-t border-white/10 bg-[#0C0D0D]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
              Related Services
            </h2>

            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="px-5 py-2.5 border border-accent-purple/30 bg-accent-purple/5 rounded-full text-gray-300 text-sm md:text-base transition-all duration-300 hover:bg-accent-purple hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/20"
                >
                  {service.name}
                </Link>
              ))}

              <Link
                to="/services"
                className="px-5 py-2.5 border border-white/10 bg-white/[0.04] rounded-full text-gray-300 text-sm md:text-base transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
        {/* ABOUT THE SERVICE */}
        <SectionAnimator>
          <section className="py-20 border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Take Your Manuscript From Draft to Published eBook
              </h2>

              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  A great book deserves more than a good manuscript. It needs
                  the right formatting, a cover that fits its genre, and a
                  publishing setup that meets each platform's requirements.
                  That's usually where independent authors get stuck, and
                  it's exactly where we come in.
                </p>

                <p>
                  We work directly with your manuscript at every stage:
                  preparing it for editing, formatting it for digital
                  reading, coordinating your cover design, and setting up
                  your files for Amazon KDP and other platforms, so the
                  finished eBook looks and reads like it came from a
                  professional publishing team.
                </p>
              </div>
            </div>
          </section>
        </SectionAnimator>

        {/* FAQ */}
        <SectionAnimator>
          <section className="py-20 border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6">
              <div className="mb-12">
                <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.2em] mb-4">
                  FAQs
                </span>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
                  eBook Publishing Questions, Answered
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  Answers to the questions authors ask most before starting
                  an eBook publishing project with Optivax Global.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden hover:border-accent-purple/40 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between gap-5 text-left px-6 md:px-8 py-6"
                      aria-expanded={openIndex === index}
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
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionAnimator>

        {/* FINAL CTA */}
        <section className="relative py-20 border-t border-white/10 text-center overflow-hidden bg-[#031426]">
          <AnimatedCtaBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/30 via-[#031426]/55 to-[#031426]/80" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Publish Your eBook?
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Share your manuscript with us and let's turn it into a
              professionally prepared, published, market-ready eBook.
            </p>

            <button
              onClick={goToContact}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#1BBCEF]/20"
            >
              Start Your Publishing Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default EbookPublishing;
