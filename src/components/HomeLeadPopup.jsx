import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import ResponsiveImage from "@/components/ResponsiveImage";

// Import avatars
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

const HomeLeadPopup = ({ isOpen, onClose }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [isOpen]);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleFormSubmitSuccess = () => {
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .home-lead-popup-container {
              max-height: calc(100vh - 2rem) !important;
            }
          }
        `}
      </style>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0C0D0D] rounded-3xl border border-white/10 shadow-2xl overflow-hidden pointer-events-auto overflow-y-auto home-lead-popup-container">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-accent-purple/20 border border-white/10 text-white transition-all duration-300 hover:scale-110"
                  aria-label="Close popup"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12">
                  {/* Left Side - Testimonials Carousel */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col justify-center min-h-fit"
                  >
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xl md:text-3xl font-extrabold text-white mb-2 md:mb-3">
                        What Our Clients Say
                      </h3>
                      <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-accent-purple to-[#1BBCEF] rounded-full"></div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTestimonialIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/[0.05] p-5 md:p-8 rounded-2xl border border-white/10 mb-6 md:mb-8 backdrop-blur-sm hover:border-accent-purple/30 transition-colors duration-300"
                      >
                        {/* Stars */}
                        <div className="flex gap-1 mb-3 md:mb-4 text-accent-purple">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              size={14}
                              className="md:w-4 md:h-4 fill-current"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-4 md:mb-6">
                          "{currentTestimonial.content}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center pt-4 md:pt-6 border-t border-white/10">
                          <ResponsiveImage
                            className="w-12 md:w-14 h-12 md:h-14 rounded-full mr-3 md:mr-4 object-cover border-2 border-accent-purple/30"
                            alt={`${currentTestimonial.name} testimonial`}
                            src={currentTestimonial.avatar}
                            aspectRatio="1"
                            sizes="56px"
                            loading="lazy"
                            decoding="async"
                            width="56"
                            height="56"
                          />

                          <div>
                            <p className="font-bold text-white text-xs md:text-base">
                              {currentTestimonial.name}
                            </p>
                            <p className="text-xs text-accent-purple font-medium">
                              {currentTestimonial.role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between gap-3 md:gap-4">
                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={handlePrevTestimonial}
                          className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft size={18} className="md:w-5 md:h-5" />
                        </button>

                        <button
                          onClick={handleNextTestimonial}
                          className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight size={18} className="md:w-5 md:h-5" />
                        </button>
                      </div>

                      {/* Dots Indicator */}
                      <div className="flex gap-1 md:gap-2 flex-wrap justify-end">
                        {testimonials.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentTestimonialIndex(index)}
                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                              index === currentTestimonialIndex
                                ? "bg-gradient-to-r from-accent-purple to-[#1BBCEF] w-6 md:w-8"
                                : "bg-white/20 w-1.5 md:w-2 hover:bg-white/40"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                            whileHover={{ scale: 1.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Side - Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <ContactForm onSubmitSuccess={handleFormSubmitSuccess} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomeLeadPopup;