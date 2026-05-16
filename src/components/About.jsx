import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import AnimatedAboutBackground from "@/components/AnimatedAboutBackground";
import AboutImage from "@/assets/about-images/001.webp";

const About = () => {
  const strengths = [
    "Business digital strategies",
    "A modern, easy to use design",
    "SEO-optimized website structure",
    "Conversion Layouts & Content",
  ];

  const process = [
    {
      icon: Target,
      title: "First Strategy",
      description:
        "We take the time to understand your business, your audience, your competitors and your goals before starting any project. This enables us to build solutions that align with your vision and growth strategies.",
    },
    {
      icon: Lightbulb,
      title: "Creative Execution",
      description:
        "We turn ideas into finished websites, modern brand visuals, app interfaces and digital assets. Our work is professional, trustworthy and looks strong visually.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description:
        "We plan each project with growth in mind to increase visibility and engagement, to generate quality leads and to build a stronger online presence for your brand.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-[#0C0D0D] overflow-hidden"
    >
      <AnimatedAboutBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
              <img
  className="w-full h-full object-cover"
  alt="Optivax Global creative team working on projects for modern website design, branding and digital growth."
  src={AboutImage}
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-[#0C0D0D]/50 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <p className="text-accent-purple font-semibold mb-1">
                  Optivax Global
                </p>

                <p className="text-white text-lg font-bold">
                  We build digital solutions that help brands grow, build trust
                  and stand out.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
              Optivax Global About Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
              We Create Digital 
              <span className="block text-accent-purple">
               Experiences to Help Brands Grow
            </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Optivax Global helps businesses, startups and modern brands to
              build a stronger online presence with professional website design,
              branding, UI/UX design, SEO, publishing support and results-driven
              digital marketing.
              <br />
              <br />
              We’re all about creating digital experiences that are modern and
              professional, and support businesses to build stronger
              relationships with their audience and grow with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-2xl p-4 hover:border-accent-purple/40 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-purple mt-1 shrink-0" />

                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="max-w-4xl mb-12">
            <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
              Our Process
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Turning Ideas Into Professional
              <span className="block text-accent-purple">
               Digital Experiences
            </span>
            </h2>

            <p className="text-lg text-gray-300 mt-5 leading-relaxed">
              We combine strategy, creativity and user experience to create
              fresh digital solutions that perform and grow your business
              long-term.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.12 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-accent-purple/40 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;