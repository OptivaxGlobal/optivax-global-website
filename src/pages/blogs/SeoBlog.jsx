import React from "react";
import BlogArticleLayout from "./BlogArticleLayout";
import seoBlogImg from "@/assets/blog-images/seo-blog.jpg";

const sections = [
  {
    heading: "Introduction",
    text: "SEO has become one of the most powerful tools for service businesses that want to improve visibility, attract customers, and grow online organically.",
  },

  {
    heading: "Customers Search Online First",
    text: "Most people search online before contacting businesses. Whether they need a digital agency, web designer, or local service provider, Google is usually the first place they visit.",
  },

  {
    heading: "SEO Builds Visibility",
    text: "A well-optimized website helps businesses appear in search results when customers search for related services online.",
  },

  {
    heading: "Better Quality Leads",
    text: "SEO places businesses in front of people who are already searching for their services, which usually results in better quality leads and stronger conversions.",
  },

  {
    heading: "Local SEO Matters",
    text: "Many customers search using terms like “near me” or “best service provider.” Local SEO helps businesses appear in these searches and attract nearby customers.",
  },

  {
    heading: "Final Thoughts",
    text: "At Optivax Global, SEO is focused on visibility, trust, and long-term growth. Modern SEO strategies help businesses become easier to find, easier to trust, and easier to choose.",
  },
];

const SeoBlog = () => {
  return (
    <BlogArticleLayout
      title="The Importance of SEO for Small Service Businesses"
      metaTitle="Importance of SEO for Service Businesses | Optivax Global"
      metaDescription="Learn how SEO helps service businesses improve visibility, attract better leads, build trust, and grow online organically."
      canonicalUrl="https://optivaxglobal.com/blog/importance-of-seo-for-service-businesses"
      category="SEO"
      date="May 2026"
      image={seoBlogImg}
      imageAlt="SEO blog by Optivax Global"
      sections={sections}
    />
  );
};

export default SeoBlog;