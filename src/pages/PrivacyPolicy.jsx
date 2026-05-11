import React from "react";
import { Helmet } from "react-helmet";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Optivax Global</title>
        <meta
          name="description"
          content="Read Optivax Global's privacy policy about how we collect, use, and protect your information."
        />
        <link rel="canonical" href={`${SITE.website}/privacy-policy`} />
      </Helmet>

      <main className="relative bg-[#0C0D0D] text-white min-h-screen pt-32 pb-24 overflow-hidden">
        
        <AnimatedHeroBackground />

        <div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/65 to-[#0C0D0D]/95 z-0" />

        <section className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
              <ShieldCheck size={32} />
            </div>

            <span className="text-accent-purple uppercase tracking-[0.25em] font-semibold">
              Legal Information
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-5">
              Privacy Policy
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              This Privacy Policy explains how Optivax Global collects, uses,
              and protects your information when you visit our website or submit
              a project inquiry.
            </p>

            <p className="text-gray-500 mt-4">Last updated: April 2026</p>
          </div>

          <div className="bg-[#1E1E2A] border border-white/10 rounded-3xl p-8 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed">
                We may collect your name, email address, phone number, selected
                service, project details, and any information you submit through
                our contact form.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed">
                We use your information to respond to inquiries, provide project
                consultations, improve our services, communicate updates, and
                deliver requested digital services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Data Protection</h2>
              <p className="text-gray-400 leading-relaxed">
                We take reasonable measures to protect your information from
                unauthorized access, misuse, loss, or disclosure. However, no
                online system is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Third-Party Services</h2>
              <p className="text-gray-400 leading-relaxed">
                We may use third-party tools such as hosting providers, analytics
                services, form databases, and communication tools to operate our
                website and manage inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Sharing of Information</h2>
              <p className="text-gray-400 leading-relaxed">
                We do not sell your personal information. We may share necessary
                information only with trusted service providers when required to
                complete your request or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Your Rights</h2>
              <p className="text-gray-400 leading-relaxed">
                You may request access, correction, or deletion of your personal
                information by contacting us through the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <a href={`mailto:${SITE.email}`} className="bg-[#0C0D0D]/25 border border-white/10 rounded-2xl p-5 hover:border-accent-purple/40 transition">
                  <Mail className="text-accent-purple mb-3" />
                  <p className="text-gray-300">{SITE.email}</p>
                </a>

                <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="bg-[#0C0D0D]/25 border border-white/10 rounded-2xl p-5 hover:border-accent-purple/40 transition">
                  <Phone className="text-accent-purple mb-3" />
                  <p className="text-gray-300">{SITE.phone}</p>
                </a>

                <div className="bg-[#0C0D0D]/25 border border-white/10 rounded-2xl p-5">
                  <MapPin className="text-accent-purple mb-3" />
                  <p className="text-gray-300">{SITE.location}</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;