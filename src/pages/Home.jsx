import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import SectionAnimator from '@/components/SectionAnimator';

const Home = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Optivax Global",
    "url": "https://optivaxglobal.com/",
    "logo": "https://optivaxglobal.com/logo.png",
    "description": "Optivax Global creates professional website design, branding, UI/UX, eBook, and digital creative services for businesses and creators.",
    "sameAs": [
  "https://www.facebook.com/OptivaxGlobalSolution/",
  "https://www.instagram.com/optivaxglobal/",
  "https://www.linkedin.com/company/115777328/",
  "https://x.com/OptivaxGlobal",
  "https://www.youtube.com/@OptivaxGlobal",
  "https://www.pinterest.com/optivaxglobal/",
  "https://www.tiktok.com/@optivaxglobal"
]
  };

  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Our Services",
  "itemListElement": [
    { "@type": "Service", "name": "Website Design", "url": "https://optivaxglobal.com/web-design" },
    { "@type": "Service", "name": "Web Development", "url": "https://optivaxglobal.com/web-development" },
    { "@type": "Service", "name": "UI/UX Design", "url": "https://optivaxglobal.com/ui-ux-design" },
    { "@type": "Service", "name": "Mobile App Development", "url": "https://optivaxglobal.com/mobile-app-development" },
    { "@type": "Service", "name": "Mobile App Design", "url": "https://optivaxglobal.com/mobile-app-design" },
    { "@type": "Service", "name": "Logo Design", "url": "https://optivaxglobal.com/logo-design" },
    { "@type": "Service", "name": "Branding Design", "url": "https://optivaxglobal.com/brand-design" },
    { "@type": "Service", "name": "Brand Management", "url": "https://optivaxglobal.com/brand-management" },
    { "@type": "Service", "name": "eBook Cover Design", "url": "https://optivaxglobal.com/ebook-cover-design" },
    { "@type": "Service", "name": "eBook Publishing", "url": "https://optivaxglobal.com/ebook-publishing" },
    { "@type": "Service", "name": "Animation Services", "url": "https://optivaxglobal.com/animation" },
    { "@type": "Service", "name": "Corporate Presentation Design", "url": "https://optivaxglobal.com/corporate-presentation-design" },
    { "@type": "Service", "name": "Graphic Design", "url": "https://optivaxglobal.com/graphics-design" },
    { "@type": "Service", "name": "Brochure Design", "url": "https://optivaxglobal.com/brochure-design" },
    { "@type": "Service", "name": "Flyer Design", "url": "https://optivaxglobal.com/flyer-design" },
    { "@type": "Service", "name": "Stationery Design", "url": "https://optivaxglobal.com/stationary-design" },
    { "@type": "Service", "name": "CMS Solutions", "url": "https://optivaxglobal.com/content-management-system" },
    { "@type": "Service", "name": "Digital Marketing", "url": "https://optivaxglobal.com/digital-marketing" },
<<<<<<< HEAD
=======
    { "@type": "Service", "name": "Search Engine Optimization", "url": "https://optivaxglobal.com/search-engine-optimization" },
>>>>>>> 1b088f866b1dd5ae1736967832b5f824858cac95
    { "@type": "Service", "name": "Search Engine Marketing", "url": "https://optivaxglobal.com/search-engine-marketing" },
    { "@type": "Service", "name": "Social Media Marketing", "url": "https://optivaxglobal.com/social-media-marketing" },
    { "@type": "Service", "name": "Email Marketing", "url": "https://optivaxglobal.com/email-marketing" },
    { "@type": "Service", "name": "Pay Per Click", "url": "https://optivaxglobal.com/pay-per-click" }
  ]
};

  return (
    <>
      <Helmet>
        <title>
          Custom Website & Digital Design Services | Optivax Global
        </title>

        <meta
          name="description"
          content="Optivax Global provides professional digital design, development, branding, publishing, and creative solutions for businesses, brands, and creators."
        />

        <meta
          name="keywords"
          content="Optivax Global, website design, web development, UI/UX design agency, branding services, eBook design, digital marketing"
        />

        <meta name="author" content="Optivax Global" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optivaxglobal.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Website & Digital Design Services | Optivax Global" />
        <meta
          property="og:description"
          content="Optivax Global creates professional website design, branding, UI/UX, eBook, and digital creative services for businesses and creators."
        />
        <meta property="og:url" content="https://optivaxglobal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://optivaxglobal.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Website & Digital Design Services | Optivax Global" />
        <meta
          name="twitter:description"
          content="Professional website design, branding, UI/UX, eBook, and digital creative services for businesses and creators."
        />
        <meta name="twitter:image" content="https://optivaxglobal.com/og-image.jpg" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <main>
        <Hero />

        <SectionAnimator>
          <TrustedClients />
        </SectionAnimator>

        <SectionAnimator>
          <Services />
        </SectionAnimator>

        <About />

        <SectionAnimator>
          <Portfolio />
        </SectionAnimator>

        <SectionAnimator>
          <Testimonials />
        </SectionAnimator>

        <SectionAnimator>
          <Stats />
        </SectionAnimator>

        <SectionAnimator>
          <CTA />
        </SectionAnimator>
      </main>
    </>
  );
};

export default Home;