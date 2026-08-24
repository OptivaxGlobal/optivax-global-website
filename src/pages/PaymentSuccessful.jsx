import React from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2, Home, MessageCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Payment Successful | Optivax Global</title>
        <meta
          name="description"
          content="Your payment confirmation has been submitted successfully to Optivax Global."
        />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white flex items-center justify-center px-6 py-28">
        <AnimatedHeroBackground />

        <div className="absolute inset-0 bg-[#020817]/70 z-[1]" />

        <div className="relative z-10 max-w-4xl w-full text-center">
          <div className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-14 shadow-2xl shadow-[#1BBCEF]/10 overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1BBCEF]/10 via-transparent to-[#004495]/10" />

            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#1BBCEF]/15 border border-[#1BBCEF]/40 flex items-center justify-center mb-8 animate-pulse">
                <CheckCircle2 className="w-12 h-12 text-[#1BBCEF]" />
              </div>

              <span className="inline-block text-[#1BBCEF] font-semibold uppercase tracking-[0.25em] mb-4">
                Payment Submitted
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Payment Confirmation
                <span className="block bg-gradient-to-r from-[#1BBCEF] to-[#004495] bg-clip-text text-transparent">
                  Received Successfully
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Thank you. Your payment details and screenshot have been
                submitted successfully. Our team will verify your payment and
                contact you shortly.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto text-left">
                <div className="bg-[#020817]/45 border border-white/10 rounded-2xl p-5">
                  <h3 className="font-bold text-white mb-2">1. Verification</h3>
                  <p className="text-sm text-gray-400">
                    Our billing team will review your payment screenshot and
                    submitted details.
                  </p>
                </div>

                <div className="bg-[#020817]/45 border border-white/10 rounded-2xl p-5">
                  <h3 className="font-bold text-white mb-2">2. Confirmation</h3>
                  <p className="text-sm text-gray-400">
                    You will receive confirmation from our team after payment
                    verification.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/")}
                  className="bg-gradient-to-r from-[#1BBCEF] to-[#004495] text-white px-7 py-4 rounded-full flex items-center justify-center gap-2 font-semibold"
                >
                  Back to Home
                  <Home className="w-5 h-5" />
                </button>

                <button
                  onClick={() => navigate("/payment-form")}
                  className="border border-[#1BBCEF]/30 bg-white/5 text-white px-7 py-4 rounded-full flex items-center justify-center gap-2 font-semibold"
                >
                  Submit Another Payment
                  <FileText className="w-5 h-5" />
                </button>

                <a
                  href="https://wa.me/13074301006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1BBCEF]/30 bg-white/5 text-white px-7 py-4 rounded-full flex items-center justify-center gap-2 font-semibold"
                >
                  Chat on WhatsApp
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSuccessful;