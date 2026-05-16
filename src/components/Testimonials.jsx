import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import Avatar01 from "@/assets/testimonials/01.webp";
import Avatar02 from "@/assets/testimonials/02.webp";
import Avatar03 from "@/assets/testimonials/03.webp";
import Avatar04 from "@/assets/testimonials/04.webp";
import Avatar05 from "@/assets/testimonials/05.webp";
import Avatar06 from "@/assets/testimonials/06.webp";
import Avatar07 from "@/assets/testimonials/07.webp";
import Avatar08 from "@/assets/testimonials/08.webp";
import Avatar09 from "@/assets/testimonials/09.webp";
import Avatar10 from "@/assets/testimonials/10.webp";

const testimonials = [
  {
    id: 1,
    name: "Olivia Carter",
    role: "Manager, TechVision",
    content:
      "Our brand’s online presence has been completely transformed by Optivax Global. The website now feels modern, professional, and much better aligned with our business goals. Since the redesign, we’ve also started getting higher quality leads.",
    avatar: Avatar02,
  },
  {
    id: 2,
    name: "Ethan Walker",
    role: "Marketing Assistant, GrowthCo",
    content:
      "Their team made digital marketing feel simple and effective. Everything was explained clearly, and the strategies genuinely helped us improve engagement and build a much stronger online presence.",
    avatar: Avatar01,
  },
  {
    id: 3,
    name: "Sophia Bennett",
    role: "Management Director",
    content:
      "I really loved the final eBook cover design. It looked clean, premium, and eye-catching without feeling over the top. It gave my book a far more professional and polished appearance.",
    avatar: Avatar04,
  },
  {
    id: 4,
    name: "James Mitchell",
    role: "Business Owner",
    content:
      "They handled everything from the logo design to the website layout with great attention to detail. The team understood our vision perfectly and delivered a modern, trustworthy brand identity.",
    avatar: Avatar03,
  },
  {
    id: 5,
    name: "Chloe Anderson",
    role: "Product Manager, NexGen",
    content:
      "The UI/UX design process was smooth from start to finish. The final app interface looked premium, was easy to navigate, and felt much more user-friendly than our previous design.",
    avatar: Avatar05,
  },
  {
    id: 6,
    name: "Daniel Reyes",
    role: "Startup Consultant",
    content:
      "What impressed us most was that they focused on more than just visuals. They genuinely thought about branding, customer experience, and how to make the business feel more credible online.",
    avatar: Avatar07,
  },
  {
    id: 7,
    name: "Hannah Malik",
    role: "Founder, StyleNest",
    content:
      "Our old branding felt outdated, but Optivax Global gave us a fresh and modern identity that truly reflects the quality of our business. The website now feels polished, sleek, and easy for customers to use.",
    avatar: Avatar06,
  },
  {
    id: 8,
    name: "Nathan Brooks",
    role: "Agency Partner",
    content:
      "Communication throughout the project was smooth and professional. The final designs helped us present our services with much more clarity, confidence, and professionalism.",
    avatar: Avatar08,
  },
  {
    id: 9,
    name: "Zara Ahmed",
    role: "Author",
    content:
      "The book cover exceeded my expectations. It looked bold, professional, and visually strong enough to stand out instantly. I also received amazing feedback from readers after the launch.",
    avatar: Avatar09,
  },
  {
    id: 10,
    name: "Lucas Turner",
    role: "Small Business Owner",
    content:
      "The new website gave our business a far stronger first impression. From the layout to the visual direction, everything looked clean, modern, and professionally designed.",
    avatar: Avatar10,
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