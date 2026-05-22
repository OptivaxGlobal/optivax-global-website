import React from "react";
import BlogArticleLayout from "./BlogArticleLayout";
import webDesignBlogImg from "@/assets/blog-images/web-design-blog.jpg";

const sections = [
  {
    heading: "Introduction",
    text: "Modern web design has become one of the biggest factors in how customers judge businesses online. A professional website now influences trust, credibility, and customer decisions.",
  },

  {
    heading: "First Impressions Matter",
    text: "Most visitors decide within seconds whether a business looks trustworthy or outdated. A modern website creates confidence and encourages visitors to continue exploring services.",
  },

  {
    heading: "User Experience Is Important",
    text: "Modern web design is not only about visuals. Layouts, spacing, readability, responsiveness, and navigation all help users interact with websites more comfortably.",
  },

  {
    heading: "Mobile Optimization Is Essential",
    text: "Most users now browse websites on mobile devices. Businesses need responsive websites that work perfectly across phones, tablets, and desktops.",
  },

  {
    heading: "SEO and Performance",
    text: "Google favors websites that are fast, mobile-friendly, and user-focused. Modern web design supports SEO, better rankings, and stronger online visibility.",
  },

  {
    heading: "Final Thoughts",
    text: "At Optivax Global, web design is built around user experience, business growth, and professional branding. A modern website helps businesses create stronger digital experiences and long-term trust.",
  },
];

const WebDesignBlog = () => {
  return (
    <BlogArticleLayout
      title="The Importance of Modern Web Design in the Present Day"
      metaTitle="Importance of Professional Web Design | Optivax Global"
      metaDescription="Discover why professional web design helps businesses improve user experience, SEO, trust, and online growth."
      canonicalUrl="https://optivaxglobal.com/blog/importance-of-professional-web-design"
      category="Web Design"
      date="May 2026"
      image={webDesignBlogImg}
      imageAlt="Professional web design blog by Optivax Global"
      sections={sections}
    />
  );
};

export default WebDesignBlog;