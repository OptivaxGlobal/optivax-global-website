import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
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
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.service) {
      setForm((prev) => ({
        ...prev,
        service: location.state.service,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // =========================
      // SUPABASE SAVE
      // =========================
      const { error } = await supabase.from("contact_messages").insert([form]);

      if (error) {
        console.error("Supabase Error:", error.message);
      }

      // =========================
      // WEB3FORMS EMAIL
      // =========================
      const web3FormData = new FormData();

      web3FormData.append(
        "access_key",
        "85750fd3-5c99-4b7a-9887-e0d21806b53a"
      );

      web3FormData.append("name", form.name);
      web3FormData.append("email", form.email);
      web3FormData.append("service", form.service);
      web3FormData.append("message", form.message);

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
          service: "",
          message: "",
        });

        navigate("/thank-you");
      } else {
        alert("Form submit failed ❌");
      }
    } catch (err) {
      console.error("Submission Error:", err.message);
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

      <section className="relative bg-[#0C0D0D] text-white py-28 overflow-hidden">
        {/* Animated Background */}
        <AnimatedContactBackground />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Build Your Next
                <span className="block text-accent-purple">
                  Digital Experience
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
                  marketing@optivaxglobal.com
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-accent-purple" />
                  +1 307-430-1006
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin size={18} className="text-accent-purple mt-1" />

                  <span>30 N Gould St ste r Sheridan, WY 82801-6317</span>
                </div>

                {/* SOCIAL LINKS */}
                <div className="pt-8">
                  <p className="text-white font-semibold mb-4">
                    Connect With Us
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.facebook.com/OptivaxGlobalSolution/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300"
                    >
                      <FaFacebookF size={16} />
                    </a>

                    <a
                      href="https://www.instagram.com/optivaxglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300"
                    >
                      <FaInstagram size={16} />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/115777328/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
                    >
                      <FaLinkedinIn size={16} />
                    </a>

                    <a
                      href="https://www.youtube.com/@OptivaxGlobal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300"
                    >
                      <FaYoutube size={16} />
                    </a>

                    <a
                      href="https://www.pinterest.com/optivaxglobal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E60023] hover:border-[#E60023] transition-all duration-300"
                    >
                      <FaPinterestP size={16} />
                    </a>

                    <a
                      href="https://www.tiktok.com/@optivaxglobal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black hover:border-white transition-all duration-300"
                    >
                      <FaTiktok size={16} />
                    </a>

                    <a
                      href="https://www.threads.net/@optivaxglobal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black hover:border-white transition-all duration-300"
                    >
                      <RiThreadsFill size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
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

                <div className="relative">
                  <select
                    name="service"
                    value={form.service}
                    required
                    onChange={handleChange}
                    className="
                      w-full p-4 pr-14 rounded-2xl
                      bg-[#10131F]
                      border border-white/10
                      text-white
                      outline-none
                      appearance-none
                      focus:border-[#1BBCEF]
                      focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)]
                      hover:border-white/20
                      transition-all duration-300
                    "
                  >
                    <option value="" className="bg-[#10131F] text-gray-400">
                      Select Service
                    </option>

                    <option value="Website Design" className="bg-[#10131F]">
                      Website Design
                    </option>

                    <option value="Logo & Branding" className="bg-[#10131F]">
                      Logo & Branding
                    </option>

                    <option
                      value="App UI/UX Design"
                      className="bg-[#10131F]"
                    >
                      App UI/UX Design
                    </option>

                    <option
                      value="Digital Marketing"
                      className="bg-[#10131F]"
                    >
                      Digital Marketing
                    </option>

                    <option
                      value="Ebook Cover Design"
                      className="bg-[#10131F]"
                    >
                      Ebook Cover Design
                    </option>

                    <option
                      value="Corporate Presentation"
                      className="bg-[#10131F]"
                    >
                      Corporate Presentation
                    </option>
                  </select>

                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1BBCEF] text-sm">
                    ▼
                  </div>
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
        </div>
      </section>
    </>
  );
};

export default Contact;