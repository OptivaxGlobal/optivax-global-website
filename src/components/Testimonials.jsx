import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, TechVision",
    content:
      "Optivax Global gave our brand a complete professional upgrade. The website design, visuals, and strategy helped us look more credible and attract better leads.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    content:
      "Their digital marketing approach was clear, practical, and result-focused. We finally had a stronger online presence and better engagement from our audience.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Author & Entrepreneur",
    content:
      "The eBook cover design was premium and eye-catching. It instantly made my book look more professional and helped improve buyer confidence.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Owner",
    content:
      "From logo design to website layout, everything was handled professionally. The team understood our vision and turned it into a clean digital brand.",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Product Manager, NexGen",
    content:
      "Their app UI/UX design was simple, modern, and user-friendly. The final interface looked premium and made the user journey much easier.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Chris Martinez",
    role: "Startup Consultant",
    content:
      "Optivax Global delivers more than design. They think about business, trust, conversion, and customer experience — exactly what a growing brand needs.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Ayesha Khan",
    role: "Founder, StyleNest",
    content:
      "They created a clean brand identity and website that finally matched the quality of our business. Everything felt polished, modern, and easy to use.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Daniel Brooks",
    role: "Agency Partner",
    content:
      "The communication was smooth and the final work looked premium. Optivax Global helped us present our services with more confidence and clarity.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Noor Hassan",
    role: "Author",
    content:
      "My book cover looked professional, bold, and market-ready. The design made the book feel more premium and helped it stand out visually.",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Ryan Cooper",
    role: "Small Business Owner",
    content:
      "Their website design gave our business a much stronger first impression. The layout, copy, and visual direction all felt professional and trustworthy.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < testimonials.length - itemsPerPage;

  const scroll = (direction) => {
    let newIndex = currentIndex;

    if (direction === "left" && canScrollLeft) {
      newIndex = Math.max(0, currentIndex - 1);
    }

    if (direction === "right" && canScrollRight) {
      newIndex = Math.min(testimonials.length - itemsPerPage, currentIndex + 1);
    }

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);

      if (scrollContainerRef.current) {
        const card = scrollContainerRef.current.children[newIndex];

        if (card) {
          scrollContainerRef.current.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const handleWheelScroll = (e) => {
    if (!scrollContainerRef.current) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-14">
          <div className="max-w-3xl">
            <span className="inline-block text-accent-purple font-semibold uppercase tracking-[0.25em] mb-4">
              Client Reviews
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Trusted by Brands That
              <span className="block text-accent-purple">
                Want Better Results
              </span>
            </h2>

            <p className="text-lg text-gray-300 mt-5 leading-relaxed">
              Businesses choose Optivax Global for professional design, clear
              strategy, reliable delivery, and digital solutions built to
              support long-term growth.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-white hover:bg-accent-purple/20 hover:border-accent-purple/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-white hover:bg-accent-purple/20 hover:border-accent-purple/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onWheel={handleWheelScroll}
          className="flex flex-nowrap gap-8 pb-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] snap-start"
            >
              <div className="bg-white/[0.04] p-8 rounded-3xl h-full flex flex-col border border-white/10 hover:border-accent-purple/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-9 h-9 text-accent-purple" />

                  <div className="flex gap-1 text-accent-purple">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                  “{testimonial.content}”
                </p>

                <div className="flex items-center pt-6 border-t border-white/10">
                  <img
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    alt={`${testimonial.name} review for Optivax Global`}
                    src={testimonial.avatar}
                    loading="lazy"
                  />

                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end md:hidden">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-white disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-white disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;