{/* 
import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
    {
      name: "Search Engine Optimization (SEO)",
      href: "/search-engine-optimization",
    },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    {
      name: "Corporate Presentation",
      href: "/corporate-presentation-design",
    },
  ];

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Packages", href: "/digital-growth-packages" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const scrollToHome = () => {
    navigate("/");
    closeMenus();

    setTimeout(() => {
      const hero = document.getElementById("hero");

      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" && !id) {
      scrollToHome();
      return;
    }

    if (path === "/" && id) {
      navigate("/");
      closeMenus();

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return;
    }

    navigate(href);
    closeMenus();
  };

  const handleServiceClick = () => {
    closeMenus();
  };

  const handleCTA = () => {
    navigate("/contact");
    closeMenus();
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
              className="group bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-[#E9FBFF] px-8 py-2.5 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-8 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setMobileServicesOpen(false);
            }}
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
              <div className="flex justify-between items-center h-20 shrink-0">
                <LogoBlock />

                <button
                  type="button"
                  onClick={closeMenus}
                  className="text-white p-2 rounded-full hover:bg-[#E9FBFF]/10 transition"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col items-center gap-4 py-8">
                <a
                  href="/"
                  onClick={handleSmoothScroll}
                  className="w-full text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl hover:bg-[#1699F1]/18 transition"
                >
                  Home
                </a>

                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-center gap-2 text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl bg-[#E9FBFF]/6 border border-[#E9FBFF]/10 hover:bg-[#1699F1]/18 hover:border-[#38D9FF]/35 transition-all duration-300"
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDown
                      className={`w-5 h-5 text-[#38D9FF] transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 rounded-3xl border border-[#E9FBFF]/10 bg-[#02182D]/70 p-3 max-h-[52vh] overflow-y-auto">
                          <p className="text-[#38D9FF] text-xs uppercase tracking-[0.25em] mb-3 text-center">
                            Select a Service
                          </p>

                          <div className="grid gap-3">
                            {servicesLinks.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={handleServiceClick}
                                className="w-full text-center text-base font-semibold text-[#E9FBFF]/88 py-3 px-4 rounded-2xl bg-[#E9FBFF]/6 border border-[#E9FBFF]/8 hover:bg-[#1699F1]/20 hover:border-[#38D9FF]/35 hover:text-white transition-all duration-300"
                              >
                                {service.name}
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
                    className="w-full text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl hover:bg-[#1699F1]/18 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pb-10 mt-auto">
                <button
                  type="button"
                  onClick={handleCTA}
                  className="w-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#1BBCEF]/25 transition-all duration-300"
                >
                  Contact Us
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
*/}











