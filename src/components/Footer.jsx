import React from "react";
import { SITE } from "@/lib/siteConfig";
import logo from "@/assets/logo.png";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";

import { RiThreadsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const phoneHref = SITE.phone.replace(/[^\d+]/g, "");

  const handleNavClick = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" || path === "") {
      navigate("/");

      setTimeout(() => {
        if (id) {
          const section = document.getElementById(id);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(href);
    }
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "About", href: "/#about" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "FAQs", href: "/faqs" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Website Design", href: "/website-design" },
        { name: "Logo & Branding", href: "/logo-design" },
         { name: "Mobile App Design", href: "/mobile-app-design" },
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "Ebook Cover Design", href: "/ebook-cover-design" },
        {
          name: "Corporate Presentation",
          href: "/corporate-presentation-design",
        },
      ],
    },
  ];

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
      "hover:bg-pink-500 hover:border-pink-500 hover:text-white",
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
      "hover:bg-red-500 hover:border-red-500 hover:text-white",
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

  const footerLinkClass =
    "relative inline-flex items-center w-fit text-sm font-semibold text-[#E9FBFF]/85 hover:text-white transition-all duration-300 group";

  const footerUnderline =
    "absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#38D9FF] to-[#1699F1] rounded-full group-hover:w-full transition-all duration-300";

  return (
    <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-5">
  <button
    onClick={() => {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }}
    aria-label="Go to Optivax Global homepage"
    className="group"
  >
    <img
      src={logo}
      alt="Optivax Global"
      className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
    />
  </button>
</div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We help businesses grow with high-performing websites, strategic
              branding, app UI/UX design, professional presentations, eBook
              covers, and digital marketing solutions.
            </p>

            <button
  onClick={() => navigate("/contact")}
  className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white px-5 py-3 rounded-full font-semibold shadow-lg shadow-[#1BBCEF]/25 hover:-translate-y-0.5 transition-all duration-300 border-0"
>
  Get a Free Consultation
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
</button>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6 text-lg">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className={footerLinkClass}
                    >
                      {link.name}
                      <span className={footerUnderline} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>

            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <Mail
                  size={18}
                  className="group-hover:text-[#38D9FF] transition"
                />
                <span>{SITE.email}</span>
              </a>

              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <Phone
                  size={18}
                  className="group-hover:text-[#38D9FF] transition"
                />
                <span>{SITE.phone}</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-all duration-300 group">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 group-hover:text-[#38D9FF] transition"
                />
                <span>{SITE.location}</span>
              </div>

              <a
                href={SITE.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
              >
                <Globe
                  size={18}
                  className="group-hover:text-[#38D9FF] transition"
                />
                <span>{SITE.website.replace("https://", "")}</span>
              </a>
            </div>

            <h3 className="text-white font-semibold mb-4 text-lg">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Optivax Global on ${social.label}`}
                  className={`w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Optivax Global. All rights reserved.
          </p>

          <div className="flex gap-3">
            <a
              href="/privacy-policy"
              onClick={handleNavClick}
              className={footerLinkClass}
            >
              Privacy Policy
              <span className={footerUnderline} />
            </a>

            <a
              href="/terms"
              onClick={handleNavClick}
              className={footerLinkClass}
            >
              Terms
              <span className={footerUnderline} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;