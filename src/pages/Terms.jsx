import React from "react";
import { Helmet } from "react-helmet";
import { FileText, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/siteConfig";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Optivax Global</title>
        <meta
          name="description"
          content="Read Optivax Global's terms of service for using our website and digital services."
        />
        <link rel="canonical" href={`${SITE.website}/terms`} />
      </Helmet>

      <main className="relative bg-[#0C0D0D] text-white min-h-screen pt-32 pb-24 overflow-hidden">
        <AnimatedHeroBackground />

<div className="absolute inset-0 bg-gradient-to-b from-[#031426]/40 via-[#031426]/65 to-[#0C0D0D]/95 z-0" />


        <section className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple mb-6">
              <FileText size={32} />
            </div>

            <span className="text-accent-purple uppercase tracking-[0.25em] font-semibold">
              Legal Information
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-5">
              Terms of Service
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              These Terms of Service explain the rules and conditions for using
              Optivax Global’s website and services.
            </p>

            <p className="text-gray-500 mt-4">Last updated: August 2026</p>
          </div>

          <div className="bg-[#1E1E2A] border border-white/10 rounded-3xl p-8 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">1. Use of Our Website</h2>
              <p className="text-gray-400 leading-relaxed">
                By using this website, you agree to use it lawfully and not
                attempt to damage, misuse, or interfere with our website,
                services, or systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">2. Our Services</h2>
              <p className="text-gray-400 leading-relaxed">
                Optivax Global provides professional digital design,
                development, branding, publishing, and creative services,
                including custom website design and development, UI/UX
                design, mobile app design and development, logo and brand
                design and management, eBook design and publishing, animation,
                graphic and print design, corporate presentation design,
                content management systems, and digital marketing services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">3. Project Requirements</h2>
              <p className="text-gray-400 leading-relaxed">
                Clients are responsible for providing accurate project details,
                content, images, brand assets, and feedback required to complete
                the project successfully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">4. Payments and Revisions</h2>
              <p className="text-gray-400 leading-relaxed">
                Payment terms, delivery timelines, and revision limits may vary
                by project and will be agreed before work begins. Additional
                changes may require extra charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">5. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                Final approved work may be transferred to the client after full
                payment. Optivax Global may showcase completed work in its
                portfolio unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                We aim to provide high-quality services, but we are not liable
                for indirect losses, third-party platform issues, hosting
                problems, or business results outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                7. SMS Communications
              </h2>

              <p className="text-gray-400 leading-relaxed mb-4">
                Optivax Global may offer SMS / text messaging communications
                to users who actively opt in through a clearly labeled,
                standalone consent checkbox on our forms. This checkbox is
                separate from, and not bundled with, your acceptance of
                these Terms of Service. SMS messages are only sent to users
                who provide this active opt-in. Simply providing your phone
                number on a form does not, by itself, constitute consent to
                receive SMS messages from Optivax Global.
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed">
                <li>Message frequency may vary depending on your inquiry or project.</li>
                <li>Message and data rates may apply, depending on your mobile carrier and plan.</li>
                <li>Reply STOP to unsubscribe or cancel at any time.</li>
                <li>Reply HELP for assistance, or contact us using the details below.</li>
                <li>
                  Carriers are not liable for delayed or undelivered
                  messages.
                </li>
              </ul>

              <p className="text-gray-400 leading-relaxed mt-4">
                This SMS consent is given specifically to Optivax Global and
                applies only to messages sent by Optivax Global. It is not
                transferable or assignable to any third party or affiliate,
                and we do not share your SMS opt-in status or consent with
                any third party or affiliate for their own marketing purposes.
              </p>

              <p className="text-gray-400 leading-relaxed mt-4">
                For more information about how we handle your phone number
                and SMS consent, please see our{" "}
                <a
                  href="/privacy-policy"
                  className="text-accent-purple hover:text-white underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">8. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update these Terms from time to time. Continued use of
                our website means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>

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

export default Terms;