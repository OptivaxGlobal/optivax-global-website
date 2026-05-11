import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import supabase from '@/lib/supabase';

import AnimatedContactBackground from "@/components/AnimatedContactBackground";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
    const { error } = await supabase
      .from("contact_messages")
      .insert([form]);

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

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: web3FormData,
      }
    );

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
                Start Your
                <span className="block text-accent-purple">
                  Next Project Today
                </span>
              </h1>

              <p className="text-gray-400 mb-8 max-w-md">
                Tell us about your project. We’ll help you with website design,
                branding, app UI/UX, or marketing  focused on results.
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

                <select
                  name="service"
                  value={form.service}
                  required
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 outline-none focus:border-accent-purple/50 transition"
                >
                  <option value="">Select Service</option>
                  <option>Website Design</option>
                  <option>Logo & Branding</option>
                  <option>App UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Ebook Cover Design</option>
                  <option>Corporate Presentation</option>
                </select>

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
                  className="w-full bg-accent-purple py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-accent-purple/90 transition-all duration-300 shadow-lg shadow-accent-purple/20"
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