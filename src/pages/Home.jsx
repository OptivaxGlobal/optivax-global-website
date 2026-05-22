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
    "url": "https://optivaxglobal.netlify.app/",
    "logo": "https://optivaxglobal.netlify.app/logo.png",
    "description": "Optivax Global is a digital service provider offering website design, app UI/UX design, Logo & Branding, ebook cover design, digital marketing, and brand strategy services.",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://www.instagram.com/"
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
      "url": " https://optivaxglobal.com/web-design-services"
    },
    {
      "@type": "Service",
      "name": "Logo & Branding",
      "url": "https://optivaxglobal.com/logo-design-services"
    },
    {
      "@type": "Service",
      "name": "Digital Marketing",
      "url": "https://optivaxglobal.com/digital-marketing-services"
    },
    {
      "@type": "Service",
      "name": "App UI/UX Design",
      "url": "https://optivaxglobal.com/app-ui-ux-design"
    },
    {
      "@type": "Service",
      "name": "Ebook Cover Design",
      "url": "https://optivaxglobal.com/ebook-cover-design-design"
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
    <link rel="canonical" href="https://optivaxglobal.com" />
      <Helmet>
        <title>
          Optivax Global | Website Design, Logo & Branding & Digital Marketing Agency
        </title>

        <meta
          name="description"
          content="Optivax Global helps businesses grow online with professional website design, Logo & Branding, app UI/UX, ebook cover design, branding, and digital marketing services."
        />

        <meta
          name="keywords"
          content="Optivax Global, website design agency, digital marketing agency, Logo & Branding services, app UI UX design, ebook cover design, branding agency, web development services"
        />

        <meta name="author" content="Optivax Global" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://optivaxglobal.netlify.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="Optivax Global | Digital Services Provider" />
        <meta
          property="og:description"
          content="Grow your business with professional websites, branding, Logo & Branding, app UI/UX, ebook covers, and digital marketing solutions."
        />
        <meta property="og:url" content="https://optivaxglobal.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://optivaxglobal.netlify.app/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Optivax Global | Website & Digital Marketing Agency" />
        <meta
          name="twitter:description"
          content="Professional digital services for businesses, authors, startups, and brands."
        />
        <meta name="twitter:image" content="https://optivaxglobal.netlify.app/og-image.jpg" />

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