import React from "react";
import BlogArticleLayout from "./BlogArticleLayout";
import seoBlogImg from "@/assets/blog-images/seo-blog.webp";

const sections = [
  {
    heading: "Introduction",
    text: "Search visibility has become one of the most powerful tools for service businesses that want to improve visibility, attract customers, and grow online organically.",
  },

  {
    heading: "Customers Search Online First",
    text: "Most people search online before contacting businesses. Whether they need a digital agency, web designer, or local service provider, Google is usually the first place they visit.",
  },

  {
    heading: "Search Visibility Builds Trust",
    text: "A well-optimized website helps businesses appear in search results when customers search for related services online.",
  },

  {
    heading: "Better Quality Customer Inquiries",
    text: "Strong search visibility places businesses in front of people who are already searching for their services, which usually results in better quality inquiries and stronger conversions.",
  },

  {
    heading: "Local Search Visibility Matters",
    text: "Many customers search using terms like “near me” or “best service provider.” Local search visibility helps businesses appear in these searches and attract nearby customers.",
  },

  {
    heading: "Final Thoughts",
    text: "At Optivax Global, search visibility is focused on trust and long-term growth. Modern search visibility strategies help businesses become easier to find, easier to trust, and easier to choose.",
  },
];

const SeoBlog = () => {
  return (
    <BlogArticleLayout
      title="Why Search Visibility Matters for Small Businesses"
      metaTitle="Why Search Visibility Matters for Small Businesses - Optivax Global"
      metaDescription="Learn why search visibility helps service businesses improve online presence, build trust, attract the right customers, and grow organically."
      canonicalUrl="https://optivaxglobal.com/importance-of-small-businesses-seo-services"
      category="Search Visibility"
      date="April 2026"
      image={seoBlogImg}
      imageAlt="Search visibility for service businesses blog by Optivax Global"
      sections={sections}
    />
  );
};

export default SeoBlog;