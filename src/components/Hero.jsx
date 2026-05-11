import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

const Hero = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/contact");
  };

  const handleViewWorkClick = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToServices = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedHeroBackground />

      <div className="absolute inset-0 bg-[#020B16]/82"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_32%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/25 via-[#031C33]/65 to-[#020B16]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-purple/10 border border-accent-purple/30 rounded-full mb-7"
          >
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span className="text-sm md:text-base text-[#d8d0ff] font-medium">
              Digital Services Provider for Growing Brands
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.05] text-white tracking-tight"
          >
            Build a Powerful
            <span className="block text-accent-purple">
              Digital Brand That Sells
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Optivax Global helps businesses grow online through high-converting
            websites, strategic branding, app UI/UX design, ebook cover design,
            and results-driven digital marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4 justify-start md:justify-center mb-10 text-gray-200"
          >
            <Link to="/website-design-services" className="flex items-center gap-2 hover:text-accent-purple transition">
              <CheckCircle2 className="w-5 h-5 text-accent-purple" />
              <span>Web Design</span>
            </Link>

            <Link to="/logo-design-services" className="flex items-center gap-2 hover:text-accent-purple transition">
              <CheckCircle2 className="w-5 h-5 text-accent-purple" />
              <span>Logo & Branding</span>
            </Link>

            <Link to="/digital-marketing-services" className="flex items-center gap-2 hover:text-accent-purple transition">
              <CheckCircle2 className="w-5 h-5 text-accent-purple" />
              <span>Digital Marketing</span>
            </Link>

            <Link to="/app-ui-ux-design" className="flex items-center gap-2 hover:text-accent-purple transition">
              <CheckCircle2 className="w-5 h-5 text-accent-purple" />
              <span>App UI/UX</span>
            </Link>

            <Link to="/ebook-cover-design" className="flex items-center gap-2 hover:text-accent-purple transition">
              <CheckCircle2 className="w-5 h-5 text-accent-purple" />
              <span>Ebook Covers</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center"
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-accent-purple hover:bg-accent-purple/90 text-white font-bold px-8 py-6 text-lg rounded-full group shadow-lg shadow-accent-purple/20"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={handleViewWorkClick}
              size="lg"
              className="bg-accent-purple hover:bg-accent-purple/90 text-white font-bold px-8 py-6 text-lg rounded-full group shadow-lg shadow-accent-purple/20"
            >
              View Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.button
            type="button"
            onClick={handleScrollToServices}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 mx-auto hidden md:flex cursor-pointer group"
            aria-label="Scroll to services section"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-accent-purple/40 rounded-full flex items-start justify-center p-2 group-hover:border-accent-purple transition"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-accent-purple rounded-full"
              />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;