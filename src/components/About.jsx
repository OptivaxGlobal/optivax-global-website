import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import AnimatedAboutBackground from '@/components/AnimatedAboutBackground';

const About = () => {
  const strengths = [
    'Business-focused digital strategy',
    'Modern design with clean user experience',
    'SEO-ready website structure',
    'Sales-oriented content and conversion flow'
  ];

  const process = [
    {
      icon: Target,
      title: 'Strategy First',
      description:
        'We understand your business, audience, competitors, and goals before starting any design or marketing work.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Execution',
      description:
        'We turn ideas into professional visuals, websites, app interfaces, and brand assets that look premium and feel trustworthy.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description:
        'Our work is designed to improve visibility, increase engagement, generate leads, and support long-term business growth.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0C0D0D] overflow-hidden">
      <AnimatedAboutBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Optivax Global creative digital agency team working on website design and branding projects"
                src="https://horizons-cdn.hostinger.com/c43e6596-ab28-43b9-ad53-b1a7341229e7/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-[#0C0D0D]/50 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                <p className="text-accent-purple font-semibold mb-1">
                  Optivax Global
                </p>
                <p className="text-white text-lg font-bold">
                  Digital solutions built for visibility, trust, and sales.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
              About Optivax Global
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
              We Build Digital Brands That
              <span className="block text-accent-purple">
                Look Better & Sell Better
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              Optivax Global is a professional digital service provider helping
              startups, authors, entrepreneurs, and businesses grow online through
              website design, Logo & Branding, app UI/UX, ebook cover design,
              branding, and digital marketing.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-accent-purple/40 hover:bg-white/10 transition-all duration-300"
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
              From Idea to Professional Digital Presence
            </h2>

            <p className="text-lg text-gray-400 mt-5 leading-relaxed">
              We follow a clear process to make sure every project is strategic,
              visually strong, user-friendly, and ready for business growth.
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
                  className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-accent-purple/40 hover:bg-white/10 transition-all duration-300"
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