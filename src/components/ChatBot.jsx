import React, { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const replyMemoryRef = useRef({});

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hi! Welcome to Optivax Global 👋\n\nI’m here to help you choose the right design solution for your business. Whether you need a website, branding, app UI/UX, or eBook design, our team can guide you with a clear plan.",
      actions: [
        { label: "Explore Services", type: "route", value: "/#services" },
        { label: "Design Consultation", type: "route", value: "/contact" },
        { label: "View Portfolio", type: "route", value: "/#portfolio" },
      ],
    },
  ]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollTimer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);

    return () => clearTimeout(scrollTimer);
  }, [messages, isTyping, isOpen]);

  const quickReplies = [
    "Website Design",
    "Web Development",
    "UI/UX Design",
    "Logo & Branding",
    "Mobile App Design",
    "eBook Design",
    "eBook Publishing",
    "Animation",
    "Brand Identity",
    "Portfolio",
  ];

  const goToRoute = (href) => {
    if (href.includes("#")) {
      const [path, id] = href.split("#");
      navigate(path || "/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 180);
    } else {
      navigate(href);
    }

    setIsOpen(false);
  };

  const handleAction = (action) => {
    if (action.type === "route") {
      goToRoute(action.value);
      return;
    }

    if (action.type === "email") {
      window.location.href = "mailto:marketing@optivaxglobal.com";
      return;
    }

    if (action.type === "phone") {
      window.location.href = "tel:+13074301006";
      return;
    }

    if (action.type === "whatsapp") {
      window.open(
        "https://wa.me/13074301006?text=Hi%20Optivax%20Global,%20I%20am%20interested%20in%20your%20services.%20Please%20guide%20me.",
        "_blank"
      );
    }
  };

  const normalizeText = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const scoreIntent = (text, keywords) => {
    const tokens = new Set(text.split(" "));
    let score = 0;

    keywords.forEach((keyword) => {
      const cleanKeyword = normalizeText(keyword);
      if (!cleanKeyword) return;

      if (cleanKeyword.includes(" ")) {
        if (text.includes(cleanKeyword)) score += 5;
      } else {
        if (tokens.has(cleanKeyword)) score += 3;
      }
    });

    return score;
  };

  const pickReply = (key, replies) => {
    const used = replyMemoryRef.current[key] || [];

    if (used.length >= replies.length) {
      replyMemoryRef.current[key] = [];
    }

    const freshUsed = replyMemoryRef.current[key] || [];
    const availableIndexes = replies
      .map((_, index) => index)
      .filter((index) => !freshUsed.includes(index));

    const selectedIndex =
      availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

    replyMemoryRef.current[key] = [...freshUsed, selectedIndex];

    return replies[selectedIndex];
  };

  const websiteActions = [
    { label: "View Web Design", type: "route", value: "/web-design" },
    { label: "Start My Website", type: "route", value: "/contact" },
    { label: "WhatsApp Team", type: "whatsapp" },
  ];

  const marketingActions = [
    {
      label: "View Our Services",
      type: "route",
      value: "/services",
    },
    { label: "Start a Project", type: "route", value: "/contact" },
    { label: "WhatsApp Team", type: "whatsapp" },
  ];

  const contactActions = [
    { label: "Email Us", type: "email" },
    { label: "Call Now", type: "phone" },
    { label: "WhatsApp", type: "whatsapp" },
    { label: "Contact Page", type: "route", value: "/contact" },
  ];

  const intentBank = [
    {
      key: "greeting",
      priority: 100,
      keywords: [
        "hi",
        "hello",
        "hey",
        "salam",
        "assalam",
        "asalam",
        "good morning",
        "good afternoon",
        "good evening",
        "how are you",
        "anyone there",
        "need help",
        "help me",
        "can you help",
        "is anyone available",
        "i need assistance",
        "start chat",
        "chat",
        "hy",
        "helo",
      ],
      actions: [
        { label: "Explore Services", type: "route", value: "/#services" },
        { label: "Design Consultation", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Hello 👋 Welcome to Optivax Global.\n\nI can help you choose the right design solution for your business  website design, branding, app UI/UX, or eBook design.\n\nWhat are you planning to build or improve?",
        "Hi there 👋 Great to have you here.\n\nOptivax Global helps businesses create a stronger online presence with professional websites, branding, and design solutions.\n\nTell me your business type, and I’ll guide you with the best option.",
        "Welcome to Optivax Global 👋\n\nWe help brands look more professional with clean, custom design work. Are you looking for a website, branding, or design support?",
        "Hey 👋 You’re in the right place.\n\nOur team helps businesses with websites, logo design, app UI/UX, and eBook design.\n\nShare what you need, and I’ll guide you.",
        "Hello and welcome 😊\n\nOptivax Global focuses on clean, professional design work. Tell me what service you’re interested in so I can point you in the right direction.",
      ],
    },
    {
      key: "pricing",
      priority: 95,
      keywords: [
        "price",
        "pricing",
        "cost",
        "package",
        "budget",
        "charges",
        "quote",
        "quotation",
        "how much",
        "rate",
        "rates",
        "fee",
        "fees",
        "payment",
        "monthly",
        "cheap",
        "affordable",
        "discount",
        "offer",
        "deal",
        "estimate",
        "project cost",
        "website cost",
        "logo cost",
        "seo cost",
        "marketing cost",
        "kitna",
        "kitny",
        "kitne",
        "paisa",
        "charges kia",
        "budget hai",
      ],
      actions: [
        { label: "Get Free Quote", type: "route", value: "/contact" },
        { label: "WhatsApp for Pricing", type: "whatsapp" },
        { label: "Call Now", type: "phone" },
      ],
      replies: [
        "Pricing depends on your project scope, number of pages, features, design level, and timeline.\n\nInstead of giving you a random package, our team first understands your business goal and then suggests the most suitable plan.\n\nYou can request a free consultation and we’ll guide you with a clear quote.",
        "Every project is different, so the cost depends on what you need  website pages, branding, UI/UX, content, integrations, or custom design.\n\nThe best step is to share your requirement, and our team will recommend a package that fits your goal and budget.",
        "We can guide you with a proper price after understanding your business, required service, and timeline.\n\nFor example, a simple website, ecommerce website, eBook design project, or branding project all have different scopes. A free consultation will help us suggest the right package.",
        "Our packages are based on what your business actually needs.\n\nA landing page, full business website, ecommerce store, eBook design project, or branding project all require different planning. Share your goal and we’ll suggest the most suitable option.",
        "We keep pricing transparent after understanding your requirement.\n\nTell us what you want to build, your preferred timeline, and any key features you need. Our team can then guide you with a professional quote.",
      ],
    },
    {
      key: "ecommerce",
      priority: 90,
      keywords: [
        "ecommerce",
        "e commerce",
        "online store",
        "shopify",
        "woocommerce",
        "store website",
        "sell online",
        "products online",
        "shopping website",
        "cart",
        "checkout",
        "payment gateway",
        "product page",
        "shop page",
        "online shop",
        "online selling",
        "product listing",
        "inventory",
        "add to cart",
        "payment integration",
        "stripe",
        "paypal",
        "cod",
        "cash on delivery",
        "clothing store",
        "fashion store",
        "amazon store",
        "dropshipping",
        "marketplace",
        "multi vendor",
        "store banana",
        "online store banana",
      ],
      actions: [
        { label: "Start Ecommerce Site", type: "route", value: "/contact" },
        { label: "View Web Design", type: "route", value: "/web-design" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Yes, we can help you build a professional ecommerce website that makes your products easy to explore and easy to buy.\n\nWe focus on clean product pages, mobile-friendly shopping, clear categories, fast checkout flow, and trust-building design.\n\nThis is perfect if you want to sell products online and create a stronger brand experience.",
        "An ecommerce website should not just look good  it should make buying simple.\n\nOptivax Global can help you create an online store with product sections, category pages, cart flow, contact options, and user-friendly design so customers feel confident ordering from you.",
        "Absolutely. For an online store, we can help with layout, product flow, homepage sections, category structure, mobile design, and strong calls-to-action.\n\nThe goal is to make your store look professional and help visitors become customers.",
        "A strong online store needs product clarity, easy navigation, trust signals, and a smooth buying process.\n\nWe can design and structure your ecommerce website so customers quickly understand your products and feel comfortable placing an order.",
        "If you want to sell online, we can help you create a store that looks clean, modern, and customer-friendly.\n\nFrom homepage layout to product pages and checkout flow, everything should guide visitors toward buying with confidence.",
      ],
    },
    {
      key: "redesign",
      priority: 88,
      keywords: [
        "redesign",
        "re design",
        "old website",
        "website update",
        "update my website",
        "improve website",
        "revamp",
        "modernize",
        "not looking good",
        "bad design",
        "slow website",
        "mobile friendly",
        "responsive",
        "new look",
        "change design",
        "website redesign",
        "make better",
        "better flow",
        "clean homepage",
        "shop page improve",
        "improve layout",
        "outdated",
        "old design",
        "ui improve",
        "ux improve",
        "conversion",
        "convert visitors",
        "site improve",
        "dobara design",
        "new design",
      ],
      actions: [
        { label: "Redesign My Website", type: "route", value: "/contact" },
        { label: "View Web Design", type: "route", value: "/web-design" },
        { label: "View Portfolio", type: "route", value: "/#portfolio" },
      ],
      replies: [
        "A website redesign can make a big difference in how customers see your business.\n\nWe can improve your layout, visuals, mobile responsiveness, page flow, and service presentation so the website feels more modern and professional.",
        "If your current website feels outdated, a redesign is a smart move.\n\nOptivax Global can refresh the design, improve user experience, and make it mobile-friendly with a cleaner, more professional feel.",
        "Yes, we can help redesign your website with a more premium look, better navigation, and stronger content structure.\n\nThe goal is not only to make it look better but to make it work better for your business.",
        "A good redesign improves both appearance and performance.\n\nWe can help your website feel cleaner, faster, and easier to navigate.",
        "If visitors find your current site confusing, the issue is often layout, messaging, or unclear structure.\n\nWe can redesign the experience so customers understand your offer faster and feel more confident reaching out.",
      ],
    },
    {
      key: "website",
      priority: 80,
      keywords: [
        "website",
        "web design",
        "web development",
        "site",
        "landing page",
        "business website",
        "company website",
        "portfolio website",
        "service website",
        "home page",
        "contact form",
        "booking website",
        "professional website",
        "new website",
        "create website",
        "build website",
        "developer",
        "frontend",
        "react website",
        "wordpress website",
        "website banana",
        "site banana",
        "web banana",
        "website chahiye",
        "website banwani",
        "business site",
        "service page",
        "responsive website",
        "mobile website",
        "lead generation website",
        "custom website",
        "modern website",
        "web layout",
        "website layout",
        "web page",
        "pages",
        "website pages",
        "web developer",
        "website developer",
      ],
      actions: websiteActions,
      replies: [
        "Absolutely  a professional website can become your strongest digital asset.\n\nOptivax Global designs modern, mobile-friendly, fast, and user-friendly websites that help your business look trustworthy and professional.\n\nWe can help with business websites, landing pages, portfolio websites, service pages, and complete website development.",
        "A strong website helps customers understand your business, trust your brand, and take action.\n\nWe can create a clean, modern, responsive website with strong content flow, service sections, contact forms, and clear calls-to-action.",
        "Yes, we can build a professional website for your business.\n\nOur focus is clean design, smooth user experience, mobile responsiveness, fast loading, and clearly structured sections that help visitors quickly understand your value and contact you.",
        "Your website should work like a 24/7 digital storefront.\n\nWe can design it with strong visuals, clear content, service highlights, trust-building sections, and easy contact options so customers can quickly take action.",
        "A well-designed website gives your business instant credibility.\n\nWe can help you create a polished online presence with modern design, smooth navigation, clear messaging, and a layout built around your business goals.",
        "Yes, we can help from layout to launch.\n\nWhether you need a simple business website or a complete service-based website, our team can guide you with structure, design, content flow, and clearly organized sections.",
      ],
    },
    {
      key: "industryWebsite",
      priority: 78,
      keywords: [
        "restaurant",
        "cafe",
        "bakery",
        "salon",
        "barber",
        "clinic",
        "doctor",
        "dentist",
        "lawyer",
        "attorney",
        "real estate",
        "construction",
        "cleaning",
        "trucking",
        "transport",
        "hot sauce",
        "food business",
        "fashion brand",
        "clothing brand",
        "car dealer",
        "auto repair",
        "insurance",
        "medical billing",
        "healthcare",
        "nonprofit",
        "artist",
        "book artist",
        "photography",
        "coach",
        "consultant",
        "agency",
        "startup",
        "small business",
        "local business",
      ],
      actions: websiteActions,
      replies: [
        "That business can definitely benefit from a professional online presence.\n\nWe can create a website that explains your services clearly, builds trust, shows your work/products, and makes it easy for customers to contact or book with you.",
        "For this type of business, the website should focus on trust, clear information, strong visuals, and easy contact options.\n\nOptivax Global can design a clean website that helps visitors understand your business and take the next step.",
        "Yes, your business needs a website that quickly communicates what you offer and why customers should choose you.\n\nWe can help with homepage layout, service sections, gallery/portfolio, contact form, mobile design, and strong CTAs.",
        "A professional website can make your business look more established and easier to trust.\n\nWe can create a layout that highlights your services, location, contact details, customer benefits, and brand personality.",
      ],
    },
    {
      key: "logo",
      priority: 76,
      keywords: [
        "logo",
        "logo design",
        "business logo",
        "company logo",
        "brand logo",
        "modern logo",
        "minimal logo",
        "professional logo",
        "icon logo",
        "emblem",
        "wordmark",
        "logo banana",
        "logo banwana",
        "logo chahiye",
        "new logo",
        "creative logo",
        "mascot logo",
        "luxury logo",
        "simple logo",
        "text logo",
        "symbol logo",
        "monogram",
        "initial logo",
      ],
      actions: [
        { label: "View Logo Design", type: "route", value: "/logo-design" },
        { label: "Start Logo Design", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "A professional logo is the first visual impression of your business.\n\nOptivax Global can design a clean, memorable, and premium logo that matches your brand personality and helps your business look more trustworthy.",
        "Yes, we can help with modern logo design.\n\nWe focus on creating logos that are clean, recognizable, scalable, and suitable for websites, social media, business cards, packaging, and marketing materials.",
        "Your logo should make your brand easy to remember.\n\nOur logo design process focuses on strong visual identity, professional colors, balanced typography, and a clean look that works across digital and print platforms.",
        "A strong logo gives your business a more professional identity from day one.\n\nWe can create a custom logo direction based on your industry, audience, style preference, and brand personality.",
        "Yes, our team can design a logo that feels modern, clear, and brand-ready.\n\nWhether you want minimal, luxury, bold, creative, or corporate style, we can guide you with a professional direction.",
      ],
    },
    {
      key: "branding",
      priority: 74,
      keywords: [
        "branding",
        "brand identity",
        "brand design",
        "identity",
        "brand colors",
        "brand guideline",
        "visual identity",
        "brand style",
        "business identity",
        "rebrand",
        "brand kit",
        "brand package",
        "color palette",
        "typography",
        "brand look",
        "brand image",
        "professional identity",
        "company profile design",
        "stationery",
        "business card",
        "letterhead",
        "social media kit",
      ],
      actions: [
        { label: "Build My Brand", type: "route", value: "/contact" },
        { label: "View Logo Design", type: "route", value: "/logo-design" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Branding makes your business look consistent, professional, and memorable.\n\nWe can help with logo direction, color palette, typography, visual style, social media brand look, and overall identity that builds trust at first glance.",
        "A strong brand identity helps customers recognize and remember you.\n\nOptivax Global can create a premium visual identity that gives your business a professional look across website, social media, presentations, and marketing materials.",
        "If you want your business to look more premium and trustworthy, branding is the right step.\n\nWe can create a clean brand style that reflects your business values and improves your overall online presence.",
        "Branding is more than a logo  it is the complete feeling customers get when they see your business.\n\nWe can help you create a consistent visual identity that looks polished across every platform.",
        "A professional brand identity helps your business stand out and look more reliable.\n\nWe can design the colors, style, and visuals that make your brand easier to recognize.",
      ],
    },
    {
      key: "seo",
      priority: 72,
      keywords: [
        "seo",
        "search engine",
        "google ranking",
        "rank",
        "ranking",
        "organic traffic",
        "keywords",
        "keyword",
        "on page seo",
        "off page seo",
        "technical seo",
        "local seo",
        "google search",
        "visibility",
        "search results",
        "optimize website",
        "website seo",
        "google visibility",
        "search ranking",
        "seo audit",
        "backlinks",
        "content seo",
        "traffic increase",
        "near me",
        "local ranking",
        "google business",
        "gmb",
        "map ranking",
        "meta title",
        "meta description",
        "indexing",
        "search console",
        "sitemap",
      ],
      actions: [
        { label: "View Our Services", type: "route", value: "/services" },
        { label: "Contact Our Team", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Optivax Global currently focuses on custom website design, UI/UX design, logo branding, and eBook design.",
        "Optivax Global currently focuses on custom website design, UI/UX design, logo branding, and eBook design.",
        "Optivax Global currently focuses on custom website design, UI/UX design, logo branding, and eBook design.",
        "Optivax Global currently focuses on custom website design, UI/UX design, logo branding, and eBook design.",
        "Optivax Global currently focuses on custom website design, UI/UX design, logo branding, and eBook design.",
      ],
    },
    {
      key: "social",
      priority: 70,
      keywords: [
        "social media",
        "facebook",
        "instagram",
        "tiktok",
        "linkedin",
        "posts",
        "content",
        "content creation",
        "social posts",
        "manage social media",
        "reels",
        "captions",
        "hashtags",
        "engagement",
        "followers",
        "social media management",
        "page manage",
        "fb page",
        "ig page",
        "social designs",
        "post design",
        "carousel",
        "stories",
        "reel idea",
        "content calendar",
        "monthly posts",
        "brand posts",
        "creative posts",
      ],
      actions: marketingActions,
      replies: [
        "Yes, we can help with social media marketing.\n\nOur team supports content planning, branded visuals, profile design, post templates, and consistent brand presentation across your social channels.",
        "We can help manage and design your social presence.\n\nThis includes branded social media graphics, post templates, and content direction that keeps your channels consistent with your brand.",
        "Social media support is one of our services.\n\nWe can help with profile design, post templates, and branded visuals to keep your social channels professional and consistent.",
        "Yes, our design team can create branded visuals and post templates for your social channels as part of a broader social media presence.",
        "We can help with your social media presence. Let us know what you're working on and our team can suggest the right next step.",
      ],
    },
    {
      key: "ads",
      priority: 68,
      keywords: [
        "ads",
        "paid ads",
        "google ads",
        "facebook ads",
        "instagram ads",
        "meta ads",
        "ad campaign",
        "campaign",
        "leads",
        "lead generation",
        "traffic",
        "sales campaign",
        "promote",
        "advertising",
        "ppc",
        "cpc",
        "conversion campaign",
        "boost post",
        "paid marketing",
        "ad creative",
        "targeting",
        "audience",
        "retargeting",
        "landing page ads",
        "more leads",
        "get leads",
        "bookings",
        "messages campaign",
        "whatsapp campaign",
      ],
      actions: marketingActions,
      replies: [
        "Yes, we can help with paid advertising.\n\nOur team can support ad creative, landing page design, and campaign presentation so your ads look professional and on-brand.",
        "We can help with ad campaign creative and landing pages designed to support your paid advertising efforts.",
        "Paid ads support is part of what we offer from ad creative to landing page design built around your campaign goals.",
        "Yes, let us know more about your campaign and we can help with the creative and landing page side of it.",
        "We can help design ad creative and campaign landing pages. Tell us more about your project and we'll guide you.",
      ],
    },
    {
      key: "digitalMarketing",
      priority: 65,
      keywords: [
        "marketing",
        "digital marketing",
        "online marketing",
        "grow business",
        "business growth",
        "strategy",
        "brand awareness",
        "online presence",
        "more customers",
        "more clients",
        "get clients",
        "customer growth",
        "sales growth",
        "lead strategy",
        "marketing strategy",
        "digital strategy",
        "growth plan",
        "promote business",
        "online growth",
        "increase sales",
        "business promote",
      ],
      actions: marketingActions,
      replies: [
        "Yes, digital marketing is one of our services.\n\nWe can help with campaign planning, brand messaging, and a consistent digital presence built around your business goals.",
        "We can help with digital marketing alongside a professionally designed website, app interface, or brand identity everything works better when it's consistent.",
        "That's something we can help with. Our team supports website design, UI/UX design, branding, eBook design, and digital marketing.",
        "Yes, we offer digital marketing support. A well-designed website and consistent brand identity are a great starting point happy to help with either.",
        "That's something we offer. Let us know more about your business and goals and we'll guide you to the right next step.",
      ],
    },
    {
      key: "appUiUx",
      priority: 64,
      keywords: [
        "app",
        "mobile app",
        "ui",
        "ux",
        "ui ux",
        "app design",
        "mobile design",
        "dashboard",
        "software",
        "prototype",
        "wireframe",
        "figma",
        "user interface",
        "user experience",
        "saas",
        "admin panel",
        "web app",
        "mobile screens",
        "application design",
        "product design",
        "dashboard ui",
        "app layout",
        "screen design",
        "app prototype",
        "ux flow",
        "user flow",
      ],
      actions: [
        {
          label: "View App Design",
          type: "route",
          value: "/mobile-app-design",
        },
        { label: "Discuss My App", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "A great app starts with a clean, simple, and user-friendly experience.\n\nWe design mobile app UI/UX layouts that feel modern, easy to use, and ready for development.",
        "Yes, we can help with app UI/UX design.\n\nOur focus is clear user flow, modern screens, professional layout, strong visual hierarchy, and a smooth experience that makes the app easy to understand.",
        "For mobile apps and dashboards, design clarity matters a lot.\n\nWe can create UI screens, user flows, wireframe direction, and polished layouts that help your product look professional and development-ready.",
        "A strong UI/UX design helps users understand your app faster and move through it smoothly.\n\nWe can design modern screens, clean navigation, and a user-friendly experience for your digital product.",
        "If you have an app idea, we can help turn it into a professional visual layout.\n\nFrom wireframes to polished UI screens, our team can create a design direction that looks clean and practical.",
      ],
    },
    {
      key: "ebook",
      priority: 62,
      keywords: [
        "ebook",
        "book cover",
        "cover design",
        "book design",
        "publishing",
        "kdp",
        "amazon book",
        "paperback",
        "kindle",
        "author",
        "manuscript",
        "book formatting",
        "cover",
        "children book",
        "novel cover",
        "book launch",
        "book marketing",
        "book cover design",
        "amazon kdp",
        "print cover",
        "front cover",
        "back cover",
        "spine",
        "author branding",
      ],
      actions: [
        {
          label: "View eBook Covers",
          type: "route",
          value: "/ebook-cover-design",
        },
        { label: "Start Cover Design", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Your book cover is the first thing readers notice, so it needs to look professional and genre-appropriate.\n\nOptivax Global creates clean, eye-catching, publishing-ready eBook covers designed to build trust and attract attention.",
        "Yes, we can help with eBook cover design.\n\nWe focus on strong typography, clear genre direction, professional layout, and a polished look suitable for publishing platforms.",
        "A strong cover can make your book feel more credible before the reader even opens it.\n\nWe can design eBook covers, paperback layouts, and KDP-ready visuals with a professional finish.",
        "For authors, presentation matters a lot.\n\nWe can create a cover that matches your book genre, improves visual appeal, and gives your publishing project a more professional look.",
        "Whether it’s fiction, children’s book, business book, or self-help, your cover needs the right visual direction.\n\nWe can help design a cover that feels clean, market-ready, and attractive to readers.",
      ],
    },
    {
      key: "presentation",
      priority: 60,
      keywords: [
        "presentation",
        "pitch deck",
        "company profile",
        "corporate",
        "proposal",
        "slides",
        "powerpoint",
        "deck",
        "business proposal",
        "investor deck",
        "sales deck",
        "profile design",
        "ppt",
        "pptx",
        "slide deck",
        "corporate presentation",
        "business deck",
        "proposal design",
        "presentation design",
        "investor presentation",
        "company presentation",
      ],
      actions: [
        {
          label: "View Presentations",
          type: "route",
          value: "/corporate-presentation-design",
        },
        { label: "Create My Deck", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "A professional presentation helps your business pitch feel clear, premium, and convincing.\n\nWe design corporate presentations, pitch decks, company profiles, and business proposal decks that make your message stronger.",
        "Yes, we can help you create a clean and impactful presentation.\n\nOur slides focus on structure, visual storytelling, premium layout, brand consistency, and clear communication.",
        "Whether you need a company profile, pitch deck, or proposal presentation, we can design it in a way that looks professional and helps your audience understand your value quickly.",
        "A strong presentation can improve how clients, investors, or partners understand your business.\n\nWe can turn your content into a polished deck with clean visuals and a clear message flow.",
        "If your presentation looks basic or unclear, we can redesign it into a more premium and professional format.\n\nThe goal is to make your business message easier to understand and more impressive.",
      ],
    },
    {
      key: "content",
      priority: 58,
      keywords: [
        "content",
        "copywriting",
        "website content",
        "blog content",
        "caption",
        "captions",
        "description",
        "seo content",
        "sales copy",
        "landing page copy",
        "service content",
        "about us",
        "profile content",
        "brand content",
        "writing",
        "blog writing",
        "article writing",
        "product description",
        "social media caption",
      ],
      actions: [
        { label: "Discuss Content", type: "route", value: "/contact" },
        { label: "View Blog", type: "route", value: "/blog" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Good content makes your business easier to understand and more persuasive.\n\nWe can help with website copy, service descriptions, eBook content structure, and business-focused messaging.",
        "Yes, content direction is very important for websites and design projects.\n\nWe can help write clear, professional content that explains your services and gives visitors a strong impression of your brand.",
        "Your design attracts attention, but your content builds trust.\n\nWe can help create website sections, headlines, service descriptions, and CTAs that match your brand and business goals.",
        "If your current content feels weak or unclear, we can improve it with stronger wording, better structure, and a more professional tone.\n\nThis helps customers understand your offer faster.",
      ],
    },
    {
      key: "technical",
      priority: 56,
      keywords: [
        "domain",
        "hosting",
        "server",
        "email setup",
        "business email",
        "ssl",
        "cloudflare",
        "godaddy",
        "hostinger",
        "dns",
        "website live",
        "deploy",
        "deployment",
        "technical issue",
        "bug",
        "fix website",
        "maintenance",
        "support",
        "update content",
        "broken",
        "error",
        "not working",
        "website down",
        "form not working",
        "mail not receiving",
        "mx record",
        "smtp",
        "webmail",
        "speed issue",
        "loading issue",
        "responsive issue",
      ],
      actions: [
        { label: "Get Technical Help", type: "route", value: "/contact" },
        { label: "WhatsApp Support", type: "whatsapp" },
        { label: "Email Team", type: "email" },
      ],
      replies: [
        "Yes, we can guide you with website technical setup as well.\n\nThis can include domain connection, hosting setup, website deployment, SSL, business email direction, DNS-related guidance, and general website maintenance support.",
        "Technical setup is an important part of making your website professional and reliable.\n\nOur team can help review the issue and guide you with the best next step for hosting, domain, DNS, SSL, or website fixes.",
        "If your website has a technical issue or needs setup support, share the details with our team.\n\nWe can help identify what’s needed and guide you toward a clean, stable solution.",
        "Website issues can affect customer trust and lead flow.\n\nIf something is broken, slow, or not connected properly, our team can review the situation and help you fix it professionally.",
        "From domain to hosting and email setup, small technical details matter.\n\nWe can help make sure your website setup is stable, connected, and ready for customers.",
      ],
    },
    {
      key: "timelineProcess",
      priority: 54,
      keywords: [
        "timeline",
        "how long",
        "duration",
        "delivery",
        "deliver",
        "process",
        "steps",
        "how it works",
        "start process",
        "revision",
        "revisions",
        "deadline",
        "urgent",
        "asap",
        "quick",
        "fast",
        "time",
        "kitna time",
        "kab tak",
        "complete",
        "completion",
        "workflow",
        "project process",
        "start kaise",
        "what is process",
      ],
      actions: [
        { label: "Discuss Timeline", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
        { label: "Call Now", type: "phone" },
      ],
      replies: [
        "Project timeline depends on the scope and required features.\n\nUsually, we first understand your requirement, prepare the direction, start the design/development work, share updates, collect feedback, and then finalize everything professionally.",
        "Our process is simple and clear:\n\n1. Understand your business\n2. Finalize the requirement\n3. Create design direction\n4. Develop or design the project\n5. Review and refine\n6. Final delivery\n\nFor urgent projects, our team can guide you based on availability.",
        "Delivery time depends on whether you need a logo, website, app design, presentation, or eBook design project.\n\nShare your requirement and deadline, and we’ll guide you with a realistic timeline.",
        "We keep the process organized so you know what is happening at each step.\n\nOnce we understand your project, we can give you a clear timeline, required details, and next steps.",
        "The starting process is easy.\n\nShare your business details, service requirement, preferred style, and deadline. Our team will review everything and guide you with the next step.",
      ],
    },
    {
      key: "portfolio",
      priority: 52,
      keywords: [
        "portfolio",
        "work",
        "sample",
        "samples",
        "designs",
        "previous work",
        "examples",
        "case study",
        "projects",
        "show work",
        "your work",
        "past work",
        "recent work",
        "design sample",
        "website sample",
        "logo sample",
        "show me",
        "can i see",
        "reference",
        "layout",
        "mockup",
      ],
      actions: [
        { label: "View Portfolio", type: "route", value: "/#portfolio" },
        { label: "Start Similar Project", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "Of course  our portfolio will help you see the quality, style, and professional approach behind our work.\n\nYou can explore our website, branding, app UI/UX, and digital design projects to understand how we create modern business-focused designs.",
        "Yes, you can view our portfolio to get a better idea of our design quality and creative direction.\n\nIf you like a certain style, our team can create a custom direction for your own brand.",
        "Our portfolio showcases how we build clean, modern, and professional digital experiences for businesses.\n\nYou can review the work and then share what type of design style you prefer.",
        "Samples are a great way to understand design direction.\n\nYou can explore our portfolio, and our team can also create a custom layout direction based on your business goals.",
        "Yes, reviewing previous work can help you choose the right style.\n\nWe can guide you with a design direction that matches your industry, audience, and brand personality.",
      ],
    },
    {
      key: "aboutCompany",
      priority: 50,
      keywords: [
        "who are you",
        "about",
        "about company",
        "company",
        "optivax",
        "optivax global",
        "agency",
        "digital agency",
        "where are you",
        "location",
        "trust",
        "why choose",
        "why should",
        "experience",
        "team",
        "are you legit",
        "real company",
        "company details",
        "your services",
        "what do you do",
        "what you do",
        "tell me about",
      ],
      actions: [
        { label: "Explore Services", type: "route", value: "/#services" },
        { label: "View Portfolio", type: "route", value: "/#portfolio" },
        { label: "Contact Team", type: "route", value: "/contact" },
      ],
      replies: [
        "Optivax Global is a digital company providing professional design, development, branding, publishing, and creative solutions.\n\nOur focus is simple: quality work, clear communication, and professional results.",
        "We help businesses look more professional with creative digital design work.\n\nFrom websites and branding to UI/UX and eBook design, our team focuses on building trust and a better customer experience.",
        "Optivax Global works with businesses that want to improve their online presence and brand image.\n\nWe combine design and craftsmanship to help your business stand out professionally.",
        "Our team focuses on helping businesses create a stronger digital identity.\n\nWhether you need a website, logo, UI/UX design, or eBook design, we guide you with a clean, design-focused approach.",
        "Optivax Global is built around modern digital design solutions for businesses that want to look credible and professional online.\n\nWe focus on design quality, customer experience, and practical results.",
      ],
    },
    {
      key: "faqBlog",
      priority: 48,
      keywords: [
        "faq",
        "faqs",
        "question",
        "questions",
        "answer",
        "blog",
        "article",
        "learn",
        "tips",
        "guide",
        "knowledge",
        "resources",
        "help article",
        "information",
        "read more",
        "blogs",
        "frequently asked",
        "common questions",
      ],
      actions: [
        { label: "Open FAQs", type: "route", value: "/faqs" },
        { label: "Open Blog", type: "route", value: "/blog" },
        { label: "Talk to Team", type: "route", value: "/contact" },
      ],
      replies: [
        "You can explore our FAQs and Blog pages for helpful information about our services, process, website design, and branding.\n\nIf you still need help, our team can guide you directly.",
        "Our FAQs answer common questions about services and process, while the blog shares useful insights about design, branding, and website best practices.",
        "Yes, we have helpful resources available.\n\nYou can visit the FAQs page for quick answers or the Blog page to learn more about design and building a stronger online presence.",
        "The FAQs page is useful for quick service questions, and the Blog page gives more detailed insights about design and branding.\n\nYou can also contact our team for direct guidance.",
      ],
    },
    {
      key: "contact",
      priority: 46,
      keywords: [
        "contact",
        "email",
        "phone",
        "call",
        "whatsapp",
        "talk",
        "consultation",
        "meeting",
        "start",
        "interested",
        "hire",
        "book",
        "schedule",
        "appointment",
        "demo",
        "discuss",
        "connect",
        "reach",
        "get started",
        "lets start",
        "let's start",
        "i want to start",
        "ready",
        "send details",
        "contact team",
        "talk to someone",
        "free consultation",
        "call me",
        "message",
      ],
      actions: contactActions,
      replies: [
        "Perfect  our team would be happy to guide you.\n\nYou can contact Optivax Global through email, phone, WhatsApp, or the contact page. Share your project idea and we’ll help you understand the best next step.",
        "Great  let’s move your idea forward.\n\nYou can reach our team directly and share your business type, required service, timeline, and budget range. We’ll guide you with a clear professional direction.",
        "Absolutely. The best next step is to connect with our team for a free consultation.\n\nWe’ll understand your requirement and suggest the right solution for your business.",
        "Yes, you can connect with our team directly.\n\nShare what you need  website, branding, app design, or eBook design  and we’ll guide you with a professional next step.",
        "We’re ready to help.\n\nYou can contact us through WhatsApp, call, email, or the contact page, and our team will guide you based on your exact requirement.",
      ],
    },
    {
      key: "thanks",
      priority: 44,
      keywords: [
        "thank",
        "thanks",
        "thank you",
        "ok",
        "okay",
        "great",
        "nice",
        "good",
        "perfect",
        "awesome",
        "sounds good",
        "cool",
        "fine",
        "alright",
        "theek",
        "shukriya",
        "good job",
        "nice thanks",
      ],
      actions: [
        { label: "Start Project", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
      replies: [
        "You’re welcome 😊\n\nWhenever you’re ready, Optivax Global can help turn your idea into a professional digital presence that looks premium and builds trust.",
        "Glad to help 😊\n\nThe next step is simple  share your project idea with our team and we’ll guide you with the best solution.",
        "Perfect 😊\n\nOur team can review your requirement and suggest a clear plan for website, branding, UI/UX, or design support.",
        "Happy to help 😊\n\nWhen you’re ready, you can connect with our team and we’ll guide you with a clean, professional direction.",
      ],
    },
  ];

  const getBotReply = (userText) => {
    const text = normalizeText(userText);

    if (!text) {
      return {
        text: "Please type your message so I can guide you properly.",
        actions: [
          { label: "Explore Services", type: "route", value: "/#services" },
          { label: "Contact Team", type: "route", value: "/contact" },
        ],
      };
    }

    const matchedIntents = intentBank
      .map((intent) => ({
        ...intent,
        score: scoreIntent(text, intent.keywords),
      }))
      .filter((intent) => intent.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.priority - a.priority;
      });

    if (matchedIntents.length > 0) {
      const bestIntent = matchedIntents[0];

      return {
        text: pickReply(bestIntent.key, bestIntent.replies),
        actions: bestIntent.actions,
      };
    }

    const fallbackReplies = [
      "Thanks for sharing that.\n\nOptivax Global can help with websites, development, logo design, branding, app UI/UX, eBook covers, animation, and digital marketing.\n\nCould you tell me which service you are interested in?",
      "I understand. To guide you better, please share what you need help with  website, branding, app UI/UX, eBook cover, digital marketing, or presentation design.\n\nOur team will suggest the best next step.",
      "That sounds interesting.\n\nOptivax Global can help you build a professional digital presence based on your business goal. Tell me your business type and what you want to improve, and I’ll guide you in the right direction.",
      "Thanks for your message.\n\nTo give you the most useful direction, please share whether you need a new website, redesign, logo, app UI/UX, eBook cover, or presentation support.",
      "I can guide you better with one quick detail.\n\nAre you looking to build something new, improve your current online presence, or grow your business online?",
      "Got it.\n\nOur team supports businesses with design, development, branding, digital marketing, and more. Share your goal in simple words, and I'll suggest the most relevant service.",
    ];

    return {
      text: pickReply("fallback", fallbackReplies),
      actions: [
        { label: "Explore Services", type: "route", value: "/#services" },
        { label: "Design Consultation", type: "route", value: "/contact" },
        { label: "WhatsApp Team", type: "whatsapp" },
      ],
    };
  };

  const sendMessage = (customText) => {
    const messageText = customText || input.trim();
    if (!messageText) return;

    const userMessage = {
      sender: "user",
      text: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotReply(messageText);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply.text,
          actions: botReply.actions,
        },
      ]);

      setIsTyping(false);
    }, 650);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Optivax Global chatbot"
          className="fixed bottom-36 right-5 z-[9999] group"
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-[#1BBCEF] blur-xl opacity-40 group-hover:opacity-75 transition" />

            <span className="absolute -inset-2 rounded-full border border-[#1BBCEF]/30 animate-ping" />

            <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] flex items-center justify-center shadow-lg shadow-[#1BBCEF]/35 border border-white/20 transition-all duration-300 group-hover:scale-110">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>

            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-[#0C0D0D] rounded-full" />

            <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#0C0D0D] border border-[#1BBCEF]/30 px-4 py-2 text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300">
              Need help? Chat with us
            </span>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-28 right-5 z-[9999] w-[calc(100vw-1.5rem)] max-w-[390px] max-h-[calc(100vh-9rem)] overflow-hidden rounded-3xl border border-white/10 bg-[#0C0D0D] shadow-2xl shadow-black/70">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#071724] via-[#082033] to-[#004495] px-5 py-4 border-b border-white/10">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#1BBCEF]/20 blur-2xl" />
            <div className="absolute -left-10 bottom-0 w-28 h-28 rounded-full bg-[#004495]/30 blur-2xl" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] flex items-center justify-center shadow-lg shadow-[#1BBCEF]/25 border border-white/20">
                  <Bot className="w-6 h-6 text-white" />
                  <span className="absolute -right-1 -bottom-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#082033]" />
                </div>

                <div>
                  <h3 className="text-white font-bold leading-tight flex items-center gap-1">
                    Optivax Assistant
                    <Sparkles size={14} className="text-[#38D9FF]" />
                  </h3>
                  <p className="text-[#E9FBFF]/75 text-xs">
                    Online • Replies instantly
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-white/10 border border-white/10 px-2 py-2 text-center">
                <Zap size={14} className="mx-auto text-[#38D9FF] mb-1" />
                <p className="text-[10px] text-white/80 font-medium">
                  Fast Help
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/10 px-2 py-2 text-center">
                <ShieldCheck
                  size={14}
                  className="mx-auto text-[#38D9FF] mb-1"
                />
                <p className="text-[10px] text-white/80 font-medium">
                  Pro Guidance
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/10 px-2 py-2 text-center">
                <Clock size={14} className="mx-auto text-[#38D9FF] mb-1" />
                <p className="text-[10px] text-white/80 font-medium">
                  Quick Start
                </p>
              </div>
            </div>
          </div>

          <div className="h-[345px] max-h-[42vh] overflow-y-auto px-4 py-4 space-y-4 bg-[radial-gradient(circle_at_top_right,rgba(27,188,239,0.14),transparent_35%),#0C0D0D] scrollbar-thin scrollbar-thumb-[#1BBCEF]/40 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#12202B] border border-white/10 flex items-center justify-center">
                      <Bot size={16} className="text-[#38D9FF]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-[#1BBCEF] to-[#004495] text-white rounded-br-md shadow-lg shadow-[#1BBCEF]/15"
                        : "bg-white/[0.06] text-[#E9FBFF]/90 border border-white/10 rounded-bl-md"
                    }`}
                  >
                    {message.text}
                  </div>

                  {message.sender === "user" && (
                    <div className="w-8 h-8 shrink-0 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {message.actions && message.sender === "bot" && (
                  <div className="ml-10 mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => handleAction(action)}
                        className="inline-flex items-center gap-1 rounded-full border border-[#1BBCEF]/40 bg-[#1BBCEF]/10 px-3 py-2 text-xs font-semibold text-[#E9FBFF] hover:bg-[#1BBCEF] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {action.label}
                        <ChevronRight size={13} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#12202B] border border-white/10 flex items-center justify-center">
                  <Bot size={16} className="text-[#38D9FF]" />
                </div>

                <div className="bg-white/[0.06] border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#38D9FF] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#38D9FF] animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-[#38D9FF] animate-bounce [animation-delay:0.3s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-3 border-t border-white/10 bg-[#0F1010]">
            <div className="flex flex-wrap gap-2 mb-3 max-h-[74px] overflow-y-auto pr-1">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="rounded-full bg-white/[0.06] hover:bg-[#1BBCEF]/20 border border-white/10 hover:border-[#1BBCEF]/40 px-3 py-1.5 text-xs text-[#E9FBFF]/80 hover:text-white transition"
                >
                  {reply}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Type your message..."
                className="flex-1 h-11 rounded-full bg-white/[0.06] border border-white/10 px-4 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#1BBCEF]/70 transition"
              />

              <button
                onClick={() => sendMessage()}
                className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-r from-[#1BBCEF] to-[#004495] flex items-center justify-center text-white hover:scale-105 transition shadow-lg shadow-[#1BBCEF]/20"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
              <button
                onClick={() => handleAction({ type: "email" })}
                className="flex items-center gap-1 hover:text-[#38D9FF] transition"
              >
                <Mail size={12} />
                Email
              </button>

              <button
                onClick={() => handleAction({ type: "phone" })}
                className="flex items-center gap-1 hover:text-[#38D9FF] transition"
              >
                <Phone size={12} />
                Call
              </button>

              <button
                onClick={() => handleAction({ type: "whatsapp" })}
                className="flex items-center gap-1 hover:text-[#38D9FF] transition"
              >
                <MessageCircle size={12} />
                WhatsApp
              </button>

              <button
                onClick={() => goToRoute("/contact")}
                className="flex items-center gap-1 hover:text-[#38D9FF] transition"
              >
                <ExternalLink size={12} />
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;