import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const servicesLinks = [
    { name: "Web Design", href: "/web-design" },
    { name: "Web Development", href: "/web-development" },
    { name: "Ebook Cover Design", href: "/ebook-cover-design" },
    { name: "Logo Design", href: "/logo-design" },
    { name: "Brand Design", href: "/brand-design" },
    { name: "Animation", href: "/animation" },
    { name: "Graphics Design", href: "/graphics-design" },
    { name: "Brochure Design", href: "/brochure-design" },
    { name: "Flyer Design", href: "/flyer-design" },
    { name: "Stationary Design", href: "/stationary-design" },
    { name: "Mobile App Development", href: "/mobile-app-development" },
    { name: "Mobile App Design", href: "/mobile-app-design" },
    { name: "UI UX Design", href: "/ui-ux-design" },
    { name: "Brand Management", href: "/brand-management" },
    { name: "Content Management System", href: "/content-management-system" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Email Marketing", href: "/email-marketing" },
    { name: "Pay Per Click (PPC)", href: "/pay-per-click" },
    { name: "Search Engine Marketing", href: "/search-engine-marketing" },
    { name: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    { name: "Corporate Presentation", href: "/corporate-presentation-design" },
  ];

  const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQs", href: "/faqs" },  
  { name: "Blog", href: "/blog" },
];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    navigate("/");
    setIsOpen(false);
    setServicesOpen(false);

    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" && !id) return scrollToHome();

    if (path === "/" && id) {
      navigate("/");
      setIsOpen(false);
      setServicesOpen(false);

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return;
    }

    navigate(href);
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleServiceClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleCTA = () => {
    navigate("/contact");
    setIsOpen(false);
    setServicesOpen(false);
  };

  const LogoBlock = () => (
    <button
      type="button"
      onClick={scrollToHome}
      className="flex items-center justify-center group"
      aria-label="Go to Optivax Global home"
    >
      <img
        src={logo}
        alt="Optivax Global logo"
        className="h-14 md:h-16 lg:h-[72px] w-auto object-contain drop-shadow-[0_0_22px_rgba(56,217,255,0.28)] group-hover:scale-105 transition-all duration-300"
      />
    </button>
  );

  const navItemClass =
    "relative px-3 py-2 rounded-full text-sm font-medium text-[#E9FBFF]/85 hover:text-white hover:bg-[#E9FBFF]/10 transition-all duration-300 group";

  const navUnderline =
    "absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#38D9FF] to-[#1699F1] rounded-full group-hover:w-8 transition-all duration-300";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#031C33]/88 backdrop-blur-xl border-b border-[#E9FBFF]/10 shadow-[0_12px_45px_rgba(0,0,0,0.25)]"
            : "bg-[#031C33]/35 backdrop-blur-md border-b border-[#E9FBFF]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <LogoBlock />

          <nav className="hidden md:flex items-center gap-2">
            <a href="/" onClick={handleSmoothScroll} className={navItemClass}>
              Home
              <span className={navUnderline} />
            </a>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="relative px-3 py-2 rounded-full flex items-center gap-1 text-sm font-medium text-[#E9FBFF]/85 hover:text-white hover:bg-[#E9FBFF]/10 transition-all duration-300 group"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className={navUnderline} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className="absolute top-full left-0 mt-3 w-[44rem] rounded-2xl overflow-hidden bg-[#031C33]/95 backdrop-blur-xl border border-[#E9FBFF]/12 shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
                  >
                    <div className="p-2">
                      <div className="grid grid-cols-3 gap-2">
                        {servicesLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={handleServiceClick}
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-[#E9FBFF]/78 hover:text-white hover:bg-[#1699F1]/18 transition-all duration-300 group/item"
                          >
                            <span>{service.name}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#38D9FF]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleSmoothScroll}
                className={navItemClass}
              >
                {link.name}
                <span className={navUnderline} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <button
              type="button"
              onClick={handleCTA}
              className="group bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-[#E9FBFF] px-6 py-2.5 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-2 rounded-full hover:bg-[#E9FBFF]/10 transition"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-[#031C33] z-50 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-full px-6">
              <div className="flex justify-between items-center h-20">
                <LogoBlock />

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 rounded-full hover:bg-[#E9FBFF]/10 transition"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 gap-4 py-10">
                <a
                  href="/"
                  onClick={handleSmoothScroll}
                  className="w-full text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl hover:bg-[#1699F1]/18 transition"
                >
                  Home
                </a>

                <div className="w-full text-center">
                  <p className="text-[#38D9FF] text-sm uppercase tracking-[0.25em] mb-3">
                    Services
                  </p>

                  <div className="grid gap-3">
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={handleServiceClick}
                        className="w-full text-center text-xl font-semibold text-[#E9FBFF]/86 py-3 rounded-2xl bg-[#E9FBFF]/6 border border-[#E9FBFF]/8 hover:bg-[#1699F1]/20 hover:border-[#38D9FF]/35 hover:text-white transition-all duration-300"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleSmoothScroll}
                    className="w-full text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl hover:bg-[#1699F1]/18 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pb-10">
                <button
                  type="button"
                  onClick={handleCTA}
                  className="w-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#1BBCEF]/25 transition-all duration-300"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;