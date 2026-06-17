import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import supabase from "@/lib/supabase";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";

import AnimatedContactBackground from "@/components/AnimatedContactBackground";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");

  const dropdownRef = useRef(null);

  const serviceOptions = [
    "Web Design",
    "Web Development",
    "Logo Design",
    "Brand Design",
    "Animation",
    "Graphics Design",
    "Brochure Design",
    "Flyer Design",
    "Stationary Design",
    "Mobile App Development",
    "Mobile App Design",
    "UI UX Design",
    "Brand Management",
    "Content Management System",
    "Digital Marketing",
    "Email Marketing",
    "Pay Per Click (PPC)",
    "Search Engine Marketing",
    "Search Engine Optimization (SEO)",
    "Social Media Marketing",
    "Ebook Cover Design",
    "Corporate Presentation",
  ];

  const socialLinks = [
    {
      label: "Facebook",
      icon: <FaFacebookF size={16} />,
      link: "https://www.facebook.com/OptivaxGlobalSolution/",
      className:
        "bg-[#1877F2] border-[#1877F2] text-white hover:shadow-lg hover:shadow-[#1877F2]/40 hover:-translate-y-1",
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={16} />,
      link: "https://www.instagram.com/optivaxglobal/",
      className:
        "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] border-[#d6249f] text-white hover:shadow-lg hover:shadow-[#d6249f]/40 hover:-translate-y-1",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn size={16} />,
      link: "https://www.linkedin.com/company/115777328/",
      className:
        "bg-[#0A66C2] border-[#0A66C2] text-white hover:shadow-lg hover:shadow-[#0A66C2]/40 hover:-translate-y-1",
    },
    {
      label: "YouTube",
      icon: <FaYoutube size={16} />,
      link: "https://www.youtube.com/@OptivaxGlobal",
      className:
        "bg-[#CC0000] border-[#CC0000] text-white hover:bg-[#B00000] hover:border-[#B00000] hover:shadow-lg hover:shadow-[#CC0000]/40 hover:-translate-y-1",
    },
    {
      label: "Pinterest",
      icon: <FaPinterestP size={16} />,
      link: "https://www.pinterest.com/optivaxglobal/",
      className:
        "bg-[#E60023] border-[#E60023] text-white hover:shadow-lg hover:shadow-[#E60023]/40 hover:-translate-y-1",
    },
    {
      label: "TikTok",
      icon: (
        <span className="relative flex items-center justify-center w-4 h-4 leading-none">
          <FaTiktok
            size={15}
            className="absolute text-[#25F4EE] -translate-x-[1px] translate-y-[1px]"
          />
          <FaTiktok
            size={15}
            className="absolute text-[#FE2C55] translate-x-[1px] -translate-y-[1px]"
          />
          <FaTiktok size={15} className="relative text-white" />
        </span>
      ),
      link: "https://www.tiktok.com/@optivaxglobal",
      className:
        "bg-black border-[#25F4EE] text-white hover:border-[#FE2C55] hover:shadow-lg hover:shadow-[#25F4EE]/30 hover:-translate-y-1",
    },
    {
      label: "Threads",
      icon: <RiThreadsFill size={16} />,
      link: "https://www.threads.net/@optivaxglobal",
      className:
        "bg-black border-white/40 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1",
    },
  ];

  const filteredServiceOptions = serviceOptions.filter((option) =>
    option.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const normalizeServiceName = (serviceName) => {
    if (!serviceName) return "";

    const serviceMap = {
      "Brand Design": "Brand Design",
      "Brochure Design": "Brochure Design",
      "Graphics Design": "Graphics Design",
      "Logo Design": "Logo Design",
      "Mobile App Design": "Mobile App Design",
      "Mobile App Development": "Mobile App Development",
      "Flyer Design": "Flyer Design",
      "Stationary Design": "Stationary Design",
      "UI UX Design": "UI UX Design",
      "UI/UX Design": "UI UX Design",
      "Web Design": "Web Design",
      "Web Development": "Web Development",
      Animation: "Animation",
      "Animation Services": "Animation",
      "Brand Management": "Brand Management",
      "Content Management": "Content Management System",
      "Content Management System": "Content Management System",
      "Digital Marketing": "Digital Marketing",
      "Email Marketing": "Email Marketing",
      "Pay Per Click": "Pay Per Click (PPC)",
      "Pay Per Click (PPC)": "Pay Per Click (PPC)",
      "Search Engine Marketing": "Search Engine Marketing",
      "Search Engine Optimization": "Search Engine Optimization (SEO)",
      "Search Engine Optimization (SEO)": "Search Engine Optimization (SEO)",
      "Social Media Marketing": "Social Media Marketing",
      "Ebook Cover": "Ebook Cover Design",
      "Ebook Cover Design": "Ebook Cover Design",
      "Corporate Presentation": "Corporate Presentation",
      "Corporate Presentation Design": "Corporate Presentation",
    };

    return serviceMap[serviceName] || serviceName;
  };

  useEffect(() => {
    if (location.state?.service) {
      const normalizedService = normalizeServiceName(location.state.service);

      setForm((prev) => ({
        ...prev,
        service: normalizedService,
      }));

      setServicesOpen(false);
      setServiceSearch("");
    }
  }, [location.state]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
        setServiceSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneDigits = (form.phone || "").replace(/\D/g, "");

    if (!phoneDigits || phoneDigits.length < 7) {
      alert("Please enter a valid phone number");
      return;
    }

    if (!form.service) {
      alert("Please select a service");
      setServicesOpen(true);
      return;
    }

    setLoading(true);

    const finalFormData = {
      ...form,
      phone: `+${phoneDigits}`,
    };

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([finalFormData]);

      if (error) {
        console.error("Supabase Error:", error.message);
      }

      const web3FormData = new FormData();

      web3FormData.append(
        "access_key",
        "85750fd3-5c99-4b7a-9887-e0d21806b53a"
      );

      web3FormData.append("name", finalFormData.name);
      web3FormData.append("email", finalFormData.email);
      web3FormData.append("phone", finalFormData.phone);
      web3FormData.append("service", finalFormData.service);
      web3FormData.append("message", finalFormData.message);

      web3FormData.append(
        "subject",
        "New Contact Form Submission - Optivax Global"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const result = await response.json();

      if (result.success) {
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setServiceSearch("");
        navigate("/thank-you");
      } else {
        alert("Form submit failed ❌");
      }
    } catch (err) {
      console.error("Submission Error:", err.message);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Optivax Global | Get a Free Consultation</title>

        <meta
          name="description"
          content="Contact Optivax Global for website design, Logo & Branding, app UI/UX, ebook cover design and digital marketing services."
        />
      </Helmet>

      <style>
        {`
          .optivax-phone.react-tel-input {
            width: 100% !important;
            font-family: inherit !important;
            position: relative !important;
            z-index: 100 !important;
          }

          .optivax-phone .form-control {
            width: 100% !important;
            height: 58px !important;
            background: rgba(12, 13, 13, 0.35) !important;
            color: #ffffff !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 12px !important;
            padding-left: 62px !important;
            font-size: 15px !important;
            outline: none !important;
          }

          .optivax-phone .form-control::placeholder {
            color: #9ca3af !important;
          }

          .optivax-phone .form-control:focus {
            border-color: rgba(27, 188, 239, 0.6) !important;
            box-shadow: 0 0 0 4px rgba(27, 188, 239, 0.12) !important;
          }

          .optivax-phone .flag-dropdown {
            background: #10131f !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 12px 0 0 12px !important;
            z-index: 99999 !important;
          }

          .optivax-phone .selected-flag {
            width: 58px !important;
            height: 58px !important;
            background: transparent !important;
            border-radius: 12px 0 0 12px !important;
            z-index: 2 !important;
          }

          .optivax-phone .selected-flag:hover,
          .optivax-phone .selected-flag:focus,
          .optivax-phone .flag-dropdown.open {
            background: rgba(27, 188, 239, 0.12) !important;
          }

          .optivax-phone .selected-flag .arrow {
            border-top-color: #1bbcef !important;
          }

          .optivax-phone .selected-flag .arrow.up {
            border-bottom-color: #1bbcef !important;
          }

          .optivax-phone-dropdown.country-list {
            position: absolute !important;
            top: 64px !important;
            left: 0 !important;
            width: min(380px, calc(100vw - 48px)) !important;
            max-height: 320px !important;
            background: #031c33 !important;
            color: #ffffff !important;
            border: 1px solid rgba(27, 188, 239, 0.25) !important;
            border-radius: 18px !important;
            margin: 0 !important;
            padding: 0 0 8px 0 !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55) !important;
            z-index: 999999 !important;
          }

          .optivax-phone-dropdown .search {
            position: sticky !important;
            top: 0 !important;
            z-index: 999999 !important;
            display: block !important;
            background: #031c33 !important;
            padding: 14px 14px 12px 14px !important;
            margin: 0 !important;
            border-radius: 18px 18px 0 0 !important;
            box-shadow: 0 12px 18px rgba(3, 28, 51, 0.98) !important;
            overflow: hidden !important;
            isolation: isolate !important;
          }

          .optivax-phone-dropdown .search::before {
            content: "" !important;
            position: absolute !important;
            inset: 0 !important;
            background: #031c33 !important;
            z-index: -1 !important;
          }

          .optivax-phone-dropdown .search-box {
            position: relative !important;
            z-index: 2 !important;
            width: 100% !important;
            height: 44px !important;
            background: #10131f !important;
            color: #ffffff !important;
            border: 1px solid rgba(27, 188, 239, 0.45) !important;
            border-radius: 10px !important;
            padding: 10px 12px !important;
            margin: 0 !important;
            outline: none !important;
            box-shadow: none !important;
          }

          .optivax-phone-dropdown .search-box::placeholder {
            color: #9ca3af !important;
          }

          .optivax-phone-dropdown .country {
            position: relative !important;
            z-index: 1 !important;
            padding: 12px 14px !important;
            color: #e5e7eb !important;
            background: transparent !important;
            margin: 0 !important;
          }

          .optivax-phone-dropdown .country:hover,
          .optivax-phone-dropdown .country.highlight {
            background: rgba(27, 188, 239, 0.15) !important;
            color: #ffffff !important;
          }

          .optivax-phone-dropdown .country-name {
            color: #ffffff !important;
          }

          .optivax-phone-dropdown .dial-code {
            color: #1bbcef !important;
          }

          .optivax-phone-dropdown::-webkit-scrollbar,
          .custom-service-scroll::-webkit-scrollbar {
            width: 8px;
          }

          .optivax-phone-dropdown::-webkit-scrollbar-track,
          .custom-service-scroll::-webkit-scrollbar-track {
            background: #061120;
            border-radius: 20px;
          }

          .optivax-phone-dropdown::-webkit-scrollbar-thumb,
          .custom-service-scroll::-webkit-scrollbar-thumb {
            background: #1bbcef;
            border-radius: 20px;
          }

          .optivax-phone-dropdown::-webkit-scrollbar-thumb:hover,
          .custom-service-scroll::-webkit-scrollbar-thumb:hover {
            background: #159bd1;
          }
        `}
      </style>

      <section className="relative bg-[#0C0D0D] text-white py-28 overflow-hidden">
        <AnimatedContactBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Let’s Build Something Your
                <span className="block text-accent-purple">
                  Customers Will Remember
                </span>
              </h1>

              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Share your vision with us. From websites and branding to UI/UX
                and marketing, we create digital solutions designed to help
                businesses grow with confidence.
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
                        className={`shrink-0 overflow-hidden w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.className}`}
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
              className="bg-[#1E1E2A]/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6">
                Get a Free Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 outline-none focus:border-accent-purple/50 transition"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 outline-none focus:border-accent-purple/50 transition"
                />

                <PhoneInput
                  country="us"
                  value={form.phone}
                  onChange={(phone) =>
                    setForm((prev) => ({ ...prev, phone }))
                  }
                  enableSearch={true}
                  disableSearchIcon={true}
                  searchPlaceholder="Search country"
                  dropdownClass="optivax-phone-dropdown"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  specialLabel=""
                  placeholder="Your Phone Number"
                  containerClass="optivax-phone"
                  countryCodeEditable={false}
                />

                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesOpen((prev) => !prev);
                      setServiceSearch("");
                    }}
                    className="w-full p-4 rounded-2xl bg-[#10131F] border border-white/10 text-left text-white outline-none focus:border-[#1BBCEF] focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)] hover:border-white/20 transition-all duration-300 flex items-center justify-between"
                  >
                    <span
                      className={form.service ? "text-white" : "text-gray-400"}
                    >
                      {form.service || "Select Service"}
                    </span>

                    <span className="text-[#1BBCEF] text-sm">
                      {servicesOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {servicesOpen && (
                    <div className="mt-2 rounded-3xl bg-[#031C33] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] py-3">
                      <div className="px-3 pb-3">
                        <input
                          type="text"
                          value={serviceSearch}
                          onChange={(e) => setServiceSearch(e.target.value)}
                          placeholder="Search service..."
                          autoComplete="off"
                          className="w-full px-4 py-3 rounded-xl bg-[#10131F] border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-[#1BBCEF] focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)] transition-all"
                        />
                      </div>

                      <div className="max-h-56 overflow-y-auto custom-service-scroll">
                        {filteredServiceOptions.length > 0 ? (
                          filteredServiceOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setForm((prev) => ({
                                  ...prev,
                                  service: option,
                                }));
                                setServicesOpen(false);
                                setServiceSearch("");
                              }}
                              className="w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200"
                            >
                              {option}
                            </button>
                          ))
                        ) : (
                          <p className="px-4 py-3 text-gray-400 text-sm">
                            No service found
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 outline-none focus:border-accent-purple/50 transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-purple py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-accent-purple/90 transition-all duration-300 shadow-lg shadow-accent-purple/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
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