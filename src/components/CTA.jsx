import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCtaBackground from "@/components/AnimatedCtaBackground";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/contact");
  };

  return (
    <section
      id="cta"
      className="relative py-32 overflow-hidden border-t border-white/5"
    >
      <AnimatedCtaBackground />

      <div className="absolute inset-0 bg-[#020B16]/82"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_32%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/25 via-[#031C33]/65 to-[#020B16]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-5">
            Start Your Project
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Let’s Build a Brand
            <span className="block text-accent-purple">
              That Grows Your Business
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let’s build a professional website, brand identity, app UI/UX,
            eBook cover, or digital marketing strategy that helps your business
            look premium, earn trust, and generate more leads.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-gray-200">
            {["Free Consultation", "Fast Delivery", "Sales-Focused Design"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-purple" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white font-bold px-10 py-7 text-lg md:text-xl rounded-full group shadow-lg shadow-[#1BBCEF]/25 transition-all duration-300 hover:scale-105"
          >
            Get a Free Consultation
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;