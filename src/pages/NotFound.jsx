import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found - Optivax Global</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,188,239,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,68,149,0.22),transparent_35%)] z-[1]" />

        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-[#1BBCEF]/10 rounded-full blur-[120px] z-[1]" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px] bg-[#004495]/20 rounded-full blur-[120px] z-[1]" />

        <div className="relative z-10 max-w-3xl text-center">
          <div className="mx-auto mb-7 w-24 h-24 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-[#1BBCEF]/10">
            <SearchX size={50} className="text-[#1BBCEF]" />
          </div>

          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-[#4cc9ff] to-[#1BBCEF] bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            This Page Doesn’t Exist
          </h2>

          <p className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Looks like the page you’re trying to access has been removed,
            renamed, or never existed.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="group bg-gradient-to-r from-[#1BBCEF] to-[#004495] hover:from-[#004495] hover:to-[#1BBCEF] text-[#E9FBFF] px-7 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg shadow-[#1BBCEF]/25 hover:shadow-[#1BBCEF]/45 hover:-translate-y-0.5 transition-all duration-300"
            >
              Back To Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group relative overflow-hidden border border-[#1BBCEF]/30 bg-white/5 backdrop-blur-md text-white px-7 py-3 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 hover:border-[#1BBCEF]"
            >
              <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-l from-[#1BBCEF]/20 to-transparent" />

              <ArrowLeft className="relative z-10 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />

              <span className="relative z-10">Go Back</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}