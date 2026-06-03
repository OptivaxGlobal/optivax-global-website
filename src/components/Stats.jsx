import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Briefcase, Smile, Clock, Star } from "lucide-react";

const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const steps = 60;
    const increment = to / steps;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;

      if (currentCount >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(to % 1 !== 0 ? Number(currentCount.toFixed(1)) : Math.ceil(currentCount));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const defaultStats = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description:
      "Creative websites, branding, UI/UX, publishing, and marketing projects completed for growing businesses.",
    icon: Briefcase,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description:
      "A client-first process focused on clear communication, quality work, and reliable project delivery.",
    icon: Smile,
  },
  {
    value: 300,
    suffix: "+",
    label: "Design Hours",
    description:
      "Hours invested in creating professional visuals, websites, interfaces, and brand assets.",
    icon: Clock,
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    description:
      "Trusted for clean design, smart strategy, and conversion-focused digital solutions.",
    icon: Star,
  },
];

const Stats = ({ customStats }) => {
  const stats = customStats || defaultStats;
  const isProjectPage = !!customStats;

  return (
    <section id="stats-section" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        {!isProjectPage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
                Our Results
              </span>

              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Digital Results That
                <span className="block text-accent-purple">
                  Build Trust & Growth
                </span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                We focus on meaningful outcomes: stronger brand presence, better
                user engagement, improved credibility, and sales-focused digital
                experiences.
              </p>
            </div>
          </div>
        )}

        {isProjectPage && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Project <span className="text-accent-purple">Impact</span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {stats.map((stat) => {
            const Icon = stat.icon || Star;

            return (
              <div
                key={stat.label}
                className="bg-white/[0.04] p-8 rounded-3xl h-full border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-7">
                  <Icon size={26} />
                </div>

                <div className="text-5xl md:text-6xl font-extrabold text-white mb-5">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {stat.label}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;