import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();

  const anniversaryUrl = "/250-anniversary-usa";

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
    {
      name: "Search Engine Optimization (SEO)",
      href: "/search-engine-optimization",
    },
    { name: "Social Media Marketing", href: "/social-media-marketing" },
    {
      name: "Corporate Presentation",
      href: "/corporate-presentation-design",
    },
  ];

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Packages", href: "/digital-growth-packages" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const scrollToHome = () => {
    navigate("/");
    closeMenus();

    setTimeout(() => {
      const hero = document.getElementById("hero");

      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const [path, id] = href.split("#");

    if (path === "/" && !id) {
      scrollToHome();
      return;
    }

    if (path === "/" && id) {
      navigate("/");
      closeMenus();

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return;
    }

    navigate(href);
    closeMenus();
  };

  const handleServiceClick = () => {
    closeMenus();
  };

  const handleCTA = () => {
    navigate("/contact");
    closeMenus();
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

  const USFlagIcon = () => (
    <span className="relative block h-[18px] w-[30px] overflow-hidden rounded-[4px] ring-1 ring-white/45 shadow-[0_0_12px_rgba(255,255,255,0.28)]">
      <span
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(to bottom, #B22234 0 2px, #FFFFFF 2px 4px)",
        }}
      />
      <span className="absolute left-0 top-0 h-[10px] w-[13px] bg-[#3C3B6E]">
        <span className="absolute left-[2px] top-[2px] h-[2px] w-[2px] rounded-full bg-white shadow-[4px_0_0_white,8px_0_0_white,2px_3px_0_white,6px_3px_0_white,10px_3px_0_white,4px_6px_0_white,8px_6px_0_white]" />
      </span>
    </span>
  );

  const AnniversaryButton = ({ mobile = false }) => (
    <motion.a
  href={anniversaryUrl}
  onClick={closeMenus}
  whileHover={{ y: -2, scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className={`relative isolate overflow-hidden rounded-full flex items-center gap-2 font-bold text-white border border-[#E9FBFF]/18 bg-[#031C33] transition-all duration-300 group/usa ${
    mobile
      ? "w-full justify-center py-4 text-base shadow-[0_0_35px_rgba(27,188,239,0.38)]"
      : "px-4 py-2.5 text-sm shadow-[0_0_26px_rgba(27,188,239,0.36)] hover:shadow-[0_0_38px_rgba(27,188,239,0.62)]"
  }`}
  aria-label="Visit 250th Anniversary USA page"
>
      <motion.span
        className="absolute inset-0 -z-30"
        style={{
          background:
            "linear-gradient(120deg, #031C33 0%, #004495 34%, #1BBCEF 50%, #B22234 72%, #031C33 100%)",
          backgroundSize: "240% 240%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute -inset-2 -z-20 rounded-full blur-xl"
        style={{
          background:
            "radial-gradient(circle at 25% 50%, rgba(56,217,255,0.52), transparent 35%), radial-gradient(circle at 78% 50%, rgba(178,34,52,0.42), transparent 38%)",
        }}
        animate={{
          opacity: [0.45, 0.95, 0.45],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute top-0 left-[-45%] h-full w-[45%] -z-10 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent"
        animate={{
          x: ["0%", "330%"],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.35,
        }}
      />

      <motion.span
        animate={{
          rotate: [-3, 3, -3],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="shrink-0"
      >
        <USFlagIcon />
      </motion.span>

      <span className="relative tracking-[0.08em] drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
        250th
      </span>

      <span className="hidden lg:inline text-xs font-semibold text-white/82 tracking-wide">
        Anniversary
      </span>

      <ArrowRight className="w-4 h-4 text-white group-hover/usa:translate-x-1 transition-transform duration-300" />
    </motion.a>
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

          <div className="hidden md:flex items-center gap-3">
            <AnniversaryButton />
            <button
              type="button"
              onClick={handleCTA}
              className="group bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-[#E9FBFF] px-8 py-2.5 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-8 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setMobileServicesOpen(false);
            }}
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
              <div className="flex justify-between items-center h-20 shrink-0">
                <LogoBlock />

                <button
                  type="button"
                  onClick={closeMenus}
                  className="text-white p-2 rounded-full hover:bg-[#E9FBFF]/10 transition"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col items-center gap-4 py-8">
                <a
                  href="/"
                  onClick={handleSmoothScroll}
                  className="w-full text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl hover:bg-[#1699F1]/18 transition"
                >
                  Home
                </a>

                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="w-full flex items-center justify-center gap-2 text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl bg-[#E9FBFF]/6 border border-[#E9FBFF]/10 hover:bg-[#1699F1]/18 hover:border-[#38D9FF]/35 transition-all duration-300"
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <ChevronDown
                      className={`w-5 h-5 text-[#38D9FF] transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -8 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 rounded-3xl border border-[#E9FBFF]/10 bg-[#02182D]/70 p-3 max-h-[52vh] overflow-y-auto">
                          <p className="text-[#38D9FF] text-xs uppercase tracking-[0.25em] mb-3 text-center">
                            Select a Service
                          </p>

                          <div className="grid gap-3">
                            {servicesLinks.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={handleServiceClick}
                                className="w-full text-center text-base font-semibold text-[#E9FBFF]/88 py-3 px-4 rounded-2xl bg-[#E9FBFF]/6 border border-[#E9FBFF]/8 hover:bg-[#1699F1]/20 hover:border-[#38D9FF]/35 hover:text-white transition-all duration-300"
                              >
                                {service.name}
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
                    className="w-full text-center text-2xl font-semibold text-[#E9FBFF] py-3 rounded-2xl hover:bg-[#1699F1]/18 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pb-10 mt-auto space-y-4">
                <button
                  type="button"
                  onClick={handleCTA}
                  className="w-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-white py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#1BBCEF]/25 transition-all duration-300"
                >
                  Contact Us
                </button>

                <AnniversaryButton mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;


