import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, Home, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "../components/AnimatedHeroBackground";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Thank You | Optivax Global</title>
        <meta
          name="description"
          content="Thank you for contacting Optivax Global. Our team will review your request and contact you soon."
        />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white flex items-center justify-center px-6 py-28">
        <AnimatedHeroBackground />

        <div className="absolute inset-0 bg-[#020817]/70 z-[1]" />
        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-[#1BBCEF]/10 rounded-full blur-[120px] z-[1]" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-[#004495]/20 rounded-full blur-[120px] z-[1]" />

        <div className="relative z-10 max-w-4xl w-full text-center">
          <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl shadow-[#1BBCEF]/10 overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1BBCEF]/10 via-transparent to-[#004495]/10" />

            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#1BBCEF]/15 border border-[#1BBCEF]/40 flex items-center justify-center mb-8 animate-pulse">
                <CheckCircle2 className="w-12 h-12 text-[#1BBCEF]" />
              </div>

              <span className="inline-block text-[#1BBCEF] font-semibold uppercase tracking-[0.25em] mb-4">
                Request Submitted
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Thank You for
                <span className="block bg-gradient-to-r from-[#1BBCEF] to-[#004495] bg-clip-text text-transparent">
                  Contacting Us
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Your project request has been received successfully. Our team
                will review your details and contact you shortly with the next
                steps.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto text-left">
                <div
                  onClick={() => navigate("/#testimonials")}
                  className="cursor-pointer bg-[#020817]/45 border border-white/10 rounded-2xl p-5 hover:border-[#1BBCEF]/50 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-bold text-white mb-2">1. Review</h3>
                  <p className="text-sm text-gray-400">
                    We review your project details and selected service.
                  </p>
                </div>

                <div
                  onClick={() => navigate("/contact")}
                  className="cursor-pointer bg-[#020817]/45 border border-white/10 rounded-2xl p-5 hover:border-[#1BBCEF]/50 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-bold text-white mb-2">2. Contact</h3>
                  <p className="text-sm text-gray-400">
                    Our team contacts you to discuss goals and requirements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/")}
                  className="group bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-[#E9FBFF] px-7 py-4 rounded-full flex items-center justify-center gap-2 font-semibold shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Back to Home
                  <Home className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/13074301006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden border border-[#1BBCEF]/30 bg-white/5 backdrop-blur-md text-white px-7 py-4 rounded-full flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:border-[#1BBCEF]"
                >
                  <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-l from-[#1BBCEF]/20 to-transparent" />
                  <span className="relative z-10">Chat on WhatsApp</span>
                  <MessageCircle className="relative z-10 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>

                <button
                  onClick={() => navigate("/#services")}
                  className="group relative overflow-hidden border border-[#1BBCEF]/30 bg-white/5 backdrop-blur-md text-white px-7 py-4 rounded-full flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:border-[#1BBCEF]"
                >
                  <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-l from-[#1BBCEF]/20 to-transparent" />
                  <span className="relative z-10">View Services</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;