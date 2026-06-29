import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Upload,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import supabase from "@/lib/supabase";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

const services = {
  "Web Design":
    "Professional website design with modern UI, responsive layout, and business-focused structure.",
  "Web Development":
    "Custom website development with responsive pages, forms, integrations, and optimized performance.",
  "Logo Design":
    "Professional logo design with clean branding, multiple concepts, and final files.",
  "Brand Design":
    "Complete brand identity design including logo style, colors, typography, and visual direction.",
  Animation:
    "Creative animation services for business promotion, social media, and digital branding.",
  "Comic Art":
    "Premium comic art and illustration services for comic books, graphic novels, manga-style artwork, character design, storyboards, and custom visual storytelling for print, digital publishing, and promotional projects.",
  "Graphics Design":
    "Professional graphics for social media, marketing campaigns, ads, and business promotion.",
  "Brochure Design":
    "Modern brochure design for company profiles, services, products, and marketing use.",
  "Flyer Design":
    "Attractive flyer design for promotions, campaigns, events, and business offers.",
  "Stationary Design":
    "Business stationery design including letterhead, business card, envelope, and branding material.",
  "Mobile App Development":
    "Custom mobile app development with user-friendly features and responsive app flow.",
  "Mobile App Design":
    "Modern mobile app UI design with clean screens, smooth user experience, and professional layout.",
  "UI UX Design":
    "User interface and user experience design focused on usability, conversion, and modern visuals.",
  "Brand Management":
    "Brand strategy and management support to improve consistency, trust, and online presence.",
  "Content Management System":
    "CMS setup for easy website content updates, pages, blogs, and business information.",
  "Digital Marketing":
    "Digital marketing support including campaigns, content planning, ads, and online growth strategy.",
  "Email Marketing":
    "Email campaign design and setup for promotions, lead nurturing, and customer communication.",
  "Pay Per Click (PPC)":
    "Paid ads campaign setup and optimization for leads, traffic, and better conversions.",
  "Search Engine Marketing":
    "Search engine advertising strategy to promote your services and increase visibility.",
  "Search Engine Optimization (SEO)":
    "SEO optimization for better rankings, organic traffic, and long-term online growth.",
  "Social Media Marketing":
    "Social media marketing content, strategy, and campaigns for better engagement and leads.",
  "Ebook Cover Design":
    "Premium ebook cover design for Amazon KDP, Kindle, publishing, and marketing platforms.",
  "Corporate Presentation":
    "Professional corporate presentation design for business proposals, meetings, and investor decks.",
};

const paymentMethods = [
  {
    name: "Proceed To Checkout",
    icon: <CreditCard size={22} />,
    link: "https://buy.stripe.com/6oU6oHdpJgDq8Ed60yfMA01",
  },
];

const PaymentForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    total_payment: "",
    advance_percentage: "",
    advance_payment: "",
    remaining_payment: "",
    payment_method: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const serviceDetails = form.service ? services[form.service] : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "total_payment" || name === "advance_percentage") {
      const total =
        name === "total_payment" ? Number(value) : Number(form.total_payment);

      const percentage =
        name === "advance_percentage"
          ? Number(value)
          : Number(form.advance_percentage);

      const advanceAmount =
        total && percentage ? ((total * percentage) / 100).toFixed(2) : "";

      const remainingAmount =
        total && percentage ? (total - Number(advanceAmount)).toFixed(2) : "";

      setForm({
        ...form,
        [name]: value,
        advance_payment: advanceAmount,
        remaining_payment: remainingAmount,
      });

      return;
    }

    setForm({ ...form, [name]: value });
  };

  const uploadScreenshot = async () => {
    if (!file) return "";

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("payment-screenshots")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("payment-screenshots")
      .getPublicUrl(fileName);

    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const screenshotUrl = await uploadScreenshot();

      const dataToSave = {
        name: form.name,
        email: form.email,
        contact: form.contact,
        service: form.service,
        service_details: serviceDetails,
        total_payment: Number(form.total_payment),
        advance_payment: Number(form.advance_payment),
        remaining_payment: Number(form.remaining_payment),
        payment_method: form.payment_method,
        screenshot_url: screenshotUrl,
      };

      const { error } = await supabase
        .from("payment_forms")
        .insert([dataToSave]);

      if (error) throw error;

      const web3FormData = new FormData();

      web3FormData.append(
        "access_key",
        "85750fd3-5c99-4b7a-9887-e0d21806b53a"
      );

      web3FormData.append("name", form.name);
      web3FormData.append("email", form.email);
      web3FormData.append("contact", form.contact);
      web3FormData.append("service", form.service);
      web3FormData.append("service_details", serviceDetails);
      web3FormData.append("total_payment", form.total_payment);
      web3FormData.append("advance_percentage", form.advance_percentage);
      web3FormData.append("advance_payment", form.advance_payment);
      web3FormData.append("remaining_payment", form.remaining_payment);
      web3FormData.append("payment_method", form.payment_method);
      web3FormData.append("screenshot_url", screenshotUrl);
      web3FormData.append("subject", "Payment Confirmation - Optivax Global");

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const emailResponse = await fetch(
        "https://wdaaadhohvixycyrnlax.supabase.co/functions/v1/send-payment-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            contact: form.contact,
            service: form.service,
            service_details: serviceDetails,
            total_payment: form.total_payment,
            advance_percentage: form.advance_percentage,
            advance_payment: form.advance_payment,
            remaining_payment: form.remaining_payment,
            payment_method: form.payment_method,
            screenshot_url: screenshotUrl,
          }),
        }
      );

      const emailResult = await emailResponse.json();
      console.log("EMAIL RESULT:", emailResult);

      navigate("/payment-successful");
    } catch (err) {
      alert(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Payment Confirmation | Optivax Global</title>
        <meta
          name="description"
          content="Submit your payment confirmation details to Optivax Global."
        />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white px-6 py-28">
        <AnimatedHeroBackground />

        <div className="absolute inset-0 bg-[#020817]/70 z-[1]" />
        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-[#1BBCEF]/10 rounded-full blur-[120px] z-[1]" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-[#004495]/20 rounded-full blur-[120px] z-[1]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-10"
          >
            <span className="inline-block text-[#1BBCEF] font-semibold uppercase tracking-[0.25em] mb-4">
              Secure Payment
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Payment
              <span className="block bg-gradient-to-r from-[#1BBCEF] to-[#004495] bg-clip-text text-transparent">
                Confirmation Form
              </span>
            </h1>

            <p className="text-gray-300 mt-5 text-lg max-w-2xl mx-auto">
              Fill your details, complete payment, upload screenshot, and submit
              your confirmation to Optivax Global.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="relative bg-white/5 border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl shadow-[#1BBCEF]/10 overflow-hidden backdrop-blur-xl space-y-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1BBCEF]/10 via-transparent to-[#004495]/10 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Client Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white focus:border-[#1BBCEF]/60 focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)] transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Client Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white focus:border-[#1BBCEF]/60 focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)] transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Contact Number
                  </label>

                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white focus:border-[#1BBCEF]/60 focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)] transition"
                  />
                </div>
              </div>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl bg-[#020817]/80 border border-white/10 outline-none text-white focus:border-[#1BBCEF]/60 focus:shadow-[0_0_0_4px_rgba(27,188,239,0.12)] transition"
              >
                <option value="">Select Service</option>
                {Object.keys(services).map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              {serviceDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#020817]/45 border border-[#1BBCEF]/25 p-5 rounded-2xl shadow-lg shadow-[#1BBCEF]/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-[#1BBCEF]" />
                    <h3 className="font-bold text-xl">Service Details</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {serviceDetails}
                  </p>
                </motion.div>
              )}

              <div className="grid md:grid-cols-4 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Total Payment
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1BBCEF] font-bold">
                      $
                    </span>

                    <input
                      name="total_payment"
                      type="number"
                      value={form.total_payment}
                      onChange={handleChange}
                      required
                      className="w-full p-4 pl-10 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white focus:border-[#1BBCEF]/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Advance Percentage %
                  </label>

                  <div className="relative">
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1BBCEF] font-bold">
                      %
                    </span>

                    <input
                      name="advance_percentage"
                      type="number"
                      value={form.advance_percentage}
                      onChange={handleChange}
                      required
                      className="w-full p-4 pr-10 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white focus:border-[#1BBCEF]/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Advance Payment
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1BBCEF] font-bold">
                      $
                    </span>

                    <input
                      name="advance_payment"
                      type="number"
                      value={form.advance_payment}
                      readOnly
                      className="w-full p-4 pl-10 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-[#1BBCEF]">
                    Remaining Payment
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1BBCEF] font-bold">
                      $
                    </span>

                    <input
                      name="remaining_payment"
                      type="number"
                      value={form.remaining_payment}
                      readOnly
                      className="w-full p-4 pl-10 rounded-2xl bg-[#020817]/45 border border-white/10 outline-none text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 mt-4">
                <p className="text-yellow-300 text-sm">
                  Please enter all amounts in USD ($).
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-5 h-5 text-[#1BBCEF]" />
                  <h3 className="font-bold text-xl">
                    Stripe Payment Methods
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <a
                      key={method.name}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        setForm({ ...form, payment_method: method.name })
                      }
                      className="group relative overflow-hidden border border-[#1BBCEF]/25 bg-white/5 backdrop-blur-md text-white p-5 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all duration-300 hover:border-[#1BBCEF] hover:-translate-y-1"
                    >
                      <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-l from-[#1BBCEF]/20 to-transparent" />
                      <span className="relative z-10 text-2xl">
                        {method.icon}
                      </span>
                      <span className="relative z-10">{method.name}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-3 space-y-2">
                  <p className="text-gray-400 text-sm">
                    After payment, come back to this page and upload your
                    payment screenshot.
                  </p>

                  <div className="bg-[#1BBCEF]/10 border border-[#1BBCEF]/25 rounded-xl p-3">
                    <p className="text-[#1BBCEF] text-sm font-medium">
                      Important: Please enter the same payment amount on the
                      Stripe checkout page that was agreed upon with your
                      project manager.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 font-bold mb-3">
                  <Upload className="w-5 h-5 text-[#1BBCEF]" />
                  Upload Payment Screenshot
                </label>

                <label className="flex items-center justify-center gap-3 border-2 border-dashed border-[#1BBCEF]/25 rounded-2xl p-8 cursor-pointer bg-[#020817]/35 hover:bg-white/5 hover:border-[#1BBCEF]/60 transition">
                  <Upload size={22} className="text-[#1BBCEF]" />
                  <span className="text-gray-300">
                    {file ? file.name : "Choose Screenshot"}
                  </span>

                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#020817]/45 border border-white/10 rounded-2xl p-5">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#1BBCEF]" />
                    Secure Submission
                  </h3>
                  <p className="text-sm text-gray-400">
                    Your payment information will be submitted to our team for
                    verification.
                  </p>
                </div>

                <div className="bg-[#020817]/45 border border-white/10 rounded-2xl p-5">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#1BBCEF]" />
                    Fast Verification
                  </h3>
                  <p className="text-sm text-gray-400">
                    Our billing team will review your screenshot and contact you
                    shortly.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-[#E9FBFF] py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Payment Done"}
                {!loading && <CheckCircle2 size={20} />}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default PaymentForm;