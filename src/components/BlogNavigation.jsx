import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const normalizePath = (path) => (path.startsWith("/") ? path : `/${path}`);

const BlogNavigation = ({ previousBlog, nextBlog }) => {
  if (!previousBlog && !nextBlog) return null;

  return (
    <nav
      aria-label="Blog post navigation"
      className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch"
    >
      {previousBlog && (
        <Link
          to={normalizePath(previousBlog.url)}
          aria-label={`Go to previous blog: ${previousBlog.title}`}
          className="group flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#1BBCEF]/45 hover:bg-[#1BBCEF]/10 sm:max-w-[320px]"
        >
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#A5F3FC]">
            <ArrowLeft className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
            Previous Blog
          </span>
          <span className="mt-2 block truncate text-sm font-bold text-white">
            {previousBlog.title}
          </span>
        </Link>
      )}

      {nextBlog && (
        <Link
          to={normalizePath(nextBlog.url)}
          aria-label={`Go to next blog: ${nextBlog.title}`}
          className="group flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-5 text-right shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#1BBCEF]/45 hover:bg-[#1BBCEF]/10 sm:ml-auto sm:max-w-[320px]"
        >
          <span className="flex items-center justify-end gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#A5F3FC]">
            Next Blog
            <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="mt-2 block truncate text-sm font-bold text-white">
            {nextBlog.title}
          </span>
        </Link>
      )}
    </nav>
  );
};

export default BlogNavigation;
