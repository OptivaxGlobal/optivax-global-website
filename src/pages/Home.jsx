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
    "description": "Optivax Global is a digital service provider offering website design, app UI/UX design, Logo & Branding, ebook cover design, digital marketing, and brand strategy services.",
    "sameAs": [
  "https://www.facebook.com/OptivaxGlobalSolution/",
  "https://www.instagram.com/optivaxglobal/",
  "https://www.linkedin.com/company/115777328/",
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
    {
      "@type": "Service",
      "name": "Website Design & Development",
      "url": " https://optivaxglobal.com/web-design"
    },
    {
      "@type": "Service",
      "name": "Logo & Branding",
      "url": "https://optivaxglobal.com/logo-design"
    },
    {
      "@type": "Service",
      "name": "Digital Marketing",
      "url": "https://optivaxglobal.com/digital-marketing"
    },
    {
      "@type": "Service",
      "name": "App UI/UX Design",
      "url": "https://optivaxglobal.com/ui-ux-design"
    },
    {
      "@type": "Service",
      "name": "Ebook Cover Design",
      "url": "https://optivaxglobal.com/ebook-cover-design"
    },
    {
      "@type": "Service",
      "name": "eBook Publishing",
      "url": "https://optivaxglobal.com/ebook-publishing"
    },
    {
      "@type": "Service",
      "name": "Corporate Presentation Design",
      "url": "https://optivaxglobal.com/corporate-presentation-design"
    }
  ]
};

  return (
    <>
      <Helmet>
        <title>
          Custom Web Design Services Company in USA - Optivax Global
        </title>

        <meta
          name="description"
          content="Custom website design services by professional web development company in USA. Get digital marketing services from our expert team at Optivax Global"
        />

        <meta
          name="keywords"
          content="Optivax Global, website design agency, digital marketing agency, Logo & Branding services, app UI UX design, ebook cover design, branding agency, web development services"
        />

        <meta name="author" content="Optivax Global" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optivaxglobal.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Optivax Global | Digital Services Provider" />
        <meta
          property="og:description"
          content="Grow your business with professional websites, branding, Logo & Branding, app UI/UX, ebook covers, and digital marketing solutions."
        />
        <meta property="og:url" content="https://optivaxglobal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://optivaxglobal.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Optivax Global | Website & Digital Marketing Agency" />
        <meta
          name="twitter:description"
          content="Professional digital services for businesses, authors, startups, and brands."
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