import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiThreadsFill } from "react-icons/ri";

import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const location = useLocation();

  const [preselectedService, setPreselectedService] = useState("");

  const normalizeServiceName = (serviceName) => {
    if (!serviceName) return "";

    const serviceMap = {
      "Brand Design": "Brand Design",
      "Logo Design": "Logo Design",
      "UI UX Design": "UI UX Design",
      "UI/UX Design": "UI UX Design",
      "Web Design": "Web Design",
      "Ebook Cover": "Ebook Cover Design",
      "Ebook Cover Design": "Ebook Cover Design",
      "eBook Publishing": "eBook Publishing",

      // Legacy/retired service query params mapped to a neutral option so
      // an old link never displays a retired or deprioritized service as current.
      "Brochure Design": "Other Design Project",
      "Graphics Design": "Other Design Project",
      "Mobile App Design": "Other Design Project",
      "Mobile App Development": "Other Design Project",
      "Flyer Design": "Other Design Project",
      "Stationary Design": "Other Design Project",
      "Web Development": "Other Design Project",
      Animation: "Other Design Project",
      "Animation Services": "Other Design Project",
      "Brand Management": "Other Design Project",
      "Content Management": "Other Design Project",
      "Content Management System": "Other Design Project",
      "Digital Marketing": "Other Design Project",
      "Digital Growth": "Other Design Project",
      "Email Marketing": "Other Design Project",
      "Email Engagement": "Other Design Project",
      "Email Communication Strategy": "Other Design Project",
      "Pay Per Click": "Other Design Project",
      "Pay Per Click (PPC)": "Other Design Project",
      "Paid Search Support": "Other Design Project",
      "Search Engine Marketing": "Other Design Project",
      "Search Visibility Strategy": "Other Design Project",
      "Search Engine Optimization": "Other Design Project",
      "Search Engine Optimization (SEO)": "Other Design Project",
      "Search Visibility Optimization": "Other Design Project",
      "Social Media Marketing": "Other Design Project",
      "Social Media Growth": "Other Design Project",
      "Social Media Management": "Other Design Project",
      "Corporate Presentation": "Other Design Project",
      "Corporate Presentation Design": "Other Design Project",
    };

    return serviceMap[serviceName] || serviceName;
  };

  const socialLinks = [
    {
      label: "Facebook",
      icon: <FaFacebookF size={16} />,
      link: "https://www.facebook.com/OptivaxGlobalSolution/",
      hover:
        "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={16} />,
      link: "https://www.instagram.com/optivaxglobal/",
      hover:
        "hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:border-[#d6249f] hover:text-white",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn size={16} />,
      link: "https://www.linkedin.com/company/115777328/",
      hover:
        "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
    },
    {
      label: "YouTube",
      icon: <FaYoutube size={16} />,
      link: "https://www.youtube.com/@OptivaxGlobal",
      hover:
        "hover:bg-[#CC0000] hover:border-[#CC0000] hover:text-white",
    },
    {
      label: "Pinterest",
      icon: <FaPinterestP size={16} />,
      link: "https://www.pinterest.com/optivaxglobal/",
      hover:
        "hover:bg-[#E60023] hover:border-[#E60023] hover:text-white",
    },
    {
      label: "TikTok",
      icon: <FaTiktok size={16} />,
      link: "https://www.tiktok.com/@optivaxglobal",
      hover:
        "hover:bg-black hover:border-[#25F4EE] hover:text-white",
    },
    {
      label: "X",
      icon: <FaXTwitter size={16} />,
      link: "https://x.com/OptivaxGlobal",
      hover:
        "hover:bg-black hover:border-white hover:text-white",
    },
    {
      label: "Threads",
      icon: <RiThreadsFill size={16} />,
      link: "https://www.threads.net/@optivaxglobal",
      hover:
        "hover:bg-black hover:border-white hover:text-white",
    },
  ];

  useEffect(() => {
    if (location.state?.service) {
      const normalizedService = normalizeServiceName(location.state.service);
      setPreselectedService(normalizedService);
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>Contact Optivax Global | Start Your Design Project</title>

        <meta
          name="description"
          content="Contact Optivax Global for custom website design, UI/UX design, logo branding, and professional eBook design services."
        />
      </Helmet>

      <section className="relative text-white py-28 overflow-hidden">
        <AnimatedBackground variant="contact" overlay />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Start Your
                <span className="block text-accent-purple">
                  Design Project
                </span>
              </h1>

              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Have a website, UI/UX, branding, or eBook design project in
                mind? Share your requirements with Optivax Global and our
                team will discuss the design, scope, and next steps with
                you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-accent-purple" />
                  <a
                    href="mailto:marketing@optivaxglobal.com?subject=Project%20Inquiry%20-%20Optivax%20Global"
                    className="hover:text-accent-purple transition-colors"
                  >
                    marketing@optivaxglobal.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-accent-purple" />
                  <a
                    href="tel:+13074301006"
                    className="hover:text-accent-purple transition-colors"
                  >
                    +1 307-430-1006
                  </a>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin size={18} className="text-accent-purple mt-1" />
                  <span>30 N Gould St ste r Sheridan, WY 82801-6317</span>
                </div>

                <div className="pt-8">
                  <p className="text-white font-semibold mb-4">Follow Us</p>

                  <div className="flex flex-wrap items-center gap-3">
  {socialLinks.map((social) => (
    <a
      key={social.label}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow Optivax Global on ${social.label}`}
      className={`shrink-0 w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 ${social.hover}`}
    >
      {social.icon}
    </a>
  ))}
</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-[#1E1E2A]/70 backdrop-blur-xl p-5 md:p-8 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="mb-6">
              <p className="text-accent-purple font-semibold mb-2">
                Our Location
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                Visit Optivax Global
              </h2>

              <p className="text-gray-300 flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-accent-purple mt-1 shrink-0"
                />
                30 N Gould St ste r Sheridan, WY 82801-6317
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 h-[380px] md:h-[450px]">
              <iframe
                title="Optivax Global Location - 30 N Gould St ste r Sheridan, WY 82801-6317"
                src="https://www.google.com/maps?q=30%20N%20Gould%20St%20ste%20r%20Sheridan%2C%20WY%2082801-6317&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;