import React, { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import supabase from "@/lib/supabase";

const serviceOptions = [
  "Independence Day Campaign Design",
  "Custom Patriotic Design",
  "Patriotic Creative Design",
  "Flyer Design",
  "Social Media Design",
  "Logo Design",
  "Cover Design",
  "Book Publishing",
  "Promo Design",
  "Ad Campaign Visuals",
  "Flyers & Banners",

  "Basic Logo Package",
  "Start Up Logo Package",
  "Professional Logo Package",
  "Website Design",
  "Start Up Website Package",
  "Professional Website Package",
  "Custom Website Package",
  "Complete Branding Solution",
  "Custom Package",
  "Digital Growth Packages",

  "Web Design",
  "Web Development",
  "Brand Design",
  "Animation",
  "Graphics Design",
  "Brochure Design",
  "Stationary Design",
  "Mobile App Development",
  "Mobile App Design",
  "UI UX Design",
  "Brand Management",
  "Content Management System",
  "Digital Growth",
  "Email Communication Strategy",
  "Paid Search Support",
  "Search Visibility Strategy",
  "Search Visibility Optimization",
  "Social Media Management",
  "Ebook Cover Design",
  "eBook Publishing",
  "Corporate Presentation",
];

const normalizeServiceName = (serviceName) => {
  if (!serviceName) return "";

  let decodedServiceName = serviceName;

  try {
    decodedServiceName = decodeURIComponent(serviceName);
  } catch {
    decodedServiceName = serviceName;
  }

  const formattedServiceName = decodedServiceName
    .replace(/\+/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const serviceMap = {
    "Independence Day Campaign Design": "Independence Day Campaign Design",
    "Custom Patriotic Design": "Custom Patriotic Design",
    "Patriotic Creative Design": "Patriotic Creative Design",
    "USA Campaign Design": "Independence Day Campaign Design",
    "Independence Day Design": "Independence Day Campaign Design",
    "Independence Day Creative Design": "Independence Day Campaign Design",

    "Flyer Design": "Flyer Design",
    "Flyers & Banners": "Flyers & Banners",
    "Social Media": "Social Media Design",
    "Social Media Design": "Social Media Design",
    "Social Media Creatives": "Social Media Design",
    "Logo Design": "Logo Design",
    "Cover Design": "Cover Design",
    "Book Publishing": "Book Publishing",
    "Promo Design": "Promo Design",
    "Ad Campaign Visuals": "Ad Campaign Visuals",

    "Basic Logo Package": "Basic Logo Package",
    "Start Up Logo Package": "Start Up Logo Package",
    "Startup Logo Package": "Start Up Logo Package",
    "Professional Logo Package": "Professional Logo Package",
    "Website Design": "Website Design",
    "Start Up Website Package": "Start Up Website Package",
    "Startup Website Package": "Start Up Website Package",
    "Professional Website Package": "Professional Website Package",
    "Custom Website Package": "Custom Website Package",
    "Complete Branding Solution": "Complete Branding Solution",
    "Complete Branding Package": "Complete Branding Solution",
    "Custom Package": "Custom Package",
    "Digital Growth Packages": "Digital Growth Packages",

    "Brand Design": "Brand Design",
    "Brochure Design": "Brochure Design",
    "Graphics Design": "Graphics Design",
    "Mobile App Design": "Mobile App Design",
    "Mobile App Development": "Mobile App Development",
    "Stationary Design": "Stationary Design",
    "Stationery Design": "Stationary Design",
    "UI UX Design": "UI UX Design",
    "UI/UX Design": "UI UX Design",
    "Web Design": "Web Design",
    "Web Development": "Web Development",
    Animation: "Animation",
    "Animation Services": "Animation",
    "Brand Management": "Brand Management",
    "Content Management": "Content Management System",
    "Content Management System": "Content Management System",
    "Digital Marketing": "Digital Growth",
    "Digital Growth": "Digital Growth",
    "Email Marketing": "Email Communication Strategy",
    "Email Engagement": "Email Communication Strategy",
    "Email Communication Strategy": "Email Communication Strategy",
    "Pay Per Click": "Paid Search Support",
    "Pay Per Click PPC": "Paid Search Support",
    "Pay Per Click (PPC)": "Paid Search Support",
    "Paid Search Support": "Paid Search Support",
    "Search Engine Marketing": "Search Visibility Strategy",
    "Search Visibility Strategy": "Search Visibility Strategy",
    "Search Engine Optimization": "Search Visibility Optimization",
    "Search Engine Optimization SEO": "Search Visibility Optimization",
    "Search Engine Optimization (SEO)": "Search Visibility Optimization",
    "Search Visibility Optimization": "Search Visibility Optimization",
    "Social Media Marketing": "Social Media Management",
    "Social Media Growth": "Social Media Management",
    "Social Media Management": "Social Media Management",
    "Ebook Cover": "Ebook Cover Design",
    "Ebook Cover Design": "Ebook Cover Design",
    "eBook Publishing": "eBook Publishing",
    "Ebook Publishing": "eBook Publishing",
    "Corporate Presentation": "Corporate Presentation",
    "Corporate Presentation Design": "Corporate Presentation",
  };

  const matchedService = Object.entries(serviceMap).find(
    ([key]) => key.toLowerCase() === formattedServiceName.toLowerCase()
  );

  return matchedService ? matchedService[1] : formattedServiceName;
};

const ContactForm = ({ onSubmitSuccess, redirectTo = "/thank-you" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    smsConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");

  const dropdownRef = useRef(null);

  const filteredServiceOptions = serviceOptions.filter((option) =>
    option.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedService = params.get("service") || params.get("package");

    if (!selectedService) return;

    const normalizedService = normalizeServiceName(selectedService);

    setForm((prev) => {
      if (prev.service === normalizedService) return prev;

      return {
        ...prev,
        service: normalizedService,
      };
    });

    setServiceSearch("");
  }, [location.search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
        setServiceSearch("");
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [servicesOpen]);

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

    const { smsConsent, ...restForm } = form;

    const finalFormData = {
      ...restForm,
      phone: `+${phoneDigits}`,
      sms_consent: smsConsent,
      sms_consent_timestamp: smsConsent ? new Date().toISOString() : null,
      consent_source: "/contact",
    };

    const consentFields = [
      "sms_consent",
      "sms_consent_timestamp",
      "consent_source",
    ];

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([finalFormData]);

      if (error) {
        console.error("Supabase Error:", error.message);

        // The contact_messages table may not have the SMS consent columns
        // yet   retry without them so lead capture keeps working.
        if (/sms_consent|consent_source/i.test(error.message || "")) {
          const fallbackData = { ...finalFormData };
          consentFields.forEach((field) => delete fallbackData[field]);

          const { error: fallbackError } = await supabase
            .from("contact_messages")
            .insert([fallbackData]);

          if (fallbackError) {
            console.error("Supabase Fallback Error:", fallbackError.message);
          }
        }
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
        "sms_consent",
        finalFormData.sms_consent ? "Yes" : "No"
      );
      web3FormData.append(
        "sms_consent_timestamp",
        finalFormData.sms_consent_timestamp || ""
      );
      web3FormData.append("consent_source", finalFormData.consent_source);

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
          smsConsent: false,
        });

        setServiceSearch("");

        if (onSubmitSuccess) {
          onSubmitSuccess(finalFormData);
        } else {
          navigate(redirectTo);
        }
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

      <div className="bg-[#1E1E2A]/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-white">
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
            className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 text-white outline-none focus:border-accent-purple/50 transition placeholder:text-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 text-white outline-none focus:border-accent-purple/50 transition placeholder:text-gray-400"
          />

          <PhoneInput
            country="us"
            value={form.phone}
            onChange={(phone) =>
              setForm((prev) => ({
                ...prev,
                phone,
              }))
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
              <span className={form.service ? "text-white" : "text-gray-400"}>
                {form.service || "Select Service"}
              </span>

              <span className="text-[#1BBCEF] text-sm">
                {servicesOpen ? "▲" : "▼"}
              </span>
            </button>

            {servicesOpen && (
              <div className="mt-2 rounded-3xl bg-[#031C33] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] py-3 z-50">
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
            className="w-full p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 text-white outline-none focus:border-accent-purple/50 transition placeholder:text-gray-400"
          ></textarea>

          <label
            htmlFor="contact-sms-consent"
            className="flex items-start gap-3 p-4 rounded-xl bg-[#0C0D0D]/30 border border-white/10 cursor-pointer hover:border-accent-purple/40 transition-all duration-300"
          >
            <input
              id="contact-sms-consent"
              type="checkbox"
              name="smsConsent"
              checked={form.smsConsent}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  smsConsent: e.target.checked,
                }))
              }
              aria-describedby="contact-sms-consent-text"
              className="mt-0.5 w-5 h-5 shrink-0 rounded border-white/20 bg-[#0C0D0D] text-accent-purple accent-accent-purple focus:ring-2 focus:ring-accent-purple/50 cursor-pointer"
            />
            <span
              id="contact-sms-consent-text"
              className="text-sm text-gray-400 leading-relaxed"
            >
              I agree to receive service-related and inquiry follow-up text
              messages from Optivax Global at the phone number provided.
              Message frequency may vary. Message &amp; data rates may
              apply. Reply STOP to unsubscribe or HELP for help.{" "}
              <Link
                to="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple hover:text-white underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              &amp;{" "}
              <Link
                to="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-purple hover:text-white underline underline-offset-2 transition-colors"
              >
                Terms of Service
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent-purple py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-white hover:bg-accent-purple/90 transition-all duration-300 shadow-lg shadow-accent-purple/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;