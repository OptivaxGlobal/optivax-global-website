import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, Home, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

      <section className="min-h-screen bg-[#0C0D0D] text-white flex items-center justify-center px-6 py-28">
        <div className="max-w-4xl w-full text-center relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-purple/20 blur-3xl rounded-full"></div>

          <div className="relative bg-[#1E1E2A]/90 border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-transparent"></div>

            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto rounded-full bg-accent-purple/15 border border-accent-purple/40 flex items-center justify-center mb-8 animate-pulse">
                <CheckCircle2 className="w-12 h-12 text-accent-purple" />
              </div>

              <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
                Request Submitted
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Thank You for
                <span className="block text-accent-purple">
                  Contacting Us
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Your project request has been received successfully. Our team
                will review your details and contact you shortly with the next
                steps.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto text-left">
                <div
  onClick={() => navigate("/#testimonials")}
  className="cursor-pointer bg-[#0C0D0D]/25 border border-white/10 rounded-2xl p-5 hover:border-accent-purple/40 transition hover:scale-105"
>
  <h3 className="font-bold text-white mb-2">1. Review</h3>
  <p className="text-sm text-gray-400">
    We review your project details and selected service.
  </p>
</div>

                <div
  onClick={() => navigate("/contact")}
  className="cursor-pointer bg-[#0C0D0D]/25 border border-white/10 rounded-2xl p-5 hover:border-accent-purple/40 transition hover:scale-105"
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
                  className="group inline-flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white px-7 py-4 rounded-full font-bold transition hover:scale-105"
                >
                  Back to Home
                  <Home className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/13074301006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-purple/40 text-white px-7 py-4 rounded-full font-bold transition hover:scale-105"
                >
                  Chat on WhatsApp
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>

                <button
                  onClick={() => navigate("/#services")}
                  className="group inline-flex items-center justify-center gap-2 bg-[#0C0D0D]/25 hover:bg-[#0C0D0D]/40 border border-white/10 hover:border-accent-purple/40 text-white px-7 py-4 rounded-full font-bold transition hover:scale-105"
                >
                  View Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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