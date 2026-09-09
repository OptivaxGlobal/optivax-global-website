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
import HomepageConversionSections from '@/components/HomepageConversionSections';

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
    { "@type": "Service", "name": "CMS Solutions", "url": "https://optivaxglobal.com/content-management-system" }
    /* Hidden from public view (not deleted): Digital Marketing, SEO, SEM, Social Media Marketing,
       Email Marketing, and Pay Per Click service entries have been removed from public structured data. */
  ]
};

  return (
    <>
      <Helmet>
        <title>
          Business Websites & Custom Web Development | Optivax Global
        </title>

        <meta
          name="description"
          content="Optivax Global builds professional WordPress websites and scalable custom web platforms for businesses ready to grow."
        />

        <meta
          name="keywords"
          content="Optivax Global, website design, web development, UI/UX design agency, branding services, eBook design, logo design"
        />

        <meta name="author" content="Optivax Global" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optivaxglobal.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Custom Website & Digital Design Services | Optivax Global" />
        <meta
          property="og:description"
          content="Optivax Global builds professional business websites and scalable custom digital platforms for growing companies."
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

        <HomepageConversionSections />

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